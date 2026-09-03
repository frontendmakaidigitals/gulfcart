import { funnelBefore, funnelAfter, funnelReasons } from '@/lib/content';

export default function Leak() {
  return (
    <section id="leak" className="shell scroll-mt-24 px-[26px] py-18">
      <div className="max-w-[700px]">
        <div className="eyebrow">WHERE THE MONEY GOES</div>
        <h2 className="mt-4 font-display text-[46px] leading-[1.1] tracking-[-.032em] text-fg">
          Every brand loses most of its buyers in the last 90 seconds.
        </h2>
        <p className="mt-[18px] text-[17.5px] leading-relaxed text-muted">
          Your ads work. Your product page works. Then the checkout asks a first-time buyer to type nine fields,
          offers the wrong payment method, and lets an unverified COD order through. This is what 1,000 checkout
          sessions typically look like.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 items-start gap-5 lg:grid-cols-[1fr_380px]">
        {/* Funnel comparison */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[18px] border border-outline/15 bg-outline/15 sm:grid-cols-2">
          {/* Typical Shopify */}
          <div className="flex bg-surface p-[22px_16px]">
            <div className="flex min-w-0 flex-1 flex-col items-center">
              <div className="mb-3.5 w-full border-b border-outline/15 pb-3 text-center">
                <div className="text-[10.5px] font-bold leading-snug tracking-[.14em] text-faint">TYPICAL SHOPIFY</div>
                <div className="mt-1 font-display text-[12.5px] font-bold text-bad">1,000 in</div>
              </div>

              {funnelBefore.map((band, i) => (
                <div key={i} className="flex w-full flex-col items-center">
                  <div
                    className={`relative min-w-[118px] transition-[filter] duration-200 hover:brightness-[1.15] ${band.width}`}
                    style={{ width: band.width }}
                  >
                    <div className={`absolute inset-0 rounded border ${band.fill} ${band.stroke} pointer-events-none`} />
                    <div className={`relative flex items-center justify-center gap-[9px] py-2.5 ${band.padX}`}>
                      <div className={`flex-none font-display text-[17px] font-bold leading-none tracking-[-.03em] ${band.numColor}`}>
                        {band.value}
                      </div>
                      <div className="text-left text-[11.5px] font-semibold leading-tight text-fg-soft">
                        {band.label}
                      </div>
                    </div>
                  </div>
                  {band.dropDisplay && (
                    <div className={`flex items-center gap-[5px] py-1 text-[10.5px] font-semibold ${band.dropColor}`}>
                      <span>↓</span>{band.drop}
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-3.5 w-full border-t border-outline/15 pt-3 text-center">
                <div className="font-display text-2xl font-bold leading-none tracking-[-.03em] text-bad">268</div>
                <div className="mt-1 text-[11px] leading-snug text-dim">orders kept</div>
              </div>
            </div>
          </div>

          {/* On GulfCart */}
          <div className="flex bg-gradient-to-b from-accent/[.07] to-transparent bg-surface p-[22px_16px]">
            <div className="flex min-w-0 flex-1 flex-col items-center">
              <div className="mb-3.5 w-full border-b border-outline/15 pb-3 text-center">
                <div className="text-[10.5px] font-bold leading-snug tracking-[.14em] text-accent">ON GULFCART</div>
                <div className="mt-1 font-display text-[12.5px] font-bold text-good">1,000 in</div>
              </div>

              {funnelAfter.map((band, i) => (
                <div key={i} className="flex w-full flex-col items-center">
                  <div className="relative min-w-[118px] transition-[filter] duration-200 hover:brightness-[1.15]" style={{ width: band.width }}>
                    <div className={`absolute inset-0 rounded border ${band.fill} ${band.stroke} pointer-events-none`} />
                    <div className={`relative flex items-center justify-center gap-[9px] py-2.5 ${band.padX}`}>
                      <div className={`flex-none font-display text-[17px] font-bold leading-none tracking-[-.03em] ${band.numColor}`}>
                        {band.value}
                      </div>
                      <div className="text-left text-[11.5px] font-semibold leading-tight text-fg-soft">
                        {band.label}
                      </div>
                    </div>
                  </div>
                  {band.dropDisplay && (
                    <div className={`flex items-center gap-[5px] py-1 text-[10.5px] font-semibold ${band.dropColor}`}>
                      <span>↓</span>{band.drop}
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-3.5 w-full border-t border-outline/15 pt-3 text-center">
                <div className="font-display text-2xl font-bold leading-none tracking-[-.03em] text-good">410</div>
                <div className="mt-1 text-[11px] leading-snug text-dim">orders kept</div>
              </div>
            </div>
          </div>
        </div>

        {/* Side panel */}
        <div className="flex flex-col gap-3">
          <div className="rounded-2xl border border-good/28 bg-good/[.06] p-[22px]">
            <div className="font-display text-[32px] font-bold leading-none tracking-[-.035em] text-good">+39% orders</div>
            <div className="mt-2.5 text-sm leading-relaxed text-fg-soft">
              Same ad spend, same sessions, same catalogue. The difference is entirely in what happens after
              &ldquo;Checkout&rdquo; is clicked.
            </div>
          </div>

          <div className="flex flex-col gap-[11px] rounded-2xl border border-outline/15 bg-surface-raised p-[20px_22px]">
            {funnelReasons.map((reason, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="text-[13px] font-bold leading-snug text-accent">→</span>
                <span className="text-[13px] leading-snug text-muted">{reason}</span>
              </div>
            ))}
          </div>

          <a
            href="#form"
            className="rounded-[11px] bg-accent p-[13px] text-center font-display text-[14.5px] font-bold text-ink hover:bg-accent-light"
          >
            Get this measured on your store
          </a>
        </div>
      </div>
    </section>
  );
}