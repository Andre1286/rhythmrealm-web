"use client";

import { Analytics } from "@vercel/analytics/next";
import { sanitizeSignupEvent } from "@/lib/signup-feedback";

export default function SiteAnalytics() {
  return <Analytics beforeSend={sanitizeSignupEvent} />;
}
