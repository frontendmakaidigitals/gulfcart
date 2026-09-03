'use client';

import { trackButtonClick } from '@/lib/fbq';

export default function FinalCta() {
  return (
    <section className="shell px-[26px] pb-23">
      <div className="flex flex-wrap items-center justify-between gap-11 rounded-[22px] border border-accent/25 bg-surface bg-[radial-gradient(700px_340px_at_20%_0%,color-mix(in_srgb,var(--accent)_15%,transparent),transparent_70%)] p-13">
        <div className="max-w-[600px]">
          <h2 className="text-[32px] leading-tight tracking-[-.032em] text-fg sm:text-[42px]">
            Twenty minutes. Your checkout on screen. A real number.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            We&apos;ll walk your live checkout, point at where buyers drop, and show what the same traffic is worth once
            those steps are gone.
          </p>

        </div>

        <div className="flex min-w-[250px] flex-col gap-[11px]">
          <a
            href="#form"
            onClick={() => trackButtonClick('final_cta_book_demo')}
            className="rounded-xl bg-accent px-7.5 py-4 text-center font-display text-base font-bold text-ink hover:bg-accent-light"
          >
            Book my demo
          </a>
          <a
            href="mailto:support@gulfcart.ae"
            onClick={() => trackButtonClick('final_cta_email_team')}
            className="rounded-xl border border-accent/30 px-7.5 py-4 text-center text-[15px] font-semibold text-fg hover:border-accent/50"
          >
            Email the team instead
          </a>
        </div>
      </div>
    </section>
  );
}