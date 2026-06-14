import type { Metadata } from "next";

import RhythmRealmLink from "@/components/RhythmRealmLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { BLOG_POSTS } from "@/lib/blogPosts";
import { absoluteUrl } from "@/lib/seo";

const blogTitle = "Rhythm Realm Blog | Music Stories by Andre Washington";
const blogDescription =
  "Read simple Rhythm Realm stories about Andre Washington's songs, lyrics, soulful pop music, and the ideas behind each release.";
const blogImage = "/rhythm-realm-logo.png";

export const metadata: Metadata = {
  title: {
    absolute: blogTitle,
  },
  description: blogDescription,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: blogTitle,
    description: blogDescription,
    url: absoluteUrl("/blog"),
    images: [
      {
        url: blogImage,
        width: 1200,
        height: 1200,
        alt: "Rhythm Realm logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: blogTitle,
    description: blogDescription,
    images: [blogImage],
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
            Blog
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Rhythm Realm music stories and song notes.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/68 sm:text-lg">
            Read simple notes about Andre Washington&apos;s music, lyrics,
            soulful pop, and the ideas behind each release on RhythmRealm.net.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                {post.category ?? "Rhythm Realm Notes"}
              </div>
              <h2 className="mt-3 text-2xl font-semibold">{post.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/68">{post.excerpt}</p>
              <RhythmRealmLink
                href={post.canonicalPath}
                target="_self"
                className="mt-5 inline-flex rounded-lg border border-white/18 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-black"
              >
                Read More
              </RhythmRealmLink>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
              Featured Song
            </div>
            <h2 className="mt-3 text-3xl font-semibold">Do You Ever Wonder?</h2>
            <p className="mt-4 text-base leading-relaxed text-white/68">
              Listen to the featured Rhythm Realm song, read the lyrics, and
              follow the story behind the release.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <RhythmRealmLink
              href="/do-you-ever-wonder"
              target="_self"
              className="rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-cyan-100"
            >
              Song Page
            </RhythmRealmLink>
            <RhythmRealmLink
              href="/lyrics/do-you-ever-wonder"
              target="_self"
              className="rounded-lg border border-cyan-200/30 px-5 py-3 text-center text-sm font-semibold text-cyan-100 transition hover:bg-cyan-100 hover:text-black"
            >
              Lyrics
            </RhythmRealmLink>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
