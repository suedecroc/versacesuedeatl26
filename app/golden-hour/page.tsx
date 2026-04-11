import Nav from "@/components/Nav";
import ChapterIntro from "@/components/ChapterIntro";
import PlaceCard from "@/components/PlaceCard";
import QuoteBlock from "@/components/QuoteBlock";
import SectionDivider from "@/components/SectionDivider";
import AmbientMediaLayer from "@/components/AmbientMediaLayer";
import FloatingCTA from "@/components/FloatingCTA";
import FooterFrame from "@/components/FooterFrame";
import MotionWrapper from "@/components/MotionWrapper";
import ChapterNav from "@/components/ChapterNav";
import PhotoCard from "@/components/PhotoCard";

/* =====================================================================
   DATA
   ===================================================================== */

const sunsetSpots = [
  {
    name: "Ponce City Market Rooftop",
    address: "675 Ponce de Leon Ave NE",
    tags: ["skyline", "golden hour", "drinks"],
    description:
      "the skyline turns orange up here. drink in hand, city below, no agenda. this is the transition you came for.",
  },
  {
    name: "Beltline at Dusk",
    address: "Eastside Trail",
    tags: ["walk", "art", "golden hour"],
    description:
      "the beltline changes after 5. the joggers thin out. the light gets long. the murals look different. you walk slower and that's the point.",
  },
  {
    name: "Virginia Highland Evening",
    address: "Virginia Ave NE",
    tags: ["stroll", "pre-dinner", "charming"],
    description:
      "tree-lined streets catching the last light. window shopping nobody asked for. the pre-dinner stroll that sets the tone.",
  },
  {
    name: "Inman Park at Sunset",
    address: "Euclid Ave NE",
    tags: ["architecture", "golden light", "quiet"],
    description:
      "victorian homes in golden light. the porches. the quiet streets. atlanta's first suburb looking exactly how it's supposed to at this hour.",
  },
];

const transitionSpots = [
  {
    name: "Ticonderoga Club",
    address: "99 Krog St NE",
    tags: ["cocktails", "pre-game", "golden hour"],
    description:
      "the cocktail that bridges afternoon and evening. dive bar space, craft bar execution. you came in daylight, you'll leave in dark.",
  },
  {
    name: "Barcelona Wine Bar",
    address: "240 N Highland Ave NE",
    tags: ["wine", "patio", "transition"],
    description:
      "the patio at golden hour. rioja in hand. tapas arriving. the city shifting around you while you stay exactly where you are.",
  },
  {
    name: "Bread & Butterfly",
    address: "290 Elizabeth St NE",
    tags: ["bistro", "wine", "evening"],
    description:
      "becomes a different place at dinner. the bistro menu. the wine list. steel doors open to a street going gold.",
  },
];

const goldenItinerary = [
  {
    time: "4:00 PM",
    spot: "Ponce City Rooftop",
    desc: "skyline bar. the light is doing something. mini golf if you're still competing. drinks if you've accepted that the day is winding.",
  },
  {
    time: "5:30 PM",
    spot: "Beltline Walk",
    desc: "the eastside trail at dusk. different energy. the art installations catch different light. you're not in a rush anymore.",
  },
  {
    time: "6:30 PM",
    spot: "Pre-Dinner Drinks",
    desc: "ticonderoga club or barcelona patio. this is the pause between acts. the city is shifting and you can feel it.",
  },
  {
    time: "7:30 PM",
    spot: "Early Dinner",
    desc: "beetlecat for seafood. delbar for persian. sotto sotto for italian. pick your lane. the evening decides from here.",
  },
  {
    time: "9:00 PM",
    spot: "The Handoff",
    desc: "golden hour is done. the neon is starting. whatever happens next is night's problem.",
  },
];

/* =====================================================================
   PAGE
   ===================================================================== */

