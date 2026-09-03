'use client';

import { plans } from '@/lib/content';
import { trackButtonClick } from '@/lib/fbq';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

export default function Pricing() {
  return (
    <section id="pricing" className="shell scroll-mt-24 px-[26px] pb-22">
      <div className="text-center">
        <div className="eyebrow">PRICING</div>
        <h2 className="mt-4 text-[32px] leading-tight tracking-[-.032em] text-fg sm:text-[46px]">Less than Shopify already takes.</h2>
        <p className="mx-auto mt-[18px] max-w-[520px] text-[17px] leading-relaxed text-muted">
          Shopify charges 2% on every order. We charge less, and the checkout it buys you is designed to pay for itself
          in the first month.
        </p>
      </div>

      {/* Mobile: carousel */}
      <Carousel opts={{ align: 'start' }} className="mt-10 w-full sm:hidden">
        <CarouselContent className="-ml-4">
          {plans.map((p) => (
            <CarouselItem key={p.name} className="basis-[85%] pl-4">
              <PlanCard p={p} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-6 flex items-center justify-end gap-2">
          <CarouselPrevious className="static text-accent/40 rounded-lg translate-x-0 translate-y-0" />
          <CarouselNext className="static text-accent/40 rounded-lg translate-x-0 translate-y-0" />
        </div>
      </Carousel>

      {/* Tablet+: grid */}
      <div className="mt-10 hidden items-start gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((p) => (
          <PlanCard key={p.name} p={p} />
        ))}
      </div>
    </section>
  );
}

function PlanCard({ p }: { p: (typeof plans)[number] }) {
  return (
    <div
      className={`flex h-full flex-col gap-[17px] rounded-[20px] border p-8 ${p.popular
        ? 'border-accent/40 bg-surface-raised bg-linear-170 from-accent/[.09] to-transparent to-55%'
        : 'border-ghost/30 bg-surface'
        }`}
    >
      <div className="flex items-center justify-between">
        <div className="font-display text-[17px] font-bold text-fg">{p.name}</div>
        {p.popular && (
          <div className="rounded-md bg-accent px-[9px] py-1 text-[10.5px] font-extrabold tracking-[.12em] text-ink">POPULAR</div>
        )}
      </div>

      <div>
        <div className="font-display text-[38px] font-bold tracking-[-.035em] text-fg">
          {p.base === null ? 'Custom' : `$${p.base}/mo`}
        </div>
        <div className="mt-1.5 text-[13.5px] text-dim">{p.rate}</div>
        <div className="mt-0.5 text-[13px] text-fainter">{p.band}</div>
      </div>
      <Link
        href="#form"
        onClick={() => trackButtonClick(`pricing_cta_${p.name.toLowerCase().replace(/\s+/g, '_')}`)}
        className={`rounded-[10px] border p-[13px] text-center font-display text-sm font-bold ${p.popular ? 'border-accent bg-accent text-ink hover:bg-accent-light' : 'border-outline/40 text-fg hover:border-accent/50'
          }`}
      >
        {p.cta}
      </Link>

      <div className="flex flex-col gap-2.5 pt-1">
        {p.features.map((f) => (
          <div key={f} className="flex gap-2.5 text-sm leading-snug text-muted">
            <span className="font-bold text-accent">+</span><span>{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}