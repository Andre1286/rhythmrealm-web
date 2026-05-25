export const SITE_NAME = "Rhythm Realm";
export const SITE_ORIGIN = "https://www.rhythmrealm.net";
export const SITE_HOME_URL = `${SITE_ORIGIN}/`;
export const SITE_TITLE = "Rhythm Realm | Andre Washington Music";
export const SITE_DESCRIPTION =
  "Discover Rhythm Realm, the official music home of Andre Washington. Listen to pop music with rhythm and soul, explore lyrics, videos, stories, motion comics, and updates on RhythmRealm.net.";

export const absoluteUrl = (path = "/") => new URL(path, SITE_HOME_URL).toString();
