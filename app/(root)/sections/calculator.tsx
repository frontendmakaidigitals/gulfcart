"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const USD_TO_AED = 3.67;

export default function PricingCalculator() {
  const [aedGmv, setAedGmv] = useState(200000);

  const getPlanDetails = (currentAed: number) => {
    if (currentAed <= 100000)
      return { name: "Starter", rate: 0.012, rateLabel: "1.2%", priceUSD: 149 };
    if (currentAed <= 500000)
      return { name: "Growth", rate: 0.009, rateLabel: "0.9%", priceUSD: 249 };
    return {
      name: "Enterprise",
      rate: null,
      rateLabel: "Custom",
      priceUSD: null,
    };
  };

  const plan = getPlanDetails(aedGmv);

  const baseFeeUSD = plan.priceUSD ?? 0;
  const baseFeeAED = Math.round(baseFeeUSD * USD_TO_AED);
  const gmvFeeAED = plan.rate ? Math.round(aedGmv * plan.rate) : 0;
  const totalAED = baseFeeAED + gmvFeeAED;

  const shopify2AED = Math.round(aedGmv * 0.02);
  const shopify1AED = Math.round(aedGmv * 0.01);
  const savingsBasic = shopify2AED - gmvFeeAED;
  const savingsStandard = shopify1AED - gmvFeeAED;

  const fmtAED = (n: number) =>
    new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n);

  const fmtAEDShort = (n: number) => {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 10_000) return `${Math.round(n / 1_000)}K`;
    return Math.round(n).toLocaleString();
  };

  const fmtUSD = (n: number) =>
    "$" +
    new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n);

  return (
    <section className="bg-white rounded-[2.5rem] border border-zinc-100 shadow-2xl p-6 md:p-10 text-zinc-900 w-full">
      {/* Header */}
      <div>
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#00bfa5]">
          Calculator
        </span>
        <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-zinc-900">
          What will you pay?
        </h2>
        <p className="mt-1.5 text-xs text-zinc-500 font-normal">
          Slide to your monthly GCC GMV and see your cost vs what Shopify
          charges today.
        </p>
      </div>

      {/* Slider Metric Input */}
      <div className="mt-10">
        <div className="flex items-end justify-between mb-3">
          <span className="text-xs font-bold text-zinc-800">
            Your monthly GCC GMV
          </span>
          <span className="text-2xl font-black text-[#00bfa5]">
            AED {fmtAEDShort(aedGmv)}
          </span>
        </div>

        <input
          type="range"
          min="10000"
          max="600000"
          step="5000"
          value={aedGmv}
          onChange={(e) => setAedGmv(Number(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-zinc-100 accent-[#00bfa5]"
          style={{
            background: `linear-gradient(to right, #00bfa5 0%, #00bfa5 ${((aedGmv - 10000) / 590000) * 100}%, #e4e4e7 ${((aedGmv - 10000) / 590000) * 100}%, #e4e4e7 100%)`,
          }}
        />
        <div className="flex justify-between items-center mt-2 text-[10px] text-zinc-400 font-bold tracking-wide">
          <span>AED 10K</span>
          <span>AED 600K</span>
        </div>
      </div>

      {/* Dynamic Sub-header Plan Summary */}
      <div className="mt-8 flex items-center justify-between rounded-xl bg-[#F6F8F9] px-5 py-4 font-bold border border-zinc-200">
        <span className="text-xs text-zinc-700">Your Plan</span>
        <span className="text-xs font-bold text-[#00bfa5]">
          {plan.name} — {plan.rateLabel} GMV
        </span>
      </div>

      {plan.priceUSD !== null ? (
        <>
          {/* Main Visual Value Grid */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Flat Fee */}
            <div className="flex flex-col items-center justify-center rounded-2xl bg-[#F6F8F9] border border-zinc-200 p-5 text-center">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                Flat Fee
              </span>
              <span className="mt-1 text-2xl font-extrabold text-[#00bfa5]">
                {fmtUSD(baseFeeUSD)}
              </span>
              <span className="mt-0.5 text-[10px] text-zinc-400 font-medium">
                ≈ AED {fmtAED(baseFeeAED)} · per month
              </span>
            </div>

            {/* GMV Fee */}
            <div className="flex flex-col items-center justify-center rounded-2xl bg-[#F6F8F9] border border-zinc-200 p-5 text-center">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                GMV Fee
              </span>
              <span className="mt-1 text-2xl font-extrabold text-[#00bfa5]">
                AED {fmtAED(gmvFeeAED)}
              </span>
              <span className="mt-0.5 text-[10px] text-zinc-400 font-medium">
                {plan.rateLabel} of AED {fmtAEDShort(aedGmv)}
              </span>
            </div>

            {/* Total Target Card */}
            <div className="flex flex-col items-center justify-center rounded-2xl bg-[#00bfa5] p-5 text-center text-white shadow-lg shadow-[#00bfa5]/20">
              <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider">
                Total You Pay
              </span>
              <span className="mt-1 text-2xl font-black">
                AED {fmtAED(totalAED)}
              </span>
              <span className="mt-0.5 text-[10px] text-white/80 font-medium">
                per month · flat fee + GMV fee
              </span>
            </div>
          </div>

          {/* Shopify Competitor Matrix Box */}
          <div className="mt-6 rounded-2xl bg-primary/10 border border-primary/20 p-6">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00bfa5]">
              Your Saving vs Shopify
            </span>

            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 border-b border-[#00bfa5]/10 pb-5">
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-[#00bfa5]">
                  vs Shopify Basic (2%)
                </span>
                <span className="mt-0.5 text-xl font-black text-[#00bfa5]">
                  +AED {fmtAED(savingsBasic)}/mo
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-zinc-500">
                  vs Shopify Standard (1%)
                </span>
                <span className="mt-0.5 text-xl font-black text-zinc-800">
                  +AED {fmtAED(savingsStandard)}/mo
                </span>
              </div>
            </div>

            <p className="mt-3 text-[11px] font-medium leading-relaxed text-zinc-400">
              That&apos;s money that was going to Shopify every month. Now it stays
              with you — plus you get all of GCC.
            </p>
          </div>
        </>
      ) : (
        /* Enterprise fallback view */
        <div className="mt-5 rounded-2xl bg-[#F6F8F9] p-8 text-center flex flex-col items-center justify-center border border-zinc-100">
          <p className="text-zinc-500 text-sm max-w-sm font-medium">
            You&apos;re in Enterprise territory — let&apos;s talk custom pricing
            tailored to your volume.
          </p>
          <button
            type="button"
            className="mt-4 px-6 py-2.5 bg-[#00bfa5] hover:bg-[#00a892] font-bold text-white text-xs rounded-xl shadow-md transition-all"
          >
            Book a call →
          </button>
        </div>
      )}
    </section>
  );
}
