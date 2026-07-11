import RhythmRealmLink from "@/components/RhythmRealmLink";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/comics/the-artist-nobody-heard/issue-1", label: "Comic" },
  { href: "/blog", label: "Stories" },
  { href: "/about-andre-washington", label: "About Andre" },
  { href: "/#signup", label: "Join" },
  { href: "/behind-the-music", label: "Behind the Music" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-10 sm:px-6 md:grid-cols-[minmax(0,1fr)_auto]">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.18em]">
            Rhythm Realm
          </div>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/62">
            RhythmRealm.net is the official music home of Andre Washington,
            created for pop music with rhythm, soul, and real emotion.
          </p>
          <RhythmRealmLink
            href="/"
            target="_self"
            className="mt-5 inline-flex rounded-lg border border-cyan-200/30 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-100 hover:text-black"
          >
            RhythmRealm.net
          </RhythmRealmLink>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="grid gap-2 text-sm text-white/68 sm:grid-cols-2 md:text-right">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <RhythmRealmLink href={link.href} target="_self" className="hover:text-white">
                  {link.label}
                </RhythmRealmLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
