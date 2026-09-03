import { levers } from '@/lib/content';

export default function Levers() {
  return (
    <section id="levers" className="shell scroll-mt-24 px-[26px] pb-22">
      <div className="max-w-[700px]">
        <div className="eyebrow">WHAT&apos;S INSIDE</div>
        <h2 className="mt-4 text-[32px] leading-tight tracking-[-.032em] sm:text-[46px]">Six things Shopify can&apos;t do in the Gulf.</h2>
        <p className="mt-[18px] text-[17.5px] leading-relaxed text-muted">
          Each one is a rule Shopify applies globally or not at all. GulfCart makes every one of them country-aware.
          Turn on the ones you need.
        </p>
      </div>

      <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {levers.map((l) => (
          <div
            key={l.t}
            className="flex flex-col gap-3.5 rounded-[18px] border border-white/8 bg-surface p-7 transition-colors hover:border-accent/35 hover:bg-surface-hover"
          >
            <div className="flex items-start justify-between gap-3.5">
              <div className="pt-[5px] text-[10.5px] font-bold tracking-[.14em] text-accent">{l.tag}</div>
              <div className="font-display text-2xl font-bold tracking-[-.03em] text-fg">{l.metric}</div>
            </div>
            <h3 className="text-[19px] leading-tight tracking-[-.02em]">{l.t}</h3>
            <p className="flex-1 text-[14.5px] leading-relaxed text-dim">{l.d}</p>
            <div className="border-t border-white/[.07] pt-3.5 text-[12.5px] text-fainter">{l.metricLabel}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
