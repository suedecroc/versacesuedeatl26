import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import ChapterIntro from "@/components/ChapterIntro";
import PlaceCard from "@/components/PlaceCard";
import QuoteBlock from "@/components/QuoteBlock";
import SectionDivider from "@/components/SectionDivider";
import MediaCard from "@/components/MediaCard";
import AmbientMediaLayer from "@/components/AmbientMediaLayer";
import MobileCarousel from "@/components/MobileCarousel";
import FloatingCTA from "@/components/FloatingCTA";
import FooterFrame from "@/components/FooterFrame";
import MotionWrapper from "@/components/MotionWrapper";
import StickerButton from "@/components/StickerButton";

/* =====================================================================
   DATA
   ===================================================================== */

const foodSpots = {
  inmanPark: [
    {
      name: "Barcelona Wine Bar",
      address: "240 N Highland Ave NE",
      tags: ["dinner", "wine", "tapas"],
      mustOrder: "[MUST ORDER]",
      description: "[DESCRIPTION]",
    },
    {
      name: "Sotto Sotto",
      address: "313 N Highland Ave NE",
      tags: ["dinner", "italian", "date night"],
      mustOrder: "linguine del pescatore",
      description: "[DESCRIPTION]",
    },
    {
      name: "Beetlecat",
      address: "469 N Highland Ave NE",
      tags: ["seafood", "oysters", "dinner"],
      mustOrder: "lobster roll",
      description: "[DESCRIPTION]",
    },
    {
      name: "Boccalupo",
      address: "753 Edgewood Ave NE",
      tags: ["pasta", "italian", "dinner"],
      mustOrder: "black spaghetti, snickerdoodle cookies",
      description: "[DESCRIPTION]",
    },
    {
      name: "Bread & Butterfly",
      address: "290 Elizabeth St NE",
      tags: ["brunch", "french", "cafe"],
      description: "[DESCRIPTION]",
    },
    {
      name: "Delbar",
      address: "471 N Highland Ave NE",
      tags: ["dinner", "middle eastern"],
      mustOrder: "koobideh kabob",
      description: "[DESCRIPTION]",
    },
  ],
  krogStreet: [
    {
      name: "Fred's Meat & Bread",
      address: "99 Krog St NE",
      tags: ["burgers", "lunch"],
      description: "[DESCRIPTION]",
    },
    {
      name: "Varuni Napoli",
      address: "99 Krog St NE",
      tags: ["pizza", "lunch"],
      description: "[DESCRIPTION]",
    },
    {
      name: "Ticonderoga Club",
      address: "99 Krog St NE",
      tags: ["cocktails", "elevated dive"],
      description: "[DESCRIPTION]",
    },
    {
      name: "Jai Ho",
      address: "99 Krog St NE",
      tags: ["indian", "street food"],
      description: "[DESCRIPTION]",
    },
  ],
  kirkwood: [
    {
      name: "The Argonaut",
      address: "Kirkwood",
      tags: ["seafood", "raw bar", "lunch"],
      description: "[DESCRIPTION]",
    },
    {
      name: "Sun in My Belly",
      address: "Kirkwood",
      tags: ["brunch", "cafe"],
      description: "[DESCRIPTION]",
    },
    {
      name: "The Albert",
      address: "1000 N Highland Ave NE",
      tags: ["wings", "bar", "neighborhood"],
      mustOrder: "smoked wings",
      description: "[DESCRIPTION]",
    },
  ],
};

const nightlifeSpots = [
  {
    name: "Magic City",
    address: "241 Forsyth St SW",
    tags: ["legendary", "late", "reckless"],
    description: "[DESCRIPTION]",
  },
  {
    name: "Sister Louisa's Church",
    address: "466 Edgewood Ave SE",
    tags: ["intimate", "weird", "neon"],
    description: "[DESCRIPTION]",
  },
  {
    name: "Sound Table",
    address: "483 Edgewood Ave",
    tags: ["loud", "intimate", "music"],
    description: "[DESCRIPTION]",
  },
  {
    name: "Mother Bar",
    address: "487 Edgewood Ave",
    tags: ["loud", "late", "neon"],
    description: "[DESCRIPTION]",
  },
  {
    name: "Joystick Gamebar",
    address: "427 Edgewood Ave",
    tags: ["intimate", "arcade", "neon"],
    description: "[DESCRIPTION]",
  },
  {
    name: "Lore",
    address: "Edgewood Ave",
    tags: ["loud", "inclusive", "late"],
    description: "[DESCRIPTION]",
  },
  {
    name: "Pisces",
    address: "Edgewood Ave",
    tags: ["loud", "music-forward", "neon"],
    description: "[DESCRIPTION]",
  },
  {
    name: "Koo Koo Room",
    address: "1140 Crescent Ave NE",
    tags: ["loud", "reckless", "neon"],
    description: "[DESCRIPTION]",
  },
  {
    name: "Havana Club",
    address: "Buckhead",
    tags: ["late", "latin", "loud"],
    description: "[DESCRIPTION]",
  },
  {
    name: "Domaine",
    address: "Midtown",
    tags: ["loud", "reckless", "neon"],
    description: "[DESCRIPTION]",
  },
];

