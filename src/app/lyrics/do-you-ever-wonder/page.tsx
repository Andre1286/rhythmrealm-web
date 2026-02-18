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

You look around and it feels like everyone is being pushed to pick a side. Right or left. Us or them. And after a while, it gets tiring. It can make you feel out of breath — like you’re running, but you’re not getting anywhere.

That’s where “Do You Ever Wonder?” came from.

This song is my way of saying: pause for a second… and think.

Because when things feel cold, and love feels far away, we still have a choice. We can look for a better way. We can slow down, breathe, and try to see a brighter day.

One line in this song is simple on purpose: pray.
Not as a debate. Not as a fight.
Just as a quiet moment to reset your heart.

And then there’s the other idea: press play.
Music has a way of bringing people back to themselves. That’s what I want this song to do for you.

I make pop music with rhythm and soul, and this one is built for reflection, hope, and forward motion.`}
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Lyrics</h2>

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
          <h2 className="text-2xl font-semibold">Quick Takeaways</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-white/80">
            <li>Take a breath when the world feels divided and loud.</li>
            <li>Choose reflection, hope, and a better way forward.</li>
            <li>Let music reset your heart, then move with purpose.</li>
          </ul>
          <p className="mt-5 text-base leading-relaxed text-white/80">
            pop music with rhythm and soul.
          </p>
          <p className="mt-2 text-base font-semibold text-cyan-200">#RhythmRealmNet</p>
          <p className="mt-6 text-base font-semibold">
            Discover more on RhythmRealm.net — Thank you for listening.
          </p>
        </div>
      </section>
    </main>
  );
}
