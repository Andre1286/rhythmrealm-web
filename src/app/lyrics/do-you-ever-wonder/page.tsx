import type { Metadata } from "next";

import EmailSignupForm from "@/components/EmailSignupForm";
import RhythmRealmLink from "@/components/RhythmRealmLink";
import SongNextSteps from "@/components/SongNextSteps";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { absoluteUrl } from "@/lib/seo";

const songTitle = "Do You Ever Wonder?";
const seoTitle = "Do You Ever Wonder Lyrics by Andre Washington | Rhythm Realm";
const seoDescription =
  "Read the official Do You Ever Wonder lyrics by Andre Washington, then listen to the song, watch the video, and explore the meaning on RhythmRealm.net.";
const lyricsPagePath = "/lyrics/do-you-ever-wonder";
const songPagePath = "/do-you-ever-wonder";
const coverImagePath = "/do-you-ever-wonder/cover-art.png";

export const metadata: Metadata = {
  title: {
    absolute: seoTitle,
  },
  description: seoDescription,
  alternates: {
    canonical: lyricsPagePath,
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: absoluteUrl(lyricsPagePath),
    images: [
      {
        url: coverImagePath,
        width: 1200,
        height: 1200,
        alt: "Do You Ever Wonder by Andre Washington cover art",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: [coverImagePath],
  },
};

const faqItems = [
  {
    question: "Who wrote Do You Ever Wonder?",
    answer:
      "Do You Ever Wonder? is an original song by Andre Washington for Rhythm Realm.",
  },
  {
    question: "What is Do You Ever Wonder about?",
    answer:
      "The song reflects on division, hope, prayer, and wanting a better way forward.",
  },
  {
    question: "Where can I read the Do You Ever Wonder lyrics?",
    answer:
      "You can read the official Do You Ever Wonder lyrics on RhythmRealm.net, then open the song page to listen and watch the video.",
  },
];

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
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl(lyricsPagePath)}#webpage`,
        url: absoluteUrl(lyricsPagePath),
        name: seoTitle,
        description: seoDescription,
        inLanguage: "en-US",
        isPartOf: {
          "@type": "WebSite",
          name: "Rhythm Realm",
          url: absoluteUrl("/"),
        },
        about: {
          "@type": "MusicRecording",
          name: songTitle,
          byArtist: {
            "@type": "Person",
            name: "Andre Washington",
          },
        },
      },
      {
        "@type": "MusicRecording",
        name: songTitle,
        url: absoluteUrl(songPagePath),
        image: absoluteUrl(coverImagePath),
        byArtist: {
          "@type": "Person",
          name: "Andre Washington",
        },
        description: seoDescription,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            Official Lyrics
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Do You Ever Wonder Lyrics by Andre Washington
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/68 sm:text-lg">
            Read the official lyrics for Andre Washington&apos;s Rhythm Realm
            song &ldquo;Do You Ever Wonder?&rdquo; Then listen to the track, watch the
            video, and explore the meaning behind the release.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <RhythmRealmLink
              href="/do-you-ever-wonder"
              target="_self"
              className="rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-cyan-100"
            >
              Listen and Watch
            </RhythmRealmLink>
            <RhythmRealmLink
              href="/music"
              target="_self"
              className="rounded-lg border border-white/18 px-5 py-3 text-center text-sm font-semibold transition hover:bg-white hover:text-black"
            >
              More Music
            </RhythmRealmLink>
            <RhythmRealmLink
              href="/about-andre-washington"
              target="_self"
              className="rounded-lg border border-white/18 px-5 py-3 text-center text-sm font-semibold transition hover:bg-white hover:text-black"
            >
              About Andre
            </RhythmRealmLink>
            <RhythmRealmLink
              href="/"
              target="_self"
              className="rounded-lg border border-white/18 px-5 py-3 text-center text-sm font-semibold transition hover:bg-white hover:text-black"
            >
              Rhythm Realm Home
            </RhythmRealmLink>
            <RhythmRealmLink
              href="#signup"
              target="_self"
              className="rounded-lg border border-cyan-200/30 px-5 py-3 text-center text-sm font-semibold text-cyan-100 transition hover:bg-cyan-100 hover:text-black"
            >
              Join the Insider List
            </RhythmRealmLink>
          </div>
        </div>

        <aside className="rounded-lg border border-cyan-200/20 bg-cyan-200/[0.06] p-5 lg:sticky lg:top-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
            Quick Answer
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/72">
            {songTitle} is a reflective pop song by Andre Washington about
            division, hope, prayer, and the search for a better way forward.
          </p>
          <RhythmRealmLink
            href="/do-you-ever-wonder#official-video"
            target="_self"
            className="mt-5 inline-flex rounded-lg border border-white/18 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-black"
          >
            Open Song and Video Page
          </RhythmRealmLink>
        </aside>
      </section>

      <section className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto w-full max-w-4xl px-6 py-14">
          <div className="mb-8 max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
              Lyrics
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Official Do You Ever Wonder Lyrics
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/68">
              The words below are the Rhythm Realm lyrics for &ldquo;Do You Ever
              Wonder?&rdquo; by Andre Washington, including the verses and chorus.
            </p>
          </div>
          <div className="space-y-7 text-base leading-relaxed text-white/78">
            {lyricSections.map((section) => (
              <section key={section.label}>
                <h3 className="text-lg font-semibold text-white">[{section.label}]</h3>
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
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            FAQ
          </div>
          <h2 className="mt-3 text-3xl font-semibold">
            Do You Ever Wonder? FAQ
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {faqItems.map((faq) => (
            <section
              key={faq.question}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
            >
              <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {faq.answer}
              </p>
            </section>
          ))}
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-6 pt-14">
        <SongNextSteps
          lyricsHref="/lyrics/do-you-ever-wonder"
          signupHref="#signup"
        />
      </div>

      <section className="mx-auto w-full max-w-6xl px-6 py-14">
        <EmailSignupForm />
      </section>

      <SiteFooter />
    </main>
  );
}
