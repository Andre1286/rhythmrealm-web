import type { Metadata } from "next";
import Image from "next/image";
import RhythmRealmLink from "../../components/RhythmRealmLink";

const VIDEO_EMBED_URL = "https://www.youtube.com/embed/pWQU2ojAZFU";

export const metadata: Metadata = {
  title: "Andre Washington - Do You Ever Wonder? Lyrics, Story & Official Video | Rhythm Realm",
  description:
    "Read the lyrics to \"Do You Ever Wonder?\" by Andre Washington, hear the song, watch the official video, and explore the story behind the music at RhythmRealm.net.",
};

export default function DoYouEverWonderPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto w-full max-w-6xl px-6 pb-12 pt-12">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="text-xs uppercase tracking-widest text-white/50">
            OFFICIAL SINGLE • LYRICS • STORY
          </div>
          <div className="mt-5 grid gap-6 md:grid-cols-[260px_minmax(0,1fr)] md:items-center">
            <div className="mx-auto w-full max-w-[260px]">
              <Image
                src="/do-you-ever-wonder/cover-art.png"
                alt="Cover art for “don’t want to worry about you”"
                width={260}
                height={260}
                className="h-auto w-full rounded-2xl border border-white/10 shadow-lg"
                priority={true}
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl">Do You Ever Wonder?</h1>
              <p className="mt-2 text-base font-medium text-white/75 sm:text-lg">
                Andre Washington
              </p>
              <p className="mt-3 max-w-[48ch] text-sm leading-relaxed text-white/70 sm:text-base">
                Read the lyrics, hear the song, and discover the story behind
                &nbsp;&ldquo;Do You Ever Wonder?&rdquo; - a Rhythm Realm release from Andre
                Washington.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <RhythmRealmLink
                  href="#lyrics"
                  className="rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-black hover:opacity-90"
                >
                  Read Lyrics
                </RhythmRealmLink>
                <RhythmRealmLink
                  href="#official-video"
                  className="rounded-xl border border-white/20 px-5 py-3 text-center text-sm font-semibold hover:bg-white hover:text-black"
                >
                  Watch Official Video
                </RhythmRealmLink>
                <RhythmRealmLink
                  href="/"
                  className="rounded-xl border border-white/20 px-5 py-3 text-center text-sm font-semibold hover:bg-white hover:text-black"
                >
                  Hear the Song
                </RhythmRealmLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lyrics" className="mx-auto w-full max-w-6xl px-6 pb-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">Lyrics - Do You Ever Wonder?</h2>
          <div className="mt-5 space-y-5 text-sm leading-relaxed text-white/80 sm:text-base">
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
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">The Story Behind the Song</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
            &ldquo;Do You Ever Wonder?&rdquo; was created from a place of reflection. It is about
            the thoughts people have when the noise dies down and deeper questions rise -
            questions about life, love, distance, purpose, and the emotions we feel but
            cannot always explain.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
            This song is not trying to force answers. It is meant to sit with the feeling
            of wondering and give space to curiosity, honesty, and connection. The message
            is simple: a lot of people carry these questions, even if they never say them
            out loud.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
            The heart of the song is connection - turning reflective emotion into music for
            listeners who have ever asked why certain moments, thoughts, and feelings linger.
          </p>
        </div>
      </section>

      <section id="official-video" className="mx-auto w-full max-w-6xl px-6 pb-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">Official Video</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={VIDEO_EMBED_URL}
                title="Do You Ever Wonder? Official Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-14">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold sm:text-3xl">More from Rhythm Realm</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
              Looking for another track? Explore &ldquo;If Only for the Love&rdquo; and more
              music directly from the Rhythm Realm landing page.
            </p>
            <RhythmRealmLink
              href="/"
              className="mt-5 inline-flex rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white hover:text-black"
            >
              Go to RhythmRealm.net
            </RhythmRealmLink>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold sm:text-3xl">Discover More</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
              Discover more songs, videos, and updates from Andre Washington on Rhythm Realm.
            </p>
            <RhythmRealmLink
              href="/"
              className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
            >
              Discover more on RhythmRealm.net
            </RhythmRealmLink>
          </div>
        </div>
      </section>
    </main>
  );
}
