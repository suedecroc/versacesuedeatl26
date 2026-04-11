import Link from "next/link";
import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import ChapterIntro from "@/components/ChapterIntro";
import QuoteBlock from "@/components/QuoteBlock";
import SectionDivider from "@/components/SectionDivider";
import AmbientMediaLayer from "@/components/AmbientMediaLayer";
import FloatingCTA from "@/components/FloatingCTA";
import FooterFrame from "@/components/FooterFrame";
import MotionWrapper from "@/components/MotionWrapper";
import PhotoCard from "@/components/PhotoCard";

/* =====================================================================
   CHAPTER CARDS DATA
   ===================================================================== */

const chapters = [
  {
    href: "/day",
    title: "Day",
    tagline: "the city is awake. so are you.",
    gradient: "from-dirty-orange/30 via-sunburnt-yellow/10 to-transparent",
    border: "border-dirty-orange/20 hover:border-dirty-orange/50",
    glow: "hover:shadow-[0_0_30px_rgba(255,107,53,0.15)]",
    accent: "text-dirty-orange",
    number: "01",
  },
  {
    href: "/golden-hour",
    title: "Golden Hour",
    tagline: "the shift. the drive. the in-between.",
    gradient: "from-sunburnt-yellow/20 via-dirty-orange/15 to-transparent",
    border: "border-sunburnt-yellow/20 hover:border-sunburnt-yellow/50",
    glow: "hover:shadow-[0_0_30px_rgba(255,199,44,0.15)]",
    accent: "text-sunburnt-yellow",
    number: "02",
  },
  {
    href: "/nightlife",
    title: "Nightlife",
    tagline: "you already know why you came.",
    gradient: "from-neon-pink/25 via-club-purple/10 to-transparent",
    border: "border-neon-pink/20 hover:border-neon-pink/50",
    glow: "hover:shadow-[0_0_30px_rgba(255,45,123,0.2)]",
    accent: "text-neon-pink",
    number: "03",
  },
  {
    href: "/after-hours",
    title: "After Hours",
    tagline: "the truth shows up after midnight.",
    gradient: "from-club-purple/25 via-neon-pink/10 to-transparent",
    border: "border-club-purple/20 hover:border-club-purple/50",
    glow: "hover:shadow-[0_0_30px_rgba(123,45,142,0.2)]",
    accent: "text-club-purple",
    number: "04",
  },
];

/* =====================================================================
   NEIGHBORHOODS (condensed reference)
   ===================================================================== */

const neighborhoods = [
  {
    name: "Inman Park",
    vibe: "atlanta's first suburb. victorian charm, serious kitchens, beltline access.",
    highlights: "Barcelona, Sotto Sotto, Beetlecat, Boccalupo, Bread & Butterfly",
  },
  {
    name: "Krog Street Market",
    vibe: "food hall energy. everything under one roof, all of it good.",
    highlights: "Fred's Meat & Bread, Varuni Napoli, Ticonderoga Club, Jai Ho",
  },
  {
    name: "Kirkwood",
    vibe: "east side locals-only charm. tree-lined, walkable, welcoming.",
    highlights: "The Argonaut, Sun in My Belly, The Albert",
  },
  {
    name: "Edgewood Avenue",
    vibe: "bar district. weird, creative, loud, inclusive. nightlife central.",
    highlights: "Sister Louisa's, Sound Table, Mother Bar, Joystick, Lore",
  },
  {
    name: "Ponce City Market",
    vibe: "massive food hall. rooftop views. atlanta showing off.",
    highlights: "Botiwalla, Bellina Alimentari, Skyline Park Rooftop",
  },
  {
    name: "Downtown",
    vibe: "the big draws. corporate meets legendary.",
    highlights: "World of Coca-Cola, Magic City, Fox Theatre",
  },
  {
    name: "Buckhead / Midtown",
    vibe: "upscale nightlife. dressed-up crowds. expensive and worth it.",
    highlights: "Koo Koo Room, Havana Club, Domaine",
  },
  {
    name: "Virginia Highland",
    vibe: "charming. brunch central. neighborhood-favorite walkability.",
    highlights: "Murphy's",
  },
];

/* =====================================================================
   PAGE
   ===================================================================== */

