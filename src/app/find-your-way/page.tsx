import type { Metadata } from "next";
import Image from "next/image";

import EmailSignupForm from "@/components/EmailSignupForm";
import MusicTrackCard from "@/components/MusicTrackCard";
import RhythmRealmLink from "@/components/RhythmRealmLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SongNextSteps from "@/components/SongNextSteps";
import { absoluteUrl } from "@/lib/seo";

const songPath = "/find-your-way";
const artworkPath = "/find-your-way/find-your-way-andre-washington.jpg";
const audioPath = "/audio/Find-Your-Way-Andre-Washington.mp3";
const videoUrl = "https://www.youtube.com/watch?v=VhLbJKgBV10";
const seoTitle = "Find Your Way — Andre Washington | Lyrics, Song & Video";
const seoDescription =
  "Listen to Find Your Way by Andre Washington, watch the official video, read the verified lyrics, and explore the song’s meaning and story on Rhythm Realm.";

// Locked lyrics supplied and verified by Andre Washington. Preserve verbatim.
const lyricSections = [
  {
    label: "Verse 1",
    lines: [
      "Every moment here is just the way it is.",
      "I hope that I can show you just how free love is.",
      "I want to be the one who holds you all night long.",
    ],
  },
  { label: "Chorus", lines: ["I hope you find your way."] },
  {
    label: "Verse 2",
    lines: [
      "I saw you yesterday as I was walking by.",
      "I started to speak to you to just say hi.",
      "But I just kept it going, looking at the sky.",
    ],
  },
  { label: "Chorus", lines: ["I hope you find your way."] },
  {
    label: "Final Verse",
    lines: [
      "The road ahead is long, but I believe in time.",
      "The path we walk along will one day intertwine.",
      "Until that moment comes, I'll hold this quiet prayer:",
      "Love will guide you home, and I'll be waiting there.",
    ],
  },
  { label: "Final Chorus / Line", lines: ["I hope you find your way."] },
];

export const metadata: Metadata = {
  title: { absolute: seoTitle },
  description: seoDescription,
  alternates: { canonical: songPath },
  openGraph: {
    type: "website",
    title: seoTitle,
    description: seoDescription,
    url: absoluteUrl(songPath),
    images: [{ url: artworkPath, width: 1280, height: 720, alt: "Find Your Way — official music video artwork" }],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: [artworkPath],
  },
};

