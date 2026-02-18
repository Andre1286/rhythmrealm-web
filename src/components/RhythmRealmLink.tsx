"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

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
  onClick,
  ...props
}: RhythmRealmLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || typeof window === "undefined") {
      return;
    }

    const mergedHref = mergeUtmParams(href, new URLSearchParams(window.location.search));
    if (mergedHref !== href) {
      event.currentTarget.href = mergedHref;
    }
  };

  return (
    <a href={href} target={target} rel={rel} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
