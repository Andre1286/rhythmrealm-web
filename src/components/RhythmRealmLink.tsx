"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

type RhythmRealmLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

const mergeUtmParams = (href: string, searchParams: URLSearchParams) => {
  try {
    const url = new URL(href);
    searchParams.forEach((value, key) => {
      if (key.startsWith("utm_")) {
        url.searchParams.set(key, value);
      }
    });
    return url.toString();
  } catch {
    return href;
  }
};

export default function RhythmRealmLink({
  href,
  children,
  target = "_blank",
  rel = "noopener noreferrer",
  ...props
}: RhythmRealmLinkProps) {
  const mergedHref =
    typeof window === "undefined"
      ? href
      : mergeUtmParams(href, new URLSearchParams(window.location.search));

  return (
    <a href={mergedHref} target={target} rel={rel} {...props}>
      {children}
    </a>
  );
}
