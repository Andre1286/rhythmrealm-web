import type { Metadata } from "next";
import Image from "next/image";

import RhythmRealmLink from "@/components/RhythmRealmLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const artistTitle =
  "Andre Washington — Recording Artist & Songwriter | Rhythm Realm";
const artistDescription =
  "Meet Andre Washington, the independent artist, songwriter and producer behind Rhythm Realm. Explore his pop music with rhythm and soul, songs and stories.";
const artistPortrait = {
  url: "https://www.rhythmrealm.net/andre-washington.png",
  width: 1024,
  height: 1024,
  alt: "Portrait of Andre Washington, the recording artist behind Rhythm Realm",
};

export const metadata: Metadata = {
  title: { absolute: artistTitle },
  description: artistDescription,
  alternates: {
    canonical: "/about-andre-washington",
  },
  openGraph: {
    title: artistTitle,
    description: artistDescription,
    url: "https://www.rhythmrealm.net/about-andre-washington",
    siteName: "Rhythm Realm",
    type: "website",
    images: [artistPortrait],
  },
  twitter: {
    card: "summary_large_image",
    title: artistTitle,
    description: artistDescription,
    images: [artistPortrait],
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
            Andre Washington — Recording Artist, Songwriter &amp; Producer
          </h1>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-white/72">
            <p>
              Andre Washington is an independent recording artist creating pop
              music with rhythm and soul. He writes, records, and produces with a
              hands-on approach, shaping each song from the first idea to the final
              mix.
            </p>
            <p>
              <RhythmRealmLink
                href="/do-you-ever-wonder"
                target="_self"
                className="text-cyan-100 underline underline-offset-4 hover:text-white"
              >
                Listen to &ldquo;Do You Ever Wonder?&rdquo; by Andre Washington
              </RhythmRealmLink>
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
          <nav aria-label="Songs and stories" className="mt-7">
            <ul className="space-y-3 text-sm text-cyan-100">
              <li>
                <RhythmRealmLink href="/trying-to-let-you-go" target="_self" className="underline underline-offset-4 hover:text-white">
                  Listen to &ldquo;Trying to Let You Go&rdquo;
                </RhythmRealmLink>
              </li>
              <li>
                <RhythmRealmLink href="/blog/story-behind-do-you-ever-wonder" target="_self" className="underline underline-offset-4 hover:text-white">
                  Read the story behind &ldquo;Do You Ever Wonder?&rdquo;
                </RhythmRealmLink>
              </li>
            </ul>
          </nav>
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

      <section
        aria-labelledby="inside-the-studio"
        className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center"
      >
        <div className="border-t border-white/10 pt-10">
          <h2 id="inside-the-studio" className="text-3xl font-semibold tracking-tight">
            Inside the Studio
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/72">
            Rhythm Realm songs are built hands-on. Andre develops the writing,
            arrangement, recording, production, and mix from his own studio,
            shaping the music from the first idea until the song feels finished.
          </p>
        </div>

        <Image
          src="/images/about/andre-washington-studio.jpg"
          alt="Andre Washington in the Rhythm Realm studio with Ableton Live and a MIDI keyboard"
          width={2736}
          height={3648}
          sizes="(min-width: 1024px) 320px, (max-width: 367px) calc(100vw - 48px), 320px"
          className="mx-auto h-auto w-full max-w-[320px] rounded-lg border border-white/10 lg:-translate-y-4"
        />
      </section>

      <SiteFooter />
    </main>
  );
}
