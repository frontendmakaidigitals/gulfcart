import { currencyPoints, markets } from '@/lib/content';
import Image from 'next/image';

export default function Currency() {
  return (
    <section id="currency" className="shell scroll-mt-24 px-[26px] pt-22">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <div className="eyebrow">THE BIGGEST SINGLE FIX</div>
          <h2 className="mt-4 text-[32px] leading-tight tracking-[-.032em] sm:text-[46px]">Charge people in their own money.</h2>
          <p className="mt-[18px] text-[17.5px] leading-relaxed text-muted">
            Shopify shows a converted price. GulfCart processes and settles the real thing — AED, SAR, KWD, QAR, BHD and
            OMR — on the store you already run. A buyer who sees a foreign currency at the final step reads it as a store
            that isn&apos;t for them, and leaves without a trace in your analytics.
          </p>

          <div className="mt-7 flex flex-col gap-[13px]">
            {currencyPoints.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <span className="text-[15px] font-bold text-accent">→</span>
                <span className="text-[15px] leading-snug text-fg-soft">{p}</span>
              </div>
            ))}
          </div>

          <div className="mt-7 flex items-center gap-5 rounded-[14px] border border-bad/25 bg-bad/[.05] px-[22px] py-5">
            <div className="font-display  text-3xl font-bold tracking-[-.03em] text-bad">–30%</div>
            <div className="text-[14.5px] flex-1 leading-snug text-fg-soft">
              Conversion typically drops by about a third the moment a Gulf buyer is quoted in a currency that isn&apos;t theirs.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[18px] border border-ghost/30">
          {markets.map((m) => (
            <div key={m.code} className="bg-surface p-6 transition-colors hover:bg-tile-hover">
              <Image alt={m.code} src={`/flags/${m.flag}`} className='' width={40} height={40} />
              <div className="mt-2 text-sm font-semibold">{m.name}</div>
              <div className="mt-1 text-[12.5px] leading-snug text-fainter">{m.methods}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-accent/20 bg-accent/6 px-7 py-6">
        <div className="max-w-[720px] text-[15.5px] leading-relaxed text-fg-soft">
          Selling in one country today? Only that currency has to be switched on. The other five sit dormant until you
          want them — no second store, no new licence, no rebuild.
        </div>
        <a href="#form" className="text-sm font-semibold whitespace-nowrap">Ask what this looks like for us →</a>
      </div>
    </section>
  );
}
