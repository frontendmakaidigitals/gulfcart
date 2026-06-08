"use client";
import { QuotesIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const demoReviews = [
  {
    quote:
      "We were running a separate Shopify store for Saudi. GulfCart let us consolidate to one — and Saudi conversion went up because buyers were finally seeing SAR prices.",
    authorTitle: "Operations Lead",
    authorSub: "GCC Fashion Brand · AED 2M+ monthly GMV",
    statBadge: "+39%",
    statDescription:
      "Average CVR lift across GulfCart brands after switching from USD-only checkout.",
  },
  {
    quote:
      "The COD fee feature alone saved us a meaningful chunk of our fulfilment costs. Fake orders dropped within the first two weeks of going live.",
    authorTitle: "Founder",
    authorSub: "PERFUME OASIS · B2C Lifestyle Brand",
    statBadge: "6 → 1",
    statDescription:
      "Brands that consolidated from 6 separate GCC Shopify stores into one GulfCart-powered store.",
  },
  {
    quote:
      "Having Tabby and Tamara work seamlessly right out of the box with country rules is incredible. It solved a puzzle we've tried to solve for two years.",
    authorTitle: "E-commerce Director",
    authorSub: "Regional Beauty Hub · 50k+ Active Customers",
    statBadge: "+24%",
    statDescription:
      "Average AOV uplift achieved via native local discount engine integrations.",
  },
  {
    quote:
      "Our logistics team was overwhelmed with delivery tracking across borders. GulfCart centralized our shipping updates, dropping customer support tickets by half.",
    authorTitle: "Head of Logistics",
    authorSub: "Direct-to-Consumer Apparel · Active across GCC",
    statBadge: "-50%",
    statDescription:
      "Reduction in fulfillment-related support tickets within 30 days of setup.",
  },
  {
    quote:
      "Accepting KNET and MADA directly without complex local merchant accounts completely changed our scaling strategy. Setup took days instead of months.",
    authorTitle: "Chief Technology Officer",
    authorSub: "Hypergrowth Footwear Retailer",
    statBadge: "10x",
    statDescription:
      "Faster go-to-market speed deploying local checkout lanes across new territories.",
  },
];

function Reviews() {
  return (
    <section className="w-full pt-28">
      <div className="container max-w-7xl">
        {/* Header decoration */}
        <div className="mb-16 text-center mx-auto max-w-3xl">
          <span className="text-teal-900 uppercase">
            Why Brands Choose GulfCart
          </span>
          <h2 className="text-4xl font-semibold font-jakarta tracking-tight text-zinc-950  lg:text-6xl">
            Built for how <span className="text-primary">GCC commerce</span>{" "}
            actually works.
          </h2>
        </div>

        {/* Shadcn Carousel Wrapper */}
        {/* opts={{ align: "start" }} aligns cards to the left edge as you slide */}
        <Carousel
          opts={{ align: "start" }}
          className="relative w-full overflow-visible"
        >
          {/* Carousel container window */}
          <CarouselContent className="-ml-2  pt-10 pb-6">
            {demoReviews.map((review, index) => (
              <CarouselItem
                key={index}
                // Responsive spacing: 1 card on mobile, 2 cards on tablet, 3 cards on desktop
                className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <ReviewCard
                  quote={review.quote}
                  authorTitle={review.authorTitle}
                  authorSub={review.authorSub}
                  statBadge={review.statBadge}
                  statDescription={review.statDescription}
                  className="h-full hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl hover:shadow-zinc-200/50"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Controls */}
          {/* Built-in responsive styles: hidden on mobile touch devices, visible on medium viewports */}
          <div className="hidden md:flex justify-end gap-2 mt-4">
            <CarouselPrevious className="static w-12 h-10 rounded-full translate-y-0" />
            <CarouselNext className="static w-12 h-10  rounded-full  translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
export default Reviews;

export interface ReviewCardProps {
  quote: string;
  authorTitle: string;
  authorSub: string;
  statBadge: string;
  statDescription: string;
  className?: string;
}

export function ReviewCard({
  quote,
  authorTitle,
  authorSub,
  statBadge,
  statDescription,
  className,
}: ReviewCardProps) {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col overflow-visible rounded-[2.5rem] bg-white pt-12 border border-zinc-200/50 shadow",
        className,
      )}
    >
      {/* Overlapping Floating Quote Graphic */}
      <div className="absolute -top-10 -left-5 select-none font-serif text-8xl rotate-180 leading-none text-[#cadcd6] opacity-70 pointer-events-none ">
        <QuotesIcon weight="fill" />
      </div>

      {/* Main Review Text and Metadata */}
      <div className="relative z-10 flex flex-1 flex-col items-center px-6 pb-10 text-center sm:px-8">
        {/* Testimonial Quote Statement */}
        <p className="text-base font-medium leading-relaxed tracking-tight text-secondary ">
          {quote}
        </p>

        {/* Author Position Title & Subtitle */}
        <div className="mt-auto pt-8 flex flex-col items-center">
          <h4 className="text-base font-bold text-zinc-950 ">{authorTitle}</h4>
          <p className="mt-1 text-xs font-medium text-zinc-400 ">{authorSub}</p>
        </div>
      </div>

      {/* Bottom Dark Graphic Banner */}
      <div className="mt-auto flex flex-col items-center gap-3 rounded-b-[2.5rem] bg-secondary px-6 py-5 sm:flex-row sm:gap-4 sm:px-8">
        {/* Numerical/Metric Highlight */}
        <span className="whitespace-nowrap text-2xl font-bold tracking-tight text-white md:text-3xl">
          {statBadge}
        </span>

        {/* Supporting Context Copy */}
        <p className="text-[11px] leading-normal text-zinc-400 text-center sm:text-left">
          {statDescription}
        </p>
      </div>
    </div>
  );
}
