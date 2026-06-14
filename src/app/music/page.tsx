import type { Metadata } from "next";
import Image from "next/image";

import RhythmRealmLink from "@/components/RhythmRealmLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { absoluteUrl } from "@/lib/seo";

const musicTitle = "Music by Andre Washington | Rhythm Realm";
const musicDescription =
  "Listen to Rhythm Realm songs by Andre Washington, including pop music with rhythm and soul, story notes, lyrics, and direct fan updates on RhythmRealm.net.";
const musicImage = "/coming-over-yesterday-cover.jpg";

const tracks = [
  {
    title: "Coming Over Yesterday",
    artist: "Terry T Productions featuring Andre Washington",
    duration: "3:23",
    href: "/blog/coming-over-yesterday",
    audio: "/audio/coming-over-yesterday.mp3",
    cover: "/coming-over-yesterday-cover.jpg",
    description:
      "Coming Over Yesterday is a soulful love song about showing up before you\u2019re even asked \u2014 being there with heart, timing, and devotion.",
    cta: "Discover more on RhythmRealm.net \u2014 Thank you for listening.",
    buttonLabel: "Read the Story",
  },
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

const musicFaqItems = [
  {
    question: "What is Rhythm Realm?",
    answer:
      "Rhythm Realm is the official music hub for Andre Washington, built around songs, lyrics, videos, stories, and direct fan updates.",
  },
  {
    question: "What kind of music does Andre Washington make?",
    answer:
      "Andre Washington makes pop music with rhythm and soul: melodic songs with groove, feeling, and clear emotional storytelling.",
  },
  {
    question: 'What does "pop music with rhythm and soul" mean?',
    answer:
      "It means the music is easy to feel and remember, with modern pop structure, a strong pulse, and a soulful human center.",
  },
  {
    question: "Where can fans listen and follow?",
    answer:
      "Fans can listen on RhythmRealm.net, read the stories behind the songs, and join the email list for new music and updates.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: musicTitle,
  },
  description: musicDescription,
  alternates: {
    canonical: "/music",
  },
  openGraph: {
    title: musicTitle,
    description: musicDescription,
    url: absoluteUrl("/music"),
    images: [
      {
        url: musicImage,
        width: 1200,
        height: 1200,
        alt: "Coming Over Yesterday cover art",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: musicTitle,
    description: musicDescription,
    images: [musicImage],
  },
};

export default function MusicPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...tracks.map((track) => ({
        "@type": "MusicRecording",
        name: track.title,
        url: absoluteUrl(track.href === "/contact" ? "/music" : track.href),
        image: absoluteUrl(track.cover),
        audio: absoluteUrl(track.audio),
        byArtist: {
          "@type":
            track.artist === "Andre Washington" ? "Person" : "Organization",
          name: track.artist,
        },
        duration: track.duration ? `PT${track.duration.replace(":", "M")}S` : undefined,
        description: track.description,
      })),
      {
        "@type": "FAQPage",
        mainEntity: musicFaqItems.map((faq) => ({
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
                <div className="text-sm font-semibold text-white/55">
                  {track.artist}
                  {track.duration ? ` | ${track.duration}` : ""}
                </div>
                <h2 className="mt-2 text-2xl font-semibold">{track.title}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/68 sm:text-base">
                  {track.description}
                </p>
                {track.cta ? (
                  <p className="mt-4 text-sm font-semibold text-cyan-100">{track.cta}</p>
                ) : null}
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
                    {track.buttonLabel ??
                      (track.href === "/do-you-ever-wonder"
                        ? "Open Song Page"
                        : "Ask for Updates")}
                  </RhythmRealmLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
              Music FAQ
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Clear answers for listeners.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {musicFaqItems.map((item) => (
              <section
                key={item.question}
                className="rounded-lg border border-white/10 bg-black/32 p-5"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {item.answer}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
