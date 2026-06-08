"use client";
import { useState } from "react";
import CalculatorOverlay from "../components/calculator-overlay";
import { cn } from "@/lib/utils";
import { CheckIcon, CircleIcon, ArrowRightIcon } from "@phosphor-icons/react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Exact data structured from image_89f725.png
  const tiers = [
    {
      name: "Starter",
      priceMonthly: 149,
      priceAnnual: 119, // Custom dynamic math example for annual discount
      unit: "/mo",
      highlightText: "+ 1.2% of GCC GMV",
      subHighlight: "Up to AED 100K/mo",
      description: "Perfect for brands just entering GCC markets",
      buttonText: "Get Started ",
      isPopular: false,
      ctaVariant: "outline",
      features: [
        "All 6 GCC currencies",
        "Tabby + Tamara + Stripe",
        "Custom checkout iframe",
        "7-day onboarding",
        "Email support",
      ],
    },
    {
      name: "Growth",
      priceMonthly: 249,
      priceAnnual: 199,
      unit: "/mo",
      highlightText: "+ 0.9% of GCC GMV",
      subHighlight: "AED 100K – 500K/mo",
      description: "For brands scaling across all GCC markets",
      buttonText: "Get Started ",
      isPopular: true,
      ctaVariant: "solid",
      features: [
        "Everything in Starter",
        "Analytics dashboard",
        "Country-level reporting",
        "WhatsApp support",
        "Arabic checkout UI",
      ],
    },
    {
      name: "Enterprise",
      isCustom: true,
      priceText: "Custom",
      highlightText: "+ Custom of GCC GMV",
      subHighlight: "AED 500K+/mo",
      description: "For high-volume brands needing full control",
      buttonText: "Talk to us ",
      isPopular: false,
      ctaVariant: "outline",
      features: [
        "Everything in Growth",
        "Dedicated account manager",
        "One-click returning buyer",
        "GCC discount engine",
        "White-label option",
        "SLA guarantee",
      ],
    },
  ];

  return (
    <section
      id={"pricing"}
      className="w-full bg-white relative overflow-hidden px-6 pt-16 pb-14 text-zinc-900"
    >
      {isOpen && (
        <CalculatorOverlay onClose={() => setIsOpen(false)} isOpen={isOpen} />
      )}
      <div className="absolute h-120 rounded-full bg-primary/30 top-0 -left-[45%] lg:top-[0%] w-30 lg:-left-[13%] rotate-45" />
      <div className="absolute h-120 rounded-full bg-primary/30 top-[17%] -left-44 lg:top-[4%] w-30 lg:-left-10 rotate-45" />
      <div className="absolute h-120 rounded-full bg-primary/30  lg:top-[29%] top-[7%] w-30 rotate-[40deg] -left-34 lg:-left-28" />
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center max-w-3xl mb-10">
          <h2 className="sm:leading-[1.15]">
            Less than what you <br /> pay on{" "}
            <span className="bg-[#95bf47] text-white leading-relaxed px-3">
              Shopify
            </span>{" "}
          </h2>
          <p className="mt-6 text-lg font-medium text-zinc-600 leading-relaxed">
            Shopify charges 2% on every order. We charge less — and{" "}
            <br className="hidden sm:inline" /> you get all of GCC from one
            store.
          </p>
        </div>

        {/* Premium Pill Tab Selector Controller */}
        <div className="flex items-center gap-4 mb-16 select-none">
          <div className="relative p-1 bg-zinc-100 rounded-xl flex items-center border border-zinc-200/50">
            {/* Monthly Tab Button */}
            <button
              onClick={() => setIsAnnual(false)}
              className={cn(
                "relative z-10 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200",
                !isAnnual
                  ? "text-zinc-950 bg-white shadow-sm"
                  : "text-zinc-500 hover:text-zinc-800",
              )}
            >
              Monthly
            </button>

            {/* Annual Tab Button */}
            <button
              onClick={() => setIsAnnual(true)}
              className={cn(
                "relative z-10 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200",
                isAnnual
                  ? "text-zinc-950 bg-white shadow-sm"
                  : "text-zinc-500 hover:text-zinc-800",
              )}
            >
              <CircleIcon
                className="absolute animate-pulse -top-1 right-1 fill-green-500"
                weight="fill"
              />
              Annually
              {isAnnual && (
                <span className="  ml-2 bg-primary/10 text-xs font-bold text-[#065041] tracking-wide">
                  + 1 month free
                </span>
              )}
            </button>

            {/* Badge outside the toggle */}
          </div>

          {/* Value Badge Indicator */}
        </div>

        {/* Pricing Cards Grid Mesh */}
        <div className="grid grid-cols-1 gap-8 w-full md:grid-cols-3 items-stretch max-w-6xl">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={cn(
                "relative flex flex-col rounded-[2rem] border p-8 bg-white transition-all duration-200",
                tier.isPopular
                  ? "border-[#1ce2c7] shadow-xl shadow-teal-500/5 ring-1 ring-[#1ce2c7]/20 mt-4 md:mt-0"
                  : "border-zinc-200 shadow-sm",
              )}
            >
              {/* Popularity Badge Overlay */}
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#1ce2c7] px-6 py-1 text-[11px] font-bold uppercase tracking-widest text-white whitespace-nowrap">
                  Most Popular
                </div>
              )}

              {/* Tier Meta Header */}
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-4">
                {tier.name}
              </span>

              {/* Price Calculation Output Box */}
              <div className="h-20 flex items-baseline text-black">
                {tier.isCustom ? (
                  <span className="text-5xl font-black tracking-tight text-zinc-950">
                    {tier.priceText}
                  </span>
                ) : (
                  <>
                    <span className="text-5xl font-black tracking-tight text-zinc-950">
                      ${isAnnual ? tier.priceAnnual : tier.priceMonthly}
                    </span>
                    <span className="text-xl font-bold ml-1 text-zinc-400">
                      {tier.unit}
                    </span>
                  </>
                )}
              </div>

              {/* Special Dynamic Value Highlight Bars */}
              <div className="mt-4">
                <span className="text-[#1ce2c7] font-extrabold text-lg block tracking-tight">
                  {tier.highlightText}
                </span>
                <span className="text-xs font-bold text-zinc-400 block mt-0.5">
                  {tier.subHighlight}
                </span>
              </div>

              {/* Description context body text */}
              <p className="mt-6 text-sm font-medium leading-relaxed text-zinc-500 min-h-[40px]">
                {tier.description}
              </p>

              {/* Action Buttons Frame */}
              <button
                className={cn(
                  "mt-6 w-full flex justify-center items-center gap-2 rounded-xl py-3.5 text-xs font-bold transition-all duration-200 border tracking-wide",
                  tier.ctaVariant === "solid"
                    ? "bg-[#1ce2c7] text-white border-transparent hover:bg-[#19ccb3] shadow-md shadow-teal-500/10"
                    : "bg-white text-zinc-800 border-zinc-200 hover:bg-zinc-50",
                )}
              >
                {tier.buttonText}
                <ArrowRightIcon className="size-4 mt-0.5" />
              </button>

              <hr className="my-8 border-zinc-100" />

              {/* Checkmark Features List Matrix */}
              <ul className="space-y-4 flex-1">
                {tier.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className="flex items-start gap-3 text-xs font-semibold text-zinc-600"
                  >
                    {/* Teal colored checklist svg path icon */}
                    <CheckIcon className="stroke-primary size-4" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => setIsOpen(true)}
          className="mt-8 rounded-xl bg-secondary px-4 py-3 text-base font-semibold text-white shadow-lg shadow-teal-500/20 transition-all hover:bg-secondary/80 active:scale-[0.98]"
        >
          Calculate the difference now
        </button>
      </div>
    </section>
  );
};

export default Pricing;
