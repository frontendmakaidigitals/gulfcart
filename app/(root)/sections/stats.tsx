import React from "react";

const Stats = () => {
  const numbers = [
    { label: "$50B+", desc: "GCC e-commerce market by 2027" },
    { label: "6", desc: "GCC currencies from one Shopify store" },
    { label: "-30%", desc: "CVR drop when GCC buyers see other currencies" },
    { label: "39%", desc: "Average CVR lift across GulfCart merchants" },
  ];
  return (
    <section className="bg-secondary py-10">
      <ul className="grid grid-cols-2 md:grid-cosl-2 gap-y-20 md:gap-0 container lg:grid-cols-4 ">
        {numbers.map(({ label, desc }, id) => (
          <li key={id}>
            <div>
              <h4 className="text-center font-bold text-5xl text-primary">
                {label}
              </h4>
              <p className="text-center mt-3 text-sm max-w-52 mx-auto  text-background/60">
                {desc}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Stats;
