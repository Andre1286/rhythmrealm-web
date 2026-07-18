export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  dek?: string;
  byline?: string;
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
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "trying-to-let-you-go-behind-the-song",
    title: "Trying to Let You Go: Inside an Upcoming Acoustic Pop-Soul Song",
    seoTitle: "Trying to Let You Go: Behind the Upcoming Song",
    description:
      "Andre Washington shares the meaning and studio process behind \u201cTrying to Let You Go,\u201d an upcoming acoustic pop-soul ballad from Rhythm Realm, now in progress.",
    excerpt:
      "Andre Washington shares the emotional world and evolving studio sound behind \u201cTrying to Let You Go,\u201d an upcoming acoustic pop-soul ballad about caring for someone while learning to move forward.",
    dek:
      "Andre Washington shares the emotional world and evolving studio sound behind \u201cTrying to Let You Go,\u201d an upcoming acoustic pop-soul ballad about caring for someone while learning to move forward.",
    byline: "By Andre Washington  |  Rhythm Realm",
    socialTitle:
      "Inside \u201cTrying to Let You Go\u201d \u2014 An Upcoming Song by Andre Washington",
    socialDescription:
      "Step inside the meaning and evolving studio sound of Andre Washington\u2019s upcoming acoustic pop-soul ballad about caring, memory, and the quiet work of moving forward.",
    releaseStatus: "upcoming",
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
      "Upcoming Acoustic Pop Song",
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
          "That emotional space is where my upcoming song \u201cTrying to Let You Go\u201d lives. It is an intimate acoustic pop and pop-soul ballad about still caring for someone while slowly accepting that moving forward may be necessary. The song is not built around anger, blame, or a dramatic ending. It focuses on the quieter struggle: what happens when the love, habits, and memories do not disappear just because life has taken a different direction.",
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
          "Drums and bass are being shaped to support the song instead of pushing it forward too aggressively. Their role is to give the emotion a pulse and a sense of movement, as if the narrator is taking small steps toward acceptance. A clean electric guitar may sit quietly beneath the acoustic arrangement in parts of the song, adding depth without pulling attention away from the core performance.",
          "Most importantly, the vocal needs to stay present and understandable. I want it to feel close to the listener, as though the song is being shared in the same room rather than projected from far away. Reverb and delay are being used to create a spacious, soulful atmosphere, but the words must remain clear. The space around the voice should deepen the feeling of memory and distance\u2014not cover it.",
        ],
      },
      {
        heading: "Still Taking Shape in the Studio",
        body: [
          "\u201cTrying to Let You Go\u201d is still being recorded, edited, mixed, and prepared for release. That means some production choices are still evolving. Right now, the work is about balance: deciding when the arrangement should remain exposed, when the rhythm section should add weight, and how much atmosphere the vocal needs before intimacy starts turning into distance.",
          "This stage of making a song often involves small adjustments that can completely change how the emotion reaches the listener. A guitar part may need to move back. A vocal phrase may need more space around it. A delay may need to be felt more than clearly heard. None of those details exist simply to make the track sound polished. They have to serve the story.",
          "I am also listening for restraint. A song like this can lose its honesty if every empty space is filled. The goal is not to prove how many sounds can fit into the arrangement. The goal is to make every sound earn its place, then leave enough room for the listener\u2019s own memories to enter.",
        ],
      },
      {
        heading: "What I Hope Listeners Hear in Their Own Story",
        body: [
          "When \u201cTrying to Let You Go\u201d is finished, I hope listeners recognize something true in it: moving forward is rarely a clean break. Acceptance can arrive slowly. The heart may revisit the same memory many times before it understands that remembering is different from returning.",
          "I also hope the song offers a little relief to anyone who has questioned why they still care. Caring does not mean you have failed to move on. Missing someone does not erase the progress you have made. Sometimes healing begins when we stop judging ourselves for the feelings that remain and start deciding how we want to carry them.",
          "That is the emotional destination of the song\u2014not forgetting, and not pretending the past meant nothing. It is a quieter kind of release: acknowledging what was real, accepting what has changed, and taking the next step even when part of you is still looking back.",
        ],
      },
      {
        heading: "Follow the Song as It Moves Toward Release",
        body: [
          "\u201cTrying to Let You Go\u201d is still in development, and I look forward to sharing more of its journey as the recording and mix take shape. Follow the making of \u201cTrying to Let You Go\u201d and explore more songs, videos, lyrics, and behind-the-music stories at https://RhythmRealm.net.",
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
    title: "Coming Over Yesterday",
    seoTitle:
      "Coming Over Yesterday – Terry T Productions ft. Andre Washington | Rhythm Realm",
    description:
      "Follow “Coming Over Yesterday,” a Rhythm Realm love song by Terry T Productions featuring Andre Washington. Read lyrics, story notes, and updates on RhythmRealm.net.",
    excerpt:
      "Follow “Coming Over Yesterday,” a Rhythm Realm love song by Terry T Productions featuring Andre Washington. Read lyrics, story notes, and updates on RhythmRealm.net.",
    canonicalPath: "/blog/coming-over-yesterday",
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
        answer: "The lyrics are available on RhythmRealm.net.",
      },
    ],
    closing: [
      "Discover more on RhythmRealm.net \u2014 Thank you for listening.",
      "#RhythmRealmNet",
    ],
  },
  {
    slug: "story-behind-do-you-ever-wonder",
    title: 'The Story Behind "Do You Ever Wonder?"',
    seoTitle:
      'The Story Behind "Do You Ever Wonder?" by Andre Washington | Rhythm Realm',
    description:
      'Discover the meaning behind "Do You Ever Wonder?" by Andre Washington, a Rhythm Realm song about life, division, faith, hope, and finding a better way forward.',
    excerpt:
      'A behind-the-song look at life, division, faith, hope, and the search for a better way forward.',
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
      '"Do You Ever Wonder?" starts with a question many people have asked at some point:',
      "Why are we here?",
      "That question gives the song its heart.",
      "This is not just a song about one person or one relationship. It is about the world around us. It is about how divided people can become, how cold life can feel, and how easy it is to feel worn down by everything happening around us.",
      'The song looks at life, faith, pressure, and hope, all through a simple but powerful question: Do you ever wonder?',
    ],
    answerCapsule:
      '"Do You Ever Wonder?" by Andre Washington is a Rhythm Realm song about life, division, faith, and hope. The lyrics reflect on a world that feels cold and divided, while pointing toward prayer, love, and the need to find a better way forward.',
    sections: [
      {
        heading: "A Question About Life",
        body: [
          'The opening line asks: "Do you ever wonder why we\'re here in this life?"',
          "That line sets the tone for the whole song.",
          "It is a simple question, but it carries weight. It speaks to the moments when people stop and think about the bigger picture. Life can move fast. People can get pulled into arguments, stress, work, pressure, and problems. Sometimes you have to pause and ask what it all means.",
          "That is where the song begins.",
        ],
      },
      {
        heading: "A World Divided",
        body: [
          "One of the main ideas in the song is division.",
          'The lyrics talk about being "on the right or on the left." That line points to how people are often pushed into sides. Instead of listening to each other, people are separated. Instead of looking for common ground, they are pulled into conflict.',
          "The song does not try to take a side.",
          "It asks a deeper question: What is all this division doing to us?",
          'The answer is felt in the line about winding up "out of breath." That feeling matters. It shows how tiring the world can become when there is too much pressure and not enough love.',
        ],
      },
      {
        heading: "The Coldness of the World",
        body: [
          'The chorus says: "The way things go, it\'s all so cold, and there\'s no love anymore."',
          "That line is the emotional center of the song.",
          "It speaks to something many people feel. The world can feel cold when people stop caring, stop listening, and stop showing compassion. The song is not just complaining about that coldness. It is calling it out because something better is needed.",
          'That is why the next idea matters: "We\'ve got to find a better way for us to see a brighter day."',
          "That line gives the song hope.",
          "It says the world may be in trouble, but people do not have to stay stuck there.",
        ],
      },
      {
        heading: "Faith and Prayer",
        body: [
          'Verse 2 brings in prayer: "If you have the time, I\'d like to say,\nthe way to solve our problems is to pray."',
          "This gives the song a spiritual direction.",
          "The message is not complicated. It is saying that when the world feels broken, people need something deeper than arguing. They need faith, reflection, and a better spirit.",
          "Prayer becomes a symbol of slowing down, looking inward, and asking for guidance.",
          "That gives the song a peaceful center.",
        ],
      },
      {
        heading: "Press Play and Reflect",
        body: [
          'The line "Sit back, relax, and just press play" brings the listener back to the music itself.',
          "It is almost like the song is saying: Take a moment. Listen. Think. Feel.",
          "That is what music can do when it is honest. It can create space for people to pause and reflect on what they are feeling.",
          '"Do You Ever Wonder?" is not trying to give every answer. It is trying to open the door to the right questions.',
        ],
      },
      {
        heading: "Pop Music With Rhythm and Soul",
        body: [
          "Rhythm Realm is built around pop music with rhythm and soul.",
          "That means the music should be easy to feel, but still have meaning behind it.",
          '"Do You Ever Wonder?" fits that mission because it has a real message. It talks about life, struggle, division, faith, and hope in a way that people can understand.',
          "The rhythm gives the song movement.",
          "The soul gives the song purpose.",
          "The question gives the song meaning.",
        ],
      },
      {
        heading: "Why This Song Matters",
        body: [
          '"Do You Ever Wonder?" matters because it speaks to the times we are living in.',
          "People are tired.",
          "People are divided.",
          "People are looking for something real.",
          "This song does not pretend the world is perfect. It sees the disarray. It feels the coldness. But it still points toward a brighter day.",
          "That is what makes the message important.",
          "The song is not just asking what is wrong.",
          "It is asking how we move forward.",
        ],
      },
    ],
    keyTakeaways: [
      '"Do You Ever Wonder?" is about life, division, faith, and hope.',
      "The song asks why we are here and what kind of world we are becoming.",
      "The lyrics point out how cold and divided things can feel.",
      "Prayer is presented as a path toward reflection and healing.",
      "The song carries a hopeful message about finding a better way forward.",
      "Rhythm Realm continues to build music around feeling, rhythm, soul, and real meaning.",
    ],
    faqs: [
      {
        question: 'What is "Do You Ever Wonder?" about?',
        answer:
          '"Do You Ever Wonder?" is about life, division, faith, and hope. The song reflects on a world that feels cold and divided while asking people to look for a better way forward.',
      },
      {
        question: 'Who wrote "Do You Ever Wonder?"',
        answer:
          '"Do You Ever Wonder?" is by Andre Washington, the artist behind Rhythm Realm.',
      },
      {
        question: 'What does the line "right or left" mean?',
        answer:
          "The line points to how divided people can become. It reflects the pressure to choose sides instead of finding understanding, love, and common ground.",
      },
      {
        question: "Why does the song mention prayer?",
        answer:
          "Prayer is part of the song's message of faith and reflection. It suggests that solving deeper problems requires more than arguments. It requires people to slow down, look inward, and seek a better path.",
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
