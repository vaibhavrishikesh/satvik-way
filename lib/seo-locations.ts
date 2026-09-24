import { brand, team } from "@/lib/brand";

export type TempehLocation = {
  slug: "rishikesh" | "dehradun" | "haridwar" | "uttarakhand";
  name: string;
  regionLabel: string;
  path: string;
  keyword: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  areas: string[];
  paragraphs: string[];
  faqs: { q: string; a: string }[];
  geo?: { lat: number; lng: number };
};

export const tempehLocations: TempehLocation[] = [
  {
    slug: "rishikesh",
    name: "Rishikesh",
    regionLabel: "Rishikesh, Uttarakhand",
    path: "/buy-tempeh/rishikesh",
    keyword: "buy tempeh in Rishikesh",
    title: "Buy Tempeh in Rishikesh | Cafe Wholesale Cubes",
    description:
      "Buy tempeh in Rishikesh from Satvik Way — vacuum-packed soy tempeh cubes for cafes. Weekly drops Tapovan, Laxman Jhula, Ram Jhula. WhatsApp wholesale order.",
    h1: "Buy tempeh in Rishikesh",
    intro:
      "Satvik Way supplies fresh vacuum-packed soy tempeh cubes to cafes in Rishikesh. Order on WhatsApp for weekly kitchen drops across Tapovan, Laxman Jhula, and Ram Jhula.",
    areas: ["Tapovan", "Laxman Jhula", "Ram Jhula", "Jonk", "Swarg Ashram"],
    geo: { lat: 30.0869, lng: 78.2676 },
    paragraphs: [
      "If you searched buy tempeh in Rishikesh, you are usually a cafe, yoga kitchen, or vegetarian restaurant that needs a reliable plant protein — not a one-off tourist snack. Satvik Way is built for that use case. We ferment soy tempeh, cut it into cubes, vacuum pack it raw, and drop to kitchens on a weekly rhythm.",
      "Rishikesh guests ask for high-protein vegetarian plates after treks and yoga. Tempeh holds on the grill better than soft tofu, takes marinade well, and gives about 20 g protein per 100 g. That is why more Tapovan and Laxman Jhula menus are adding tempeh bowls, wraps, and thali sides.",
      "Buying tempeh in Rishikesh through a local supplier beats frozen packs shipped from far cities. You get fresher cubes, clearer WhatsApp communication, and a drop window that matches how cafes already buy greens and dairy. Start with Soy Tempeh Cubes (200 g) or ask for a Cafe Lot case rate.",
      "We do not run a cafe. Your chef finishes the plate. Guests see your brand. Our job is consistent cubes and on-time Rishikesh drops. Message Supply Lead with cafe name, area, and pack count to buy tempeh in Rishikesh this week.",
    ],
    faqs: [
      {
        q: "Where can I buy tempeh in Rishikesh?",
        a: "Order from Satvik Way on WhatsApp or the contact form. We supply vacuum-packed soy tempeh cubes to cafes across Rishikesh with weekly drops.",
      },
      {
        q: "Do you deliver tempeh to Tapovan and Laxman Jhula?",
        a: "Yes. Core drop areas include Tapovan, Laxman Jhula, Ram Jhula, and nearby cafe belts.",
      },
      {
        q: "What does tempeh cost in Rishikesh?",
        a: "Soy Tempeh Cubes (200 g) are listed at ₹280. Cafe lot rates are quoted on WhatsApp by volume.",
      },
    ],
  },
  {
    slug: "dehradun",
    name: "Dehradun",
    regionLabel: "Dehradun, Uttarakhand",
    path: "/buy-tempeh/dehradun",
    keyword: "buy tempeh in Dehradun",
    title: "Buy Tempeh in Dehradun | Satvik Way Cafe Supply",
    description:
      "Buy tempeh in Dehradun for cafes and kitchens — Satvik Way vacuum-packed soy tempeh cubes. WhatsApp wholesale enquiry for Dehradun food service delivery windows.",
    h1: "Buy tempeh in Dehradun",
    intro:
      "Looking to buy tempeh in Dehradun for a cafe or cloud kitchen? Satvik Way supplies vacuum-packed soy tempeh cubes from our Rishikesh base — WhatsApp us for Dehradun drop or pickup options.",
    areas: ["Rajpur Road", "Clock Tower", "Prem Nagar", "Ballupur", "Jakhan"],
    geo: { lat: 30.3165, lng: 78.0322 },
    paragraphs: [
      "Dehradun cafes and bakeries serve a mix of students, office crowds, and travellers heading to Mussoorie or Rishikesh. Plant-protein demand is rising, but fresh tempeh is still hard to find on local wholesale routes. Satvik Way fills that gap for kitchens that want to buy tempeh in Dehradun without hunting metro importers.",
      "Our cubes are raw, vacuum packed, and ready for marinade — the same SKUs Rishikesh cafes already use. Dehradun buyers typically message Supply Lead with weekly volume. Depending on the week’s route, we arrange a Dehradun drop window or a coordinated handoff from the Rishikesh supply line.",
      "Menu ideas that work in Dehradun: tempeh wraps on Rajpur Road lunch menus, high-protein bowls for fitness guests, and vegetarian burger patties that sear clean. Tempeh vs tofu is an easy upsell story for staff — denser protein, better chew, fermented whole-bean character.",
      "To buy tempeh in Dehradun this week, WhatsApp cafe name, pin area, and pack count. We reply with rate, availability, and the next logistics slot. Trial packs (200 g) are available before you commit to a cafe lot.",
    ],
    faqs: [
      {
        q: "Can I buy tempeh in Dehradun from Satvik Way?",
        a: "Yes. Message WhatsApp with your kitchen location and volume. We confirm Dehradun delivery or pickup options for that week.",
      },
      {
        q: "Is tempeh available for cafes near Rajpur Road?",
        a: "We supply food-service buyers across Dehradun cafe belts including Rajpur Road and nearby areas, subject to weekly route planning.",
      },
      {
        q: "Do you only sell in Rishikesh?",
        a: "Rishikesh is our core drop belt. Dehradun orders are fulfilled by arrangement — ask on WhatsApp for the current week.",
      },
    ],
  },
  {
    slug: "haridwar",
    name: "Haridwar",
    regionLabel: "Haridwar, Uttarakhand",
    path: "/buy-tempeh/haridwar",
    keyword: "buy tempeh in Haridwar",
    title: "Buy Tempeh in Haridwar | Vegetarian Cafe Supply",
    description:
      "Buy tempeh in Haridwar — Satvik Way soy tempeh cubes for vegetarian cafes and kitchens. WhatsApp wholesale orders with Haridwar delivery windows when routes allow.",
    h1: "Buy tempeh in Haridwar",
    intro:
      "Satvik Way helps vegetarian cafes and kitchens buy tempeh in Haridwar — vacuum-packed soy cubes, ordered on WhatsApp, supplied from our Uttarakhand tempeh line.",
    areas: ["Har Ki Pauri belt", "Jwalapur", "Sidcul", "Shivalik Nagar", "Railway Road"],
    geo: { lat: 29.9457, lng: 78.1642 },
    paragraphs: [
      "Haridwar’s food scene is strongly vegetarian. Guests want sattvic-friendly plates, dairy-free options, and protein that is not always paneer. Tempeh — fermented soy cubes — fits many of those asks when kitchens buy tempeh in Haridwar from a reliable Uttarakhand supplier.",
      "Satvik Way packs are raw and vacuum sealed. Chefs in Haridwar can marinate with simple Indian spices, sear for wraps, or crumble into dry sabzi-style plates for pilgrims and travellers who want something different from standard thali protein.",
      "Because Haridwar sits on the same corridor as Rishikesh, logistics are often shareable with our weekly cafe runs. Message us early in the week with area and quantity so we can slot a Haridwar drop when the route is live.",
      "If you searched buy tempeh in Haridwar for a new cafe menu, start with a small trial of Soy Tempeh Cubes, test ticket time in your kitchen, then move to cafe lot volume. WhatsApp Supply Lead to begin.",
    ],
    faqs: [
      {
        q: "Where can I buy tempeh in Haridwar?",
        a: "Order Satvik Way soy tempeh cubes on WhatsApp. We arrange Haridwar supply windows with our Uttarakhand cafe logistics.",
      },
      {
        q: "Is tempeh sattvic / vegetarian?",
        a: "Our soy tempeh is plant-based (soy). Confirm any guest-specific dietary rules with your kitchen — we sell raw cubes as an ingredient.",
      },
      {
        q: "How do Haridwar cafes usually order?",
        a: "WhatsApp cafe name, area, and packs needed. We confirm rate and the next delivery or pickup slot.",
      },
    ],
  },
  {
    slug: "uttarakhand",
    name: "Uttarakhand",
    regionLabel: "Uttarakhand, India",
    path: "/buy-tempeh/uttarakhand",
    keyword: "buy tempeh in Uttarakhand",
    title: "Buy Tempeh in Uttarakhand | Wholesale Cafe Cubes",
    description:
      "Buy tempeh in Uttarakhand from Satvik Way — soy tempeh cubes for cafes in Rishikesh, Dehradun, Haridwar and nearby. WhatsApp wholesale supply across the state corridor.",
    h1: "Buy tempeh in Uttarakhand",
    intro:
      "Satvik Way is an Uttarakhand tempeh supplier for cafes. Buy tempeh in Uttarakhand as vacuum-packed soy cubes — core weekly drops in Rishikesh, with Dehradun and Haridwar by arrangement.",
    areas: ["Rishikesh", "Dehradun", "Haridwar", "Mussoorie (enquiry)", "Roorkee (enquiry)"],
    geo: { lat: 30.0668, lng: 79.0193 },
    paragraphs: [
      "Uttarakhand’s cafe belt — especially Rishikesh, Dehradun, and Haridwar — needs plant protein that travellers recognise and kitchens can prep fast. Searching buy tempeh in Uttarakhand often means you want a state-based supplier, not a distant frozen SKU with unclear thaw times.",
      "Satvik Way focuses on food-service tempeh: fermented soy, cubed, vacuum packed, sold raw. Our strongest weekly coverage is Rishikesh (Tapovan to Ram Jhula). Dehradun and Haridwar kitchens order on WhatsApp and join the week’s logistics when volume and route align.",
      "Wholesale buyers across Uttarakhand use two SKUs: 200 g Soy Tempeh Cubes for trials and smaller cafes, and Cafe Lot Tempeh Cubes for weekly case volume. Prices for lots are quoted live so they match your real usage.",
      "Whether you run one outlet or a small group, the order path is the same: message Supply Lead with city, cafe name, and quantity. We confirm if we can buy-and-drop tempeh in your Uttarakhand location this week, or schedule the next window. For deep Rishikesh reading, see our full cafe guide; for city pages, use the links below.",
    ],
    faqs: [
      {
        q: "Can I buy tempeh in Uttarakhand from Satvik Way?",
        a: `Yes. ${brand.name} supplies soy tempeh cubes from Rishikesh across the Uttarakhand cafe corridor. WhatsApp ${team.supply.display} with your city and volume.`,
      },
      {
        q: "Which Uttarakhand cities do you cover?",
        a: "Core: Rishikesh. By arrangement: Dehradun and Haridwar. Other cities — ask on WhatsApp for the current week.",
      },
      {
        q: "Is this retail home delivery across the state?",
        a: "We prioritise cafe and kitchen wholesale. Single retail shipping statewide is not our default model — message us if you have a special case.",
      },
    ],
  },
];

export function getTempehLocation(slug: string) {
  return tempehLocations.find((loc) => loc.slug === slug);
}

export const tempehLocationSlugs = tempehLocations.map((loc) => loc.slug);
