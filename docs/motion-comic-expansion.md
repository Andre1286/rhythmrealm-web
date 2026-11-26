# Motion comic Issues #2 and #3 — local implementation

Release-candidate authority: the owner's November 26, 2026 final visual approval
locks the current design and authorizes staging these eight implementation files,
the requested local commit, and pushing only `codex/motion-comic-issues-2-3` to
`Andre1286/rhythmrealm-web` for its automatic Vercel Preview deployment. Earlier
local-only restrictions below describe the historical phases. No merge to main,
production deployment, domain change, billing change, or additional paid service
is authorized. Preview testing and final production authorization remain separate.

## Scope and authority

Andre Washington's explicit **OWNER APPROVAL — Phase 5 Local Implementation**
on November 26, 2026 authorizes the exact source files below for local website
preparation and stream-copy fast-start delivery derivatives. This is not an
original-master designation or permission to publish, upload, commit, or deploy.
The original Downloads files and Google Drive backups must remain untouched.
The parent creative asset manifest remains unchanged; this record documents only
the specific local asset use and derivatives approved in this task.

- Repository: `Andre1286/rhythmrealm-web`.
- Starting production revision: `eb36f1f2a91586e145dd582532b8d13778c943fb`.
- Branch: `codex/motion-comic-issues-2-3`.
- Managed worktree: `C:\Users\Admin\.codex\worktrees\motion-comic-issues-2-3\rhythmrealm-web-production-a3a6d000`.
- Production project: `rhythmrealm-web`, `prj_ICnODufgS5BoWa0MbYyO022qFClC`.
- Production deployment at implementation start: `dpl_H2m6Jv5NrWgWSqtf5Mp6pEkmrje9`.
- Only the approved commit was fetched. No staging, commits, pushes, merges,
  external video uploads, or deployments are authorized.

## Website changes

The existing series page has three numbered watch sections and same-page issue
navigation. `#watch` and `/videos/the-artist-nobody-heard.mp4` remain Issue #1's
destination and media source. Issues #2 and #3 use `#watch-issue-2` and
`#watch-issue-3`. All three use native controls, `playsInline`, `preload="none"`,
responsive dimensions, and `object-contain`; none autoplay or loop.

The shared TypeScript data defines verified paths, dimensions, and durations.
Page metadata describes the three issues; JSON-LD describes the series and its
three parts without inventing release dates, public contributor credits, or
thumbnails. The page remains a Server Component without new client JavaScript.

Only these five source/delivery files are in scope:

1. `src/lib/motionComic.ts` — modified.
2. `src/app/comics/the-artist-nobody-heard/page.tsx` — modified.
3. `public/videos/the-artist-nobody-heard-issue-02.mp4` — new derivative.
4. `public/videos/the-artist-nobody-heard-issue-03.mp4` — new derivative.
5. `docs/motion-comic-expansion.md` — this record.

The homepage, redirects, sitemap, robots policy, music, signup, shared navigation,
branding, and static comic assets are unchanged. The existing issue-route 308
redirects still lead to `#watch`; they have not been repurposed in this scope.

## Source and derivative identity

All `public/` paths below are relative to the website repository. Sources remain
at the absolute Downloads paths; only delivery derivatives enter the worktree.

| Issue | Role | Path | Bytes | SHA-256 |
| --- | --- | --- | ---: | --- |
| 2 | Approved completed source for local preparation | `C:\Users\Admin\Downloads\the-artist-nobody-heard-issue-02.mp4` | 35,840,967 | `8C66F07B5E48432C617C8FD2FA6850283BAA4DBEA65366F7362E6E39B499BE45` |
| 2 | Authorized local fast-start derivative | `public/videos/the-artist-nobody-heard-issue-02.mp4` | 35,831,335 | `E306B4C3A92919DB656E42D0B5E35A4434567F49B471F283D934CA9C1C658B73` |
| 3 | Approved completed source for local preparation | `C:\Users\Admin\Downloads\the-artist-nobody-heard-issue-03.mp4` | 41,553,985 | `AD7AFFFB96AD85673738D4A110FA205DFA186432C03CEF053BDBA970BD44F258` |
| 3 | Authorized local fast-start derivative | `public/videos/the-artist-nobody-heard-issue-03.mp4` | 41,544,993 | `C2D8094FFD136D53B74C7BFF7863341EC5278EA6116BD8F2AB262EA4926991AE` |

