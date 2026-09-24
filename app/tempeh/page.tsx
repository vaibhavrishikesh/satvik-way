import Link from "next/link";
import { InternalLinks } from "@/components/internal-links";
import { JsonLd } from "@/components/json-ld";
import { ProductImage } from "@/components/product-image";
import { TempehGuide } from "@/components/tempeh-guide";
import { images, products } from "@/lib/products";
import {
  articleGuideJsonLd,
  breadcrumbJsonLd,
  howToCookJsonLd,
  pageMeta,
} from "@/lib/seo";

export const metadata = pageMeta({
  title: "What is tempeh?",
  description:
    "A simple guide to tempeh for cafe guests: protein, gut health, how it is made, and how kitchens in Rishikesh cook Satvik Way soy cubes.",
  path: "/tempeh",
});

export default function TempehPage() {
  return (
    <div className="bg-ivory px-4 py-12 md:px-8">
      <JsonLd data={articleGuideJsonLd()} />
      <JsonLd data={howToCookJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Why tempeh", path: "/tempeh" },
        ])}
      />
      <nav aria-label="Breadcrumb" className="mx-auto mb-6 max-w-3xl text-xs text-muted">
        <Link href="/" className="hover:text-espresso">
          Home
        </Link>
        {" / "}
        <span className="text-espresso">Why tempeh</span>
      </nav>
      <div className="mx-auto mb-10 grid max-w-3xl gap-3 sm:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden bg-white">
          <ProductImage src={images.cooked} alt="Cooked Satvik Way tempeh slabs" priority sizes="50vw" />
        </div>
        <div className="relative aspect-[4/5] overflow-hidden bg-white">
          <ProductImage src={images.zip} alt="Fresh Satvik Way tempeh bag" sizes="50vw" />
        </div>
      </div>
      <TempehGuide />
      <div className="mx-auto mt-10 max-w-3xl">
        <h2 className="font-display text-2xl font-semibold uppercase">Shop these packs</h2>
        <ul className="mt-4 space-y-2 text-sm">
          {products.map((product) => (
            <li key={product.slug}>
              <Link
                href={`/collection/${product.slug}`}
                className="font-semibold text-espresso underline-offset-2 hover:underline"
              >
                {product.name}
              </Link>
              <span className="text-muted"> — {product.blurb}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-14 flex max-w-3xl flex-wrap gap-3">
        <Link href="/collection" className="theme-btn">
          Shop tempeh
        </Link>
        <Link href="/contact" className="theme-btn-two">
          Order for your cafe
        </Link>
        <Link
          href="/guide/tempeh-rishikesh"
          className="text-sm font-semibold uppercase text-clay underline-offset-2 hover:underline"
        >
          Full 2,000-word Rishikesh guide
        </Link>
        <Link href="/story" className="text-sm font-semibold uppercase text-clay underline-offset-2 hover:underline">
          About Satvik Way
        </Link>
      </div>
      <div className="mx-auto mt-16 max-w-7xl">
        <InternalLinks compact exclude={["/tempeh"]} title="Related cafe supply pages" />
      </div>
    </div>
  );
}
