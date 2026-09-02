'use client'
import { c, font, shell } from '@/lib/tokens';
import { heroBullets, logos } from '@/lib/content';
import LeadForm from './LeadForm';
import { CheckIcon } from '@phosphor-icons/react';

export default function Hero() {
  return (
    <section className="relative bg-surface overflow-hidden px-[26px] pb-[70px] pt-[60px]">
      <div className="absolute  inset-0 bg-[radial-gradient(900px_520px_at_20%_0%,rgba(var(--accent-rgb),0.30),transparent_60%)]" />
      <div
        className="
            absolute inset-0
            bg-[linear-gradient(rgba(13,13,13,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(13,13,13,.08)_1px,transparent_1px)]
            bg-[size:56px_56px]
            [mask-image:linear-gradient(180deg,#000,transparent_85%)]
          "
      />

      <div className="gc-split relative mx-auto grid  w-full container items-start gap-24 grid-cols-[minmax(0,1.08fr)_minmax(360px,.92fr)]">
        <div className="min-w-0 overflow-hidden pt-3">
          <div
            className="bg-surface/60 backdrop-blur border border-line-soft inline-flex text-accentLight items-center gap-[9px] rounded-lg px-[14px] py-[7px] text-[11.5px] font-bold tracking-[.13em]"

          >
            CHECKOUT GROWTH PLATFORM FOR SHOPIFY BRANDS
          </div>

          <h1
            className=" text-text gc-h1 mt-[22px] text-[58px] font-bold leading-[1.05] tracking-[-.035em] [text-wrap:balance]"
          >
            You already paid for the traffic.{' '}
            <span className='text-accent'>Stop losing it at checkout.</span>
          </h1>

          <p
            className="mt-[22px] max-w-[560px] text-[18.5px] leading-[1.6] text-muted [text-wrap:pretty]"
          >
            GulfCart replaces the weakest part of your Shopify store with a checkout engineered to
            convert: true local currency, one-tap returning buyers, verified COD, and BNPL that
            behaves. Brands see up to{' '}
            <strong className='text-text'>+39% conversion</strong> on the traffic they already
            have.
          </p>

          <div
            className="gc-grid-2 mt-7 grid max-w-[580px] grid-cols-2 gap-x-[26px] gap-y-[13px]"
          >
            {heroBullets.map((b) => (
              <div key={b} className="flex items-start gap-[11px]">
                <span
                  className="mt-0.5 text-accent flex h-[19px] w-[19px] flex-none items-center justify-center rounded-[6px] text-[11px] font-extrabold"
                  style={{
                    background: c.accentA(0.14),
                    border: `1px solid ${c.accentA(0.4)}`,

                  }}
                >
                  <CheckIcon />
                </span>
                <span className="text-[14.5px] leading-[1.5] text-muted" >
                  {b}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-9 border-t pt-6" style={{ borderColor: c.line }}>
            <div
              className="text-[11px] font-bold tracking-[.18em]"
              style={{ color: c.ghost }}
            >
              POWERING CHECKOUT FOR
            </div>
            <div
              className="mt-4 overflow-hidden"
              style={{ maskImage: 'linear-gradient(90deg,#000 76%,transparent)' }}
            >
              <div className="gc-marquee">
                {[...logos, ...logos].map((l, i) => (
                  <div
                    key={`${l}-${i}`}
                    className="whitespace-nowrap text-[16px] font-semibold tracking-[.04em]"
                    style={{ fontFamily: font.display, color: '#565D6C' }}
                  >
                    {l}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}