export default function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`py-8 sm:py-12 flex justify-center bg-midnight ${className}`}>
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />
    </div>
  );
}