export default function Home() {
  return (
    <main>
      <Nav />
      <FloatingCTA />

      {/* ===== HERO ===== */}
      <HeroSection />

      {/* ===== CYBER ANGEL PHOTO ===== */}
      <section className="bg-midnight grain py-8 sm:py-12 px-6 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <PhotoCard
            src="/photos/jordan-cyber-angel.jpg"
            alt="Jordan -- y2k cyber angel edit"
            variant="chaos"
            caption="the angel you didn't ask for"
            priority
          />
        </div>
      </section>

      {/* ===== WHY ATL ===== */}
      <ChapterIntro
        eyebrow="The Mission"
        title="Why ATL Hits Different"
        intro="you land tuesday at 5. you leave saturday at 6. everything between is the point. this is not a tourist trip. this is atlanta unfiltered -- where grown folks play and the city doesn't pretend to be something it's not."
        quote="we came for the culture. stayed for the chaos."
      />

      {/* ===== SEPIA LAUGH PHOTO ===== */}
      <section className="bg-midnight grain px-6 lg:px-12 xl:px-16 pb-8">
        <div className="max-w-xl mx-auto">
          <figure className="my-8 lg:my-12">
            <div className="relative overflow-hidden rounded-lg border border-cream/10 hover:border-cream/25 transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,45,123,0.1)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/jordan-sepia-laugh.jpg"
                alt="Jordan laughing -- sepia film grain"
                loading="lazy"
                className="w-full h-auto block"
              />
            </div>
            <figcaption className="font-[family-name:var(--font-heading)] text-cream/30 text-xs tracking-wide mt-3 text-center">
              the energy we bringing
            </figcaption>
          </figure>
        </div>
      </section>

      <SectionDivider />

      {/* ===== CHAPTER CARDS ===== */}
      <section className="bg-midnight grain py-16 sm:py-24 px-6 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <MotionWrapper>
            <p className="font-[family-name:var(--font-heading)] text-xs tracking-[0.3em] text-neon-pink/60 uppercase mb-12 text-center">
              Four Chapters. One City.
            </p>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chapters.map((ch, i) => (
              <MotionWrapper key={ch.href} delay={i * 100}>
                <Link href={ch.href} className="block group">
                  <div
                    className={`relative overflow-hidden rounded-sm border ${ch.border} ${ch.glow} bg-sweat/60 transition-all duration-500 p-8 sm:p-10 min-h-[220px] flex flex-col justify-end`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${ch.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    <div className="relative z-10">
                      <span
                        className={`font-[family-name:var(--font-heading)] text-[10px] tracking-[0.3em] ${ch.accent} uppercase opacity-60`}
                      >
                        Chapter {ch.number}
                      </span>
                      <h3 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-cream uppercase tracking-wide mt-1 mb-3 group-hover:neon-glow-subtle transition-all">
                        {ch.title}
                      </h3>
                      <p className="font-[family-name:var(--font-body)] text-cream/50 text-sm leading-relaxed">
                        {ch.tagline}
                      </p>
                    </div>
                  </div>
                </Link>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ===== CINEMATIC INTERLUDE ===== */}
      <AmbientMediaLayer gradient="pink">
        <div className="py-20 sm:py-32 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <QuoteBlock
              text="atlanta don't do moderation. this itinerary definitely don't either."
            />
          </div>
        </div>
      </AmbientMediaLayer>

      {/* ===== NEIGHBORHOOD REFERENCE ===== */}
      <section id="areas" className="bg-sweat grain py-16 sm:py-24">
        <ChapterIntro
          eyebrow="By Neighborhood"
          title="Know Your Grid"
          intro="atlanta sprawls. these are the zones that matter. learn the names, trust the vibes, move accordingly."
        />

        <div className="px-6 lg:px-12 xl:px-16 pb-16 sm:pb-24 relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((hood, i) => (
              <MotionWrapper key={hood.name} delay={i * 60}>
                <div className="border border-neon-pink/10 bg-midnight/60 p-6 rounded-sm hover:border-neon-pink/25 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,45,123,0.06)]">
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-cream uppercase tracking-wide mb-1">
                    {hood.name}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-cream/40 text-sm mb-3">
                    {hood.vibe}
                  </p>
                  <p className="font-[family-name:var(--font-heading)] text-cream/25 text-xs tracking-wide">
                    {hood.highlights}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUTRO ===== */}
      <AmbientMediaLayer gradient="pink">
        <div className="py-24 sm:py-32 px-6 lg:px-12 text-center">
          <MotionWrapper>
            <p className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl text-neon-pink neon-glow-pink leading-snug max-w-3xl mx-auto uppercase tracking-wide">
              not polished. not sloppy. always on purpose.
            </p>
          </MotionWrapper>
          <MotionWrapper delay={200}>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent mx-auto mt-12" />
          </MotionWrapper>
        </div>
      </AmbientMediaLayer>

      <FooterFrame />
    </main>
  );
}
