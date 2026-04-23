import MoodTag from "./MoodTag";
import MotionWrapper from "./MotionWrapper";

interface PlaceCardProps {
  name: string;
  address?: string;
  description?: string;
  mustOrder?: string;
  tags?: string[];
  dark?: boolean;
  glow?: boolean;
  delay?: number;
  tagVariant?: "default" | "glow" | "warm";
  website?: string;
  mapUrl?: string;
}

export default function PlaceCard({
  name,
  address,
  description,
  mustOrder,
  tags = [],
  dark = true,
  glow = false,
  delay = 0,
  tagVariant = "default",
  website,
  mapUrl,
}: PlaceCardProps) {
  return (
    <MotionWrapper delay={delay}>
      <div
        className={`p-5 sm:p-6 rounded-sm transition-all duration-300 h-full ${
          glow
            ? "glow-border bg-sweat/80"
            : dark
              ? "border border-cream/8 bg-charcoal/40 hover:border-neon-pink/20 hover:shadow-[0_0_15px_rgba(255,45,123,0.08)]"
              : "border border-midnight/10 bg-cream/80 hover:border-midnight/20"
        }`}
      >
        <h3
          className={`font-[family-name:var(--font-display)] text-lg sm:text-xl tracking-wide uppercase mb-1 ${
            dark ? "text-cream" : "text-midnight"
          }`}
        >
          {name}
        </h3>

        {address && (
          <p
            className={`font-[family-name:var(--font-heading)] text-xs tracking-wide mb-3 ${
              dark ? "text-cream/40" : "text-midnight/40"
            }`}
          >
            {address}
          </p>
        )}

        {description && (
          <p
            className={`font-[family-name:var(--font-body)] text-sm leading-relaxed mb-3 ${
              dark ? "text-cream/60" : "text-midnight/60"
            }`}
          >
            {description}
          </p>
        )}

        {mustOrder && (
          <p className="font-[family-name:var(--font-heading)] text-xs text-neon-pink tracking-wide mb-3 neon-glow-subtle">
            must order: {mustOrder}
          </p>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag) => (
              <MoodTag key={tag} label={tag} variant={glow ? "glow" : tagVariant} />
            ))}
          </div>
        )}

        {(website || mapUrl) && (
          <div className={`flex gap-4 mt-4 pt-3 border-t ${dark ? "border-cream/8" : "border-midnight/10"}`}>
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-[family-name:var(--font-heading)] text-[10px] tracking-[0.15em] uppercase transition-colors ${
                  dark
                    ? `text-cream/30 ${tagVariant === "warm" ? "hover:text-dirty-orange" : "hover:text-neon-pink"}`
                    : "text-midnight/40 hover:text-midnight"
                }`}
              >
                website ↗
              </a>
            )}
            {mapUrl && (
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-[family-name:var(--font-heading)] text-[10px] tracking-[0.15em] uppercase transition-colors ${
                  dark
                    ? `text-cream/30 ${tagVariant === "warm" ? "hover:text-dirty-orange" : "hover:text-neon-pink"}`
                    : "text-midnight/40 hover:text-midnight"
                }`}
              >
                maps ↗
              </a>
            )}
          </div>
        )}
      </div>
    </MotionWrapper>
  );
}
