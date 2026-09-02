import { c, font, shell } from '@/lib/tokens';

export default function FinalCta() {
  return (
    <section className="px-[26px] pb-[92px]" style={{ ...shell }}>
      <div
        className="flex flex-wrap items-center justify-between gap-11 rounded-[22px] p-[52px]"
        style={{
          border: `1px solid ${c.accentA(0.26)}`,
          background: `radial-gradient(700px 340px at 20% 0%,${c.accentA(0.15)},transparent 70%),${c.surface}`,
        }}
      >
        <div className="max-w-[600px]">
          <h2
            className="gc-h2 m-0 text-[42px] font-bold leading-[1.1] tracking-[-.032em]"
            style={{ fontFamily: font.display }}
          >
            Twenty minutes. Your checkout on screen. A real number.
          </h2>
          <p className="mt-4 text-[17px] leading-[1.65]" style={{ color: c.muted }}>
            We&apos;ll walk your live checkout, point at where buyers drop, and show what the
            same traffic is worth once those steps are gone.
          </p>
          <div className="mt-[22px] flex flex-wrap gap-5 text-sm" style={{ color: c.dim }}>
            <span>No credit card</span>
            <span>·</span>
            <span>60 days free</span>
            <span>·</span>
            <span>Reply within 1 business day</span>
          </div>
        </div>

        <div className="flex min-w-[250px] flex-col gap-[11px]">
          <a
            className="gc-btn-primary rounded-xl px-[30px] py-4 text-center text-base font-bold"
            href="#form"
            style={{ background: c.accent, color: c.bg, fontFamily: font.display }}
          >
            Book my demo
          </a>
          <a
            className="gc-btn-ghost rounded-xl px-[30px] py-4 text-center text-[15px] font-semibold"
            href="mailto:support@gulfcart.ae"
            style={{ border: '1px solid rgba(255,255,255,.14)', color: c.text }}
          >
            Email the team instead
          </a>
        </div>
      </div>
    </section >
  );
}