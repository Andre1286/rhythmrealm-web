export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  dek?: string;
  byline?: string;
  editorialCredit?: boolean;
  firsthandPerspective?: boolean;
  socialTitle?: string;
  socialDescription?: string;
  releaseStatus?: "upcoming" | "released";
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  canonicalPath: string;
  category?: string;
  tags?: string[];
  intro?: string[];
  answerCapsule?: string;
  sections: {
    heading: string;
    body: string[];
    pullQuote?: string;
  }[];
  keyTakeaways?: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  closing?: string[];
  lyrics?: {
    id: string;
    sections: { label: string; lines: string[] }[];
  };
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "trying-to-let-you-go-behind-the-song",
    title: "Trying to Let You Go: Inside an Acoustic Pop-Soul Song",
    seoTitle: "Trying to Let You Go: Behind the Song",
    description:
      "Andre Washington shares the meaning and studio process behind \u201cTrying to Let You Go,\u201d an acoustic pop-soul ballad now available on RhythmRealm.net.",
    excerpt:
      "Andre Washington shares the emotional world and studio sound behind \u201cTrying to Let You Go,\u201d an acoustic pop-soul ballad about caring for someone while learning to move forward.",
    dek:
      "Andre Washington shares the emotional world and studio sound behind \u201cTrying to Let You Go,\u201d an acoustic pop-soul ballad about caring for someone while learning to move forward.",
    byline: "By Andre Washington  |  Rhythm Realm",
    socialTitle:
      "Inside \u201cTrying to Let You Go\u201d \u2014 A Song by Andre Washington",
    socialDescription:
      "Step inside the meaning and studio sound of Andre Washington\u2019s acoustic pop-soul ballad about caring, memory, and the quiet work of moving forward.",
    releaseStatus: "released",
    image: {
      src: "/trying-to-let-you-go-behind-the-song-andre-washington.jpg",
      alt: "Andre Washington sits alone in a dim blue-and-amber room beside an empty chair and acoustic guitar, with a distant fading silhouette suggesting memory and separation.",
      width: 1200,
      height: 630,
    },
    canonicalPath: "/blog/trying-to-let-you-go-behind-the-song",
    category: "Behind the Song",
    tags: [
      "Trying to Let You Go Andre Washington",
      "Acoustic Pop Song",
      "Pop-Soul Ballad",
      "Behind the Song",
      "Andre Washington Music",
      "Songwriting and Recording",
      "Rhythm Realm",
      "RhythmRealmNet",
    ],
    sections: [
      {
        heading: "When the Heart Has Not Caught Up Yet",
        body: [
          "Sometimes the hardest part of letting go is not the decision itself. It is waking up after the decision and realizing that the smallest parts of your day still expect someone to be there. A room can feel different. A familiar silence can feel louder. Even when your mind understands that a relationship has changed, your heart may continue reaching toward what used to be.",
          "That emotional space is where my song \u201cTrying to Let You Go\u201d lives. It is an intimate acoustic pop and pop-soul ballad about still caring for someone while slowly accepting that moving forward may be necessary. The song is not built around anger, blame, or a dramatic ending. It focuses on the quieter struggle: what happens when the love, habits, and memories do not disappear just because life has taken a different direction.",
          "I wanted to write about that conflict honestly. Letting go can be the right choice and still feel painful. You can recognize that something has changed without pretending it never mattered. You can miss someone and still understand that holding on forever is not the same as honoring what you shared.",
        ],
        pullQuote:
          "Letting go does not erase what a relationship meant; it changes what we carry forward.",
      },
      {
        heading: "A Song About Absence Without Blame",
        body: [
          "The emotional center of \u201cTrying to Let You Go\u201d is the distance between what the mind knows and what the heart continues to do. Memories remain in ordinary places. The empty side of a room can become a reminder. Morning can arrive more slowly when the person who once shaped your routine is no longer part of it.",
          "Those images matter because heartbreak is not always loud. Sometimes it is a collection of quiet moments that no one else sees. The song looks at those moments with compassion instead of bitterness. It allows the feeling to be complicated: there is sadness, but there is also respect for what the relationship meant and a growing awareness that acceptance has to begin somewhere.",
          "I do not want the song to tell listeners what their story is. I want it to leave enough space for them to bring their own experience into it. For one person, it may connect to the end of a romantic relationship. For someone else, it may reflect any bond that changed before the feelings were ready to change with it.",
        ],
      },
      {
        heading: "Why the Music Needs Room to Breathe",
        body: [
          "The arrangement begins with acoustic guitar because the song needs a foundation that feels human and close. At 78 beats per minute, the pace is unhurried. It gives each phrase time to settle and gives the listener room to notice what is being left unsaid. The song is in C major and moves in 4/4 time, but the emotional color is reflective rather than bright. That contrast helps the music feel tender without becoming heavy-handed.",
          "Drums and bass support the song without pushing it forward too aggressively. Their role is to give the emotion a pulse and a sense of movement, as if the narrator is taking small steps toward acceptance. The arrangement leaves room around its acoustic foundation so the core performance remains at the center.",
          "Most importantly, the vocal stays present and understandable. I wanted it to feel close to the listener, as though the song is being shared in the same room rather than projected from far away. Reverb and delay create a spacious, soulful atmosphere while the words remain clear. The space around the voice deepens the feeling of memory and distance\u2014it does not cover it.",
        ],
      },
      {
        heading: "How the Song Took Shape in the Studio",
        body: [
          "\u201cTrying to Let You Go\u201d moved through recording, editing, mixing, and preparation before reaching the finished version now available on RhythmRealm.net. The production work centered on balance: deciding when the arrangement should remain exposed, when the rhythm section should add weight, and how much atmosphere the vocal needed before intimacy started turning into distance.",
          "Small adjustments can completely change how the emotion reaches the listener. Throughout the process, every guitar part, vocal phrase, and atmospheric detail was considered for how it served the story rather than simply making the track sound polished.",
          "Restraint remained important through the final mix. A song like this can lose its honesty if every empty space is filled. The goal was not to prove how many sounds could fit into the arrangement. It was to make every sound earn its place, then leave enough room for the listener\u2019s own memories to enter.",
        ],
      },
      {
        heading: "What I Hope Listeners Hear in Their Own Story",
        body: [
          "In the finished song, I hope listeners recognize something true: moving forward is rarely a clean break. Acceptance can arrive slowly. The heart may revisit the same memory many times before it understands that remembering is different from returning.",
          "I also hope the song offers a little relief to anyone who has questioned why they still care. Caring does not mean you have failed to move on. Missing someone does not erase the progress you have made. Sometimes healing begins when we stop judging ourselves for the feelings that remain and start deciding how we want to carry them.",
          "That is the emotional destination of the song\u2014not forgetting, and not pretending the past meant nothing. It is a quieter kind of release: acknowledging what was real, accepting what has changed, and taking the next step even when part of you is still looking back.",
        ],
      },
      {
        heading: "Listen to Trying to Let You Go on RhythmRealm.net",
        body: [
          "\u201cTrying to Let You Go\u201d is now available to listen to on RhythmRealm.net. Hear the finished song, read the official lyrics, and explore more songs, videos, lyrics, and behind-the-music stories at https://RhythmRealm.net.",
        ],
      },
    ],
    closing: [
      "#RhythmRealmNet",
      "Discover more on RhythmRealm.net \u2014 Thank you for listening.",
    ],
  },
  {
    slug: "coming-over-yesterday",
    editorialCredit: true,
    title: "Coming Over Yesterday",
    byline: "Terry T Productions featuring Andre Washington",
    seoTitle:
      "Coming Over Yesterday – Terry T Productions ft. Andre Washington | Rhythm Realm",
    description:
      "Follow “Coming Over Yesterday,” a Rhythm Realm love song by Terry T Productions featuring Andre Washington. Read lyrics, story notes, and updates on RhythmRealm.net.",
    excerpt:
      "Follow “Coming Over Yesterday,” a Rhythm Realm love song by Terry T Productions featuring Andre Washington. Read lyrics, story notes, and updates on RhythmRealm.net.",
    canonicalPath: "/blog/coming-over-yesterday",
    lyrics: {
      id: "coming-over-yesterday-lyrics",
      sections: [
        {
          label: "Intro",
          lines: [
            "As I recall",
            "I’ve been there for you",
            "For you, I give my all",
            "There’s nothing I won’t do",
            "For me, there is no other",
          ],
        },
        {
          label: "Hook",
          lines: [
            "Pick up the phone and call",
            "FaceTime me whenever you want",
            "I’m coming over yesterday",
          ],
        },
        {
          label: "Verse 1",
          lines: [
            "All that I need is your love",
            "It’s the only thing I’m dreaming of",
            "I’ll be there when you call",
            "I will make time for you",
            "You’re the only one I need",
            "Your love is all I see",
          ],
        },
        {
          label: "Hook",
          lines: [
            "Pick up the phone and call me",
            "FaceTime me whenever you want",
            "I’m coming over yesterday",
          ],
        },
      ],
    },
    category: "Featured Song",
    tags: [
      "Coming Over Yesterday",
      "Terry T Productions",
      "Andre Washington",
      "Terry Timberlake",
      "IROC",
      "International Rhythm of Composers",
      "Rhythm Realm",
      "RhythmRealmNet",
    ],
    sections: [
      {
        heading: "A Featured Song from Terry T Productions",
        body: [
          '"Coming Over Yesterday" is a featured song from Terry T Productions featuring Andre Washington.',
          "Written with Terry Timberlake \u2014 known as Terry T \u2014 the song carries the feeling of love, loyalty, and being ready to show up when someone needs you. Terry T is a keyboard player, producer, and former member of IROC, International Rhythm of Composers.",
        ],
      },
      {
        heading: "A Modern Love Story",
        body: [
          'The lyrics bring a modern love story into a soulful pop setting. Lines like "Pick up the phone and call" and "FaceTime me whenever you want" give the song a present-day feel, but the heart of the song is simple: when love calls, you make time.',
        ],
      },
      {
        heading: "Now Featured on Rhythm Realm",
        body: [
          "Coming Over Yesterday is a soulful love song about showing up before you\u2019re even asked \u2014 being there with heart, timing, and devotion.",
          "Song length: 3:23.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is Coming Over Yesterday?",
        answer:
          "Coming Over Yesterday is a Rhythm Realm love song by Terry T Productions featuring Andre Washington.",
      },
      {
        question: "What is the song about?",
        answer:
          "The song is about showing up early, making time, and being there for someone before the moment even asks.",
      },
      {
        question: "Where can I read the lyrics?",
        answer: "The complete lyrics are in the lyrics section of this page, below the story.",
      },
    ],
    closing: [
      "Discover more on RhythmRealm.net \u2014 Thank you for listening.",
      "#RhythmRealmNet",
    ],
  },
  {
    slug: "story-behind-do-you-ever-wonder",
    editorialCredit: true,
    title: 'The Story Behind "Do You Ever Wonder?"',
    seoTitle:
      'The Story Behind "Do You Ever Wonder?" by Andre Washington | Rhythm Realm',
    description:
      "Discover the questions behind “Do You Ever Wonder?” and Andre Washington’s melody-first songwriting process, with reflections on choice, faith, and vocal delivery.",
    excerpt:
      "Andre Washington’s firsthand perspective on the questions, melody-first writing, and vocal delivery behind “Do You Ever Wonder?”",
    canonicalPath: "/blog/story-behind-do-you-ever-wonder",
    category: "Behind the Song",
    tags: [
      "Andre Washington",
      "Rhythm Realm",
      "Do You Ever Wonder",
      "Pop Music With Rhythm and Soul",
      "Faith",
      "Hope",
      "Song Meaning",
      "RhythmRealmNet",
    ],
    intro: [
      "“Do You Ever Wonder?” began with questions Andre Washington had in mind: Why are we here? What does it all mean?",
      "Those questions connected with his observations of modern society, where people can feel pushed to choose one side or another. But the song’s question reaches beyond that pressure. It also speaks to uncertainty, choices, and wondering where life is taking us.",
    ],
    answerCapsule:
      "“Do You Ever Wonder?” asks a broad human question about life and possibility. Andre wrote the melody first, then developed the lyrics from it. The song brings together questions about direction, the pressure to choose sides, and intentional references to faith and prayer.",
    sections: [
      {
        heading: "A Question About Life",
        body: [
          "“Do you ever wonder why we’re here?” is one of the song’s universal questions. Someone might ask it during a stressful period, while dealing with uncertainty, or while trying to understand their direction.",
          "For Andre, wondering can concern a real situation or an imagined possibility: What will happen next? What if I choose something different? What if I had taken another path? He sees that kind of questioning as something almost everyone experiences.",
        ],
      },
      {
        heading: "How the Song Took Shape",
        body: [
          "The melody came first. Andre developed it and then wrote the lyrics from that melody.",
          "Once the melody and hook were established, the rest of the song came together naturally. That is the songwriting process behind the record: melody first, with the words developing from it.",
        ],
      },
      {
        heading: "The Pressure to Choose a Side",
        body: [
          "The song’s references to right and left connect with Andre’s observation that society sometimes places people in situations where they feel pushed or forced to choose a side.",
          "That pressure is part of the song’s perspective. Its central question remains broader, leaving room for listeners to consider the situations, choices, and possibilities in their own lives.",
        ],
      },
      {
        heading: "The Coldness of the World",
        body: [
          "The lyrics describe a world that can feel cold and short on love, then look toward a better way and a brighter day.",
          "That movement preserves the song’s hopeful thread. It gives listeners space to recognize difficulty while still wondering how things could change.",
        ],
      },
      {
        heading: "Faith and Prayer",
        body: [
          "The references to faith and prayer are intentional. Andre recognizes that many people have faith and pray, and he included those ideas because he wanted the song to speak to a broad range of listeners.",
          "Those references belong within the song’s wider reflection on life and uncertainty. Andre’s intention is to reach people across their experiences, rather than prescribe one belief system.",
        ],
      },
      {
        heading: "Vocal Delivery and Feeling",
        body: [
          "Andre identifies vocal delivery as an important part of how the song's reflective questions are presented.",
          "That connection between words and feeling fits Rhythm Realm’s approach to pop music with rhythm and soul.",
        ],
      },
      {
        heading: "Press Play and Reflect",
        body: [
          "The invitation to sit back, relax, and press play brings the listener back to the music.",
          "“Do You Ever Wonder?” leaves room for people to bring their own questions to the song: what might happen, what could have been different, and where their current path is taking them.",
        ],
      },
    ],
    keyTakeaways: [
      "Andre wrote the melody first and developed the lyrics from it.",
      "Once the melody and hook were established, the rest came together naturally.",
      "The central question includes life, choices, uncertainty, and imagined possibilities.",
      "The social perspective concerns feeling pressured to choose a side.",
      "Faith and prayer were included intentionally to reach a broad range of listeners.",
      "Andre identifies vocal delivery as an important part of how the song’s reflective questions are presented.",
    ],
    faqs: [
      {
        question: "What is \"Do You Ever Wonder?\" about?",
        answer:
          "It asks a broad human question about life, choices, and possibility. It includes reflections on uncertainty, pressure to choose sides, faith, and prayer.",
      },
      {
        question: "Who wrote \"Do You Ever Wonder?\"",
        answer:
          "Andre Washington wrote the song’s melody and lyrics. The melody came first; he then developed the lyrics from it.",
      },
      {
        question: "What does the line \"right or left\" mean?",
        answer:
          "It connects with Andre’s observation that people can feel pushed or forced to choose a side because of the situations society places them in.",
      },
      {
        question: "Why does the song mention prayer?",
        answer:
          "Andre intentionally included faith and prayer because many people have faith and pray, and he wanted the song to reach a broad range of listeners.",
      },
      {
        question: "What kind of music is Rhythm Realm?",
        answer:
          "Rhythm Realm creates pop music with rhythm and soul. The focus is on honest emotion, strong grooves, memorable songs, and meaningful storytelling.",
      },
    ],
    closing: [
      "Explore more music and stories at RhythmRealm.net.",
      "#RhythmRealmNet",
      "Discover more on RhythmRealm.net -- Thank you for listening.",
    ],
  },
  {
    slug: "unveiling-the-essence-of-soulful-music",
    editorialCredit: true,
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
    editorialCredit: true,
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
