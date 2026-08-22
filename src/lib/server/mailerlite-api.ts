const MAILERLITE_SUBSCRIBERS_URL =
  "https://connect.mailerlite.com/api/subscribers";

export class MailerLiteError extends Error {
  readonly provider = "mailerlite";
  readonly status?: number;
  readonly requestId?: string;

  constructor(message: string, status?: number, requestId?: string) {
    super(message);
    this.name = "MailerLiteError";
    this.status = status;
    this.requestId = requestId;
  }
}

export type MailerLiteSubscriberInput = {
  email: string;
  firstName?: string;
};

type MailerLiteApiOptions = {
  apiKey: string;
  groupId: string;
  fetchImplementation?: typeof fetch;
};

export const sendMailerLiteSubscriberUpsert = async (
  input: MailerLiteSubscriberInput,
  options: MailerLiteApiOptions,
): Promise<void> => {
  const firstName = input.firstName?.trim();
  const fetchImplementation = options.fetchImplementation ?? fetch;

  let response: Response;
  try {
    response = await fetchImplementation(MAILERLITE_SUBSCRIBERS_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${options.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: input.email,
        groups: [options.groupId],
        ...(firstName ? { fields: { name: firstName } } : {}),
      }),
    });
  } catch {
    throw new MailerLiteError("MailerLite subscriber upsert failed");
  }

  if (!response.ok) {
    throw new MailerLiteError(
      "MailerLite subscriber upsert failed",
      response.status,
      response.headers.get("x-request-id") ?? undefined,
    );
  }
};
