import type { Metadata } from "next";
import Image from "next/image";

import RhythmRealmLink from "@/components/RhythmRealmLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { absoluteUrl } from "@/lib/seo";

const issuePath = "/comics/the-artist-nobody-heard/issue-3";

const comicPages = [
  {
    src: "/comics/the-artist-nobody-heard/issue-3/issue-3-page-01.png",
    title: "The Signal Spreads",
    alt: "Comic page 1, The Signal Spreads: Julian watches his music begin spreading online as new listeners discover the signal.",
    width: 1055,
    height: 1491,
  },
  {
    src: "/comics/the-artist-nobody-heard/issue-3/issue-3-page-02.png",
    title: "The Spike",
    alt: "Comic page 2, The Spike: Julian sees plays and engagement rise rapidly as unexpected attention begins arriving.",
    width: 1023,
    height: 1537,
  },
  {
    src: "/comics/the-artist-nobody-heard/issue-3/issue-3-page-03.png",
    title: "The Offer",
    alt: "Comic page 3, The Offer: Clara presents Julian with a larger music-industry opportunity as his audience grows.",
    width: 1023,
    height: 1537,
  },
  {
    src: "/comics/the-artist-nobody-heard/issue-3/issue-3-page-04.png",
    title: "The Fine Print",
    alt: "Comic page 4, The Fine Print: Julian examines the opportunity's terms and considers what success may cost.",
    width: 948,
    height: 1659,
  },
  {
    src: "/comics/the-artist-nobody-heard/issue-3/issue-3-page-05.png",
    title: "What Happened to SYPHER",
    alt: "Comic page 5, What Happened to SYPHER: SYPHER's past shows how industry success cost him control of his music and identity.",
    width: 1110,
    height: 2247,
  },
  {
    src: "/comics/the-artist-nobody-heard/issue-3/issue-3-page-06.png",
    title: "Maya's Test",
    alt: "Comic page 6, Maya's Test: Maya challenges Julian to choose lasting listener connection over chasing numbers.",
    width: 876,
    height: 1795,
  },
  {
    src: "/comics/the-artist-nobody-heard/issue-3/issue-3-page-07.png",
    title: "Julian's Move",
    alt: "Comic page 7, Julian's Move: Julian builds a direct relationship with his audience through Rhythm Realm.",
    width: 1101,
    height: 2247,
  },
  {
    src: "/comics/the-artist-nobody-heard/issue-3/issue-3-page-08.png",
    title: "Someone Notices",
    alt: "Comic page 8, Someone Notices: Industry executives notice Julian's independent growth and prepare to approach him.",
    width: 1119,
    height: 2247,
  },
];

const metadataTitle =
  "The Artist Nobody Heard Issue #3 — The Price of Attention | Rhythm Realm";
const metadataDescription =
  "Julian finally gets the attention he wanted, but new opportunities force him to confront what visibility, ownership, and independence may cost.";

export const metadata: Metadata = {
  title: {
    absolute: metadataTitle,
  },
  description: metadataDescription,
  alternates: {
    canonical: issuePath,
  },
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
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

const navigationLinkClass =
  "inline-flex justify-center rounded-lg border border-white/18 px-4 py-3 text-center text-sm font-semibold text-white/82 transition hover:border-cyan-200/40 hover:bg-cyan-100 hover:text-black";

export default function TheArtistNobodyHeardIssueThreePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
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
            Issue #3: The Price of Attention
          </p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/68 sm:text-lg">
            Julian finally gets the attention he wanted, but new opportunities
            force him to confront what visibility, ownership, and independence
            may cost.
          </p>

          <nav
            aria-label="Issue navigation"
            className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            <RhythmRealmLink
              href="/comics/the-artist-nobody-heard/issue-2"
              target="_self"
              className={navigationLinkClass}
            >
              Previous Issue: Issue #2 &mdash; Unknown Source
            </RhythmRealmLink>
            <RhythmRealmLink
              href="/comics/the-artist-nobody-heard"
              target="_self"
              className={navigationLinkClass}
            >
              Back to The Artist Nobody Heard series
            </RhythmRealmLink>
            <RhythmRealmLink
              href="/"
              target="_self"
              className={navigationLinkClass}
            >
              Back to Rhythm Realm home
            </RhythmRealmLink>
          </nav>
        </div>
      </section>

      <section
        aria-label="The Artist Nobody Heard, Issue #3 comic pages"
        className="mx-auto w-full max-w-5xl px-3 py-10 sm:px-6 sm:py-14"
      >
        <ol className="grid gap-8 sm:gap-12">
          {comicPages.map((page, index) => (
            <li key={page.src} className="min-w-0">
              <figure className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.025] shadow-2xl shadow-cyan-950/15">
                <Image
                  src={page.src}
                  alt={page.alt}
                  width={page.width}
                  height={page.height}
                  sizes="(max-width: 1024px) 100vw, 960px"
                  priority={index === 0}
                  className="h-auto w-full max-w-full bg-black object-contain"
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
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
