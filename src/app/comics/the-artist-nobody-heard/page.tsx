import InsiderCta from "@/components/InsiderCta";
import type { Metadata } from "next";

import RhythmRealmLink from "@/components/RhythmRealmLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  motionComicDescription,
  motionComicIssues,
  motionComicPath,
  motionComicTitle,
} from "@/lib/motionComic";
import { absoluteUrl } from "@/lib/seo";

const pageTitle = `${motionComicTitle} | Rhythm Realm Motion Comic`;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: motionComicDescription,
  alternates: { canonical: motionComicPath },
  openGraph: {
    title: pageTitle,
    description: motionComicDescription,
    url: absoluteUrl(motionComicPath),
    type: "website",
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: motionComicDescription,
  },
};

const motionComic = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": absoluteUrl(`${motionComicPath}#series`),
  name: motionComicTitle,
  description: motionComicDescription,
  genre: "Motion comic",
  url: absoluteUrl(motionComicPath),
  hasPart: motionComicIssues.map((issue) => ({
    "@type": "CreativeWork",
    "@id": absoluteUrl(`${motionComicPath}#${issue.anchor}`),
    name: `${motionComicTitle} — Issue #${issue.number}`,
    url: absoluteUrl(`${motionComicPath}#${issue.anchor}`),
    genre: "Motion comic",
    encoding: {
      "@type": "MediaObject",
      contentUrl: absoluteUrl(issue.videoPath),
      encodingFormat: "video/mp4",
      duration: issue.duration,
    },
  })),
};

export default function TheArtistNobodyHeardSeriesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(motionComic).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />

      <section className="border-b border-white/10 bg-white/[0.035]">
        <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-18">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            Rhythm Realm Motion Comic
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {motionComicTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/68 sm:text-lg">
            Follow Julian as he searches for a way to protect his artistic
            voice, own his creative path, and reach the listeners who truly
            connect with his music.
          </p>
          <nav aria-label="Motion comic issues" className="mt-8 flex flex-wrap gap-3">
            {motionComicIssues.map((issue) => (
              <a
                key={issue.number}
                href={`#${issue.anchor}`}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-cyan-200/30 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-100 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
              >
                Watch Issue #{issue.number}
              </a>
            ))}
          </nav>
          <div className="mt-10 grid max-w-4xl gap-12 sm:gap-16">
            {motionComicIssues.map((issue) => (
              <section
                key={issue.number}
                id={issue.anchor}
                aria-labelledby={issue.headingId}
                className="min-w-0 scroll-mt-6"
              >
                <h2 id={issue.headingId} className="text-2xl font-semibold sm:text-3xl">
                  Watch Issue #{issue.number}
                </h2>
                <video
                  aria-labelledby={issue.headingId}
                  className="mt-4 w-full rounded-lg border border-white/15 bg-black object-contain focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
                  style={{ aspectRatio: `${issue.width} / ${issue.height}` }}
                  width={issue.width}
                  height={issue.height}
                  controls
                  playsInline
                  preload="none"
                  poster={issue.posterPath}
                >
                  <source src={issue.videoPath} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              </section>
            ))}
          </div>
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
          <InsiderCta
            introduction="Follow The Artist Nobody Heard and the wider Rhythm Realm experience."
            className="mt-8 border-t border-white/10 pt-8"
          />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
