import type { Metadata } from "next";
import Image from "next/image";

import RhythmRealmLink from "@/components/RhythmRealmLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { absoluteUrl } from "@/lib/seo";

const seriesPath = "/comics/the-artist-nobody-heard";

const issues = [
  {
    href: "/comics/the-artist-nobody-heard/issue-1",
    issue: "Issue #1",
    title: "Heard in the Noise",
    description:
      "Julian tries to make meaningful music in a world ruled by endless scrolling, low numbers, and outside pressure.",
    image:
      "/comics/the-artist-nobody-heard/issue-1/page-01-the-endless-scroll.png",
    alt: "The Artist Nobody Heard Issue #1 cover artwork showing Julian facing an endless social media scroll.",
    width: 941,
    height: 1672,
  },
  {
    href: "/comics/the-artist-nobody-heard/issue-2",
    issue: "Issue #2",
    title: "Unknown Source",
    description:
      "Julian meets SYPHER and must choose between industry pressure and a direct connection with the people his music was meant to reach.",
    image:
      "/comics/the-artist-nobody-heard/issue-2/page-01-the-message-returns.png",
    alt: "The Artist Nobody Heard Issue #2 cover artwork showing Julian receiving the mysterious Unknown Source signal again.",
    width: 941,
    height: 1672,
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "The Artist Nobody Heard | Rhythm Realm Comics",
  },
  description:
    "Read The Artist Nobody Heard, a Rhythm Realm comic series about music, artistic identity, ownership, and finding a real audience.",
  alternates: {
    canonical: seriesPath,
  },
  openGraph: {
    title: "The Artist Nobody Heard | Rhythm Realm Comics",
    description:
      "Read The Artist Nobody Heard, a Rhythm Realm comic series about music, artistic identity, ownership, and finding a real audience.",
    url: absoluteUrl(seriesPath),
    type: "website",
    images: [
      {
        url: issues[1].image,
        width: issues[1].width,
        height: issues[1].height,
        alt: issues[1].alt,
      },
    ],
  },
};

export default function TheArtistNobodyHeardSeriesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <SiteHeader />

      <section className="border-b border-white/10 bg-white/[0.035]">
        <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-18">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            Rhythm Realm Comic Series
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            The Artist Nobody Heard
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/68 sm:text-lg">
            Follow Julian as he searches for a way to protect his artistic
            voice, own his creative path, and reach the listeners who truly
            connect with his music.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="available-issues"
        className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 sm:py-16"
      >
        <h2
          id="available-issues"
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Available issues
        </h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {issues.map((issue) => (
            <article
              key={issue.href}
              className="grid min-w-0 gap-6 overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-cyan-950/10 sm:grid-cols-[minmax(180px,0.72fr)_minmax(0,1fr)] sm:items-center sm:p-6"
            >
              <Image
                src={issue.image}
                alt={issue.alt}
                width={issue.width}
                height={issue.height}
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 280px, 240px"
                className="mx-auto h-auto w-full max-w-sm rounded-lg border border-white/10 bg-black object-contain"
              />
              <div className="min-w-0">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
                  {issue.issue}
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  {issue.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/68 sm:text-base">
                  {issue.description}
                </p>
                <RhythmRealmLink
                  href={issue.href}
                  target="_self"
                  className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100"
                >
                  Read {issue.issue}
                </RhythmRealmLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-cyan-200/[0.055]">
        <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 sm:py-12">
          <RhythmRealmLink
            href="/"
            target="_self"
            className="inline-flex rounded-lg border border-cyan-200/30 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-100 hover:text-black"
          >
            Back to Rhythm Realm home
          </RhythmRealmLink>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
