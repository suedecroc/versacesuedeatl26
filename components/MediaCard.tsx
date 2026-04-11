import MotionWrapper from "./MotionWrapper";

interface MediaCardProps {
  overlayText?: string;
  aspectRatio?: string;
  className?: string;
  delay?: number;
}

export default function MediaCard({
  overlayText,
  aspectRatio = "aspect-video",
  className = "",
  delay = 0,
}: MediaCardProps) {
  return (
    <MotionWrapper delay={delay}>
      <div
        className={`relative ${aspectRatio} bg-sweat overflow-hidden rounded-sm glow-border ${className}`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-[family-name:var(--font-heading)] text-neon-pink/20 text-xs tracking-[0.2em]">
            [MEDIA]
          </span>
        </div>

        {overlayText && (
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <p className="font-[family-name:var(--font-display)] text-cream text-lg sm:text-xl uppercase tracking-wide">
              {overlayText}
            </p>
          </div>
        )}
      </div>
    </MotionWrapper>
  );
}
