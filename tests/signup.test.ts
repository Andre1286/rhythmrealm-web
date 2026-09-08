import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import ts from "typescript";
import { NextResponse } from "next/server.js";
import { sendMailerLiteSubscriberUpsert } from "../src/lib/server/mailerlite-api.ts";
import { reportSignupCompletion, sanitizeSignupEvent, signupCompletionContext } from "../src/lib/signup-feedback.ts";

import {
  MAX_SIGNUP_BODY_BYTES,
  readAndValidateSignupRequest,
  submitSignup,
  validateSignupPayload,
} from "../src/lib/server/signup.ts";

const now = 2_000_000;

test("actual signup route uses MailerLite alone and returns safe success/error responses", async (t) => {
  // Compile the actual route with the existing TypeScript dependency. Resolve
  // only its expected imports; any reintroduced storage dependency fails closed.
  const source = readFileSync(new URL("../src/app/api/signup/route.ts", import.meta.url), "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  let providerStatus = 201;
  const providerCalls: unknown[] = [];
  const externalFetch = t.mock.method(globalThis, "fetch", async () => { throw new Error("Unexpected external request"); });
  t.mock.method(console, "error", () => {});
  const imports: Record<string, unknown> = {
    "next/server": { NextResponse },
    "@/lib/server/signup": { readAndValidateSignupRequest, submitSignup },
    "@/lib/server/mailerlite": {
      upsertMailerLiteSubscriber: async (signup: { email: string }) => {
        await sendMailerLiteSubscriberUpsert(signup, {
          apiKey: "test-key", groupId: "test-group",
          fetchImplementation: async (url, init) => {
            assert.equal(url, "https://connect.mailerlite.com/api/subscribers");
            providerCalls.push(JSON.parse(String(init?.body)));
            return new Response(JSON.stringify({ message: "private listener@example.com detail" }), { status: providerStatus });
          },
        });
      },
    },
  };
  const route = {} as { POST: (request: Request) => Promise<Response> };
  new Function("require", "exports", compiled)((name: string) => {
    assert.ok(Object.hasOwn(imports, name), `Unexpected signup dependency: ${name}`);
    return imports[name];
  }, route);
  const request = (overrides = {}) => new Request("https://www.rhythmrealm.net/api/signup", {
    method: "POST", body: JSON.stringify({ email: "listener@example.com", website: "", startedAt: Date.now() - 2_000, ...overrides }),
  });
  for (const status of [201, 200]) {
    providerStatus = status;
    const response = await route.POST(request());
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { ok: true });
  }
  assert.deepEqual(providerCalls, [
    { email: "listener@example.com", groups: ["test-group"] },
    { email: "listener@example.com", groups: ["test-group"] },
  ]);
  providerStatus = 503;
  const failure = await route.POST(request());
  assert.equal(failure.status, 500);
  assert.deepEqual(await failure.json(), { ok: false, error: "SERVER_ERROR", message: "Unable to sign up right now. Please try again." });
  for (const invalid of [{ email: "invalid" }, { website: "spam" }, { startedAt: Date.now() }]) {
    const response = await route.POST(request(invalid));
    assert.equal(response.status, 400);
  }
  assert.equal(providerCalls.length, 3);
  assert.equal(externalFetch.mock.callCount(), 0);
});

test("removing unused URL and UTM request fields preserves validated provider input", () => {
  const payload = { email: "listener@example.com", website: "", startedAt: now - 2_000 };
  assert.deepEqual(validateSignupPayload({ ...payload,
    sourceUrl: "https://www.rhythmrealm.net/?utm_source=campaign",
    utm: { utm_source: "campaign", utm_medium: "email", utm_campaign: "music" },
  }, now), validateSignupPayload(payload, now));
});

test("normal signup is normalized and sent only to MailerLite", async () => {
  const validation = validateSignupPayload(
    { email: "  Listener@Example.com ", website: "", startedAt: now - 2_000 },
    now,
  );

  assert.deepEqual(validation, {
    ok: true,
    signup: { email: "listener@example.com" },
  });

  if (!validation.ok) {
    assert.fail("Expected signup payload to be valid");
  }

  const calls: string[] = [];
  await submitSignup(validation.signup, {
    addToMailerLite: async () => {
      calls.push("mailerlite");
    },
  });

  assert.deepEqual(calls, ["mailerlite"]);
});

