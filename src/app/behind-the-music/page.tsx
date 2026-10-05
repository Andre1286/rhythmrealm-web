import type { Metadata, ResolvingMetadata } from "next";

import RhythmRealmLink from "@/components/RhythmRealmLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const pageMetadata: Metadata = {
  title: "Behind the Music",
  description:
    "Explore the stories, creative process, and emotional ideas behind Andre Washington's Rhythm Realm music.",
  alternates: {
    canonical: "/behind-the-music",
  },
};

const stories = [
  {
    title: "Trying to Let You Go",
    description:
      "Explore the meaning and studio process behind an acoustic pop-soul song about caring for someone while learning to move forward.",
    href: "/blog/trying-to-let-you-go-behind-the-song",
  },
  {
    title: "Do You Ever Wonder?",
    description:
      "Discover Andre’s melody-first writing process and the questions about life, choices, and possibility behind the song.",
    href: "/blog/story-behind-do-you-ever-wonder",
  },
  {
    title: "Coming Over Yesterday",
    description:
      "Read the story of a soulful love song about making time and being ready to show up when someone needs you.",
    href: "/blog/coming-over-yesterday",
  },
];

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const parentMetadata = await parent;

  return {
    ...pageMetadata,
    openGraph: {
      ...parentMetadata.openGraph,
      url: "https://www.rhythmrealm.net/behind-the-music",
    },
  };
}

export default function BehindTheMusicPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            Behind the Music
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            The stories behind the songs.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/68 sm:text-lg">
            Explore the ideas, feelings, and creative choices behind three Rhythm
            Realm songs. Choose a story to go deeper.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.href}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
            >
              <h2 className="text-xl font-semibold">{story.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/68">
                {story.description}
              </p>
              <RhythmRealmLink
                href={story.href}
                target="_self"
                className="mt-6 inline-flex min-h-11 items-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100"
              >
                Read the {story.title} story
              </RhythmRealmLink>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
