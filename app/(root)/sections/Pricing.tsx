'use client';

import { plans } from '@/lib/content';
import { trackButtonClick } from '@/lib/fbq';
import Link from 'next/link';
import CalculatorOverlay from '../components/calculator-overlay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

type BillingCycle = 'monthly' | 'annual';

// "1 month free" annual math: 11 months billed up front, 12th free.
// effectiveMonthly is shown as the headline number for apples-to-apples
// comparison against the monthly price; annualTotal is the real charge.
function getAnnualPricing(base: number) {
  const annualTotal = base * 11;
  const effectiveMonthly = Math.round(annualTotal / 12);
  return { annualTotal, effectiveMonthly };
}

export default function Pricing() {
  const [open, setIsOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  const handleClose = () => {
    if (open) {
      setIsOpen(false);
    }
  };

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

      {/* Monthly / Annually toggle */}
      <div className="mt-8 flex justify-center">
        <Tabs
          value={billingCycle}
          onValueChange={(val) => setBillingCycle(val as BillingCycle)}
        >
          <TabsList className="relative h-auto rounded-xl border border-outline/40 bg-surface-raised p-1">
            <TabsTrigger
              value="monthly"
              className="rounded-lg px-4 py-2 text-sm font-bold text-muted data-[state=active]:bg-accent data-[state=active]:text-ink"
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger
              value="annual"
              className="rounded-lg px-4 py-2 text-sm font-bold text-muted data-[state=active]:bg-accent data-[state=active]:text-ink"
            >
              Annually
              <span className="ml-2 rounded-full bg-good/60 px-2 py-0.5 text-[10px] font-extrabold tracking-[.08em] text-white">
                1 MONTH FREE
              </span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Mobile: carousel */}
      <Carousel opts={{ align: 'start' }} className="mt-10 w-full sm:hidden">
        <CarouselContent className="-ml-4">
          {plans.map((p) => (
            <CarouselItem key={p.name} className="basis-[85%] pl-4">
              <PlanCard p={p} billingCycle={billingCycle} />
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
          <PlanCard key={p.name} p={p} billingCycle={billingCycle} />
        ))}
      </div>

      <div className='flex w-full justify-center mt-5 '>
        <button className='border border-border p-3 py-2 rounded-lg bg-accent text-gray-50 ' onClick={() => setIsOpen(true)} >
          Fee Calculator
        </button>
      </div>

      <CalculatorOverlay isOpen={open} onClose={handleClose} />
    </section>
  );
}

function PlanCard({
  p,
  billingCycle,
}: {
  p: (typeof plans)[number];
  billingCycle: BillingCycle;
}) {
  const isAnnual = billingCycle === 'annual';
  const pricing = p.base !== null ? getAnnualPricing(p.base) : null;
  const displayPrice =
    p.base === null ? null : isAnnual ? pricing!.effectiveMonthly : p.base;

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
          {displayPrice === null ? 'Custom' : `$${displayPrice}/mo`}
        </div>
      
        {isAnnual && pricing && (
          <div className="mt-1 text-[12px] text-dim">
            Billed ${pricing.annualTotal}/yr
          </div>
        )}
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