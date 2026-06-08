import React from "react";
import Image from "next/image";

const GulfCartBuyerNetwork = () => {
  // Sample data replicating the "Buyer Identity Network" card
  const buyers = [
    {
      id: 1,
      initials: "SA",
      name: "Abdullah M.",
      city: "Riyadh",
      status: "Returning • 4 orders across network",
      isPrefilled: true,
    },
    {
      id: 2,
      initials: "AE",
      name: "Layla K.",
      city: "Dubai",
      status: "Returning • 2 orders across network",
      isPrefilled: true,
    },
    {
      id: 3,
      initials: "KW",
      name: "Faisal A.",
      city: "Kuwait City",
      status: "New buyer • First purchase",
      isPrefilled: false,
    },
    {
      id: 4,
      initials: "QA",
      name: "Nour H.",
      city: "Doha",
      status: "Returning • 7 orders across network",
      isPrefilled: true,
    },
  ];

  // Features data for the bottom grid
  const features = [
    {
      number: "01",
      title: "GCC-First",
      description: "Built for Gulf buyer behaviour",
    },
    {
      number: "02",
      title: "Compounds",
      description: "Value grows with every brand",
    },
    {
      number: "03",
      title: "Value grows with every brand",
      description: "Data from confirmed purchases",
    },
    {
      number: "04",
      title: "Cross-brand",
      description: "Recognised at every GulfCart store",
    },
  ];

  return (
    <section id={'buyer-network'} className="relative font-sans pt-24 pb-16 antialiased overflow-hidden flex flex-col items-center justify-center">
      <Image
        src={"/gradient.png"}
        className="absolute h-[60%] -bottom-20"
        width={1920}
        height={600}
        alt={""}
      />

      <div className="max-w-5xl container w-full z-10 flex flex-col items-center">
        {/* Top Badge */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-primary bg-primary/10 uppercase mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
          Buyer Network
        </span>

        {/* Main Heading */}
        <h2 className="text-center max-w-3xl leading-tight mb-6">
          Every brand makes every other brand{" "}
          <span className="text-primary">stronger.</span>
        </h2>

        {/* Subtitle description */}
        <p className="text-center text-sm md:text-base text-gray-600 max-w-3xl leading-relaxed mb-12">
          GulfCart operates a shared buyer identity layer across all brands on
          the network. When a shopper buys from one GulfCart brand, their
          address and payment preference are available at every other GulfCart
          checkout — instantly prefilled.
        </p>

        {/* Floating Buyer Identity Network Card Stack */}
        <div className="relative w-full max-w-2xl mb-24">
          <div className="absolute size-full bg-gray-300  rotate-3 rounded-2xl" />
          <div className="absolute size-full bg-gray-100 -rotate-5  rounded-2xl" />
          <div className="relative bg-white rounded-[24px] shadow-xl border border-gray-100/90 p-6 md:p-8 transform transition-transform duration-300">
            <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-6">
              Buyer Identity Network
            </h2>

            {/* Network Rows */}
            <div className="space-y-4 divide-y divide-gray-50">
              {buyers.map((buyer) => (
                <div
                  key={buyer.id}
                  className="flex items-center justify-between pt-4 first:pt-0"
                >
                  <div className="flex items-center gap-4">
                    {/* Circle Avatar */}
                    <div className="p-2 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 shrink-0">
                      {buyer.initials}
                    </div>
                    {/* Buyer Meta */}
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">
                        {buyer.name}{" "}
                        <span className="font-normal text-gray-400">
                          · {buyer.city}
                        </span>
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {buyer.status}
                      </p>
                    </div>
                  </div>

                  {/* Flow Status Action */}
                  <div>
                    {buyer.isPrefilled ? (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#00b090]">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                          />
                        </svg>
                        Pre-filled
                      </span>
                    ) : (
                      <span className="text-xs text-gray-400">
                        Standard flow
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Card Footer Microcopy */}
            <div className="mt-8 pt-4 border-t border-gray-100 space-y-2">
              <p className="text-[11px] leading-relaxed text-gray-500">
                Returning buyers see address + payment pre-filled across all
                GulfCart brands.
              </p>
              <p className="text-[11px] text-gray-500 ">
                Checkout in under 30 seconds.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200/80 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div>
                <span className="text-4xl font-semibold text-[#006854] block mb-3">
                  {feature.number}
                </span>
                <h3 className=" font-bold text-gray-900 mb-1">
                  {feature.title}
                </h3>
              </div>
              <p className="text-xs text-gray-500 leading-normal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GulfCartBuyerNetwork;
