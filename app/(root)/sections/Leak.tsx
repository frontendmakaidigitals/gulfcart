import { leakAfter, leakBefore } from '@/lib/content';

type Row = { label: string; value: string; width: string; note: string };

function Funnel({ title, titleClass, sessionsClass, rows, barClass, wrapClass }: {
  title: string; titleClass: string; sessionsClass: string; rows: Row[]; barClass: string; wrapClass: string;
}) {
  return (
    <div className={`p-[34px] ${wrapClass}`}>
      <div className="flex items-baseline justify-between">
        <span className={`text-xs font-bold tracking-[.14em] ${titleClass}`}>{title}</span>
        <span className={`text-[13px] font-bold ${sessionsClass}`}>1,000 sessions</span>
      </div>
      <div className="mt-6 flex flex-col gap-3">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="mb-[7px] flex justify-between text-[13.5px]">
              <span className="text-fg-soft">{r.label}</span>
              <span className="text-faint">{r.value}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/6">
              <div className={`h-full rounded-full ${barClass}`} style={{ width: r.width }} />
            </div>
            <div className="mt-1.5 text-[12.5px] text-fainter">{r.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Leak() {
  return (
    <section id="leak" className="shell scroll-mt-24 px-[26px] py-22">
      <div className="max-w-[700px]">
        <div className="eyebrow">WHERE THE MONEY GOES</div>
        <h2 className="mt-4 text-[32px] leading-tight tracking-[-.032em] sm:text-[46px]">
          Every brand loses most of its buyers in the last 90 seconds.
        </h2>
        <p className="mt-[18px] text-[17.5px] leading-relaxed text-muted">
          Your ads work. Your product page works. Then the checkout asks a first-time buyer to type nine fields, offers
          the wrong payment method, and lets an unverified COD order through. This is what 1,000 checkout sessions
          typically look like.
        </p>
      </div>

      <div className="mt-11 overflow-hidden rounded-[20px] border border-white/8 bg-surface">
        <div className="grid lg:grid-cols-2">
          <Funnel
            title="TYPICAL SHOPIFY CHECKOUT"
            titleClass="text-faint"
            sessionsClass="text-bad"
            rows={leakBefore}
            barClass="bg-bad"
            wrapClass="border-b border-white/[.07] lg:border-r lg:border-b-0"
          />
          <Funnel
            title="SAME TRAFFIC ON GULFCART"
            titleClass="text-accent"
            sessionsClass="text-good"
            rows={leakAfter}
            barClass="bg-accent"
            wrapClass="bg-linear-to-b from-accent/[.07] to-transparent"
          />
        </div>
        <div className="flex flex-wrap items-center gap-6 border-t border-white/[.07] bg-surface-raised px-[34px] py-[22px]">
          <div className="font-display text-[26px] font-bold tracking-[-.03em] text-good">+39% orders</div>
          <div className="min-w-[260px] flex-1 text-[14.5px] text-muted">
            Same ad spend, same sessions, same catalogue. The difference is entirely in what happens after
            &ldquo;Checkout&rdquo; is clicked.
          </div>
          <a href="#form" className="text-sm font-semibold">Get this measured on your store →</a>
        </div>
      </div>
    </section>
  );
}
