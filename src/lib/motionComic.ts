export const motionComicTitle = "The Artist Nobody Heard";
export const motionComicDescription =
  "Watch Issues #1, #2, and #3 of The Artist Nobody Heard, a Rhythm Realm motion comic about music, artistic identity, ownership, and finding a real audience.";
export const motionComicPath = "/comics/the-artist-nobody-heard";
export const motionComicWatchPath = `${motionComicPath}#watch`;
export const motionComicVideoPath = "/videos/the-artist-nobody-heard.mp4";

type MotionComicIssue = {
  number: number;
  anchor: string;
  headingId: string;
  videoPath: string;
  posterPath: string;
  width: number;
  height: number;
  duration: string;
};

export const motionComicIssues: readonly MotionComicIssue[] = [
  {
    number: 1,
    anchor: "watch",
    headingId: "motion-comic-title",
    videoPath: motionComicVideoPath,
    posterPath: "/images/motion-comic/the-artist-nobody-heard-issue-01-poster.webp",
    width: 1280,
    height: 718,
    duration: "PT5M12.12S",
  },
  {
    number: 2,
    anchor: "watch-issue-2",
    headingId: "motion-comic-issue-2-title",
    videoPath: "/videos/the-artist-nobody-heard-issue-02.mp4",
    posterPath: "/images/motion-comic/the-artist-nobody-heard-issue-02-poster.webp",
    width: 1280,
    height: 720,
    duration: "PT5M19.07S",
  },
  {
    number: 3,
    anchor: "watch-issue-3",
    headingId: "motion-comic-issue-3-title",
    videoPath: "/videos/the-artist-nobody-heard-issue-03.mp4",
    posterPath: "/images/motion-comic/the-artist-nobody-heard-issue-03-poster.webp",
    width: 1280,
    height: 720,
    duration: "PT4M57.73S",
  },
];
