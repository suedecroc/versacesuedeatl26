import Link from "next/link";
import Nav from "@/components/Nav";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-midnight grain flex flex-col">
      <Nav />

      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-[family-name:var(--font-heading)] text-neon-pink/60 text-xs tracking-[0.3em] uppercase mb-6 neon-glow-subtle">
            404
          </p>

          <h1 className="font-[family-name:var(--font-display)] text-[clamp(4rem,18vw,10rem)] leading-[0.85] text-cream uppercase tracking-tight neon-glow-subtle mb-6">
            LOST
            <br />
            <span className="text-neon-pink neon-glow-pink">IN ATL</span>
          </h1>

          <p className="font-[family-name:var(--font-body)] text-cream/40 text-base sm:text-lg leading-relaxed mb-12">
            the page you&apos;re looking for doesn&apos;t exist.
            <br />
            but you&apos;re in the right city.
          </p>

          <Link
            href="/"
            className="inline-block font-[family-name:var(--font-display)] text-sm tracking-widest uppercase bg-neon-pink text-midnight px-6 py-3 -skew-x-3 hover:brightness-110 transition-all"
          >
            <span className="skew-x-3 inline-block">Back to the Guide</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
