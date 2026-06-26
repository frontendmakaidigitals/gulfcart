"use client";
import { useEffect } from "react";
import Script from "next/script";

const CALENDLY_URL = "https://calendly.com/info-spokdigital/gulfcart-demo"; // 👈 replace this

const ContactForm = () => {
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.event === "calendly.event_scheduled") {
        window.fbq?.("track", "Schedule");
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <section
      id="contact-form"
      className="relative w-full bg-[#F3F8F6] pt-20 pb-32 text-zinc-900 overflow-hidden"
    >
      {/* Background Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#c5c5c5 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto container max-w-3xl flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-10">
          <h2>
            Ready to sell across <br /> all of GCC?
          </h2>
          <p className="mt-4 text-sm lg:text-base font-medium text-zinc-700 leading-relaxed max-w-lg mx-auto">
            Join brands already expanding across GCC from a single{" "}
            <br className="hidden sm:inline" />
            Shopify store. Early access is free for 60 days.
          </p>
        </div>

        {/* Calendly Inline Embed */}
        <div
          className="calendly-inline-widget w-full md:min-w-5xl  rounded-2xl overflow-hidden"
          data-url={CALENDLY_URL}
          style={{ height: "680px" }}
        />

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </div>
    </section>
  );
};

export default ContactForm;
