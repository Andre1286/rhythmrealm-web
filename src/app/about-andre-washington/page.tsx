import type { Metadata } from "next";
import Image from "next/image";

import RhythmRealmLink from "@/components/RhythmRealmLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "About Andre Washington",
  description:
    "Learn about Andre Washington, the independent recording artist behind Rhythm Realm.",
  alternates: {
    canonical: "/about-andre-washington",
  },
};

export default function AboutAndreWashingtonPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            About Andre Washington
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            A songwriter, artist, and producer building songs from the inside out.
          </h1>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-white/72">
            <p>
              Andre Washington is an independent recording artist creating pop
              music with rhythm and soul. He writes, records, and produces with a
              hands-on approach, shaping each song from the first idea to the final
              mix.
            </p>
            <p>
              Before releasing music as a solo artist, Andre was part of IROC,
              International Rhythm of Composers. That chapter was built on real
              musicianship, collaboration, and a shared belief that songs should
              carry feeling.
            </p>
            <p>
              Rhythm Realm is Andre&apos;s official music home now: a direct place for
              songs, videos, lyrics, stories, and updates without losing the human
              connection behind the music.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <RhythmRealmLink
              href="/music"
              target="_self"
              className="rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-cyan-100"
            >
              Listen to the Music
            </RhythmRealmLink>
            <RhythmRealmLink
              href="/behind-the-music"
              target="_self"
              className="rounded-lg border border-white/18 px-5 py-3 text-center text-sm font-semibold transition hover:bg-white hover:text-black"
            >
              Behind the Music
            </RhythmRealmLink>
          </div>
        </div>

        <Image
          src="/andre-washington.png"
          alt="Andre Washington"
          width={720}
          height={720}
          className="w-full rounded-lg border border-white/10 object-cover shadow-2xl"
          priority
        />
      </section>

      <SiteFooter />
    </main>
  );
}
