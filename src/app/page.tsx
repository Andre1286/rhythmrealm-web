import type { Metadata } from "next";
import Image from "next/image";

import EmailSignupForm from "@/components/EmailSignupForm";
import PlaylistAudioPlayer from "@/components/PlaylistAudioPlayer";
import RhythmRealmLink from "@/components/RhythmRealmLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import YouTubeVideoCard from "@/components/YouTubeVideoCard";
import { FAQ_ENTRIES } from "@/lib/faqEntries";
import { absoluteUrl, SITE_DESCRIPTION, SITE_HOME_URL, SITE_TITLE } from "@/lib/seo";

const featuredSong = "Coming Over Yesterday";
const featuredCredit = "Terry T Productions featuring Andre Washington";
const featuredDuration = "3:23";
const motionComicMediaBaseUrl =
  "https://media.githubusercontent.com/media/Andre1286/rhythmrealm-web/main/public/comics/rhythm-realm-comic-book-1";
const featuredDescription =
  "Andre Washington and Terry T Productions are shaping a new love song about being there before the moment even asks. Follow the progress, lyrics, and release updates on RhythmRealm.net.";
const explainerTitle = "Rhythm Realm: The Architecture of Connection";
const explainerDescription =
  "Watch Rhythm Realm: The Architecture of Connection, a short explainer video about how RhythmRealm.net connects songs, lyrics, stories, videos, and fan updates in one official music hub.";
const explainerVideo = {
  title: explainerTitle,
  description: explainerDescription,
  src: "/videos/rhythm-realm-architecture-of-connection.mp4",
  thumbnail: "/rhythm-realm-logo.png",
  uploadDate: "2026-05-28T12:00:00-04:00",
  duration: "PT3M54S",
};
const frictionlessUniverseVideo = {
  title: "Rhythm Realm: The Frictionless Universe",
  description:
    "A visual look at how Rhythm Realm connects music, story, technology, and direct-to-fan creativity into one smooth experience.",
  src: "/videos/rhythm-realm-frictionless-universe.mp4",
};
const motionComicDescription =
  "Explore Rhythm Realm motion comic stories connected to the music, visuals, and creative world of RhythmRealm.net.";

const motionComicChapters = [
  {
    title: "Motion Comic Book 1",
    src: `${motionComicMediaBaseUrl}/rhythm-realm-motion-comic-book-1.mp4`,
  },
  {
    title: "Motion Comic Book 2",
    src: `${motionComicMediaBaseUrl}/rhythm-realm-motion-comic-book-2.mp4`,
  },
];

const comingOverYesterdayFaqItems = [
  {
    question: "What is Coming Over Yesterday?",
    answer:
      "Coming Over Yesterday is a Rhythm Realm love song by Terry T Productions featuring Andre Washington.",
  },
  {
    question: "What is the song about?",
    answer:
      "The song is about showing up early, making time, and being there for someone before the moment even asks.",
  },
  {
    question: "Where can I read the lyrics?",
    answer: "The lyrics are available on RhythmRealm.net.",
  },
];

const explainerFaqItems = [
  {
    question: "What is Rhythm Realm?",
    answer:
      "Rhythm Realm is Andre Washington's official music hub for songs, videos, lyrics, stories, motion comics, and fan updates.",
  },
  {
    question: "What is The Architecture of Connection?",
    answer:
      "The Architecture of Connection is a Rhythm Realm explainer video showing how the website connects the music, story, visuals, and audience in one place.",
  },
];

const comingOverYesterdayLyrics = [
  {
    label: "Intro",
    lines: [
      "As I recall",
      "I\u2019ve been there for you",
      "For you, I give my all",
      "There\u2019s nothing I won\u2019t do",
      "For me, there is no other",
    ],
  },
  {
    label: "Hook",
    lines: [
      "Pick up the phone and call",
      "FaceTime me whenever you want",
      "I\u2019m coming over yesterday",
    ],
  },
  {
    label: "Verse 1",
    lines: [
      "All that I need is your love",
      "It\u2019s the only thing I\u2019m dreaming of",
      "I\u2019ll be there when you call",
      "I will make time for you",
      "You\u2019re the only one I need",
      "Your love is all I see",
    ],
  },
  {
    label: "Hook",
    lines: [
      "Pick up the phone and call me",
      "FaceTime me whenever you want",
      "I\u2019m coming over yesterday",
    ],
  },
];