export default function FindYourWayPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicRecording",
        "@id": `${absoluteUrl(songPath)}#recording`,
        name: "Find Your Way",
        url: absoluteUrl(songPath),
        image: absoluteUrl(artworkPath),
        description: seoDescription,
        duration: "PT2M30S",
        byArtist: { "@type": "Person", name: "Andre Washington", url: absoluteUrl("/about-andre-washington") },
        audio: { "@type": "AudioObject", contentUrl: absoluteUrl(audioPath), encodingFormat: "audio/mpeg", duration: "PT2M30S" },
        subjectOf: {
          "@type": "VideoObject",
          name: "Find Your Way — Official Music Video",
          description: "Watch the official music video for Find Your Way by Andre Washington on Rhythm Realm.",
          url: videoUrl,
          embedUrl: "https://www.youtube-nocookie.com/embed/VhLbJKgBV10",
          thumbnailUrl: absoluteUrl(artworkPath),
          // Verified against the official YouTube page's uploadDate metadata.
          uploadDate: "2024-12-15T10:26:03-08:00",
        },
      },
      {
        "@type": "MusicComposition",
        name: "Find Your Way",
        composer: { "@type": "Person", name: "Andre Washington" },
        lyrics: { "@type": "CreativeWork", text: lyricSections.map((section) => `${section.label}\n${section.lines.join("\n")}`).join("\n\n") },
        recordedAs: { "@id": `${absoluteUrl(songPath)}#recording` },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <SiteHeader />

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center">
        <Image src={artworkPath} alt="Find Your Way official music video artwork: a silhouetted person on a blue road toward the sunset" width={1280} height={720} sizes="(max-width: 1024px) 100vw, 50vw" unoptimized priority className="h-auto w-full rounded-lg border border-white/10 shadow-2xl" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">Rhythm Realm · Andre Washington</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Find Your Way</h1>
          <RhythmRealmLink href="/about-andre-washington" target="_self" className="mt-3 inline-block text-lg text-cyan-100 underline underline-offset-4">Andre Washington</RhythmRealmLink>
          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">A wish for love to find its way, even when two people are walking different roads.</p>
          <audio controls preload="metadata" controlsList="nodownload noplaybackrate" src={audioPath} aria-label="Listen to Find Your Way by Andre Washington" className="mt-6 w-full">
            Your browser does not support audio playback. <a href={videoUrl}>Listen on YouTube</a>.
          </audio>
          <nav aria-label="Explore Find Your Way" className="mt-7 flex flex-wrap gap-3">
            {[['#official-video', 'Watch the video'], ['#lyrics', 'Read the lyrics'], ['#song-meaning', 'Song meaning'], ['#story-behind-the-song', 'Behind the song']].map(([href, label]) => (
              <RhythmRealmLink key={href} href={href} target="_self" className="rounded-lg border border-white/20 px-4 py-3 text-sm font-semibold transition hover:bg-white hover:text-black">{label}</RhythmRealmLink>
            ))}
          </nav>
        </div>
      </section>

      <section id="official-video" className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-semibold">Watch the official video</h2>
          <iframe src="https://www.youtube-nocookie.com/embed/VhLbJKgBV10" title="Find Your Way by Andre Washington — Official Music Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="mt-7 aspect-video w-full rounded-lg border border-white/10" />
          <RhythmRealmLink href={videoUrl} className="mt-5 inline-block text-cyan-100 underline underline-offset-4">Watch Find Your Way on YouTube</RhythmRealmLink>
        </div>
      </section>

      <section id="lyrics" className="mx-auto w-full max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-semibold">Find Your Way lyrics</h2>
        <p className="mt-4 text-white/60">Lyrics supplied and verified by Andre Washington.</p>
        <div className="mt-8 space-y-8 text-base leading-relaxed text-white/80 sm:text-lg">
          {lyricSections.map((section, index) => (
            <section key={`${section.label}-${index}`}>
              <h3 className="font-semibold text-cyan-100">{section.label}</h3>
              <p className="mt-3 whitespace-pre-line">{section.lines.join("\n")}</p>
            </section>
          ))}
        </div>
      </section>

      <section id="song-meaning" className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-semibold">The meaning of Find Your Way</h2>
          <p className="mt-3 text-sm text-cyan-200/80">An editorial reading of the lyrics</p>
          <div className="mt-5 max-w-3xl space-y-5 text-base leading-relaxed text-white/70">
            <p>The opening verse reaches for closeness: the narrator wants to offer love and hold someone near. The second verse brings that longing into a missed moment. Seeing someone while walking, the narrator considers saying hello, then keeps moving with eyes turned toward the sky.</p>
            <p>In the final verse, longing becomes patient hope. The narrator allows room for distance and time, trusting that their paths may one day intertwine. The emotional center is a wish for the other person to find their way, with love still waiting at the end of the road.</p>
            <p>The title line holds both feelings together: care for another person&apos;s journey and an enduring love expressed from a distance.</p>
          </div>
        </div>
      </section>

      <section id="story-behind-the-song" className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          <h2 className="text-3xl font-semibold">Behind the song</h2>
          <div className="mt-5 space-y-5 text-base leading-relaxed text-white/70">
            <p>I wrote “Find Your Way” in 2024, during a time when I was still growing as a songwriter, producer, and mixer. I was starting to get more confident with my mixes, and this song became one of those records that helped me hear my own progress.</p>
            <p>For me, the song is about caring for someone even when life takes you in different directions. Sometimes you want to say something, sometimes you want to hold on, and sometimes all you can really do is hope that person finds their way.</p>
            <p>Coming back to the song now, I’m proud of how it still feels. I listened to the original mix again in Ableton, and instead of feeling like I needed to redo everything, I heard a song that still carries the emotion I wanted it to have. That’s why I wanted to give “Find Your Way” a permanent home here on Rhythm Realm.</p>
          </div>
        </div>
        <aside className="rounded-lg border border-cyan-200/20 bg-cyan-200/[0.06] p-6">
          <h2 className="text-2xl font-semibold">Credits</h2>
          <dl className="mt-5 space-y-4 text-sm">
            <div><dt className="text-white/55">Artist, songwriting &amp; mix</dt><dd className="mt-1">Andre Washington</dd></div>
            <div><dt className="text-white/55">Brand</dt><dd className="mt-1">Rhythm Realm</dd></div>
            <div><dt className="text-white/55">Originally written &amp; mixed</dt><dd className="mt-1">2024</dd></div>
          </dl>
        </aside>
      </section>

      <section className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-semibold">More from Andre Washington</h2>
          <div className="mt-8 grid gap-5">
            <MusicTrackCard id="track-1" href="/do-you-ever-wonder" cover="/do-you-ever-wonder.png" description="A reflective pop song about searching for a better way forward." buttonLabel="Explore Do You Ever Wonder?" />
            <MusicTrackCard id="track-2" href="/music#if-only-for-the-love" cover="/rhythm-realm-logo.png" description="Keep listening with If Only for the Love from the Rhythm Realm catalog." buttonLabel="Explore If Only for the Love" />
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-6 py-14"><SongNextSteps lyricsHref="#lyrics" signupHref="#signup" /></div>
      <section className="mx-auto w-full max-w-6xl px-6 pb-14"><EmailSignupForm /></section>
      <SiteFooter />
    </main>
  );
}
