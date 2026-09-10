import type { Metadata } from "next";
import Image from "next/image";
import styles from "./home.module.css";

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

const playButtonClass = styles.primaryButton;
const outlineButtonClass = styles.textLink;

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
        byArtist: { "@type": "Organization", name: "Terry T Productions" },
        contributor: { "@type": "Person", name: "Andre Washington" },
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
        name: "The Artist Nobody Heard — Issue #3: The Price of Attention",
        url: absoluteUrl("/comics/the-artist-nobody-heard/issue-3"),
      },
    ],
  };

  return (
    <div className={`player-safe-page ${styles.page}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.pageScroll}>
      <a href="#home-content" className={styles.skipLink}>Skip to content</a>
      <SiteHeader />

      <main id="home-content" tabIndex={-1}>
        <section className={`${styles.wrap} ${styles.opening}`} aria-labelledby="home-heading">
          <div className={styles.openingCopy}>
            <p className={styles.eyebrow}>Enter Rhythm Realm</p>
            <h1 id="home-heading" className={styles.heroTitle}>Pop Music With Rhythm and Soul.</h1>
            <p className={styles.intro}>Original music. Human stories.<br />The official music home of Andre Washington.</p>
            <button type="button" data-rhythm-realm-track={featuredSong.id} className={playButtonClass} aria-label="Listen Now — play Coming Over Yesterday">
              Listen Now <span aria-hidden="true">↗</span>
            </button>
            <RhythmRealmLink href="#music" target="_self" className={styles.releaseLink}>
              Discover the featured song <span aria-hidden="true">↓</span>
            </RhythmRealmLink>
          </div>
          <figure className={styles.coverScene}>
            <Image
              src={featuredSong.cover}
              alt="Coming Over Yesterday cover artwork"
              width={1254}
              height={1254}
              sizes="(max-width: 599px) 280px, (max-width: 899px) 440px, (max-width: 1280px) 46vw, 570px"
              priority
              className={styles.cover}
            />
            <figcaption className={styles.coverCaption}>The sound of showing up.</figcaption>
          </figure>
        </section>

        <section id="music" aria-labelledby="featured-music-heading" className={`${styles.wrap} ${styles.featured}`}>
          <div>
            <p className={styles.eyebrow}>01 / Feel the song</p>
            <h2 id="featured-music-heading" className={styles.songTitle}>{featuredSong.title}</h2>
            <p className={styles.credit}>Terry T Productions <span>featuring Andre Washington</span></p>
          </div>
          <div className={styles.featuredAction}>
            <p className={styles.bodyCopy}>A soulful pop love song about devotion, timing, and being there before the moment even asks.</p>
            <div className={styles.actions}>
              <button type="button" data-rhythm-realm-track={featuredSong.id} className={playButtonClass} aria-label={`Play ${featuredSong.title}`}>
                Play the song <span className={styles.duration}>{featuredSong.duration}</span>
              </button>
              <RhythmRealmLink href="/music" target="_self" className={outlineButtonClass}>Open Music Page</RhythmRealmLink>
            </div>
          </div>
        </section>

        <section aria-labelledby="story-heading" className={`${styles.wrap} ${styles.story}`}>
          <div className={styles.storyCopy}>
            <p className={styles.eyebrow}>02 / Behind the music</p>
            <h2 id="story-heading" className={styles.sceneTitle}>A song begins<br />with a feeling.</h2>
            <p className={styles.bodyCopy}>Go inside the modern love story behind “Coming Over Yesterday” — the creative notes, the people who made it, and the words at its heart.</p>
            <div className={styles.actions}>
              <RhythmRealmLink href="/blog/coming-over-yesterday" target="_self" className={outlineButtonClass}>Read the Story <span aria-hidden="true">↗</span></RhythmRealmLink>
              <RhythmRealmLink href="/blog/coming-over-yesterday#coming-over-yesterday-lyrics" target="_self" className={outlineButtonClass}>Read the lyrics</RhythmRealmLink>
            </div>
          </div>
          <aside className={styles.artist} aria-labelledby="artist-heading">
            <Image src="/andre-washington.png" alt="Andre Washington, the artist behind Rhythm Realm" width={720} height={720} sizes="(max-width: 599px) 112px, (max-width: 899px) 160px, 190px" className={styles.artistPortrait} />
            <div>
              <p className={styles.eyebrow}>The artist behind the Realm</p>
              <h3 id="artist-heading">Andre Washington</h3>
            </div>
            <div className={styles.artistDetails}>
              <p className={styles.bodyCopy}>An independent recording artist creating pop music with rhythm, soul, and human connection.</p>
              <RhythmRealmLink href="/about-andre-washington" target="_self" className={styles.artistLink}>About Andre <span aria-hidden="true">↗</span></RhythmRealmLink>
            </div>
          </aside>
        </section>

        <section aria-labelledby="comic-heading" className={styles.comicScene}>
          <div className={`${styles.wrap} ${styles.comicLayout}`}>
            <div className={styles.comicCopy}>
              <p className={styles.eyebrow}>03 / Another chapter</p>
              <p className={styles.bridge}>Music connects us.<br />Some stories ask what it takes to be heard.</p>
              <h2 id="comic-heading" className={styles.comicTitle}>The Artist<br />Nobody Heard</h2>
              <p className={styles.issue}>Issue #3: The Price of Attention</p>
              <p className={styles.bodyCopy}>Julian finally gets the attention he wanted, but new opportunities force him to confront what visibility, ownership, and independence may cost.</p>
              <nav aria-label="Comic spotlight navigation">
                <div className={styles.actions}>
                  <RhythmRealmLink href="/comics/the-artist-nobody-heard/issue-3" target="_self" className={playButtonClass}>Read Issue #3 <span aria-hidden="true">↗</span></RhythmRealmLink>
                  <RhythmRealmLink href="/comics/the-artist-nobody-heard" target="_self" className={outlineButtonClass}>Explore the Series</RhythmRealmLink>
                </div>
                <div className={styles.catchUp}>
                  <span>Catch up</span>
                  <RhythmRealmLink href="/comics/the-artist-nobody-heard/issue-1" target="_self" className={outlineButtonClass}>Start with Issue #1</RhythmRealmLink>
                  <RhythmRealmLink href="/comics/the-artist-nobody-heard/issue-2" target="_self" className={outlineButtonClass}>Read Issue #2</RhythmRealmLink>
                </div>
              </nav>
            </div>
            <figure className={styles.comicArtwork}>
              <Image
                src="/comics/the-artist-nobody-heard/issue-3/issue-3-page-01.png"
                alt="The Artist Nobody Heard Issue #3 artwork showing Julian watching his music spread online"
                width={1055}
                height={1491}
                loading="eager"
                sizes="(max-width: 599px) calc(100vw - 40px), (max-width: 899px) 480px, (max-width: 1280px) 42vw, 520px"
                className={styles.comicPage}
              />
              <figcaption className={styles.comicCaption}>The Artist Nobody Heard / Issue 03 / Opening page</figcaption>
            </figure>
          </div>
        </section>

        <section aria-label="Rhythm Realm Insiders invitation" className={`${styles.wrap} ${styles.insiders}`}>
          <div className={styles.invitation}>
            <p className={styles.eyebrow}>04 / Stay connected</p>
            <p className={styles.invitationTitle}>The story<br />keeps going.</p>
            <p className={styles.bodyCopy}>Stay connected to the world you just discovered.</p>
          </div>
          <div className={styles.signupPresentation}>
            <EmailSignupForm
              description="Sign up for email updates about Rhythm Realm music, comics, and behind-the-song stories."
              buttonLabel="Join the Insider List"
            />
          </div>
        </section>

        <section id="explore" aria-labelledby="explore-heading" className={`${styles.wrap} ${styles.explore}`}>
          <div className={styles.exploreHeading}>
            <div>
              <p className={styles.eyebrow}>05 / Choose your next chapter</p>
              <h2 id="explore-heading" className={styles.sceneTitle}>Explore the Realm.</h2>
            </div>
            <p className={styles.bodyCopy}>Another song. A different perspective.<br />There’s more to discover.</p>
          </div>
          <div className={styles.secondarySongs}>
            {secondarySongs.map((song) => (
              <article key={song.id} className={styles.trackRow}>
                <Image src={song.cover} alt={`${song.title} artwork`} width={160} height={160} sizes="(max-width: 599px) 64px, 80px" className={styles.trackCover} />
                <div className={styles.trackInfo}>
                  <h3>{song.title}</h3>
                  <p>{song.artist}</p>
                </div>
                <div className={styles.trackActions}>
                  <button type="button" data-rhythm-realm-track={song.id} className={styles.smallPlay} aria-label={`Play ${song.title}`}>Play</button>
                  <RhythmRealmLink href={song.primaryHref} target="_self" className={outlineButtonClass}>{song.primaryLabel}</RhythmRealmLink>
                  {song.secondaryHref ? <RhythmRealmLink href={song.secondaryHref} target="_self" className={outlineButtonClass}>{song.secondaryLabel}</RhythmRealmLink> : null}
                </div>
              </article>
            ))}
          </div>
          <nav aria-label="Explore the Realm" className={styles.destinations}>
            {[
              { href: "/music", title: "Music", detail: "Find your next song" },
              { href: "/blog", title: "Stories", detail: "Go beyond the song" },
              { href: "/comics/the-artist-nobody-heard", title: "The Artist Nobody Heard", detail: "Explore all three issues" },
            ].map((destination) => (
              <RhythmRealmLink key={destination.title} href={destination.href} target="_self" className={styles.destination}>
                <span className={styles.destinationTitle}>{destination.title}<span aria-hidden="true">↗</span></span>
                <span className={styles.destinationDetail}>{destination.detail}</span>
              </RhythmRealmLink>
            ))}
          </nav>
          <nav aria-label="More ways to discover" className={styles.morePaths}>
            <RhythmRealmLink href="/do-you-ever-wonder#official-video" target="_self" className={outlineButtonClass}>Videos</RhythmRealmLink>
            <RhythmRealmLink href="/lyrics/do-you-ever-wonder" target="_self" className={outlineButtonClass}>Lyrics</RhythmRealmLink>
            <RhythmRealmLink href="/behind-the-music" target="_self" className={outlineButtonClass}>Behind the Music</RhythmRealmLink>
            <RhythmRealmLink href="https://www.youtube.com/watch?v=pWQU2ojAZFU" className={outlineButtonClass}>Watch “Do You Ever Wonder?” on YouTube <span className={styles.newTab}>(new tab)</span></RhythmRealmLink>
          </nav>
          <div className={styles.closing}>
            <div>
              <h3>The next chapter is yours.</h3>
              <RhythmRealmLink href="#signup" target="_self" className={outlineButtonClass}>Stay connected with Rhythm Realm Insiders <span aria-hidden="true">↗</span></RhythmRealmLink>
            </div>
            <nav aria-label="Connect with Andre" className={styles.contactPaths}>
              <RhythmRealmLink href="/contact#licensing" target="_self" className={outlineButtonClass}>Licensing inquiries</RhythmRealmLink>
              <RhythmRealmLink href="/contact" target="_self" className={outlineButtonClass}>Contact</RhythmRealmLink>
            </nav>
          </div>
        </section>
      </main>
      <SiteFooter />
      </div>
      <PlaylistAudioPlayer />
    </div>
  );
}
