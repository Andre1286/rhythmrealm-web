import "server-only";

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
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
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
    const errorText = await response.text();
    throw new Error(
      `Airtable request failed: ${response.status} ${errorText}`,
    );
  }
};
