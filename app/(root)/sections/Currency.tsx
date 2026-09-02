'use client'
import { c, eyebrow, font, h2, lede, shell } from '@/lib/tokens';
import { currencyPoints, markets } from '@/lib/content';
import { ArrowRightIcon } from '@phosphor-icons/react';

export default function Currency() {
  return (
    <section
      id="currency"
      className=" bg-background pt-[88px] bg-bg-alt [scroll-margin-top:90px]"

    >
      <div className="gc-split container grid grid-cols-2 items-center gap-14">
        <div>
          <div style={eyebrow}>THE BIGGEST SINGLE FIX</div>
          <h2 className="gc-h2" style={h2}>
            Charge people in their own money.
          </h2>
          <p style={lede} className='text-muted!'>
            Shopify shows a converted price. GulfCart processes and settles the real thing —
            AED, SAR, KWD, QAR, BHD and OMR — on the store you already run. A buyer who sees a
            foreign currency at the final step reads it as a store that isn&apos;t for them, and
            leaves without a trace in your analytics.
          </p>

          <div className="mt-7 flex flex-col gap-[13px]">
            {currencyPoints.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <span
                  className="text-[15px] font-bold "
                  style={{ color: c.accent }}
                >
                  <ArrowRightIcon />
                </span>
                <span className="text-[15px] text-muted/80" >
                  {p}
                </span>
              </div>
            ))}
          </div>

          <div
            className="mt-[30px] border border-bad flex items-center gap-5 rounded-2xl px-[22px] py-5"
            style={{
              background: 'rgba(255,122,107,.05)',
            }}
          >
            <div
              className="text-[30px] font-bold text-bad tracking-[-.03em]"
              style={{ fontFamily: font.display }}
            >
              -30%
            </div>
            <div className="text-[14.5px] leading-[1.55] text-muted/80" >
              Conversion typically drops by about a third the moment a Gulf buyer is quoted in a
              currency that isn&apos;t theirs.
            </div>
          </div>
        </div>

        <div
          className="gc-grid-2 grid grid-cols-2 gap-px overflow-hidden rounded-[18px] border border-line-soft"

        >
          {markets.map((m) => (
            <div
              key={m.code}
              className="gc-tile p-6 bg-surface hover:bg-surface/70"
            >
              <div
                className="text-2xl font-bold tracking-[-.02em]"
                style={{ fontFamily: font.display, color: c.accent }}
              >
                {m.code}
              </div>
              <div className="mt-[9px] text-sm font-semibold">{m.name}</div>
              <div className="mt-1 text-[12.5px] leading-[1.45]" style={{ color: c.fainter }}>
                {m.methods}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="mt-[34px] container flex flex-wrap items-center justify-between gap-[26px] rounded-2xl px-7 py-6"
        style={{ border: `1px solid ${c.accentA(0.22)}`, background: c.accentA(0.06) }}
      >
        <div className="max-w-[720px] text-[15.5px] leading-[1.6] text-muted" >
          Selling in one country today? Only that currency has to be switched on. The other five
          sit dormant until you want them — no second store, no new licence, no rebuild.
        </div>
        <a href="#form" className="whitespace-nowrap text-sm font-semibold">
          Ask what this looks like for us →
        </a>
      </div>
    </section>
  );
}