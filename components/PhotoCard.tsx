"use client";

/**
 * PhotoCard -- personal photo integration for VS ATL
 *
 * Handles portrait photos (selfies, mirror shots) with object-contain
 * so faces never get cropped. Landscape/wide images use object-cover.
 * Responsive max-heights keep images from dominating the viewport.
 */

interface PhotoCardProps {
  src: string;
  alt: string;
  caption?: string;
  overlay?: string;
  variant?: "hero" | "inline" | "float" | "chaos" | "meme";
  className?: string;
  priority?: boolean;
  /** Force landscape treatment (object-cover). Default auto-detects from variant. */
  landscape?: boolean;
}

export default function PhotoCard({
  src,
  alt,
  caption,
  overlay,
  variant = "inline",
  className = "",
  priority = false,
  landscape = false,
}: PhotoCardProps) {
  const base =
    "relative overflow-hidden rounded-lg transition-all duration-500 group";

  // Hero and meme are always landscape/cover. Float and chaos are portrait-first.
  const isLandscape = landscape || variant === "hero" || variant === "meme";

  const variants: Record<string, string> = {
    hero: "w-full max-h-[300px] sm:max-h-[400px] lg:max-h-[450px]",
    inline:
      "w-full max-w-2xl mx-auto max-h-[500px] sm:max-h-[550px] lg:max-h-[600px]",
    float:
      "w-full sm:w-72 lg:w-80 max-h-[450px] sm:max-h-[400px] lg:max-h-[450px] sm:float-right sm:ml-6 sm:mb-4",
    chaos:
      "w-full max-w-2xl mx-auto rotate-[1.5deg] hover:rotate-0",
    meme:
      "w-full max-w-md mx-auto max-h-[300px] sm:max-h-[350px] lg:max-h-[400px]",
  };

  const glowBorder =
    variant === "chaos"
      ? "border-2 border-neon-pink/30 hover:border-neon-pink/60 hover:shadow-[0_0_30px_rgba(255,45,123,0.25)]"
      : "border border-cream/10 hover:border-cream/25 hover:shadow-[0_0_20px_rgba(255,45,123,0.1)]";

  // Portrait photos: object-contain preserves the full image (no face cropping).
  // Landscape photos: object-cover fills the frame nicely.
  const objectFit = isLandscape ? "object-cover" : "object-contain";
  const objectPosition = isLandscape ? "object-center" : "object-top";

  return (
    <figure className={`${className} my-8 lg:my-12`}>
      <div className={`${base} ${variants[variant]} ${glowBorder} bg-midnight/40`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          width={800}
          height={isLandscape ? 450 : 1000}
          className={`w-full ${isLandscape ? "h-full" : ""} ${objectFit} ${objectPosition}`}
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
