import type { NextConfig } from "next";
import { motionComicPath, motionComicWatchPath } from "./src/lib/motionComic";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/post/andre-washington",
        destination: "/about-andre-washington",
        statusCode: 301,
      },
      ...[1, 2, 3].map((issue) => ({
        source: `${motionComicPath}/issue-${issue}`,
        destination: motionComicWatchPath,
        permanent: true,
      })),
    ];
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
