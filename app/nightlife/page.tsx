import Nav from "@/components/Nav";
import ChapterIntro from "@/components/ChapterIntro";
import PlaceCard from "@/components/PlaceCard";
import QuoteBlock from "@/components/QuoteBlock";
import SectionDivider from "@/components/SectionDivider";
import AmbientMediaLayer from "@/components/AmbientMediaLayer";
import MobileCarousel from "@/components/MobileCarousel";
import FloatingCTA from "@/components/FloatingCTA";
import FooterFrame from "@/components/FooterFrame";
import MotionWrapper from "@/components/MotionWrapper";
import StickerButton from "@/components/StickerButton";
import ChapterNav from "@/components/ChapterNav";
import PhotoCard from "@/components/PhotoCard";

/* =====================================================================
   DATA
   ===================================================================== */

const edgewoodSpots = [
  {
    name: "Sister Louisa's Church",
    address: "466 Edgewood Ave SE",
    tags: ["intimate", "weird", "neon"],
    description:
      "irreverent religious art everywhere. ping pong tables. strong drinks. organ karaoke on wednesday. this where atlanta's weird and wonderful collide. the starting point.",
    mapUrl: "https://maps.google.com/?q=Sister+Louisa%27s+Church,+466+Edgewood+Ave+SE,+Atlanta,+GA",
  },
  {
    name: "Sound Table",
    address: "483 Edgewood Ave",
    tags: ["loud", "intimate", "music"],
    description:
      "two vibes in one spot. restaurant up front, dance floor in back. the music is always right. the cocktails know what they're doing.",
    website: "https://thesoundtable.com",
    mapUrl: "https://maps.google.com/?q=Sound+Table,+483+Edgewood+Ave,+Atlanta,+GA",
  },
  {
    name: "Mother Bar",
    address: "487 Edgewood Ave",
    tags: ["loud", "late", "neon"],
    description:
      "intimate and loud at the same time. strong drinks, darker corners, the kind of bar where conversations get honest.",
    mapUrl: "https://maps.google.com/?q=Mother+Bar,+487+Edgewood+Ave,+Atlanta,+GA",
  },
  {
    name: "Joystick Gamebar",
    address: "427 Edgewood Ave",
    tags: ["arcade", "drinks", "neon"],
    description:
      "nostalgia meets alcohol. arcade games, craft cocktails. you'll lose at street fighter and not care. grown folks fun.",
    website: "https://joystickgamebar.com",
    mapUrl: "https://maps.google.com/?q=Joystick+Gamebar,+427+Edgewood+Ave,+Atlanta,+GA",
  },
  {
    name: "Church Bar",
    address: "Edgewood Ave",
    tags: ["late", "dive", "neon"],
    description:
      "dark. loud. exactly what you'd expect from a bar on edgewood at midnight. no pretense, no judgment, no closing time you'll remember.",
    mapUrl: "https://maps.google.com/?q=Church+Bar,+Edgewood+Ave,+Atlanta,+GA",
  },
  {
    name: "Lore",
    address: "Edgewood Ave",
    tags: ["loud", "inclusive", "late"],
    description:
      "new in 2025. LGBTQ+ spot with dance parties, drag shows, karaoke. two floors. mammoth disco ball. unpretentious fun. inclusive energy.",
    mapUrl: "https://maps.google.com/?q=Lore,+Edgewood+Ave,+Atlanta,+GA",
  },
  {
    name: "Pisces",
    address: "Edgewood Ave",
    tags: ["loud", "music-forward", "neon"],
    description:
      "music-forward club. cool young crowd. DJ ree de la vega's spot. wednesday through saturday. edgewood's newest addition to the rotation.",
    mapUrl: "https://maps.google.com/?q=Pisces,+Edgewood+Ave,+Atlanta,+GA",
  },
];

const bigNightSpots = [
  {
    name: "Magic City",
    address: "241 Forsyth St SW",
    tags: ["legendary", "late", "non-negotiable"],
    description:
      "you already know. lemon pepper wings, legendary status, no explanation needed. founded 1985. future's second home. dress casual but sophisticated. bring cash in ones. respect the culture.",
    mapUrl: "https://maps.google.com/?q=Magic+City,+241+Forsyth+St+SW,+Atlanta,+GA",
  },
  {
    name: "Koo Koo Room",
    address: "1140 Crescent Ave NE",
    tags: ["loud", "upscale", "neon"],
    description:
      "LED lights. top DJs. lively crowd. modern look. buckhead nightlife staple. dress fresh or don't bother.",
    mapUrl: "https://maps.google.com/?q=Koo+Koo+Room,+1140+Crescent+Ave+NE,+Atlanta,+GA",
  },
  {
    name: "Havana Club",
    address: "Buckhead",
    tags: ["late", "latin", "loud"],
    description:
      "since 1996. latin spirit meets top 40. two rooms. happy hour 9-11pm. buckhead staple that's been doing this longer than most.",
    mapUrl: "https://maps.google.com/?q=Havana+Club,+Buckhead,+Atlanta,+GA",
  },
  {
    name: "Domaine",
    address: "Midtown",
    tags: ["loud", "reckless", "neon"],
    description:
      "26,000 square feet of vegas glamour in midtown. top DJs. award-winning artists. this is atlanta flexing on purpose.",
    mapUrl: "https://maps.google.com/?q=Domaine,+Midtown,+Atlanta,+GA",
  },
];

