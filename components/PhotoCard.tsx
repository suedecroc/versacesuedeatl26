"use client";

/**
 * PhotoCard -- personal photo integration for VS ATL
 *
 * NOTE: Add actual image files to public/photos/ before deploying.
 * The component gracefully degrades when images are missing (shows alt text).
 */

interface PhotoCardProps {
  src: string;
  alt: string;
  caption?: string;
  overlay?: string;
  variant?: "hero" | "inline" | "float" | "chaos";
  className?: string;
}

export default function PhotoCard({
  src,
  alt,
  caption,
  overlay,
  variant = "inline",
  className = "",
}: PhotoCardProps) {
  const base =
    "relative overflow-hidden rounded-sm transition-all duration-500 group";

  const variants: Record<string, string> = {
    hero: "w-full aspect-[16/9] lg:aspect-[21/9]",
    inline:
      "w-full max-w-2xl mx-auto aspect-[4/3]",
    float:
      "w-full sm:w-72 lg:w-80 aspect-[3/4] sm:float-right sm:ml-6 sm:mb-4",
    chaos:
      "w-full max-w-lg mx-auto aspect-[4/5] rotate-[1.5deg] hover:rotate-0",
  };

  const glowBorder =
    variant === "chaos"
      ? "border-2 border-neon-pink/30 hover:border-neon-pink/60 hover:shadow-[0_0_30px_rgba(255,45,123,0.25)]"
      : "border border-cream/10 hover:border-cream/25 hover:shadow-[0_0_20px_rgba(255,45,123,0.1)]";

  return (
    <figure className={`${className} my-8 lg:my-12`}>
      <div className={`${base} ${variants[variant]} ${glowBorder}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const fallback = target.nextElementSibling as HTMLElement | null;
            if (fallback) fallback.style.display = "flex";
          }}
        />
        {/* Fallback when image file is missing */}
        <div
          className="absolute inset-0 bg-charcoal/80 items-center justify-center p-6 text-center hidden"
          aria-hidden="true"
        >
          <p className="font-[family-name:var(--font-body)] text-cream/40 text-sm">
            {alt}
          </p>
        </div>

        {/* Overlay text (e.g. "Pimp down!") */}
        {overlay && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight/90 via-midnight/50 to-transparent p-4 sm:p-6">
            <p className="font-[family-name:var(--font-display)] text-cream text-lg sm:text-xl uppercase tracking-wide neon-glow-subtle">
              {overlay}
            </p>
          </div>
        )}
      </div>

      {caption && (
        <figcaption className="font-[family-name:var(--font-heading)] text-cream/30 text-xs tracking-wide mt-3 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