## Stream-copy verification

The installed CapCut FFmpeg was used with `-map 0 -c copy -movflags +faststart`
and `-n` (refuse overwrite). No audio or video encoder was invoked. Container
metadata and indexing differ; encoded audiovisual content and packet timing do
not. FFmpeg stream hashes and complete framehash reports were compared in memory.

| Issue | Verification | Source and derivative SHA-256 (identical) |
| --- | --- | --- |
| 2 | Encoded video | `4390EBE745D414E24C907084898EAC6B06284D9CC83675165A26729260801566` |
| 2 | Encoded audio | `6EDCBEAA6F6F6AD56875E58CEB5B14C8F43123FC3F394DF4E27CACBB76D536DA` |
| 2 | Complete packet timing/data report | `3C797015D433A9D29DEBC2365B93770F1F78003DAD419361956B71A0F19F7CA9` |
| 3 | Encoded video | `35E26B06A2CB8A491CAE75942BBD77EA884798C0B43D9BC18551C5CD68F81B3E` |
| 3 | Encoded audio | `20640C62C25223E53CAB163BC583E533B48878B835428DACE424D4FA2B22ADEA` |
| 3 | Complete packet timing/data report | `5156674CB18E0D3445965988B6CD36BEC8F09A0EC609077205503DB29DAEE54F` |

Complete source/derivative packet reports were byte-identical: 23,312 packets
for Issue #2 and 21,753 for Issue #3. The unchanged encoded streams are H.264
Main, progressive yuv420p, 1280 × 720, 16:9, 30 fps and AAC-LC stereo, 44.1 kHz.
Reported durations remain approximately 5:19.07 and 4:57.73. Browser durations
were 319.065011 and 297.726009 seconds respectively.

The derivative `moov` indexes begin at byte 32, before `mdat`, for both files.
Source indexes remain at bytes 35,491,937 and 41,223,519 respectively.
Issue #1 remains 36,312,608 bytes with unchanged SHA-256
`E0D8CD4750BAB2093455922F43CF78F7D71FE719D7D4713A82D6ED3470736618`.

Issue #1's retained file SHA-256 is
`E0D8CD4750BAB2093455922F43CF78F7D71FE719D7D4713A82D6ED3470736618`.

Both new issues are 1280 × 720, 16:9, square pixels, 30 fps, H.264 Main,
progressive `yuv420p`, with AAC-LC stereo at 44.1 kHz. Reported durations are
5:19.07 and 4:57.73 respectively. These are media durations, not release dates.

## Processing and encoded stream verification

Used the already-installed CapCut FFmpeg at
`C:\Users\Admin\AppData\Local\CapCut\Apps\8.9.1.3802\ffmpeg.exe`.
No dependency or media tool was installed. Each command used:

```text
ffmpeg -hide_banner -nostdin -n -i SOURCE -map 0 -c copy -movflags +faststart DESTINATION
```

Both stream mappings report `(copy)`. There was no video or audio re-encoding,
editing, trimming, resizing, gain change, or caption/poster generation. MP4
container metadata/layout and whole-file hashes change during remuxing.

The following SHA-256 hashes match between each original and derivative:

| Issue | Encoded video stream | Encoded audio stream |
| --- | --- | --- |
| 2 | `4390ebe745d414e24c907084898eac6b06284d9cc83675165a26729260801566` | `6edcbeaa6f6f6ad56875e58ceb5b14c8f43123fc3f394df4e27cacbb76d536da` |
| 3 | `35e26b06a2cb8a491cae75942bbd77ea884798c0b43d9bc18551c5cd68f81b3e` | `20640c62c25223e53cab163bc583e533b48878b835428dace424d4fa2b22adea` |