const lateDinnerSpots = [
  {
    name: "Boccalupo",
    address: "753 Edgewood Ave NE",
    tags: ["pasta", "late dinner"],
    description:
      "9pm pasta run. black spaghetti if it's on. the snickerdoodle cookies close out the meal and you'll thank yourself.",
    website: "https://boccalupoatl.com",
    mapUrl: "https://maps.google.com/?q=Boccalupo,+753+Edgewood+Ave+NE,+Atlanta,+GA",
  },
  {
    name: "Beetlecat",
    address: "299 N Highland Ave NE",
    tags: ["seafood", "pre-club"],
    description:
      "6pm oysters before the night starts. the lobster roll as fuel. the den downstairs for one more drink before you commit to edgewood.",
    website: "https://beetlecatatl.com",
    mapUrl: "https://maps.google.com/?q=Beetlecat,+299+N+Highland+Ave+NE,+Atlanta,+GA",
  },
  {
    name: "The Albert",
    address: "1389 Boulevard SE",
    tags: ["wings", "nightcap"],
    description:
      "11:30pm smoked wings. the neighborhood bar that becomes the last stop or the refueling station depending on what kind of night it is.",
    mapUrl: "https://maps.google.com/?q=The+Albert,+1389+Boulevard+SE,+Atlanta,+GA",
  },
];

const nightItinerary = [
  {
    day: "TUESDAY NIGHT",
    title: "The Warm-Up",
    events: [
      {
        time: "9:30 PM",
        spot: "Krog Street Market",
        address: "99 Krog St NE",
        desc: "late dinner. ticonderoga club cocktails. the night is young and so are your decisions.",
      },
      {
        time: "11:00 PM",
        spot: "Edgewood Welcome",
        desc: "sister louisa's or lore. first night energy. don't go too hard. you have four more days.",
      },
    ],
  },
  {
    day: "WEDNESDAY NIGHT",
    title: "Magic City",
    events: [
      {
        time: "10:00 PM",
        spot: "MAGIC CITY",
        address: "241 Forsyth St SW",
        desc: "the main event. legendary. monday nights are peak but wednesday still hits. dress code: casual sophisticated. no flip flops. bring ones.",
      },
      {
        time: "2:00 AM",
        spot: "Aftermath",
        desc: "back to hotel. hydrate. process what just happened. tomorrow's a full day.",
      },
    ],
  },
  {
    day: "THURSDAY NIGHT",
    title: "East Side Crawl",
    events: [
      {
        time: "9:00 PM",
        spot: "Boccalupo",
        address: "753 Edgewood Ave NE",
        desc: "late night pasta. the black spaghetti. the wine. the snickerdoodle cookies.",
      },
      {
        time: "11:30 PM",
        spot: "The Albert",
        address: "1389 Boulevard SE",
        desc: "smoked wings and a beer. neighborhood bar nightcap. inman park's living room.",
      },
    ],
  },
  {
    day: "FRIDAY NIGHT",
    title: "The Big One",
    events: [
      {
        time: "7:30 PM",
        spot: "SIX the Musical -- Fox Theatre",
        address: "660 Peachtree St NE",
        desc: "broadway in atlanta. dress grown. the fox theatre is stunning.",
      },
      {
        time: "10:30 PM",
        spot: "Buckhead Nightlife",
        desc: "koo koo room for LED and DJs. havana club for latin energy. domaine if you're going all out. pick your energy.",
      },
    ],
  },
];

/* =====================================================================
   PAGE
   ===================================================================== */

