'use client'
import React, { useState } from "react";
import { cn } from "@/lib/utils";

// 1. Feature data structure with accurate category groupings matching image_1b2f10.png
const featuresData = [
  {
    title: "True Local Currency Checkout",
    desc: "Actual processing and settlement in SAR, AED, KWD, OMR, BHD, QAR — not display conversion. Buyers pay in their currency. You settle in yours.",
    categories: ["all", "checkout", "gcc"],
  },
  {
    title: "Centralised BNPL Management",
    desc: "Tabby and Tamara managed from one dashboard across all GCC markets — unified rules, unified reporting, full control over which countries each provider appears in.",
    categories: ["all", "checkout"],
  },
  {
    title: "Country-Level Payment Rules",
    desc: "Configure exactly which payment methods appear per GCC country. Tabby in UAE and Saudi. Apple Pay where supported. Cards everywhere. One rule set. Zero manual logic.",
    categories: ["all", "checkout", "gcc"],
  },
  {
    title: "COD with Fee by Country",
    desc: "Enable Cash on Delivery per country and auto-charge a handling fee when selected. Reduces COD abuse, protects margins, and nudges buyers toward prepaid.",
    categories: ["all", "checkout", "conversion"],
  },
  {
    title: "Shipping, Tax & Logistics by Country",
    desc: "Localised shipping rates, VAT rules, and tax handling across all six GCC markets — configured once from a single dashboard, applied automatically at checkout.",
    categories: ["all", "gcc"],
  },
  {
    title: "One Store. All Six GCC Markets.",
    desc: "Your existing UAE Shopify store expands across the entire GCC. No new plans. No new trade licenses. No new builds. GulfCart handles the localisation layer.",
    categories: ["all", "gcc"],
  },
  {
    title: "GCC Discount Engine",
    desc: "SAR-only promotions for Saudi. KWD-locked vouchers for Kuwait. In-checkout nudges that push buyers to add more items. Country-specific discount logic that drives AOV growth.",
    categories: ["all", "conversion"],
  },
  {
    title: "Buyer Network — One-Click Checkout",
    desc: "GCC shoppers who've bought from any GulfCart brand get their address and payment pre-filled at every other GulfCart checkout. The network grows with every brand that joins.",
    categories: ["all", "conversion"],
  },
  {
    title: "Buyer Login & Fraud Reduction",
    desc: "Login-gated checkout eliminates fake COD orders and spam. Verified buyer intent means cleaner fulfilment, lower return rates, and better buyer network signal quality.",
    categories: ["all", "conversion"],
  },
  {
    title: "Higher CVR from GCC Ad Spend",
    desc: "When GCC buyers land on a checkout in their local currency with their preferred payment method, your Meta and Google campaigns convert harder. Same spend. More completed orders.",
    categories: ["all", "conversion"],
  },
];

const PlatformFeatures = () => {
  // Category configuration toggle state tracking
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Features" },
    { id: "checkout", label: "Checkout" },
    { id: "conversion", label: "Conversion & AOV" },
    { id: "gcc", label: "GCC Expansion" },
  ];

  // Dynamic calculation step for conditional render mapping
  const filteredFeatures = featuresData.filter((feature) =>
    feature.categories.includes(activeTab)
  );

  return (
    <section className="w-full bg-[#F7F7F5] mt-24 px-6 py-20 text-zinc-900">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Introduction Section */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-12">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00bfa5]">
              The Platform
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-black sm:text-5xl sm:leading-[1.15]">
              Not a Plugin. <br /> A full growth stack.
            </h2>
          </div>
          <div className="max-w-xl lg:pt-6">
            <p className="text-base font-medium leading-relaxed text-zinc-700">
              GulfCart is a <span className="text-[#065041] font-semibold underline decoration-[#00bfa5]/40 underline-offset-2">full-stack growth platform</span> for GCC D2C brands — multicurrency checkout, native BNPL, smart discounts, and buyer identity. Every feature is engineered to move revenue.
            </p>
          </div>
        </div>

        {/* Filter Tab System Segment */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "rounded-full cursor-pointer px-5 py-2 text-sm font-semibold transition-all duration-200 border",
                activeTab === tab.id
                  ? "bg-secondary text-white border-transparent"
                  : "bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50 hover:text-zinc-900"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Feature Grid Layout System */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-300">
          {filteredFeatures.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-200 hover:border-[#00bfa5]/30 hover:shadow-md animate-fadeIn"
            >
              {/* Top Abstract Placeholder Soft Square Graphic */}
              <div className="h-12 w-12 rounded-xl bg-zinc-100 transition-colors group-hover:bg-[#edf7f4] flex items-center justify-center">
                <div className="h-4 w-4 rounded bg-zinc-300 transition-colors group-hover:bg-[#00bfa5]/40" />
              </div>

              {/* Feature Text Title Accent */}
              <h3 className="mt-6 text-lg font-bold tracking-tight text-zinc-950 group-hover:text-black">
                {feature.title}
              </h3>

              {/* Description Body context block */}
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 font-medium">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlatformFeatures;