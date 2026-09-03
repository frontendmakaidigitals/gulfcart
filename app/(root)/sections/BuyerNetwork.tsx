import { networkPoints, networkStats } from '@/lib/content';

export default function BuyerNetwork() {
  return (
    <section id="network" className="shell scroll-mt-24 px-[26px] pb-22">
      <div className="rounded-[22px] border border-accent/20 bg-surface bg-linear-150 from-accent/[.09] to-transparent to-60% p-6 lg:p-12">
        <div className="grid items-center gap-13 lg:grid-cols-2">
          <div>
            <div className="eyebrow">THE UNFAIR ADVANTAGE</div>
            <h2 className="mt-4 text-[30px] leading-tight tracking-[-.03em] sm:text-[38px]">
              Your first-time buyer has already checked out with us.
            </h2>
            <p className="mt-4 text-[16.5px] leading-relaxed text-muted">
              Every brand on GulfCart shares one verified buyer layer. So a shopper who has never visited your store
              still arrives with their details known and their identity proven — which is why one-tap checkout works
              from day one, not after months of building your own customer base.
            </p>
            <div className="mt-7 flex flex-col gap-[13px]">
              {networkPoints.map((n) => (
                <div key={n} className="flex items-start gap-3">
                  <span className="text-[15px] font-bold text-accent">→</span>
                  <span className="text-[15px] leading-snug text-fg-soft">{n}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[13px]">
            {networkStats.map((n) => (
              <div key={n.l} className="rounded-2xl border border-white/[.09] bg-surface-raised p-6">
                <div className="font-display text-3xl font-bold tracking-[-.035em] text-accent">{n.v}</div>
                <div className="mt-2 text-[13.5px] leading-snug text-dim">{n.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
