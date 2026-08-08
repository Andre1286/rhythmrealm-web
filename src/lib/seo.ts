export const SITE_NAME = "Rhythm Realm";
export const SITE_ORIGIN = "https://www.rhythmrealm.net";
export const SITE_HOME_URL = `${SITE_ORIGIN}/`;
export const SITE_TITLE =
  "Andre Washington | Rhythm Realm — Pop Music with Rhythm & Soul";
export const SITE_DESCRIPTION =
  "Discover Andre Washington and Rhythm Realm — original pop music with rhythm and soul. Listen to songs, watch videos, explore lyrics, stories and more.";

export const absoluteUrl = (path = "/") => new URL(path, SITE_HOME_URL).toString();
