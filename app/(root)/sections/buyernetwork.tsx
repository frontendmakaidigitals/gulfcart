import Image from "next/image";
import { WarningIcon } from "@phosphor-icons/react/dist/ssr";

export default function GulfCartBuyerNetwork() {
  return (
    <section id="buyer-network" className="relative overflow-hidden pt-18">
      <div className="container relative z-10 max-w-6xl">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            <span className="size-2 rounded-full bg-primary" />
            Buyer Network
          </span>
        </div>

        {/* Heading */}
        <div className="mx-auto mt-6 max-w-4xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Boost Conversions with Smarter Checkout Features
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-muted-foreground">
            Accelerate every checkout with GulfCart's intelligent conversion
            tools. Deliver faster purchases through seamless verification,
            instant form completion, and optimized checkout flows that boost
            conversions.
          </p>
        </div>

        {/* Content */}
        <div className="mt-7 grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div className="flex justify-center">
            <Image
              src="/buyer-network.png"
              width={600}
              height={500}
              className="scale-[1.09]"
              alt="Buyer Network"
              priority
            />
          </div>

          <div>
            <h3 className="text-3xl font-semibold leading-tight">
              OTP Authentication & Pre-Filled Addresses
            </h3>

            <p className="mt-6 text-md  text-foreground/70">
              Enhance every checkout with secure OTP verification and
              intelligent address autofill. Reduce failed deliveries, improve
              order accuracy, and create a faster, frictionless purchasing
              experience.
            </p>

            <div className="mt-8 flex items-start gap-3 rounded-xl bg-primary/5 p-4">
              <WarningIcon className="mt-1 size-5 text-primary shrink-0" />

              <p className="text-teal-700 font-medium leading-7">
                30% of online orders risk ending in Return To Origin (RTO),
                impacting costs and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
