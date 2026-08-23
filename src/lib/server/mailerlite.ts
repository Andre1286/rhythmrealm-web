import "server-only";

import {
  readMailerLiteConfiguration,
  sendMailerLiteSubscriberUpsert,
  type MailerLiteSubscriberInput,
} from "@/lib/server/mailerlite-api";

export const upsertMailerLiteSubscriber = async (
  input: MailerLiteSubscriberInput,
): Promise<void> => {
  const configuration = readMailerLiteConfiguration({
    MAILERLITE_API_KEY: process.env.MAILERLITE_API_KEY,
    MAILERLITE_GROUP_ID: process.env.MAILERLITE_GROUP_ID,
  });
  await sendMailerLiteSubscriberUpsert(input, configuration);
};
