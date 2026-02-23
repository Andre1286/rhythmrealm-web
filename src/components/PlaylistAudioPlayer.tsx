"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Track = {
  id: string;
  title: string;
  src: string;
  artist?: string;
};

export default function PlaylistAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Owner workflow:
    // 1) Put MP3 files in /public/audio
    // 2) Update /public/tracks.json with root-relative src paths
    // 3) Deploy
    const loadTracks = async () => {
      try {
        const response = await fetch("/tracks.json", { cache: "no-store" });
        if (!response.ok) {
          return;
        }
        const data = (await response.json()) as Track[];
        if (Array.isArray(data) && data.length > 0) {
          setTracks(
            data.filter(
              (track) =>
                typeof track?.id === "string" &&
                typeof track?.title === "string" &&
                typeof track?.src === "string",
            ),
          );
        }
      } catch {
        // Keep UI resilient if manifest is unavailable.
      }
    };

    void loadTracks();
  }, []);

  const currentTrack = useMemo(() => tracks[currentIndex], [tracks, currentIndex]);

  const playCurrent = async () => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) {
      return;
    }
    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const pauseCurrent = () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }
    audio.pause();
    setIsPlaying(false);
  };

  const switchTrack = async (nextIndex: number, shouldPlay: boolean) => {
    if (!tracks.length) {
      return;
    }
    const wrappedIndex = (nextIndex + tracks.length) % tracks.length;
    const audio = audioRef.current;

    if (audio) {
      audio.pause();
    }

    setCurrentIndex(wrappedIndex);
    setIsPlaying(false);

    if (!audio) {
      return;
    }

    const nextTrack = tracks[wrappedIndex];
    audio.src = nextTrack.src;
    audio.load();

    if (shouldPlay) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }
  };

  const handleSelectTrack = (index: number) => {
    void switchTrack(index, isPlaying);
  };

  const handleNext = () => {
    void switchTrack(currentIndex + 1, isPlaying);
  };

  const handlePrev = () => {
    void switchTrack(currentIndex - 1, isPlaying);
  };

  const handleEnded = () => {
    void switchTrack(currentIndex + 1, true);
  };

  return (
    <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-4">
      {currentTrack ? (
        <>
          <audio
            ref={audioRef}
            controls
            src={currentTrack.src}
            controlsList="nodownload noplaybackrate"
            onContextMenu={(event) => event.preventDefault()}
            onEnded={handleEnded}
            className="w-full"
          />
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              aria-label="Previous track"
              onClick={handlePrev}
              className="rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Prev
            </button>
            <button
              type="button"
              aria-label={isPlaying ? "Pause current track" : "Play current track"}
              onClick={isPlaying ? pauseCurrent : () => void playCurrent()}
              className="rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
            <button
              type="button"
              aria-label="Next track"
              onClick={handleNext}
              className="rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Next
            </button>
          </div>
          <ul className="mt-3 space-y-2">
            {tracks.map((track, index) => {
              const isSelected = index === currentIndex;
              return (
                <li key={track.id}>
                  <button
                    type="button"
                    onClick={() => handleSelectTrack(index)}
                    className={`w-full rounded-lg border px-3 py-2 text-left text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                      isSelected
                        ? "border-cyan-300/60 bg-cyan-300/10"
                        : "border-white/10 bg-white/5 hover:border-white/30"
                    }`}
                  >
                    <div className="font-semibold">{track.title}</div>
                    {track.artist ? (
                      <div className="text-xs text-white/60">{track.artist}</div>
                    ) : null}
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <div className="text-sm text-white/60">No tracks found in /tracks.json.</div>
      )}
    </div>
  );
}
