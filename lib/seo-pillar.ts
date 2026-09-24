/**
 * Long-form SEO pillar (~2000 words) — buy tempeh Rishikesh / cafe wholesale.
 * Keep claims factual; nutrition figures are approximate public averages.
 */

export const pillarSlug = "tempeh-rishikesh";
export const pillarPath = `/guide/${pillarSlug}`;

export const pillarMeta = {
  title: "Buy Tempeh in Rishikesh — Cafe Wholesale Guide",
  description:
    "Complete guide to buying soy tempeh cubes in Rishikesh for cafes. Nutrition, cooking, wholesale ordering, and weekly drops from Tapovan to Laxman Jhula and Ram Jhula with Satvik Way.",
};

export const pillarToc = [
  { id: "what-is-tempeh", label: "What is tempeh?" },
  { id: "why-rishikesh", label: "Why Rishikesh cafes need it" },
  { id: "vs-tofu-paneer", label: "Tempeh vs tofu vs paneer" },
  { id: "nutrition", label: "Nutrition facts" },
  { id: "how-made", label: "How Satvik Way makes cubes" },
  { id: "menu-ideas", label: "Cafe menu ideas" },
  { id: "cook-methods", label: "How to cook tempeh" },
  { id: "storage", label: "Storage and shelf life" },
  { id: "wholesale", label: "Wholesale ordering" },
  { id: "delivery-areas", label: "Delivery areas" },
  { id: "faq", label: "FAQ" },
] as const;

export const pillarFaqs = [
  {
    q: "Where can I buy fresh tempeh in Rishikesh?",
    a: "Satvik Way supplies vacuum-packed soy tempeh cubes to cafes across Rishikesh. Order on WhatsApp or through the contact form — we drop weekly from Tapovan to Ram Jhula.",
  },
  {
    q: "Is Satvik Way tempeh cooked or raw?",
    a: "Raw. Packs arrive vacuum sealed so your kitchen marinates and cooks to the plate. That keeps menu flavour under your control.",
  },
  {
    q: "What is the price of tempeh cubes in Rishikesh?",
    a: "Soy Tempeh Cubes (200 g) are listed at ₹280 on the shop. Cafe lot case rates are quoted on WhatsApp based on weekly volume.",
  },
  {
    q: "How much protein is in tempeh?",
    a: "About 20 g protein per 100 g — a strong plant-protein option for yoga-town menus compared with many tofu servings of the same weight.",
  },
  {
    q: "Do you deliver to Tapovan and Laxman Jhula?",
    a: "Yes. Weekly drops cover Tapovan, Laxman Jhula, Ram Jhula, and nearby cafe belts in Rishikesh.",
  },
] as const;

