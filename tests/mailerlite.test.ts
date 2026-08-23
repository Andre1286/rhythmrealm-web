import assert from "node:assert/strict";
import test from "node:test";

import {
  MailerLiteError,
  readMailerLiteConfiguration,
  sendMailerLiteSubscriberUpsert,
} from "../src/lib/server/mailerlite-api.ts";

test("missing preview configuration is identified without exposing values", () => {
  assert.throws(
    () => readMailerLiteConfiguration({ MAILERLITE_GROUP_ID: "group-id" }),
    (error: unknown) => {
      assert.ok(error instanceof MailerLiteError);
      assert.equal(error.category, "configuration");
      assert.equal(error.configKey, "MAILERLITE_API_KEY");
      return true;
    },
  );
});

test("subscriber upsert keeps credentials server-side and assigns the configured group", async () => {
  let capturedUrl = "";
  let capturedInit: RequestInit | undefined;
  const fetchImplementation: typeof fetch = async (input, init) => {
    capturedUrl = String(input);
    capturedInit = init;
    return new Response(JSON.stringify({ data: { id: "subscriber-id" } }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  };

  await sendMailerLiteSubscriberUpsert(
    {
      email: "listener@example.com",
      firstName: " Andre ",
    },
    {
      apiKey: "test-api-key",
      groupId: "test-group-id",
      fetchImplementation,
    },
  );

  assert.equal(capturedUrl, "https://connect.mailerlite.com/api/subscribers");
  assert.equal(capturedInit?.method, "POST");
  const headers = new Headers(capturedInit?.headers);
  assert.equal(headers.get("authorization"), "Bearer test-api-key");
  assert.deepEqual(JSON.parse(String(capturedInit?.body)), {
    email: "listener@example.com",
    groups: ["test-group-id"],
    fields: { name: "Andre" },
  });
});

test("provider failures expose status and request id without response body or email", async () => {
  const fetchImplementation: typeof fetch = async () =>
    new Response('{"message":"failure for listener@example.com"}', {
      status: 503,
      headers: { "x-request-id": "request-123" },
    });

  await assert.rejects(
    sendMailerLiteSubscriberUpsert(
      { email: "listener@example.com" },
      {
        apiKey: "test-api-key",
        groupId: "test-group-id",
        fetchImplementation,
      },
    ),
    (error: unknown) => {
      assert.ok(error instanceof MailerLiteError);
      assert.equal(error.category, "upstream");
      assert.equal(error.status, 503);
      assert.equal(error.requestId, "request-123");
      assert.equal(error.message.includes("listener@example.com"), false);
      return true;
    },
  );
});

test("network failures are classified without leaking transport details", async () => {
  const fetchImplementation: typeof fetch = async () => {
    const transportError = new TypeError(
      "request contained listener@example.com and test-api-key",
    );
    Object.assign(transportError, { cause: { code: "ENOTFOUND" } });
    throw transportError;
  };

  await assert.rejects(
    sendMailerLiteSubscriberUpsert(
      { email: "listener@example.com" },
      {
        apiKey: "test-api-key",
        groupId: "test-group-id",
        fetchImplementation,
      },
    ),
    (error: unknown) => {
      assert.ok(error instanceof MailerLiteError);
      assert.equal(error.provider, "mailerlite");
      assert.equal(error.category, "transport");
      assert.equal(error.transportCode, "ENOTFOUND");
      assert.equal(error.transportType, "TypeError");
      assert.equal(error.message.includes("listener@example.com"), false);
      assert.equal(error.message.includes("test-api-key"), false);
      return true;
    },
  );
});

test("authentication failures are distinguished without reading response details", async () => {
  const fetchImplementation: typeof fetch = async () =>
    new Response('{"message":"Unauthenticated."}', { status: 401 });

  await assert.rejects(
    sendMailerLiteSubscriberUpsert(
      { email: "listener@example.com" },
      {
        apiKey: "invalid-test-key",
        groupId: "test-group-id",
        fetchImplementation,
      },
    ),
    (error: unknown) => {
      assert.ok(error instanceof MailerLiteError);
      assert.equal(error.category, "authentication");
      assert.equal(error.status, 401);
      assert.equal(error.validationFields, undefined);
      return true;
    },
  );
});

test("invalid group ids are distinguished from other validation errors", async () => {
  const fetchImplementation: typeof fetch = async () =>
    new Response(
      JSON.stringify({
        message: "failure for listener@example.com",
        errors: { "groups.0": ["The selected group is invalid."] },
      }),
      {
        status: 422,
        headers: { "Content-Type": "application/json" },
      },
    );

  await assert.rejects(
    sendMailerLiteSubscriberUpsert(
      { email: "listener@example.com" },
      {
        apiKey: "test-api-key",
        groupId: "invalid-group-id",
        fetchImplementation,
      },
    ),
    (error: unknown) => {
      assert.ok(error instanceof MailerLiteError);
      assert.equal(error.category, "invalid_group");
      assert.equal(error.status, 422);
      assert.deepEqual(error.validationFields, ["groups.0"]);
      assert.equal(error.message.includes("listener@example.com"), false);
      return true;
    },
  );
});

test("other MailerLite validation errors expose field names only", async () => {
  const fetchImplementation: typeof fetch = async () =>
    new Response(
      JSON.stringify({
        message: "failure for listener@example.com",
        errors: { email: ["Email listener@example.com is invalid."] },
      }),
      {
        status: 422,
        headers: { "Content-Type": "application/json" },
      },
    );

  await assert.rejects(
    sendMailerLiteSubscriberUpsert(
      { email: "listener@example.com" },
      {
        apiKey: "test-api-key",
        groupId: "test-group-id",
        fetchImplementation,
      },
    ),
    (error: unknown) => {
      assert.ok(error instanceof MailerLiteError);
      assert.equal(error.category, "validation");
      assert.equal(error.status, 422);
      assert.deepEqual(error.validationFields, ["email"]);
      assert.equal(error.message.includes("listener@example.com"), false);
      return true;
    },
  );
});
