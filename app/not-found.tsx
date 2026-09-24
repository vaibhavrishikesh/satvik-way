import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-cream px-6 text-center">
      <p className="sub-title">404</p>
      <h1 className="font-display mt-3 text-5xl font-semibold uppercase">Page not found</h1>
      <p className="mt-4 max-w-md text-muted">
        This link is not a Satvik Way page. Go to the tempeh shop or send a WhatsApp cafe order.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/collection" className="theme-btn">
          Shop tempeh
        </Link>
        <Link href="/contact" className="theme-btn-two">
          WhatsApp order
        </Link>
      </div>
    </div>
  );
}
