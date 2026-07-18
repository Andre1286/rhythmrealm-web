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

  const socialTitle = post.socialTitle ?? post.seoTitle;
  const socialDescription = post.socialDescription ?? post.description;
  const socialImage = post.image
    ? {
        url: absoluteUrl(post.image.src),
        width: post.image.width,
        height: post.image.height,
        alt: post.image.alt,
      }
    : undefined;

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
      title: socialTitle,
      description: socialDescription,
      url: absoluteUrl(post.canonicalPath),
      authors: ["Andre Washington"],
      tags: post.tags,
      ...(socialImage ? { images: [socialImage] } : {}),
    },
    twitter: {
      card: socialImage ? "summary_large_image" : "summary",
      title: socialTitle,
      description: socialDescription,
      ...(socialImage
        ? { images: [{ url: socialImage.url, alt: socialImage.alt }] }
        : {}),
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
