import { NextResponse } from "next/server";

import { createSignupRecord } from "@/lib/server/airtable";

const MIN_ELAPSED_MS = 1200;
const SAFE_SERVER_ERROR_MESSAGE =
  "Signup is temporarily unavailable. Please try again.";

type SignupRequestBody = {
  email?: string;
  website?: string;
  startedAt?: number | string;
  sourceUrl?: string;
  utm?: Record<string, string | undefined | null>;
};

const isValidEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const validationError = (message: string) =>
  NextResponse.json(
    { ok: false, error: "VALIDATION_ERROR", message },
    { status: 400 },
  );

const classifySignupError = (
  error: unknown,
): "MISSING_ENV" | "AIRTABLE_4XX" | "AIRTABLE_5XX" | "UNKNOWN" => {
  if (!(error instanceof Error)) {
    return "UNKNOWN";
  }

  if (error.message.includes("Missing required env var:")) {
    return "MISSING_ENV";
  }

  const airtableStatusMatch = error.message.match(/Airtable request failed:\s*(\d{3})/);
  if (!airtableStatusMatch) {
    return "UNKNOWN";
  }

  const statusCode = Number.parseInt(airtableStatusMatch[1], 10);
  if (statusCode >= 400 && statusCode < 500) {
    return "AIRTABLE_4XX";
  }
  if (statusCode >= 500) {
    return "AIRTABLE_5XX";
  }

  return "UNKNOWN";
};

export async function POST(request: Request) {
  let payload: SignupRequestBody | null = null;

  try {
    payload = (await request.json()) as SignupRequestBody;
  } catch {
    return validationError("Invalid request payload.");
  }

  const email = payload?.email?.trim().toLowerCase() ?? "";
  const website = payload?.website?.trim() ?? "";
  const sourceUrl = payload?.sourceUrl?.trim() ?? "";
  const startedAtValue = payload?.startedAt;
  const startedAt =
    typeof startedAtValue === "string"
      ? Number.parseInt(startedAtValue, 10)
      : startedAtValue;

  if (!email || !isValidEmail(email)) {
    return validationError("Please enter a valid email address.");
  }

  if (website) {
    return validationError("Invalid submission.");
  }

  if (!Number.isFinite(startedAt)) {
    return validationError("Invalid submission.");
  }

  const elapsedMs = Date.now() - Number(startedAt);
  if (elapsedMs < MIN_ELAPSED_MS) {
    return validationError("Invalid submission.");
  }

  try {
    await createSignupRecord({
      email,
      sourceUrl: sourceUrl || undefined,
      utm: payload?.utm,
      userAgent: request.headers.get("user-agent"),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    const rootCause = classifySignupError(error);
    console.error("Signup submission failed", {
      rootCause,
      errorMessage: error instanceof Error ? error.message : String(error),
    });
    return NextResponse.json(
      { ok: false, error: "SERVER_ERROR", message: SAFE_SERVER_ERROR_MESSAGE },
      { status: 500 },
    );
  }
}
