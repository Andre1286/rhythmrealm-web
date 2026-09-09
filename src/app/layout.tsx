import type { Metadata } from "next";
import SiteAnalytics from "@/components/SiteAnalytics";
import "./globals.css";

import {
  SITE_DESCRIPTION,
  SITE_HOME_URL,
  SITE_NAME,
  SITE_TITLE,
} from "@/lib/seo";

const ANDRE_PROFILE_URL = "https://www.rhythmrealm.net/about-andre-washington";
const ANDRE_LINKEDIN_URL = "https://www.linkedin.com/in/andre-washington-423335191";

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
        "@id": `${SITE_HOME_URL}#organization`,
        name: SITE_NAME,
        url: SITE_HOME_URL,
        description: SITE_DESCRIPTION,
        founder: {
          "@id": `${SITE_HOME_URL}#andre-washington`,
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_HOME_URL}#andre-washington`,
        name: "Andre Washington",
        url: ANDRE_PROFILE_URL,
        mainEntityOfPage: ANDRE_PROFILE_URL,
        description:
          "Andre Washington is an independent recording artist, songwriter, producer, and music entrepreneur behind Rhythm Realm, creating pop music with rhythm and soul.",
        jobTitle: [
          "Independent Recording Artist",
          "Songwriter",
          "Producer",
          "Music Entrepreneur",
        ],
        knowsAbout: [
          "Pop music",
          "Songwriting",
          "Music production",
          "Recording",
          "Mixing",
          "Sync licensing",
        ],
        sameAs: [ANDRE_LINKEDIN_URL],
        affiliation: {
          "@id": `${SITE_HOME_URL}#organization`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_HOME_URL}#website`,
        name: SITE_NAME,
        url: SITE_HOME_URL,
        description: SITE_DESCRIPTION,
        publisher: {
          "@id": `${SITE_HOME_URL}#organization`,
        },
        about: {
          "@id": `${SITE_HOME_URL}#andre-washington`,
        },
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
        <SiteAnalytics />
      </body>
    </html>
  );
}
