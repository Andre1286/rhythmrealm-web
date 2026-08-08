import type { Metadata } from "next";
import Image from "next/image";

import EmailSignupForm from "@/components/EmailSignupForm";
import PlaylistAudioPlayer from "@/components/PlaylistAudioPlayer";
import RhythmRealmLink from "@/components/RhythmRealmLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { absoluteUrl, SITE_DESCRIPTION, SITE_HOME_URL, SITE_TITLE } from "@/lib/seo";

const featuredSong = {
  id: "coming-over-yesterday",
  title: "Coming Over Yesterday",
  artist: "Terry T Productions featuring Andre Washington",
  duration: "3:23",
  cover: "/coming-over-yesterday-cover.jpg",
  description:
    "“Coming Over Yesterday” is a soulful pop love song by Terry T Productions featuring Andre Washington, built around devotion, timing, and being there before the moment even asks.",
};

const secondarySongs = [
  {
    id: "trying-to-let-you-go",
    title: "Trying to Let You Go",
    artist: "Andre Washington",
    cover: "/trying-to-let-you-go-cover.png",
    description:
      "A reflective song about absence, memory, and the difficult process of trying to move forward.",
    primaryHref: "/trying-to-let-you-go",
    primaryLabel: "Open Song Page",
    secondaryHref: "/blog/trying-to-let-you-go-behind-the-song",
    secondaryLabel: "Read Story",
  },
  {
    id: "track-1",
    title: "Do You Ever Wonder?",
    artist: "Andre Washington",
    cover: "/do-you-ever-wonder.png",
    description:
      "A reflective pop song about life, division, faith, hope, and finding a better way forward.",
    primaryHref: "/do-you-ever-wonder",
    primaryLabel: "Explore Song & Lyrics",
    secondaryHref: "/blog/story-behind-do-you-ever-wonder",
    secondaryLabel: "Read Story",
  },
  {
    id: "track-2",
    title: "If Only for the Love",
    artist: "Andre Washington",
    cover: "/rhythm-realm-logo.png",
    description:
      "A Rhythm Realm track from Andre Washington with heart, melody, and direct-to-listener energy.",
    primaryHref: "/contact",
    primaryLabel: "Ask for Updates",
  },
];

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_HOME_URL,
    type: "website",
  },
};

const playButtonClass =
  "inline-flex min-h-11 items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-100";
