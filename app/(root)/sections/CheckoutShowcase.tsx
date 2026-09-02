import { c, eyebrow, font, shell } from '@/lib/tokens';
import { flow } from '@/lib/content';

const payMethods = [
  { label: 'Tabby · 4 payments', border: c.accentA(0.45), bg: c.accentA(0.08), fg: c.accentLight },
  { label: 'Apple Pay', border: 'rgba(255,255,255,.1)', bg: 'transparent', fg: '#AEB5C2' },
  { label: 'Card ···· 4218', border: 'rgba(255,255,255,.1)', bg: 'transparent', fg: '#AEB5C2' },
  { label: 'COD · +AED 15', border: 'rgba(255,255,255,.1)', bg: 'transparent', fg: '#AEB5C2' },
];

const line = (label: string, value: string) => (
  <div key={label} className="flex justify-between text-[13.5px]" style={{ color: c.dim }}>
    <span>{label}</span>
    <span style={{ color: c.text }}>{value}</span>
  </div>
);

export default function CheckoutShowcase() {
  return (
    <section className="bg-surface pb-[88px]" >
      <div
        className="gc-split grid container bg-surface grid-cols-2 overflow-hidden rounded-[22px]"
        style={{ border: `1px solid ${c.line}` }}
      >
        <div className="p-12">
          <div style={eyebrow}>THE CHECKOUT ITSELF</div>
          <h2
            className="gc-h2 mt-4 text-[36px] font-bold leading-[1.12] tracking-[-.03em]"
            style={{ fontFamily: font.display }}
          >
            Fewer fields. Fewer excuses to leave.
          </h2>
          <p className="mt-4 text-base leading-[1.65]" style={{ color: c.muted }}>
            It stays inside your brand — your logo, your colours, your domain. What changes is
            how much work the buyer has to do.
          </p>

          <div className="mt-[30px] flex flex-col gap-[18px]">
            {flow.map((f) => (
              <div key={f.n} className="flex items-start gap-4">
                <div
                  className="min-w-[22px] pt-[3px] text-xs font-bold"
                  style={{ fontFamily: font.display, color: c.accent }}
                >
                  {f.n}
                </div>
                <div>
                  <div
                    className="text-base font-semibold tracking-[-.01em]"
                    style={{ fontFamily: font.display }}
                  >
                    {f.t}
                  </div>
                  <div className="mt-[5px] text-sm leading-[1.6]" style={{ color: c.dim }}>
                    {f.d}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-[30px] rounded-xl px-5 py-[18px] text-[13.5px] leading-[1.6]"
            style={{ border: '1px solid rgba(255,255,255,.09)', color: c.dim }}
          >
            Around 30% of COD orders in the region risk ending in Return To Origin. Verified
            identity is the cheapest fix available to you.
          </div>
        </div>

        <div
          className="flex items-center p-12"
          style={{
            borderLeft: '1px solid rgba(255,255,255,.07)',
            background: `radial-gradient(520px 340px at 70% 25%,${c.accentA(0.12)},transparent 70%)`,
          }}
        >
          <div
            className="w-full overflow-hidden rounded-2xl"
            style={{
              border: '1px solid rgba(255,255,255,.1)',
              background: '#0A0C10',
              boxShadow: '0 24px 60px rgba(0,0,0,.5)',
            }}
          >
            <div
              className="flex items-center justify-between px-[18px] py-[14px]"
              style={{ borderBottom: '1px solid rgba(255,255,255,.07)' }}
            >
              <span
                className="text-[13px] font-semibold"
                style={{ fontFamily: font.display, color: c.textSoft }}
              >
                Your brand · Checkout
              </span>
              <span
                className="rounded-md px-[9px] py-1 text-[11.5px] font-bold"
                style={{ border: '1px solid rgba(74,222,128,.35)', color: c.good }}
              >
                Returning buyer
              </span>
            </div>

            <div className="flex flex-col gap-[13px] px-[18px] py-5">
              <div
                className="rounded-[9px] px-[13px] py-3 text-[12.5px] leading-[1.5]"
                style={{
                  border: '1px solid rgba(74,222,128,.3)',
                  background: 'rgba(74,222,128,.06)',
                  color: '#8FE7B0',
                }}
              >
                Recognised from the GulfCart network — address and card pre-filled, identity
                verified by OTP.
              </div>
              {line('Subtotal', 'AED 428.00')}
              {line('Delivery — Dubai, next day', 'AED 0.00')}
              {line('VAT (5%)', 'AED 21.40')}
              <div className="h-px" style={{ background: c.line }} />
              <div
                className="flex justify-between text-[17px] font-bold"
                style={{ fontFamily: font.display }}
              >
                <span>Total</span>
                <span>AED 449.40</span>
              </div>
              <div className="mt-0.5 grid grid-cols-2 gap-2">
                {payMethods.map((p) => (
                  <div
                    key={p.label}
                    className="rounded-[9px] p-[11px] text-center text-[12.5px] font-semibold"
                    style={{ border: `1px solid ${p.border}`, background: p.bg, color: p.fg }}
                  >
                    {p.label}
                  </div>
                ))}
              </div>
              <div
                className="rounded-[10px] p-[13px] text-center text-[14.5px] font-bold"
                style={{ background: c.accent, color: c.bg, fontFamily: font.display }}
              >
                Pay AED 449.40
              </div>
              <div className="text-center text-[11.5px]" style={{ color: c.ghost }}>
                Checkout completed in 23 seconds
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}