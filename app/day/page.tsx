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
import ChapterNav from "@/components/ChapterNav";
import PhotoCard from "@/components/PhotoCard";

/* =====================================================================
   DATA
   ===================================================================== */

const inmanPark = [
  {
    name: "Barcelona Wine Bar",
    address: "240 N Highland Ave NE",
    tags: ["dinner", "wine", "tapas"],
    mustOrder: "patatas bravas, rioja by the glass",
    description:
      "tapas that hit different when you're three glasses in. the patio is the move. share everything, commit to nothing.",
  },
  {
    name: "Sotto Sotto",
    address: "313 N Highland Ave NE",
    tags: ["dinner", "italian", "date night"],
    mustOrder: "linguine del pescatore",
    description:
      "nearly 30 years and still consistent. romantic lighting, soft jazz, halibut with white wine. date night certified even if you came alone.",
  },
  {
    name: "Beetlecat",
    address: "299 N Highland Ave NE",
    tags: ["seafood", "oysters", "dinner"],
    mustOrder: "lobster roll, oysters",
    description:
      "upscale seafood with a 70s surf shack den downstairs. two patios. the lobster roll atlanta won't stop talking about. reservations recommended.",
  },
  {
    name: "Boccalupo",
    address: "753 Edgewood Ave NE",
    tags: ["pasta", "italian", "dinner"],
    mustOrder: "black spaghetti, snickerdoodle cookies",
    description:
      "handmade pasta. seasonal menu. wine list that makes decisions harder. skip the cookies at your own risk.",
  },
  {
    name: "Bread & Butterfly",
    address: "290 Elizabeth St NE",
    tags: ["brunch", "french", "cafe"],
    description:
      "perfect croissants. steel doors open to elizabeth street. this is that 'we on vacation' breakfast energy. cappuccino and pastry, no rush.",
  },
  {
    name: "Delbar",
    address: "211 Elizabeth St NE",
    tags: ["dinner", "middle eastern"],
    mustOrder: "koobideh kabob, dill labneh",
    description:
      "persian cuisine in a trendy room. everything on the menu hits. expect a wait at dinner. worth it every time.",
  },
];

const krogStreet = [
  {
    name: "Fred's Meat & Bread",
    address: "99 Krog St NE",
    tags: ["burgers", "lunch"],
    description:
      "better-than-almost-anywhere burgers. this is the standard. don't overthink it, just order.",
  },
  {
    name: "Varuni Napoli",
    address: "99 Krog St NE",
    tags: ["pizza", "lunch"],
    description:
      "neapolitan pizza done right. soft crunchy crust that requires repeat visits. worth the line.",
  },
  {
    name: "Ticonderoga Club",
    address: "99 Krog St NE",
    tags: ["cocktails", "elevated dive"],
    description:
      "dive bar space with craft bar execution. inventive cocktails, solid mocktails. the bar you didn't know you needed.",
  },
  {
    name: "Jai Ho",
    address: "99 Krog St NE",
    tags: ["indian", "street food"],
    description:
      "indian street food that's worth the line. krog street staple. flavor that stays with you.",
  },
];

const kirkwood = [
  {
    name: "The Argonaut",
    address: "470 Flat Shoals Ave SE",
    tags: ["seafood", "raw bar", "lunch"],
    description:
      "kirkwood's newest gem. fresh oysters, elevated cocktails, customizable crudos. sit at the bar. order everything. grown folks lunch perfection.",
  },
  {
    name: "Sun in My Belly",
    address: "2161 College Ave NE",
    tags: ["brunch", "cafe"],
    description:
      "interesting cafe classics. capri sun cocktails. rustic space. the kind of brunch where you lose track of time.",
  },
  {
    name: "The Albert",
    address: "1389 Boulevard SE",
    tags: ["wings", "bar", "neighborhood"],
    mustOrder: "smoked wings",
    description:
      "legendary smoked wings. best burger contender. voted best neighborhood bar repeatedly. pull up, order a beer, become family.",
  },
];

