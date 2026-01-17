"use client";

import { useState } from "react";

const UTM_BUTTON =
  "https://RhythmRealm.net/?utm_source=hub&utm_medium=button&utm_campaign=where_did_the_time_go";
const UTM_CARD =
  "https://RhythmRealm.net/?utm_source=hub&utm_medium=card&utm_campaign=where_did_the_time_go";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full border border-white/20" />
          <div>
            <div className="text-sm font-semibold tracking-wide">RHYTHM REALM</div>
            <div className="text-xs text-white/60">Universal Hub</div>
          </div>
        </div>

        <a
          href={UTM_BUTTON}
          className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit RhythmRealm.net
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-12 pt-4">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            One link for everything
          </h1>
          <p className="mt-3 text-lg text-white/70">Listen, watch, and join the updates.</p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={UTM_BUTTON}
            className="rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-black hover:opacity-90"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit RhythmRealm.net
          </a>
          <a
            href="#featured-video"
            className="rounded-xl border border-white/20 px-5 py-3 text-center text-sm font-semibold hover:bg-white hover:text-black"
          >
            Watch “Where Did the Time Go”
          </a>
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
            Where Did the Time Go
          </h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/l0rt4Z3cvQI"
                title="Where Did the Time Go"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <p className="mt-5 text-sm text-white/70">
            This is “Where Did the Time Go.”<br />
            Full story + lyrics are on RhythmRealm.net.
          </p>

          <details className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5 text-sm text-white/70">
            <summary className="cursor-pointer text-sm font-semibold text-white">
              Lyrics: “Where Did the Time Go”
            </summary>
            <div className="mt-4 space-y-4 whitespace-pre-line">
              <p>
                Time keeps slipping through my hands, like water I can’t understand...
                A soulful journey through memory, love, and the passage of time.
              </p>
              <p>
                Verse 1
                {"\n"}I’m standing outside of my mind,
                {"\n"}I’m thinking all of the time.
                {"\n"}Where did the time go?
              </p>
              <p>
                Verse 2
                {"\n"}Feeling the years like a breeze on my skin,
                {"\n"}Chasing dreams we lost in the wind.
                {"\n"}Where did the time go?
              </p>
              <p>
                Pre-Chorus
                {"\n"}Every heartbeat’s a memory,
                {"\n"}Every shadow’s a part of me.
                {"\n"}I keep on searching, I need to know,
                {"\n"}Where did the time go?
              </p>
              <p>
                Chorus
                {"\n"}Time keeps slipping through my hands,
                {"\n"}Like water I can’t understand.
                {"\n"}Yesterday feels so close, yet so far—
                {"\n"}Tell me who we really are.
                {"\n"}Where did the time go?
              </p>
              <p>
                Verse 3
                {"\n"}Looking back at the life that we made,
                {"\n"}Pictures fading but the colors still stay.
                {"\n"}Where did the time go?
              </p>
              <p>
                Outro (Reprise)
                {"\n"}I’m standing outside of my mind,
                {"\n"}I’m thinking all of the time.
              </p>
              <p>Pop music with rhythm and soul.</p>
            </div>
          </details>
        </div>
      </section>

      {/* Quick Tiles */}
      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-14 md:grid-cols-3">
        <a
          href={UTM_CARD}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30"
        >
          <div className="text-xs uppercase tracking-widest text-white/50">Explore</div>
          <h3 className="mt-3 text-lg font-semibold">Lyrics + Story</h3>
          <p className="mt-2 text-sm text-white/70">
            Read the full backstory and lyrics on RhythmRealm.net.
          </p>
        </a>

        <a
          href={UTM_CARD}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30"
        >
          <div className="text-xs uppercase tracking-widest text-white/50">Studio</div>
          <h3 className="mt-3 text-lg font-semibold">Behind the Scenes</h3>
          <p className="mt-2 text-sm text-white/70">
            See how the track came together and what’s next.
          </p>
        </a>

        <a
          href="#email-signup"
          className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30"
        >
          <div className="text-xs uppercase tracking-widest text-white/50">Join</div>
          <h3 className="mt-3 text-lg font-semibold">Join Updates</h3>
          <p className="mt-2 text-sm text-white/70">
            Get new releases, behind-the-scenes, and video drops.
          </p>
        </a>
      </section>

      {/* Email Signup */}
      <section id="email-signup" className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="text-xs uppercase tracking-widest text-white/50">Join</div>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Join the Rhythm Realm updates
          </h2>
          <p className="mt-3 text-sm text-white/70">No spam. Unsubscribe anytime.</p>

          <form
            className="mt-6 flex flex-col gap-3 sm:flex-row"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              className="w-full flex-1 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-white/30"
            />
            <button
              type="submit"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
            >
              Join
            </button>
          </form>

          {submitted ? (
            <p className="mt-4 text-sm text-white/70">
              You’re in — look out for the next drop.
            </p>
          ) : null}
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-6xl border-t border-white/10 px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-white/60">Stay connected</div>
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href="https://www.youtube.com/@andrewashington3915"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white"
            >
              YouTube
            </a>
            <a
              href="https://www.instagram.com/andredeewashington/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white"
            >
              Instagram
            </a>
          </div>
          <a
            href={UTM_BUTTON}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black"
          >
            RhythmRealm.net
          </a>
        </div>
      </footer>
    </main>
  );
}
