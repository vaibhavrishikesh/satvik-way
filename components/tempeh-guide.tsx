import { tempehGuide } from "@/lib/tempeh-guide";

export function TempehGuide({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "" : "mx-auto max-w-3xl"}>
      <p className="text-xs uppercase tracking-wide text-gold">For customers</p>
      <h2 className="font-display mt-2 text-4xl italic md:text-5xl">What is tempeh?</h2>
      <p className="mt-5 text-base leading-8 text-muted">{tempehGuide.intro}</p>
      <p className="mt-4 text-base leading-8 text-muted">{tempehGuide.taste}</p>

      <h3 className="mt-12 text-sm font-medium uppercase tracking-wide">
        In 100 g cooked tempeh
      </h3>
      <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {tempehGuide.per100g.map((item) => (
          <div key={item.label} className="rounded-2xl bg-cream px-3 py-4">
            <dt className="text-xs text-muted">{item.label}</dt>
            <dd className="mt-1 text-lg">{item.value}</dd>
          </div>
        ))}
      </dl>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-7 text-muted">
        {tempehGuide.minerals.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>

      {!compact ? (
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {tempehGuide.whyCafes.map((item) => (
            <article key={item.title}>
              <h3 className="font-display text-2xl italic">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      ) : null}

      <p className="mt-10 text-sm leading-7 text-muted">{tempehGuide.caution}</p>
      <p className="mt-6 text-sm text-muted">
        Read more on{" "}
        <a
          href={tempehGuide.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-espresso"
        >
          {tempehGuide.sourceLabel}
        </a>
        .
      </p>
    </div>
  );
}
