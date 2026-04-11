import MotionWrapper from "./MotionWrapper";

interface QuoteBlockProps {
  text: string;
  attribution?: string;
}

export default function QuoteBlock({
  text,
  attribution,
}: QuoteBlockProps) {
  return (
    <MotionWrapper>
      <blockquote className="py-12 sm:py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl leading-snug text-neon-pink/80 neon-glow-pink uppercase tracking-wide">
            &ldquo;{text}&rdquo;
          </p>
          {attribution && (
            <span className="font-[family-name:var(--font-heading)] text-xs tracking-[0.2em] mt-4 inline-block text-cream/30">
              -- {attribution}
            </span>
          )}
        </div>
      </blockquote>
    </MotionWrapper>
  );
}
