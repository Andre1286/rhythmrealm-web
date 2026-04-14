import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Andre Washington – Do You Ever Wonder? (Official Single) | Rhythm Realm";
const siteDescription =
  "Listen to “Do You Ever Wonder?” by Andre Washington. Stream the official single, read the lyrics, and explore the story behind the song on Rhythm Realm.";
const canonicalUrl = "https://www.rhythmrealm.net";

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: canonicalUrl,
    images: [
      {
        url: "/do-you-ever-wonder.png",
        width: 1200,
        height: 1200,
        alt: "Do You Ever Wonder single artwork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/do-you-ever-wonder.png"],
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
      },
      {
        "@type": "WebSite",
        name: "Rhythm Realm",
        url: canonicalUrl,
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
