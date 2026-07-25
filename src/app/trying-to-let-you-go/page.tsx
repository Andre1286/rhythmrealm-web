import type { Metadata } from "next";
import Image from "next/image";

import EmailSignupForm from "@/components/EmailSignupForm";
import RhythmRealmLink from "@/components/RhythmRealmLink";
import SongNextSteps from "@/components/SongNextSteps";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { absoluteUrl } from "@/lib/seo";

const songTitle = "Trying to Let You Go";
const artistName = "Andre Washington";
const songPagePath = "/trying-to-let-you-go";
const lyricsPagePath = "/lyrics/trying-to-let-you-go";
const articlePath = "/blog/trying-to-let-you-go-behind-the-song";
const audioPath = "/audio/trying-to-let-you-go-andre-washington.mp3";
const coverImagePath = "/trying-to-let-you-go-cover.png";
const seoTitle =
  "Trying to Let You Go by Andre Washington | Listen & Lyrics";
const seoDescription =
  "Listen to “Trying to Let You Go” by Andre Washington, read the official lyrics, and explore the story behind the song on RhythmRealm.net.";

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
    question: "Where can I listen to Trying to Let You Go?",
    answer:
      "You can listen on RhythmRealm.net, the official music home of Andre Washington.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: seoTitle,
  },
  description: seoDescription,
  alternates: {
    canonical: songPagePath,
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: absoluteUrl(songPagePath),
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

export default function TryingToLetYouGoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
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

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-center">
        <Image
          src={coverImagePath}
          alt="Trying to Let You Go by Andre Washington cover art"
          width={1254}
          height={1254}
          sizes="(max-width: 1024px) 100vw, 360px"
          className="mx-auto aspect-square w-full max-w-[360px] rounded-lg border border-white/10 object-cover shadow-2xl"
          priority
        />
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            Official Song
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Trying to Let You Go
          </h1>
          <p className="mt-2 text-lg text-white/72">{artistName}</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/68 sm:text-lg">
            A reflective song about the quiet reminders that remain when someone
            is gone and the difficult work of learning to move forward.
          </p>
          <audio
            controls
            controlsList="nodownload noplaybackrate"
            preload="metadata"
            src={audioPath}
            className="mt-6 w-full max-w-2xl"
            aria-label={`${songTitle} audio controls`}
          />
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <RhythmRealmLink
              href={lyricsPagePath}
              target="_self"
              className="rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-cyan-100"
            >
              Read Trying to Let You Go Lyrics
            </RhythmRealmLink>
            <RhythmRealmLink
              href={articlePath}
              target="_self"
              className="rounded-lg border border-white/18 px-5 py-3 text-center text-sm font-semibold transition hover:bg-white hover:text-black"
            >
              Story Behind the Song
            </RhythmRealmLink>
            <RhythmRealmLink
              href="/music"
              target="_self"
              className="rounded-lg border border-cyan-200/30 px-5 py-3 text-center text-sm font-semibold text-cyan-100 transition hover:bg-cyan-100 hover:text-black"
            >
              More Music
            </RhythmRealmLink>
          </div>
        </div>
      </section>

      <section id="lyrics" className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              Lyrics
            </div>
            <h2 className="mt-3 text-3xl font-semibold">
              Trying to Let You Go Lyrics
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/62 sm:text-base">
              For the focused lyrics page, read the official{" "}
              <RhythmRealmLink
                href={lyricsPagePath}
                target="_self"
                className="font-semibold text-cyan-100 underline decoration-cyan-100/40 underline-offset-4 transition hover:text-white"
              >
                Trying to Let You Go lyrics
              </RhythmRealmLink>{" "}
              on RhythmRealm.net.
            </p>
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-white/78 sm:text-base">
              {lyricSections.map((section) => (
                <section key={section.id}>
                  <h3 className="font-semibold text-white">[{section.label}]</h3>
                  <p className="mt-2">
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

          <aside className="rounded-lg border border-cyan-200/20 bg-cyan-200/[0.06] p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
              Song Notes
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/72">
              Hallway light, morning air, a picture on the dresser, and an empty
              side of the bed carry the song&apos;s feeling of absence and memory.
            </p>
            <RhythmRealmLink
              href={articlePath}
              target="_self"
              className="mt-5 inline-flex rounded-lg border border-white/18 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-black"
            >
              Read the Behind-the-Song Article
            </RhythmRealmLink>
          </aside>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            Story
          </div>
          <h2 className="mt-3 text-3xl font-semibold">
            Behind Trying to Let You Go
          </h2>
          <div className="mt-5 space-y-5 text-base leading-relaxed text-white/70">
            <p>
              &ldquo;Trying to Let You Go&rdquo; stays close to the ordinary places
              where memory lingers: a hallway, a dresser, the morning air, and
              the empty side where someone used to be.
            </p>
            <p>
              The song follows the tension between still reaching for someone
              and trying to accept that life has changed.
            </p>
          </div>
          <RhythmRealmLink
            href={articlePath}
            target="_self"
            className="mt-7 inline-flex rounded-lg border border-cyan-200/30 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-100 hover:text-black"
          >
            Read the Full Story Behind the Song
          </RhythmRealmLink>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.7fr)]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              Artist
            </div>
            <h2 className="mt-3 text-3xl font-semibold">
              About Andre Washington
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70">
              Andre Washington is an independent recording artist and music
              entrepreneur behind Rhythm Realm. His work focuses on direct,
              heartfelt pop music with rhythm, soul, and a clear connection to
              listeners.
            </p>
          </div>
          <div className="rounded-lg border border-cyan-200/20 bg-cyan-200/[0.06] p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
              Rhythm Realm
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/72">
              Rhythm Realm is the independent music home where listeners can
              hear songs, read lyrics, and follow the stories behind the music.
            </p>
            <RhythmRealmLink
              href="/about-andre-washington"
              target="_self"
              className="mt-5 inline-flex rounded-lg border border-white/18 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-black"
            >
              About Andre
            </RhythmRealmLink>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <SongNextSteps lyricsHref={lyricsPagePath} signupHref="#signup" />
      </div>

      <section className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              Questions
            </div>
            <h2 className="mt-3 text-3xl font-semibold">
              Trying to Let You Go FAQ
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {faqItems.map((faq) => (
              <section
                key={faq.question}
                className="rounded-lg border border-white/10 bg-black/32 p-5"
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
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-14">
        <EmailSignupForm />
      </section>

      <SiteFooter />
    </main>
  );
}
