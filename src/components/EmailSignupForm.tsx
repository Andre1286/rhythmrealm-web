"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { track } from "@vercel/analytics";
import {
  reportSignupCompletion,
  SIGNUP_ERROR_MESSAGE,
  SIGNUP_SUCCESS_MESSAGE,
} from "@/lib/signup-feedback";

type EmailSignupFormProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
};

export default function EmailSignupForm({
  title = "Join the Rhythm Realm Insider List",
  description = "Sign up for email updates from Andre Washington about Rhythm Realm music and the stories behind it.",
  buttonLabel = "Join the Insider List",
}: EmailSignupFormProps) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const [startedAt] = useState(() => Date.now());
  const inputId = useId();
  const submitting = useRef(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submitting.current) {
      return;
    }

    submitting.current = true;
    setStatus("loading");
    setInvalidEmail(false);
    setMessage("");

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
        }),
      });

      const payload = (await response.json()) as { ok?: boolean; message?: unknown } | null;

      if (!response.ok || payload?.ok !== true) {
        setStatus("error");
        const emailError = payload?.message === "Please enter a valid email address.";
        setInvalidEmail(emailError);
        setMessage(emailError ? "Please enter a valid email address." : SIGNUP_ERROR_MESSAGE);
        return;
      }

      setStatus("success");
      setMessage(SIGNUP_SUCCESS_MESSAGE);
      setEmail("");
      setWebsite("");
      void reportSignupCompletion(track, window.location.href, document.referrer);
    } catch {
      setStatus("error");
      setMessage(SIGNUP_ERROR_MESSAGE);
    } finally {
      submitting.current = false;
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
      <form onSubmit={handleSubmit} aria-busy={status === "loading"} className="mt-6 flex flex-col gap-3 sm:flex-row">
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-invalid={invalidEmail || undefined}
          aria-describedby={`${inputId}-privacy${status === "error" ? ` ${inputId}-error` : ""}`}
          onInvalid={() => {
            setInvalidEmail(true);
            setStatus("error");
            setMessage("Please enter a valid email address.");
          }}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status !== "loading") {
              setInvalidEmail(false);
              setStatus("idle");
              setMessage("");
            }
          }}
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
      <p role="status" aria-atomic="true" className="mt-3 text-sm text-cyan-200">
        {status === "loading" ? "Submitting your signup…" : status === "success" ? message : ""}
      </p>
      <p id={`${inputId}-error`} role="alert" aria-atomic="true" className="mt-3 text-sm text-red-300">
        {status === "error" ? message : ""}
      </p>
      <p id={`${inputId}-privacy`} className="mt-3 text-xs text-white/65">
        By joining, you’re asking to receive Rhythm Realm emails. Unsubscribe anytime.
      </p>
    </div>
  );
}
