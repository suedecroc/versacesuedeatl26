import type { ReactNode } from "react";

interface MobileCarouselProps {
  children: ReactNode;
  className?: string;
}

export default function MobileCarousel({
  children,
  className = "",
}: MobileCarouselProps) {
  return (
    <div
      className={`flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible ${className}`}
    >
      {children}
    </div>
  );
}
