import "server-only";

const requireEnv = (name: string): string => {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new AirtableError(`Missing required env var: ${name}`);
  }
  return value;
};

export class AirtableError extends Error {
  readonly provider = "airtable";
  readonly status?: number;
  readonly requestId?: string;

  constructor(
    message: string,
    status?: number,
    requestId?: string,
  ) {
    super(message);
    this.name = "AirtableError";
    this.status = status;
    this.requestId = requestId;
  }
}

export type SignupRecordInput = {
  email: string;
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

  let response: Response;
  try {
    response = await fetch(
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
  } catch {
    throw new AirtableError("Airtable signup record creation failed");
  }

  if (!response.ok) {
    throw new AirtableError(
      "Airtable signup record creation failed",
      response.status,
      response.headers.get("x-request-id") ?? undefined,
    );
  }
};