const outlineButtonClass =
  "inline-flex min-h-11 items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-cyan-100/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-100";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Rhythm Realm",
        url: SITE_HOME_URL,
        description: SITE_DESCRIPTION,
      },
      {
        "@type": "MusicRecording",
        name: featuredSong.title,
        duration: "PT3M23S",
        byArtist: { "@type": "Person", name: "Andre Washington" },
        contributor: { "@type": "Organization", name: "Terry T Productions" },
        url: absoluteUrl("/blog/coming-over-yesterday"),
      },
      ...secondarySongs.map((song) => ({
        "@type": "MusicRecording",
        name: song.title,
        byArtist: { "@type": "Person", name: song.artist },
        url: absoluteUrl(song.primaryHref),
      })),
      {
        "@type": "ComicStory",
        name: "The Artist Nobody Heard — Issue #1: Heard in the Noise",
        url: absoluteUrl("/comics/the-artist-nobody-heard/issue-1"),
      },
    ],
  };

  return (
    <main className="player-safe-page min-h-screen overflow-x-hidden bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <section className="relative border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_32%,rgba(34,211,238,0.12),transparent_36%)]" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-6 sm:py-18 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-center lg:py-20">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
              The Official Music Home of Andre Washington
            </div>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Pop Music With Rhythm and Soul.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Rhythm Realm is the official music home of independent recording
              artist Andre Washington — original pop music with rhythm, soul,
              story, and human connection.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <RhythmRealmLink href="#music" target="_self" className={playButtonClass}>
                Listen Now
              </RhythmRealmLink>
              <RhythmRealmLink href="#signup" target="_self" className={outlineButtonClass}>
                Join the Insider List
              </RhythmRealmLink>
            </div>
          </div>
          <article className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-cyan-950/25">
            <Image
              src={featuredSong.cover}
              alt="Coming Over Yesterday cover artwork"
              width={780}
              height={780}
              priority
              className="aspect-square w-full rounded-xl border border-white/10 object-cover"
            />
            <div className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
              Featured Song
            </div>
            <h2 className="mt-2 text-2xl font-semibold">{featuredSong.title}</h2>
            <p className="mt-2 text-sm font-semibold text-cyan-100/75">
              {featuredSong.artist} · {featuredSong.duration}
            </p>
          </article>
        </div>
      </section>

      <section id="music" aria-labelledby="featured-music-heading" className="scroll-mt-24">
        <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-18">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
              Featured Music
            </div>
            <h2 id="featured-music-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Four songs. One direct place to listen.
            </h2>
          </div>
          <article className="mt-9 grid gap-7 rounded-2xl border border-cyan-200/20 bg-cyan-200/[0.055] p-5 sm:p-7 lg:grid-cols-[minmax(230px,0.75fr)_minmax(0,1.25fr)] lg:items-center">
            <Image
              src={featuredSong.cover}
              alt="Cover artwork for Coming Over Yesterday"
              width={720}
              height={720}
              sizes="(max-width: 1024px) 100vw, 420px"
              className="aspect-square w-full rounded-xl border border-white/10 object-cover shadow-2xl"
            />
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/80">Featured Song</div>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{featuredSong.title}</h3>
              <p className="mt-3 text-sm font-semibold text-cyan-100/75">
                {featuredSong.artist} · {featuredSong.duration}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/72">{featuredSong.description}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <button type="button" data-rhythm-realm-track={featuredSong.id} className={playButtonClass} aria-label={`Play ${featuredSong.title}`}>
                  Play
                </button>
                <RhythmRealmLink href="/blog/coming-over-yesterday" target="_self" className={outlineButtonClass}>
                  Read Story &amp; Lyrics
                </RhythmRealmLink>
                <RhythmRealmLink href="/music" target="_self" className={outlineButtonClass}>
                  Open Music Page
                </RhythmRealmLink>
              </div>
            </div>
          </article>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {secondarySongs.map((song) => (
              <article key={song.id} className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-[128px_minmax(0,1fr)] sm:items-start">
                <Image
                  src={song.cover}
                  alt={`${song.title} artwork`}
                  width={320}
                  height={320}
                  className="aspect-square w-full max-w-40 rounded-xl border border-white/10 object-cover sm:max-w-none"
                />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Rhythm Realm Song</div>
                  <h3 className="mt-2 text-2xl font-semibold">{song.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-cyan-100/70">{song.artist}</p>
                  <p className="mt-4 text-sm leading-relaxed text-white/68">{song.description}</p>
                  <div className="mt-5 flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:flex-wrap">
                    <button type="button" data-rhythm-realm-track={song.id} className={playButtonClass} aria-label={`Play ${song.title}`}>
                      Play
                    </button>
                    <RhythmRealmLink href={song.primaryHref} target="_self" className={outlineButtonClass}>
                      {song.primaryLabel}
                    </RhythmRealmLink>
                    {song.secondaryHref ? (
                      <RhythmRealmLink href={song.secondaryHref} target="_self" className={outlineButtonClass}>
                        {song.secondaryLabel}
                      </RhythmRealmLink>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-14 sm:px-6 sm:py-18 lg:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.2fr)] lg:items-center">
          <Image
            src="/comics/the-artist-nobody-heard/issue-1/page-01-the-endless-scroll.png"
            alt="The Artist Nobody Heard Issue 1 artwork showing Julian facing an endless social media scroll"
            width={941}
            height={1672}
            sizes="(max-width: 1024px) 100vw, 420px"
            className="mx-auto h-auto w-full max-w-md rounded-xl border border-white/10 object-contain shadow-2xl"
          />
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">Comic Spotlight</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">The Artist Nobody Heard</h2>
            <p className="mt-3 text-lg font-semibold text-cyan-100">Issue #1: Heard in the Noise</p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Julian is an independent artist trying to be heard in a world of
              endless scrolling, low numbers, and outside pressure. When the
              silence gets too loud, he begins building a home for his art beyond the feed.
            </p>
            <RhythmRealmLink href="/comics/the-artist-nobody-heard/issue-1" target="_self" className={`${playButtonClass} mt-7`}>
              Read Issue #1
            </RhythmRealmLink>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-18">
        <div className="grid gap-7 rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-100/80">Latest Story</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">The Story and Lyrics Behind “Coming Over Yesterday”</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/68">
              Go deeper into the featured song&apos;s modern love story, creative notes, credits, and complete lyrics.
            </p>
          </div>
          <RhythmRealmLink href="/blog/coming-over-yesterday" target="_self" className={outlineButtonClass}>
            Read the Story
          </RhythmRealmLink>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-14 sm:px-6 sm:py-18 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-center">
          <Image
            src="/andre-washington.png"
            alt="Andre Washington, the artist behind Rhythm Realm"
            width={720}
            height={720}
            className="aspect-square w-full max-w-[220px] rounded-xl border border-white/10 object-cover shadow-2xl"
          />
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">About Andre</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Music built from the inside out.</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/70">
              Andre Washington is an independent recording artist creating pop
              music with rhythm and soul. Rhythm Realm is his official music home
              for songs, stories, visuals, and the human connection behind the music.
            </p>
            <RhythmRealmLink href="/about-andre-washington" target="_self" className={`${outlineButtonClass} mt-7`}>
              About Andre
            </RhythmRealmLink>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-18">
        <div className="rounded-2xl border border-cyan-200/20 bg-cyan-200/[0.055] p-6 sm:p-8">
          <EmailSignupForm
            description="Get new music, comic issue drops, behind-the-song stories, and exclusive Rhythm Realm updates."
            buttonLabel="Join the Insider List"
          />
        </div>
      </section>

      <SiteFooter />
      <PlaylistAudioPlayer />
    </main>
  );
}
