import Link from "next/link";
import { InternalLinks } from "@/components/internal-links";
import { JsonLd } from "@/components/json-ld";
import { ProductImage } from "@/components/product-image";
import { brand } from "@/lib/brand";
import { images, products } from "@/lib/products";
import { breadcrumbJsonLd, pageMeta, pageUrl } from "@/lib/seo";

const storyDescription =
  "Satvik Way is a Rishikesh tempeh supplier — not a cafe. Vacuum-packed cubes for cafe kitchens, ordered on WhatsApp.";

export const metadata = pageMeta({
  title: "About the supply",
  description: storyDescription,
  path: "/story",
  image: images.cooked,
});

export default function StoryPage() {
  return (
    <div className="bg-ivory">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/story" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: `About ${brand.name}`,
          description: storyDescription,
          url: pageUrl("/story"),
          mainEntity: {
            "@type": "Organization",
            name: brand.name,
            description: brand.tagline,
          },
        }}
      />
      <section className="bg-cream px-4 py-14 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted">
              <Link href="/" className="hover:text-espresso">
                Home
              </Link>
              {" / "}
              <span className="text-espresso">About</span>
            </nav>
            <p className="sub-title">About</p>
            <h1 className="font-display mt-2 text-5xl font-semibold uppercase">
              A supplier, not a cafe
            </h1>
            <p className="mt-4 max-w-md leading-8 text-muted">
              {brand.name} started because fresh tempeh is still rare on the Rishikesh market. Cafes
              ask. We ferment, cube, pack, and drop. See our{" "}
              <Link href="/collection" className="font-semibold text-espresso underline-offset-2 hover:underline">
                tempeh packs
              </Link>{" "}
              or the{" "}
              <Link href="/tempeh" className="font-semibold text-espresso underline-offset-2 hover:underline">
                nutrition guide
              </Link>
              .
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden bg-white">
            <ProductImage src={images.cooked} alt="Cooked Satvik Way tempeh slabs" priority sizes="50vw" />
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-16 md:px-8">
        <p className="text-lg leading-8 text-muted">
          We do not run a restaurant. We supply vacuum-packed tempeh cubes to kitchens from Tapovan
          to Ram Jhula. The chef finishes the plate. The guest sees your menu, not ours.
        </p>
        <p className="mt-6 leading-8 text-muted">
          Orders come through this site and WhatsApp. Supply Lead handles lots and drops. The Chief
          Coordinator handles accounts and new cafe lines.{" "}
          <Link href="/contact" className="font-semibold text-espresso underline-offset-2 hover:underline">
            Start an order
          </Link>
          .
        </p>
        <blockquote className="my-10 bg-cream p-6 font-display text-3xl font-semibold uppercase leading-snug">
          Rare here. Fresh when you need it. Ordered in a message.
        </blockquote>
        <p className="leading-8 text-muted">
          If you cook for yogis, send this week’s list. We reply with rates and a drop time. Popular
          SKUs:{" "}
          {products.map((p, i) => (
            <span key={p.slug}>
              {i > 0 ? ", " : null}
              <Link
                href={`/collection/${p.slug}`}
                className="font-semibold text-espresso underline-offset-2 hover:underline"
              >
                {p.name}
              </Link>
            </span>
          ))}
          .
        </p>
        <Link href="/contact" className="theme-btn mt-8">
          Order for your cafe
        </Link>
      </article>
      <InternalLinks exclude={["/story"]} />
    </div>
  );
}
