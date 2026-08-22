const MIN_ELAPSED_MS = 1200;
export const MAX_SIGNUP_BODY_BYTES = 16_384;

export type SignupRequestBody = {
  email?: unknown;
  website?: unknown;
  startedAt?: unknown;
  sourceUrl?: unknown;
  utm?: unknown;
};

export type ValidatedSignup = {
  email: string;
};

export type SignupValidationResult =
  | { ok: true; signup: ValidatedSignup }
  | { ok: false; message: string };

export type SignupServices = {
  addToMailerLite: (signup: ValidatedSignup) => Promise<void>;
  saveToAirtable: (signup: ValidatedSignup) => Promise<void>;
};

const isValidEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const validateSignupPayload = (
  payload: unknown,
  now = Date.now(),
): SignupValidationResult => {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return { ok: false, message: "Invalid request payload." };
  }

  const body = payload as SignupRequestBody;
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const website = typeof body.website === "string" ? body.website.trim() : "";
  const startedAtValue = body.startedAt;
  const startedAt =
    typeof startedAtValue === "string"
      ? Number.parseInt(startedAtValue, 10)
      : typeof startedAtValue === "number"
        ? startedAtValue
        : Number.NaN;

  if (!email || !isValidEmail(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  if (website || !Number.isFinite(startedAt) || startedAt <= 0) {
    return { ok: false, message: "Invalid submission." };
  }

  const elapsedMs = now - startedAt;
  if (elapsedMs < MIN_ELAPSED_MS) {
    return { ok: false, message: "Invalid submission." };
  }

  return { ok: true, signup: { email } };
};

export const readAndValidateSignupRequest = async (
  request: Request,
  now = Date.now(),
): Promise<SignupValidationResult> => {
  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_SIGNUP_BODY_BYTES) {
    return { ok: false, message: "Invalid request payload." };
  }

  let requestText: string;
  try {
    requestText = await request.text();
  } catch {
    return { ok: false, message: "Invalid request payload." };
  }

  if (!requestText || new TextEncoder().encode(requestText).byteLength > MAX_SIGNUP_BODY_BYTES) {
    return { ok: false, message: "Invalid request payload." };
  }

  let payload: unknown;
  try {
    payload = JSON.parse(requestText) as unknown;
  } catch {
    return { ok: false, message: "Invalid request payload." };
  }

  return validateSignupPayload(payload, now);
};

export const submitSignup = async (
  signup: ValidatedSignup,
  services: SignupServices,
): Promise<void> => {
  await services.addToMailerLite(signup);
  await services.saveToAirtable(signup);
};
