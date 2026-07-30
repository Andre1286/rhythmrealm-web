import type { Metadata } from "next";

import MusicTrackCard from "@/components/MusicTrackCard";
import RhythmRealmLink from "@/components/RhythmRealmLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const featuredTracks = [
  {
    id: "coming-over-yesterday",
    duration: "3:23",
    href: "/blog/coming-over-yesterday",
    cover: "/coming-over-yesterday-cover.jpg",
    description:
      "Coming Over Yesterday is a soulful love song about showing up before you\u2019re even asked \u2014 being there with heart, timing, and devotion.",
    cta: "Discover more on RhythmRealm.net \u2014 Thank you for listening.",
    buttonLabel: "Read the Story",
  },
  {
    id: "trying-to-let-you-go",
    href: "/trying-to-let-you-go",
    cover: "/trying-to-let-you-go-cover.png",
    description:
      "A reflective song about the quiet reminders that remain when someone is gone and the difficult work of learning to move forward.",
    buttonLabel: "Open Song Page",
  },
  {
    id: "track-1",
    href: "/do-you-ever-wonder",
    cover: "/do-you-ever-wonder.png",
    description:
      "A reflective pop single about searching for a better way forward when the world feels divided.",
  },
];

export const metadata: Metadata = {
  title: "Music",
  description:
    "Listen to Coming Over Yesterday, Do You Ever Wonder?, and more direct-to-listener releases from Rhythm Realm.",
  alternates: {
    canonical: "/music",
  },
};

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            Music
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Pop music with rhythm, soul, and real emotion.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/68 sm:text-lg">
            Rhythm Realm is the direct music home for Andre Washington. Listen
            here first, then go deeper into the lyrics, story, and creative notes.
          </p>
        </div>

        <div className="mt-12 grid gap-5">
          {featuredTracks.map((track) => (
            <MusicTrackCard key={track.id} {...track} />
          ))}
        </div>

        <div className="mt-8">
          <RhythmRealmLink
            href="/music/more"
            target="_self"
            className="inline-flex rounded-lg bg-cyan-100 px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
          >
            Explore More Music
          </RhythmRealmLink>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
