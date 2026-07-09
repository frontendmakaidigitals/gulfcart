"use client";
import Menu from "./menu";
import Logo from "../components/Logo";
import Strip from "./strip";
import MobileMenu from "./mobile-menu";
export const menuLinks = [
  { label: "Platform", link: "#platform" },
  { label: "Why us", link: "#why-us" },
  { label: "Buyer network", link: "#buyer-network" },
  { label: "GCC expansion", link: "#gcc-expansion" },
  { label: "Pricing", link: "#pricing" },
];
const Header = () => {
  return (
    <header className="  ">
      <Strip />
      <div className="flex py-4 items-center justify-between container">
        <Logo className="w-40" />
        <Menu />
        <MobileMenu />
        <button
          onClick={() => {
            const el = document.getElementById("contact-form");
            if (el) {
              const top = el.getBoundingClientRect().top + window.scrollY + 25;
              window.scrollTo({ top, behavior: "smooth" });
            }
            window.fbq?.("track", "contact");
          }}
          className="hidden lg:block bg-secondary hover:opacity-90 hover:scale-105 transform duration-300 cursor-pointer text-sm text-background px-5 py-2 rounded-md"
        >
          Book a demo
        </button>
      </div>
    </header>
  );
};

export default Header;
