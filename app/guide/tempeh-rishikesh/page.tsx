import Link from "next/link";
import { InternalLinks } from "@/components/internal-links";
import { JsonLd } from "@/components/json-ld";
import { ProductImage } from "@/components/product-image";
import { brand, team } from "@/lib/brand";
import { images, products } from "@/lib/products";
import {
  pillarClosing,
  pillarFaqs,
  pillarMeta,
  pillarPath,
  pillarSections,
  pillarToc,
} from "@/lib/seo-pillar";
import {
  absoluteImage,
  breadcrumbJsonLd,
  pageMeta,
  pageUrl,
  siteUrl,
} from "@/lib/seo";

export const metadata = pageMeta({
  title: pillarMeta.title,
  description: pillarMeta.description,
  path: pillarPath,
  image: images.cooked,
});

function articleJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl(pillarPath)}#article`,
    headline: pillarMeta.title,
    description: pillarMeta.description,
    image: [absoluteImage(images.cooked), absoluteImage(images.promo2)],
    author: { "@type": "Organization", name: brand.name, url: siteUrl },
    publisher: {
      "@type": "Organization",
      name: brand.name,
      logo: { "@type": "ImageObject", url: pageUrl("/apple-icon") },
    },
    mainEntityOfPage: pageUrl(pillarPath),
    datePublished: "2026-09-24",
    dateModified: "2026-09-24",
    inLanguage: "en-IN",
    about: [
      "tempeh",
      "tempeh Rishikesh",
      "cafe wholesale",
      "soy tempeh cubes",
      "Tapovan",
      "Laxman Jhula",
      "Ram Jhula",
    ],
    keywords:
      "buy tempeh Rishikesh, tempeh wholesale Uttarakhand, cafe tempeh supplier, soy tempeh cubes, Tapovan cafe supply",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "article h2", "#faq"],
    },
    wordCount: 2000,
  };
}

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl(pillarPath)}#faq`,
    mainEntity: pillarFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export default function TempehRishikeshGuidePage() {
  return (
    <div className="bg-ivory">
      <JsonLd data={articleJsonLd()} />
      <JsonLd data={faqJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: pillarPath },
          { name: "Tempeh Rishikesh", path: pillarPath },
        ])}
      />

      <header className="border-b border-parchment bg-cream px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted">
              <Link href="/" className="hover:text-espresso">
                Home
              </Link>
              {" / "}
              <span className="text-espresso">Guide</span>
              {" / "}
              <span className="text-espresso">Tempeh Rishikesh</span>
            </nav>
            <p className="sub-title text-sm">~2,000-word cafe guide</p>
            <h1 className="font-display mt-2 text-4xl font-semibold uppercase leading-tight sm:text-5xl md:text-6xl">
              Buy tempeh in Rishikesh
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Wholesale soy tempeh cubes for cafes — nutrition, cooking, menu ideas, and how{" "}
              {brand.name} drops weekly from Tapovan to Laxman Jhula and Ram Jhula.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/collection" className="theme-btn">
                Shop packs
              </Link>
              <Link href="/contact" className="theme-btn-two">
                WhatsApp order
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-white">
            <ProductImage
              src={images.cooked}
              alt="Cooked Satvik Way tempeh for Rishikesh cafes"
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[220px_1fr] md:px-8 lg:grid-cols-[240px_1fr_220px]">
        <aside className="hidden md:block">
          <nav
            aria-label="On this page"
            className="sticky top-28 border border-parchment bg-white p-4 text-sm"
          >
            <p className="font-semibold uppercase tracking-wide text-gold">Contents</p>
            <ol className="mt-3 space-y-2">
              {pillarToc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-muted hover:text-espresso">
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <article className="min-w-0">
          <nav aria-label="On this page" className="mb-10 border border-parchment bg-white p-4 md:hidden">
            <p className="text-sm font-semibold uppercase tracking-wide text-gold">Contents</p>
            <ol className="mt-3 columns-1 gap-4 space-y-2 text-sm sm:columns-2">
              {pillarToc.map((item) => (
                <li key={item.id} className="break-inside-avoid">
                  <a href={`#${item.id}`} className="text-muted hover:text-espresso">
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {pillarSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28 border-b border-parchment py-10">
              <h2 className="font-display text-2xl font-semibold uppercase sm:text-3xl">
                {section.heading}
              </h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 48)} className="mt-4 text-[15px] leading-8 text-muted sm:text-base">
                  {p}
                </p>
              ))}
            </section>
          ))}

          <section id="faq" className="scroll-mt-28 py-10" itemScope itemType="https://schema.org/FAQPage">
            <h2 className="font-display text-2xl font-semibold uppercase sm:text-3xl">
              FAQ — tempeh in Rishikesh
            </h2>
            <div className="mt-6 space-y-4">
              {pillarFaqs.map((item) => (
                <div
                  key={item.q}
                  className="border border-parchment bg-white p-5"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <h3 className="font-semibold text-espresso" itemProp="name">
                    {item.q}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-7 text-muted"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <span itemProp="text">{item.a}</span>
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="border-t border-parchment py-10">
            {pillarClosing.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 text-[15px] leading-8 text-muted sm:text-base">
                {p}
              </p>
            ))}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/collection/classic-soy-tempeh" className="theme-btn">
                Soy Tempeh Cubes
              </Link>
              <Link href="/collection/cafe-tempeh-lot" className="theme-btn-two">
                Cafe Lot
              </Link>
              <Link href="/tempeh" className="text-sm font-semibold uppercase text-clay underline-offset-2 hover:underline">
                Short tempeh guide
              </Link>
            </div>
          </section>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-4">
            <div className="border border-parchment bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold">Shop</p>
              <ul className="mt-3 space-y-3 text-sm">
                {products.map((product) => (
                  <li key={product.slug}>
                    <Link
                      href={`/collection/${product.slug}`}
                      className="font-semibold text-espresso hover:underline"
                    >
                      {product.name}
                    </Link>
                    <p className="text-xs text-muted">
                      {product.price} · {product.weight}
                    </p>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="theme-btn mt-4 w-full justify-center text-center">
                Order
              </Link>
              <p className="mt-3 text-xs text-muted">WhatsApp {team.supply.display}</p>
            </div>
            <div className="relative aspect-square overflow-hidden bg-white">
              <ProductImage src={images.promo2} alt="Raw Satvik Way tempeh" sizes="220px" />
            </div>
            <div className="border border-parchment bg-white p-4 text-sm">
              <p className="font-semibold uppercase text-gold">Also read</p>
              <ul className="mt-2 space-y-2 text-muted">
                <li>
                  <Link href="/tempeh" className="hover:text-espresso">
                    Why tempeh
                  </Link>
                </li>
                <li>
                  <Link href="/story" className="hover:text-espresso">
                    About Satvik Way
                  </Link>
                </li>
                <li>
                  <Link href="/collection" className="hover:text-espresso">
                    All products
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>

      <InternalLinks exclude={[pillarPath]} title="More Satvik Way pages" />
    </div>
  );
}
