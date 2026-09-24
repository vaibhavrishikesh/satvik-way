import Link from "next/link";
import { InternalLinks } from "@/components/internal-links";
import { JsonLd } from "@/components/json-ld";
import { ProductImage } from "@/components/product-image";
import { brand, team } from "@/lib/brand";
import { images } from "@/lib/products";
import {
  gucchiFaqs,
  gucchiMeta,
  gucchiPath,
  gucchiSections,
} from "@/lib/seo-gucchi";
import { tempehLocations } from "@/lib/seo-locations";
import {
  absoluteImage,
  breadcrumbJsonLd,
  pageMeta,
  pageUrl,
} from "@/lib/seo";
import { supplyWa } from "@/lib/whatsapp";

export const metadata = pageMeta({
  title: gucchiMeta.title,
  description: gucchiMeta.description,
  path: gucchiPath,
  image: images.promo2,
});

const waMsg = "Satvik Way — Gucchi / Gucci mushroom enquiry (seasonal stock & rate)";

export default function GucchiMushroomPage() {
  return (
    <div className="bg-ivory">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gucchi mushroom", path: gucchiPath },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Gucchi Mushroom (Himalayan Morel)",
          alternateName: ["Gucci mushroom", "Gucchi", "Morel mushroom"],
          description: gucchiMeta.description,
          brand: { "@type": "Brand", name: brand.name },
          category: "Food › Mushrooms › Morel",
          image: absoluteImage(images.promo2),
          offers: {
            "@type": "Offer",
            url: pageUrl(gucchiPath),
            priceCurrency: "INR",
            availability: "https://schema.org/LimitedAvailability",
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "INR",
              description: "Seasonal — ask on WhatsApp for current Gucchi rate",
            },
            seller: { "@type": "Organization", name: brand.name },
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: gucchiFaqs.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }}
      />

      <header className="border-b border-parchment bg-cream px-4 py-12 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-end">
          <div>
            <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted">
              <Link href="/" className="hover:text-espresso">
                Home
              </Link>
              {" / "}
              <span className="text-espresso">Gucchi mushroom</span>
            </nav>
            <p className="sub-title text-sm">Seasonal · Himalayan morel</p>
            <h1 className="font-display mt-2 text-4xl font-semibold uppercase leading-tight sm:text-5xl">
              Gucchi mushroom
              <span className="mt-1 block text-gold">Gucci / morel for cafes</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-8 text-muted">
              Buy Gucchi (Gucci) mushroom when seasonal stock is available — WhatsApp{" "}
              {brand.name} for rate and Uttarakhand cafe delivery with our tempeh line.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={supplyWa(waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-btn"
              >
                WhatsApp Gucchi stock
              </a>
              <Link href="/collection" className="theme-btn-two">
                Shop tempeh cubes
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-white">
            <ProductImage
              src={images.promo2}
              alt="Satvik Way — enquire for Gucchi mushroom supply"
              priority
              sizes="(min-width: 768px) 45vw, 100vw"
            />
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-4 py-12 md:px-8">
        {gucchiSections.map((section) => (
          <section key={section.id} id={section.id} className="border-b border-parchment py-8">
            <h2 className="font-display text-2xl font-semibold uppercase sm:text-3xl">
              {section.heading}
            </h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 36)} className="mt-4 text-[15px] leading-8 text-muted sm:text-base">
                {p}
              </p>
            ))}
          </section>
        ))}

        <section id="faq" className="py-8">
          <h2 className="font-display text-2xl font-semibold uppercase">Gucchi FAQ</h2>
          <div className="mt-4 space-y-3">
            {gucchiFaqs.map((item) => (
              <div key={item.q} className="border border-parchment bg-white p-5">
                <h3 className="font-semibold text-espresso">{item.q}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-parchment py-8">
          <h2 className="font-display text-2xl font-semibold uppercase">Also buy tempeh</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {tempehLocations.map((loc) => (
              <li key={loc.slug}>
                <Link
                  href={loc.path}
                  className="block border border-parchment bg-white p-4 font-semibold text-espresso hover:border-leaf"
                >
                  {loc.h1}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Supply Lead {team.supply.display} · seasonal Gucchi + weekly tempeh
          </p>
        </section>
      </article>

      <InternalLinks exclude={[gucchiPath]} title="Explore Satvik Way" />
    </div>
  );
}
