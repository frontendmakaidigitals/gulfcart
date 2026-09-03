import { levers } from '@/lib/content';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

export default function Levers() {
  return (
    <section id="levers" className="shell scroll-mt-24 px-[26px] pb-22">
      <div className="max-w-[700px]">
        <div className="eyebrow">WHAT&apos;S INSIDE</div>
        <h2 className="mt-4 text-[32px] leading-tight tracking-[-.032em] sm:text-[46px]">Six things Shopify can&apos;t do in the Gulf.</h2>
        <p className="mt-[18px] text-[17.5px] leading-relaxed text-muted">
          Each one is a rule Shopify applies globally or not at all. GulfCart makes every one of them country-aware.
          Turn on the ones you need.
        </p>
      </div>

      {/* Mobile: carousel */}
      <Carousel opts={{ align: 'start' }} className="mt-11 w-full sm:hidden">
        <CarouselContent className="-ml-4">
          {levers.map((l) => (
            <CarouselItem key={l.t} className="basis-[85%] pl-4">
              <LeverCard l={l} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-6 flex items-center justify-end gap-2">
          <CarouselPrevious className="static text-accent/40 rounded-lg translate-x-0 translate-y-0" />
          <CarouselNext className="static translate-x-0 text-accent/40 rounded-lg translate-y-0" />
        </div>
      </Carousel>

      {/* Tablet+: grid */}
      <div className="mt-11 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {levers.map((l) => (
          <LeverCard key={l.t} l={l} />
        ))}
      </div>
    </section>
  );
}

function LeverCard({ l }: { l: (typeof levers)[number] }) {
  return (
    <div className="flex h-full flex-col gap-3.5 rounded-[18px] border border-white/8 bg-surface p-7 transition-colors hover:border-accent/35 hover:bg-surface-hover">
      <div className="flex items-start justify-between gap-3.5">
        <div className="pt-[5px] text-[10.5px] font-bold tracking-[.14em] text-accent">{l.tag}</div>

      </div>
      <h3 className="text-[19px] leading-tight tracking-[-.02em]">{l.t}</h3>
      <p className="flex-1 text-[14.5px] leading-relaxed text-dim">{l.d}</p>
      <div className="border-t border-white/[.07] pt-3.5 text-[12.5px] text-fainter">{l.metricLabel}</div>
    </div>
  );
}