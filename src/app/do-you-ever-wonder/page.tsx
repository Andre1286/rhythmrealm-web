import type { Metadata } from "next";
import Image from "next/image";

import EmailSignupForm from "@/components/EmailSignupForm";
import RhythmRealmLink from "@/components/RhythmRealmLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import YouTubeVideoCard from "@/components/YouTubeVideoCard";
import { absoluteUrl } from "@/lib/seo";

const videoWatchUrl = "https://www.youtube.com/watch?v=pWQU2ojAZFU";
const songTitle = "Do You Ever Wonder";
const artistName = "Andre Washington";

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

const faqItems = [
  {
    question: "What is “Do You Ever Wonder” by Andre Washington?",
    answer:
      "“Do You Ever Wonder” is a Rhythm Realm song by Andre Washington, created for listeners who enjoy pop music with rhythm and soul.",
  },
  {
    question: "Where can I read the lyrics to “Do You Ever Wonder”?",
    answer: "You can read the lyrics on RhythmRealm.net.",
  },
  {
    question: "Who is Andre Washington?",
    answer:
      "Andre Washington is an independent recording artist and music entrepreneur behind Rhythm Realm.",
  },
  {
    question: "What is Rhythm Realm?",
    answer:
      "Rhythm Realm is an independent music brand focused on pop music with rhythm and soul.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Do You Ever Wonder Lyrics – Andre Washington | Rhythm Realm",
  },
  description:
    "Read the lyrics and story behind “Do You Ever Wonder” by Andre Washington. A Rhythm Realm song for fans of pop music with rhythm and soul.",
  alternates: {
    canonical: "/do-you-ever-wonder",
  },
  openGraph: {
    title: "Do You Ever Wonder Lyrics – Andre Washington | Rhythm Realm",
    description:
      "Read the lyrics and story behind “Do You Ever Wonder” by Andre Washington. A Rhythm Realm song for fans of pop music with rhythm and soul.",
    url: absoluteUrl("/do-you-ever-wonder"),
    images: [
      {
        url: "/do-you-ever-wonder/cover-art.png",
        width: 1200,
        height: 1200,
        alt: "Do You Ever Wonder by Andre Washington cover art",
      },
    ],
  },
};

export default function DoYouEverWonderPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicRecording",
        name: songTitle,
        url: absoluteUrl("/do-you-ever-wonder"),
        image: absoluteUrl("/do-you-ever-wonder/cover-art.png"),
        byArtist: {
          "@type": "Person",
          name: artistName,
        },
        description: metadata.description,
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
          src="/do-you-ever-wonder/cover-art.png"
          alt="Do You Ever Wonder by Andre Washington cover art"
          width={720}
          height={720}
          className="mx-auto aspect-square w-full max-w-[360px] rounded-lg border border-white/10 object-cover shadow-2xl"
          priority
        />
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            Official Single
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Do You Ever Wonder Lyrics
          </h1>
          <p className="mt-2 text-lg text-white/72">{artistName}</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/68 sm:text-lg">
            Read the lyrics and story behind &ldquo;Do You Ever Wonder&rdquo; by
            Andre Washington, a Rhythm Realm song for fans of pop music with
            rhythm and soul.
          </p>
          <audio
            controls
            controlsList="nodownload noplaybackrate"
            src="/audio/do-you-ever-wonder.mp3"
            className="mt-6 w-full max-w-2xl"
          />
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <RhythmRealmLink
              href="#lyrics"
              target="_self"
              className="rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-cyan-100"
            >
              Read Lyrics
            </RhythmRealmLink>
            <RhythmRealmLink
              href="#story-behind-the-song"
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
            <h2 className="mt-3 text-3xl font-semibold">Lyrics</h2>
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-white/78 sm:text-base">
              {lyricSections.map((section) => (
                <section key={section.label}>
                  <h3 className="font-semibold text-white">[{section.label}]</h3>
                  <p className="mt-2">
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

          <aside className="rounded-lg border border-cyan-200/20 bg-cyan-200/[0.06] p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
              Song Notes
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/72">
              The song carries the feeling of looking around, seeing people pulled
              apart, and still believing there is a better way to move forward.
            </p>
            <RhythmRealmLink
              href="#story-behind-the-song"
              target="_self"
              className="mt-5 inline-flex rounded-lg border border-white/18 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-black"
            >
              Read the Story
            </RhythmRealmLink>
          </aside>
        </div>
      </section>

      <section
        id="story-behind-the-song"
        className="mx-auto w-full max-w-6xl px-6 py-14"
      >
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            Story
          </div>
          <h2 className="mt-3 text-3xl font-semibold">Story Behind the Song</h2>
          <div className="mt-5 space-y-5 text-base leading-relaxed text-white/70">
            <p>
              &ldquo;Do You Ever Wonder&rdquo; was created from a place of reflection. It
              asks what happens when the noise gets loud, the world feels divided,
              and people still need love, clarity, and hope.
            </p>
            <p>
              The song is not trying to force every answer. It gives space to the
              question itself: why are we here, where are we headed, and how can
              we find a better way?
            </p>
            <p>
              That is the heart of Rhythm Realm: music that lets real emotion
              breathe while keeping rhythm and melody at the center.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.7fr)]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              Artist
            </div>
            <h2 className="mt-3 text-3xl font-semibold">About Andre Washington</h2>
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
              Rhythm Realm is the independent music brand where fans can listen
              to songs, read lyrics, follow the stories behind releases, and stay
              connected with new music.
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

      <section id="official-video" className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              Official Video
            </div>
            <h2 className="mt-3 text-3xl font-semibold">Watch the visual</h2>
          </div>
          <div className="mt-7">
            <YouTubeVideoCard
              title="Watch Do You Ever Wonder"
              description="The official video is connected here. If an embedded YouTube player is blocked by the browser, this card still gives visitors a clear way to watch the video on YouTube."
              imageSrc="/do-you-ever-wonder/cover-art.png"
              imageAlt="Do You Ever Wonder by Andre Washington cover art"
              youtubeUrl={videoWatchUrl}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            More Music
          </div>
          <h2 className="mt-3 text-3xl font-semibold">More Rhythm Realm Music</h2>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            Keep exploring Rhythm Realm for more songs from Andre Washington,
            including new releases, music stories, videos, and updates for fans
            of pop music with rhythm and soul.
          </p>
        </div>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <RhythmRealmLink
            href="/music"
            target="_self"
            className="rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-cyan-100"
          >
            Explore Music
          </RhythmRealmLink>
          <RhythmRealmLink
            href="/blog/story-behind-do-you-ever-wonder"
            target="_self"
            className="rounded-lg border border-white/18 px-5 py-3 text-center text-sm font-semibold transition hover:bg-white hover:text-black"
          >
            Read More Stories
          </RhythmRealmLink>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              Questions
            </div>
            <h2 className="mt-3 text-3xl font-semibold">FAQ</h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {faqItems.map((faq) => (
              <section
                key={faq.question}
                className="rounded-lg border border-white/10 bg-black/32 p-5"
              >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {faq.answer}
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