const daytimeSpots = [
  {
    name: "Atlanta Beltline",
    address: "Eastside Trail",
    tags: ["walk", "art", "golden hour"],
    description: "[DESCRIPTION]",
  },
  {
    name: "World of Coca-Cola",
    address: "121 Baker St NW",
    tags: ["attraction", "pilgrimage"],
    description: "[DESCRIPTION]",
  },
  {
    name: "Ponce City Market Rooftop",
    address: "675 Ponce de Leon Ave NE",
    tags: ["skyline", "drinks", "views"],
    description: "[DESCRIPTION]",
  },
  {
    name: "Virginia Highland",
    address: "Virginia Ave NE",
    tags: ["stroll", "charming", "brunch"],
    description: "[DESCRIPTION]",
  },
  {
    name: "SIX the Musical -- Fox Theatre",
    address: "660 Peachtree St NE",
    tags: ["theatre", "broadway", "grown"],
    description: "[DESCRIPTION]",
  },
  {
    name: "East Side Everything",
    address: "Beltline Adjacent",
    tags: ["explore", "wander", "golden hour"],
    description: "[DESCRIPTION]",
  },
];

const quietSpots = [
  {
    name: "A Cappella Books",
    address: "Atlanta",
    tags: ["books", "quiet", "culture"],
    description: "[DESCRIPTION]",
  },
  {
    name: "Bread & Butterfly",
    address: "290 Elizabeth St NE, Inman Park",
    tags: ["coffee", "pastries", "slow"],
    description: "[DESCRIPTION]",
  },
];