`-map 0 -c copy -f framehash -hash sha256 -` reports are byte-identical for
source/derivative pairs, including stream headers and packet timing, sizes, and
payload hashes. Issue #2 has 23,312 combined audio/video packets and report hash
`3c797015d433a9d29debc2365b93770f1f78003dad419361956b71a0f19f7ca9`.
Issue #3 has 21,753 packets and report hash
`5156674cb18e0d3445965988b6cd36bec8f09a0ec609077205503db29daee54f`.

Each derivative's `moov` box begins at byte 32, before `mdat`. The originals'
indexes remain at bytes 35,491,937 and 41,223,519 respectively.

## Local verification

- Installed dependencies were copied from the matching source checkout after
  verifying equal `package-lock.json` SHA-256:
  `EDDB19156D995362879F140D1CB324139BDF427DC8BC92735CCB314EE96E52B2`.
  No dependency installation or lockfile change.
- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `npm test`: 19 passed, 0 failed. Existing tests use injected provider mocks;
  the actual-route test rejects unexpected external fetches. No live signup was
  submitted and no external subscriber write occurred.
- Node reports an existing module-type warning for the test files; package
  configuration was not changed to suppress it.
- `npm run build`: passed, including production TypeScript checking and static
  generation of 28 pages. The first sandboxed attempt could not create `.next`;
  the approved retry with filesystem access passed. No deployment was performed.
- Dependencies were copied from the matching existing installation after
  verifying identical lockfile hashes and Next.js 16.3.6. No install, upgrade,
  lockfile regeneration, or source dependency changes occurred.

## Local browser and HTTP verification

- Owner inspection URL: `http://127.0.0.1:3015/comics/the-artist-nobody-heard`.
  A local production server is bound only to `127.0.0.1:3015`.
- Edge viewport checks: 320 × 740, 390 × 844, 768 × 1024, 1440 × 900.
  No horizontal overflow; all videos remain contained and correctly proportioned.
  Navigation targets are about 143 × 48 CSS pixels at larger widths and wrap
  cleanly on narrow screens. Browser viewport override was reset afterward.
- All three anchors resolve to their numbered sections. Keyboard Tab/Enter
  navigation and native keyboard media controls were exercised.
- All three videos decoded in Edge with no media error. Issues #2/#3 seeking
  was checked at approximately 2:42 and 2:31 respectively. Issue #1 decoded at
  its original 1280 × 718 dimensions and 312.12-second duration.
- Edge's McAfee Web Boost extension paused playback. Its settings were not
  changed. A separate extension-free in-app browser confirmed continuous
  playback of both new issues (over 25 seconds each), native pause/resume, and
  fullscreen entry/exit. This was not a full end-to-end editorial viewing.
- No browser console warnings/errors were observed in either browser.
- Before user playback, all three videos had readyState 0 with `preload="none"`,
  no autoplay, native controls, and `playsinline`. No player loads eagerly.
- The approved logo loaded. Canonical and metadata were checked in rendered DOM;
  JSON-LD parses and has three issue parts with distinct anchors/media URLs.
- Homepage, music, contact, series, sitemap, and robots returned HTTP 200 locally.
  All three MP4s returned HTTP 206 to a byte-range request with `video/mp4` and
  the expected file lengths. Existing issue-route redirects returned HTTP 308
  to `/comics/the-artist-nobody-heard#watch` unchanged.
- No live signup submission was made. Existing provider mock tests passed.
- `git diff --check` passed; the staging area is empty. Only the five approved
  implementation files are modified/new. Existing production alias still points
  to `dpl_H2m6Jv5NrWgWSqtf5Mp6pEkmrje9` at final verification.

## Remaining review items

Final motion-comic subtitles, public credit wording,
and captions/transcripts are not confirmed. Posters are approved and integrated
locally as recorded below. Numbered headings are intentional;
no creative content or asset was invented. Lack of captions remains an
accessibility concern before publication. Real iOS/Android playback requires
device testing; desktop viewport emulation is not equivalent.

Owner reports Vercel Pro at $20/month and a $10 additional metered-spend alert,
with automatic pausing disabled. The alert is not a hard spending cap. No paid
service, account setting, or subscription was changed in this task.

