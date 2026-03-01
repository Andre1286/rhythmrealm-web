import { NextResponse } from "next/server";

import {
  createSignupRecord,
  SignupPersistenceError,
} from "@/lib/server/airtable";

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

export async function POST(request: Request) {
  let payload: SignupRequestBody | null = null;

  try {
    payload = (await request.json()) as SignupRequestBody;
  } catch {
    return validationError("Invalid request payload.");
  }

  const email = payload?.email?.trim().toLowerCase() ?? "";
  const website = payload?.website?.trim() ?? "";
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
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    const rootCause =
      error instanceof SignupPersistenceError ? error.code : "AIRTABLE_UNKNOWN";
    console.error("Signup submission failed", {
      rootCause,
      details: error instanceof SignupPersistenceError ? error.details : undefined,
      errorMessage: error instanceof Error ? error.message : String(error),
    });
    return NextResponse.json(
      { ok: false, error: "SERVER_ERROR", message: SAFE_SERVER_ERROR_MESSAGE },
      { status: 500 },
    );
  }
}