const itinerary = [
  {
    day: "TUESDAY APR 29",
    title: "The Arrival",
    label: "TUE",
    events: [
      { time: "5:00 PM", spot: "Land at Hartsfield-Jackson", desc: "[DESCRIPTION]" },
      {
        time: "7:30 PM",
        spot: "Sister Louisa's Church",
        address: "466 Edgewood Ave SE",
        desc: "[DESCRIPTION]",
      },
      {
        time: "9:30 PM",
        spot: "Krog Street Market",
        address: "99 Krog St NE",
        desc: "[DESCRIPTION]",
      },
      { time: "11:00 PM", spot: "Nightcap Decision Point", desc: "[DESCRIPTION]" },
    ],
  },
  {
    day: "WEDNESDAY APR 30",
    title: "Coca-Cola Chronicles",
    label: "WED",
    events: [
      {
        time: "10:00 AM",
        spot: "World of Coca-Cola",
        address: "121 Baker St NW",
        desc: "[DESCRIPTION]",
      },
      { time: "1:00 PM", spot: "The Argonaut", address: "Kirkwood", desc: "[DESCRIPTION]" },
      { time: "3:00 PM", spot: "Rest & Reset", desc: "[DESCRIPTION]" },
      { time: "6:00 PM", spot: "Early Dinner", desc: "[DESCRIPTION]" },
      {
        time: "10:00 PM",
        spot: "MAGIC CITY",
        address: "241 Forsyth St SW",
        desc: "[DESCRIPTION]",
      },
      { time: "2:00 AM", spot: "Aftermath", desc: "[DESCRIPTION]" },
    ],
  },
  {
    day: "THURSDAY MAY 1",
    title: "East Side Deep Dive",
    label: "THU",
    events: [
      {
        time: "10:00 AM",
        spot: "Bread & Butterfly",
        address: "290 Elizabeth St NE, Inman Park",
        desc: "[DESCRIPTION]",
      },
      { time: "11:30 AM", spot: "Beltline Walk", desc: "[DESCRIPTION]" },
      {
        time: "1:30 PM",
        spot: "Krog Street Market Lunch",
        address: "99 Krog St NE",
        desc: "[DESCRIPTION]",
      },
      { time: "3:30 PM", spot: "Explore Inman Park", desc: "[DESCRIPTION]" },
      {
        time: "6:00 PM",
        spot: "Beetlecat",
        address: "469 N Highland Ave NE",
        desc: "[DESCRIPTION]",
      },
      {
        time: "9:00 PM",
        spot: "Boccalupo",
        address: "753 Edgewood Ave NE",
        desc: "[DESCRIPTION]",
      },
      {
        time: "11:30 PM",
        spot: "The Albert",
        address: "1000 N Highland Ave NE",
        desc: "[DESCRIPTION]",
      },
    ],
  },
  {
    day: "FRIDAY MAY 2",
    title: "Film Festival Flex",
    label: "FRI",
    events: [
      { time: "11:00 AM", spot: "Atlanta Film Festival Screening", desc: "[DESCRIPTION]" },
      {
        time: "2:00 PM",
        spot: "Ponce City Market",
        address: "675 Ponce de Leon Ave NE",
        desc: "[DESCRIPTION]",
      },
      { time: "4:00 PM", spot: "Ponce City Market Rooftop", desc: "[DESCRIPTION]" },
      {
        time: "7:30 PM",
        spot: "SIX the Musical -- Fox Theatre",
        address: "660 Peachtree St NE",
        desc: "[DESCRIPTION]",
      },
      {
        time: "10:30 PM",
        spot: "Buckhead Nightlife",
        address: "Koo Koo Room / Havana Club",
        desc: "[DESCRIPTION]",
      },
    ],
  },
  {
    day: "SATURDAY MAY 3",
    title: "Victory Lap",
    label: "SAT",
    events: [
      {
        time: "10:00 AM",
        spot: "Murphy's",
        address: "997 Virginia Ave NE",
        desc: "[DESCRIPTION]",
      },
      { time: "1:00 PM", spot: "Final Beltline Walk", desc: "[DESCRIPTION]" },
      { time: "3:00 PM", spot: "Pack & Prep", desc: "[DESCRIPTION]" },
      {
        time: "EVENING",
        spot: "Atlanta Beltline Lantern Parade",
        address: "Beltline Eastside Trail",
        desc: "[DESCRIPTION]",
      },
      { time: "6:00 PM", spot: "Departure", desc: "[DESCRIPTION]" },
    ],
  },
];

