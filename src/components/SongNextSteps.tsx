import RhythmRealmLink from "@/components/RhythmRealmLink";

type SongNextStepsProps = {
  lyricsHref: string;
  signupHref?: string;
  className?: string;
};

export default function SongNextSteps({
  lyricsHref,
  signupHref = "/contact#signup",
  className = "",
}: SongNextStepsProps) {
  return (
    <section
      aria-labelledby="song-next-steps-title"
      className={`rounded-lg border border-cyan-200/20 bg-cyan-200/[0.06] p-6 sm:p-8 ${className}`}
    >
      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
        Keep Exploring
      </div>
      <h2
        id="song-next-steps-title"
        className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
      >
        Enjoyed this song?
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/68 sm:text-base">
        Keep the music going, spend a little more time with the words, or get new
        Rhythm Realm releases and stories first.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <RhythmRealmLink
          href="/music"
          target="_self"
          className="rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-cyan-100"
        >
          Listen to more music
        </RhythmRealmLink>
        <RhythmRealmLink
          href={lyricsHref}
          target="_self"
          className="rounded-lg border border-white/18 px-5 py-3 text-center text-sm font-semibold transition hover:bg-white hover:text-black"
        >
          Read the lyrics
        </RhythmRealmLink>
        <RhythmRealmLink
          href={signupHref}
          target="_self"
          className="rounded-lg border border-cyan-200/30 px-5 py-3 text-center text-sm font-semibold text-cyan-100 transition hover:bg-cyan-100 hover:text-black"
        >
          Join the Rhythm Realm Insider List
        </RhythmRealmLink>
      </div>
    </section>
  );
}