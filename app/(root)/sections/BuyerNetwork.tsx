'use client'
import { c, eyebrow, font, shell } from '@/lib/tokens';

import { networkPoints, networkStats } from '@/lib/content';
import { ArrowRightIcon } from '@phosphor-icons/react';

export default function BuyerNetwork() {
  return (
    <section
      id="network"
      className=" pb-[88px] bg-background [scroll-margin-top:90px]"

    >
      <div
        className="rounded-[22px] bg-surface!  container p-12"
        style={{
          border: `1px solid ${c.accentA(0.22)}`,
          background: `linear-gradient(150deg,${c.accentA(0.09)},transparent 60%),${c.surface}`,
        }}
      >
        <div className="gc-split  grid grid-cols-2 items-center gap-[52px]">
          <div>
            <div style={eyebrow}>THE UNFAIR ADVANTAGE</div>
            <h2
              className="gc-h2 mt-4 text-[38px] font-bold leading-[1.1] tracking-[-.03em]"
              style={{ fontFamily: font.display }}
            >
              Your first-time buyer has already checked out with us.
            </h2>
            <p className="mt-4 text-muted text-[16.5px] leading-[1.65]" >
              Every brand on GulfCart shares one verified buyer layer. So a shopper who has never
              visited your store still arrives with their details known and their identity
              proven — which is why one-tap checkout works from day one, not after months of
              building your own customer base.
            </p>
            <div className="mt-7 flex flex-col gap-[13px]">
              {networkPoints.map((n) => (
                <div key={n} className="flex items-start gap-3">
                  <span
                    className="text-[15px] font-bold leading-[1.55]"
                    style={{ color: c.accent }}
                  >
                    <ArrowRightIcon />
                  </span>
                  <span className="text-[15px] leading-[1.55] text-text-soft/80" >
                    {n}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="gc-grid-2 grid grid-cols-2 gap-[13px]">
            {networkStats.map((n) => (
              <div
                key={n.l}
                className="rounded-2xl bg-surfaceRaised border border-line-soft p-6"
              >
                <div
                  className="text-[30px] font-bold tracking-[-.035em]"
                  style={{ fontFamily: font.display, color: c.accent }}
                >
                  {n.v}
                </div>
                <div className="mt-2 text-[13.5px] leading-[1.5] text-muted" >
                  {n.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}