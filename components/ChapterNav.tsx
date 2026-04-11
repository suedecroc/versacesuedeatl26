import Link from "next/link";
import MotionWrapper from "./MotionWrapper";

interface ChapterNavProps {
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
}

export default function ChapterNav({ prev, next }: ChapterNavProps) {
  return (
    <MotionWrapper>
      <div className="px-6 py-16 sm:py-20 bg-midnight">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          {prev ? (
            <Link
              href={prev.href}
              className="group flex flex-col items-start"
            >
              <span className="font-[family-name:var(--font-heading)] text-[10px] tracking-[0.3em] text-cream/30 uppercase mb-1">
                Previous
              </span>
              <span className="font-[family-name:var(--font-display)] text-lg sm:text-2xl text-cream/60 group-hover:text-neon-pink transition-colors uppercase tracking-wide">
                {prev.label}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={next.href}
              className="group flex flex-col items-end"
            >
              <span className="font-[family-name:var(--font-heading)] text-[10px] tracking-[0.3em] text-cream/30 uppercase mb-1">
                Next
              </span>
              <span className="font-[family-name:var(--font-display)] text-lg sm:text-2xl text-cream/60 group-hover:text-neon-pink transition-colors uppercase tracking-wide">
                {next.label}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </MotionWrapper>
  );
}
