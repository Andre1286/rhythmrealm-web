import type { Metadata } from "next";
import { notFound } from "next/navigation";

import RhythmRealmLink from "@/components/RhythmRealmLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { BLOG_POSTS, getBlogPost } from "@/lib/blogPosts";
import { absoluteUrl } from "@/lib/seo";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export const generateStaticParams = () =>
  BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: {
      absolute: post.seoTitle,
    },
    description: post.description,
    alternates: {
      canonical: post.canonicalPath,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.description,
      url: absoluteUrl(post.canonicalPath),
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />

      <article className="mx-auto w-full max-w-4xl px-6 py-16">
        <RhythmRealmLink
          href="/blog"
          target="_self"
          className="text-sm font-semibold text-cyan-100 hover:text-white"
        >
          Back to Blog
        </RhythmRealmLink>

        <div className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
          Rhythm Realm Notes
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-white/68 sm:text-lg">
          {post.description}
        </p>

        <div className="mt-12 space-y-10 border-t border-white/10 pt-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-white/72">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row">
          <RhythmRealmLink
            href="/do-you-ever-wonder"
            target="_self"
            className="rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-cyan-100"
          >
            Listen to Do You Ever Wonder?
          </RhythmRealmLink>
          <RhythmRealmLink
            href="/lyrics/do-you-ever-wonder"
            target="_self"
            className="rounded-lg border border-cyan-200/30 px-5 py-3 text-center text-sm font-semibold text-cyan-100 transition hover:bg-cyan-100 hover:text-black"
          >
            Read Lyrics
          </RhythmRealmLink>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
