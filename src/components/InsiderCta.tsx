import RhythmRealmLink from "@/components/RhythmRealmLink";
import {
  INSIDERS_BUTTON_LABEL,
  INSIDERS_PROMISE,
  INSIDERS_SIGNUP_HREF,
  INSIDERS_TITLE,
} from "@/lib/insiders";

type InsiderCtaProps = {
  introduction?: string;
  className?: string;
};

export default function InsiderCta({
  introduction,
  className = "rounded-lg border border-cyan-200/20 bg-cyan-200/[0.06] p-6 sm:p-8",
}: InsiderCtaProps) {
  return (
    <section aria-label="Rhythm Realm Insiders invitation" className={className}>
      {introduction ? (
        <p className="mb-3 max-w-2xl text-sm leading-relaxed text-cyan-100">
          {introduction}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {INSIDERS_TITLE}
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/68 sm:text-base">
        {INSIDERS_PROMISE}
      </p>
      <RhythmRealmLink
        href={INSIDERS_SIGNUP_HREF}
        target="_self"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-cyan-200/30 px-5 py-3 text-center text-sm font-semibold text-cyan-100 transition hover:bg-cyan-100 hover:text-black sm:w-auto"
      >
        {INSIDERS_BUTTON_LABEL}
      </RhythmRealmLink>
    </section>
  );
}
