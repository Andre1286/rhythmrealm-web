import Image from "next/image";

import RhythmRealmLink from "@/components/RhythmRealmLink";

const navLinks = [
  { href: "/", label: "Home", target: "nav-home" },
  { href: "/music", label: "Music", target: "nav-music" },
  {
    href: "/about-andre-washington",
    label: "About",
    target: "nav-about-andre-washington",
  },
  {
    href: "/behind-the-music",
    label: "Behind the Music",
    target: "nav-behind-the-music",
  },
  { href: "/contact", label: "Contact", target: "nav-contact" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-black/90 text-white backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
        <RhythmRealmLink
          href="/"
          target="_self"
          className="flex items-center gap-3"
        >
          <Image
            src="/rhythm-realm-logo.png"
            alt="Rhythm Realm logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full border border-cyan-200/40 bg-black object-cover shadow-[0_0_18px_rgba(34,211,238,0.22)]"
            priority
          />
          <span>
            <span className="block text-sm font-semibold uppercase tracking-[0.18em]">
              Rhythm Realm
            </span>
            <span className="block text-xs text-white/60">
              Official music home of Andre Washington
            </span>
          </span>
        </RhythmRealmLink>

        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap items-center gap-2 text-sm text-white/72">
            {navLinks.map((link) => (
              <li key={link.href}>
                <RhythmRealmLink
                  href={link.href}
                  target="_self"
                  className="inline-flex rounded-full border border-transparent px-3 py-2 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </RhythmRealmLink>
              </li>
            ))}
            <li>
              <RhythmRealmLink
                href="/"
                target="_self"
                className="inline-flex rounded-full border border-cyan-200/30 px-3 py-2 font-semibold text-cyan-100 transition hover:bg-cyan-100 hover:text-black"
              >
                RhythmRealm.net
              </RhythmRealmLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
