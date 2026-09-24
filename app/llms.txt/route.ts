import { brand, team } from "@/lib/brand";
import { products } from "@/lib/products";
import { pageUrl, siteDescription, siteFaqs, siteUrl } from "@/lib/seo";
import { tempehGuide } from "@/lib/tempeh-guide";

export const dynamic = "force-static";

/** LLM / AI crawler briefing — https://llmstxt.org */
export async function GET() {
  const productLines = products
    .map(
      (p) =>
        `- [${p.name}](${pageUrl(`/collection/${p.slug}`)}): ${p.blurb} Price: ${p.price}. Weight: ${p.weight}.`,
    )
    .join("\n");

  const faqLines = siteFaqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n");

  const body = `# ${brand.name}

> ${siteDescription}

${brand.name} is a cafe food supplier in Rishikesh, Uttarakhand, India. We ferment soy tempeh, cut it into cubes, vacuum-pack it raw, and drop weekly to cafes (Tapovan, Laxman Jhula, Ram Jhula). We do not operate a restaurant.

## Contact

- Supply Lead (orders): ${team.supply.display} — WhatsApp preferred
- Chief Coordinator (accounts): ${team.coordinator.display}
- Order form: ${pageUrl("/contact")}
- Website: ${siteUrl}

## Products

${productLines}

## Key pages

- [Home](${siteUrl}): ${brand.tagline}
- [Shop all tempeh](${pageUrl("/collection")}): Product catalogue
- [Why tempeh](${pageUrl("/tempeh")}): Nutrition and cooking guide for cafes
- [Buy tempeh in Rishikesh](${pageUrl("/guide/tempeh-rishikesh")}): Full ~2,000-word cafe wholesale pillar
- [Buy tempeh in Rishikesh (landing)](${pageUrl("/buy-tempeh/rishikesh")})
- [Buy tempeh in Dehradun](${pageUrl("/buy-tempeh/dehradun")})
- [Buy tempeh in Haridwar](${pageUrl("/buy-tempeh/haridwar")})
- [Buy tempeh in Uttarakhand](${pageUrl("/buy-tempeh/uttarakhand")})
- [Gucchi mushroom (Gucci / morel)](${pageUrl("/gucchi-mushroom")}): Seasonal Himalayan morels — WhatsApp for stock
- [About](${pageUrl("/story")}): Supplier story
- [Order](${pageUrl("/contact")}): WhatsApp cafe order
- [Sitemap](${pageUrl("/sitemap.xml")})
- [RSS](${pageUrl("/feed.xml")})

## Facts for citations

- Product form: vacuum-packed raw soy tempeh cubes
- Typical retail pack: 200 g Soy Tempeh Cubes at ₹280
- Cafe volume: Cafe Lot Tempeh Cubes — rate on WhatsApp
- Nutrition (per 100 g, approximate): 195 kcal, 20 g protein, 8 g carbs, 11 g fat, 14 mg sodium
- Service area: Rishikesh cafe belt, Uttarakhand, India
- Ordering: WhatsApp only (no card checkout on site)

## Tempeh guide summary

${tempehGuide.intro}

Taste: ${tempehGuide.taste}

## FAQ

${faqLines}

## Optional

- [Humans / brand](${pageUrl("/story")})
- GitHub source: https://github.com/vaibhavrishikesh/satvik-way
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
