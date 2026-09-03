import Image from 'next/image';

const shots = [
  { src: '/screens/payment-rules.png', alt: 'Country-level payment rules screen' },
  { src: '/screens/mobile-checkout.png', alt: 'GulfCart checkout on mobile' },
  { src: '/screens/funnel-analytics.png', alt: 'Checkout funnel analytics' },
];

export default function Dashboard() {
  return (
    <section className="shell px-[26px] pb-22">
      <div className="flex flex-wrap items-end justify-between gap-9">
        <div className="max-w-[640px]">
          <div className="eyebrow">INSIDE THE DASHBOARD</div>
          <h2 className="mt-4 text-[32px] leading-tight tracking-[-.032em] sm:text-[40px]">Every rule and every drop-off, in one place.</h2>
          <p className="mt-4 text-[16.5px] leading-relaxed text-muted">
            Payment methods, COD rules, currencies and checkout analytics — configured and measured from a single screen.
          </p>
        </div>
        <a
          href="#form"
          className="rounded-[11px] border border-accent/40 px-[22px] py-[13px] text-sm font-bold text-accent hover:bg-accent/8"
        >
          See a live walkthrough →
        </a>
      </div>

      <div className="mt-8 overflow-hidden rounded-[20px] border border-white/[.09] bg-surface p-3.5">
        <Image
          src="/screens/dashboard.png"
          alt="GulfCart dashboard: payment rules, currencies and checkout analytics"
          width={2400}
          height={1400}
          className="block h-auto w-full rounded-[14px]"
        />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {shots.map((s) => (
          <div key={s.src} className="overflow-hidden rounded-2xl border border-white/[.09] bg-surface p-3">
            <Image src={s.src} alt={s.alt} width={1200} height={800} className="block h-auto w-full rounded-[10px]" />
          </div>
        ))}
      </div>
    </section>
  );
}
