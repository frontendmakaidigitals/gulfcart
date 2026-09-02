import Image from 'next/image';
import { c, eyebrow, font, shell } from '@/lib/tokens';

const shots = [
  { src: '/screens/payment-rules.png', alt: 'Country-level payment rules screen' },
  { src: '/screens/mobile-checkout.png', alt: 'GulfCart checkout on mobile' },
  { src: '/screens/funnel-analytics.png', alt: 'Checkout funnel analytics' },
];

export default function Dashboard() {
  return (
    <section className="pb-[88px] bg-surface" >
      <div className="flex  container flex-wrap items-end  justify-between gap-9">
        <div className="max-w-[640px]">
          <div style={eyebrow}>INSIDE THE DASHBOARD</div>
          <h2
            className="gc-h2 mt-4 text-[40px] font-bold leading-[1.1] tracking-[-.032em]"
            style={{ fontFamily: font.display }}
          >
            Every rule and every drop-off, in one place.
          </h2>
          <p className="mt-4 text-[16.5px] leading-[1.6]" style={{ color: c.muted }}>
            Payment methods, COD rules, currencies and checkout analytics — configured and
            measured from a single screen.
          </p>
        </div>
        <a
          className="gc-btn-ghost rounded-[11px] px-[22px] py-[13px] text-sm font-bold"
          href="#form"
          style={{ border: `1px solid ${c.accentA(0.4)}`, color: c.accent }}
        >
          See a live walkthrough →
        </a>
      </div>

      <div
        className="mt-8 container overflow-hidden rounded-[20px] p-[14px]"
        style={{ border: '1px solid rgba(255,255,255,.09)', background: c.surface }}
      >
        <Image
          src="/screens/dashboard.png"
          alt="GulfCart dashboard: payment rules, currencies and checkout analytics"
          width={2400}
          height={1400}
          priority={false}
          className="block h-auto w-full rounded-[14px]"
        />
      </div>

      <div className="gc-grid-3 container mt-4 grid grid-cols-3 gap-4">
        {shots.map((s) => (
          <div
            key={s.src}
            className="overflow-hidden rounded-2xl p-3"
            style={{ border: '1px solid rgba(255,255,255,.09)', background: c.surface }}
          >
            <Image
              src={s.src}
              alt={s.alt}
              width={1200}
              height={800}
              className="block h-auto w-full rounded-[10px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}