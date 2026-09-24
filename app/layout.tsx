import type { Metadata, Viewport } from "next";
import { Mulish, Oswald } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brand } from "@/lib/brand";
import { defaultOgImage, organizationJsonLd, siteDescription, siteUrl, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const display = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Mulish({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#227200",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s · ${brand.name}`,
  },
  description: siteDescription,
  applicationName: brand.name,
  keywords: [
    "Satvik Way",
    "Rishikesh tempeh",
    "tempeh cubes Rishikesh",
    "Rishikesh cafe supply",
    "WhatsApp tempeh order",
    "raw tempeh wholesale",
    "cafe wholesale Uttarakhand",
    "Tapovan cafe tempeh",
    "Laxman Jhula cafe supply",
  ],
  authors: [{ name: brand.name, url: siteUrl }],
  creator: brand.name,
  publisher: brand.name,
  category: "food",
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: brand.name,
    title: `${brand.name} — ${brand.tagline}`,
    description: siteDescription,
    images: [{ url: defaultOgImage, width: 1400, height: 900, alt: `${brand.name} soy tempeh cubes` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — ${brand.tagline}`,
    description: siteDescription,
    images: [defaultOgImage],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-ivory text-ink">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-forest focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
