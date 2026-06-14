import type { Metadata } from "next";

import RhythmRealmLink from "@/components/RhythmRealmLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { absoluteUrl } from "@/lib/seo";

const behindTheMusicTitle = "Behind the Music | Rhythm Realm";
const behindTheMusicDescription =
  "Explore the stories, creative process, and emotional ideas behind Andre Washington's Rhythm Realm songs, videos, lyrics, and pop music with rhythm and soul.";
const behindTheMusicImage = "/rhythm-realm-logo.png";

export const metadata: Metadata = {
  title: {
    absolute: behindTheMusicTitle,
  },
  description: behindTheMusicDescription,
  alternates: {
    canonical: "/behind-the-music",
  },
  openGraph: {
    title: behindTheMusicTitle,
    description: behindTheMusicDescription,
    url: absoluteUrl("/behind-the-music"),
    images: [
      {
        url: behindTheMusicImage,
        width: 1200,
        height: 1200,
        alt: "Rhythm Realm logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: behindTheMusicTitle,
    description: behindTheMusicDescription,
    images: [behindTheMusicImage],
  },
};

const notes = [
  {
    title: "Song First",
    text: "Every page starts with the song: melody, rhythm, feeling, and the reason the idea needed to become music.",
  },
  {
    title: "Direct Connection",
    text: "Rhythm Realm is built around listeners coming straight to the source for music, stories, videos, and updates.",
  },
  {
    title: "Real Emotion",
    text: "The site should feel cinematic and modern, but the center stays personal: songs that carry reflection, hope, and heart.",
  },
];

const storyFaqItems = [
  {
    question: "What is Behind the Music on RhythmRealm.net?",
    answer:
      "Behind the Music is where Rhythm Realm explains the ideas, emotions, and creative process behind Andre Washington's songs.",
  },
  {
    question: 'What does "pop music with rhythm and soul" mean here?',
    answer:
      "It means music with a clear pop shape, a strong groove, and a soulful message that keeps real emotion at the center.",
  },
  {
    question: "Why is RhythmRealm.net the main hub?",
    answer:
      "RhythmRealm.net brings songs, videos, lyrics, stories, email updates, and fan trust together in one official source.",
  },
  {
    question: "How can fans follow the stories?",
    answer:
      "Fans can start on RhythmRealm.net, read the song stories, listen to the music, and join the email list for new updates.",
  },
];

export default function BehindTheMusicPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: behindTheMusicTitle,
        url: absoluteUrl("/behind-the-music"),
        description: behindTheMusicDescription,
        inLanguage: "en-US",
        about: {
          "@type": "MusicGroup",
          name: "Rhythm Realm",
          url: absoluteUrl("/"),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: storyFaqItems.map((faq) => ({
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
            Behind the Music
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            The story, process, and feeling behind Rhythm Realm.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/68 sm:text-lg">
            Behind the Music is where Andre Washington can share the ideas that
            surround each release: what sparked the song, what it means, and how
            the sound came together.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {notes.map((note) => (
            <article
              key={note.title}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
            >
              <h2 className="text-xl font-semibold">{note.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/68">{note.text}</p>
            </article>
          ))}
        </div>

        <section className="mt-14 border-t border-white/10 pt-10">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              Featured Story
            </div>
            <h2 className="mt-3 text-3xl font-semibold">Do You Ever Wonder?</h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              The first song page goes deeper into lyrics, video, and story. It
              sets the pattern for future releases: listen first, then understand
              the emotion and meaning behind the track.
            </p>
            <RhythmRealmLink
              href="/do-you-ever-wonder"
              target="_self"
              className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100"
            >
              Read the Song Story
            </RhythmRealmLink>
          </div>
        </section>

        <section className="mt-14 border-t border-white/10 pt-10">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
              Story FAQ
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Clear answers behind the music.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {storyFaqItems.map((item) => (
              <section
                key={item.question}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
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
        </section>
      </section>

      <SiteFooter />
    </main>
  );
}
