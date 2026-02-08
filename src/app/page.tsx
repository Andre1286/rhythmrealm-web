"use client";

import Image from "next/image";
import RhythmRealmLink from "../components/RhythmRealmLink";

const LINKS = {
  songHub: "https://RhythmRealm.net",
  lyricsStory:
    "https://www.rhythmrealm.net/post/do-you-ever-wonder-why-i-wrote-this-song-and-what-press-play-really-means",
  bts: "https://www.rhythmrealm.net/post/don-t-forget-me-a-love-song-about-holding-on-official-music-video",
  connect: "https://RhythmRealm.net",
  youtubeEmbed: "https://www.youtube.com/embed/tzwQTNY-ssQ",
};

export default function Home() {
  const handleWatchNow = () => {
    document.getElementById("video")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <img
            src="/rr-logo.png"
            alt="Rhythm Realm logo"
            className="h-10 w-10 rounded-full border border-cyan-300/40 shadow-[0_0_18px_rgba(34,211,238,0.35)]"
          />
          <div>
            <div className="text-sm font-semibold tracking-wide">RHYTHM REALM</div>
            <div className="text-xs text-white/60">Universal Hub</div>
          </div>
        </div>

        <RhythmRealmLink
          href={LINKS.songHub}
          className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black"
        >
          RhythmRealm.net
        </RhythmRealmLink>
      </header>

      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-12 pt-4">
        <div className="flex flex-col gap-8 md:grid md:grid-cols-[minmax(0,1fr)_360px] md:items-start md:gap-10">
          <div className="max-w-2xl md:col-start-1">
            <div className="text-xs uppercase tracking-widest text-white/50">
              Universal Song Hub
            </div>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
              Andre Washington - &quot;Do You Ever Wonder?&quot; (Official Single)
            </h1>
            <p className="mt-3 text-lg text-white/70">
              Pop music with rhythm and soul. Hit play, then explore the lyrics + story
              on RhythmRealm.net.
            </p>
          </div>

          <div className="md:col-start-2 md:row-start-1 md:row-end-3">
            <Image
              src="/do-you-ever-wonder.png"
              alt="Do You Ever Wonder? cover art"
              width={520}
              height={520}
              sizes="(max-width: 768px) 80vw, 360px"
              priority={true}
              className="w-full max-w-[360px] rounded-2xl border border-white/10 shadow-lg"
            />
            <audio
              controls
              src="/audio/do-you-ever-wonder.mp3"
              controlsList="nodownload"
              onContextMenu={(event) => event.preventDefault()}
              className="w-full mt-4"
            />
          </div>

          <div className="md:col-start-1">
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleWatchNow}
                className="rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-black hover:opacity-90"
              >
                Watch Now
              </button>
              <RhythmRealmLink
                href={LINKS.songHub}
                className="rounded-xl border border-white/20 px-5 py-3 text-center text-sm font-semibold hover:bg-white hover:text-black"
              >
                Explore RhythmRealm.net
              </RhythmRealmLink>
            </div>
            <p className="mt-4 text-xs text-white/60">
              New release | Official video | Updated weekly
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section
        id="video"
        className="mx-auto w-full max-w-6xl px-6 pb-14"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="text-xs uppercase tracking-widest text-white/50">
            Featured Right Now
          </div>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Featured video
          </h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={LINKS.youtubeEmbed}
                title="Featured video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <p className="mt-5 text-sm text-white/70">
            Artist and producer: Andre Washington.
          </p>
          <p className="mt-2 text-sm text-white/70">
            Watch the lead visual, then dive deeper on RhythmRealm.net.
          </p>
        </div>
      </section>

      {/* Quick Tiles */}
      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-14 md:grid-cols-3">
        <RhythmRealmLink
          href={LINKS.lyricsStory}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30"
        >
          <div className="text-xs uppercase tracking-widest text-white/50">Explore</div>
          <h3 className="mt-3 text-lg font-semibold">Lyrics + Story</h3>
          <p className="mt-2 text-sm text-white/70">
            Read the full backstory and lyrics on RhythmRealm.net.
          </p>
        </RhythmRealmLink>

        <RhythmRealmLink
          href={LINKS.bts}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30"
        >
          <div className="text-xs uppercase tracking-widest text-white/50">Studio</div>
          <h3 className="mt-3 text-lg font-semibold">Studio Behind the Scenes</h3>
          <p className="mt-2 text-sm text-white/70">
            See how the track came together and what's next.
          </p>
        </RhythmRealmLink>

        <RhythmRealmLink
          href={LINKS.connect}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30"
        >
          <div className="text-xs uppercase tracking-widest text-white/50">Connect</div>
          <h3 className="mt-3 text-lg font-semibold">Stay Connected</h3>
          <p className="mt-2 text-sm text-white/70">
            Follow along with new drops and exclusive updates.
          </p>
        </RhythmRealmLink>
      </section>

      {/* Stay Connected */}
      <section id="stay-connected" className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="text-xs uppercase tracking-widest text-white/50">
            Stay connected
          </div>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Rhythm Realm is your portal
          </h2>
          <p className="mt-3 text-sm text-white/70">
            pop music with rhythm and soul.
          </p>
          <div className="mt-4 text-sm font-semibold text-cyan-200">
            #RhythmRealmNet
          </div>

          <div className="mt-6">
            <RhythmRealmLink
              href={LINKS.songHub}
              className="inline-flex rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-black hover:opacity-90"
            >
              Discover more on RhythmRealm.net - Thank you for listening.
            </RhythmRealmLink>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-6xl border-t border-white/10 px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-white/60">Stay connected</div>
          <div className="flex flex-wrap gap-4 text-sm">
            <RhythmRealmLink href={LINKS.songHub} className="text-white/70 hover:text-white">
              RhythmRealm.net
            </RhythmRealmLink>
            <RhythmRealmLink href={LINKS.connect} className="text-white/70 hover:text-white">
              Nova Kai on RhythmRealm.net
            </RhythmRealmLink>
          </div>
          <RhythmRealmLink
            href={LINKS.songHub}
            className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black"
          >
            RhythmRealm.net
          </RhythmRealmLink>
        </div>
      </footer>
    </main>
  );
}