test("invalid and empty email submissions are rejected", () => {
  assert.deepEqual(
    validateSignupPayload({ email: "not-an-email", startedAt: now - 2_000 }, now),
    { ok: false, message: "Please enter a valid email address." },
  );
  assert.deepEqual(
    validateSignupPayload({ email: "", startedAt: now - 2_000 }, now),
    { ok: false, message: "Please enter a valid email address." },
  );
  assert.deepEqual(
    validateSignupPayload({ email: 42, startedAt: now - 2_000 }, now),
    { ok: false, message: "Please enter a valid email address." },
  );
});

test("malformed, bot-like, and oversized requests are rejected", async () => {
  assert.deepEqual(
    validateSignupPayload(
      { email: "listener@example.com", website: "spam.example", startedAt: now - 2_000 },
      now,
    ),
    { ok: false, message: "Invalid submission." },
  );
  assert.deepEqual(
    validateSignupPayload(
      { email: "listener@example.com", website: "", startedAt: now - 100 },
      now,
    ),
    { ok: false, message: "Invalid submission." },
  );

  const malformed = await readAndValidateSignupRequest(
    new Request("https://rhythmrealm.net/api/signup", {
      method: "POST",
      body: "{not-json",
    }),
    now,
  );
  assert.deepEqual(malformed, { ok: false, message: "Invalid request payload." });

  const oversized = await readAndValidateSignupRequest(
    new Request("https://rhythmrealm.net/api/signup", {
      method: "POST",
      body: "x".repeat(MAX_SIGNUP_BODY_BYTES + 1),
    }),
    now,
  );
  assert.deepEqual(oversized, { ok: false, message: "Invalid request payload." });
});

test("an existing MailerLite subscriber remains successful", async () => {
  const calls: string[] = [];
  await submitSignup(
    { email: "existing@example.com" },
    {
      addToMailerLite: async () => {
        calls.push("mailerlite-upsert-existing");
      },
    },
  );

  assert.deepEqual(calls, ["mailerlite-upsert-existing"]);
});

test("a MailerLite failure rejects signup", async () => {

  await assert.rejects(
    submitSignup(
      { email: "listener@example.com" },
      {
        addToMailerLite: async () => {
          throw new Error("simulated MailerLite outage");
        },
      },
    ),
    /simulated MailerLite outage/,
  );
});


test("completion preserves recognized content context without raw URLs or query data", async () => {
  const events: unknown[] = [];
  await reportSignupCompletion((name, data) => { events.push({ name, data }); },
    "https://www.rhythmrealm.net/?utm_campaign=listener%40example.com#signup",
    "https://www.rhythmrealm.net/blog/coming-over-yesterday?email=listener@example.com");
  assert.deepEqual(events, [{ name: "insiders_signup_completed", data: {
    signup_page: "/", referring_page: "/blog/coming-over-yesterday",
  } }]);
  assert.deepEqual(signupCompletionContext("https://www.rhythmrealm.net/contact", "https://www.rhythmrealm.net/comics/the-artist-nobody-heard/issue-3"), {
    signup_page: "/contact", referring_page: "/comics/the-artist-nobody-heard/issue-3",
  });
});

test("completion rejects unknown paths and external or missing referrers", () => {
  for (const referrer of ["", "not a URL", "https://external.example/contact", "https://www.rhythmrealm.net/listener@example.com"]) {
    assert.deepEqual(signupCompletionContext("https://www.rhythmrealm.net/listener@example.com", referrer), {
      signup_page: "other", referring_page: "unknown",
    });
  }
});

test("custom event implicit URL is stripped of query, fragment, credentials, and unknown paths", () => {
  assert.deepEqual(sanitizeSignupEvent({ type: "event", url: "https://user:secret@www.rhythmrealm.net/contact?email=listener@example.com#private" }), {
    type: "event", url: "https://www.rhythmrealm.net/contact",
  });
  assert.deepEqual(sanitizeSignupEvent({ type: "event", url: "https://www.rhythmrealm.net/listener@example.com" }), {
    type: "event", url: "https://www.rhythmrealm.net/",
  });
  assert.equal(sanitizeSignupEvent({ type: "event", url: "invalid" }), null);
  const pageview = { type: "pageview", url: "https://www.rhythmrealm.net/?utm_source=music" };
  assert.equal(sanitizeSignupEvent(pageview), pageview);
});

test("unavailable or throwing analytics cannot reject a successful signup", async () => {
  await assert.doesNotReject(reportSignupCompletion(() => { throw new Error("blocked analytics"); }, "https://www.rhythmrealm.net/", ""));
  await assert.doesNotReject(reportSignupCompletion(async () => { throw new Error("analytics failure"); }, "https://www.rhythmrealm.net/", ""));
});
