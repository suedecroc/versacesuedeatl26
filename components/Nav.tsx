"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/day", label: "Day" },
  { href: "/golden-hour", label: "Golden Hour" },
  { href: "/nightlife", label: "Nightlife" },
  { href: "/after-hours", label: "After Hours" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const activeLabel = tabs.find((t) => t.href === pathname)?.label ?? "VS ATL";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/95 backdrop-blur-md border-b border-white/5 h-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-stretch">

          {/* Logo */}
          <Link
            href="/day"
            className="font-[family-name:var(--font-display)] text-neon-pink text-xl tracking-wider neon-glow-pink flex items-center pr-5 lg:pr-8 shrink-0"
          >
            VS ATL
          </Link>

          <div className="hidden md:block w-px bg-white/8 my-3" />

          {/* Desktop tabs */}
          <div className="hidden md:flex items-stretch">
            {tabs.map((tab) => {
              const active = pathname === tab.href;
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`
                    relative flex items-center px-4 lg:px-5
                    font-[family-name:var(--font-heading)] text-[11px] tracking-[0.15em] uppercase
                    transition-colors duration-200
                    ${active ? "text-neon-pink" : "text-cream/40 hover:text-cream/70"}
                  `}
                >
                  {tab.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-neon-pink shadow-[0_0_6px_rgba(255,45,123,0.9)]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile: current chapter + hamburger */}
          <div className="md:hidden flex items-center justify-between flex-1">
            <span className="font-[family-name:var(--font-heading)] text-[10px] tracking-[0.2em] text-cream/30 uppercase">
              {activeLabel}
            </span>
            <button
              onClick={() => setOpen(!open)}
              className="flex flex-col gap-1.5 p-2 -mr-2"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-neon-pink transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-neon-pink transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-neon-pink transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile full-screen menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-midnight/98 grain flex flex-col items-center justify-center">
          <p className="font-[family-name:var(--font-display)] text-neon-pink/30 text-sm tracking-[0.3em] uppercase absolute top-5 left-5">
            VS ATL
          </p>
          <div className="relative z-10 flex flex-col items-center gap-6">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                onClick={() => setOpen(false)}
                className={`
                  font-[family-name:var(--font-display)] text-5xl sm:text-6xl tracking-wide uppercase transition-colors
                  ${pathname === tab.href ? "text-neon-pink neon-glow-pink" : "text-cream/60 hover:text-cream"}
                `}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
