import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { InternalLinks } from "@/components/internal-links";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { ProductImage } from "@/components/product-image";
import { PromoNutritionCard } from "@/components/promo-nutrition-card";
import { images, packShots, products, promos } from "@/lib/products";
import { homeGraphJsonLd } from "@/lib/seo";

const featured = products.filter((item) => item.featured);

export default function Home() {
  return (
    <>
      <JsonLd data={homeGraphJsonLd()} />

      <section className="soy-leaf-pattern overflow-x-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:gap-10 sm:py-14 md:grid-cols-2 md:gap-12 md:px-8 md:py-20">
          <div className="hero-text-shadow order-1">
            <p className="sub-title text-xs tracking-[0.18em] sm:text-sm">Rishikesh cafe supply</p>
            <h1 className="hero-title-shadow font-display mt-3 text-[2.35rem] font-semibold uppercase leading-[1.05] sm:mt-4 sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              Satvik Way
              <span className="mt-1 block text-gold sm:mt-2">tempeh for cafes</span>
            </h1>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
              Vacuum-packed raw{" "}
              <Link href="/tempeh" className="font-semibold text-espresso underline-offset-2 hover:underline">
                soy tempeh cubes
              </Link>
              . Fermented here. Dropped weekly from Tapovan to Ram Jhula. See{" "}
              <Link href="/collection" className="font-semibold text-espresso underline-offset-2 hover:underline">
                all packs
              </Link>{" "}
              or{" "}
              <Link href="/story" className="font-semibold text-espresso underline-offset-2 hover:underline">
                how we supply cafes
              </Link>
              .
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Link href="/collection" className="theme-btn w-full justify-center sm:w-auto">
                Shop packs
              </Link>
              <Link href="/contact" className="theme-btn-two w-full justify-center sm:w-auto">
                WhatsApp order
              </Link>
            </div>
            <dl className="mt-8 grid max-w-lg grid-cols-3 gap-3 border-t border-parchment pt-5 sm:mt-10 sm:gap-6 sm:pt-6">
              {[
                ["Raw cubes", "Vacuum sealed"],
                ["Cafe lots", "Weekly drop"],
                ["Order", "WhatsApp"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-[10px] font-semibold uppercase tracking-wide text-gold sm:text-xs">
                    {label}
                  </dt>
                  <dd className="mt-1 text-[11px] text-muted sm:text-sm">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Mobile: single row of 3 equal shots. Desktop: main + stacked pair */}
          <div className="order-2 w-full min-w-0">
            <div className="grid grid-cols-3 gap-2 sm:hidden">
              {packShots.map((shot) => (
                <div key={shot.src} className="relative aspect-square overflow-hidden bg-cream">
                  <ProductImage src={shot.src} alt={shot.alt} sizes="33vw" className="object-cover" />
                </div>
              ))}
            </div>
            <div className="relative hidden aspect-square w-full sm:block">
              <div className="absolute inset-0 grid grid-cols-[1.35fr_1fr] gap-2 md:gap-3">
                <div className="relative overflow-hidden bg-cream">
                  <ProductImage
                    src={packShots[0].src}
                    alt={packShots[0].alt}
                    priority
                    sizes="(min-width: 768px) 35vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="grid min-h-0 grid-rows-2 gap-2 md:gap-3">
                  <div className="relative min-h-0 overflow-hidden bg-cream">
                    <ProductImage
                      src={packShots[1].src}
                      alt={packShots[1].alt}
                      sizes="(min-width: 768px) 22vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative min-h-0 overflow-hidden bg-cream">
                    <ProductImage
                      src={packShots[2].src}
                      alt={packShots[2].alt}
                      sizes="(min-width: 768px) 22vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pack-shots" className="mx-auto max-w-7xl px-4 py-12 sm:py-16 md:px-8">
        <p className="sub-title text-center text-sm sm:text-base">Pack shots</p>
        <h2 className="font-display mt-2 text-center text-3xl font-semibold uppercase sm:text-4xl">
          3 angles of the pack
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3">
          {packShots.map((shot, i) => (
            <div key={shot.src} className="overflow-hidden bg-cream">
              <div className="relative aspect-square">
                <ProductImage src={shot.src} alt={shot.alt} sizes="(min-width: 640px) 33vw, 100vw" />
              </div>
              <p className="px-3 py-3 text-center text-xs font-semibold uppercase tracking-wide text-gold">
                Angle {i + 1}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="promo" className="mx-auto max-w-7xl px-4 py-12 sm:py-16 md:px-8">
        <p className="sub-title text-center text-sm sm:text-base">Promo</p>
        <h2 className="font-display mt-2 text-center text-3xl font-semibold uppercase sm:text-4xl">
          Cooked plate and raw packs
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm text-muted">
          Tap <span className="font-semibold text-espresso">Nutrition</span> on any photo for macros and health benefits.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3">
          {promos.map((promo) => (
            <PromoNutritionCard key={promo.src} promo={promo} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16 md:px-8">
        <div className="mb-8 sm:mb-10 md:flex md:items-end md:justify-between">
          <div>
            <p className="sub-title text-sm sm:text-base">For cafe kitchens</p>
            <h2 className="font-display mt-2 text-3xl font-semibold uppercase sm:text-4xl">
              What we supply
            </h2>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted sm:text-base md:mt-0">
            Only tempeh cubes — the pack Rishikesh cafes actually order. Two SKUs: soy cubes and weekly
            cafe lots.
          </p>
        </div>
        <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
          {[
            ["Tempeh cubes", "Raw, vacuum packed, ready for the pan."],
            ["Cafe lots", "Weekly cases. Rate on WhatsApp."],
            ["Rishikesh drop", "Tapovan, Laxman Jhula, Ram Jhula."],
          ].map(([title, copy]) => (
            <div key={title} className="border border-parchment bg-white p-5 sm:p-6">
              <h3 className="font-display text-xl font-semibold uppercase sm:text-2xl">{title}</h3>
              <p className="mt-2 text-sm text-muted">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="soy-leaf-pattern-soft px-4 py-12 sm:py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2 md:gap-10">
          <div className="relative aspect-[4/5] overflow-hidden bg-white md:aspect-square">
            <ProductImage src={images.craft} alt="Satvik Way cafe lot tempeh cubes" sizes="(min-width: 768px) 45vw, 100vw" />
          </div>
          <div>
            <p className="sub-title text-sm sm:text-base">About the supply</p>
            <h2 className="font-display mt-2 text-3xl font-semibold uppercase sm:text-4xl">
              A Rishikesh supplier, not a cafe
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted sm:leading-8 sm:text-base">
              Cafes here still struggle to find fresh tempeh. We ferment, cube, pack, and drop. The chef
              finishes the plate. The guest sees your menu.
            </p>
            <Link href="/story" className="theme-btn-two mt-6 inline-flex">
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16 md:px-8">
        <p className="sub-title text-center text-sm sm:text-base">Popular with cafes</p>
        <h2 className="font-display mt-2 text-center text-3xl font-semibold uppercase sm:text-4xl">
          Satvik Way tempeh
        </h2>
        <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-forest px-4 py-12 text-white sm:py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <p className="text-sm text-orange-200">Food service</p>
            <h2 className="font-display mt-2 text-3xl font-semibold uppercase sm:text-4xl">
              Order for your cafe
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/80 sm:leading-8 sm:text-base">
              WhatsApp the week’s list. Supply Lead confirms packs and a drop time in Rishikesh.
            </p>
            <Link href="/contact" className="theme-btn mt-6 inline-flex w-full justify-center sm:w-auto">
              WhatsApp order
            </Link>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden bg-white">
            <ProductImage src={images.cooked} alt="Cooked Satvik Way tempeh slabs" sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-3xl px-4 py-12 sm:py-16 md:px-8" itemScope itemType="https://schema.org/FAQPage">
        <p className="sub-title text-center text-sm sm:text-base">FAQs</p>
        <h2 className="font-display mt-2 text-center text-3xl font-semibold uppercase sm:text-4xl">
          Questions, answered
        </h2>
        <div className="mt-6 sm:mt-8">
          <FaqList />
        </div>
        <p className="mt-6 text-center text-sm text-muted">
          More detail in our{" "}
          <Link href="/tempeh" className="font-semibold text-espresso underline-offset-2 hover:underline">
            tempeh guide
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-semibold text-espresso underline-offset-2 hover:underline">
            order on WhatsApp
          </Link>
          .
        </p>
      </section>

      <InternalLinks exclude={["/"]} />
    </>
  );
}
