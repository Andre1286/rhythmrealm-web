import type { Metadata } from "next";
import Image from "next/image";

import RhythmRealmLink from "@/components/RhythmRealmLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { absoluteUrl } from "@/lib/seo";

const issuePath = "/comics/the-artist-nobody-heard/issue-1";

const comicPages = [
  {
    src: "/comics/the-artist-nobody-heard/issue-1/page-01-the-endless-scroll.png",
    title: "The Endless Scroll",
    alt: "Comic page 1, The Endless Scroll: Julian watches an endless stream of social media posts while trying to make his music heard.",
    width: 941,
    height: 1672,
  },
  {
    src: "/comics/the-artist-nobody-heard/issue-1/page-02-the-small-studio.png",
    title: "The Small Studio",
    alt: "Comic page 2, The Small Studio: Julian works alone on his music in a small home studio.",
    width: 941,
    height: 1672,
  },
  {
    src: "/comics/the-artist-nobody-heard/issue-1/page-03-the-numbers.png",
    title: "The Numbers",
    alt: "Comic page 3, The Numbers: Julian confronts low view and engagement numbers for his work.",
    width: 941,
    height: 1672,
  },
  {
    src: "/comics/the-artist-nobody-heard/issue-1/page-04-mayas-question.png",
    title: "Maya's Question",
    alt: "Comic page 4, Maya's Question: Maya asks Julian a difficult question about his art and audience.",
    width: 941,
    height: 1672,
  },
  {
    src: "/comics/the-artist-nobody-heard/issue-1/page-05-claras-offer.png",
    title: "Clara's Offer",
    alt: "Comic page 5, Clara's Offer: Clara presents Julian with an opportunity shaped by outside expectations.",
    width: 941,
    height: 1672,
  },
  {
    src: "/comics/the-artist-nobody-heard/issue-1/page-06-the-wrong-reflection.png",
    title: "The Wrong Reflection",
    alt: "Comic page 6, The Wrong Reflection: Julian sees a version of himself that no longer feels true.",
    width: 948,
    height: 1659,
  },
  {
    src: "/comics/the-artist-nobody-heard/issue-1/page-07-believed-in.png",
    title: "Believed In",
    alt: "Comic page 7, Believed In: Julian recognizes the importance of having someone believe in his art.",
    width: 941,
    height: 1672,
  },
  {
    src: "/comics/the-artist-nobody-heard/issue-1/page-08-the-work-begins.png",
    title: "The Work Begins",
    alt: "Comic page 8, The Work Begins: Julian starts building a lasting home for his art beyond the feed.",
    width: 1024,
    height: 1536,
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "The Artist Nobody Heard Issue #1 | Rhythm Realm Comic",
  },
  description:
    "Read The Artist Nobody Heard Issue #1: Heard in the Noise, a Rhythm Realm comic about an independent artist fighting to be heard in a noisy digital world.",
  alternates: {
    canonical: issuePath,
  },
  openGraph: {
    title: "The Artist Nobody Heard Issue #1 | Rhythm Realm Comic",
    description:
      "Read The Artist Nobody Heard Issue #1: Heard in the Noise, a Rhythm Realm comic about an independent artist fighting to be heard in a noisy digital world.",
    url: absoluteUrl(issuePath),
    type: "article",
    images: [
      {
        url: comicPages[0].src,
        width: comicPages[0].width,
        height: comicPages[0].height,
        alt: comicPages[0].alt,
      },
    ],
  },
};

export default function TheArtistNobodyHeardIssueOnePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />

      <section className="border-b border-white/10 bg-white/[0.035]">
        <div className="mx-auto w-full max-w-5xl px-5 py-14 sm:px-6 sm:py-18">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            Rhythm Realm Comic
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            The Artist Nobody Heard
          </h1>
          <p className="mt-4 text-xl font-semibold text-cyan-100 sm:text-2xl">
            Issue #1: Heard in the Noise
          </p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/68 sm:text-lg">
            Julian is an independent artist trying to be heard in a world ruled
            by endless scrolling, low numbers, and outside pressure. But when
            the silence gets too loud, he begins to discover that the answer may
            not be chasing the feed &mdash; it may be building a home for his art.
          </p>
        </div>
      </section>

      <section
        aria-label="The Artist Nobody Heard, Issue #1 comic pages"
        className="mx-auto w-full max-w-5xl px-3 py-10 sm:px-6 sm:py-14"
      >
        <ol className="grid gap-8 sm:gap-12">
          {comicPages.map((page, index) => (
            <li key={page.src}>
              <figure className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.025] shadow-2xl shadow-cyan-950/15">
                <Image
                  src={page.src}
                  alt={page.alt}
                  width={page.width}
                  height={page.height}
                  sizes="(max-width: 1024px) 100vw, 960px"
                  priority={index === 0}
                  className="h-auto w-full bg-black object-contain"
                />
                <figcaption className="border-t border-white/10 px-4 py-3 text-sm text-white/55">
                  Page {index + 1} &middot; {page.title}
                </figcaption>
              </figure>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-white/10 bg-cyan-200/[0.055]">
        <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-6 sm:py-14">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            #RhythmRealmNet
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Keep exploring the Rhythm Realm.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Discover more on RhythmRealm.net &mdash; Thank you for listening.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <RhythmRealmLink
              href="/"
              target="_self"
              className="inline-flex justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100"
            >
              RhythmRealm.net Home
            </RhythmRealmLink>
            <RhythmRealmLink
              href="/music"
              target="_self"
              className="inline-flex justify-center rounded-lg border border-cyan-200/30 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-100 hover:text-black"
            >
              Explore Music
            </RhythmRealmLink>
            <RhythmRealmLink
              href="/blog"
              target="_self"
              className="inline-flex justify-center rounded-lg border border-white/18 px-5 py-3 text-sm font-semibold transition hover:bg-white hover:text-black"
            >
              Read the Blog
            </RhythmRealmLink>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
