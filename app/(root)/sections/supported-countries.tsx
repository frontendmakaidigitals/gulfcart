"use client";
import { CheckIcon } from "@phosphor-icons/react";
import Image from "next/image";

// 1. Exact copy of data from image_9b3df3.png
const countriesData = [
  {
    name: "United Arab Emirates",
    currency: "AED — UAE Dirham",
    methods: "Tabby · Tamara · Apple Pay · COD",
    flag: "uae.png",
  },
  {
    name: "Saudi Arabia",
    currency: "SAR — Saudi Riyal",
    methods: "Tabby · Tamara · Apple Pay · COD",
    flag: "saudi.png",
  },
  {
    name: "Kuwait",
    currency: "KWD — Kuwaiti Dinar",
    methods: "Tabby · Cards · COD",
    flag: "kuwait.png",
  },
  {
    name: "Qatar",
    currency: "QAR — Qatari Riyal",
    methods: "Tamara · Cards · COD",
    flag: "qatar.png",
  },
  {
    name: "Bahrain",
    currency: "BHD — Bahraini Dinar",
    methods: "Tamara · Cards · COD",
    flag: "bahrain.png",
  },
  {
    name: "Oman",
    currency: "OMR — Omani Rial",
    methods: "Cards · COD",
    flag: "oman.png",
  },
];

const SupportedCountries = () => {
  return (
    <div className="relative w-full pb-10 pt-20">
      {/* Background Subtle Dot Grid Matrix */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#c5c5c5 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative container">
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-stretch">
          {/* Main Giant "6" Layout with left accent bar */}
          <div className="">
            {" "}
            <div className="border-l-2 pl-6">
              <div>
                <div className="flex items-center gap-4  border-zinc-900  dark:border-zinc-100">
                  <span className="text-[7rem] font-sans font-bold leading-none tracking-tighter text-black">
                    6
                  </span>
                  <div className="flex flex-col justify-center">
                    <span className="text-xl font-bold  text-zinc-500 uppercase sm:text-xl">
                      Countries.
                    </span>
                    <span className="text-xl font-bold  text-black uppercase sm:text-3xl">
                      Currencies.
                    </span>
                  </div>
                </div>
                <h2 className="mb-6  text-3xl font-bold tracking-wider text-[#065041] uppercase sm:text-4xl lg:text-5xl">
                  One Integration.
                </h2>
              </div>
            </div>
            {/* Subdescription text block */}
            <p className="max-w-3xl mb-14 pl-6 text-sm leading-relaxed text-zinc-800 font-medium">
              GulfCart covers the entire Gulf Cooperation Council — every
              country, every local currency, every major payment method. From
              one Shopify store.
            </p>
          </div>
        </div>

        {/* Dynamic Dark Teal Headline */}

        {/* Responsive Grid Matrix for Country Slats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {countriesData.map((country, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-2xl border border-teal-800/15 bg-white/80 p-5 backdrop-blur-sm transition-all duration-200 hover:border-teal-700/30 hover:shadow-sm"
            >
              {/* Left Column: Flag and Text Metrics */}
              <div className="flex items-center gap-4">
                <Image
                  src={`/flags/${country.flag}`}
                  width={50}
                  height={50}
                  alt={country.name}
                />
                <div className="flex flex-col">
                  <h3 className="text-base font-bold text-zinc-900">
                    {country.name}
                  </h3>
                  <span className="text-sm font-medium text-zinc-500">
                    {country.currency}
                  </span>
                  <span className="mt-0.5 text-xs font-medium text-zinc-400">
                    {country.methods}
                  </span>
                </div>
              </div>

              {/* Right Column: Custom Clean Mint/Teal Success Checkmark */}
              <div className="flex-shrink-0 pl-2">
                <CheckIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportedCountries;
