"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import PlaylistAudioPlayer from "../components/PlaylistAudioPlayer";
import RhythmRealmLink from "../components/RhythmRealmLink";

const LINKS = {
  songHub: "https://RhythmRealm.net",
  lyricsStory: "/lyrics/do-you-ever-wonder",
  aboutMe: "/about-me",
  contactMe: "/contact-me",
  youtubeEmbed: "https://www.youtube.com/embed/pWQU2ojAZFU",
};

export default function Home() {
  const playerZoneRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isWidgetEligible, setIsWidgetEligible] = useState(false);
  const [isPlayerInView, setIsPlayerInView] = useState(false);

  const handleWatchNow = () => {
    document.getElementById("video")?.scrollIntoView({ behavior: "smooth" });
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
            src="/rr-logo.png"
            alt="Rhythm Realm logo"
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
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
              Andre Washington - &quot;Do You Ever Wonder?&quot; (Official Single)
            </h1>
            <p className="mt-3 text-lg text-white/70">
              Listen to the official single, read the lyrics, and explore the story on
              RhythmRealm.net.
            </p>
          </div>

          <div ref={playerZoneRef} className="md:col-start-2 md:row-start-1 md:row-end-3">
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
                onClick={handleWatchNow}
                className="rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-black hover:opacity-90"
              >
                Watch Now
              </button>
              <RhythmRealmLink
                href={LINKS.songHub}
                className="rounded-xl border border-white/20 px-5 py-3 text-center text-sm font-semibold hover:bg-white hover:text-black"
              >
                Discover More
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
