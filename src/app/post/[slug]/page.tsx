import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogArticlePage from "@/components/BlogArticlePage";
import { BLOG_POSTS, getBlogPost } from "@/lib/blogPosts";
import { absoluteUrl } from "@/lib/seo";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const routePrefix = "/post/";

export const dynamicParams = false;

export const generateStaticParams = () =>
  BLOG_POSTS.filter((post) => post.canonicalPath.startsWith(routePrefix)).map(
    (post) => ({
      slug: post.slug,
    }),
  );

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post || !post.canonicalPath.startsWith(routePrefix)) {
    return {};
  }

  const socialImage = post.image ?? "/rhythm-realm-logo.png";

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
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 1200,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.description,
      images: [socialImage],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post || !post.canonicalPath.startsWith(routePrefix)) {
    notFound();
  }

  return <BlogArticlePage post={post} />;
}
