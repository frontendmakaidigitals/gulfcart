"use client";
import { useEffect } from "react";
import PricingCalculator from "../sections/calculator";

interface CalculatorOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalculatorOverlay = ({ isOpen, onClose }: CalculatorOverlayProps) => {
  useEffect(() => {
    if (isOpen) {
      // Prevent background scrolling & account for scrollbar shift
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/10 backdrop-blur-md p-4 md:p-6 overflow-y-auto"
      onClick={onClose} // Closes when clicking the blurred background layer
    >
      <div
        className="relative w-full max-w-4xl my-auto"
        onClick={(e) => e.stopPropagation()} // Stops click event bubbling from inside the UI
      >
        {/* Close Button UI element */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer right-6 top-6 z-50 rounded-full p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <PricingCalculator />
      </div>
    </div>
  );
};

export default CalculatorOverlay;
