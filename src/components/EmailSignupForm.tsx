"use client";

import { useState, type FormEvent } from "react";

type EmailSignupFormProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
};

export default function EmailSignupForm({
  title = "Join the Rhythm Realm Insider List",
  description = "Join the Rhythm Realm Insider List and get new music, behind-the-song stories, videos, lyrics, and exclusive updates from Andre Washington.",
  buttonLabel = "Get Rhythm Realm updates first",
}: EmailSignupFormProps) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const [startedAt] = useState(() => Date.now());

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "loading") {
      return;
    }

    setStatus("loading");
    setMessage("");

    const urlSearchParams =
      typeof window === "undefined"
        ? new URLSearchParams()
        : new URLSearchParams(window.location.search);
    const utm = Object.fromEntries(
      Array.from(urlSearchParams.entries()).filter(([key]) => key.startsWith("utm_")),
    );

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          website,
          startedAt,
          sourceUrl: typeof window === "undefined" ? "" : window.location.href,
          utm,
        }),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        message?: string;
      };

      if (!response.ok || !payload.ok) {
        setStatus("error");
        setMessage(payload.message ?? "Unable to sign up right now. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("Thanks for joining the Rhythm Realm Insider List.");
      setEmail("");
      setWebsite("");
    } catch {
      setStatus("error");
      setMessage("Unable to sign up right now. Please try again.");
    }
  };

  return (
    <div id="signup" className="scroll-mt-24">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
        Email Signup
      </div>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/68 sm:text-base">
        {description}
      </p>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
        <label htmlFor="email-signup-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-signup-address"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          className="min-h-12 w-full rounded-lg border border-white/18 bg-black/45 px-4 py-3 text-sm text-white placeholder:text-white/45 outline-none transition focus:border-cyan-200 focus:ring-2 focus:ring-cyan-200/25 sm:flex-1"
        />
        <input
          type="text"
          name="website"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="min-h-12 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Submitting..." : buttonLabel}
        </button>
      </form>
      {message ? (
        <p
          className={`mt-3 text-sm ${
            status === "success" ? "text-cyan-200" : "text-red-300"
          }`}
        >
          {message}
        </p>
      ) : null}
      <p className="mt-3 text-xs text-white/45">No spam. Unsubscribe anytime.</p>
    </div>
  );
}
