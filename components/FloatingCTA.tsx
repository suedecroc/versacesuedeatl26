"use client";

import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`
        fixed bottom-6 right-6 z-50
        float-animation
        bg-neon-pink text-midnight
        border-2 border-neon-pink
        shadow-[0_0_20px_rgba(255,45,123,0.5)]
        px-4 py-3
        font-[family-name:var(--font-display)] text-sm tracking-wider uppercase
        hover:scale-105 hover:brightness-110
        transition-all duration-200
        -skew-x-3
      `}
      aria-label="Back to top"
    >
      <span className="skew-x-3 inline-block">TOP</span>
    </button>
  );
}
