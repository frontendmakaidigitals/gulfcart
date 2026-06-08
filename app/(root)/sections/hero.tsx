"use client";
import { useState } from "react";
import Image from "next/image";
import CalculatorOverlay from "../components/calculator-overlay";
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="relative w-full bg-linear-to-tl min-h-[calc(100vh-110px)] via-transparent from-primary/40 mb-24 pt-12  lg:py-8 lg:pb-16 overflow-hidden flex items-center">
      {isOpen && (
        <CalculatorOverlay onClose={() => setIsOpen(false)} isOpen={isOpen} />
      )}
      <div className="container w-full grid grid-cols-1 lg:grid-cols-12 items-center">
        {/* LEFT COLUMN: Brand Copy and Call To Action */}
        <div className="lg:col-span-7 flex flex-col items-start z-10 text-left">
          {/* Top Green Pill Tag */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#e8f6f2] border border-[#00bfa5]/20 px-4 py-1.5 text-xs font-bold tracking-wide text-[#0b5446]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00bfa5]" />
            GCC FULL-STACK COMMERCE PLATFORM
          </div>

          {/* Premium Core Typography Header */}
          <h1 className="mt-6  md:leading-[1.1]">
            All you need is <br />
            <span className="text-[#00bfa5]">One platform</span> that <br />
            speaks GCC E-commerce
          </h1>

          {/* Supporting Subheading */}
          <p className="mt-6 text-base md:text-lg font-medium leading-relaxed text-zinc-600 max-w-xl">
            Deliver more conversions, higher AOV, and full GCC reach — through a
            single Shopify integration.
          </p>

          {/* Call-to-action Action Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="mt-8 rounded-xl bg-primary px-4 py-3 text-base font-semibold text-white shadow-lg shadow-teal-500/20 transition-all hover:bg-[#00a38c] active:scale-[0.98]"
          >
            Calculate the difference now
          </button>
        </div>

        {/* RIGHT COLUMN: Interactive Feature Previews & Analytics Grid Frame */}
        <div className="absolute hidden lg:block w-2xl right-0">
          <Image
            src={"/hero-1.png"}
            alt={""}
            width={800}
            height={800}
            className={""}
          />
        </div>
        <div className="w-full block lg:hidden">
          <Image
            src={"/hero-mobile.png"}
            alt={""}
            width={800}
            height={800}
            className={""}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