Feature-branch pushes can trigger previews; pushes/merges to `main` can trigger
production and automatic public-domain assignment. All publishing remains
subject to separate owner approval of an exact reviewed revision and target.

## Owner-approved poster integration — November 26, 2026

The owner personally watched and approved playback and video presentation for
all three issues before poster integration. The owner subsequently approved all
three corrected cinematic posters for local website integration. This approval
does not authorize staging, commits, pushes, deployments, or publication.

### Approved sources and verification

Source directory: `C:\Users\Admin\Downloads\Rhythm Realm Final Posters`.
The three `the-artist-nobody-heard-issue-0N-poster-1280x720.png` sources were
verified against that directory's `poster-verification.json`. Each is exactly
1280 × 720. All contain the official Design A emblem composited directly from
the approved RR-LOGO-001 PNG, whose SHA-256 is
`5BC6A1F861FADCE81612F5413D4FA3D97322C9C6FE85DABC2ECF85F319E3D4AF`.
No original PNG, ZIP, logo, or video was overwritten or modified.

| Issue | Approved PNG SHA-256 |
| --- | --- |
| #1 | `A8360CC6907FBC71E30D381CCBFB9FD0DAEB6B3D6E247794F31889FBBF826FF4` |
| #2 | `C316E7B50F478DBFCD351A2D895C5ECF3E0B746E070C2D78EAAD19D645BA8CDC` |
| #3 | `F2D83DB06587571F0154FE59500F809633A3E475D0220AAD02AE63BA02C0A0A1` |

### Website delivery assets and code

The already installed Sharp 0.35.5 created lossless WebP derivatives without
resizing, cropping, palette reduction, or artwork changes. Decoded RGBA buffers
were compared directly against the approved PNGs and are byte-identical.
All delivery images remain 1280 × 720.

Directory: `public/images/motion-comic/`.

| Filename | Bytes | SHA-256 |
| --- | ---: | --- |
| `the-artist-nobody-heard-issue-01-poster.webp` | 1,165,824 | `1817372D023D20F6DEDDE60495BBAD03D9209AFB7D3B84FFA3020AA44BCCF7CD` |
| `the-artist-nobody-heard-issue-02-poster.webp` | 1,282,638 | `706BE11482AC180671EA5FD2A0E080859D57CA132547660EC071DC315FBBE690` |
| `the-artist-nobody-heard-issue-03-poster.webp` | 1,246,508 | `824B49B9C5782383D0C22268BF4E9842A639C24D8C463DB90700578531508E28` |

Total poster payload is 3,694,970 bytes versus 6,854,660 PNG bytes (46% smaller).
Native video posters may load even with `preload="none"`; that attribute continues
to prevent eager video loading. No image service or paid add-on was introduced.

`src/lib/motionComic.ts` maps each issue to its corresponding `posterPath`.
`src/app/comics/the-artist-nobody-heard/page.tsx` passes that path to the native
video `poster` attribute. Native controls, playsInline, preload="none", MP4 paths,
dimensions, existing navigation and the three anchors are retained. Existing
`object-contain` prevents stretching or cropping, including Issue #1's original
1280 × 718 player containing a 1280 × 720 poster. No generated titles, credits,
captions, artwork, or unrelated functionality changes were added.

### Local QA results

- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `npm test`: all 19 existing tests passed, using injected provider mocks; no
  external subscriber writes. Existing Node module-type warnings remain.
- `npm run build`: passed; production build completed with 28 generated pages.
- Browser checks at 1440 × 900, 768 × 1024, 390 × 844, and 320 × 740 showed no
  horizontal overflow. Desktop and mobile screenshots showed the correct three
  posters contained within responsive players. Native controls remain visible;
  their standard overlay covers part of the lower image while controls are shown.
- All three issue navigation links retained their correct anchor destinations.
  Native keyboard playback smoke checks advanced to 4.50, 6.54, and 6.94 seconds
  respectively with readyState 4, no media errors, and no console warnings/errors.
  This is not a repeat of the owner's full-length playback review.
- All three poster URLs returned HTTP 200, `image/webp`, and exact file bytes.
  All three MP4 byte-range checks returned HTTP 206. Video SHA-256 values still
  match the preserved Issue #1 and stream-copy derivatives recorded above.
