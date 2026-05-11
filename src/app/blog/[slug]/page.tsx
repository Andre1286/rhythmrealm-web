import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogArticlePage from "@/components/BlogArticlePage";
import { BLOG_POSTS, getBlogPost } from "@/lib/blogPosts";
import { absoluteUrl } from "@/lib/seo";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const routePrefix = "/blog/";

export const dynamicParams = false;

export const generateStaticParams = () =>
  BLOG_POSTS.filter((post) => post.canonicalPath.startsWith(routePrefix)).map(
    (post) => ({
      slug: post.slug,
    }),
  );

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post || !post.canonicalPath.startsWith(routePrefix)) {
    return {};
  }

  return {
    title: {
      absolute: post.seoTitle,
    },
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: post.canonicalPath,
    },
    openGraph: {
      type: "article",
      title: post.seoTitle,
      description: post.description,
      url: absoluteUrl(post.canonicalPath),
      authors: ["Andre Washington"],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post || !post.canonicalPath.startsWith(routePrefix)) {
    notFound();
  }

  return <BlogArticlePage post={post} />;
}