export default function GoldenHourPage() {
  return (
    <main>
      <Nav />
      <FloatingCTA />

      {/* ===== CHAPTER INTRO ===== */}
      <AmbientMediaLayer gradient="warm">
        <div className="pt-24 sm:pt-32">
          <ChapterIntro
            eyebrow="Chapter Two"
            title="Golden Hour"
            intro="the city shifts around 5. the light gets long and warm. the pace drops half a gear. you're between things -- between day and night, between plans, between versions of yourself. this is the in-between and it's the best part."
            variant="warm"
          />
        </div>
      </AmbientMediaLayer>

      <SectionDivider />

      {/* ===== THE SHIFT ===== */}
      <section className="bg-midnight grain">
        <ChapterIntro
          eyebrow="The Shift"
          title="When the Light Changes"
          intro="atlanta at golden hour is a different city. the concrete goes warm. the trees cast long shadows on the beltline. every patio becomes the right patio."
          variant="warm"
        />

        <div className="px-6 lg:px-12 xl:px-16 pb-16 sm:pb-24 relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {sunsetSpots.map((spot, i) => (
              <PlaceCard key={spot.name} {...spot} delay={i * 100} tagVariant="warm" />
            ))}
          </div>
        </div>
      </section>

      {/* ===== MS PAINT PHOTO ===== */}
      <section className="bg-midnight grain px-6 lg:px-12 xl:px-16 py-8">
        <div className="max-w-7xl mx-auto">
          <PhotoCard
            src="/photos/jordan-mspaint.jpg"
            alt="Jordan in MS Paint window edit"
            variant="inline"
            caption="nostalgia buffer loading..."
          />
        </div>
      </section>

      <AmbientMediaLayer gradient="warm">
        <div className="py-16 sm:py-24 px-6 lg:px-12">
          <QuoteBlock
            text="you're driving through midtown and the light hits the glass buildings and for a second the whole city looks like it was designed for exactly this moment"
          />
        </div>
      </AmbientMediaLayer>

      <SectionDivider />

      {/* ===== TRANSITION SPOTS ===== */}
      <section className="bg-sweat grain">
        <ChapterIntro
          eyebrow="The Bridge"
          title="Between Day & Night"
          intro="these are the spots where afternoon becomes evening. you came in daylight. you'll leave in dark. that's the whole trick."
          variant="warm"
        />

        {/* ===== VERSACE SUNGLASSES PHOTO ===== */}
        <div className="px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-7xl mx-auto">
            <PhotoCard
              src="/photos/versace-sunglasses.jpg"
              alt="Versace with blue mirror shades at golden hour"
              variant="float"
              caption="golden hour approved"
            />
          </div>
        </div>

        <div className="px-6 lg:px-12 xl:px-16 pb-16 sm:pb-24 relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {transitionSpots.map((spot, i) => (
              <PlaceCard key={spot.name} {...spot} delay={i * 100} tagVariant="warm" />
            ))}
          </div>
        </div>
      </section>

      {/* ===== VERSACE BATHROOM FIT ===== */}
      <section className="bg-midnight grain px-6 lg:px-12 xl:px-16 py-8">
        <div className="max-w-7xl mx-auto">
          <PhotoCard
            src="/photos/versace-bathroom-fit.jpg"
            alt="Versace bathroom fit -- mirror selfie"
            variant="inline"
            caption="fit check: golden hour edition"
          />
        </div>
      </section>

      {/* Casey Frey energy reference */}
      <QuoteBlock
        text="the energy is shifting. casey frey running through the parking lot type energy. controlled chaos. beautiful nonsense."
        attribution="-- the golden hour mood"
      />

      <SectionDivider />

      {/* ===== GOLDEN HOUR TIMELINE ===== */}
      <section className="bg-midnight grain">
        <ChapterIntro
          eyebrow="The Flow"
          title="How the Evening Builds"
          intro="golden hour has a rhythm. you don't force it. you let it carry you from rooftop to beltline to patio to dinner. the city does the work."
          variant="warm"
        />

        <div className="px-6 lg:px-12 xl:px-16 pb-16 sm:pb-24 relative z-10">
          <div className="max-w-4xl mx-auto">
            {goldenItinerary.map((event, i) => (
              <MotionWrapper key={event.time} delay={i * 80}>
                <div className="flex gap-4 mb-8 last:mb-0">
                  <span className="font-[family-name:var(--font-heading)] text-xs text-sunburnt-yellow/40 tracking-wide min-w-[70px] sm:min-w-[90px] pt-1 shrink-0">
                    {event.time}
                  </span>
                  <div>
                    <p className="font-[family-name:var(--font-body)] text-cream text-sm sm:text-base font-medium">
                      {event.spot}
                    </p>
                    <p className="font-[family-name:var(--font-body)] text-cream/40 text-sm mt-1">
                      {event.desc}
                    </p>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DRIVING INTERLUDE ===== */}
      <AmbientMediaLayer gradient="warm">
        <div className="py-20 sm:py-28 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <QuoteBlock
              text="the gas station at golden hour. the way the light hits the pump. the way you're standing there and the city sounds different. this is cinematic for no reason."
            />
            <MotionWrapper delay={200}>
              <p className="font-[family-name:var(--font-body)] text-cream/40 text-sm text-center max-w-2xl mx-auto leading-relaxed">
                there are drives in atlanta that matter more than the destination. peachtree street when the lights start coming on. the connector when traffic breaks for exactly one second. the back roads through virginia highland where every house has a porch light and it feels like a movie you&apos;ve already seen.
              </p>
            </MotionWrapper>
          </div>
        </div>
      </AmbientMediaLayer>

      {/* ===== CHAPTER NAV ===== */}
      <ChapterNav
        prev={{ href: "/day", label: "Day" }}
        next={{ href: "/nightlife", label: "Nightlife" }}
      />

      <FooterFrame />
    </main>
  );
}
