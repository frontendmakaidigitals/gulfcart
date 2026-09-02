'use client'
import { TrendUpIcon } from '@phosphor-icons/react';
import { c, eyebrow, font, h2, lede, shell } from '@/lib/tokens';
import { leakAfter, leakBefore } from '@/lib/content';

type Row = { label: string; value: string; width: string; note: string };

function Column({ title, sessions, sessionsColor, rows, barColor, background }: {
  title: string; sessions: string; sessionsColor: string; rows: Row[]; barColor: string; background?: string;
}) {
  return (
    <div
      className="p-[34px]"
      style={{ background, borderRight: background ? undefined : '1px solid rgba(255,255,255,.07)' }}
    >
      <div className="flex items-baseline justify-between">
        <span
          className="text-xs font-bold tracking-[.14em]"
          style={{ color: barColor === c.accent ? c.accent : c.faint }}
        >
          {title}
        </span>
        <span className="text-[13px] font-bold" style={{ color: sessionsColor }}>
          {sessions}
        </span>
      </div>
      <div className="mt-6 flex flex-col gap-3">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="mb-[7px] flex justify-between text-[13.5px]">
              <span style={{ color: c.textSoft }}>{r.label}</span>
              <span style={{ color: c.faint }}>{r.value}</span>
            </div>
            <div
              className="h-2 overflow-hidden rounded-full"
              style={{ background: 'rgba(255,255,255,.06)' }}
            >
              <div
                className="h-full rounded-full"
                style={{ background: barColor, width: r.width }}
              />
            </div>
            <div className="mt-1.5 text-[12.5px]" style={{ color: c.fainter }}>
              {r.note}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Leak() {
  return (
    <section
      id="leak"
      className="bg-background py-[88px] [scroll-margin-top:90px]"

    >
      <div className="container">
        <div style={eyebrow}>WHERE THE MONEY GOES</div>
        <h2 className="gc-h2" style={h2}>
          Every brand loses most of its buyers in the last 90 seconds.
        </h2>
        <p style={lede}>
          Your ads work. Your product page works. Then the checkout asks a first-time buyer to
          type nine fields, offers the wrong payment method, and lets an unverified COD order
          through. This is what 1,000 checkout sessions typically look like.
        </p>
      </div>

      <div
        className="mt-11 container overflow-hidden rounded-[20px] border border-line bg-surface"
      >
        <div className="gc-split grid grid-cols-2">
          <Column
            title="TYPICAL SHOPIFY CHECKOUT"
            sessions="1,000 sessions"
            sessionsColor={c.bad}
            rows={leakBefore}
            barColor={c.bad}
          />
          <Column
            title="SAME TRAFFIC ON GULFCART"
            sessions="1,000 sessions"
            sessionsColor={c.good}
            rows={leakAfter}
            barColor={c.accent}
            background={`linear-gradient(180deg,${c.accentA(0.07)},transparent)`}
          />
        </div>
        <div
          className="flex flex-wrap items-center gap-[26px] container border-t border-line py-[22px]"
        >
          <div
            className="text-[26px] flex gap-2 items-center font-bold tracking-[-.03em]"
            style={{ fontFamily: font.display, color: c.good }}
          >
            <span>
              <TrendUpIcon />
            </span>
            39% orders
          </div>
          <div className="min-w-[260px] flex-1 text-[14.5px] text-muted">
            Same ad spend, same sessions, same catalogue. The difference is entirely in what
            happens after &ldquo;Checkout&rdquo; is clicked.
          </div>
          <a href="#form" className="text-sm font-semibold">
            Get this measured on your store →
          </a>
        </div>
      </div>
    </section>
  );
}