import type { Metadata } from "next";

import EmailSignupForm from "@/components/EmailSignupForm";
import RhythmRealmLink from "@/components/RhythmRealmLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact and Email Signup",
  description:
    "Contact Andre Washington and join the Rhythm Realm email list for music updates.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            Contact
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Reach Andre Washington and stay connected to Rhythm Realm.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/68 sm:text-lg">
            For collaborations, music inquiries, or direct messages, use email.
            Join the Rhythm Realm Insider List for new music, behind-the-song
            stories, videos, lyrics, and exclusive updates from Andre Washington.
          </p>
          <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <div className="text-xs uppercase tracking-[0.18em] text-white/45">
              Direct Email
            </div>
            <RhythmRealmLink
              href="mailto:andredee1217@gmail.com"
              target="_self"
              className="mt-3 inline-flex text-lg font-semibold text-cyan-100 hover:text-white"
            >
              andredee1217@gmail.com
            </RhythmRealmLink>
          </div>
        </div>

        <div className="rounded-lg border border-cyan-200/20 bg-cyan-200/[0.06] p-6">
          <EmailSignupForm />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
