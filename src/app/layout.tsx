import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteTitle = "Rhythm Realm | Official Music Home of Andre Washington";
const siteDescription =
  "Rhythm Realm is the official music home of Andre Washington, featuring pop music with rhythm, soul, and real emotion.";
const canonicalUrl = "https://www.rhythmrealm.net";

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: siteTitle,
    template: "%s | Rhythm Realm",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: canonicalUrl,
    siteName: "Rhythm Realm",
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
    title: siteTitle,
    description: siteDescription,
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
        name: "Rhythm Realm",
        url: canonicalUrl,
        description: siteDescription,
      },
      {
        "@type": "Person",
        name: "Andre Washington",
        url: canonicalUrl,
        sameAs: [canonicalUrl],
      },
      {
        "@type": "WebSite",
        name: "Rhythm Realm",
        url: canonicalUrl,
        description: siteDescription,
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
