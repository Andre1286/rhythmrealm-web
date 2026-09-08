export const SIGNUP_SUCCESS_MESSAGE =
  "Thanks — your signup request was accepted. If you already joined, you’re all set.";
export const SIGNUP_ERROR_MESSAGE =
  "We couldn’t confirm your signup. Please try again. If this keeps happening, use the email link on our contact page.";

// Only published, fixed paths may enter completion analytics. Never accept
// arbitrary URLs, query parameters, email addresses, or visitor identifiers.
const signupPages = new Set([
  "/", "/contact", "/do-you-ever-wonder", "/trying-to-let-you-go",
  "/lyrics/do-you-ever-wonder", "/lyrics/trying-to-let-you-go",
]);
const referringPages = new Set([
  ...signupPages, "/music", "/music/more", "/behind-the-music", "/blog",
  "/comics/the-artist-nobody-heard",
  "/comics/the-artist-nobody-heard/issue-1",
  "/comics/the-artist-nobody-heard/issue-2",
  "/comics/the-artist-nobody-heard/issue-3",
  "/blog/coming-over-yesterday",
  "/blog/trying-to-let-you-go-behind-the-song",
  "/blog/story-behind-do-you-ever-wonder",
]);

export function signupCompletionContext(pageUrl: string, referrer: string) {
  const page = new URL(pageUrl);
  let referringPage = "unknown";
  try {
    const previous = new URL(referrer);
    if (previous.origin === page.origin && referringPages.has(previous.pathname)) {
      referringPage = previous.pathname;
    }
  } catch {
    // Referrers may be missing due to browser privacy settings.
  }
  return {
    signup_page: signupPages.has(page.pathname) ? page.pathname : "other",
    referring_page: referringPage,
  };
}

export function sanitizeSignupEvent<T extends { type: string; url: string }>(event: T): T | null {
  if (event.type !== "event") return event;
  try {
    const url = new URL(event.url);
    // Custom events carry a URL implicitly, even when properties are safe.
    return { ...event, url: `${url.origin}${signupPages.has(url.pathname) ? url.pathname : "/"}` };
  } catch {
    return null;
  }
}

export async function reportSignupCompletion(
  track: (name: string, properties: ReturnType<typeof signupCompletionContext>) => void | Promise<void>,
  pageUrl: string,
  referrer: string,
) {
  try {
    await track("insiders_signup_completed", signupCompletionContext(pageUrl, referrer));
  } catch {
    // Analytics must never turn an accepted signup into a visible failure.
  }
}
