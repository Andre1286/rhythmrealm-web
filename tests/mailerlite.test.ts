import assert from "node:assert/strict";
import test from "node:test";

import {
  MailerLiteError,
  sendMailerLiteSubscriberUpsert,
} from "../src/lib/server/mailerlite-api.ts";

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
      assert.equal(error.status, 503);
      assert.equal(error.requestId, "request-123");
      assert.equal(error.message.includes("listener@example.com"), false);
      return true;
    },
  );
});

test("network failures are classified without leaking transport details", async () => {
  const fetchImplementation: typeof fetch = async () => {
    throw new Error("request contained listener@example.com and test-api-key");
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
      assert.equal(error.message.includes("listener@example.com"), false);
      assert.equal(error.message.includes("test-api-key"), false);
      return true;
    },
  );
});
