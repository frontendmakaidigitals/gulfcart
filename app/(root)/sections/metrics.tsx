"use client";
import { cn } from "@/lib/utils";
import { CircleIcon } from "@phosphor-icons/react";
const Metrics = () => {
  const cards = [
    {
      stat: "+39%",
      label: "Conversion Rate (CVR+)",
      desc: "Local currencies, centralised BNPL, familiar payment methods, and pre-filled buyer data remove every friction point a GCC shopper faces. A checkout that converts — not one that leaks.",
      footer: "Based on avg. CVR lift across GulfCart merchants",
    },
    {
      stat: "+24%",
      label: "Average Order Value (AOV)",
      desc: 'Country-aware discount rules and in-checkout nudges consistently push buyers to increase basket size. "Add one item to unlock SAR 30 off" is a conversion mechanic that compounds.',
      footer: "Based on avg. AOV uplift with discount engine active",
    },
    {
      stat: "6",
      label: "GCC Markets. One Store.",
      desc: "Activate GCC currencies on your existing Shopify store, configure payment and shipping rules per country, and you're live across the entire Gulf. No rebuild. No new infrastructure.",
      footer: "UAE · Saudi Arabia · Kuwait · Qatar · Bahrain · Oman",
    },
    {
      stat: "-40%",
      label: "Fake Orders & COD Losses",
      desc: "Verified buyer login, COD fee logic, and buyer identity signals dramatically reduce fake order placement. Measurable drops in undelivered COD shipments and the fulfilment cost that comes with them.",
      footer: "COD fraud reduction via login verification + buyer scoring",
    },
  ];
  return (
    <section id={"why-us"} className="bg-[#F7F7F5] py-18">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-3 items-center">
            <span className="uppercase flex gap-3 text-sm items-center px-4 bg-primary/30 w-fit py-1.5 rounded-full">
              <CircleIcon weight="fill" className="fill-primary" />
              <span className="text-teal-800">What you gain</span>
            </span>
          </div>
          <h2 className=" mb-2">Four metrics that move.</h2>
          <p>
            Every feature in GulfCart connects to a measurable business outcome.
          </p>
        </div>
        <ul className="grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {cards.map((card, i) => (
            <StatCard
              key={i}
              stat={card.stat}
              label={card.label}
              desc={card.desc}
              footer={card.footer}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
interface StatCardProps {
  label: string;
  stat: string;
  desc: string;
  footer: string;
  className?: string;
}
function StatCard({ stat, label, desc, footer, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-3xl border border-emerald-500/20 bg-white p-5 shadow-sm transition-all hover:border-emerald-500/40",
        className,
      )}
    >
      <div>
        {/* Large Highlighted Stat */}
        <span className="block text-2xl font-bold tracking-tight text-[#00bfa5] md:text-3xl">
          {stat}
        </span>

        {/* Card Title/Label */}
        <h3 className="mt-2 font-bold tracking-tight text-zinc-900 ">
          {label}
        </h3>

        {/* Main Body Description */}
        <p className="mt-2 text-sm leading-relaxed text-zinc-600 ">{desc}</p>
      </div>

      {/* Footer Text */}
      <span className="mt-3 block text-xs font-medium text-zinc-500 ">
        {footer}
      </span>
    </div>
  );
}

export default Metrics;
