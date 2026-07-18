import Image from "next/image";

import type { BlogPost } from "@/lib/blogPosts";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";

import RhythmRealmLink from "./RhythmRealmLink";
import SongNextSteps from "./SongNextSteps";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

type BlogArticlePageProps = {
  post: BlogPost;
};

export default function BlogArticlePage({ post }: BlogArticlePageProps) {
  const showSoulfulSongLink = post.slug === "unveiling-the-essence-of-soulful-music";
  const isComingOverYesterday = post.slug === "coming-over-yesterday";
  const isUpcomingSong = post.releaseStatus === "upcoming";
  const isSongStory =
    isComingOverYesterday || post.slug === "story-behind-do-you-ever-wonder";
  const blogPostingJsonLd = {
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: absoluteUrl(post.canonicalPath),
    mainEntityOfPage: absoluteUrl(post.canonicalPath),
    author: {
      "@type": "Person",
      name: "Andre Washington",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
    ...(post.image ? { image: absoluteUrl(post.image.src) } : {}),
    articleSection: post.category,
    keywords: post.tags?.join(", "),
  };
  const musicRecordingJsonLd = isComingOverYesterday
    ? [
        {
          "@type": "MusicRecording",
          name: "Coming Over Yesterday",
          url: absoluteUrl(post.canonicalPath),
          image: absoluteUrl("/coming-over-yesterday-cover.jpg"),
          audio: absoluteUrl("/audio/coming-over-yesterday.mp3"),
          duration: "PT3M23S",
          byArtist: {
            "@type": "Organization",
            name: "Terry T Productions",
          },
          contributor: {
            "@type": "Person",
            name: "Andre Washington",
          },
          description: post.description,
        },
      ]
    : [];
  const faqJsonLd = post.faqs?.length
    ? [
        {
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        },
      ]
    : [];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [blogPostingJsonLd, ...musicRecordingJsonLd, ...faqJsonLd],
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />

      <article className="mx-auto w-full max-w-4xl px-6 py-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <RhythmRealmLink
          href="/blog"
          target="_self"
          className="text-sm font-semibold text-cyan-100 hover:text-white"
        >
          Back to Blog
        </RhythmRealmLink>

        <div className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
          {post.category ?? "Rhythm Realm Notes"}
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        {post.byline ? (
          <p className="mt-4 text-sm font-semibold text-cyan-100/80">
            {post.byline}
          </p>
        ) : null}
        {post.image ? (
          <Image
            src={post.image.src}
            alt={post.image.alt}
            width={post.image.width}
            height={post.image.height}
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="mt-8 aspect-[1200/630] w-full rounded-xl border border-white/10 object-cover object-center shadow-2xl"
          />
        ) : null}
        <p className="mt-5 text-base leading-relaxed text-white/68 sm:text-lg">
          {post.dek ?? post.description}
        </p>

        {post.tags?.length ? (
          <div className="mt-6 flex flex-wrap gap-2" aria-label="Post tags">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/12 px-3 py-1 text-xs font-semibold text-white/58"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        {post.intro?.length ? (
          <div className="mt-12 space-y-4 border-t border-white/10 pt-10 text-base leading-relaxed text-white/72">
            {post.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : null}

        {post.answerCapsule ? (
          <section className="mt-10 rounded-lg border border-cyan-200/20 bg-cyan-200/[0.06] p-5">
            <h2 className="text-xl font-semibold">Answer Capsule</h2>
            <p className="mt-3 text-base leading-relaxed text-white/74">
              {post.answerCapsule}
            </p>
          </section>
        ) : null}

        <div className="mt-12 space-y-10 border-t border-white/10 pt-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-white/72">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>
                    {paragraph.split("\n").map((line, index, lines) => (
                      <span key={`${line}-${index}`}>
                        {line}
                        {index < lines.length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </p>
                ))}
              </div>
              {section.pullQuote ? (
                <blockquote className="mt-6 border-l-2 border-cyan-200/60 pl-5 text-xl font-medium leading-relaxed text-cyan-50">
                  <p>
                    &ldquo;{section.pullQuote}&rdquo;
                  </p>
                </blockquote>
              ) : null}
            </section>
          ))}
        </div>

        {showSoulfulSongLink ? (
          <section className="mt-12 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-semibold">Featured Rhythm Realm Song</h2>
            <p className="mt-4 text-base leading-relaxed text-white/72">
              For a direct example of soulful pop from Rhythm Realm,{" "}
              <RhythmRealmLink
                href="https://www.rhythmrealm.net/do-you-ever-wonder"
                target="_self"
                className="font-semibold text-cyan-100 hover:text-white"
              >
                read the lyrics and story behind &ldquo;Do You Ever Wonder&rdquo; by
                Andre Washington
              </RhythmRealmLink>
              .
            </p>
          </section>
        ) : null}

        {post.keyTakeaways?.length ? (
          <section className="mt-12 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-semibold">Key Takeaways</h2>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-relaxed text-white/72">
              {post.keyTakeaways.map((takeaway) => (
                <li key={takeaway}>{takeaway}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {post.faqs?.length ? (
          <section className="mt-12 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-semibold">FAQ</h2>
            <div className="mt-6 space-y-6">
              {post.faqs.map((faq) => (
                <section key={faq.question}>
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  <p className="mt-2 text-base leading-relaxed text-white/72">
                    {faq.answer}
                  </p>
                </section>
              ))}
            </div>
          </section>
        ) : null}

        {post.closing?.length ? (
          <div className="mt-12 space-y-4 border-t border-white/10 pt-8 text-base leading-relaxed text-white/72">
            {post.closing.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : null}

        {isUpcomingSong ? (
          <nav
            aria-label="Continue exploring Rhythm Realm"
            className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:flex-wrap"
          >
            <RhythmRealmLink
              href="/music"
              target="_self"
              className="rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-cyan-100"
            >
              Explore More Music
            </RhythmRealmLink>
            <RhythmRealmLink
              href="/blog"
              target="_self"
              className="rounded-lg border border-white/18 px-5 py-3 text-center text-sm font-semibold transition hover:bg-white hover:text-black"
            >
              More Behind the Music
            </RhythmRealmLink>
            <RhythmRealmLink
              href="/#signup"
              target="_self"
              className="rounded-lg border border-cyan-200/30 px-5 py-3 text-center text-sm font-semibold text-cyan-100 transition hover:bg-cyan-100 hover:text-black"
            >
              Join the Rhythm Realm Insider List
            </RhythmRealmLink>
          </nav>
        ) : isSongStory ? (
          <SongNextSteps
            lyricsHref={
              isComingOverYesterday
                ? "/#coming-over-yesterday-lyrics"
                : "/lyrics/do-you-ever-wonder"
            }
            className="mt-12"
          />
        ) : (
          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row">
            <RhythmRealmLink
              href="/do-you-ever-wonder"
              target="_self"
              className="rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-cyan-100"
            >
              Listen to Do You Ever Wonder?
            </RhythmRealmLink>
            <RhythmRealmLink
              href="/lyrics/do-you-ever-wonder"
              target="_self"
              className="rounded-lg border border-cyan-200/30 px-5 py-3 text-center text-sm font-semibold text-cyan-100 transition hover:bg-cyan-100 hover:text-black"
            >
              Read Do You Ever Wonder? Lyrics
            </RhythmRealmLink>
          </div>
        )}
      </article>

      <SiteFooter />
    </main>
  );
}
