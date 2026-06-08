"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brandName: "",
    storeUrl: "",
    monthlyRevenue: "",
    localCurrency: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
  };

  return (
    <section className="relative w-full bg-[#F3F8F6] pt-20 pb-32 text-zinc-900 overflow-hidden">
      {/* Background Subtle Dot Grid Matrix */}
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#c5c5c5 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto container max-w-2xl flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-jakarta  font-semibold tracking-tight text-black sm:text-5xl">
            Ready to sell across <br /> all of GCC?
          </h2>
          <p className="mt-4 text-sm  lg:text-base font-inter font-medium text-zinc-700 leading-relaxed max-w-lg mx-auto">
            Join brands already expanding across GCC from a single{" "}
            <br className="hidden sm:inline" />
            Shopify store. Early access is free for 60 days.
          </p>
        </div>

        {/* Lead Capture Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          {/* Two Column Grid for Row 1 & 2 */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-base placeholder-zinc-600 outline-none focus:border-[#00bfa5] transition-colors shadow-sm"
              required
            />
            <input
              type="email"
              placeholder="Work email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-base placeholder-zinc-600 outline-none focus:border-[#00bfa5] transition-colors shadow-sm"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Brand name"
              value={formData.brandName}
              onChange={(e) =>
                setFormData({ ...formData, brandName: e.target.value })
              }
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-base placeholder-zinc-600 outline-none focus:border-[#00bfa5] transition-colors shadow-sm"
              required
            />
            <input
              type="url"
              placeholder="Shopify store URL"
              value={formData.storeUrl}
              onChange={(e) =>
                setFormData({ ...formData, storeUrl: e.target.value })
              }
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-base placeholder-zinc-600 outline-none focus:border-[#00bfa5] transition-colors shadow-sm"
              required
            />
          </div>

          {/* Full Width Row inputs */}
          <input
            type="text"
            placeholder="Monthly Revenue (approx)"
            value={formData.monthlyRevenue}
            onChange={(e) =>
              setFormData({ ...formData, monthlyRevenue: e.target.value })
            }
            className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-base placeholder-zinc-600 outline-none focus:border-[#00bfa5] transition-colors shadow-sm"
            required
          />

          <input
            type="text"
            placeholder="What is your current local currency?"
            value={formData.localCurrency}
            onChange={(e) =>
              setFormData({ ...formData, localCurrency: e.target.value })
            }
            className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-base placeholder-zinc-600 outline-none focus:border-[#00bfa5] transition-colors shadow-sm"
            required
          />

          {/* CTA Action Button */}
          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-primary py-4 text-base font-bold text-white shadow-md transition-all hover:bg-[#43b38e] active:scale-[0.99]"
          >
            Book a 20 min - Demo Call
          </button>
        </form>

        {/* Footer Subtext Note */}
        <span className="mt-4 block text-center text-xs font-medium text-zinc-400">
          No credit card required. Our team will reach out within 24 hours.
        </span>
      </div>
    </section>
  );
};

export default ContactForm;