const daytimeSpots = [
  {
    name: "Atlanta Beltline",
    address: "Eastside Trail",
    tags: ["walk", "art", "reset"],
    description:
      "the beltline is doing what it does. joggers, dogs, somebody playing saxophone for no reason. you walk it because it resets you.",
  },
  {
    name: "World of Coca-Cola",
    address: "121 Baker St NW",
    tags: ["attraction", "pilgrimage"],
    description:
      "vault tour. secret formula. taste testing room with 100+ beverages from around the world. spend 2 hours. buy the merch. no shame.",
  },
  {
    name: "Ponce City Market Rooftop",
    address: "675 Ponce de Leon Ave NE",
    tags: ["skyline", "drinks", "views"],
    description:
      "skyline bar. mini golf. carnival games. this is atlanta showing off and you're allowed to enjoy it.",
  },
  {
    name: "SIX the Musical -- Fox Theatre",
    address: "660 Peachtree St NE",
    tags: ["theatre", "broadway", "grown"],
    description:
      "british musical about henry VIII's six wives. modern pop meets tudor history. fox theatre is stunning. dress grown.",
  },
  {
    name: "A Cappella Books",
    address: "208 Haralson Ave NE",
    tags: ["books", "quiet", "culture"],
    description:
      "the kind of bookstore that smells like decisions. you'll leave with something you didn't plan on. that's the point.",
  },
  {
    name: "Virginia Highland",
    address: "Virginia Ave NE",
    tags: ["stroll", "charming", "brunch"],
    description:
      "charming and walkable. brunch at murphy's if you time it right. evening strolls that make you forget you're visiting.",
  },
];

const dayItinerary = [
  {
    day: "TUESDAY",
    title: "The Arrival",
    events: [
      {
        time: "5:00 PM",
        spot: "Land at Hartsfield-Jackson",
        desc: "bags. uber. check in. shower off the travel. you got 90 minutes before atlanta starts.",
      },
      {
        time: "7:30 PM",
        spot: "Sister Louisa's Church",
        address: "466 Edgewood Ave SE",
        desc: "irreverent art. strong drinks. ping pong tables. let the city show you what it's about.",
      },
      {
        time: "9:30 PM",
        spot: "Krog Street Market",
        address: "99 Krog St NE",
        desc: "fred's for burgers or ticonderoga for elevated dive bar energy. food hall vibes, perfect for not committing.",
      },
    ],
  },
  {
    day: "WEDNESDAY",
    title: "Coca-Cola Chronicles",
    events: [
      {
        time: "10:00 AM",
        spot: "World of Coca-Cola",
        address: "121 Baker St NW",
        desc: "this is pilgrimage. vault tour. secret formula. taste testing room. corporate pride meets genuine wonder.",
      },
      {
        time: "1:00 PM",
        spot: "The Argonaut",
        address: "Kirkwood",
        desc: "fresh oysters. elevated cocktails. kirkwood's newest gem. sit at the bar. this is grown folks lunch.",
      },
    ],
  },
  {
    day: "THURSDAY",
    title: "East Side Deep Dive",
    events: [
      {
        time: "10:00 AM",
        spot: "Bread & Butterfly",
        address: "290 Elizabeth St NE",
        desc: "french cafe in inman park. perfect croissants. beautiful patio. that 'we on vacation' breakfast.",
      },
      {
        time: "11:30 AM",
        spot: "Beltline Walk",
        desc: "eastside trail. tree-lined. art installations. people watching. walk it off. let it reset you.",
      },
      {
        time: "1:30 PM",
        spot: "Krog Street Market Lunch",
        address: "99 Krog St NE",
        desc: "varuni napoli for pizza or jai ho for indian street food. both hit. both beltline-adjacent.",
      },
      {
        time: "3:30 PM",
        spot: "Explore Inman Park",
        desc: "walk the neighborhood. victorian homes. historic charm. atlanta's first suburb and it shows.",
      },
    ],
  },
  {
    day: "FRIDAY",
    title: "Film Festival Flex",
    events: [
      {
        time: "11:00 AM",
        spot: "Atlanta Film Festival Screening",
        desc: "runs through may 3. catch an indie film. plaza theatre or tara theatre. feel cultured.",
      },
      {
        time: "2:00 PM",
        spot: "Ponce City Market",
        address: "675 Ponce de Leon Ave NE",
        desc: "massive food hall. 30+ vendors. botiwalla for indian. bellina for italian. stiles fish camp for seafood.",
      },
      {
        time: "4:00 PM",
        spot: "Ponce City Rooftop",
        desc: "skyline bar. city views. mini golf. carnival games. atlanta showing off.",
      },
    ],
  },
  {
    day: "SATURDAY",
    title: "Victory Lap",
    events: [
      {
        time: "10:00 AM",
        spot: "Murphy's",
        address: "997 Virginia Ave NE",
        desc: "virginia highland. 40+ years. legendary brunch. benedicts and mimosas. atlanta institution energy.",
      },
      {
        time: "1:00 PM",
        spot: "Final Beltline Walk",
        desc: "one more lap. take it in. buy some art. stop at a patio. your last atlanta afternoon.",
      },
    ],
  },
];

