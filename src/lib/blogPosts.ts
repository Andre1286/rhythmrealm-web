export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  canonicalPath: string;
  sections: {
    heading: string;
    body: string[];
  }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "unveiling-the-essence-of-soulful-music",
    title: "The Essence of Soulful Music",
    seoTitle: "The Essence of Soulful Music | Rhythm Realm",
    description:
      "Explore what soulful music means for Rhythm Realm: honest emotion, rhythm, melody, and songs from Andre Washington that connect directly.",
    excerpt:
      "A simple Rhythm Realm note on honest emotion, rhythm, melody, and music that connects directly.",
    canonicalPath: "/post/unveiling-the-essence-of-soulful-music",
    sections: [
      {
        heading: "Soul starts with feeling",
        body: [
          "Soulful music does not need to be complicated. It starts with a real feeling and gives that feeling enough room to breathe.",
          "For Rhythm Realm, that means songs with rhythm, melody, and a human center. The production can be modern, but the point is still connection.",
        ],
      },
      {
        heading: "Rhythm gives the feeling movement",
        body: [
          "A strong groove can carry a message without making the song heavy. It lets reflection, hope, and emotion move forward.",
          "That balance is important to Andre Washington's music: the song can say something real and still feel good to play.",
        ],
      },
      {
        heading: "RhythmRealm.net keeps the connection direct",
        body: [
          "RhythmRealm.net is the main place to hear the songs, read the lyrics, and follow the stories behind each release.",
          "The goal is simple: keep the music close to the listener and make every page point back to the source.",
        ],
      },
    ],
  },
  {
    slug: "where-did-the-time-go-pop-songs-that-capture-the-feeling-of-time-slipping-away",
    title: "Where Did the Time Go? Pop Songs and Time",
    seoTitle: "Where Did the Time Go? Pop Songs and Time | Rhythm Realm",
    description:
      "A simple look at pop songs that capture time slipping away, memory, and reflection, with RhythmRealm.net as Andre Washington's music home.",
    excerpt:
      "A short reflection on pop songs, memory, time slipping away, and why that feeling stays with listeners.",
    canonicalPath:
      "/post/where-did-the-time-go-pop-songs-that-capture-the-feeling-of-time-slipping-away",
    sections: [
      {
        heading: "Time is one of pop music's strongest feelings",
        body: [
          "Some songs stay with us because they catch the moment when time feels like it is moving too fast.",
          "That feeling can be joyful, sad, nostalgic, or all of those things at once. Pop music works well there because it can turn a private thought into a melody people remember.",
        ],
      },
      {
        heading: "Reflection can still have rhythm",
        body: [
          "A song about time does not have to stand still. Rhythm can make memory feel alive, giving the listener a way to move with the feeling instead of only looking back.",
          "That is part of the Rhythm Realm idea: honest emotion with enough pulse to keep going.",
        ],
      },
      {
        heading: "Start at RhythmRealm.net",
        body: [
          "RhythmRealm.net is the main destination for Andre Washington's music, lyrics, stories, and updates.",
          "If a song makes you think about where the time went, the next step is simple: listen, read, and stay connected at the source.",
        ],
      },
    ],
  },
];

export const getBlogPost = (slug: string) =>
  BLOG_POSTS.find((post) => post.slug === slug);
