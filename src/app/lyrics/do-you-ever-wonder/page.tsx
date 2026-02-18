import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andre Washington – Do You Ever Wonder? (Lyrics + Story)",
  description:
    "Read the story and full lyrics for Do You Ever Wonder?, then visit RhythmRealm.net for more music with rhythm and soul.",
};

export default function DoYouEverWonderLyricsStoryPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto w-full max-w-4xl px-6 pb-16 pt-12">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
          Do You Ever Wonder? — Lyrics + Story
        </h1>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">
            The Story Behind &ldquo;Do You Ever Wonder?&rdquo;
          </h2>
          <p className="mt-5 whitespace-pre-line text-base leading-relaxed text-white/80">
            {`Sometimes life feels like a tug-of-war.

It can seem like everyone is pushed to pick a side—right or left—and after a while it gets exhausting.

That’s where “Do You Ever Wonder?” came from.

This song is my way of saying: pause for a second… and think.

When everything feels cold and love feels far away, we still have a choice. We can slow down, breathe, and look for a better way.`}
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Lyrics — &ldquo;Do You Ever Wonder?&rdquo;</h2>

          <h3 className="mt-6 text-lg font-semibold">Verse 1</h3>
          <p className="mt-2 whitespace-pre-line text-base leading-relaxed text-white/80">
            Do you ever wonder why we&apos;re here in this life?{"\n"}
            They make it very clear. You&apos;re either on the right or on the left.
            {"\n"}
            Any way you wind up out of breath.
          </p>

          <h3 className="mt-6 text-lg font-semibold">Chorus</h3>
          <p className="mt-2 whitespace-pre-line text-base leading-relaxed text-white/80">
            The way things go, it&apos;s all so cold, and there&apos;s no love anymore.
            {"\n"}
            We&apos;ve got to find a better way for us to see a brighter day.
          </p>

          <h3 className="mt-6 text-lg font-semibold">Verse 2</h3>
          <p className="mt-2 whitespace-pre-line text-base leading-relaxed text-white/80">
            If you have the time, I&apos;d like to say,{"\n"}
            the way to solve our problems is to pray.{"\n"}
            This world we live in is in disarray.{"\n"}
            Sit back, relax, and just press play.
          </p>

          <h3 className="mt-6 text-lg font-semibold">Verse 3 (repeat Verse 1)</h3>
          <p className="mt-2 whitespace-pre-line text-base leading-relaxed text-white/80">
            Do you ever wonder why we&apos;re here?{"\n"}
            In this life, they make it very clear.{"\n"}
            You&apos;re either on the right or on the left.{"\n"}
            Anyway, you wind up out of breath.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <p className="text-base leading-relaxed text-white/80">
            RhythmRealm.net is the music hub now — music, video, right here on the
            hub. Thanks for listening.
          </p>
        </div>
      </section>
    </main>
  );
}
