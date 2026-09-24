import Link from "next/link";
import { notFound } from "next/navigation";
import { InternalLinks } from "@/components/internal-links";
import { JsonLd } from "@/components/json-ld";
import { ProductImage } from "@/components/product-image";
import { brand, team } from "@/lib/brand";
import { images, products } from "@/lib/products";
import {
  getTempehLocation,
  tempehLocations,
  tempehLocationSlugs,
} from "@/lib/seo-locations";
import {
  absoluteImage,
  breadcrumbJsonLd,
  pageMeta,
  pageUrl,
} from "@/lib/seo";
import { supplyWa } from "@/lib/whatsapp";

export function generateStaticParams() {
  return tempehLocationSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getTempehLocation(slug);
  if (!loc) return { title: "Buy tempeh" };
  return pageMeta({
    title: loc.title,
    description: loc.description,
    path: loc.path,
    image: images.cooked,
  });
}

export default async function BuyTempehLocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getTempehLocation(slug);
  if (!loc) notFound();

  const others = tempehLocations.filter((item) => item.slug !== loc.slug);
  const waMsg = `Satvik Way — buy tempeh in ${loc.name}. Cafe order enquiry.`;

  return (
    <div className="bg-ivory">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Buy tempeh", path: "/buy-tempeh/uttarakhand" },
          { name: loc.name, path: loc.path },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${pageUrl(loc.path)}#webpage`,
          name: loc.title,
          description: loc.description,
          url: pageUrl(loc.path),
          about: {
            "@type": "Product",
            name: "Soy Tempeh Cubes",
            brand: brand.name,
          },
          speaksAbout: loc.keyword,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: loc.faqs.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: `${brand.name} — ${loc.name}`,
          description: loc.intro,
          url: pageUrl(loc.path),
          telephone: team.supply.display,
          image: absoluteImage(images.cooked),
          areaServed: {
            "@type": "Place",
            name: loc.regionLabel,
          },
          ...(loc.geo
            ? {
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: loc.geo.lat,
                  longitude: loc.geo.lng,
                },
              }
            : {}),
          address: {
            "@type": "PostalAddress",
            addressLocality: loc.slug === "uttarakhand" ? "Rishikesh" : loc.name,
            addressRegion: "Uttarakhand",
            addressCountry: "IN",
          },
        }}
      />

      <header className="border-b border-parchment bg-cream px-4 py-12 md:px-8">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted">
            <Link href="/" className="hover:text-espresso">
              Home
            </Link>
            {" / "}
            <Link href="/buy-tempeh/uttarakhand" className="hover:text-espresso">
              Buy tempeh
            </Link>
            {" / "}
            <span className="text-espresso">{loc.name}</span>
          </nav>
          <p className="sub-title text-sm">Cafe wholesale · {loc.regionLabel}</p>
          <h1 className="font-display mt-2 text-4xl font-semibold uppercase leading-tight sm:text-5xl">
            {loc.h1}
          </h1>
          <p className="mt-4 text-base leading-8 text-muted sm:text-lg">{loc.intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={supplyWa(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-btn"
            >
              WhatsApp to buy
            </a>
            <Link href="/collection" className="theme-btn-two">
              See packs
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1fr_280px] md:px-8">
        <article>
          <div className="relative mb-10 aspect-[16/9] overflow-hidden bg-white">
            <ProductImage
              src={images.cooked}
              alt={`Satvik Way tempeh — buy tempeh in ${loc.name}`}
              priority
              sizes="(min-width: 768px) 70vw, 100vw"
            />
          </div>

          {loc.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="mt-5 text-[15px] leading-8 text-muted sm:text-base">
              {p}
            </p>
          ))}

          <section className="mt-10 border border-parchment bg-white p-6">
            <h2 className="font-display text-2xl font-semibold uppercase">
              Areas we talk about in {loc.name}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {loc.areas.map((area) => (
                <li
                  key={area}
                  className="border border-parchment bg-cream px-3 py-1 text-sm text-espresso"
                >
                  {area}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-2xl font-semibold uppercase">Products to order</h2>
            <ul className="mt-4 space-y-3">
              {products.map((product) => (
                <li key={product.slug} className="border border-parchment bg-white p-4">
                  <Link
                    href={`/collection/${product.slug}`}
                    className="font-display text-lg font-semibold uppercase text-espresso hover:underline"
                  >
                    {product.name}
                  </Link>
                  <p className="mt-1 text-sm text-muted">
                    {product.price} · {product.weight} — {product.blurb}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10" id="faq">
            <h2 className="font-display text-2xl font-semibold uppercase">
              FAQ — {loc.keyword}
            </h2>
            <div className="mt-4 space-y-3">
              {loc.faqs.map((item) => (
                <div key={item.q} className="border border-parchment bg-white p-5">
                  <h3 className="font-semibold text-espresso">{item.q}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 border-t border-parchment pt-8">
            <h2 className="font-display text-2xl font-semibold uppercase">
              Buy tempeh in other cities
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={item.path}
                    className="block border border-parchment bg-white p-4 font-semibold text-espresso hover:border-leaf"
                  >
                    {item.h1}
                    <span className="mt-1 block text-xs font-normal text-muted">
                      {item.regionLabel}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/gucchi-mushroom"
                  className="block border border-parchment bg-white p-4 font-semibold text-espresso hover:border-leaf"
                >
                  Gucchi mushroom (Gucci)
                  <span className="mt-1 block text-xs font-normal text-muted">
                    Seasonal morels · WhatsApp stock
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/guide/tempeh-rishikesh"
                  className="block border border-parchment bg-white p-4 font-semibold text-espresso hover:border-leaf"
                >
                  Full Rishikesh tempeh guide
                  <span className="mt-1 block text-xs font-normal text-muted">
                    ~2,000-word cafe pillar
                  </span>
                </Link>
              </li>
            </ul>
          </section>
        </article>

        <aside>
          <div className="sticky top-28 space-y-4 border border-parchment bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-gold">Order now</p>
            <p className="text-sm leading-6 text-muted">
              WhatsApp {team.supply.display} to {loc.keyword}.
            </p>
            <a
              href={supplyWa(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-btn w-full justify-center"
            >
              WhatsApp
            </a>
            <Link href="/contact" className="theme-btn-two w-full justify-center">
              Order form
            </Link>
            <Link href="/tempeh" className="block text-sm font-semibold text-clay hover:underline">
              Why tempeh →
            </Link>
          </div>
        </aside>
      </div>

      <InternalLinks exclude={[loc.path]} title="More Satvik Way pages" />
    </div>
  );
}
