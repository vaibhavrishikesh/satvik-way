"use client";

import Link from "next/link";
import { useState } from "react";
import { brand, nav, shopLinks, team } from "@/lib/brand";
import { supplyWa } from "@/lib/whatsapp";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-forest px-3 py-1.5 text-[11px] leading-snug text-white sm:px-4 sm:py-2 sm:text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
          <p className="truncate">Rishikesh · Weekly drop</p>
          <a
            href={supplyWa("Satvik Way — cafe order")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 underline underline-offset-2"
          >
            <span className="sm:hidden">WhatsApp</span>
            <span className="hidden sm:inline">WhatsApp {team.supply.display}</span>
          </a>
        </div>
      </div>

      <header className="border-b border-parchment bg-white">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-3 sm:h-[78px] sm:px-4 md:px-8">
          <Link
            href="/"
            className="font-display min-w-0 truncate text-xl font-semibold uppercase tracking-wide text-espresso sm:text-3xl"
          >
            {brand.name}
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 text-sm font-medium uppercase tracking-wide md:flex"
          >
            <div
              className="relative"
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
            >
              <Link href="/collection" className="hover:text-gold">
                Shop
              </Link>
              {shopOpen ? (
                <div className="absolute left-0 top-full z-20 min-w-44 bg-white py-2 shadow-md">
                  {shopLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-xs hover:text-clay"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
            {nav
              .filter((item) => item.label !== "Shop")
              .map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-gold">
                  {item.label}
                </Link>
              ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={supplyWa("Satvik Way — cafe order. Please share this week's rates.")}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-btn !px-3 !py-2 !text-[10px] sm:!px-5 sm:!py-2.5 sm:!text-[11px] md:!px-[1.4rem] md:!py-[0.85rem] md:!text-[0.82rem]"
            >
              Cafe order
            </a>
            <button
              type="button"
              className="inline-flex min-h-10 min-w-10 items-center justify-center text-xs font-semibold uppercase md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {open ? (
          <div className="flex flex-col border-t border-parchment bg-white px-4 py-3 md:hidden">
            {shopLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-parchment py-3.5 text-sm uppercase tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            {nav
              .filter((item) => item.label !== "Shop")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-parchment py-3.5 text-sm uppercase tracking-wide last:border-b-0"
                >
                  {item.label}
                </Link>
              ))}
          </div>
        ) : null}
      </header>
    </div>
  );
}
