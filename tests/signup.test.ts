import assert from "node:assert/strict";
import test from "node:test";

import {
  MAX_SIGNUP_BODY_BYTES,
  readAndValidateSignupRequest,
  submitSignup,
  validateSignupPayload,
} from "../src/lib/server/signup.ts";

const now = 2_000_000;

test("normal signup is normalized and dual-written in provider order", async () => {
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
    saveToAirtable: async () => {
      calls.push("airtable");
    },
  });

  assert.deepEqual(calls, ["mailerlite", "airtable"]);
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

test("an existing MailerLite subscriber remains a successful dual-write", async () => {
  const calls: string[] = [];
  await submitSignup(
    { email: "existing@example.com" },
    {
      addToMailerLite: async () => {
        calls.push("mailerlite-upsert-existing");
      },
      saveToAirtable: async () => {
        calls.push("airtable");
      },
    },
  );

  assert.deepEqual(calls, ["mailerlite-upsert-existing", "airtable"]);
});

test("a MailerLite failure is returned and prevents the Airtable write", async () => {
  let airtableCalled = false;

  await assert.rejects(
    submitSignup(
      { email: "listener@example.com" },
      {
        addToMailerLite: async () => {
          throw new Error("simulated MailerLite outage");
        },
        saveToAirtable: async () => {
          airtableCalled = true;
        },
      },
    ),
    /simulated MailerLite outage/,
  );
  assert.equal(airtableCalled, false);
});