/** Full article body sections — render as HTML-friendly paragraphs */
export const pillarSections: {
  id: string;
  heading: string;
  paragraphs: string[];
}[] = [
  {
    id: "what-is-tempeh",
    heading: "What is tempeh? A clear answer for Rishikesh kitchens",
    paragraphs: [
      "Tempeh is a fermented bean cake. Whole soybeans are cooked, inoculated with a friendly culture (Rhizopus), and pressed into a firm slab over roughly two days. Unlike tofu, which is made from soy milk and coagulated, tempeh keeps the whole bean. That is why it tastes nuttier, feels chewier, and usually carries more protein and fibre in the same weight.",
      "In India, tempeh is still less common than paneer or tofu — especially outside metro cities. In Rishikesh, where cafes serve travellers, yoga guests, and plant-forward regulars, chefs keep asking for a protein that sears well, absorbs marinade, and does not fall apart on the grill. Tempeh answers that ask.",
      "Satvik Way sells soy tempeh as vacuum-packed raw cubes. We are not a cafe and we do not plate dishes for guests. We ferment, cube, pack, and drop to kitchens so your menu stays yours. If you are searching for “buy tempeh Rishikesh”, “tempeh wholesale Uttarakhand”, or “cafe tempeh supplier Tapovan”, this guide is written for you.",
    ],
  },
  {
    id: "why-rishikesh",
    heading: "Why Rishikesh cafes keep looking for tempeh",
    paragraphs: [
      "Rishikesh is a food town with a clear guest profile: people who walk a lot, practice yoga, and often prefer vegetarian or plant-based protein without feeling underfed. Paneer is familiar. Tofu is available. Tempeh fills a gap — higher protein density, a savoury bite, and grill performance that guests notice on bowls, wraps, thalis, and grain plates.",
      "Supply is the hard part. Fresh tempeh does not sit on every vegetable cart from Tapovan to Ram Jhula. Importing frozen packs from far cities adds cost, thaw time, and inconsistent quality. Local weekly drops solve that. A cafe can plan a Monday or mid-week receive, portion for the week, and keep a clean protein line without overstocking a walk-in.",
      "Guests also ask smarter questions now. They want to know if a dish is fermented, high protein, dairy-free, or gut-friendly. Putting tempeh on the menu — and naming it clearly — answers those questions without long footnotes. Many cafes describe it as “fermented soy protein cubes” or simply “tempeh” next to the dish name.",
      "For owners, the commercial case is simple: one ingredient, many plates. The same pack can become a masala scramble at breakfast, a wrap filler at lunch, and a grilled bowl topper at dinner. That flexibility matters when labour time is tight and menu engineering needs fewer SKUs, not more.",
    ],
  },
  {
    id: "vs-tofu-paneer",
    heading: "Tempeh vs tofu vs paneer — what to tell the kitchen",
    paragraphs: [
      "Tofu is soft to firm, mild, and made from soy milk. It is excellent in curries and silken sauces, but soft tofu can break on a hard sear. Tempeh is denser. Cubes and slabs hold shape on a hot pan or grill. If your cook wants char and chew, tempeh usually wins.",
      "Paneer is dairy. It browns beautifully and is loved across North Indian plates, but it is not dairy-free and typically carries more fat per serving than tempeh. Guests who avoid milk, or who want plant protein after a long trek, often prefer a tempeh option beside — not instead of — classic paneer dishes.",
      "Nutrition-wise, tempeh often lands around 20 g protein per 100 g, with meaningful fibre from the whole bean. Tofu protein varies by firmness and brand; paneer protein is solid but comes with dairy. None of these is “better” for every guest — the point is choice. A Rishikesh cafe that lists all three covers almost every dietary request at the table.",
      "From a prep view: tempeh loves marinade. Soy sauce, garlic, ginger, chilli, tamarind, lemon, smoked paprika, or a simple chaat masala rub all work. Because the cake is porous after a light steam or score, flavour goes in fast — useful when ticket times are short.",
    ],
  },
  {
    id: "nutrition",
    heading: "Tempeh nutrition facts cafes can cite (approx. per 100 g)",
    paragraphs: [
      "Public nutrition references commonly list cooked soy tempeh near 195 calories, about 20 g protein, 8 g carbohydrate, 11 g fat, and very low sodium around 14 mg per 100 g. Exact numbers shift with brand, moisture, and cooking oil — always treat pack labels as the kitchen source of truth when you print a menu claim.",
      "Beyond macros, tempeh is valued for iron, calcium, magnesium, phosphorus, potassium, and B vitamins such as riboflavin and niacin. Fermentation can improve digestibility of the beans and may support gut comfort for some guests. Soy isoflavones are plant compounds often discussed in heart-health research; we mention them as general food science context, not medical advice.",
      "For yoga-town messaging, keep copy honest and short: “High plant protein. Fermented soy. Dairy-free.” Avoid miracle claims. Guests trust cafes that sound like kitchens, not supplement ads. If a guest has a soy allergy or thyroid concern, they should follow their clinician — tempeh is still soy.",
      "Satvik Way packs are raw vacuum-sealed cubes. Nutrition on the finished plate depends on oil, marinade, and sides. When you post a bowl photo, the tempeh portion is usually the protein anchor; rice, greens, and sauces complete the meal.",
    ],
  },
  {
    id: "how-made",
    heading: "How Satvik Way soy tempeh cubes are made",
    paragraphs: [
      "Our process starts with whole soybeans. Beans are hulled and cooked, then cultured and held for about a 48-hour ferment until a firm cake forms. We cut that cake into cubes sized for cafe pans — small enough to portion, large enough to sear without vanishing into a sauce.",
      "Cubes go into vacuum packs so oxygen stays out and the kitchen gets a clean, stackable unit. We sell the cubes raw. That is intentional. Paste-ready or pre-sauced tempeh locks you into one flavour. Raw cubes let Tapovan breakfast cooks and Ram Jhula dinner chefs share one supply line with totally different plates.",
      "Quality for food service means consistency: same cube size, same ferment character, same pack format week to week. Cafes that order a cafe lot want to know Wednesday’s drop will cook like last Wednesday’s. That reliability is why wholesale buyers stick with a single Rishikesh supplier instead of hunting market to market.",
      "We do not claim to invent tempeh. We claim to make it available where cafes actually cook — along the Rishikesh cafe belt — with WhatsApp ordering and weekly logistics that match how kitchens already buy bread, greens, and dairy.",
    ],
  },
  {
    id: "menu-ideas",
    heading: "Cafe menu ideas that sell in Rishikesh",
    paragraphs: [
      "Breakfast: crumbled tempeh scramble with onions, tomato, and green chilli; tempeh paratha wrap; or a heated cube side next to avocado toast for guests who want more protein without eggs.",
      "Lunch bowls: grain base, seasonal veg, tahini or peanut dressing, and seared tempeh cubes. Add a pickle or fresh coriander. Name the dish with the protein first — “Tempeh Himalayan Bowl” — so guests scanning the menu catch it.",
      "Indian-leaning plates: tempeh tikka-style marinade, tawa sear, and a mint chutney; tempeh keema-style crumble for pav; or a dry sabzi with cumin and curry leaves for thali add-ons. Tempeh is not traditional in every region, but Rishikesh menus already mix global and Indian plates — guests expect that.",
      "Street-cafe energy: wraps, burgers, and loaded fries with crispy tempeh. A light cornstarch dusting and hot oil can give crunch without deep-menu complexity. For chill evenings near the Ganga, a warm tempeh stew with coconut milk and greens also works.",
      "Keep one signature tempeh dish and one flexible “add tempeh +₹XX” modifier. The signature builds brand memory; the modifier lifts average ticket across the whole menu without rewriting every recipe.",
    ],
  },
  {
    id: "cook-methods",
    heading: "How to cook Satvik Way tempeh — kitchen methods",
    paragraphs: [
      "Open the vacuum pack. Slice thicker if you want steaks, or keep cubes whole. Optional: steam or simmer cubes for a few minutes to open the crumb before a strong marinade — helpful for bold Indian or Korean flavours.",
      "Sauté: medium-high heat, a spoon of oil, 5–7 minutes until edges brown. Do not crowd the pan. Bake: toss with marinade, 180–200°C until hot and lightly colouring. Grill: oil the bars, watch for sticking, mark both sides. Crumble: break by hand into a hot masala for keema-style plates.",
      "Marinade time can be short — 15 to 30 minutes works for most cafe tickets. Overnight marinade is fine in the fridge if you batch prep. Acidic marinades (lemon, vinegar, tamarind) brighten flavour; oily marinades help browning.",
      "Common mistakes: cooking from ice-cold fridge straight into a timid pan (steam instead of sear), drowning cubes in watery sauce before browning, or under-seasoning. Tempeh is mild. Season like you mean it. Salt, spice, smoke, and fat finish the plate.",
      "For a full step-by-step HowTo schema and shorter chef notes, see our Why tempeh page. For packs and prices, open the shop. For this week’s case rate, WhatsApp Supply Lead.",
    ],
  },
  {
    id: "storage",
    heading: "Storage, shelf life, and kitchen handling",
    paragraphs: [
      "Keep vacuum packs refrigerated. Use FIFO — first in, first out — especially in busy weeks when multiple cases arrive. Once opened, keep unused cubes covered and cold, and cook within a short window the same way you would handle other fresh proteins.",
      "Do not leave opened packs on a warm pass. Rishikesh summers and busy service heat will shorten quality fast. If a pack looks bloated, smells sharply off beyond normal ferment aroma, or shows unusual colour, do not use it — contact us and set that unit aside.",
      "Freezing can extend holding for some kitchens, but texture may change slightly after thaw. If you freeze, thaw in the fridge and pat dry before sear. Ask on WhatsApp if you need guidance for larger cafe-lot storage plans.",
      "Label opened dates on cambros. Train new cooks that tempeh is an ingredient, not a ready snack out of the bag — it is sold raw for a reason.",
    ],
  },
  {
    id: "wholesale",
    heading: "How to order tempeh wholesale in Rishikesh",
    paragraphs: [
      "Satvik Way runs a simple WhatsApp-first wholesale flow. Tell us your cafe name, area (Tapovan, Laxman Jhula, Ram Jhula, or nearby), and how many packs or cases you need this week. Supply Lead confirms rate, pack count, and a drop window.",
      "Two SKUs cover most buyers. Soy Tempeh Cubes (200 g) suit smaller cafes, tasting menus, and trial orders. Cafe Lot Tempeh Cubes are the weekly case format — pricing depends on volume, so we quote on chat instead of locking a public case price that ignores your real usage.",
      "There is no card checkout on the site. That is deliberate for food-service speed: one message, one confirmation, one drop. Accounts and new cafe onboarding can also go through the Chief Coordinator when you need a standing weekly line.",
      "First order tip: start with a mixed trial — a few 200 g packs plus a small cafe lot — so the kitchen tests sear, marinade, and ticket time before you commit to a large standing order. Then lock a weekly rhythm. Consistency beats hero orders.",
    ],
  },
  {
    id: "delivery-areas",
    heading: "Delivery areas: Tapovan, Laxman Jhula, Ram Jhula",
    paragraphs: [
      "Our core drop belt is the Rishikesh cafe corridor: Tapovan, Laxman Jhula, and Ram Jhula. These areas hold a dense mix of traveller cafes, yoga kitchens, and vegetarian restaurants that already buy specialty produce and dairy on a weekly cycle.",
      "If your kitchen sits slightly outside those landmarks, still message us. We plan routes around the week’s confirmed orders. The more cafes on a shared run, the smoother the drop. Wholesale buyers who order regularly get priority placement on the route.",
      "We are a Uttarakhand supplier focused on Rishikesh food service — not a pan-India e-commerce shipper for single retail packs. That focus keeps product fresher and logistics honest. If you found us searching “tempeh delivery Rishikesh” or “tempeh supplier near Laxman Jhula”, you are in the right place.",
    ],
  },
];

export const pillarClosing = [
  "Tempeh is no longer a metro-only ingredient. Rishikesh cafes can run it weekly with local vacuum-packed cubes, clear nutrition talking points, and a WhatsApp order flow that matches how kitchens already buy.",
  "When you are ready: shop Soy Tempeh Cubes and Cafe Lot packs, read the shorter Why tempeh notes, or send this week’s list on the order page. Satvik Way supplies the cubes — your cafe owns the plate.",
] as const;
