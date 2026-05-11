import type { Metadata } from "next";
import Image from "next/image";

import EmailSignupForm from "@/components/EmailSignupForm";
import RhythmRealmLink from "@/components/RhythmRealmLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import YouTubeVideoCard from "@/components/YouTubeVideoCard";

const videoWatchUrl = "https://www.youtube.com/watch?v=pWQU2ojAZFU";
const songTitle = "Do You Ever Wonder?";

export const metadata: Metadata = {
  title: "Do You Ever Wonder? | Andre Washington | Rhythm Realm",
  description:
    "Listen to Do You Ever Wonder? by Andre Washington, read the lyrics, watch the official video, and explore the story behind the song.",
  alternates: {
    canonical: "/do-you-ever-wonder",
  },
  openGraph: {
    title: "Do You Ever Wonder? | Andre Washington | Rhythm Realm",
    description:
      "Listen to the official single from Andre Washington and read the story behind the song.",
    images: [
      {
        url: "/do-you-ever-wonder/cover-art.png",
        width: 1200,
        height: 1200,
        alt: "Do You Ever Wonder? by Andre Washington cover art",
      },
    ],
  },
};

export default function DoYouEverWonderPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-center">
        <Image
          src="/do-you-ever-wonder/cover-art.png"
          alt="Do You Ever Wonder? by Andre Washington cover art"
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
            {songTitle}
          </h1>
          <p className="mt-2 text-lg text-white/72">Andre Washington</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/68 sm:text-lg">
            A reflective pop release from Rhythm Realm about division, hope,
            prayer, and the search for a brighter day.
          </p>
          <audio
            controls
            controlsList="nodownload noplaybackrate"
            src="/audio/do-you-ever-wonder.mp3"
            className="mt-6 w-full max-w-2xl"
          />
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <RhythmRealmLink
              href="#lyrics"
              target="_self"
              className="rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-cyan-100"
            >
              Read Lyrics
            </RhythmRealmLink>
            <RhythmRealmLink
              href="#official-video"
              target="_self"
              className="rounded-lg border border-white/18 px-5 py-3 text-center text-sm font-semibold transition hover:bg-white hover:text-black"
            >
              Watch Video
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
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              Lyrics
            </div>
            <h2 className="mt-3 text-3xl font-semibold">Lyrics - {songTitle}</h2>
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-white/78 sm:text-base">
              <p>
                <span className="font-semibold text-white">[Verse 1]</span>
                <br />
                Do you ever wonder why we&apos;re here in this life?
                <br />
                They make it very clear.
                <br />
                You&apos;re either on the right or on the left.
                <br />
                Any way you wind up out of breath.
              </p>
              <p>
                <span className="font-semibold text-white">[Chorus]</span>
                <br />
                The way things go, it&apos;s all so cold,
                <br />
                and there&apos;s no love anymore.
                <br />
                We&apos;ve got to find a better way
                <br />
                for us to see a brighter day.
              </p>
              <p>
                <span className="font-semibold text-white">[Verse 2]</span>
                <br />
                If you have the time, I&apos;d like to say,
                <br />
                the way to solve our problems is to pray.
                <br />
                This world we live in is in disarray.
                <br />
                Sit back, relax, and just press play.
              </p>
              <p>
                <span className="font-semibold text-white">[Verse 3]</span>
                <br />
                Do you ever wonder why we&apos;re here?
                <br />
                In this life, they make it very clear.
                <br />
                You&apos;re either on the right or on the left.
                <br />
                Anyway, you wind up out of breath.
              </p>
            </div>
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
              href="/behind-the-music"
              target="_self"
              className="mt-5 inline-flex rounded-lg border border-white/18 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-black"
            >
              Behind the Music
            </RhythmRealmLink>
          </aside>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            Story
          </div>
          <h2 className="mt-3 text-3xl font-semibold">The story behind the song</h2>
          <div className="mt-5 space-y-5 text-base leading-relaxed text-white/70">
            <p>
              &quot;Do You Ever Wonder?&quot; was created from a place of reflection. It
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
              title="Watch Do You Ever Wonder?"
              description="The official video is connected here. If an embedded YouTube player is blocked by the browser, this card still gives visitors a clear way to watch the video on YouTube."
              imageSrc="/do-you-ever-wonder/cover-art.png"
              imageAlt="Do You Ever Wonder? by Andre Washington cover art"
              youtubeUrl={videoWatchUrl}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-14">
        <EmailSignupForm
          title="Get Rhythm Realm updates"
          description="Join the list for song stories, release updates, and new music from Andre Washington."
          buttonLabel="Join Updates"
        />
      </section>

      <SiteFooter />
    </main>
  );
}
