import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Andre Washington | Rhythm Realm",
  description:
    "Read Andre Washington's short bio and learn more about his artist journey on RhythmRealm.net.",
};

export default function AboutMePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto w-full max-w-4xl px-6 pb-16 pt-12">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
          About Andre Washington
        </h1>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <p className="whitespace-pre-line text-base leading-relaxed text-white/80">
            {`Andre Washington is an independent recording artist creating pop music with rhythm and soul. He writes, records, and produces his music in his own studio—building each song from the first idea to the final mix with a hands-on, artist-first approach.

Before releasing music as a solo artist, Andre was part of a group called IROC — International Rhythm of Composers. IROC was a four-member band built on real musicianship and teamwork: Wesley “Don” Fullwood (rest in peace) on bass, Nick Costa on guitar, Terry Timberlake on keyboards, and Andre Washington as the singer-songwriter. That chapter helped shape Andre’s sound and his focus on songs that carry meaning.

Today, Andre Washington and Terry Timberlake still work together and collaborate on music, keeping that original creative connection alive.

RhythmRealm.net is the music hub now — music, video, right here on the hub. Thanks for listening.`}
          </p>
        </div>
      </section>
    </main>
  );
}
