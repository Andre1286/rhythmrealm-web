import type { Metadata } from "next";

import EmailSignupForm from "@/components/EmailSignupForm";
import RhythmRealmLink from "@/components/RhythmRealmLink";
import SongNextSteps from "@/components/SongNextSteps";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { absoluteUrl } from "@/lib/seo";

const songTitle = "Trying to Let You Go";
const artistName = "Andre Washington";
const lyricsPagePath = "/lyrics/trying-to-let-you-go";
const songPagePath = "/trying-to-let-you-go";
const coverImagePath = "/trying-to-let-you-go-cover.png";
const audioPath = "/audio/trying-to-let-you-go-andre-washington.mp3";
const seoTitle =
  "Trying to Let You Go Lyrics by Andre Washington | Rhythm Realm";
const seoDescription =
  "Read the official Trying to Let You Go lyrics by Andre Washington, then listen to the song and explore its story on RhythmRealm.net.";

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
        width: 1254,
        height: 1254,
        alt: "Trying to Let You Go by Andre Washington cover art",
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
    question: "Who performs Trying to Let You Go?",
    answer: "Trying to Let You Go is performed by Andre Washington.",
  },
  {
    question: "What is Trying to Let You Go about?",
    answer:
      "The song reflects on absence, memory, and the difficult process of trying to move forward.",
  },
  {
    question: "Where can I read the Trying to Let You Go lyrics?",
    answer:
      "You can read the official Trying to Let You Go lyrics on RhythmRealm.net and open the song page to listen.",
  },
];

const lyricSections = [
  {
    id: "verse-1",
    label: "Verse 1",
    lines: [
      "I left the light on in the hallway",
      "Like some part of me thought you’d come home",
      "The quiet’s been talking too loudly",
      "Since I learned how to sleep here alone",
    ],
  },
  {
    id: "chorus-1",
    label: "Chorus",
    lines: [
      "I still look for you",
      "In the morning air",
      "Every road I take",
      "Leads me there",
      "",
      "I still reach for you",
      "On your empty side",
      "Trying to let you go",
    ],
  },
  {
    id: "verse-2",
    label: "Verse 2",
    lines: [
      "I kept your picture on the dresser",
      "Like some part of me still needs to know",
      "The mornings have been moving slower",
      "Since I learned how to wake up alone",
    ],
  },
  {
    id: "chorus-2",
    label: "Chorus",
    lines: [
      "I still look for you",
      "In the morning air",
      "Every road I take",
      "Leads me there",
      "",
      "I still reach for you",
      "On your empty side",
      "Trying to let you go",
    ],
  },
  {
    id: "verse-1-reprise",
    label: "Verse 1 Reprise / Breakdown",
    lines: [
      "I left the light on in the hallway",
      "Like some part of me thought you’d come home",
      "The quiet’s been talking too loudly",
      "Since I learned how to sleep here alone",
    ],
  },
];

export default function TryingToLetYouGoLyricsPage() {
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
            name: artistName,
          },
        },
      },
      {
        "@type": "MusicRecording",
        name: songTitle,
        url: absoluteUrl(songPagePath),
        image: absoluteUrl(coverImagePath),
        audio: absoluteUrl(audioPath),
        byArtist: {
          "@type": "Person",
          name: artistName,
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
            Trying to Let You Go Lyrics by Andre Washington
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/68 sm:text-lg">
            Read the official lyrics for Andre Washington&apos;s Rhythm Realm song
            &ldquo;Trying to Let You Go.&rdquo; Then open the song page to listen and
            explore the story behind the music.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <RhythmRealmLink
              href={songPagePath}
              target="_self"
              className="rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-cyan-100"
            >
              Listen to the Song
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
            {songTitle} is a reflective song by {artistName} about absence,
            memory, and the effort to move forward.
          </p>
          <RhythmRealmLink
            href={songPagePath}
            target="_self"
            className="mt-5 inline-flex rounded-lg border border-white/18 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-black"
          >
            Open the Song Page
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
              Official Trying to Let You Go Lyrics
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/68">
              The words below are the Rhythm Realm lyrics for &ldquo;Trying to Let
              You Go&rdquo; by Andre Washington.
            </p>
          </div>
          <div className="space-y-7 text-base leading-relaxed text-white/78">
            {lyricSections.map((section) => (
              <section key={section.id}>
                <h3 className="text-lg font-semibold text-white">
                  [{section.label}]
                </h3>
                <p className="mt-3">
                  {section.lines.map((line, index) => (
                    <span key={`${section.id}-${index}`}>
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
            Trying to Let You Go FAQ
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {faqItems.map((faq) => (
            <section
              key={faq.question}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
            >
              <h3 className="text-lg font-semibold text-white">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {faq.answer}
              </p>
            </section>
          ))}
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-6 pt-14">
        <SongNextSteps lyricsHref={lyricsPagePath} signupHref="#signup" />
      </div>

      <section className="mx-auto w-full max-w-6xl px-6 py-14">
        <EmailSignupForm />
      </section>

      <SiteFooter />
    </main>
  );
}
