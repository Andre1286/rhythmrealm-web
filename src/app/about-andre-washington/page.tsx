import type { Metadata } from "next";
import Image from "next/image";

import RhythmRealmLink from "@/components/RhythmRealmLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { absoluteUrl } from "@/lib/seo";

const aboutTitle = "About Andre Washington | Rhythm Realm";
const aboutDescription =
  "Learn about Andre Washington, the independent recording artist, songwriter, and producer behind Rhythm Realm and pop music with rhythm and soul.";
const aboutImage = "/andre-washington.png";

const aboutFaqItems = [
  {
    question: "Who is Andre Washington?",
    answer:
      "Andre Washington is an independent recording artist, songwriter, and producer behind Rhythm Realm.",
  },
  {
    question: "What kind of music does Andre Washington make?",
    answer:
      "Andre makes pop music with rhythm and soul, blending melody, groove, reflection, and heartfelt storytelling.",
  },
  {
    question: "Why is RhythmRealm.net the main hub?",
    answer:
      "RhythmRealm.net keeps the music, lyrics, videos, stories, and fan updates in one official place direct from Andre Washington.",
  },
  {
    question: "How can fans follow or connect?",
    answer:
      "Fans can listen on RhythmRealm.net, read the stories behind the songs, join the email list, or use the contact page to reach out.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: aboutTitle,
  },
  description: aboutDescription,
  alternates: {
    canonical: "/about-andre-washington",
  },
  openGraph: {
    title: aboutTitle,
    description: aboutDescription,
    url: absoluteUrl("/about-andre-washington"),
    images: [
      {
        url: aboutImage,
        width: 1200,
        height: 1200,
        alt: "Andre Washington",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: aboutTitle,
    description: aboutDescription,
    images: [aboutImage],
  },
};

export default function AboutAndreWashingtonPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Andre Washington",
        url: absoluteUrl("/about-andre-washington"),
        image: absoluteUrl(aboutImage),
        description: aboutDescription,
        memberOf: {
          "@type": "MusicGroup",
          name: "Rhythm Realm",
          url: absoluteUrl("/"),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: aboutFaqItems.map((faq) => ({
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
            About Andre Washington
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            A songwriter, artist, and producer building songs from the inside out.
          </h1>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-white/72">
            <p>
              Andre Washington is an independent recording artist creating pop
              music with rhythm and soul. He writes, records, and produces with a
              hands-on approach, shaping each song from the first idea to the final
              mix.
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

      <section className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
              Andre Washington FAQ
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              The artist behind Rhythm Realm.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {aboutFaqItems.map((item) => (
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
