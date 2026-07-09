"use client";
import {
  InstagramLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
  EnvelopeIcon,
} from "@phosphor-icons/react";
import Logo from "../components/Logo";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamically falls back to 2026 per current timeline

  const navigationLinks = [
    { label: "Platform", link: "#platform" },
    { label: "Why us", link: "#why-us" },
    { label: "Buyer network", link: "#buyer-network" },
    { label: "GCC expansion", link: "#gcc-expansion" },
    { label: "Pricing", link: "#pricing" },
  ];

  return (
    <footer className="w-full bg-[#F7F7F5] pt-10 lg:pt-10 relative text-zinc-900 ">
      <Image
        src={"/footer-arc-1.png"}
        alt={"footer arc"}
        className="absolute top-2 z-10 left-1/2 max-w-[95%] lg:max-w-7xl h-auto -translate-x-1/2"
        width={1900}
        height={100}
      />
      <div
        className="bg-white pb-16 pt-20"
        style={{
          clipPath: "ellipse(150% 100% at 50% 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl container flex flex-col items-center text-center">
          {/* 1. Brand Logo Block */}
          <Logo className="w-60" />

          {/* 2. Brand Pitch Description Caption */}
          <p className="mt-6 font-inter max-w-md text-[15px] font-medium leading-relaxed text-zinc-800">
            Full-stack commerce growth platform for Shopify <br />
            brands expanding across the GCC.
          </p>

          {/* 3. Social Media Icon Channels Matrix */}
          <div className="mt-6 flex items-center gap-5 text-[#0f3d32]">
            <a
              href="#"
              className="hover:opacity-70 transition-opacity"
              aria-label="Instagram"
            >
              <InstagramLogoIcon className="size-8" />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="hover:opacity-70 transition-opacity"
              aria-label="LinkedIn"
            >
              <LinkedinLogoIcon className="size-8" />
            </a>

            {/* X (formerly Twitter) */}
            <a
              href="#"
              className="hover:opacity-70 transition-opacity"
              aria-label="X (Twitter)"
            >
              <XLogoIcon className="size-8" />
            </a>

            {/* Email Support Contact Channel */}
            <a
              href="mailto:support@gulfcart.com"
              className="hover:opacity-70 transition-opacity"
              aria-label="Email Support"
            >
              <EnvelopeIcon className="size-8" />
            </a>
          </div>

          <div className="mt-8 flex text-sm items-center gap-2 font-inter font-semibold  text-zinc-900">
            <p>Designed & Developed by </p>
            <Link href={"https://www.spok.digital"}>
              <Image
                src={"/logo/spok-black.png"}
                alt={"spok digital"}
                className=""
                width={140}
                height={140}
              />
            </Link>
          </div>

          {/* 5. Navigation Anchors Link Index Line */}
          <nav className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 font-semibold text-[15px]">
            {navigationLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => {
                  const id = link.link.replace("#", "");
                  const el = document.getElementById(id);
                  if (el) {
                    const top =
                      el.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="text-zinc-950 font-inter font-medium underline underline-offset-4 decoration-zinc-900/40 hover:decoration-zinc-900 transition-all"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* 6. Legal Copyright Disclaimer Line */}
          <span className="mt-8 block text-[13px] font-medium font-inter text-zinc-400 select-none">
            Copyright @{currentYear}. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
