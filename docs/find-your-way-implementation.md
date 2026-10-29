# Find Your Way

Review branch: `codex/find-your-way-clean`.
Production base: `4a6bc9df07c0824b6864905996cf446befb10df9` (`origin/main`).

## Scope

Adds `/find-your-way` with the approved audio, original artwork, official YouTube
embed, Andre-verified lyrics, editorial song meaning, approved first-person
Behind the song text, credits, related songs, and the existing signup component.
Reuses the production header, footer, links, music cards, and next-step components.

The page is copied from the validated implementation. Its only integration
adaptation is the If Only for the Love destination: `/music#if-only-for-the-love`.
Production already lists that song on `/music`; `/music/more` remains its existing
redirect. The catalog gets a matching anchor through an optional card prop.
An optional 16:9 card mode preserves the complete Find Your Way thumbnail.
Existing card defaults, accessibility labels, catalog entries, navigation,
metadata generation, and other songs remain unchanged.

## Exact files

- `src/app/find-your-way/page.tsx`
- `public/audio/Find-Your-Way-Andre-Washington.mp3`
- `public/find-your-way/find-your-way-andre-washington.jpg`
- `public/tracks.json`
- `src/app/music/page.tsx`
- `src/app/sitemap.ts`
- `src/components/MusicTrackCard.tsx`
- `docs/find-your-way-implementation.md`

No unrelated commits, dependency changes, instruction files, homepage/About
edits, other song edits, global styling, or Issue 3 assets are part of this diff.
Those files already present in the production base remain as they are.
The original development checkout and its uncommitted work are preserved.

## Media provenance

The approved MP3 is copied without processing from
`C:\Users\Admin\OneDrive\Documents\ChatGPT\astra-ableton-test\find your way.mp3`.
Website URL: `/audio/Find-Your-Way-Andre-Washington.mp3`.
Size: 5,999,803 bytes. SHA-256:
`3c18b0b84df95bb2b7010a25e35c151a071eaa8d337373d6976f51ce8c016d7e`.
Playback duration is approximately 149.995 seconds. No conversion,
normalization, remastering, gain adjustment, or recompression occurred.

Artwork is the original 1280 x 720 JPEG from
`https://i.ytimg.com/vi/VhLbJKgBV10/maxresdefault.jpg`.
Website URL: `/find-your-way/find-your-way-andre-washington.jpg`.
It is displayed without cropping or Next Image recompression.
The original WAV, MP3, local MP4, and artwork sources remain untouched.

Official video: `https://www.youtube.com/watch?v=VhLbJKgBV10`.
Embed: `https://www.youtube-nocookie.com/embed/VhLbJKgBV10`.

## SEO and structured data

Title: Find Your Way — Andre Washington | Lyrics, Song & Video

Description: Listen to Find Your Way by Andre Washington, watch the official
video, read the verified lyrics, and explore the song’s meaning and story on
Rhythm Realm.

Canonical: `https://www.rhythmrealm.net/find-your-way`.
Open Graph (`website`) and Twitter large-image metadata use the original artwork.
The page is added to the existing sitemap and normal music catalog/track manifest.
JSON-LD includes MusicRecording, MusicComposition, AudioObject, VideoObject,
and the verified lyrics as CreativeWork text. The shared site graph supplies
Organization, Person, and WebSite identity.

Video uploadDate `2024-12-15T10:26:03-08:00` was verified against the official
YouTube page's metadata. This is the video's publication timestamp, not an
asserted recording release date. No unverified credits, identifiers, ratings,
streaming availability, or recording release dates are added.

## Validation on the clean production base

- `npm ci --offline`: installed the production lockfile's exact dependencies in
  this worktree. No package or lockfile changes.
- `npm run build`, `npm run typecheck`, and `npm run lint`: passed.
- `npm test`: all 19 existing tests passed using mocked services. Node emitted
  the existing module-type warning; no dependency/configuration change was made.
- All 13 approved lyric lines match the supplied request verbatim in both
  initial HTML and structured data; the approved first-person story is unchanged.
- Audio hash matches the approved source. Browser playback advanced normally at
  149.995075 seconds total duration; byte-range seeking returned HTTP 206.
- All 15 internal links/fragments, catalog backlink, media URLs, and sitemap
  checks passed, including the production catalog's related-song anchor.
- Canonical, robots, title, description, Open Graph, Twitter metadata and
  JSON-LD syntax/relationships passed local checks. SEO PASS; AEO PASS.
- Desktop and 390 x 844 mobile presentation reviewed; no horizontal overflow.
  Original artwork loaded at 1280 x 720; official YouTube embed initialized.
- Original checkout branch, HEAD, working-tree status, and SHA-256 hashes of
  all 107 tracked/untracked files match the preservation baseline.

## Release boundary

This branch is for review. Andre's explicit approval is required before merge
or production release. No production deployment, DNS, environment, secret,
authentication, or database change is part of this work.