/* =====================================================================
   PAGE
   ===================================================================== */

export default function DayPage() {
  return (
    <main>
      <Nav />
      <FloatingCTA />

      {/* ===== CHAPTER INTRO ===== */}
      <AmbientMediaLayer gradient="warm">
        <div className="pt-24 sm:pt-32">
          <ChapterIntro
            eyebrow="Chapter One"
            title="Day"
            intro="you land at 5. you don't check in yet. there's a wing spot that's been waiting since your flight left. the city is hot, bright, and not apologizing for it. you move through it the way you move through everything -- with intention and an appetite."
            variant="warm"
          />
        </div>
      </AmbientMediaLayer>

      {/* ===== MOODBOARD PHOTO ===== */}
      <section className="bg-midnight grain px-6 lg:px-12 xl:px-16 py-8">
        <div className="max-w-7xl mx-auto">
          <PhotoCard
            src="/photos/jordan-moodboard.jpg"
            alt="Jordan moodboard -- bucket hat edition"
            variant="inline"
            caption="mood: set"
          />
        </div>
      </section>

      <QuoteBlock
        text="hi welcome to chili's"
        attribution="-- vine, forever"
      />

      <SectionDivider />

      {/* ===== FOOD SPOTS ===== */}
      <section className="bg-midnight grain">
        <ChapterIntro
          eyebrow="The Table"
          title="Feed Yourself"
          intro="food organized by area because atlanta sprawls and you need to eat strategically. every spot here earned its place."
          variant="warm"
        />

        <div className="px-6 lg:px-12 xl:px-16 pb-16 sm:pb-24 relative z-10">
          <div className="max-w-7xl mx-auto space-y-16">
            {/* Inman Park */}
            <div>
              <MotionWrapper>
                <h3 className="font-[family-name:var(--font-heading)] text-xs tracking-[0.3em] text-dirty-orange uppercase mb-6 neon-glow-orange">
                  Inman Park
                </h3>
              </MotionWrapper>
              <MobileCarousel>
                {inmanPark.map((spot, i) => (
                  <div key={spot.name} className="min-w-[280px] snap-start md:min-w-0">
                    <PlaceCard {...spot} delay={i * 80} tagVariant="warm" />
                  </div>
                ))}
              </MobileCarousel>
            </div>

            <QuoteBlock
              text="so you just gonna bring me a birthday gift on my birthday to my birthday party on my birthday with a birthday gift"
              attribution="-- vine classic"
            />

            {/* ===== CAT FILTER PHOTO -- comic break ===== */}
            <PhotoCard
              src="/photos/jordan-cat-filter.jpg"
              alt="Jordan cat filter selfie outdoors"
              variant="chaos"
              caption="intermission"
            />

            {/* Krog Street Market */}
            <div>
              <MotionWrapper>
                <h3 className="font-[family-name:var(--font-heading)] text-xs tracking-[0.3em] text-dirty-orange uppercase mb-6 neon-glow-orange">
                  Krog Street Market
                </h3>
              </MotionWrapper>
              <MobileCarousel>
                {krogStreet.map((spot, i) => (
                  <div key={spot.name} className="min-w-[280px] snap-start md:min-w-0">
                    <PlaceCard {...spot} delay={i * 80} tagVariant="warm" />
                  </div>
                ))}
              </MobileCarousel>
            </div>

            {/* Kirkwood */}
            <div>
              <MotionWrapper>
                <h3 className="font-[family-name:var(--font-heading)] text-xs tracking-[0.3em] text-dirty-orange uppercase mb-6 neon-glow-orange">
                  Kirkwood
                </h3>
              </MotionWrapper>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {kirkwood.map((spot, i) => (
                  <PlaceCard key={spot.name} {...spot} delay={i * 80} tagVariant="warm" />
                ))}
              </div>
            </div>

            {/* ===== VERSACE MIRROR FIT ===== */}
            <PhotoCard
              src="/photos/versace-mirror-fit.jpg"
              alt="Versace hotel mirror fit check"
              variant="inline"
              caption="fit check before we step out"
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ===== DAYTIME ATTRACTIONS ===== */}
      <section className="bg-sweat grain">
        <div className="absolute inset-0 bg-gradient-to-b from-dirty-orange/8 to-transparent pointer-events-none" />
        <ChapterIntro
          eyebrow="Explore"
          title="The Bright Hours"
          intro="before the city shifts, there's this. beltline walks, rooftop views, a bookstore that changes your afternoon plans. the daytime has its own weight here."
          variant="warm"
        />

        <div className="px-6 lg:px-12 xl:px-16 pb-16 sm:pb-24 relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {daytimeSpots.map((spot, i) => (
              <PlaceCard key={spot.name} {...spot} delay={i * 80} tagVariant="warm" />
            ))}
          </div>
        </div>
      </section>

      <QuoteBlock
        text="no thoughts just lemon pepper wet"
        attribution="-- the culture"
      />

      <SectionDivider />

      {/* ===== DAYTIME ITINERARY ===== */}
      <section className="bg-midnight grain">
        <ChapterIntro
          eyebrow="The Plan"
          title="Day by Day"
          intro="the daytime itinerary. flexible by design, intentional by nature. adjust as needed. atlanta rewards spontaneity."
          variant="warm"
        />

        <div className="px-6 lg:px-12 xl:px-16 pb-16 sm:pb-24 relative z-10">
          <div className="max-w-5xl mx-auto space-y-16">
            {dayItinerary.map((day, dayIdx) => (
              <MotionWrapper key={day.day}>
                <div className="border-l-2 border-dirty-orange/20 pl-6 sm:pl-8">
                  <div className="inline-block mb-4">
                    <span
                      className={`
                        inline-block px-4 py-1.5
                        font-[family-name:var(--font-display)] text-sm tracking-widest uppercase
                        bg-dirty-orange text-midnight
                        -skew-x-3
                        ${dayIdx % 2 === 0 ? "rotate-chaos-1" : "rotate-chaos-2"}
                      `}
                    >
                      <span className="skew-x-3 inline-block">{day.day}</span>
                    </span>
                  </div>

                  <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-cream uppercase tracking-wide mb-6 neon-glow-orange">
                    {day.title}
                  </h3>

                  <div className="space-y-6">
                    {day.events.map((event) => (
                      <div key={`${day.day}-${event.time}`} className="flex gap-4">
                        <span className="font-[family-name:var(--font-heading)] text-xs text-dirty-orange/40 tracking-wide min-w-[70px] sm:min-w-[90px] pt-1 shrink-0">
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

      {/* ===== MEME ===== */}
      <AmbientMediaLayer gradient="warm">
        <div className="py-16 sm:py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <QuoteBlock
              text="understood the assignment"
              attribution="-- you, after day one"
            />
          </div>
        </div>
      </AmbientMediaLayer>

      {/* ===== CHAPTER NAV ===== */}
      <ChapterNav
        prev={{ href: "/", label: "Home" }}
        next={{ href: "/golden-hour", label: "Golden Hour" }}
      />

      <FooterFrame />
    </main>
  );
}
