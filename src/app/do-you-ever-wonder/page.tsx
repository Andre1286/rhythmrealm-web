import type { Metadata } from "next";
import Image from "next/image";

import EmailSignupForm from "@/components/EmailSignupForm";
import RhythmRealmLink from "@/components/RhythmRealmLink";
import SongNextSteps from "@/components/SongNextSteps";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import YouTubeVideoCard from "@/components/YouTubeVideoCard";
import { absoluteUrl } from "@/lib/seo";

const videoWatchUrl = "https://www.youtube.com/watch?v=pWQU2ojAZFU";
const insideTheSongVideoPath =
  "/do-you-ever-wonder-inside-the-song/do-you-ever-wonder-inside-the-song.mp4";
const claymationVideoPath = "/videos/do-you-ever-wonder-claymation.mp4";
const songTitle = "Do You Ever Wonder?";
const artistName = "Andre Washington";
const songPagePath = "/do-you-ever-wonder";
const lyricsPagePath = "/lyrics/do-you-ever-wonder";
const coverImagePath = "/do-you-ever-wonder/cover-art.png";
const seoTitle =
  "Do You Ever Wonder — Andre Washington | Song, Story & Video";
const seoDescription =
  "Listen to “Do You Ever Wonder?” by Andre Washington, discover the story behind the reflective pop song, and watch the official videos on RhythmRealm.net.";

