'use client';

import { useState } from 'react';
import { c, eyebrow, font, h2, shell } from '@/lib/tokens';
import { plans } from '@/lib/content';

export default function Pricing({ defaultBilling = 'monthly' }: { defaultBilling?: 'monthly' | 'annual' }) {
  const [annual, setAnnual] = useState(defaultBilling === 'annual');
  const priced = (base: number) => `$${annual ? Math.round(base * 0.8) : base}/mo`;

  const toggle = (isAnnual: boolean, label: string) => {
    const on = annual === isAnnual;
    return (
      <button
        onClick={() => setAnnual(isAnnual)}
        className="cursor-pointer rounded-lg border-0 px-5 py-[9px] text-[13.5px] font-bold"
        style={{ background: on ? c.accent : 'transparent', color: on ? c.bg : c.faint }}
      >
        {label}
      </button>
    );
  };

  return (
    <section
      id="pricing"
      className=" pb-[88px] [scroll-margin-top:90px] bg-surface"
    >
      <div className="text-center container">
        <div style={eyebrow}>PRICING</div>
        <h2 className="gc-h2" style={h2}>
          Less than Shopify already takes.
        </h2>
        <p className="mx-auto mt-[18px] max-w-[520px] text-[17px] leading-[1.6]" style={{ color: c.muted }}>
          Shopify charges 2% on every order. We charge less, and the checkout it buys you is
          designed to pay for itself in the first month.
        </p>
        <div
          className="mx-auto mt-7 inline-flex gap-[5px] rounded-[11px] p-[5px]"
          style={{ border: '1px solid rgba(255,255,255,.09)' }}
        >
          {toggle(false, 'Monthly')}
          {toggle(true, 'Annual · save 20%')}
        </div>
      </div>

      <div className="gc-grid-3 container mt-10 grid grid-cols-3 items-start gap-4">
        {plans.map((p) => (
          <div
            key={p.name}
            className="flex flex-col gap-[17px] rounded-[20px] p-8"
            style={{
              border: `1px solid ${p.popular ? c.accentA(0.4) : 'rgba(255,255,255,.09)'}`,
              background: p.popular
                ? `linear-gradient(170deg,${c.accentA(0.09)},transparent 55%),#0E1218`
                : c.surface,
            }}
          >
            <div className="flex items-center justify-between">
              <div className="text-[17px] font-bold" style={{ fontFamily: font.display }}>
                {p.name}
              </div>
              {p.popular && (
                <div
                  className="rounded-md px-[9px] py-1 text-[10.5px] font-extrabold tracking-[.12em]"
                  style={{ color: c.bg, background: c.accent }}
                >
                  POPULAR
                </div>
              )}
            </div>

            <div>
              <div
                className="text-[38px] font-bold tracking-[-.035em]"
                style={{ fontFamily: font.display }}
              >
                {p.base === null ? 'Custom' : priced(p.base)}
              </div>
              <div className="mt-1.5 text-[13.5px]" style={{ color: c.dim }}>
                {p.rate}
              </div>
              <div className="mt-0.5 text-[13px]" style={{ color: c.fainter }}>
                {p.band}
              </div>
            </div>

            <a
              href="#form"
              className={`${p.popular ? 'gc-btn-primary' : 'gc-btn-ghost'} rounded-[10px] p-[13px] text-center text-sm font-bold`}
              style={{
                fontFamily: font.display,
                background: p.popular ? c.accent : 'transparent',
                color: p.popular ? c.bg : c.text,
                border: `1px solid ${p.popular ? c.accent : 'rgba(255,255,255,.16)'}`,
              }}
            >
              {p.cta}
            </a>

            <div className="flex flex-col gap-[10px] pt-1">
              {p.features.map((f) => (
                <div key={f} className="flex gap-[10px] text-sm leading-[1.5]" style={{ color: '#AEB5C2' }}>
                  <span className="font-bold" style={{ color: c.accent }}>
                    +
                  </span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}