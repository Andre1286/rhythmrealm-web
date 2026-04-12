"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import Script from "next/script";
import PlaylistAudioPlayer from "../components/PlaylistAudioPlayer";
import RhythmRealmLink from "../components/RhythmRealmLink";

const LINKS = {
  songHub: "https://RhythmRealm.net",
  lyricsStory: "/do-you-ever-wonder",
  aboutMe: "/about-me",
  contactMe: "/contact-me",
  youtubeEmbed: "https://www.youtube.com/embed/pWQU2ojAZFU",
};

export default function Home() {
  const playerZoneRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isWidgetEligible, setIsWidgetEligible] = useState(false);
  const [isPlayerInView, setIsPlayerInView] = useState(false);
  const [signupEmail, setSignupEmail] = useState("");
  const [signupWebsite, setSignupWebsite] = useState("");
  const [signupStatus, setSignupStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [signupMessage, setSignupMessage] = useState("");
  const [signupStartedAt] = useState(() => Date.now());

  const handleJoinList = () => {
    document.getElementById("join-list")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSignupSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (signupStatus === "loading") {
      return;
    }

    setSignupStatus("loading");
    setSignupMessage("");

    const urlSearchParams =
      typeof window === "undefined" ? new URLSearchParams() : new URLSearchParams(window.location.search);
    const utm = Object.fromEntries(
      Array.from(urlSearchParams.entries()).filter(([key]) => key.startsWith("utm_")),
    );

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: signupEmail,
          website: signupWebsite,
          startedAt: signupStartedAt,
          sourceUrl: typeof window === "undefined" ? "" : window.location.href,
          utm,
        }),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        message?: string;
      };

      if (!response.ok || !payload.ok) {
        setSignupStatus("error");
        setSignupMessage(payload.message ?? "Unable to sign up right now. Please try again.");
        return;
      }

      setSignupStatus("success");
      setSignupMessage("Thanks for joining. You’re on the Rhythm Realm list.");
      setSignupEmail("");
      setSignupWebsite("");
    } catch {
      setSignupStatus("error");
      setSignupMessage("Unable to sign up right now. Please try again.");
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateMobile = (event: MediaQueryList | MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    updateMobile(mediaQuery);
    mediaQuery.addEventListener("change", updateMobile);
    return () => mediaQuery.removeEventListener("change", updateMobile);
  }, []);

  useEffect(() => {
    const playerZone = playerZoneRef.current;
    if (!playerZone) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPlayerInView(entry.isIntersecting);
      },
      { threshold: 0.35 },
    );

    observer.observe(playerZone);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMobile) {
      return;
    }

    let hasTriggered = false;

    const triggerWidget = () => {
      if (hasTriggered) {
        return;
      }
      hasTriggered = true;
      setIsWidgetEligible(true);
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(timerId);
    };

    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight <= 0 ? 1 : window.scrollY / scrollableHeight;
      if (progress >= 0.35) {
        triggerWidget();
      }
    };

    const timerId = window.setTimeout(triggerWidget, 8000);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(timerId);
    };
  }, [isMobile]);

  const shouldShowWidget = (!isMobile || isWidgetEligible) && !isPlayerInView;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <Image
            src="/rhythm-realm-logo.png"
            alt="Official Rhythm Realm logo mark"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full border border-cyan-300/40 shadow-[0_0_18px_rgba(34,211,238,0.35)]"
          />
          <div>
            <div className="text-sm font-semibold tracking-wide">RHYTHM REALM</div>
            <div className="text-xs text-white/60">Official Music Hub</div>
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
              OFFICIAL SINGLE • LYRICS • STORY
            </div>
            <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
              Do You Ever Wonder?
            </h1>
            <p className="mt-2 text-base font-medium text-white/75 sm:text-lg">
              Andre Washington • Official Single
            </p>
            <p className="mt-3 max-w-[34ch] text-base leading-relaxed text-white/65 sm:max-w-2xl sm:text-lg">
              Stream the single, watch the official video, and get the MP3 sent directly to
              your inbox.
            </p>
          </div>

          <div ref={playerZoneRef} className="md:col-start-2 md:row-start-1 md:row-end-3">
            <div className="mb-4 flex justify-center">
              <Image
                src="/rhythm-realm-logo.png"
                alt="Rhythm Realm logo mark"
                width={72}
                height={72}
                className="h-14 w-14 rounded-full border border-cyan-300/30 opacity-90 shadow-[0_0_14px_rgba(34,211,238,0.25)] sm:h-16 sm:w-16"
              />
            </div>
            <Image
              src="/do-you-ever-wonder.png"
              alt="Do You Ever Wonder? cover art"
              width={520}
              height={520}
              sizes="(max-width: 768px) 80vw, 360px"
              priority={true}
              className="w-full max-w-[360px] rounded-2xl border border-white/10 shadow-lg"
            />
            <PlaylistAudioPlayer />
          </div>

          <div className="md:col-start-1">
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleJoinList}
                className="rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-black hover:opacity-90"
              >
                Get MP3 + Join List
              </button>
              <RhythmRealmLink
                href={LINKS.lyricsStory}
                target="_self"
                rel={undefined}
                className="rounded-xl border border-white/20 px-5 py-3 text-center text-sm font-semibold hover:bg-white hover:text-black"
              >
                Read Lyrics + Story
              </RhythmRealmLink>
            </div>
            <p className="mt-4 text-xs text-white/60">
              New release | Official video | Free MP3 via email
            </p>
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="text-xs uppercase tracking-widest text-white/50">STAY CONNECTED</div>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl" id="join-list">
            Join my email list
          </h2>
          <p className="mt-3 text-sm text-white/70 sm:text-base">
            Want a copy of the song? Enter your email and I will send the MP3 file
            directly to your inbox.
          </p>
          <p className="mt-2 text-xs text-white/60">
            No spam. You can unsubscribe at any time.
          </p>

          <form onSubmit={handleSignupSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
            <label htmlFor="signup-email" className="sr-only">
              Email address
            </label>
            <input
              id="signup-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={signupEmail}
              onChange={(event) => setSignupEmail(event.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white sm:flex-1"
            />
            <input
              type="text"
              name="website"
              value={signupWebsite}
              onChange={(event) => setSignupWebsite(event.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
            />
            <button
              type="submit"
              disabled={signupStatus === "loading"}
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {signupStatus === "loading" ? "Submitting..." : "Join the List"}
            </button>
          </form>
          {signupMessage ? (
            <p
              className={`mt-3 text-sm ${
                signupStatus === "success" ? "text-cyan-200" : "text-red-300"
              }`}
            >
              {signupMessage}
            </p>
          ) : null}
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

      {/* Lyrics + Story SEO */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="text-xs uppercase tracking-widest text-white/50">LYRICS + STORY</div>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            About &ldquo;Do You Ever Wonder?&rdquo;
          </h2>
          <p className="mt-3 text-sm text-white/70 sm:text-base">
            Andre Washington’s official single blends pop music with rhythm and soul.
            On RhythmRealm.net, you can read the lyrics and explore the story behind
            &ldquo;Do You Ever Wonder?&rdquo;
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white/60">
                Story Behind the Song
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                &ldquo;Do You Ever Wonder?&rdquo; reflects on division, confusion, and hope.
                The song invites listeners to slow down, think clearly, and search for a
                better way forward when life feels pulled in opposite directions.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white/60">
                Lyrics (Excerpt)
              </h3>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-white/80">
                {`Verse 1
Do you ever wonder why we're here in this life?
They make it very clear. You're either on the right or on the left.
Any way you wind up out of breath.

Chorus
The way things go, it's all so cold, and there's no love anymore.
We've got to find a better way for us to see a brighter day.`}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <RhythmRealmLink
              href={LINKS.lyricsStory}
              target="_self"
              rel={undefined}
              className="inline-flex rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white hover:text-black"
            >
              Read Full Lyrics + Story
            </RhythmRealmLink>
          </div>
        </div>
      </section>

      {/* New Music / Work in Progress */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-100">
            Work in Progress
          </div>
          <div className="mt-5 grid gap-6 md:grid-cols-[220px_minmax(0,1fr)] md:items-center">
            <div className="mx-auto w-full max-w-[220px]">
              <Image
                src="/dont-want-to-worry-about-you-cover-high.jpg"
                alt="Cover art for “don’t want to worry about you”"
                width={220}
                height={220}
                className="h-auto w-full rounded-2xl border border-white/10 shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">Working on New Music</h2>
              <p className="mt-3 text-base font-medium text-white/75">
                Current song in progress: &ldquo;don&rsquo;t want to worry about you&rdquo;
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                I&rsquo;m currently working on a new song called &ldquo;don&rsquo;t want to worry about
                you.&rdquo; It&rsquo;s still a work in progress, and more details will be shared soon.
                Stay tuned for updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tiles */}
      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-14 md:grid-cols-1">
        <RhythmRealmLink
          href={LINKS.lyricsStory}
          target="_self"
          rel={undefined}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30"
        >
          <div className="text-xs uppercase tracking-widest text-white/50">Explore</div>
          <h3 className="mt-3 text-lg font-semibold">Lyrics + Story</h3>
          <p className="mt-2 text-sm text-white/70">
            Read the full backstory and lyrics on RhythmRealm.net.
          </p>
        </RhythmRealmLink>
        <RhythmRealmLink
          href={LINKS.aboutMe}
          target="_self"
          rel={undefined}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30"
        >
          <div className="text-xs uppercase tracking-widest text-white/50">About</div>
          <h3 className="mt-3 text-lg font-semibold">About Me</h3>
          <p className="mt-2 text-sm text-white/70">
            Learn more about Andre Washington and the story behind the music.
          </p>
        </RhythmRealmLink>
        <RhythmRealmLink
          href={LINKS.contactMe}
          target="_self"
          rel={undefined}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30"
        >
          <div className="text-xs uppercase tracking-widest text-white/50">Contact</div>
          <h3 className="mt-3 text-lg font-semibold">Contact Me</h3>
          <p className="mt-2 text-sm text-white/70">
            Reach out directly by email for collaborations and inquiries.
          </p>
        </RhythmRealmLink>
      </section>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-6xl border-t border-white/10 px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-white/60">Official links</div>
          <div className="flex flex-wrap gap-4 text-sm">
            <RhythmRealmLink href={LINKS.songHub} className="text-white/70 hover:text-white">
              RhythmRealm.net
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
      {/* ElevenLabs Voice Agent Widget */}
      {shouldShowWidget ? (
        <div
          className="convai-widget-safe"
          dangerouslySetInnerHTML={{
            __html: `<elevenlabs-convai agent-id="agent_3401kj6tq8x7e9jrcxz0tc01pnvb"></elevenlabs-convai>`,
          }}
        />
      ) : null}
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
      />
    </main>
  );
}