const faqItems = [
  {
    question: "Who wrote Do You Ever Wonder?",
    answer:
      "Do You Ever Wonder? is an original song by Andre Washington for Rhythm Realm.",
  },
  {
    question: "What is Do You Ever Wonder about?",
    answer:
      "The song reflects on division, hope, prayer, and wanting a better way forward.",
  },
  {
    question: "Where can I listen to Do You Ever Wonder?",
    answer:
      "You can listen on RhythmRealm.net, the official music home of Andre Washington.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: seoTitle,
  },
  description: seoDescription,
  alternates: {
    canonical: songPagePath,
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: absoluteUrl(songPagePath),
    images: [
      {
        url: coverImagePath,
        width: 1200,
        height: 1200,
        alt: "Do You Ever Wonder by Andre Washington cover art",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: [coverImagePath],
  },
};

export default function DoYouEverWonderPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicRecording",
        name: songTitle,
        url: absoluteUrl(songPagePath),
        image: absoluteUrl(coverImagePath),
        audio: absoluteUrl("/audio/do-you-ever-wonder.mp3"),
        byArtist: {
          "@type": "Person",
          name: artistName,
        },
        description: seoDescription,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((faq) => ({
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

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-center">
        <Image
          src={coverImagePath}
          alt="Do You Ever Wonder by Andre Washington cover art"
          width={720}
          height={720}
          className="mx-auto aspect-square w-full max-w-[360px] rounded-lg border border-white/10 object-cover shadow-2xl"
          priority
        />
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            Official Single
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Do You Ever Wonder? &mdash; Andre Washington
          </h1>
          <p className="mt-2 text-lg text-white/72">{artistName}</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/68 sm:text-lg">
            Listen to &ldquo;Do You Ever Wonder?&rdquo; by Andre Washington, discover
            the story behind this reflective pop song, and watch its official
            videos on RhythmRealm.net.
          </p>
          <audio
            controls
            controlsList="nodownload noplaybackrate"
            src="/audio/do-you-ever-wonder.mp3"
            className="mt-6 w-full max-w-2xl"
          />
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <RhythmRealmLink
              href={lyricsPagePath}
              target="_self"
              className="rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-cyan-100"
            >
              Read the Full &ldquo;Do You Ever Wonder&rdquo; Lyrics
            </RhythmRealmLink>
            <RhythmRealmLink
              href="#story-behind-the-song"
              target="_self"
              className="rounded-lg border border-white/18 px-5 py-3 text-center text-sm font-semibold transition hover:bg-white hover:text-black"
            >
              Story Behind the Song
            </RhythmRealmLink>
            <RhythmRealmLink
              href="/music"
              target="_self"
              className="rounded-lg border border-cyan-200/30 px-5 py-3 text-center text-sm font-semibold text-cyan-100 transition hover:bg-cyan-100 hover:text-black"
            >
              More Music
            </RhythmRealmLink>
          </div>
        </div>
      </section>

      <section id="lyrics" className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              Lyrics
            </div>
            <h2 className="mt-3 text-3xl font-semibold">
              Read the Full Do You Ever Wonder Lyrics
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/68">
              Follow every verse and chorus on the dedicated official lyrics
              page for &ldquo;Do You Ever Wonder?&rdquo; by Andre Washington.
            </p>
            <RhythmRealmLink
              href={lyricsPagePath}
              target="_self"
              className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100"
            >
              Read the Full Lyrics
            </RhythmRealmLink>
          </div>

          <aside className="rounded-lg border border-cyan-200/20 bg-cyan-200/[0.06] p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
              Song Notes
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/72">
              The song carries the feeling of looking around, seeing people pulled
              apart, and still believing there is a better way to move forward.
            </p>
            <RhythmRealmLink
              href="#story-behind-the-song"
              target="_self"
              className="mt-5 inline-flex rounded-lg border border-white/18 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-black"
            >
              Read the Story
            </RhythmRealmLink>
          </aside>
        </div>
      </section>

      <section
        id="story-behind-the-song"
        className="mx-auto w-full max-w-6xl px-6 py-14"
      >
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            Story
          </div>
          <h2 className="mt-3 text-3xl font-semibold">Story Behind the Song</h2>
          <div className="mt-5 space-y-5 text-base leading-relaxed text-white/70">
            <p>
              &ldquo;Do You Ever Wonder&rdquo; was created from a place of reflection. It
              asks what happens when the noise gets loud, the world feels divided,
              and people still need love, clarity, and hope.
            </p>
            <p>
              The song is not trying to force every answer. It gives space to the
              question itself: why are we here, where are we headed, and how can
              we find a better way?
            </p>
            <p>
              That is the heart of Rhythm Realm: music that lets real emotion
              breathe while keeping rhythm and melody at the center.
            </p>
          </div>
        </div>
      </section>

      <section
        id="inside-the-song"
        className="border-y border-white/10 bg-white/[0.035]"
      >
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
              Inside the Song
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Inside the Song: Do You Ever Wonder?
            </h2>
          </div>

          <div className="mt-7 space-y-7">
            <div className="max-w-4xl space-y-5 text-base leading-relaxed text-white/70">
              <p>
                &ldquo;Do You Ever Wonder?&rdquo; is a reflective song about trying to find
                meaning in a world that can feel cold, divided, and disconnected.
              </p>
              <p>
                At Rhythm Realm, the music lives directly on RhythmRealm.net. No
                algorithm has to decide whether you hear it. No feed has to push
                it in front of you. You can go straight to the source, listen to
                the song, read the lyrics, and connect with the story behind the
                music.
              </p>
              <p>
                Join the email list and receive an MP3 download of &ldquo;Do You Ever
                Wonder?&rdquo; or other songs featured on the website.
              </p>
              <p>
                Rhythm Realm is also working on new music, including &ldquo;Coming
                Over Yesterday,&rdquo; a collaboration with Terry T Productions.
              </p>
            </div>

            <div className="max-w-5xl">
              <div className="overflow-hidden rounded-lg border border-cyan-200/20 bg-black shadow-2xl shadow-cyan-950/20">
                <video
                  className="aspect-video w-full bg-black object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/do-you-ever-wonder/cover-art.png"
                >
                  <source src={insideTheSongVideoPath} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mt-6 max-w-4xl space-y-5 rounded-lg border border-white/10 bg-black/32 p-5 text-sm leading-relaxed text-white/70 sm:text-base">
                <p>
                  Music should not get lost in the noise. RhythmRealm.net is the
                  direct-to-listener home for Andre Washington&rsquo;s songs, stories,
                  lyrics, and updates.
                </p>
                <p>
                  Visit https://RhythmRealm.net, join the email list, and get an
                  MP3 download.
                </p>
                <p>
                  Also stay connected for upcoming music, including &ldquo;Coming Over
                  Yesterday,&rdquo; a collaboration with Terry T Productions.
                </p>
                <p>
                  Discover more on RhythmRealm.net &mdash; Thank you for
                  listening.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="claymation-version" className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
              Claymation Version
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Do You Ever Wonder? &mdash; Claymation Version
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              Watch the claymation version of &ldquo;Do You Ever Wonder?&rdquo; &mdash; a
              new visual take on Rhythm Realm&rsquo;s reflective pop song about faith,
              pressure, and finding a better way forward.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[380px] overflow-hidden rounded-lg border border-cyan-200/20 bg-black shadow-2xl shadow-cyan-950/20">
            <video
              className="aspect-[9/16] w-full bg-black object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/do-you-ever-wonder/cover-art.png"
            >
              <source src={claymationVideoPath} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.7fr)]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              Artist
            </div>
            <h2 className="mt-3 text-3xl font-semibold">About Andre Washington</h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70">
              Andre Washington is an independent recording artist and music
              entrepreneur behind Rhythm Realm. His work focuses on direct,
              heartfelt pop music with rhythm, soul, and a clear connection to
              listeners.
            </p>
          </div>
          <div className="rounded-lg border border-cyan-200/20 bg-cyan-200/[0.06] p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
              Rhythm Realm
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/72">
              Rhythm Realm is the independent music brand where fans can listen
              to songs, read lyrics, follow the stories behind releases, and stay
              connected with new music.
            </p>
            <RhythmRealmLink
              href="/about-andre-washington"
              target="_self"
              className="mt-5 inline-flex rounded-lg border border-white/18 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-black"
            >
              About Andre
            </RhythmRealmLink>
          </div>
        </div>
      </section>

      <section id="official-video" className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              Official Video
            </div>
            <h2 className="mt-3 text-3xl font-semibold">Watch the visual</h2>
          </div>
          <div className="mt-7">
            <YouTubeVideoCard
              title="Watch Do You Ever Wonder"
              description="The official video is connected here. If an embedded YouTube player is blocked by the browser, this card still gives visitors a clear way to watch the video on YouTube."
              imageSrc="/do-you-ever-wonder/cover-art.png"
              imageAlt="Do You Ever Wonder by Andre Washington cover art"
              youtubeUrl={videoWatchUrl}
            />
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <SongNextSteps
          lyricsHref={lyricsPagePath}
          signupHref="#signup"
        />
      </div>

      <section className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              Questions
            </div>
            <h2 className="mt-3 text-3xl font-semibold">FAQ</h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {faqItems.map((faq) => (
              <section
                key={faq.question}
                className="rounded-lg border border-white/10 bg-black/32 p-5"
              >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {faq.answer}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-14">
        <EmailSignupForm />
      </section>

      <SiteFooter />
    </main>
  );
}
