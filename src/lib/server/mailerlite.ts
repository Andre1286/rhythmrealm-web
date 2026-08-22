import "server-only";

import {
  readMailerLiteConfiguration,
  sendMailerLiteSubscriberUpsert,
  type MailerLiteSubscriberInput,
} from "@/lib/server/mailerlite-api";

export const upsertMailerLiteSubscriber = async (
  input: MailerLiteSubscriberInput,
): Promise<void> => {
  const configuration = readMailerLiteConfiguration(process.env);
  await sendMailerLiteSubscriberUpsert(input, configuration);
};
