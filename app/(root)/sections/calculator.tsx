"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const USD_TO_AED = 3.67;

export default function PricingCalculator() {
  // Slider is in AED, matching the HTML source (min: 10K, max: 600K)
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

  // Flat fee in USD (monthly), converted to AED — matches HTML
  const baseFeeUSD = plan.priceUSD ?? 0;
  const baseFeeAED = Math.round(baseFeeUSD * USD_TO_AED);

  // GMV fee in AED (monthly) — matches HTML: Math.round(aed * pct)
  const gmvFeeAED = plan.rate ? Math.round(aedGmv * plan.rate) : 0;

  // Total in AED (monthly)
  const totalAED = baseFeeAED + gmvFeeAED;

  // Savings vs Shopify — GMV fee only, monthly, in AED — matches HTML
  const shopify2AED = Math.round(aedGmv * 0.02);
  const shopify1AED = Math.round(aedGmv * 0.01);
  const savingsBasic = shopify2AED - gmvFeeAED;
  const savingsStandard = shopify1AED - gmvFeeAED;

  // Format AED with thousands separator
  const fmtAED = (n: number) =>
    "AED " +
    new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n);

  // Short label for slider display (K / M)
  const fmtAEDShort = (n: number) => {
    if (n >= 1_000_000) return `AED ${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 10_000) return `AED ${Math.round(n / 1_000)}K`;
    return `AED ${Math.round(n).toLocaleString()}`;
  };

  const fmtUSD = (n: number) =>
    "$" +
    new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n);

  return (
    <section className="w-full overflow-hidden px-4 py-20 text-zinc-900 relative">
      <div className="absolute h-120 rounded-full bg-primary/30 top-0 w-30 -right-10" />

      <div className="mx-auto max-w-4xl relative z-10 bg-background/70 rounded-[2.5rem] border border-teal-900/30 p-6 md:p-12">
        {/* Header */}
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          Calculator
        </span>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-black lg:text-5xl">
          What will you pay?
        </h2>
        <p className="mt-3 text-sm font-medium text-zinc-600">
          Slide to your monthly GCC GMV and see your cost vs what Shopify
          charges today.
        </p>

        {/* Slider — AED 10K to AED 600K, matching HTML */}
        <div className="mt-12">
          <div className="flex items-center justify-between font-bold mb-4">
            <span className="text-sm font-bold text-zinc-700">
              Your monthly GCC GMV
            </span>
            <span className="text-2xl font-extrabold text-primary">
              {fmtAEDShort(aedGmv)}
            </span>
          </div>
          <input
            type="range"
            min="10000"
            max="600000"
            step="5000"
            value={aedGmv}
            onChange={(e) => setAedGmv(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-zinc-200 accent-primary"
            style={{
              background: `linear-gradient(to right, #00bfa5 0%, #00bfa5 ${((aedGmv - 10000) / 590000) * 100}%, #e4e4e7 ${((aedGmv - 10000) / 590000) * 100}%, #e4e4e7 100%)`,
            }}
          />
          <div className="flex justify-between items-center mt-2 text-xs text-zinc-400 font-medium">
            <span>AED 10K</span>
            <span>AED 600K</span>
          </div>
        </div>

        {/* Selected Plan */}
        <div className="mt-10 flex items-center justify-between rounded-2xl border border-zinc-200 bg-[#F8F8F8] p-5 font-bold">
          <span className="text-sm text-zinc-800">Your Plan</span>
          <span className="text-base text-primary">
            {plan.name} — {plan.rateLabel} GMV
          </span>
        </div>

        {plan.priceUSD !== null ? (
          <>
            {/* Cost Cards — all monthly, matching HTML */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {/* Flat Fee */}
              <div className="flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-[#F8F8F8] p-6 text-center">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  Flat Fee
                </span>
                <span className="mt-2 text-3xl font-bold text-primary">
                  {fmtUSD(baseFeeUSD)}
                </span>
                <span className="mt-1 text-xs font-medium text-zinc-400">
                  ≈ {fmtAED(baseFeeAED)} · per month
                </span>
              </div>

              {/* GMV Fee */}
              <div className="flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-[#F8F8F8] p-6 text-center">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  GMV fee
                </span>
                <span className="mt-2 text-3xl font-bold text-primary">
                  {fmtAED(gmvFeeAED)}
                </span>
                <span className="mt-1 text-xs font-medium text-zinc-400">
                  {plan.rateLabel} of {fmtAEDShort(aedGmv)}
                </span>
              </div>

              {/* Total */}
              <div className="flex flex-col items-center justify-center rounded-2xl bg-primary p-6 text-center text-white shadow-lg shadow-teal-600/10">
                <span className="text-xs font-bold text-white/80 uppercase tracking-wider">
                  Total you pay
                </span>
                <span className="mt-2 text-3xl font-extrabold">
                  {fmtAED(totalAED)}
                </span>
                <span className="mt-1 text-xs font-medium text-white/80">
                  per month · flat fee + GMV fee
                </span>
              </div>
            </div>

            {/* Savings vs Shopify */}
            <div className="mt-8 rounded-[1.75rem] border border-teal-900/10 bg-[#01B8961A] p-6 md:p-8">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Your Saving vs Shopify
              </span>

              <div className="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-2 border-b border-teal-800/10 pb-6">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-emerald-800/70">
                    vs Shopify Basic (2%)
                  </span>
                  <span
                    className={cn(
                      "mt-1 text-2xl font-extrabold",
                      savingsBasic >= 0 ? "text-primary" : "text-rose-600",
                    )}
                  >
                    {savingsBasic >= 0 ? "+" : ""}
                    {fmtAED(savingsBasic)}/mo
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs font-bold text-zinc-500">
                    vs Shopify Standard (1%)
                  </span>
                  <span
                    className={cn(
                      "mt-1 text-2xl font-extrabold",
                      savingsStandard >= 0 ? "text-zinc-700" : "text-zinc-500",
                    )}
                  >
                    {savingsStandard >= 0 ? "+" : ""}
                    {fmtAED(savingsStandard)}/mo
                  </span>
                </div>
              </div>

              <p className="mt-3 text-xs font-medium leading-relaxed text-emerald-900/60">
                That&apos;s money that was going to Shopify every month. Now it
                stays with you — plus you get all of GCC.
              </p>
            </div>
          </>
        ) : (
          /* Enterprise */
          <div className="mt-6 rounded-2xl border border-zinc-200 bg-[#F8F8F8] p-8 text-center flex flex-col items-center justify-center">
            <p className="text-zinc-500 text-sm max-w-sm">
              You&apos;re in Enterprise territory — let&apos;s talk custom
              pricing tailored to your volume.
            </p>
            <button
              type="button"
              className="mt-4 px-6 py-2.5 bg-primary hover:opacity-90 font-bold text-white text-sm rounded-lg transition-all"
            >
              Book a call →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
