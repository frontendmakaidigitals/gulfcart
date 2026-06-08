"use client";

import React from "react";
import Image from "next/image";

// Replace with your real image asset path
const FLAG_IMAGE_SRC = "/path-to-your-gcc-flags-image.png";

const ShopifyProblem = () => {
  const cards = [
    {
      num: "01",
      title: "Shoppers bounce in wrong currency",
      desc: "Displaying USD to a Saudi or Kuwaiti buyer signals this store wasn't built for them. Without true local currency processing, you're losing sales before the cart even forms — and you don't see it in your analytics.",
      stat: "–30%",
      statDesc: "CVR drop when GCC buyers encounters other currency",
    },
    {
      num: "02",
      title: "Brands build 6 stores for 6 countries",
      desc: "UAE, Saudi, Kuwait, Qatar, Bahrain, Oman — each needing a separate Shopify plan, payment setup, and operations. It's the workaround every multi-market brand resorts to. It doesn't scale and it kills margins.",
      stat: "6x",
      statDesc: "The overhead of running separate stores per GCC country",
    },
    {
      num: "03",
      title: "Shipping, tax & COD — all broken by country",
      desc: "No per-country COD rules. No localised shipping rates. No market-specific tax handling. One blunt global setting applied across six different markets — costing you margin, buyer trust, and orders on every GCC shipment.",
      stat: "6",
      statDesc: "Markets. One broken ruleset applied to all of them.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden text-zinc-900 pt-8 pb-16 lg:py-24 flex flex-col lg:block">
      {/* MEDIA BANNER - Positioned at the top on mobile, absolute on desktop */}
      <div className="order-1 lg:order-none w-full lg:w-3xl relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 lg:left-[60%] h-[320px] sm:h-[380px] lg:h-[75%] overflow-hidden lg:rounded-l-full border-b lg:border-b-0 lg:border-l border-zinc-100 shadow-xl z-0 bg-zinc-900 mb-8 lg:mb-0">
        {/* 1. Top Right Flag */}
        <video
          className="absolute top-0 right-0 w-[85%] h-[45%] object-cover z-10 origin-top-right"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/anime-flags/flag-1.mp4" type="video/mp4" />
        </video>

        {/* 2. Top/Middle Left Flag */}
        <video
          className="absolute top-[12%] -left-[10%] w-[70%] h-[40%] object-cover z-20 -rotate-12 scale-110 shadow-xl"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/anime-flags/flag-2.mp4" type="video/mp4" />
        </video>

        {/* 3. Center Flag */}
        <video
          className="absolute top-[32%] -right-[5%] w-[65%] h-[35%] object-cover z-30 -rotate-6 shadow-[0_-15px_30px_rgba(0,0,0,0.25)]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/anime-flags/flag-3.mp4" type="video/mp4" />
        </video>

        {/* 4. Bottom Left Flag */}
        <video
          className="absolute bottom-[8%] -left-[5%] w-[60%] h-[38%] object-cover z-40 rotate-6 shadow-[0_-10px_25px_rgba(0,0,0,0.3)]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/anime-flags/flag-4.mp4" type="video/mp4" />
        </video>

        {/* 5. Bottom Right Foreground Flag */}
        <video
          className="absolute bottom-0 right-0 w-[55%] h-[38%] object-cover z-50 rounded-tl-xl shadow-[0_-15px_30px_rgba(0,0,0,0.4)]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/anime-flags/flag-5.mp4" type="video/mp4" />
        </video>
      </div>

      {/* CORE CONTENT CONTAINER */}
      <div className="order-2 lg:order-none container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT AREA: Typography Content and Problem Cards */}
          <div className="col-span-1 lg:col-span-8 flex flex-col">
            {/* Header Content */}
            <div className="max-w-2xl">
              <h2 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl sm:leading-[1.1]">
                Shopify doesn&apos;t solve <br />
                GCC commerce.
              </h2>
              <h2 className="text-3xl font-black tracking-tight text-[#1ce2c7] sm:text-5xl mt-1">
                We do.
              </h2>
              <p className="mt-4 lg:mt-6 text-sm lg:text-base font-medium leading-relaxed text-zinc-500 max-w-lg">
                Every Shopify brand selling in the Gulf hits the same ceiling.
                Here&apos;s what&apos;s broken out of the box.
              </p>
            </div>

            <span className="mt-10 lg:mt-12 text-xs font-bold uppercase tracking-widest text-emerald-800/60 block pb-3 border-b border-zinc-100 lg:border-none">
              The Checkout Problems
            </span>

            {/* CARDS LIST: Horizontal scroll on mobile, normal grid on desktop */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 mt-4 pb-4 lg:pb-0 lg:grid lg:grid-cols-3 lg:gap-4 lg:overflow-visible scrollbar-hide">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="snap-center shrink-0 w-[85vw] sm:w-[48vw] lg:w-auto flex flex-col justify-between rounded-2xl bg-secondary p-6 text-white shadow-sm"
                >
                  <div>
                    {/* Big faint number identifier */}
                    <span className="text-5xl font-black text-[#B1B1B140] block tracking-tight select-none">
                      {card.num}
                    </span>
                    <h3 className="mt-4 text-base lg:text-lg font-bold tracking-tight text-white leading-snug">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-[11px] leading-relaxed font-medium text-zinc-400出了">
                      {card.desc}
                    </p>
                  </div>

                  {/* Embedded Performance Metrics inside the slide for clean mobile reading */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex flex-col lg:hidden">
                    <span className="text-2xl font-black text-[#1ce2c7] tracking-tight">
                      {card.stat}
                    </span>
                    <p className="mt-0.5 text-[10px] font-medium leading-normal text-zinc-400">
                      {card.statDesc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* DESKTOP-ONLY METRICS ROW */}
            <div className="hidden lg:grid grid-cols-3 gap-4 mt-6">
              {cards.map((card, index) => (
                <div key={index} className="flex flex-col px-1">
                  <span className="text-3xl font-black text-[#1ce2c7] tracking-tight">
                    {card.stat}
                  </span>
                  <p className="mt-1 text-[11px] font-medium leading-normal text-zinc-500">
                    {card.statDesc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Right layout spacing fallback */}
          <div className="hidden lg:block lg:col-span-5" />
        </div>
      </div>
    </section>
  );
};

export default ShopifyProblem;
