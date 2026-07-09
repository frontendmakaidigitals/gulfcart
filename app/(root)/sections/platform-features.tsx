"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import * as Icons from "@phosphor-icons/react";

// Feature data structure remains unchanged
const featuresData = [
  {
    title: "True Local Currency Checkout",
    desc: "Actual processing and settlement in SAR, AED, KWD, OMR, BHD, QAR — not display conversion. Buyers pay in their currency. You settle in yours.",
    categories: ["all", "checkout", "gcc"],
    iconName: "CurrencyCircleDollar" as const,
  },
  {
    title: "Centralised BNPL Management",
    desc: "Tabby and Tamara managed from one dashboard across all GCC markets — unified rules, unified reporting, full control over which countries each provider appears in.",
    categories: ["all", "checkout"],
    iconName: "CreditCard" as const,
  },
  {
    title: "Country-Level Payment Rules",
    desc: "Configure exactly which payment methods appear per GCC country. Tabby in UAE and Saudi. Apple Pay where supported. Cards everywhere. One rule set. Zero manual logic.",
    categories: ["all", "checkout", "gcc"],
    iconName: "Sliders" as const,
  },
  {
    title: "COD with Fee by Country",
    desc: "Enable Cash on Delivery per country and auto-charge a handling fee when selected. Reduces COD abuse, protects margins, and nudges buyers toward prepaid.",
    categories: ["all", "checkout", "conversion"],
    iconName: "Coins" as const,
  },
  {
    title: "Shipping, Tax & Logistics by Country",
    desc: "Localised shipping rates, VAT rules, and tax handling across all six GCC markets — configured once from a single dashboard, applied automatically at checkout.",
    categories: ["all", "gcc"],
    iconName: "Truck" as const,
  },
  {
    title: "One Store. All Six GCC Markets.",
    desc: "Your existing UAE Shopify store expands across the entire GCC. No new plans. No new trade licenses. No new builds. GulfCart handles the localisation layer.",
    categories: ["all", "gcc"],
    iconName: "Globe" as const,
  },
  {
    title: "GCC Discount Engine",
    desc: "SAR-only promotions for Saudi. KWD-locked vouchers for Kuwait. In-checkout nudges that push buyers to add more items. Country-specific discount logic that drives AOV growth.",
    categories: ["all", "conversion"],
    iconName: "Tag" as const,
  },
  {
    title: "Buyer Network — One-Click Checkout",
    desc: "GCC shoppers who've bought from any GulfCart brand get their address and payment pre-filled at every other GulfCart checkout. The network grows with every brand that joins.",
    categories: ["all", "conversion"],
    iconName: "Lightning" as const,
  },
  {
    title: "Buyer Login & Fraud Reduction",
    desc: "Login-gated checkout eliminates fake COD orders and spam. Verified buyer intent means cleaner fulfilment, lower return rates, and better buyer network signal quality.",
    categories: ["all", "conversion"],
    iconName: "ShieldCheck" as const,
  },
  {
    title: "Higher CVR from GCC Ad Spend",
    desc: "When GCC buyers land on a checkout in their local currency with their preferred payment method, your Meta and Google campaigns convert harder. Same spend. More completed orders.",
    categories: ["all", "conversion"],
    iconName: "TrendUp" as const,
  },
  {
    title: "GCC Discount Engine",
    desc: "SAR-only promotions for Saudi. KWD-locked vouchers for Kuwait. In-checkout nudges that push buyers to add more items. Country-specific discount logic that drives AOV growth.",
    categories: ["all", "gcc"],
    iconName: "SealPercentIcon" as const,
  },
];

const PlatformFeatures = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isExpanded, setIsExpanded] = useState(false);

  const tabs = [
    { id: "all", label: "All Features" },
    { id: "checkout", label: "Checkout" },
    { id: "conversion", label: "Conversion & AOV" },
    { id: "gcc", label: "GCC Expansion" },
  ];

  const filteredFeatures = featuresData.filter((feature) =>
    feature.categories.includes(activeTab),
  );

  // Reset expansion when changing tabs to prevent weird jumping behaviors
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setIsExpanded(false);
  };

  return (
    <section id="platform" className="w-full px-6 py-20 text-zinc-900 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header Introduction Section */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00bfa5]">
              The Platform
            </span>
            <h2 className="mt-3 sm:leading-[1.15]">
              Not a Plugin. <br /> A full growth stack.
            </h2>
          </div>
          <div className="max-w-xl lg:pt-6">
            <p className="text-base font-normal leading-relaxed text-zinc-600">
              GulfCart is a{" "}
              <span className="text-[#065041] font-semibold underline decoration-[#00bfa5]/40 underline-offset-2">
                full-stack growth platform
              </span>{" "}
              for GCC D2C brands — multicurrency checkout, native BNPL, smart
              discounts, and buyer identity. Every feature is engineered to move
              revenue.
            </p>
          </div>
        </div>

        {/* Filter Tab System Segment */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={cn(
                "rounded-full cursor-pointer px-5 py-2 text-xs font-bold transition-all duration-200 border",
                activeTab === tab.id
                  ? "bg-[#00bfa5] text-white border-transparent shadow-sm"
                  : "bg-white text-zinc-500 border-zinc-200 hover:bg-zinc-50 hover:text-zinc-800",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Feature Grid Layout System */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-300">
          {filteredFeatures.map((feature, index) => {
            const IconComponent = Icons[feature.iconName] || Icons.Cube;

            return (
              <div
                key={index}
                className={cn(
                  "group flex flex-col rounded-3xl border border-zinc-150 bg-[#F6F8F9]/40 p-8 shadow-sm transition-all duration-200 hover:border-[#00bfa5]/30 hover:bg-white hover:shadow-xl hover:shadow-zinc-100",
                  // Hide cards past index 2 strictly on mobile, show everything if expanded or on sm screens and above
                  !isExpanded && index > 2 ? "hidden sm:flex" : "flex",
                )}
              >
                {/* Micro-Interaction Icon Box Wrapper */}
                <div className="h-12 w-12 rounded-2xl bg-zinc-100/70 transition-colors group-hover:bg-[#edf7f4] flex items-center justify-center">
                  <IconComponent
                    size={28}
                    weight="duotone"
                    className="text-zinc-500 transition-colors group-hover:text-[#00bfa5]"
                  />
                </div>

                {/* Feature Text Title Accent */}
                <h3 className="mt-6 text-lg font-bold tracking-tight text-zinc-900">
                  {feature.title}
                </h3>

                {/* Description Body context block */}
                <p className="mt-2.5 text-xs leading-relaxed text-zinc-500 font-medium">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile Action Controller — Only visible when total cards count exceeds 3 */}
        {filteredFeatures.length > 3 && (
          <div className="mt-8 flex justify-center sm:hidden">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 px-6 py-3 border border-zinc-200 rounded-full text-xs font-bold text-zinc-700 bg-white hover:bg-zinc-50 shadow-sm transition-all active:scale-95"
            >
              <span>
                {isExpanded
                  ? "Show Less"
                  : `Show More (${filteredFeatures.length - 3})`}
              </span>
              {isExpanded ? (
                <Icons.CaretUp size={14} weight="bold" />
              ) : (
                <Icons.CaretDown size={14} weight="bold" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PlatformFeatures;
