import Image from "next/image";

import EmailSignupForm from "@/components/EmailSignupForm";
import PlaylistAudioPlayer from "@/components/PlaylistAudioPlayer";
import RhythmRealmLink from "@/components/RhythmRealmLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import YouTubeVideoCard from "@/components/YouTubeVideoCard";
import { FAQ_ENTRIES } from "@/lib/faqEntries";

const featuredSong = "Do You Ever Wonder?";

const featureCards = [
  {
    href: "/music",
    eyebrow: "Listen",
    title: "Music",
    text: "Hear featured songs from Andre Washington and keep the Rhythm Realm player close.",
    target: "home-card-music",
  },
  {
    href: "/about-andre-washington",
    eyebrow: "Artist",
    title: "About Andre Washington",
    text: "Meet the independent artist, songwriter, and producer behind Rhythm Realm.",
    target: "home-card-about",
  },
  {
    href: "/behind-the-music",
    eyebrow: "Stories",
    title: "Behind the Music",
    text: "Go deeper into the meaning, process, and emotion behind each release.",
    target: "home-card-behind-the-music",
  },
  {
    href: "/contact",
    eyebrow: "Connect",
    title: "Contact / Email Signup",
    text: "Reach Andre directly and join the email list for music updates.",
    target: "home-card-contact",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black pb-44 text-white">
      <SiteHeader />

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-center">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            Official Music Home
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Rhythm Realm is Andre Washington&apos;s home for pop music with rhythm and soul.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            RhythmRealm.net is the main destination for Andre Washington&apos;s
            music. Listen to the songs, watch the visuals, read the stories, and
            stay connected to the emotion behind the music.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <RhythmRealmLink
              href="/music"
              target="_self"
              className="rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-cyan-100"
            >
              Listen Now
            </RhythmRealmLink>
            <RhythmRealmLink
              href="/do-you-ever-wonder"
              target="_self"
              className="rounded-lg border border-white/18 px-5 py-3 text-center text-sm font-semibold transition hover:bg-white hover:text-black"
            >
              Open Featured Song
            </RhythmRealmLink>
            <RhythmRealmLink
              href="#signup"
              target="_self"
              className="rounded-lg border border-cyan-200/30 px-5 py-3 text-center text-sm font-semibold text-cyan-100 transition hover:bg-cyan-100 hover:text-black"
            >
              Join Updates
            </RhythmRealmLink>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[390px]">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border border-cyan-200/10 bg-cyan-200/[0.04]" />
            <Image
              src="/do-you-ever-wonder.png"
              alt="Do You Ever Wonder? cover art"
              width={780}
              height={780}
              priority
              className="relative aspect-square w-full rounded-lg border border-white/10 object-cover shadow-2xl"
            />
          </div>
          <div className="mt-6">
            <div className="text-xs uppercase tracking-[0.18em] text-white/45">
              Featured Release
            </div>
            <h2 className="mt-2 text-2xl font-semibold">{featuredSong}</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              A reflective single from Andre Washington about searching for a
              better way forward.
            </p>
          </div>
          <PlaylistAudioPlayer />
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-12 md:grid-cols-3">
          <div>
            <div className="text-3xl font-semibold">Direct</div>
            <p className="mt-2 text-sm leading-relaxed text-white/62">
              A website-first home for songs, stories, and connection.
            </p>
          </div>
          <div>
            <div className="text-3xl font-semibold">Soulful</div>
            <p className="mt-2 text-sm leading-relaxed text-white/62">
              Pop music shaped by rhythm, melody, and lived emotion.
            </p>
          </div>
          <div>
            <div className="text-3xl font-semibold">Growing</div>
            <p className="mt-2 text-sm leading-relaxed text-white/62">
              A clean hub ready for more songs, videos, and behind-the-music pages.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-8 border-b border-white/10 pb-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
              What Is Rhythm Realm?
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              A clear home base for Andre Washington&apos;s music.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-white/68">
            <p>
              Rhythm Realm is the official website for Andre Washington. It is
              built so listeners can come straight to the source for music,
              videos, lyrics, song stories, and updates.
            </p>
            <p>
              The sound is pop music with rhythm and soul: melodic, emotional,
              and personal without losing the groove. This first version keeps
              the site simple so every visitor can quickly understand where to
              listen, what to explore, and how to stay connected.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
              Explore
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Start with the music. Stay for the story.
            </h2>
          </div>
          <RhythmRealmLink
            href="/music"
            target="_self"
            className="inline-flex rounded-lg border border-white/18 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-black"
          >
            View Music
          </RhythmRealmLink>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {featureCards.map((card) => (
            <RhythmRealmLink
              key={card.href}
              href={card.href}
              target="_self"
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-200/40 hover:bg-cyan-200/[0.06]"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                {card.eyebrow}
              </div>
              <h3 className="mt-3 text-2xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/66">{card.text}</p>
            </RhythmRealmLink>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 pb-16 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-center">
        <Image
          src="/dont-want-to-worry-about-you-cover-high.jpg"
          alt="Cover art for don't want to worry about you"
          width={520}
          height={520}
          className="mx-auto aspect-square w-full max-w-[260px] rounded-lg border border-white/10 object-cover shadow-2xl"
        />
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
            Work in Progress
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Working on new music
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/68">
            Andre is currently working on a new song called &quot;don&apos;t want
            to worry about you.&quot; This section keeps the original landing-page
            update alive while giving future releases a natural place to grow.
          </p>
          <RhythmRealmLink
            href="/contact"
            target="_self"
            className="mt-6 inline-flex rounded-lg border border-white/18 px-5 py-3 text-sm font-semibold transition hover:bg-white hover:text-black"
          >
            Join for Updates
          </RhythmRealmLink>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 pb-16 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-100/80">
            Featured Song Page
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Do You Ever Wonder?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/68">
            The first song page brings the release together: cover art, lyrics,
            story, audio, and the official video in one focused place.
          </p>
          <RhythmRealmLink
            href="/do-you-ever-wonder"
            target="_self"
            className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100"
          >
            Visit the Song Page
          </RhythmRealmLink>
        </div>

        <YouTubeVideoCard
          title="Watch the official video"
          description="The video link is already connected. Open the official YouTube video for Do You Ever Wonder? directly from RhythmRealm.net."
          imageSrc="/do-you-ever-wonder.png"
          imageAlt="Do You Ever Wonder? cover art"
          youtubeUrl="https://www.youtube.com/watch?v=pWQU2ojAZFU"
        />
      </section>

      <section className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
              Behind the Song
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Behind the Song: Do You Ever Wonder?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/68">
              A closer look at the feeling, story, and meaning behind Andre
              Washington&apos;s song &quot;Do You Ever Wonder?&quot; Read the story
              and stay connected with new Rhythm Realm music.
            </p>
          </div>
          <RhythmRealmLink
            href="/do-you-ever-wonder"
            target="_self"
            className="inline-flex shrink-0 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100"
          >
            Read Behind the Song
          </RhythmRealmLink>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="border-t border-white/10 pt-14">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            FAQ
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Rhythm Realm FAQ
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {FAQ_ENTRIES.map((item) => (
              <details
                key={item.question}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-white">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-white/68">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-cyan-200/[0.055]">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <EmailSignupForm
            title="Join the Rhythm Realm list"
            description="Join the Rhythm Realm list and get new songs, behind-the-music stories, and direct updates from Andre Washington."
            buttonLabel="Join the List"
          />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
