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
  const rhythmRealmId = `${SITE_HOME_URL}#rhythm-realm`;
  const andreWashingtonId = `${SITE_HOME_URL}#andre-washington`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicGroup",
        "@id": rhythmRealmId,
        name: SITE_NAME,
        url: SITE_HOME_URL,
        description: SITE_DESCRIPTION,
        genre: "Pop music with rhythm and soul",
        member: {
          "@id": andreWashingtonId,
        },
        sameAs: [SITE_HOME_URL],
      },
      {
        "@type": "Person",
        "@id": andreWashingtonId,
        name: "Andre Washington",
        url: SITE_HOME_URL,
        description:
          "Independent recording artist, songwriter, and producer behind Rhythm Realm.",
        memberOf: {
          "@id": rhythmRealmId,
        },
        sameAs: [SITE_HOME_URL],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_HOME_URL}#website`,
        name: SITE_NAME,
        url: SITE_HOME_URL,
        description: SITE_DESCRIPTION,
        about: {
          "@id": rhythmRealmId,
        },
        publisher: {
          "@id": rhythmRealmId,
        },
        inLanguage: "en-US",
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
