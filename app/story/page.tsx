import Link from "next/link";
import { ProductImage } from "@/components/product-image";
import { brand } from "@/lib/brand";
import { images } from "@/lib/products";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About the supply",
  description:
    "Satvik Way is a Rishikesh tempeh supplier — not a cafe. Vacuum-packed cubes for cafe kitchens, ordered on WhatsApp.",
  path: "/story",
  image: images.cooked,
});

export default function StoryPage() {
  return (
    <div className="bg-ivory">
      <section className="bg-cream px-4 py-14 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="sub-title">About</p>
            <h1 className="font-display mt-2 text-5xl font-semibold uppercase">
              A supplier, not a cafe
            </h1>
            <p className="mt-4 max-w-md leading-8 text-muted">
              {brand.name} started because fresh tempeh is still rare on the Rishikesh
              market. Cafes ask. We ferment, cube, pack, and drop.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden bg-white">
            <ProductImage src={images.cooked} alt="Cooked Satvik Way tempeh slabs" priority sizes="50vw" />
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-16 md:px-8">
        <p className="text-lg leading-8 text-muted">
          We do not run a restaurant. We supply vacuum-packed tempeh cubes to kitchens
          from Tapovan to Ram Jhula. The chef finishes the plate. The guest sees your
          menu, not ours.
        </p>
        <p className="mt-6 leading-8 text-muted">
          Orders come through this site and WhatsApp. Supply Lead handles lots and
          drops. The Chief Coordinator handles accounts and new cafe lines.
        </p>
        <blockquote className="my-10 bg-cream p-6 font-display text-3xl font-semibold uppercase leading-snug">
          Rare here. Fresh when you need it. Ordered in a message.
        </blockquote>
        <p className="leading-8 text-muted">
          If you cook for yogis, send this week’s list. We reply with rates and a drop
          time.
        </p>
        <Link href="/contact" className="theme-btn mt-8">
          Order for your cafe
        </Link>
      </article>
    </div>
  );
}
