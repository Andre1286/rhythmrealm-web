import type { MetadataRoute } from "next";

import { BLOG_POSTS } from "@/lib/blogPosts";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    { path: "/", priority: 1 },
    { path: "/do-you-ever-wonder", priority: 0.95 },
    { path: "/lyrics/do-you-ever-wonder", priority: 0.9 },
    { path: "/comics/the-artist-nobody-heard/issue-1", priority: 0.9 },
    { path: "/blog", priority: 0.85 },
    { path: "/music", priority: 0.8 },
    { path: "/behind-the-music", priority: 0.7 },
    { path: "/about-andre-washington", priority: 0.65 },
    { path: "/contact", priority: 0.6 },
    ...BLOG_POSTS.map((post) => ({
      path: post.canonicalPath,
      priority: 0.75,
    })),
  ];

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