- Homepage, music, contact and series pages returned HTTP 200. No signup form
  was submitted. Real iOS/Android device verification remains outstanding.
- `git diff --check` passed; the staging area remains empty. No dependency
  installation, staging, commit, push, merge, deployment, or publication occurred.

Local production-build preview:
`http://127.0.0.1:3016/comics/the-artist-nobody-heard`.
Port 3016 was selected because an existing listener occupied 3015; that listener
was left untouched. Preview binds to loopback only. Owner review is the next step.

## Release-candidate preflight — November 26, 2026

- Final owner visual approval covers all three motion comics and corrected
  posters; preserve the approved design without further creative changes.
- Vercel project `rhythmrealm-web` (`prj_ICnODufgS5BoWa0MbYyO022qFClC`) belongs
  to `andre-dee-washingtons-projects` (`team_5nSw5xjxb8UARrIi9BZjuzx4`) and is
  linked to GitHub `Andre1286/rhythmrealm-web`.
- Production alias and deployment metadata still identify
  `dpl_H2m6Jv5NrWgWSqtf5Mp6pEkmrje9`, READY, sourced from main at
  `eb36f1f2a91586e145dd582532b8d13778c943fb`. A fresh remote-head read confirms
  main at that same commit and no existing remote feature branch.
- Read-only dashboard verification confirms production tracks main with custom
  production-domain auto-assignment enabled; Preview branch tracking is enabled
  for all unassigned branches, with no preview custom domains. Git integration
  creates deployments from pushed commits. No settings were changed.
- Complete source diff and all six new files reviewed: two page/data source
  changes, this report, two approved MP4 derivatives and three approved WebPs.
  No dependency, signup, music, shared navigation, or unrelated asset changes.
- Reverified the three delivered video hashes, two original Downloads video
  hashes, official logo hash, approved PNG hashes against poster-verification.json,
  and WebP hashes recorded above. WebP decoded RGBA pixels remain identical.
- Final lint, standalone typecheck, all 19 mocked tests, production build and
  whitespace checks passed. No live signup submission or subscriber write.
- The eight approved paths consist of the original five implementation files
  listed above plus the three WebPs under `public/images/motion-comic/`.
- Requested commit message:
  `feat: publish motion comic issues 2 and 3 with cinematic posters`.
- Preview deployment identity, hosted playback, seeking, ranges, responsive QA,
  and unchanged production alias will be verified after the feature-branch push
  and reported separately. No production release is authorized by this record.

## Final technical and mobile checkpoint — November 26, 2026

Owner-reported real-device checkpoint: Google Pixel 10 Pro XL. The owner confirms
that all three posters display correctly, all three issue navigation buttons
work, all three videos play with sound, fullscreen works, and there is no
unexpected buffering or layout trouble. Mobile presentation and playback are
owner-approved. This is the owner's real-device evidence, not agent device
emulation, and resolves the outstanding Android playback checkpoint. No claim
of iOS testing is made.

Approved release candidate remains
`66b60d987618b8b829086eb10a6df8b2159eea12` on
`codex/motion-comic-issues-2-3`; fresh GitHub remote-head verification matches it.
Preview deployment `dpl_5SyuY7kqcscz1qNVw3kq5puTTFPf` remains READY and identifies
that exact commit and branch in the correct project.

Preview URL:
`https://rhythmrealm-gpue0hrib-andre-dee-washingtons-projects.vercel.app/comics/the-artist-nobody-heard`.

### Hosted partial-content verification

Six authenticated GET requests tested the first 1,024 bytes and a separate
1,024-byte range beginning 60% through each delivered MP4. Every request returned
HTTP 206, `Content-Type: video/mp4`, `Accept-Ranges: bytes`, and
`Content-Length: 1024`. All six response bodies matched the corresponding bytes
of the approved local files exactly. No videos were saved, modified or processed.

| Issue | First Content-Range | Middle Content-Range |
| --- | --- | --- |
| #1 | `bytes 0-1023/36312608` | `bytes 21787564-21788587/36312608` |
| #2 | `bytes 0-1023/35831335` | `bytes 21498801-21499824/35831335` |
| #3 | `bytes 0-1023/41544993` | `bytes 24926995-24928018/41544993` |

