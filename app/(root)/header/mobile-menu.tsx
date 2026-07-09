"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { menuLinks } from "./header";
import Logo from "../components/Logo";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background body scroll when the drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* Hamburger Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-zinc-900 cursor-pointer focus:outline-none"
        aria-label="Open Menu"
      >
        <List size={26} weight="bold" />
      </button>

      {/* Slide-out Drawer Panel Overlay */}
      <div
        className={`fixed inset-0 z-[9999] bg-white transition-all duration-300 ease-in-out flex flex-col ${
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {/* Drawer Header Row */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-100">
          <Logo className="w-36" />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-zinc-500 hover:text-zinc-900 cursor-pointer focus:outline-none"
            aria-label="Close Menu"
          >
            <X size={24} weight="bold" />
          </button>
        </div>

        {/* Navigation Links List */}
        <nav className="flex-1 px-6 py-8 overflow-y-auto">
          <ul className="flex flex-col gap-1">
            {menuLinks.map(({ label, link }, i) => (
              <li key={i}>
                <button
                  onClick={() => {
                    const id = link.replace("#", "");
                    const el = document.getElementById(id);
                    if (el) {
                      const top =
                        el.getBoundingClientRect().top + window.scrollY + 10;
                      window.scrollTo({ top, behavior: "smooth" });
                    }
                    setIsOpen(false);
                  }}
                  className="block w-full text-left py-4 text-lg font-semibold text-zinc-800 border-b border-zinc-50 hover:text-[#00bfa5] transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer Footer Action CTA */}
        <div className="p-6 border-t border-zinc-100">
          <button
            onClick={() => {
              const el = document.getElementById("contact-form");
              if (el) {
                const top =
                  el.getBoundingClientRect().top + window.scrollY + 20;
                window.scrollTo({ top, behavior: "smooth" });
              }
              setIsOpen(false);
            }}
            className="w-full bg-[#0a192f] text-white font-semibold text-center py-4 rounded-xl shadow-md transition-transform active:scale-[0.98]"
          >
            Book a demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
