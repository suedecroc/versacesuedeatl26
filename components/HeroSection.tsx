import MotionWrapper from "./MotionWrapper";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
      {/* Background gradient: neon-pink to midnight */}
      <div className="absolute inset-0 bg-gradient-to-b from-neon-pink/30 via-deep-maroon/40 to-midnight" />
      <div className="absolute inset-0 bg-gradient-to-r from-club-purple/10 via-transparent to-neon-pink/10" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <MotionWrapper>
          <p className="font-[family-name:var(--font-heading)] text-neon-pink/80 text-xs sm:text-sm tracking-[0.3em] uppercase mb-6 neon-glow-subtle">
            April 29 - May 3, 2026
          </p>
        </MotionWrapper>

        <MotionWrapper delay={200}>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(3.5rem,15vw,12rem)] leading-[0.85] tracking-tight text-cream neon-glow-pink uppercase">
            VERSACE
            <br />
            SUEDE
            <br />
            <span className="text-neon-pink">ATL</span>
          </h1>
        </MotionWrapper>

        <MotionWrapper delay={400}>
          <p className="font-[family-name:var(--font-body)] text-cream/60 text-base sm:text-lg mt-8 max-w-lg mx-auto leading-relaxed">
            east side energy. magic city nights. lemon pepper theology.
          </p>
        </MotionWrapper>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 scroll-indicator">
        <span className="font-[family-name:var(--font-heading)] text-neon-pink/50 text-[10px] tracking-[0.3em]">
          SCROLL
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-neon-pink/50 to-transparent" />
      </div>
    </section>
  );
}