The first samples also returned `Cache-Control: public, max-age=0, must-revalidate`,
ETag and Last-Modified validators, `X-Vercel-Cache: HIT`, and no Content-Encoding.
The deployment requires Vercel authentication: an unauthenticated probe returned
a 302 protection redirect. The Vercel connector created its standard temporary
23-hour deployment share link for the authenticated checks. The link and cookies
were held only in process memory, not stored in this repository or exposed in
the report. Browser security, project protection, billing and domain settings
were not changed. The temporary access link is not a production publication.

### Final disposition

Technical GO for the tested video delivery, native seeking and owner-approved
Pixel playback. No outstanding functional media-delivery blocker was found.
Captions/transcripts and final contributor-credit wording remain accessibility
and attribution release decisions. Prior Edge playback interruptions were
explicitly attributed by the browser to McAfee Web Boost; its settings were left
unchanged. No claim of independently repeated full-length desktop playback.

Fresh production checks confirm `www.rhythmrealm.net` still points to
`dpl_H2m6Jv5NrWgWSqtf5Mp6pEkmrje9`, and both deployed production metadata and
remote main remain at `eb36f1f2a91586e145dd582532b8d13778c943fb`.
Only this local documentation checkpoint was added; it is intentionally uncommitted
and does not change the approved release-candidate commit or deployed assets.
No new commit, staging, push, merge, production deployment or publication.
Explicit owner production authorization is still required.

## Final owner production authorization — November 26, 2026

The owner's explicit FINAL OWNER AUTHORIZATION — PRODUCTION RELEASE approves
publication to RhythmRealm.net from the reviewed release candidate
`66b60d987618b8b829086eb10a6df8b2159eea12`, plus the exact contributor credit
`Motion Comic Production: Terry` and these release records. This supersedes the
historical preview-only restrictions above. The existing uncommitted mobile
and HTTP range checkpoint has been preserved in full.

The approved videos, cinematic posters, official Design A logo, current website
presentation, desktop playback and Google Pixel 10 Pro XL playback are approved
and locked. The sole presentation addition is the exact credit in a small text
paragraph below the three players, using existing text styling. No media asset,
player behavior, issue anchor, shared navigation, music or signup code changes.

Captions and transcripts are explicitly deferred by the owner as an accessibility
follow-up. Track preparation of accurate captions/transcripts for all three
issues, owner review, native caption-track integration and accessibility QA as
future authorized work. Do not invent or generate caption wording in this release.
No iOS testing is claimed by the existing Pixel checkpoint.

Before final changes, production alias `www.rhythmrealm.net` still points to
`dpl_H2m6Jv5NrWgWSqtf5Mp6pEkmrje9`; remote main remains
`eb36f1f2a91586e145dd582532b8d13778c943fb`. That previous READY production
deployment is the rollback reference; this approval does not request a rollback.
The remote release branch and READY preview still identify approved commit
`66b60d987618b8b829086eb10a6df8b2159eea12`.

Authorized workflow: run final lint/typecheck/tests/build, commit and push only
the page credit and this report (including the preserved checkpoint), verify the
updated preview is READY and displays the credit, then use the repository's
GitHub pull-request merge workflow into main. The existing Git integration may
create the production deployment and automatically assign its production domains.
Verify the exact production commit, READY state, domain mapping and live website
before declaring publication successful. No paid add-on, billing change, security
or protection-setting change, destructive Git operation or unrelated change is
authorized. Stop and report unexpected changes, conflicts, check failures or
deployment errors without taking corrective action.

Final local validation of the exact credit addition: `npm run lint`,
`npm run typecheck`, all 19 existing mocked tests and `npm run build` passed.
The three delivered MP4 and three WebP SHA-256 values remain identical to the
approved values above. `git diff --check` passed. Only this report and the page's
three-line credit addition differ from the original approved release candidate.
The existing test module-type warning is unchanged. No live subscriber write,
dependency installation, media processing or design change was performed.
