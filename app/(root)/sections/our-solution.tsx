"use client";
import { useRef, useEffect, useState, useCallback } from "react";

const problems = [
  {
    title: "No GCC-aware discount engine",
    desc: "You can't run SAR-only promotions for Saudi buyers or KWD-locked vouchers for Kuwait. Shopify's discount logic has no concept of country-specific currency rules — every offer is global or nothing.",
  },
  {
    title: "No shared buyer identity across GCC",
    desc: "Every buyer starts from scratch at every checkout. No saved address. No remembered payment. GCC brands share no buyer intelligence — every returning customer is treated like a stranger.",
  },
  {
    title: "Fake COD orders drain fulfilment margins",
    desc: "No login verification means anyone can place a COD order with a fake address. Brands absorb undelivered shipment costs with no fraud layer and no way to identify high-risk buyers before dispatch.",
  },
  {
    title: "Ad spend converts poorly without a localised checkout",
    desc: "GCC buyers click your Meta and Google ads — then land on a USD checkout with no local payment methods. Campaigns spend for sessions that were never going to convert. CVR tanks.",
  },
];

const R = 20;

const ConversionProblem = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null]);
  const [svg, setSvg] = useState({ d: "", height: 0, top: 0 });

  const rebuild = useCallback(() => {
    const wrapper = wrapperRef.current;
    const heading = headingRef.current;
    if (!wrapper || !heading) return;

    const wRect = wrapper.getBoundingClientRect();
    const hRect = heading.getBoundingClientRect();

    const cards = cardRefs.current.map((c) => {
      if (!c) return null;
      const r = c.getBoundingClientRect();
      return {
        left: r.left - wRect.left,
        right: r.right - wRect.left,
        top: r.top - wRect.top,
        bottom: r.bottom - wRect.top,
        midY: (r.top + r.bottom) / 2 - wRect.top,
      };
    });

    if (cards.some((c) => !c)) return;
    const [c0, c1, c2, c3] = cards as NonNullable<(typeof cards)[0]>[];

    // Entry point: straight down from heading's bottom-left, aligned to card0 left
    const ex = c0.left + 24;
    const ey = hRect.bottom - wRect.top; // relative to wrapperRef top

    const w = wRect.width;

    const wall1 = Math.min(c0.right + 44, w - 8);
    const wall2 = Math.max(c2.left - 44, 8); // ← use c2.left, not min(c1,c2)
    const wall3 = Math.min(c2.right + 44, w - 8);

    let d = "";

    // Entry: heading bottom → card0 top-left corner
    d += ` M${c0.right},${c0.midY}`;
    d += ` L${wall1 - R},${c0.midY} Q${wall1},${c0.midY} ${wall1},${c0.midY + R}`;
    d += ` L${wall1},${c1.midY - R} Q${wall1},${c1.midY} ${wall1 - R},${c1.midY}`;
    d += ` L${c1.right},${c1.midY}`;

    // card0 right-mid → right wall → card1 right-mid
    d += ` M${c1.left},${c1.midY}`;
    d += ` L${wall2 + R},${c1.midY} Q${wall2},${c1.midY} ${wall2},${c1.midY + R}`;
    d += ` L${wall2},${c2.midY - R} Q${wall2},${c2.midY} ${wall2 + R},${c2.midY}`;
    d += ` L${c2.left},${c2.midY}`;

    // card2 right-mid → right wall → card3 right-mid (enter from right)
    d += ` M${c2.right},${c2.midY}`;
    d += ` L${wall3 - R},${c2.midY} Q${wall3},${c2.midY} ${wall3},${c2.midY + R}`;
    d += ` L${wall3},${c3.midY - R} Q${wall3},${c3.midY} ${wall3 - R},${c3.midY}`;
    d += ` L${c3.right},${c3.midY}`;

    // card2 right-mid → right wall → card3 right-mid
    d += ` M${c2.right},${c2.midY}`;
    d += ` L${wall3 - R},${c2.midY} Q${wall3},${c2.midY} ${wall3},${c2.midY + R}`;
    d += ` L${wall3},${c3.midY - R} Q${wall3},${c3.midY} ${wall3 - R},${c3.midY}`;
    d += ` L${c3.right},${c3.midY}`;

    setSvg({ d, height: c3.bottom + 40, top: ey });
  }, []);

  useEffect(() => {
    const t = setTimeout(rebuild, 60);
    window.addEventListener("resize", rebuild);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", rebuild);
    };
  }, [rebuild]);

  return (
    <section
      id={"gcc-expansion"}
      className="w-full bg-[#F7F7F5] py-16 lg:py-20 text-zinc-900 overflow-hidden"
    >
      <div className="container mx-auto ">
        {/* wrapperRef: single coordinate space for both heading + cards */}
        <div ref={wrapperRef} className="relative">
          {/* SVG is absolute relative to wrapperRef — covers full height */}
          {svg.d && (
            <svg
              aria-hidden="true"
              className="absolute left-0 top-0 w-full pointer-events-none hidden md:block"
              style={{ height: svg.height, overflow: "visible", zIndex: 0 }}
            >
              <path
                d={svg.d}
                fill="none"
                stroke="#d1d5db"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}

          {/* Header */}
          <div
            className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-4"
            style={{ position: "relative", zIndex: 1 }}
          >
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00bfa5]">
                The Conversion Problem
              </span>
              <h2
                ref={headingRef}
                className="mt-4 text-zinc-950  sm:leading-[1.15]"
                >
                Your growth stack has <br />
                no{" "}
                <span className="relative inline-block text-[#1ce2c7]">
                  GCC layer.
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#1ce2c7]" />
                </span>
              </h2>
            </div>
            <div className="max-w-md lg:pt-12">
              <p className="text-base font-normal leading-relaxed text-zinc-700">
                Checkout is just one part. The conversion tools GCC brands need
                simply don&apos;t exist natively in Shopify.
              </p>
            </div>
          </div>

          {/* Mobile */}
          <div
            className="flex flex-col gap-6 md:hidden mt-10"
            style={{ position: "relative", zIndex: 1 }}
          >
            {problems.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-bold text-[#00bfa5]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop cards */}
          <div
            className="hidden md:flex flex-col gap-10 mt-16 relative"
            style={{ zIndex: 1 }}
          >
            <div className="flex justify-start pl-[8%]">
              <div
                ref={(el) => {
                  cardRefs.current[0] = el;
                }}
                className="w-[58%] rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-[#00bfa5]/40 transition-all duration-200"
              >
                <h3 className="text-[15px] font-bold text-[#00bfa5]">
                  {problems[0].title}
                </h3>
                <p className="mt-2 text-[12px] leading-relaxed text-zinc-500">
                  {problems[0].desc}
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <div
                ref={(el) => {
                  cardRefs.current[1] = el;
                }}
                className="w-[58%] rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-[#00bfa5]/40 transition-all duration-200"
              >
                <h3 className="text-[15px] font-bold text-[#00bfa5]">
                  {problems[1].title}
                </h3>
                <p className="mt-2 text-[12px] leading-relaxed text-zinc-500">
                  {problems[1].desc}
                </p>
              </div>
            </div>

            <div className="flex justify-start pl-[8%]">
              <div
                ref={(el) => {
                  cardRefs.current[2] = el;
                }}
                className="w-[58%] rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-[#00bfa5]/40 transition-all duration-200"
              >
                <h3 className="text-[15px] font-bold text-[#00bfa5]">
                  {problems[2].title}
                </h3>
                <p className="mt-2 text-[12px] leading-relaxed text-zinc-500">
                  {problems[2].desc}
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <div
                ref={(el) => {
                  cardRefs.current[3] = el;
                }}
                className="w-[58%] rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-[#00bfa5]/40 transition-all duration-200"
              >
                <h3 className="text-[15px] font-bold text-[#00bfa5]">
                  {problems[3].title}
                </h3>
                <p className="mt-2 text-[12px] leading-relaxed text-zinc-500">
                  {problems[3].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionProblem;
