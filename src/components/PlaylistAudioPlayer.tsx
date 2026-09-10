"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";

type Track = {
  id: string;
  title: string;
  src: string;
  artist?: string;
};

const FALLBACK_TRACKS: Track[] = [
  {
    id: "coming-over-yesterday",
    title: "Coming Over Yesterday",
    src: "/audio/coming-over-yesterday.mp3",
    artist: "Terry T Productions featuring Andre Washington",
  },
  {
    id: "trying-to-let-you-go",
    title: "Trying to Let You Go",
    src: "/audio/trying-to-let-you-go-andre-washington.mp3",
    artist: "Andre Washington",
  },
  {
    id: "track-1",
    title: "Do You Ever Wonder?",
    src: "/audio/do-you-ever-wonder.mp3",
    artist: "Andre Washington",
  },
  {
    id: "track-2",
    title: "If Only for the Love",
    src: "/audio/if-only-for-the-love-remastered.mp3",
    artist: "Andre Washington",
  },
];

export default function PlaylistAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [tracks, setTracks] = useState<Track[]>(FALLBACK_TRACKS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const expandRef = useRef<HTMLButtonElement | null>(null);
  const hasInteracted = useRef(false);

  const collapsePlayer = () => {
    setIsExpanded(false);
    expandRef.current?.focus();
  };

  useEffect(() => {
    const loadTracks = async () => {
      try {
        const response = await fetch("/tracks.json", { cache: "no-store" });
        if (!response.ok) {
          setTracks(FALLBACK_TRACKS);
          return;
        }
        const data = (await response.json()) as Track[];
        const sanitizedTracks = Array.isArray(data)
          ? data.filter(
              (track) =>
                typeof track?.id === "string" &&
                typeof track?.title === "string" &&
                typeof track?.src === "string",
            )
          : [];
        if (hasInteracted.current) return;
        setTracks(sanitizedTracks.length > 0 ? sanitizedTracks : FALLBACK_TRACKS);
        setCurrentIndex(0);
      } catch {
        setTracks(FALLBACK_TRACKS);
      }
    };

    void loadTracks();
  }, []);

  const currentTrack = useMemo(() => tracks[currentIndex], [tracks, currentIndex]);

  const playCurrent = async () => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;
    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const pauseCurrent = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
  };

  const switchTrack = useCallback(
    async (nextIndex: number, shouldPlay: boolean) => {
      if (!tracks.length) return;
      const wrappedIndex = (nextIndex + tracks.length) % tracks.length;
      const audio = audioRef.current;

      hasInteracted.current = true;
      if (shouldPlay) setHasStarted(true);
      audio?.pause();
      flushSync(() => setCurrentIndex(wrappedIndex));
      setIsPlaying(false);
      if (!audio) return;

      audio.load();
      if (shouldPlay) {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch {
          setIsPlaying(false);
        }
      }
    },
    [tracks],
  );

  useEffect(() => {
    const handleHomepagePlay = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const trigger = target?.closest<HTMLElement>("[data-rhythm-realm-track]");
      const trackId = trigger?.dataset.rhythmRealmTrack;
      if (!trackId) return;

      const requestedIndex = tracks.findIndex((track) => track.id === trackId);
      if (requestedIndex >= 0) void switchTrack(requestedIndex, true);
    };

    document.addEventListener("click", handleHomepagePlay);
    return () => document.removeEventListener("click", handleHomepagePlay);
  }, [switchTrack, tracks]);

  const handleSelectTrack = (index: number) => void switchTrack(index, isPlaying);
  const handleNext = () => void switchTrack(currentIndex + 1, isPlaying);
  const handlePrev = () => void switchTrack(currentIndex - 1, isPlaying);
  const handleEnded = () => void switchTrack(currentIndex + 1, true);

  return (
    <section
      id="rhythm-realm-player"
      aria-label="Rhythm Realm music player"
      hidden={!hasStarted}
      data-expanded={isExpanded}
      className="sticky-audio-player"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isExpanded) {
          event.preventDefault();
          collapsePlayer();
        }
      }}
    >
      {currentTrack ? (
        <>
          <div className="player-heading">
            <div className="player-track" aria-live="polite" aria-atomic="true">
              <span className="player-state">{isPlaying ? "Now playing" : "Paused"}</span>
              <span className="player-title" title={currentTrack.title}>{currentTrack.title}</span>
              <span className="player-artist">{currentTrack.artist ?? "Rhythm Realm"}</span>
            </div>
            <button
              type="button"
              aria-label={isPlaying ? "Pause current track" : "Play current track"}
              onClick={isPlaying ? pauseCurrent : () => void playCurrent()}
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
            <button
              ref={expandRef}
              type="button"
              aria-label={isExpanded ? "Collapse player" : "Expand player controls"}
              aria-expanded={isExpanded}
              aria-controls="player-controls"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Collapse" : "More"}
            </button>
          </div>
          <div id="player-controls" className="player-controls">
            <p className="player-full-credit">
              {currentTrack.title} — {currentTrack.artist ?? "Rhythm Realm"}
            </p>
            <audio
              ref={audioRef}
              controls
              preload="none"
              src={currentTrack.src}
              controlsList="nodownload noplaybackrate"
              aria-label={`${currentTrack.title} audio controls`}
              onContextMenu={(event) => event.preventDefault()}
              onEnded={handleEnded}
              onPlay={() => { setHasStarted(true); setIsPlaying(true); }}
              onPause={() => setIsPlaying(false)}
            />
            <div className="player-skip">
              <button type="button" aria-label="Previous track" onClick={handlePrev}>Prev</button>
              <button type="button" aria-label="Next track" onClick={handleNext}>Next</button>
            </div>
            <div className="player-selection">
              <h2>Choose a track</h2>
              <ul>
                {tracks.map((track, index) => (
                  <li key={track.id}>
                    <button
                      type="button"
                      aria-pressed={index === currentIndex}
                      aria-label={`Select ${track.title}`}
                      onClick={() => handleSelectTrack(index)}
                    >
                      <span>{track.title}</span>
                      {track.artist ? <small>{track.artist}</small> : null}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : null}
    </section>
  );
}