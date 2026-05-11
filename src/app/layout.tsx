import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import {
  SITE_DESCRIPTION,
  SITE_HOME_URL,
  SITE_NAME,
  SITE_TITLE,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_HOME_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    url: SITE_HOME_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/rhythm-realm-logo.png",
        width: 1200,
        height: 1200,
        alt: "Rhythm Realm logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/rhythm-realm-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_HOME_URL,
        description: SITE_DESCRIPTION,
      },
      {
        "@type": "Person",
        name: "Andre Washington",
        url: SITE_HOME_URL,
        sameAs: [SITE_HOME_URL],
      },
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_HOME_URL,
        description: SITE_DESCRIPTION,
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
