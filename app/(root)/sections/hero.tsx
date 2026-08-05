"use client";
import { useState } from "react";


import CalculatorOverlay from "../components/calculator-overlay";
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="relative w-full bg-linear-to-t min-h-[calc(100vh-110px)] via-transparent from-primary/70 mb-24 pt-12  lg:py-8 lg:pb-16 overflow-hidden flex items-center">
      {isOpen && (
        <CalculatorOverlay onClose={() => setIsOpen(false)} isOpen={isOpen} />
      )}

      <video
        className="absolute inset-0 h-full w-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-video-poster.jpg"
      >
        <source src="/hero-bg-placeholder.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-0 bg-white/70" />

      <div className="container w-full grid grid-cols-1 items-center relative z-10">
        {/* Centered Brand Copy and Call To Action */}
        <div className="flex flex-col items-center text-center mx-auto max-w-3xl">
          {/* Top Green Pill Tag */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#e8f6f2] border border-[#00bfa5]/20 px-4 py-1.5 text-xs font-bold tracking-wide text-[#0b5446]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00bfa5]" />
            GCC FULL-STACK COMMERCE PLATFORM
          </div>

          {/* Premium Core Typography Header */}
          <h1 className="mt-6 md:leading-[1.1]">
            All you need is {" "}
            <span className="text-[#00bfa5]">One platform</span> that 
            speaks GCC E-commerce
          </h1>

          {/* Supporting Subheading */}
          <p className="mt-6 text-base md:text-lg font-medium leading-relaxed text-zinc-600 max-w-xl">
            Deliver more conversions, higher AOV, and full GCC reach — through a
            single Shopify integration.
          </p>

          {/* Call-to-action Action Button */}
          <button
            onClick={() => {
              const el = document.getElementById("contact-form");
              if (el) {
                const top =
                  el.getBoundingClientRect().top + window.scrollY + 25;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
            className="mt-8 rounded-xl bg-primary px-4 py-3 text-base font-semibold text-white shadow-lg shadow-teal-500/20 transition-all hover:bg-[#00a38c] active:scale-[0.98]"
          >
          Connect your store now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;