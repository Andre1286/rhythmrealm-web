import "server-only";

import {
  MailerLiteError,
  sendMailerLiteSubscriberUpsert,
  type MailerLiteSubscriberInput,
} from "@/lib/server/mailerlite-api";

const requireEnv = (name: string): string => {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new MailerLiteError(`Missing required env var: ${name}`);
  }
  return value;
};

export const upsertMailerLiteSubscriber = async (
  input: MailerLiteSubscriberInput,
): Promise<void> => {
  const apiKey = requireEnv("MAILERLITE_API_KEY");
  const groupId = requireEnv("MAILERLITE_GROUP_ID");
  await sendMailerLiteSubscriberUpsert(input, { apiKey, groupId });
};