export const metadata: Metadata = {
  title: {
    absolute: SITE_TITLE,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_HOME_URL,
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_HOME_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

const featureCards = [
  {
    href: "/music",
    eyebrow: "Listen",
    title: "Music",
    text: "Hear featured songs from Andre Washington and keep the Rhythm Realm player close.",
    target: "home-card-music",
  },
  {
    href: "/about-andre-washington",
    eyebrow: "Artist",
    title: "About Andre Washington",
    text: "Meet the independent artist, songwriter, and producer behind Rhythm Realm.",
    target: "home-card-about",
  },
  {
    href: "/behind-the-music",
    eyebrow: "Stories",
    title: "Behind the Music",
    text: "Go deeper into the meaning, process, and emotion behind each release.",
    target: "home-card-behind-the-music",
  },
  {
    href: "/do-you-ever-wonder",
    eyebrow: "Song Page",
    title: "Do You Ever Wonder? by Andre Washington",
    text: "Listen to the song, read the story, and follow the meaning behind the release.",
    target: "home-card-song-do-you-ever-wonder",
  },
  {
    href: "/lyrics/do-you-ever-wonder",
    eyebrow: "Lyrics",
    title: "Do You Ever Wonder? Lyrics",
    text: "Read the lyrics for Andre Washington's featured Rhythm Realm song.",
    target: "home-card-lyrics-do-you-ever-wonder",
  },
  {
    href: "#coming-over-yesterday",
    eyebrow: "Work in Progress",
    title: "Coming Over Yesterday",
    text: "Follow the current Rhythm Realm feature by Terry T Productions featuring Andre Washington.",
    target: "home-card-coming-over-yesterday",
  },
  {
    href: "#coming-over-yesterday-lyrics",
    eyebrow: "Lyrics",
    title: "Coming Over Yesterday Lyrics",
    text: "Read the words behind the latest soulful Rhythm Realm release.",
    target: "home-card-lyrics-coming-over-yesterday",
  },
  {
    href: "#what-rhythm-realm-is-building",
    eyebrow: "Explainer Video",
    title: explainerTitle,
    text: "Watch how RhythmRealm.net connects music, lyrics, stories, videos, and fan updates.",
    target: "home-card-explainer-video",
  },
  {
    href: "#motion-comic-book-1",
    eyebrow: "Motion Comics",
    title: "Motion Comic Book 1",
    text: "Explore the first Rhythm Realm motion comic chapter connected to the creative world.",
    target: "home-card-motion-comic-book-1",
  },
  {
    href: "#motion-comic-book-2",
    eyebrow: "Motion Comics",
    title: "Motion Comic Book 2",
    text: "Explore the second Rhythm Realm motion comic chapter connected to the music and visuals.",
    target: "home-card-motion-comic-book-2",
  },
  {
    href: "/blog",
    eyebrow: "Blog",
    title: "Rhythm Realm Blog",
    text: "Read music stories, song notes, and simple reflections from Rhythm Realm.",
    target: "home-card-blog",
  },
  {
    href: "/contact",
    eyebrow: "Connect",
    title: "Contact / Email Signup",
    text: "Reach Andre directly and join the email list for music updates.",
    target: "home-card-contact",
  },
];

export default function Home() {
  const homepageFaqItems = [
    ...comingOverYesterdayFaqItems,
    ...explainerFaqItems,
    ...FAQ_ENTRIES,
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicRecording",
        name: featuredSong,
        byArtist: {
          "@type": "Organization",
          name: "Terry T Productions",
        },
        contributor: {
          "@type": "Person",
          name: "Andre Washington",
        },
        url: absoluteUrl("/blog/coming-over-yesterday"),
        image: absoluteUrl("/coming-over-yesterday-cover.jpg"),
        audio: absoluteUrl("/audio/coming-over-yesterday.mp3"),
        duration: "PT3M23S",
        description: featuredDescription,
      },
      {
        "@type": "VideoObject",
        name: explainerVideo.title,
        description: explainerVideo.description,
        url: absoluteUrl("/#what-rhythm-realm-is-building"),
        contentUrl: absoluteUrl(explainerVideo.src),
        thumbnailUrl: absoluteUrl(explainerVideo.thumbnail),
        uploadDate: explainerVideo.uploadDate,
        duration: explainerVideo.duration,
      },
      {
        "@type": "CreativeWork",
        name: "Motion Comic Book 1",
        description: motionComicDescription,
        url: absoluteUrl("/#motion-comic-book-1"),
      },
      {
        "@type": "CreativeWork",
        name: "Motion Comic Book 2",
        description: motionComicDescription,
        url: absoluteUrl("/#motion-comic-book-2"),
      },
      {
        "@type": "FAQPage",
        mainEntity: homepageFaqItems.map((faq) => ({
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
    <main className="min-h-screen bg-black pb-44 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-center">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            Official Music Home
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Rhythm Realm: Pop Music With Rhythm and Soul
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            RhythmRealm.net is the main destination for Andre Washington&apos;s
            music. Listen to the songs, watch the visuals, read the stories, and
            stay connected to the emotion behind the music.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <RhythmRealmLink
              href="/music"
              target="_self"
              className="rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-cyan-100"
            >
              Listen Now
            </RhythmRealmLink>
            <RhythmRealmLink
              href="#coming-over-yesterday"
              target="_self"
              className="rounded-lg border border-white/18 px-5 py-3 text-center text-sm font-semibold transition hover:bg-white hover:text-black"
            >
              Follow Coming Over Yesterday
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

        <div className="mx-auto w-full max-w-[390px]">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border border-cyan-200/10 bg-cyan-200/[0.04]" />
            <Image
              src="/coming-over-yesterday-cover.jpg"
              alt="Coming Over Yesterday cover art"
              width={780}
              height={780}
              priority
              className="relative aspect-square w-full rounded-lg border border-white/10 object-cover shadow-2xl"
            />
          </div>
          <div className="mt-6">
            <div className="text-xs uppercase tracking-[0.18em] text-white/45">
              Work in Progress
            </div>
            <h2 className="mt-2 text-2xl font-semibold">{featuredSong}</h2>
            <div className="mt-2 text-sm font-semibold text-cyan-100/70">
              {featuredCredit} | {featuredDuration}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              {featuredDescription}
            </p>
          </div>
          <PlaylistAudioPlayer />
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-12 md:grid-cols-3">
          <div>
            <div className="text-3xl font-semibold">Direct</div>
            <p className="mt-2 text-sm leading-relaxed text-white/62">
              A website-first home for songs, stories, and connection.
            </p>
          </div>
          <div>
            <div className="text-3xl font-semibold">Soulful</div>
            <p className="mt-2 text-sm leading-relaxed text-white/62">
              Pop music shaped by rhythm, melody, and lived emotion.
            </p>
          </div>
          <div>
            <div className="text-3xl font-semibold">Growing</div>
            <p className="mt-2 text-sm leading-relaxed text-white/62">
              A clean hub ready for more songs, videos, and behind-the-music pages.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-8 border-b border-white/10 pb-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
              What Is Rhythm Realm?
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              A clear home base for Andre Washington&apos;s music.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-white/68">
            <p>
              Rhythm Realm is the official website for Andre Washington. It is
              built so listeners can come straight to the source for music,
              videos, lyrics, song stories, and updates.
            </p>
            <p>
              The sound is pop music with rhythm and soul: melodic, emotional,
              and personal without losing the groove. This first version keeps
              the site simple so every visitor can quickly understand where to
              listen, what to explore, and how to stay connected.
            </p>
          </div>
        </div>

        <div
          id="what-rhythm-realm-is-building"
          className="grid gap-8 border-b border-white/10 py-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center"
        >
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
              Explainer Video
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {explainerTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/68 sm:text-lg">
              {explainerDescription}
            </p>
          </div>

          <div className="grid gap-5">
            <div className="overflow-hidden rounded-lg border border-cyan-200/20 bg-black shadow-2xl shadow-cyan-950/25">
              <video
                className="aspect-video w-full bg-black object-contain"
                controls
                playsInline
                preload="metadata"
              >
                <source src={explainerVideo.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <article className="overflow-hidden rounded-lg border border-cyan-200/20 bg-black shadow-2xl shadow-cyan-950/25">
              <div className="border-b border-white/10 bg-white/[0.04] px-4 py-4">
                <h3 className="text-base font-semibold text-white">
                  {frictionlessUniverseVideo.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/68">
                  {frictionlessUniverseVideo.description}
                </p>
              </div>
              <video
                className="aspect-video w-full bg-black object-contain"
                controls
                playsInline
                preload="metadata"
              >
                <source src={frictionlessUniverseVideo.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </article>
          </div>

          <div className="grid gap-4 lg:col-span-2 md:grid-cols-2">
            {explainerFaqItems.map((item) => (
              <section
                key={item.question}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-5"
              >
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/68">
                  {item.answer}
                </p>
              </section>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
              Explore
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Start with the music. Stay for the story.
            </h2>
          </div>
          <RhythmRealmLink
            href="/music"
            target="_self"
            className="inline-flex rounded-lg border border-white/18 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-black"
          >
            View Music
          </RhythmRealmLink>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {featureCards.map((card) => (
            <RhythmRealmLink
              key={card.href}
              href={card.href}
              target="_self"
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-200/40 hover:bg-cyan-200/[0.06]"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                {card.eyebrow}
              </div>
              <h3 className="mt-3 text-2xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/66">{card.text}</p>
            </RhythmRealmLink>
          ))}
        </div>
      </section>

      <section
        id="coming-over-yesterday"
        className="mx-auto grid w-full max-w-6xl gap-8 px-6 pb-16 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-center"
      >
        <Image
          src="/coming-over-yesterday-cover.jpg"
          alt="Cover art for Coming Over Yesterday"
          width={520}
          height={520}
          className="mx-auto aspect-square w-full max-w-[260px] rounded-lg border border-white/10 object-cover shadow-2xl"
        />
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
            Work in Progress
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Coming Over Yesterday
          </h2>
          <div className="mt-3 text-sm font-semibold text-cyan-100/75">
            {featuredCredit} | {featuredDuration}
          </div>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/68">
            {featuredDescription}
          </p>
          <audio
            controls
            controlsList="nodownload noplaybackrate"
            src="/audio/coming-over-yesterday.mp3"
            className="mt-6 w-full max-w-xl"
          />
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <RhythmRealmLink
              href="#coming-over-yesterday-lyrics"
              target="_self"
              className="inline-flex rounded-lg bg-white px-5 py-3 text-left text-sm font-semibold leading-snug text-black transition hover:bg-cyan-100"
            >
              Read the lyrics
            </RhythmRealmLink>
            <RhythmRealmLink
              href="/blog/coming-over-yesterday"
              target="_self"
              className="inline-flex rounded-lg border border-cyan-200/30 px-5 py-3 text-left text-sm font-semibold leading-snug text-cyan-100 transition hover:bg-cyan-100 hover:text-black"
            >
              Read Coming Over Yesterday story
            </RhythmRealmLink>
            <RhythmRealmLink
              href="/music"
              target="_self"
              className="inline-flex max-w-xl rounded-lg border border-white/18 px-5 py-3 text-left text-sm font-semibold leading-snug transition hover:bg-white hover:text-black"
            >
              Discover more on RhythmRealm.net &mdash; Thank you for listening.
            </RhythmRealmLink>
          </div>
        </div>

        <div
          id="coming-over-yesterday-lyrics"
          className="border-t border-white/10 pt-8 lg:col-span-2"
        >
          <div className="max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
              Lyrics
            </div>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Coming Over Yesterday Lyrics
            </h3>
            <p className="mt-3 text-sm font-semibold text-white/55">
              {featuredCredit}
            </p>
            <div className="mt-7 grid gap-6 text-base leading-relaxed text-white/78 sm:grid-cols-2">
              {comingOverYesterdayLyrics.map((section, index) => (
                <section
                  key={`${section.label}-${index}`}
                  className="rounded-lg border border-white/10 bg-white/[0.035] p-5"
                >
                  <h4 className="text-lg font-semibold text-white">
                    [{section.label}]
                  </h4>
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
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {comingOverYesterdayFaqItems.map((item) => (
                <section
                  key={item.question}
                  className="rounded-lg border border-cyan-200/20 bg-cyan-200/[0.055] p-5"
                >
                  <h4 className="text-lg font-semibold text-white">
                    {item.question}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {item.answer}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 pb-16 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-100/80">
            Featured Song Page
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Do You Ever Wonder?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/68">
            The first song page brings the release together: cover art, lyrics,
            story, audio, and the official video in one focused place.
          </p>
          <RhythmRealmLink
            href="/do-you-ever-wonder"
            target="_self"
            className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100"
          >
            Visit the Song Page
          </RhythmRealmLink>
        </div>

        <YouTubeVideoCard
          title="Watch the official video"
          description="The video link is already connected. Open the official YouTube video for Do You Ever Wonder? directly from RhythmRealm.net."
          imageSrc="/do-you-ever-wonder.png"
          imageAlt="Do You Ever Wonder? cover art"
          youtubeUrl="https://www.youtube.com/watch?v=pWQU2ojAZFU"
        />
      </section>

      <section
        id="motion-comic-book-1"
        className="border-y border-white/10 bg-white/[0.035]"
      >
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
              Motion Comic
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Rhythm Realm Motion Comics
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/68 sm:text-lg">
              {motionComicDescription}
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {motionComicChapters.map((chapter) => (
              <article
                key={chapter.title}
                id={
                  chapter.title === "Motion Comic Book 2"
                    ? "motion-comic-book-2"
                    : undefined
                }
                className="overflow-hidden rounded-lg border border-cyan-200/20 bg-black shadow-2xl shadow-cyan-950/20"
              >
                <div className="border-b border-white/10 bg-white/[0.04] px-4 py-3">
                  <h3 className="text-base font-semibold text-white">
                    {chapter.title}
                  </h3>
                </div>
                <video
                  className="aspect-video w-full bg-black object-contain"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src={chapter.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </article>
            ))}
          </div>

          <RhythmRealmLink
            href="/music"
            target="_self"
            className="mt-8 inline-flex rounded-lg border border-white/18 px-5 py-3 text-sm font-semibold transition hover:bg-white hover:text-black"
          >
            Discover more on RhythmRealm.net &mdash; Thank you for listening.
          </RhythmRealmLink>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
              Behind the Song
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Behind the Song: Do You Ever Wonder?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/68">
              A closer look at the feeling, story, and meaning behind Andre
              Washington&apos;s song &quot;Do You Ever Wonder?&quot; Read the story
              and stay connected with new Rhythm Realm music.
            </p>
          </div>
          <RhythmRealmLink
            href="/do-you-ever-wonder"
            target="_self"
            className="inline-flex shrink-0 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100"
          >
            Read Behind the Song
          </RhythmRealmLink>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="border-t border-white/10 pt-14">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            FAQ
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Rhythm Realm FAQ
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {FAQ_ENTRIES.map((item) => (
              <details
                key={item.question}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-white">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-white/68">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-cyan-200/[0.055]">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <EmailSignupForm
            title="Join the Rhythm Realm list"
            description="Join the Rhythm Realm list and get new songs, behind-the-music stories, and direct updates from Andre Washington."
            buttonLabel="Join the List"
          />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
