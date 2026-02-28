import "server-only";

export type SignupPersistenceErrorCode =
  | "MISSING_ENV"
  | "AIRTABLE_AUTH"
  | "AIRTABLE_CONFIG"
  | "AIRTABLE_FIELD_MISMATCH"
  | "AIRTABLE_VALIDATION"
  | "AIRTABLE_UNKNOWN";

export class SignupPersistenceError extends Error {
  constructor(
    public readonly code: SignupPersistenceErrorCode,
    message: string,
    public readonly details?: {
      statusCode?: number;
      airtableType?: string;
      airtableMessage?: string;
      missingEnv?: string;
    },
  ) {
    super(message);
    this.name = "SignupPersistenceError";
  }
}

const UTM_FIELD_MAP: Record<string, string> = {
  utm_source: "UTM Source",
  utm_medium: "UTM Medium",
  utm_campaign: "UTM Campaign",
  utm_term: "UTM Term",
  utm_content: "UTM Content",
};

const requireEnv = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new SignupPersistenceError(
      "MISSING_ENV",
      `Missing required env var: ${name}`,
      { missingEnv: name },
    );
  }
  return value;
};

const parseAirtableError = (rawBody: string): {
  airtableType?: string;
  airtableMessage?: string;
} => {
  try {
    const parsed = JSON.parse(rawBody) as {
      error?: {
        type?: string;
        message?: string;
      };
    };
    return {
      airtableType: parsed.error?.type,
      airtableMessage: parsed.error?.message,
    };
  } catch {
    return {};
  }
};

const classifyAirtableFailure = (
  statusCode: number,
  airtableType?: string,
  airtableMessage?: string,
): SignupPersistenceErrorCode => {
  const signal = `${airtableType ?? ""} ${airtableMessage ?? ""}`.toLowerCase();

  if (
    signal.includes("unknown field name") ||
    signal.includes("field") ||
    signal.includes("column")
  ) {
    return "AIRTABLE_FIELD_MISMATCH";
  }

  if (
    signal.includes("model_not_found") ||
    signal.includes("model not found") ||
    signal.includes("table")
  ) {
    return "AIRTABLE_CONFIG";
  }

  if (statusCode === 401 || statusCode === 403) {
    return "AIRTABLE_AUTH";
  }

  if (statusCode === 404) {
    return "AIRTABLE_CONFIG";
  }

  if (statusCode === 422) {
    return "AIRTABLE_VALIDATION";
  }

  if (statusCode >= 500) {
    return "AIRTABLE_UNKNOWN";
  }

  return "AIRTABLE_UNKNOWN";
};

export type SignupRecordInput = {
  email: string;
  sourceUrl?: string | null;
  utm?: Record<string, string | undefined | null>;
  userAgent?: string | null;
};

export const createSignupRecord = async (
  input: SignupRecordInput,
): Promise<void> => {
  const apiKey = requireEnv("AIRTABLE_API_KEY");
  const baseId = requireEnv("AIRTABLE_BASE_ID");
  const tableName = requireEnv("AIRTABLE_TABLE_NAME");

  const fields: Record<string, string> = {
    Email: input.email,
  };

  if (input.sourceUrl) {
    fields["Source URL"] = input.sourceUrl;
  }

  if (input.userAgent) {
    fields["User Agent"] = input.userAgent;
  }

  if (input.utm) {
    Object.entries(input.utm).forEach(([key, value]) => {
      if (!value) return;
      const fieldName = UTM_FIELD_MAP[key];
      if (fieldName) {
        fields[fieldName] = value;
      }
    });
  }

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [{ fields }],
        }),
      },
    );

    if (!response.ok) {
      const rawBody = await response.text();
      const { airtableType, airtableMessage } = parseAirtableError(rawBody);
      throw new SignupPersistenceError(
        classifyAirtableFailure(response.status, airtableType, airtableMessage),
        "Airtable request failed while saving signup.",
        {
          statusCode: response.status,
          airtableType,
          airtableMessage,
        },
      );
    }
  } catch (error) {
    if (error instanceof SignupPersistenceError) {
      throw error;
    }
    throw new SignupPersistenceError(
      "AIRTABLE_UNKNOWN",
      "Unexpected Airtable error while saving signup.",
    );
  }
};
