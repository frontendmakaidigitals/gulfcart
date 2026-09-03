import { flow } from '@/lib/content';

const payMethods = [
  { label: 'Tabby · 4 payments', className: 'border-accent/45 bg-accent/8 text-accent-light' },
  { label: 'Apple Pay', className: 'border-outline/30 text-muted' },
  { label: 'Card ···· 4218', className: 'border-outline/30 text-muted' },
  { label: 'COD · +AED 15', className: 'border-outline/30 text-muted' },
];

const rows = [
  ['Subtotal', 'AED 428.00'],
  ['Delivery — Dubai, next day', 'AED 0.00'],
  ['VAT (5%)', 'AED 21.40'],
];

export default function CheckoutShowcase() {
  return (
    <section className="shell px-[26px] pb-22">
      <div className="grid overflow-hidden rounded-[22px] border border-outline/20 bg-surface lg:grid-cols-2">
        <div className="p-12">
          <div className="eyebrow">THE CHECKOUT ITSELF</div>
          <h2 className="mt-4 text-[30px] leading-tight tracking-[-.03em] text-fg sm:text-4xl">Fewer fields. Fewer excuses to leave.</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            It stays inside your brand — your logo, your colours, your domain. What changes is how much work the buyer
            has to do.
          </p>

          <div className="mt-7 flex flex-col gap-[18px]">
            {flow.map((f) => (
              <div key={f.n} className="flex items-start gap-4">
                <div className="min-w-[22px] pt-[3px] font-display text-xs font-bold text-accent">{f.n}</div>
                <div>
                  <div className="font-display text-base font-semibold tracking-[-.01em] text-fg">{f.t}</div>
                  <div className="mt-1 text-sm leading-relaxed text-dim">{f.d}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-xl border border-outline/25 px-5 py-[18px] text-[13.5px] leading-relaxed text-dim">
            Around 30% of COD orders in the region risk ending in Return To Origin. Verified identity is the cheapest fix
            available to you.
          </div>
        </div>

        <div className="flex items-center border-t border-outline/20 bg-[radial-gradient(520px_340px_at_70%_25%,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_70%)] p-12 lg:border-t-0 lg:border-l">
          <div className="w-full overflow-hidden rounded-2xl border border-outline/25 bg-ink-alt shadow-[0_24px_60px_rgba(0,0,0,.5)] dark:shadow-[0_24px_60px_rgba(0,0,0,.5)] shadow-black/10">
            <div className="flex items-center justify-between border-b border-outline/20 px-[18px] py-3.5">
              <span className="font-display text-[13px] font-semibold text-fg-soft">Your brand · Checkout</span>
              <span className="rounded-md border border-good/35 px-[9px] py-1 text-[11.5px] font-bold text-good">Returning buyer</span>
            </div>

            <div className="flex flex-col gap-[13px] px-[18px] py-5">
              <div className="rounded-[9px] border border-good/30 bg-good/[.06] px-[13px] py-3 text-[12.5px] leading-snug text-good">
                Recognised from the GulfCart network — address and card pre-filled, identity verified by OTP.
              </div>

              {rows.map(([label, value]) => (
                <div key={label} className="flex justify-between text-[13.5px] text-dim">
                  <span>{label}</span>
                  <span className="text-fg">{value}</span>
                </div>
              ))}

              <div className="h-px bg-outline/20" />

              <div className="flex justify-between font-display text-[17px] font-bold text-fg">
                <span>Total</span><span>AED 449.40</span>
              </div>

              <div className="mt-0.5 grid grid-cols-2 gap-2">
                {payMethods.map((p) => (
                  <div key={p.label} className={`rounded-[9px] border p-[11px] text-center text-[12.5px] font-semibold ${p.className}`}>
                    {p.label}
                  </div>
                ))}
              </div>

              <div className="rounded-[10px] bg-accent p-[13px] text-center font-display text-[14.5px] font-bold text-ink">Pay AED 449.40</div>
              <div className="text-center text-[11.5px] text-ghost">Checkout completed in 23 seconds</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}