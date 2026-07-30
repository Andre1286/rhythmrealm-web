import Image from "next/image";

import trackManifest from "../../public/tracks.json";
import RhythmRealmLink from "@/components/RhythmRealmLink";

type MusicTrackCardProps = {
  id: string;
  href: string;
  cover: string;
  description: string;
  duration?: string;
  cta?: string;
  buttonLabel?: string;
};

export default function MusicTrackCard({
  id,
  href,
  cover,
  description,
  duration,
  cta,
  buttonLabel,
}: MusicTrackCardProps) {
  const track = trackManifest.find((item) => item.id === id);

  if (!track) {
    throw new Error(`Track "${id}" is missing from public/tracks.json.`);
  }

  return (
    <article className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.04] p-5 md:grid-cols-[144px_minmax(0,1fr)] md:items-center">
      <Image
        src={cover}
        alt={`${track.title} artwork`}
        width={240}
        height={240}
        className="aspect-square w-full max-w-36 rounded-lg border border-white/10 object-cover"
      />
      <div>
        <div className="text-sm font-semibold text-white/55">
          {track.artist}
          {duration ? ` | ${duration}` : ""}
        </div>
        <h2 className="mt-2 text-2xl font-semibold">{track.title}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/68 sm:text-base">
          {description}
        </p>
        {cta ? (
          <p className="mt-4 text-sm font-semibold text-cyan-100">{cta}</p>
        ) : null}
        <audio
          controls
          controlsList="nodownload noplaybackrate"
          src={track.src}
          className="mt-5 w-full max-w-xl"
        />
        <div className="mt-5">
          <RhythmRealmLink
            href={href}
            target="_self"
            className="inline-flex rounded-lg border border-white/18 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-black"
          >
            {buttonLabel ??
              (href === "/do-you-ever-wonder"
                ? "Open Song Page"
                : "Ask for Updates")}
          </RhythmRealmLink>
        </div>
      </div>
    </article>
  );
}
