"use client";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

const Strip = () => {
  return (
    <div className="bg-black">
      <p className="text-center text-xs py-3 text-background">
        Start a free 7-day trial.{" "}
        <button
          onClick={() => {
            const el = document.getElementById("contact-form");
            if (el) {
              const top = el.getBoundingClientRect().top + window.scrollY + 20;
              window.scrollTo({ top, behavior: "smooth" });
            }
          }}
          className="inline-flex text-primary items-center gap-1 whitespace-nowrap"
        >
          Book Now <ArrowRightIcon className="h-4 w-4" />
        </button>
      </p>
    </div>
  );
};

export default Strip;
