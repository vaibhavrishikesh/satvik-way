import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { ProductCard } from "@/components/product-card";
import { ProductImage } from "@/components/product-image";
import { gallery, images, packShots, products, promos } from "@/lib/products";

const featured = products.filter((item) => item.featured);

export default function Home() {
  return (
    <>
      <section className="soy-leaf-pattern">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-12 md:gap-12 md:px-8 md:py-20">
          <div className="md:col-span-5">
            <p className="sub-title text-sm tracking-[0.18em]">Rishikesh cafe supply</p>
            <h1 className="font-display mt-4 text-5xl font-semibold uppercase leading-[1.05] md:text-6xl lg:text-[4.25rem]">
              Satvik Way
              <span className="mt-2 block text-gold">tempeh for cafes</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-8 text-muted md:text-lg">
              Vacuum-packed raw cubes. Fermented here. Dropped weekly from Tapovan to Ram Jhula.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/collection" className="theme-btn">
                Shop packs
              </Link>
              <Link href="/contact" className="theme-btn-two">
                WhatsApp order
              </Link>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-parchment pt-6">
              {[
                ["Raw cubes", "Vacuum sealed"],
                ["Cafe lots", "Weekly drop"],
                ["Order", "WhatsApp"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-gold">{label}</dt>
                  <dd className="mt-1 text-sm text-muted">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-12 items-stretch gap-3 md:gap-4">
              <div className="relative col-span-7 aspect-square overflow-hidden bg-cream">
                <ProductImage
                  src={packShots[0].src}
                  alt={packShots[0].alt}
                  priority
                  sizes="(min-width: 768px) 40vw, 70vw"
                  className="object-cover"
                />
              </div>
              <div className="col-span-5 grid grid-rows-2 gap-3 self-stretch md:gap-4">
                <div className="relative min-h-0 overflow-hidden bg-cream">
                  <ProductImage
                    src={packShots[1].src}
                    alt={packShots[1].alt}
                    sizes="(min-width: 768px) 25vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative min-h-0 overflow-hidden bg-cream">
                  <ProductImage
                    src={packShots[2].src}
                    alt={packShots[2].alt}
                    sizes="(min-width: 768px) 25vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pack-shots" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <p className="sub-title text-center">Pack shots</p>
        <h2 className="font-display mt-2 text-center text-4xl font-semibold uppercase">
          3 angles of the pack
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {packShots.map((shot, i) => (
            <div key={shot.src} className="overflow-hidden bg-cream">
              <div className="relative aspect-square">
                <ProductImage src={shot.src} alt={shot.alt} sizes="(min-width: 768px) 33vw, 100vw" />
              </div>
              <p className="px-3 py-3 text-center text-xs font-semibold uppercase tracking-wide text-gold">
                Angle {i + 1}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="promo" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <p className="sub-title text-center">Promo</p>
        <h2 className="font-display mt-2 text-center text-4xl font-semibold uppercase">
          Cooked plate and raw packs
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {promos.map((promo) => (
            <div key={promo.src} className="relative aspect-[3/4] overflow-hidden bg-white shadow-sm">
              <ProductImage src={promo.src} alt={promo.alt} sizes="(min-width: 768px) 33vw, 100vw" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <p className="sub-title text-center">From the set</p>
        <h2 className="font-display mt-2 text-center text-4xl font-semibold uppercase">Pack shots</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {gallery.slice(0, 3).map((shot) => (
            <div key={shot.src} className="relative aspect-[4/5] overflow-hidden bg-white">
              <ProductImage src={shot.src} alt={shot.alt} sizes="(min-width: 768px) 33vw, 50vw" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="mb-10 md:flex md:items-end md:justify-between">
          <div>
            <p className="sub-title">For cafe kitchens</p>
            <h2 className="font-display mt-2 text-4xl font-semibold uppercase">What we supply</h2>
          </div>
          <p className="mt-4 max-w-md text-muted md:mt-0">
            Only tempeh cubes — the pack Rishikesh cafes actually order. Two SKUs: soy cubes and weekly
            cafe lots.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Tempeh cubes", "Raw, vacuum packed, ready for the pan."],
            ["Cafe lots", "Weekly cases. Rate on WhatsApp."],
            ["Rishikesh drop", "Tapovan, Laxman Jhula, Ram Jhula."],
          ].map(([title, copy]) => (
            <div key={title} className="border border-parchment bg-white p-6">
              <h3 className="font-display text-2xl font-semibold uppercase">{title}</h3>
              <p className="mt-2 text-sm text-muted">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="soy-leaf-pattern-soft px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden bg-white">
              <ProductImage src={images.zip} alt="Satvik Way tempeh zip bag" sizes="50vw" />
            </div>
            <div className="relative aspect-square overflow-hidden bg-white">
              <ProductImage src={images.promo2} alt="Satvik Way raw tempeh slab" sizes="25vw" />
            </div>
            <div className="relative aspect-square overflow-hidden bg-white">
              <ProductImage src={images.craft} alt="Satvik Way cafe lot tempeh cubes" sizes="25vw" />
            </div>
          </div>
          <div>
            <p className="sub-title">About the supply</p>
            <h2 className="font-display mt-2 text-4xl font-semibold uppercase">
              A Rishikesh supplier, not a cafe
            </h2>
            <p className="mt-4 leading-8 text-muted">
              Cafes here still struggle to find fresh tempeh. We ferment, cube, pack, and drop. The chef
              finishes the plate. The guest sees your menu.
            </p>
            <Link href="/story" className="theme-btn-two mt-6">
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <p className="sub-title text-center">Popular with cafes</p>
        <h2 className="font-display mt-2 text-center text-4xl font-semibold uppercase">
          Satvik Way tempeh
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-forest px-4 py-16 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-orange-200">Food service</p>
            <h2 className="font-display mt-2 text-4xl font-semibold uppercase">Order for your cafe</h2>
            <p className="mt-4 max-w-md leading-8 text-white/80">
              WhatsApp the week’s list. Supply Lead confirms packs and a drop time in Rishikesh.
            </p>
            <Link href="/contact" className="theme-btn mt-6">
              WhatsApp order
            </Link>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden bg-white">
            <ProductImage src={images.cooked} alt="Cooked Satvik Way tempeh slabs" sizes="50vw" />
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-3xl px-4 py-16 md:px-8">
        <p className="sub-title text-center">FAQs</p>
        <h2 className="font-display mt-2 text-center text-4xl font-semibold uppercase">
          Questions, answered
        </h2>
        <div className="mt-8">
          <FaqList />
        </div>
      </section>
    </>
  );
}
