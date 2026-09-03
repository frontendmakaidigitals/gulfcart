import { heroBullets, logos } from '@/lib/content';
import LeadForm from './LeadForm';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-[26px] pt-15 pb-[70px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_0%,rgba(78,168,255,.15),transparent_68%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(180deg,#000,transparent_85%)]" />

      <div className="shell relative grid items-start gap-13 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,.92fr)]">
        <div className="min-w-0 overflow-hidden pt-3">
          <div className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/8 px-3.5 py-[7px] text-[11.5px] font-bold tracking-[.13em] text-accent-light">
            CHECKOUT GROWTH PLATFORM FOR SHOPIFY BRANDS
          </div>

          <h1 className="mt-[22px] text-[40px] leading-[1.05] tracking-[-.035em] text-balance sm:text-[58px]">
            You already paid for the traffic. <span className="text-accent">Stop losing it at checkout.</span>
          </h1>

          <p className="mt-[22px] max-w-[560px] text-[18.5px] leading-relaxed text-muted text-pretty">
            GulfCart replaces the weakest part of your Shopify store with a checkout engineered to convert: true local
            currency, one-tap returning buyers, verified COD, and BNPL that behaves. Brands see up to{' '}
            <strong className="text-fg">+39% conversion</strong> on the traffic they already have.
          </p>

          <div className="mt-7 grid max-w-[580px] grid-cols-1 gap-x-6 gap-y-[13px] sm:grid-cols-2">
            {heroBullets.map((b) => (
              <div key={b} className="flex items-start gap-[11px]">
                <span className="mt-0.5 flex size-[19px] shrink-0 items-center justify-center rounded-md border border-accent/40 bg-accent/15 text-[11px] font-extrabold text-accent">✓</span>
                <span className="text-[14.5px] leading-snug text-fg-soft">{b}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 border-t border-white/8 pt-6">
            <div className="text-[11px] font-bold tracking-[.18em] text-ghost">POWERING CHECKOUT FOR</div>
            <div className="mt-4 overflow-hidden [mask-image:linear-gradient(90deg,#000_76%,transparent)]">
              <div className="flex w-max animate-marquee items-center gap-11">
                {[...logos, ...logos].map((l, i) => (
                  <div key={i} className={cn(" flex w-28 h-auto ml-4  ")}>
                    <Image
                      width={50}
                      height={50}
                      className="size-full object-contain"
                      alt={`${l.name} logo`}
                      src={`/partner-logos${l.img}`}
                    />
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
