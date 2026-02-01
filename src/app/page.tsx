"use client";

import RhythmRealmLink from "../components/RhythmRealmLink";

const UTM_BUTTON =
  "https://RhythmRealm.net/?utm_source=hub&utm_medium=button&utm_campaign=where_did_the_time_go";
const UTM_CARD =
  "https://RhythmRealm.net/?utm_source=hub&utm_medium=card&utm_campaign=where_did_the_time_go";
const BLOG_POST =
  "https://www.rhythmrealm.net/post/don-t-forget-me-a-love-song-about-holding-on-official-music-video";

export default function Home() {
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
          href={UTM_BUTTON}
          className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black"
        >
          RhythmRealm.net
        </RhythmRealmLink>
      </header>

      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-12 pt-4">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            One link for everything
          </h1>
          <p className="mt-3 text-lg text-white/70">
            Listen, watch, and explore the universe.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <RhythmRealmLink
            href={UTM_BUTTON}
            className="rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-black hover:opacity-90"
          >
            Discover more on RhythmRealm.net — Thank you for listening.
          </RhythmRealmLink>
          <RhythmRealmLink
            href={UTM_CARD}
            className="rounded-xl border border-white/20 px-5 py-3 text-center text-sm font-semibold hover:bg-white hover:text-black"
          >
            Explore the hub
          </RhythmRealmLink>
        </div>
      </section>

      {/* Featured Video */}
      <section
        id="featured-video"
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
                src="https://www.youtube.com/embed/tzwQTNY-ssQ"
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
          href={UTM_CARD}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30"
        >
          <div className="text-xs uppercase tracking-widest text-white/50">Explore</div>
          <h3 className="mt-3 text-lg font-semibold">Lyrics + Story</h3>
          <p className="mt-2 text-sm text-white/70">
            Read the full backstory and lyrics on RhythmRealm.net.
          </p>
        </RhythmRealmLink>

        <RhythmRealmLink
          href={UTM_CARD}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30"
        >
          <div className="text-xs uppercase tracking-widest text-white/50">Studio</div>
          <h3 className="mt-3 text-lg font-semibold">Behind the Scenes</h3>
          <p className="mt-2 text-sm text-white/70">
            See how the track came together and what’s next.
          </p>
        </RhythmRealmLink>

        <RhythmRealmLink
          href={UTM_CARD}
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

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <RhythmRealmLink
              href={UTM_BUTTON}
              className="rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-black hover:opacity-90"
            >
              Discover more on RhythmRealm.net — Thank you for listening.
            </RhythmRealmLink>
            <RhythmRealmLink
              href={UTM_CARD}
              className="rounded-xl border border-white/20 px-5 py-3 text-center text-sm font-semibold hover:bg-white hover:text-black"
            >
              Follow along on RhythmRealm.net
            </RhythmRealmLink>
            <RhythmRealmLink
              href={BLOG_POST}
              className="rounded-xl border border-white/20 px-5 py-3 text-center text-sm font-semibold hover:bg-white hover:text-black"
            >
              Read the blog post
            </RhythmRealmLink>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-6xl border-t border-white/10 px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-white/60">Stay connected</div>
          <div className="flex flex-wrap gap-4 text-sm">
            <RhythmRealmLink href={UTM_BUTTON} className="text-white/70 hover:text-white">
              RhythmRealm.net
            </RhythmRealmLink>
            <RhythmRealmLink href={UTM_CARD} className="text-white/70 hover:text-white">
              Nova Kai on RhythmRealm.net
            </RhythmRealmLink>
          </div>
          <RhythmRealmLink
            href={UTM_BUTTON}
            className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black"
          >
            RhythmRealm.net
          </RhythmRealmLink>
        </div>
      </footer>
    </main>
  );
}
