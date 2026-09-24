import Link from "next/link";
import { ProductImage } from "@/components/product-image";
import { TempehGuide } from "@/components/tempeh-guide";
import { images } from "@/lib/products";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "What is tempeh?",
  description:
    "A simple guide to tempeh for cafe guests: protein, gut health, how it is made, and how kitchens in Rishikesh cook it.",
  path: "/tempeh",
});

export default function TempehPage() {
  return (
    <div className="bg-ivory px-4 py-12 md:px-8">
      <div className="mx-auto mb-10 grid max-w-3xl gap-3 sm:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden bg-white">
          <ProductImage src={images.cooked} alt="Cooked Satvik Way tempeh slabs" priority sizes="50vw" />
        </div>
        <div className="relative aspect-[4/5] overflow-hidden bg-white">
          <ProductImage src={images.zip} alt="Fresh Satvik Way tempeh bag" sizes="50vw" />
        </div>
      </div>
      <TempehGuide />
      <div className="mx-auto mt-14 flex max-w-3xl flex-wrap gap-3">
        <Link href="/collection" className="theme-btn">
          Shop tempeh
        </Link>
        <Link href="/contact" className="theme-btn-two">
          Order for your cafe
        </Link>
      </div>
    </div>
  );
}
