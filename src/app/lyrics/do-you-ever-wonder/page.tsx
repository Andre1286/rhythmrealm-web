import type { Metadata } from "next";

import EmailSignupForm from "@/components/EmailSignupForm";
import RhythmRealmLink from "@/components/RhythmRealmLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { absoluteUrl } from "@/lib/seo";

const songTitle = "Do You Ever Wonder?";

export const metadata: Metadata = {
  title: {
    absolute: "Do You Ever Wonder? Lyrics | Andre Washington",
  },
  description:
    "Read the lyrics for Do You Ever Wonder? by Andre Washington and listen to the official Rhythm Realm song on RhythmRealm.net.",
  alternates: {
    canonical: "/lyrics/do-you-ever-wonder",
  },
  openGraph: {
    title: "Do You Ever Wonder? Lyrics | Andre Washington",
    description:
      "Read the lyrics for Do You Ever Wonder? by Andre Washington and listen on RhythmRealm.net.",
    url: absoluteUrl("/lyrics/do-you-ever-wonder"),
  },
};

const lyricSections = [
  {
    label: "Verse 1",
    lines: [
      "Do you ever wonder why we're here in this life?",
      "They make it very clear.",
      "You're either on the right or on the left.",
      "Any way you wind up out of breath.",
    ],
  },
  {
    label: "Chorus",
    lines: [
      "The way things go, it's all so cold,",
      "and there's no love anymore.",
      "We've got to find a better way",
      "for us to see a brighter day.",
    ],
  },
  {
    label: "Verse 2",
    lines: [
      "If you have the time, I'd like to say,",
      "the way to solve our problems is to pray.",
      "This world we live in is in disarray.",
      "Sit back, relax, and just press play.",
    ],
  },
  {
    label: "Verse 3",
    lines: [
      "Do you ever wonder why we're here?",
      "In this life, they make it very clear.",
      "You're either on the right or on the left.",
      "Anyway, you wind up out of breath.",
    ],
  },
];

export default function DoYouEverWonderLyricsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            Lyrics
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {songTitle} Lyrics
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/68 sm:text-lg">
            Read the lyrics for Andre Washington&apos;s Rhythm Realm song, then
            return to the song page to listen, watch the video, and explore the
            story behind the release.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <RhythmRealmLink
              href="/do-you-ever-wonder"
              target="_self"
              className="rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-cyan-100"
            >
              Listen to the Song
            </RhythmRealmLink>
            <RhythmRealmLink
              href="#signup"
              target="_self"
              className="rounded-lg border border-cyan-200/30 px-5 py-3 text-center text-sm font-semibold text-cyan-100 transition hover:bg-cyan-100 hover:text-black"
            >
              Join Updates
            </RhythmRealmLink>
          </div>
        </div>

        <aside className="rounded-lg border border-cyan-200/20 bg-cyan-200/[0.06] p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
            Song Notes
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/72">
            {songTitle} reflects on division, hope, prayer, and the search for a
            better way forward.
          </p>
          <RhythmRealmLink
            href="/blog"
            target="_self"
            className="mt-5 inline-flex rounded-lg border border-white/18 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-black"
          >
            Read the Blog
          </RhythmRealmLink>
        </aside>
      </section>

      <section className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto w-full max-w-4xl px-6 py-14">
          <div className="space-y-7 text-base leading-relaxed text-white/78">
            {lyricSections.map((section) => (
              <section key={section.label}>
                <h2 className="text-lg font-semibold text-white">[{section.label}]</h2>
                <p className="mt-3">
                  {section.lines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-14">
        <EmailSignupForm
          title="Get Rhythm Realm updates"
          description="Join the list for song stories, release updates, and new music from Andre Washington."
          buttonLabel="Join Updates"
        />
      </section>

      <SiteFooter />
    </main>
  );
}
