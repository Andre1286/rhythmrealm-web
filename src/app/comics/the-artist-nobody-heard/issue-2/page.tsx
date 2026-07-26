import type { Metadata } from "next";
import Image from "next/image";

import RhythmRealmLink from "@/components/RhythmRealmLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { absoluteUrl } from "@/lib/seo";

const issuePath = "/comics/the-artist-nobody-heard/issue-2";

const comicPages = [
  {
    src: "/comics/the-artist-nobody-heard/issue-2/page-01-the-message-returns.png",
    title: "The Message Returns",
    alt: "Comic page 1, The Message Returns: Julian receives the mysterious Unknown Source signal again.",
    width: 941,
    height: 1672,
  },
  {
    src: "/comics/the-artist-nobody-heard/issue-2/page-02-the-door-opens.png",
    title: "The Door Opens",
    alt: "Comic page 2, The Door Opens: A digital doorway opens and SYPHER begins to appear.",
    width: 1024,
    height: 1536,
  },
  {
    src: "/comics/the-artist-nobody-heard/issue-2/page-03-sypher.png",
    title: "SYPHER",
    alt: "Comic page 3, SYPHER: SYPHER reveals that success cost him his artistic voice.",
    width: 1024,
    height: 1536,
  },
  {
    src: "/comics/the-artist-nobody-heard/issue-2/page-04-heard-the-wrong-way.png",
    title: "Heard the Wrong Way",
    alt: "Comic page 4, Heard the Wrong Way: SYPHER shows Julian how the industry reshaped his identity and music.",
    width: 941,
    height: 1672,
  },
  {
    src: "/comics/the-artist-nobody-heard/issue-2/page-05-clara-calls-again.png",
    title: "Clara Calls Again",
    alt: "Comic page 5, Clara Calls Again: Clara calls Julian and gives him a deadline on the artist-development offer.",
    width: 941,
    height: 1672,
  },
  {
    src: "/comics/the-artist-nobody-heard/issue-2/page-06-mayas-warning.png",
    title: "Maya's Warning",
    alt: "Comic page 6, Maya's Warning: Maya reminds Julian that visibility is not worth being erased.",
    width: 1055,
    height: 1491,
  },
  {
    src: "/comics/the-artist-nobody-heard/issue-2/page-07-the-third-choice.png",
    title: "The Third Choice",
    alt: "Comic page 7, The Third Choice: Julian begins building his own direct-to-fan music home.",
    width: 1055,
    height: 1491,
  },
  {
    src: "/comics/the-artist-nobody-heard/issue-2/page-08-first-listener.png",
    title: "First Listener",
    alt: "Comic page 8, First Listener: Julian receives a meaningful message from his first real listener.",
    width: 941,
    height: 1672,
  },
];

export const metadata: Metadata = {
  title: {
    absolute:
      "The Artist Nobody Heard Issue #2: Unknown Source | Rhythm Realm",
  },
  description:
    "Read The Artist Nobody Heard Issue #2: Unknown Source, a Rhythm Realm comic about artistic ownership, industry pressure, and one artist choosing direct connection over empty attention.",
  alternates: {
    canonical: issuePath,
  },
  openGraph: {
    title: "The Artist Nobody Heard Issue #2: Unknown Source | Rhythm Realm",
    description:
      "Read The Artist Nobody Heard Issue #2: Unknown Source, a Rhythm Realm comic about artistic ownership, industry pressure, and one artist choosing direct connection over empty attention.",
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

export default function TheArtistNobodyHeardIssueTwoPage() {
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
            Issue #2: Unknown Source
          </p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/68 sm:text-lg">
            After receiving a mysterious signal, Julian meets SYPHER &mdash; a
            former artist who knows what visibility can cost. With Clara&apos;s
            offer still waiting, Julian must choose between being shaped by the
            industry and building a direct connection with the people his music
            was meant to reach.
          </p>

          <nav
            aria-label="Issue navigation"
            className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            <RhythmRealmLink
              href="/comics/the-artist-nobody-heard/issue-1"
              target="_self"
              className={navigationLinkClass}
            >
              Previous Issue: Issue #1 &mdash; Heard in the Noise
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
        aria-label="The Artist Nobody Heard, Issue #2 comic pages"
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
