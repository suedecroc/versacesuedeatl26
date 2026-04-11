"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const chapters = [
  { href: "/", label: "HOME" },
  { href: "/day", label: "DAY" },
  { href: "/golden-hour", label: "GOLDEN HOUR" },
  { href: "/nightlife", label: "NIGHTLIFE" },
  { href: "/after-hours", label: "AFTER HOURS" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-midnight/90 backdrop-blur-md border-b border-neon-pink/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link
              href="/"
              className="font-[family-name:var(--font-display)] text-neon-pink text-xl sm:text-2xl tracking-wider neon-glow-pink"
            >
              VS ATL
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {chapters.map((ch) => (
                <Link
                  key={ch.href}
                  href={ch.href}
                  className={`font-[family-name:var(--font-heading)] text-xs tracking-[0.15em] transition-colors uppercase ${
                    pathname === ch.href
                      ? "text-neon-pink neon-glow-subtle"
                      : "text-cream/70 hover:text-neon-pink"
                  }`}
                >
                  {ch.label}
                </Link>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-neon-pink transition-transform duration-300 ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-neon-pink transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-neon-pink transition-transform duration-300 ${
                  open ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-midnight/98 grain flex flex-col items-center justify-center gap-8">
          <div className="relative z-10 flex flex-col items-center gap-8">
            {chapters.map((ch) => (
              <Link
                key={ch.href}
                href={ch.href}
                onClick={() => setOpen(false)}
                className={`font-[family-name:var(--font-display)] text-4xl tracking-wide transition-colors ${
                  pathname === ch.href
                    ? "text-neon-pink neon-glow-pink"
                    : "text-cream hover:text-neon-pink"
                }`}
              >
                {ch.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