const neighborhoods = [
  {
    name: "Inman Park",
    spots: [
      "Beetlecat -- 469 N Highland Ave NE",
      "Boccalupo -- 753 Edgewood Ave NE",
      "Delbar -- 471 N Highland Ave NE",
      "Bread & Butterfly -- 290 Elizabeth St NE",
      "The Albert -- 1000 N Highland Ave NE",
      "Sotto Sotto -- 313 N Highland Ave NE",
    ],
    vibe: "[VIBE]",
  },
  {
    name: "Kirkwood",
    spots: [
      "The Argonaut",
      "Poor Hendrix",
      "Kirkyard Public House",
      "Sun in My Belly",
    ],
    vibe: "[VIBE]",
  },
  {
    name: "Krog Street Market",
    spots: [
      "Fred's Meat & Bread -- 99 Krog St NE",
      "Varuni Napoli -- 99 Krog St NE",
      "Ticonderoga Club -- 99 Krog St NE",
      "Jai Ho -- 99 Krog St NE",
    ],
    vibe: "[VIBE]",
  },
  {
    name: "Edgewood Avenue",
    spots: [
      "Sister Louisa's Church -- 466 Edgewood Ave SE",
      "Sound Table -- 483 Edgewood Ave",
      "Mother Bar -- 487 Edgewood Ave",
      "Lore",
      "Pisces",
      "Joystick Gamebar -- 427 Edgewood Ave",
    ],
    vibe: "[VIBE]",
  },
  {
    name: "Ponce City Market",
    spots: [
      "Botiwalla -- 675 Ponce de Leon Ave NE",
      "Bellina Alimentari -- 675 Ponce de Leon Ave NE",
      "W.H. Stiles Fish Camp -- 675 Ponce de Leon Ave NE",
      "Skyline Park (Rooftop)",
    ],
    vibe: "[VIBE]",
  },
  {
    name: "Downtown",
    spots: [
      "World of Coca-Cola -- 121 Baker St NW",
      "Magic City -- 241 Forsyth St SW",
      "Fox Theatre -- 660 Peachtree St NE",
    ],
    vibe: "[VIBE]",
  },
  {
    name: "Buckhead / Midtown",
    spots: [
      "Koo Koo Room -- 1140 Crescent Ave NE",
      "Havana Club",
      "Domaine",
    ],
    vibe: "[VIBE]",
  },
  {
    name: "Virginia Highland",
    spots: ["Murphy's -- 997 Virginia Ave NE"],
    vibe: "[VIBE]",
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

      {/* ===== 1. HERO ===== */}
      <HeroSection />

      {/* ===== 2. WHY ATL ===== */}
      <ChapterIntro
        eyebrow="Chapter I"
        title="Why ATL Hits Different"
        intro="[ATMOSPHERIC INTRO -- 1-2 sentences about Atlanta's duality, the heat, the energy, the way the city reveals itself in layers]"
        quote="[PULL QUOTE]"
      />

      <SectionDivider />

      {/* ===== 3. FOOD CHAPTER ===== */}
      <section id="food" className="bg-midnight grain">
        <ChapterIntro
          eyebrow="Chapter II"
          title="Appetite & Memory"
          intro="[ATMOSPHERIC FOOD INTRO]"
        />

        <div className="px-6 pb-16 sm:pb-24 relative z-10">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Inman Park */}
            <div>
              <MotionWrapper>
                <h3 className="font-[family-name:var(--font-heading)] text-xs tracking-[0.3em] text-neon-pink uppercase mb-6 neon-glow-subtle">
                  Inman Park
                </h3>
              </MotionWrapper>
              <MobileCarousel>
                {foodSpots.inmanPark.map((spot, i) => (
                  <div key={spot.name} className="min-w-[280px] snap-start md:min-w-0">
                    <PlaceCard {...spot} delay={i * 80} />
                  </div>
                ))}
              </MobileCarousel>
            </div>

            {/* Krog Street Market */}
            <div>
              <MotionWrapper>
                <h3 className="font-[family-name:var(--font-heading)] text-xs tracking-[0.3em] text-neon-pink uppercase mb-6 neon-glow-subtle">
                  Krog Street Market
                </h3>
              </MotionWrapper>
              <MobileCarousel>
                {foodSpots.krogStreet.map((spot, i) => (
                  <div key={spot.name} className="min-w-[280px] snap-start md:min-w-0">
                    <PlaceCard {...spot} delay={i * 80} />
                  </div>
                ))}
              </MobileCarousel>
            </div>

            {/* Kirkwood */}
            <div>
              <MotionWrapper>
                <h3 className="font-[family-name:var(--font-heading)] text-xs tracking-[0.3em] text-neon-pink uppercase mb-6 neon-glow-subtle">
                  Kirkwood
                </h3>
              </MotionWrapper>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {foodSpots.kirkwood.map((spot, i) => (
                  <PlaceCard key={spot.name} {...spot} delay={i * 80} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ===== 4. NIGHTLIFE CHAPTER ===== */}
      <section id="nightlife" className="bg-midnight grain-heavy">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-pink/5 via-club-purple/5 to-transparent pointer-events-none" />
        <ChapterIntro
          eyebrow="Chapter III"
          title="After Dark"
          intro="[ATMOSPHERIC NIGHTLIFE INTRO]"
        />

        <div className="px-6 pb-16 sm:pb-24 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {nightlifeSpots.map((spot, i) => (
                <PlaceCard
                  key={spot.name}
                  {...spot}
                  glow
                  delay={i * 80}
                  tagVariant="glow"
                />
              ))}
            </div>

            <MotionWrapper delay={400}>
              <div className="mt-12 flex justify-center">
                <StickerButton label="Find Your Trouble" href="#areas" color="purple" />
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* ===== 5. DAYTIME / GOLDEN HOUR ===== */}
      <section id="daytime" className="bg-sweat grain">
        <div className="absolute inset-0 bg-gradient-to-b from-dirty-orange/8 to-transparent pointer-events-none" />
        <ChapterIntro
          eyebrow="Chapter IV"
          title="Golden Hour"
          intro="[ATMOSPHERIC DAYTIME INTRO]"
          variant="warm"
        />

        <div className="px-6 pb-16 sm:pb-24 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {daytimeSpots.map((spot, i) => (
              <PlaceCard
                key={spot.name}
                {...spot}
                delay={i * 80}
                tagVariant="warm"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. IN-BETWEEN ===== */}
      <AmbientMediaLayer gradient="pink">
        <div className="py-20 sm:py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <MediaCard
              overlayText="[CINEMATIC MEDIA SLOT]"
              aspectRatio="aspect-[21/9]"
            />
            <QuoteBlock
              text="[ATMOSPHERIC LINE ABOUT DRIVING THROUGH ATLANTA AT NIGHT]"
            />
          </div>
        </div>
      </AmbientMediaLayer>

      {/* ===== 7. QUIET / RESET ===== */}
      <section className="bg-sweat grain">
        <ChapterIntro
          eyebrow="Chapter V"
          title="The Quiet Parts"
          intro="[ATMOSPHERIC INTRO ABOUT SLOWER MOMENTS]"
        />

        <div className="px-6 pb-16 sm:pb-24 relative z-10">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {quietSpots.map((spot, i) => (
              <PlaceCard key={spot.name} {...spot} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ===== 8. THE PLAN ===== */}
      <section id="the-plan" className="bg-midnight grain">
        <ChapterIntro
          eyebrow="The Plan"
          title="Day by Day, Chaos by Design"
          intro="[ATMOSPHERIC ITINERARY INTRO]"
        />

        <div className="px-6 pb-16 sm:pb-24 relative z-10">
          <div className="max-w-4xl mx-auto space-y-16">
            {itinerary.map((day, dayIdx) => (
              <MotionWrapper key={day.day}>
                <div className="border-l-2 border-neon-pink/20 pl-6 sm:pl-8">
                  {/* Sticker-style day label */}
                  <div className="inline-block mb-4">
                    <span
                      className={`
                        inline-block px-4 py-1.5
                        font-[family-name:var(--font-display)] text-sm tracking-widest uppercase
                        bg-neon-pink text-midnight
                        -skew-x-3
                        ${dayIdx % 2 === 0 ? "rotate-chaos-1" : "rotate-chaos-2"}
                      `}
                    >
                      <span className="skew-x-3 inline-block">{day.label}</span>
                    </span>
                  </div>

                  <p className="font-[family-name:var(--font-heading)] text-xs tracking-[0.3em] text-neon-pink/60 uppercase mb-1">
                    {day.day}
                  </p>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-cream uppercase tracking-wide mb-6 neon-glow-subtle">
                    {day.title}
                  </h3>

                  <div className="space-y-6">
                    {day.events.map((event) => (
                      <div key={`${day.day}-${event.time}`} className="flex gap-4">
                        <span className="font-[family-name:var(--font-heading)] text-xs text-neon-pink/40 tracking-wide min-w-[70px] sm:min-w-[90px] pt-1 shrink-0">
                          {event.time}
                        </span>
                        <div>
                          <p className="font-[family-name:var(--font-body)] text-cream text-sm sm:text-base font-medium">
                            {event.spot}
                          </p>
                          {event.address && (
                            <p className="font-[family-name:var(--font-heading)] text-cream/30 text-xs mt-0.5">
                              {event.address}
                            </p>
                          )}
                          <p className="font-[family-name:var(--font-body)] text-cream/40 text-sm mt-1">
                            {event.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ===== 9. AREA MODULES ===== */}
      <section id="areas" className="bg-sweat grain">
        <ChapterIntro
          eyebrow="By Neighborhood"
          title="Know Your Grid"
          intro="[ATMOSPHERIC INTRO ABOUT ATLANTA'S NEIGHBORHOODS]"
        />

        <div className="px-6 pb-16 sm:pb-24 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {neighborhoods.map((hood, i) => (
              <MotionWrapper key={hood.name} delay={i * 60}>
                <div className="border border-neon-pink/10 bg-midnight/60 p-6 rounded-sm hover:border-neon-pink/25 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,45,123,0.06)]">
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-cream uppercase tracking-wide mb-1">
                    {hood.name}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-cream/40 text-sm mb-4">
                    {hood.vibe}
                  </p>
                  <ul className="space-y-1.5">
                    {hood.spots.map((spot) => (
                      <li
                        key={spot}
                        className="font-[family-name:var(--font-body)] text-cream/60 text-sm"
                      >
                        {spot}
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 10. OUTRO ===== */}
      <AmbientMediaLayer gradient="pink">
        <div className="py-24 sm:py-32 px-6 text-center">
          <MotionWrapper>
            <p className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl text-neon-pink neon-glow-pink leading-snug max-w-3xl mx-auto uppercase tracking-wide">
              [STRONG CLOSING LINE]
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