export default function NightlifePage() {
  return (
    <main>
      <Nav />
      <FloatingCTA />

      {/* ===== CHAPTER INTRO ===== */}
      <AmbientMediaLayer gradient="pink">
        <div className="pt-24 sm:pt-32">
          <ChapterIntro
            eyebrow="Chapter Three"
            title="Nightlife"
            intro="the neon comes on and the city changes its mind about everything. edgewood avenue is a decision tree with no wrong answers. buckhead is where the volume goes up. magic city doesn't need your introduction."
          />
        </div>
      </AmbientMediaLayer>

      {/* ===== VERSACE TAILGATE -- pre-game energy ===== */}
      <section className="bg-midnight grain px-6 lg:px-12 xl:px-16 py-8">
        <div className="max-w-7xl mx-auto">
          <PhotoCard
            src="/photos/versace-tailgate.jpg"
            alt="Versace squatting at the tailgate -- pre-game energy"
            variant="inline"
            caption="pre-game. activated."
            priority
          />
        </div>
      </section>

      <QuoteBlock
        text="he's a 10 but he's at magic city on a tuesday"
        attribution="-- tiktok, valid"
      />

      <SectionDivider />

      {/* ===== EDGEWOOD STRIP ===== */}
      <section className="bg-midnight grain-heavy">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-pink/5 via-club-purple/5 to-transparent pointer-events-none" />
        <ChapterIntro
          eyebrow="The Strip"
          title="Edgewood Avenue"
          intro="atlanta's bar district. every door a different universe. start anywhere, end up everywhere. the strip doesn't judge."
        />

        <div className="px-6 lg:px-12 xl:px-16 pb-16 sm:pb-24 relative z-10">
          <div className="max-w-7xl mx-auto">
            <MobileCarousel>
              {edgewoodSpots.map((spot, i) => (
                <div key={spot.name} className="min-w-[280px] snap-start md:min-w-0">
                  <PlaceCard {...spot} glow delay={i * 80} tagVariant="glow" />
                </div>
              ))}
            </MobileCarousel>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ===== THE BIG ROOMS ===== */}
      <section className="bg-sweat grain-heavy">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-pink/8 to-transparent pointer-events-none" />
        <ChapterIntro
          eyebrow="Main Event"
          title="The Big Rooms"
          intro="magic city is the non-negotiable. the rest depends on what kind of night you're building. buckhead goes loud. midtown goes louder. you already know which one you're choosing."
        />

        <div className="px-6 lg:px-12 xl:px-16 pb-16 sm:pb-24 relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {bigNightSpots.map((spot, i) => (
              <PlaceCard key={spot.name} {...spot} glow delay={i * 100} tagVariant="glow" />
            ))}
          </div>

          <MotionWrapper delay={400}>
            <div className="mt-12 flex justify-center">
              <StickerButton label="Find Your Trouble" href="#night-plan" color="purple" />
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* ===== VERSACE NEON SIGN PHOTO ===== */}
      <section className="bg-midnight grain px-6 lg:px-12 xl:px-16 py-8">
        <div className="max-w-7xl mx-auto">
          <PhotoCard
            src="/photos/versace-neon-sign.jpg"
            alt="Versace next to BABE YOU LOOK SO COOL neon sign"
            variant="inline"
            className="glow-border"
            caption="babe you look so cool"
          />
        </div>
      </section>

      {/* ===== LATE DINNER ===== */}
      <section className="bg-midnight grain">
        <ChapterIntro
          eyebrow="Fuel"
          title="Late Dinner"
          intro="you're going to need food. before, during, or after. these spots know what time it is."
        />

        <div className="px-6 lg:px-12 xl:px-16 pb-16 sm:pb-24 relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {lateDinnerSpots.map((spot, i) => (
              <PlaceCard key={spot.name} {...spot} delay={i * 80} tagVariant="glow" />
            ))}
          </div>
        </div>
      </section>

      <QuoteBlock
        text="understood the assignment"
        attribution="-- edgewood avenue, every night"
      />

      <SectionDivider />

      {/* ===== NIGHT ITINERARY ===== */}
      <section id="night-plan" className="bg-midnight grain-heavy">
        <ChapterIntro
          eyebrow="The Plan"
          title="Night by Night"
          intro="the after-dark itinerary. each night has its own energy. tuesday warms you up. wednesday is magic city. thursday goes deep east side. friday is the crescendo."
        />

        <div className="px-6 lg:px-12 xl:px-16 pb-16 sm:pb-24 relative z-10">
          <div className="max-w-5xl mx-auto space-y-16">
            {nightItinerary.map((day, dayIdx) => (
              <MotionWrapper key={day.day}>
                <div className="border-l-2 border-neon-pink/20 pl-6 sm:pl-8">
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
                      <span className="skew-x-3 inline-block">{day.day}</span>
                    </span>
                  </div>

                  <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-cream uppercase tracking-wide mb-6 neon-glow-pink">
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

      {/* ===== OUTRO QUOTE ===== */}
      <AmbientMediaLayer gradient="pink">
        <div className="py-20 sm:py-28 px-6 lg:px-12">
          <QuoteBlock
            text="magic city doesn't need your introduction. you already know."
          />
        </div>
      </AmbientMediaLayer>

      {/* ===== CHAPTER NAV ===== */}
      <ChapterNav
        prev={{ href: "/golden-hour", label: "Golden Hour" }}
        next={{ href: "/after-hours", label: "After Hours" }}
      />

      <FooterFrame />
    </main>
  );
}
