import type { Metadata } from "next";

import RhythmRealmLink from "@/components/RhythmRealmLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Behind the Music | Rhythm Realm",
  description:
    "Explore the stories, creative process, and emotional ideas behind Andre Washington's Rhythm Realm music.",
  alternates: {
    canonical: "/behind-the-music",
  },
};

const notes = [
  {
    title: "Song First",
    text: "Every page starts with the song: melody, rhythm, feeling, and the reason the idea needed to become music.",
  },
  {
    title: "Direct Connection",
    text: "Rhythm Realm is built around listeners coming straight to the source for music, stories, videos, and updates.",
  },
  {
    title: "Real Emotion",
    text: "The site should feel cinematic and modern, but the center stays personal: songs that carry reflection, hope, and heart.",
  },
];

export default function BehindTheMusicPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            Behind the Music
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            The story, process, and feeling behind Rhythm Realm.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/68 sm:text-lg">
            Behind the Music is where Andre Washington can share the ideas that
            surround each release: what sparked the song, what it means, and how
            the sound came together.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {notes.map((note) => (
            <article
              key={note.title}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
            >
              <h2 className="text-xl font-semibold">{note.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/68">{note.text}</p>
            </article>
          ))}
        </div>

        <section className="mt-14 border-t border-white/10 pt-10">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              Featured Story
            </div>
            <h2 className="mt-3 text-3xl font-semibold">Do You Ever Wonder?</h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              The first song page goes deeper into lyrics, video, and story. It
              sets the pattern for future releases: listen first, then understand
              the emotion and meaning behind the track.
            </p>
            <RhythmRealmLink
              href="/do-you-ever-wonder"
              target="_self"
              className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100"
            >
              Read the Song Story
            </RhythmRealmLink>
          </div>
        </section>
      </section>

      <SiteFooter />
    </main>
  );
}
