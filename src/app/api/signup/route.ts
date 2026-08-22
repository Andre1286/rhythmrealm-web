import { NextResponse } from "next/server";

import { createSignupRecord } from "@/lib/server/airtable";
import { upsertMailerLiteSubscriber } from "@/lib/server/mailerlite";
import {
  readAndValidateSignupRequest,
  submitSignup,
} from "@/lib/server/signup";

const validationError = (message: string) =>
  NextResponse.json(
    { ok: false, error: "VALIDATION_ERROR", message },
    { status: 400 },
  );

export async function POST(request: Request) {
  const validation = await readAndValidateSignupRequest(request);
  if (!validation.ok) {
    return validationError(validation.message);
  }

  try {
    await submitSignup(validation.signup, {
      addToMailerLite: upsertMailerLiteSubscriber,
      saveToAirtable: createSignupRecord,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    const providerError = error as {
      provider?: unknown;
      status?: unknown;
      requestId?: unknown;
    };
    console.error("Signup submission failed", {
      provider:
        typeof providerError.provider === "string"
          ? providerError.provider
          : "unknown",
      status:
        typeof providerError.status === "number"
          ? providerError.status
          : undefined,
      requestId:
        typeof providerError.requestId === "string"
          ? providerError.requestId
          : undefined,
    });
    return NextResponse.json(
      {
        ok: false,
        error: "SERVER_ERROR",
        message: "Unable to sign up right now. Please try again.",
      },
      { status: 500 },
    );
  }
}
