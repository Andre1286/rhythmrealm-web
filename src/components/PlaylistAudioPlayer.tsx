"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

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
    id: "track-1",
    title: "Do You Ever Wonder?",
    src: "/audio/do-you-ever-wonder.mp3",
    artist: "Andre Washington",
  },
  {
    id: "track-2",
    title: "If Only for the Love",
    src: "/audio/if only for the love. By Andre Washington.mp3",
    artist: "Andre Washington",
  },
];

export default function PlaylistAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [tracks, setTracks] = useState<Track[]>(FALLBACK_TRACKS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

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

      audio?.pause();
      setCurrentIndex(wrappedIndex);
      setIsPlaying(false);
      if (!audio) return;

      audio.src = tracks[wrappedIndex].src;
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
      className="sticky-audio-player rounded-2xl border border-cyan-200/20 bg-black/92 p-3 shadow-2xl shadow-black/70"
    >
      {currentTrack ? (
        <>
          <div className="grid gap-3 md:grid-cols-[minmax(0,220px)_minmax(260px,1fr)_auto] md:items-center">
            <div className="min-w-0" aria-live="polite">
              <div className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cyan-200/75">
                Now Playing
              </div>
              <div className="truncate text-sm font-semibold">{currentTrack.title}</div>
              <div className="truncate text-xs text-white/55">
                {currentTrack.artist ?? "Rhythm Realm"}
              </div>
            </div>
            <audio
              ref={audioRef}
              controls
              src={currentTrack.src}
              controlsList="nodownload noplaybackrate"
              aria-label={`${currentTrack.title} audio controls`}
              onContextMenu={(event) => event.preventDefault()}
              onEnded={handleEnded}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full min-w-0"
            />
            <div className="flex gap-2">
              <button type="button" aria-label="Previous track" onClick={handlePrev} className="min-h-10 rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold hover:bg-white hover:text-black">
                Prev
              </button>
              <button type="button" aria-label={isPlaying ? "Pause current track" : "Play current track"} onClick={isPlaying ? pauseCurrent : () => void playCurrent()} className="min-h-10 rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold hover:bg-white hover:text-black">
                {isPlaying ? "Pause" : "Play"}
              </button>
              <button type="button" aria-label="Next track" onClick={handleNext} className="min-h-10 rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold hover:bg-white hover:text-black">
                Next
              </button>
            </div>
          </div>
          <details className="mt-2 border-t border-white/10 pt-2">
            <summary className="w-fit cursor-pointer rounded text-xs font-semibold text-cyan-100/80 hover:text-cyan-100">
              Choose a track
            </summary>
            <ul className="mt-2 grid max-h-36 gap-2 overflow-y-auto pr-1 sm:grid-cols-3">
              {tracks.map((track, index) => {
                const isSelected = index === currentIndex;
                return (
                  <li key={track.id}>
                    <button
                      type="button"
                      aria-pressed={isSelected}
                      aria-label={`Select ${track.title}`}
                      onClick={() => handleSelectTrack(index)}
                      className={`h-full w-full rounded-lg border px-3 py-2 text-left text-sm transition ${
                        isSelected
                          ? "border-cyan-300/60 bg-cyan-300/10"
                          : "border-white/10 bg-white/5 hover:border-white/30"
                      }`}
                    >
                      <div className="font-semibold">{track.title}</div>
                      {track.artist ? <div className="text-xs text-white/60">{track.artist}</div> : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          </details>
        </>
      ) : null}
    </section>
  );
}
