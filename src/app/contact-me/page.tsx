import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Andre Washington | Rhythm Realm",
  description:
    "Contact Andre Washington directly for collaborations and music inquiries on RhythmRealm.net.",
};

export default function ContactMePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto w-full max-w-4xl px-6 pb-16 pt-12">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">Contact Me</h1>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <p className="text-base leading-relaxed text-white/80">
            Email:{" "}
            <a
              href="mailto:andredee1217@gmail.com"
              className="font-semibold text-cyan-200 hover:text-cyan-100"
            >
              andredee1217@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
