import Image from "next/image";

import RhythmRealmLink from "@/components/RhythmRealmLink";

type YouTubeVideoCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  youtubeUrl: string;
};

export default function YouTubeVideoCard({
  title,
  description,
  imageSrc,
  imageAlt,
  youtubeUrl,
}: YouTubeVideoCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
      <div className="grid gap-0 md:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] md:items-stretch">
        <div className="relative min-h-[240px] overflow-hidden bg-black sm:min-h-[320px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-cover opacity-82"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/92 shadow-2xl"
              aria-hidden="true"
            >
              <span className="ml-1 block h-0 w-0 border-y-[11px] border-l-[18px] border-y-transparent border-l-black" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            Official Video
          </div>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/68 sm:text-base">
            {description}
          </p>
          <RhythmRealmLink
            href={youtubeUrl}
            className="mt-6 inline-flex w-fit rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100"
          >
            Watch on YouTube
          </RhythmRealmLink>
        </div>
      </div>
    </div>
  );
}
