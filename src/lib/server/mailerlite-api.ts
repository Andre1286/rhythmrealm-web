const MAILERLITE_SUBSCRIBERS_URL =
  "https://connect.mailerlite.com/api/subscribers";

export type MailerLiteFailureCategory =
  | "configuration"
  | "authentication"
  | "invalid_group"
  | "validation"
  | "rate_limit"
  | "upstream"
  | "transport"
  | "api_error";

type MailerLiteErrorDetails = {
  status?: number;
  requestId?: string;
  configKey?: string;
  validationFields?: string[];
  transportCode?: string;
  transportType?: string;
};

export class MailerLiteError extends Error {
  readonly provider = "mailerlite";
  readonly category: MailerLiteFailureCategory;
  readonly status?: number;
  readonly requestId?: string;
  readonly configKey?: string;
  readonly validationFields?: string[];
  readonly transportCode?: string;
  readonly transportType?: string;

  constructor(
    category: MailerLiteFailureCategory,
    details: MailerLiteErrorDetails = {},
  ) {
    super("MailerLite subscriber upsert failed");
    this.name = "MailerLiteError";
    this.category = category;
    this.status = details.status;
    this.requestId = details.requestId;
    this.configKey = details.configKey;
    this.validationFields = details.validationFields;
    this.transportCode = details.transportCode;
    this.transportType = details.transportType;
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

export type MailerLiteConfiguration = {
  apiKey: string;
  groupId: string;
};

const requireConfigurationValue = (
  environment: Record<string, string | undefined>,
  key: string,
): string => {
  const value = environment[key]?.trim();
  if (!value) {
    throw new MailerLiteError("configuration", { configKey: key });
  }
  return value;
};

export const readMailerLiteConfiguration = (
  environment: Record<string, string | undefined>,
): MailerLiteConfiguration => ({
  apiKey: requireConfigurationValue(environment, "MAILERLITE_API_KEY"),
  groupId: requireConfigurationValue(environment, "MAILERLITE_GROUP_ID"),
});

const sanitizeDiagnosticValue = (value: unknown): string | undefined => {
  if (typeof value !== "string") {
    return undefined;
  }

  const trimmedValue = value.trim();
  return /^[a-zA-Z0-9_.[\]-]{1,80}$/.test(trimmedValue)
    ? trimmedValue
    : undefined;
};

const readTransportDiagnostic = (
  error: unknown,
): Pick<MailerLiteErrorDetails, "transportCode" | "transportType"> => {
  if (!error || typeof error !== "object") {
    return {};
  }

  const transportError = error as {
    name?: unknown;
    code?: unknown;
    cause?: { code?: unknown };
  };

  return {
    transportCode: sanitizeDiagnosticValue(
      transportError.cause?.code ?? transportError.code,
    ),
    transportType: sanitizeDiagnosticValue(transportError.name),
  };
};

const readValidationFields = async (response: Response): Promise<string[]> => {
  if (response.status !== 400 && response.status !== 422) {
    return [];
  }

  try {
    const responsePayload = (await response.json()) as {
      errors?: unknown;
    };
    if (
      !responsePayload.errors ||
      typeof responsePayload.errors !== "object" ||
      Array.isArray(responsePayload.errors)
    ) {
      return [];
    }

    return Object.keys(responsePayload.errors)
      .map(sanitizeDiagnosticValue)
      .filter((field): field is string => Boolean(field))
      .slice(0, 10);
  } catch {
    return [];
  }
};

const classifyHttpFailure = (
  status: number,
  validationFields: string[],
): MailerLiteFailureCategory => {
  if (status === 401 || status === 403) {
    return "authentication";
  }
  if (
    (status === 400 || status === 422) &&
    validationFields.some(
      (field) => field === "groups" || field.startsWith("groups."),
    )
  ) {
    return "invalid_group";
  }
  if (status === 400 || status === 422) {
    return "validation";
  }
  if (status === 429) {
    return "rate_limit";
  }
  if (status >= 500) {
    return "upstream";
  }
  return "api_error";
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
  } catch (error) {
    throw new MailerLiteError("transport", readTransportDiagnostic(error));
  }

  if (!response.ok) {
    const validationFields = await readValidationFields(response);
    throw new MailerLiteError(
      classifyHttpFailure(response.status, validationFields),
      {
        status: response.status,
        requestId: response.headers.get("x-request-id") ?? undefined,
        validationFields:
          validationFields.length > 0 ? validationFields : undefined,
      },
    );
  }
};
