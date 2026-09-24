"use client";

import { useEffect, useId, useState } from "react";
import { ProductImage } from "@/components/product-image";
import { tempehGuide } from "@/lib/tempeh-guide";

export type PromoShot = {
  src: string;
  alt: string;
  title: string;
  benefit: string;
};

export function PromoNutritionCard({ promo }: { promo: PromoShot }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="group relative aspect-[3/4] overflow-hidden bg-white shadow-sm">
      <ProductImage src={promo.src} alt={promo.alt} sizes="(min-width: 640px) 33vw, 100vw" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-4 pt-16">
        <p className="font-display text-lg font-semibold uppercase tracking-wide text-white">{promo.title}</p>
        <p className="mt-1 text-xs text-white/85">{promo.benefit}</p>
      </div>

      <button
        type="button"
        className="absolute right-3 top-3 z-10 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-espresso shadow-md transition hover:bg-gold hover:text-white"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(true)}
      >
        Nutrition
      </button>

      {/* Desktop hover peek */}
      <div className="pointer-events-none absolute inset-0 hidden bg-espresso/80 p-5 opacity-0 transition group-hover:opacity-100 md:flex md:flex-col md:justify-end">
        <p className="font-display text-xl font-semibold uppercase text-white">{promo.title}</p>
        <p className="mt-2 text-sm leading-6 text-white/85">{promo.benefit}</p>
        <dl className="mt-4 grid grid-cols-2 gap-2">
          {tempehGuide.per100g.map((item) => (
            <div key={item.label} className="rounded bg-white/10 px-2.5 py-2">
              <dt className="text-[10px] uppercase tracking-wide text-gold-light">{item.label}</dt>
              <dd className="text-sm font-semibold text-white">{item.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-[11px] text-white/70">Per 100 g · Tap Nutrition for full benefits</p>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/55 p-3 sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${panelId}-title`}
          onClick={() => setOpen(false)}
        >
          <div
            id={panelId}
            className="max-h-[88vh] w-full max-w-md overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-cream">
              <ProductImage src={promo.src} alt={promo.alt} sizes="400px" />
              <button
                type="button"
                className="absolute right-3 top-3 rounded-full bg-white px-3 py-1.5 text-xs font-semibold uppercase text-espresso shadow"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>

            <div className="p-5 sm:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">Health & nutrition</p>
              <h3 id={`${panelId}-title`} className="font-display mt-1 text-2xl font-semibold uppercase text-espresso">
                {promo.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{promo.benefit}</p>

              <h4 className="mt-5 text-xs font-semibold uppercase tracking-wide text-espresso">Per 100 g</h4>
              <dl className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {tempehGuide.per100g.map((item) => (
                  <div key={item.label} className="rounded border border-parchment bg-cream px-3 py-2.5">
                    <dt className="text-[10px] uppercase tracking-wide text-muted">{item.label}</dt>
                    <dd className="mt-0.5 text-base font-semibold text-espresso">{item.value}</dd>
                  </div>
                ))}
              </dl>

              <h4 className="mt-5 text-xs font-semibold uppercase tracking-wide text-espresso">Health benefits</h4>
              <ul className="mt-2 space-y-3">
                {tempehGuide.whyCafes.map((item) => (
                  <li key={item.title} className="rounded border border-parchment px-3 py-2.5">
                    <p className="text-sm font-semibold text-gold">{item.title}</p>
                    <p className="mt-1 text-xs leading-5 text-muted">{item.text}</p>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-[11px] leading-5 text-muted">{tempehGuide.caution}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
