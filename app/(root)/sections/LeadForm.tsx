'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Confetti, type ConfettiRef } from '@/components/ui/confetti';
import { trackBookDemo, trackFormSubmit } from '@/lib/fbq';


export default function LeadForm() {
  const router = useRouter();
  const [sent, setSent] = useState(false);
  const confettiRef = useRef<ConfettiRef>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, mode: 'call' }),
      });
      if (!res.ok) throw new Error('Request failed');
      setSent(true);
      trackFormSubmit();

      confettiRef.current?.fire({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
      });
    } catch {
      // TODO: surface an inline error state to the user instead of silently failing
      alert("Something went wrong — please try again or reach us directly.");
    }
  }

  return (
    <div
      id="form"
      className="relative items-start overflow-hidden rounded-[20px] border border-accent/25 bg-linear-to-b from-surface-raised to-surface shadow-[0_30px_70px_rgba(0,0,0,.55)] dark:shadow-[0_30px_70px_rgba(0,0,0,.55)] shadow-black/10 "
    >
      <Confetti
        ref={confettiRef}
        manualstart
        className="pointer-events-none absolute inset-0 z-50 size-full"
      />

      <div className="border-b border-outline/20 bg-accent/[.07] px-[30px] py-[22px]">
        <h2 className="font-display text-[22px] tracking-[-.02em] text-fg">
          {sent ? "Leave your number, we'll call" : "Leave your number, we'll call"}
        </h2>
        <p className="mt-1 text-[13.5px]  text-muted">
          A specialist calls you within one business day — no slides, just answers.
        </p>
      </div>

      <div className="px-[30px] pt-4 pb-[30px]">
        {sent ? (
          <div className="flex flex-col gap-3.5 pt-3.5 pb-1.5">
            <div className="flex size-11 items-center justify-center rounded-full border border-accent/45 bg-accent/15 text-[19px] text-accent">✓</div>
            <h3 className="font-display text-2xl tracking-[-.02em] text-fg">We'll call you.</h3>
            <p className="text-[15px] leading-relaxed text-muted">
              A specialist will ring you within one business day at the time you picked. If it's urgent, email
              support@gulfcart.ae and we'll bring it forward.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-1 cursor-pointer self-start rounded-[10px] border border-outline/40 px-5 py-2.5 text-[13.5px] font-semibold text-fg hover:border-accent/50"
            >
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col gap-[13px]">
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-dim">Full name</span>
              <input name="name" required placeholder="Your name" className="field" />
            </label>

            <div className="grid grid-cols-1 gap-[13px] sm:grid-cols-2">
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-dim">email</span>
                <input name="email" required type="email" placeholder="you@brand.com" className="field" />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-dim">number</span>
                <input name="phone" required placeholder="+971 50 000 0000" className="field" />
              </label>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-dim">Best time to call</span>
              <select name="slot" defaultValue="Morning (9am – 12pm GST)" className="field">
                <option>Morning (9am – 12pm GST)</option>
                <option>Afternoon (12pm – 4pm GST)</option>
                <option>Evening (4pm – 8pm GST)</option>
              </select>
            </label>

            <button
              type="submit"
              className="mt-[5px] cursor-pointer rounded-[11px] bg-accent py-[15px] font-display text-[15.5px] font-bold tracking-[-.01em] text-ink hover:bg-accent-light"
            >
              Call me back
            </button>

            <button
              type="button"
              onClick={() => {
                trackBookDemo('form');
                router.push('/book-a-demo');
              }}
              className="cursor-pointer rounded-[11px] border border-accent/80 py-[15px] font-display text-[15.5px] font-bold tracking-[-.01em] text-fg hover:border-accent/50"
            >
              Book a demo instead
            </button>

            <div className="mt-0.5 flex justify-center gap-3.5 text-[11.5px] text-ghost">
              <span>Reply in 1 business day</span><span>·</span><span>Details never resold</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}