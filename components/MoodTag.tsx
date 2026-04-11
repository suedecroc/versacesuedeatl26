interface MoodTagProps {
  label: string;
  variant?: "default" | "glow" | "warm";
}

export default function MoodTag({ label, variant = "default" }: MoodTagProps) {
  const styles = {
    default:
      "border border-neon-pink/30 text-neon-pink/80 bg-neon-pink/5",
    glow:
      "border border-neon-pink/50 text-neon-pink bg-neon-pink/10 shadow-[0_0_8px_rgba(255,45,123,0.2)]",
    warm:
      "border border-dirty-orange/40 text-dirty-orange bg-dirty-orange/5",
  };

  return (
    <span
      className={`inline-block font-[family-name:var(--font-heading)] text-[10px] sm:text-xs tracking-[0.1em] uppercase px-3 py-1 rounded-full ${styles[variant]}`}
    >
      {label}
    </span>
  );
}
