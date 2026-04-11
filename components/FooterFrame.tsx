import MotionWrapper from "./MotionWrapper";

export default function FooterFrame() {
  return (
    <footer className="py-16 sm:py-24 px-6 bg-midnight grain">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <MotionWrapper>
          <p className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl text-neon-pink/60 neon-glow-pink uppercase tracking-wide mb-8">
            [STRONG CLOSING LINE]
          </p>
        </MotionWrapper>

        <MotionWrapper delay={200}>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent mx-auto mb-8" />
        </MotionWrapper>

        <MotionWrapper delay={300}>
          <p className="font-[family-name:var(--font-heading)] text-cream/20 text-xs tracking-[0.3em] uppercase">
            VS ATL / April 29 - May 3, 2026
          </p>
        </MotionWrapper>
      </div>
    </footer>
  );
}
