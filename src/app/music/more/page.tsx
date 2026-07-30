import type { Metadata } from "next";

import MusicTrackCard from "@/components/MusicTrackCard";
import RhythmRealmLink from "@/components/RhythmRealmLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const moreTracks = [
  {
    id: "track-2",
    href: "/contact",
    cover: "/rhythm-realm-logo.png",
    description:
      "A Rhythm Realm track from Andre Washington with heart, melody, and direct-to-listener energy.",
  },
];

export const metadata: Metadata = {
  title: "More Music",
  description:
    "Explore more direct-to-listener releases from Andre Washington and Rhythm Realm.",
  alternates: {
    canonical: "/music/more",
  },
};

export default function MoreMusicPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            Music
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            More Music
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/68 sm:text-lg">
            Keep listening to more songs from Andre Washington and Rhythm Realm.
          </p>
        </div>

        <div className="mt-12 grid gap-5">
          {moreTracks.map((track) => (
            <MusicTrackCard key={track.id} {...track} />
          ))}
        </div>

        <div className="mt-8">
          <RhythmRealmLink
            href="/music"
            target="_self"
            className="inline-flex rounded-lg border border-white/18 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-black"
          >
            Back to Featured Music
          </RhythmRealmLink>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
