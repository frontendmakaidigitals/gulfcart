"use client";
import React, { useState } from "react";
import { ConfettiButton } from "@/components/ui/confetti";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brandName: "",
    storeUrl: "",
    monthlyRevenue: "",
    localCurrency: "",
  });

  const [status, setStatus] = useState
    <"idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        brandName: "",
        storeUrl: "",
        monthlyRevenue: "",
        localCurrency: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id={'contact-form'} className="relative w-full bg-[#F3F8F6] pt-20 pb-32 text-zinc-900 overflow-hidden">
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
            {/* CHANGED — type="text" instead of type="url", so a bare
                domain like "mystore.com" is accepted without needing a
                scheme (browsers enforce http(s):// on type="url" inputs). */}
            <input
              type="text"
              placeholder="Shopify store URL (e.g. mystore.com)"
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

          {/* NEW — ConfettiButton as the submit button. It fires its own
              confetti burst on click while still triggering the form's
              onSubmit (since it's type="submit" inside the form). */}
          <ConfettiButton
            type="submit"
            disabled={status === "loading"}
            className="mt-2 w-full rounded-xl bg-primary h-12 text-base font-bold text-white shadow-md transition-all hover:bg-primary/80 active:scale-[0.99] disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Book a 20 min - Demo Call"}
          </ConfettiButton>

          {status === "error" && (
            <p className="text-center text-sm text-red-600">
              Something went wrong. Please try again.
            </p>
          )}
        </form>

        {/* Footer Subtext Note */}
        <span className="mt-4 block text-center text-xs font-medium text-zinc-400">
          No credit card required. Our team will reach out within 24 hours.
        </span>
      </div>

      {/* NEW — Thank you popup, shown on successful submission */}
      {status === "success" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          onClick={() => setStatus("idle")}
        >
          <div
            className="relative w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setStatus("idle")}
              aria-label="Close"
              className="absolute top-3 right-3 text-zinc-400 hover:text-zinc-600 text-lg"
            >
              ×
            </button>
            <h3 className="text-2xl font-jakarta font-semibold text-black">
              Thank you! 🎉
            </h3>
            <p className="mt-2 text-sm font-inter text-zinc-600">
              We&apos;ll reach out within 24 hours to schedule your demo call.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white transition-all hover:bg-[#43b38e]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;