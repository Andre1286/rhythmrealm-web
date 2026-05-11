export const SITE_NAME = "Rhythm Realm";
export const SITE_ORIGIN = "https://www.rhythmrealm.net";
export const SITE_HOME_URL = `${SITE_ORIGIN}/`;
export const SITE_TITLE = "Rhythm Realm | Andre Washington Music";
export const SITE_DESCRIPTION =
  "Visit RhythmRealm.net, the official home for Andre Washington music. Listen to Do You Ever Wonder?, read lyrics and stories, and join email updates.";

export const absoluteUrl = (path = "/") => new URL(path, SITE_HOME_URL).toString();
