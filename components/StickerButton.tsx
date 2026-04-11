"use client";

interface StickerButtonProps {
  label?: string;
  href?: string;
  color?: "pink" | "orange" | "yellow" | "purple";
  className?: string;
}

const colorMap = {
  pink: {
    bg: "bg-neon-pink",
    border: "border-neon-pink",
    text: "text-midnight",
  },
  orange: {
    bg: "bg-dirty-orange",
    border: "border-dirty-orange",
    text: "text-midnight",
  },
  yellow: {
    bg: "bg-sunburnt-yellow",
    border: "border-sunburnt-yellow",
    text: "text-midnight",
  },
  purple: {
    bg: "bg-club-purple",
    border: "border-club-purple",
    text: "text-cream",
  },
};

export default function StickerButton({
  label = "[CTA]",
  href = "#",
  color = "pink",
  className = "",
}: StickerButtonProps) {
  const c = colorMap[color];

  return (
    <a
      href={href}
      className={`
        sticker-hover inline-block
        ${c.bg} ${c.text} ${c.border}
        border-3 px-5 py-2.5 md:px-7 md:py-3
        font-[family-name:var(--font-display)] text-base md:text-lg tracking-widest uppercase
        -skew-x-3
        relative overflow-hidden
        ${className}
      `}
    >
      <span className="relative z-10 skew-x-3 inline-block">{label}</span>
      <span className="absolute inset-0 bg-white/10 pointer-events-none" />
    </a>
  );
}
