import Image from "next/image";

import RhythmRealmLink from "@/components/RhythmRealmLink";

const navLinks = [
  { href: "/music", label: "Music" },
  { href: "/comics/the-artist-nobody-heard/issue-1", label: "Comic" },
  { href: "/blog", label: "Stories" },
  { href: "/about-andre-washington", label: "About" },
  { href: "/#signup", label: "Join" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-black/90 text-white backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <RhythmRealmLink href="/" target="_self" className="flex items-center gap-3">
          <Image
            src="/rhythm-realm-logo.png"
            alt="Rhythm Realm home"
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
          <ul className="flex flex-wrap items-center gap-1 text-sm text-white/72 sm:gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <RhythmRealmLink
                  href={link.href}
                  target="_self"
                  className={`inline-flex rounded-full border px-3 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-100 ${
                    link.label === "Join"
                      ? "border-cyan-200/30 font-semibold text-cyan-100 hover:bg-cyan-100 hover:text-black"
                      : "border-transparent hover:border-white/20 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </RhythmRealmLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
