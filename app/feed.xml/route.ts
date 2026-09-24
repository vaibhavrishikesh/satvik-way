import { brand, team } from "@/lib/brand";
import { products } from "@/lib/products";
import { pageUrl, siteDescription, siteFaqs, siteUrl } from "@/lib/seo";
import { tempehGuide } from "@/lib/tempeh-guide";

export const dynamic = "force-static";
export const revalidate = 3600;

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const now = new Date().toUTCString();

  const items = [
    {
      title: `${brand.name} — Tempeh cubes for Rishikesh cafes`,
      link: siteUrl,
      description: siteDescription,
      guid: `${siteUrl}/#home`,
      category: "Home",
    },
    ...products.map((product) => ({
      title: `${product.name} — ${brand.name}`,
      link: pageUrl(`/collection/${product.slug}`),
      description: `${product.blurb} ${product.story}`,
      guid: pageUrl(`/collection/${product.slug}`),
      category: product.category,
    })),
    {
      title: "Why tempeh works for Rishikesh cafes",
      link: pageUrl("/tempeh"),
      description: tempehGuide.intro,
      guid: pageUrl("/tempeh"),
      category: "Guide",
    },
    {
      title: "Buy tempeh in Rishikesh — Cafe wholesale guide",
      link: pageUrl("/guide/tempeh-rishikesh"),
      description:
        "Complete 2,000-word guide to buying soy tempeh cubes in Rishikesh for cafes: nutrition, cooking, wholesale ordering, Tapovan to Ram Jhula drops.",
      guid: pageUrl("/guide/tempeh-rishikesh"),
      category: "Guide",
    },
    {
      title: "Buy tempeh in Rishikesh",
      link: pageUrl("/buy-tempeh/rishikesh"),
      description: "Satvik Way vacuum-packed soy tempeh cubes for Rishikesh cafes. Weekly drops Tapovan to Ram Jhula.",
      guid: pageUrl("/buy-tempeh/rishikesh"),
      category: "Local",
    },
    {
      title: "Buy tempeh in Dehradun",
      link: pageUrl("/buy-tempeh/dehradun"),
      description: "Order Satvik Way tempeh for Dehradun cafes and kitchens on WhatsApp.",
      guid: pageUrl("/buy-tempeh/dehradun"),
      category: "Local",
    },
    {
      title: "Buy tempeh in Haridwar",
      link: pageUrl("/buy-tempeh/haridwar"),
      description: "Vegetarian cafe tempeh supply for Haridwar — Satvik Way soy cubes.",
      guid: pageUrl("/buy-tempeh/haridwar"),
      category: "Local",
    },
    {
      title: "Buy tempeh in Uttarakhand",
      link: pageUrl("/buy-tempeh/uttarakhand"),
      description: "Uttarakhand wholesale tempeh cubes for cafes — Rishikesh, Dehradun, Haridwar.",
      guid: pageUrl("/buy-tempeh/uttarakhand"),
      category: "Local",
    },
    {
      title: "Gucchi mushroom (Gucci) — seasonal morels",
      link: pageUrl("/gucchi-mushroom"),
      description:
        "Buy Gucchi / Gucci mushroom when seasonal stock allows. Himalayan morels for Uttarakhand cafes — WhatsApp for rate.",
      guid: pageUrl("/gucchi-mushroom"),
      category: "Product",
    },
    {
      title: `About ${brand.name}`,
      link: pageUrl("/story"),
      description: `${brand.name} supplies vacuum-packed soy tempeh cubes to Rishikesh cafes. Not a cafe — a weekly kitchen supplier.`,
      guid: pageUrl("/story"),
      category: "About",
    },
    {
      title: "Order Satvik Way tempeh on WhatsApp",
      link: pageUrl("/contact"),
      description: `Order cafe tempeh lots via WhatsApp Supply Lead ${team.supply.display}.`,
      guid: pageUrl("/contact"),
      category: "Order",
    },
    ...siteFaqs.map((faq) => ({
      title: faq.q,
      link: `${siteUrl}/#faq`,
      description: faq.a,
      guid: `${siteUrl}/#faq-${encodeURIComponent(faq.q)}`,
      category: "FAQ",
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(brand.name)} — Rishikesh tempeh cafe supply</title>
    <link>${escapeXml(siteUrl)}</link>
    <description>${escapeXml(siteDescription)}</description>
    <language>en-in</language>
    <lastBuildDate>${now}</lastBuildDate>
    <managingEditor>${escapeXml(team.supply.display)} (${escapeXml(brand.name)} Supply)</managingEditor>
    <atom:link href="${escapeXml(pageUrl("/feed.xml"))}" rel="self" type="application/rss+xml"/>
    <image>
      <url>${escapeXml(pageUrl("/products/soy-1.jpg"))}</url>
      <title>${escapeXml(brand.name)}</title>
      <link>${escapeXml(siteUrl)}</link>
    </image>
    ${items
      .map(
        (item) => `<item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.link)}</link>
      <guid isPermaLink="false">${escapeXml(item.guid)}</guid>
      <category>${escapeXml(item.category)}</category>
      <pubDate>${now}</pubDate>
      <description>${escapeXml(item.description)}</description>
      <content:encoded><![CDATA[<p>${item.description}</p><p><a href="${item.link}">Read more on ${brand.name}</a></p>]]></content:encoded>
    </item>`,
      )
      .join("\n    ")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
