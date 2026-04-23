import Link from "next/link";
import MotionWrapper from "./MotionWrapper";

interface ChapterNavProps {
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
}

export default function ChapterNav({ prev, next }: ChapterNavProps) {
  return (
    <section className="bg-sweat grain py-28 sm:py-36 px-6 lg:px-12 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-pink/3 to-transparent pointer-events-none" />
      <MotionWrapper>
        <div className="relative z-10 max-w-3xl mx-auto">
          {next ? (
            <>
              <p className="font-[family-name:var(--font-heading)] text-[10px] tracking-[0.4em] text-cream/20 uppercase mb-6">
                Next Chapter
              </p>
              <Link href={next.href} className="group block">
                <h2 className="font-[family-name:var(--font-display)] text-[clamp(3rem,12vw,8rem)] leading-[0.9] text-neon-pink neon-glow-pink uppercase tracking-tight group-hover:text-cream transition-colors duration-500">
                  {next.label}
                </h2>
              </Link>
              <div className="mt-8 w-8 h-px bg-neon-pink/40 mx-auto" />
            </>
          ) : (
            <p className="font-[family-name:var(--font-display)] text-[clamp(2rem,8vw,4rem)] leading-[0.9] text-cream/20 uppercase">
              that&apos;s a wrap.
            </p>
          )}
        </div>
      </MotionWrapper>
      {prev && (
        <MotionWrapper delay={200}>
          <p className="relative z-10 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.3em] text-cream/15 uppercase mt-10">
            ← {prev.label}
          </p>
        </MotionWrapper>
      )}
    </section>
  );
}
