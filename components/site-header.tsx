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
      <div className="bg-forest px-4 py-2 text-sm text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
          <p>Rishikesh cafe supply · Weekly drop</p>
          <p>
            WhatsApp{" "}
            <a
              href={supplyWa("Satvik Way — cafe order")}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              {team.supply.display}
            </a>
          </p>
        </div>
      </div>
      <header className="border-b border-parchment bg-white">
        <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-4 md:px-8">
          <Link href="/" className="font-display text-3xl font-semibold uppercase tracking-wide text-espresso">
            {brand.name}
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-7 text-sm font-medium uppercase tracking-wide md:flex">
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
                    <Link key={item.href} href={item.href} className="block px-4 py-2 text-xs hover:text-clay">
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
          <a
            href={supplyWa("Satvik Way — cafe order. Please share this week's rates.")}
            target="_blank"
            rel="noopener noreferrer"
            className="theme-btn hidden md:inline-flex"
          >
            Cafe order
          </a>
          <button
            type="button"
            className="text-sm font-semibold uppercase md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            Menu
          </button>
        </div>
        {open ? (
          <div className="flex flex-col gap-4 border-t border-parchment px-4 py-5 text-sm uppercase md:hidden">
            {shopLinks.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            {nav
              .filter((item) => item.label !== "Shop")
              .map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
          </div>
        ) : null}
      </header>
    </div>
  );
}
