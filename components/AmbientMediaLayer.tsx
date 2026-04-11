import type { ReactNode } from "react";

interface AmbientMediaLayerProps {
  children: ReactNode;
  gradient?: "pink" | "midnight" | "warm" | "purple";
  className?: string;
}

export default function AmbientMediaLayer({
  children,
  gradient = "midnight",
  className = "",
}: AmbientMediaLayerProps) {
  const gradientClass =
    gradient === "pink"
      ? "bg-gradient-to-b from-neon-pink/20 via-deep-maroon/40 to-midnight"
      : gradient === "warm"
        ? "bg-gradient-to-b from-dirty-orange/20 via-midnight/60 to-midnight"
        : gradient === "purple"
          ? "bg-gradient-to-b from-club-purple/20 via-midnight/60 to-midnight"
          : "bg-gradient-to-b from-midnight/90 via-midnight/60 to-midnight";

  return (
    <section className={`relative overflow-hidden grain-heavy ${className}`}>
      <div className="absolute inset-0 bg-sweat" />
      <div className={`absolute inset-0 ${gradientClass}`} />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
