import type { Metadata } from "next";
import Image from "next/image";

import RhythmRealmLink from "@/components/RhythmRealmLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const tracks = [
  {
    title: "Do You Ever Wonder?",
    artist: "Andre Washington",
    href: "/do-you-ever-wonder",
    audio: "/audio/do-you-ever-wonder.mp3",
    cover: "/do-you-ever-wonder.png",
    description:
      "A reflective pop single about searching for a better way forward when the world feels divided.",
  },
  {
    title: "If Only for the Love",
    artist: "Andre Washington",
    href: "/contact",
    audio: "/audio/if only for the love. By Andre Washington.mp3",
    cover: "/rhythm-realm-logo.png",
    description:
      "A Rhythm Realm track from Andre Washington with heart, melody, and direct-to-listener energy.",
  },
];

export const metadata: Metadata = {
  title: "Music",
  description:
    "Listen to music from Andre Washington on Rhythm Realm, including Do You Ever Wonder? and more direct-to-listener releases.",
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
          {tracks.map((track) => (
            <article
              key={track.title}
              className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.04] p-5 md:grid-cols-[144px_minmax(0,1fr)] md:items-center"
            >
              <Image
                src={track.cover}
                alt={`${track.title} artwork`}
                width={240}
                height={240}
                className="aspect-square w-full max-w-36 rounded-lg border border-white/10 object-cover"
              />
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-white/45">
                  {track.artist}
                </div>
                <h2 className="mt-2 text-2xl font-semibold">{track.title}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/68 sm:text-base">
                  {track.description}
                </p>
                <audio
                  controls
                  controlsList="nodownload noplaybackrate"
                  src={track.audio}
                  className="mt-5 w-full max-w-xl"
                />
                <div className="mt-5">
                  <RhythmRealmLink
                    href={track.href}
                    target="_self"
                    className="inline-flex rounded-lg border border-white/18 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-black"
                  >
                    {track.href === "/do-you-ever-wonder" ? "Open Song Page" : "Ask for Updates"}
                  </RhythmRealmLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
