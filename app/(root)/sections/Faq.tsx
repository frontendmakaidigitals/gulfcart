'use client';

import { useState } from 'react';
import { c, font } from '@/lib/tokens';
import { faqs } from '@/lib/content';

export default function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="mx-auto max-w-[900px] px-[26px] pb-[88px]">
      <h2
        className="gc-h2 mb-8 text-center text-[38px] font-bold leading-[1.1] tracking-[-.03em]"
        style={{ fontFamily: font.display }}
      >
        Questions brands ask before booking.
      </h2>

      <div className="flex flex-col gap-[9px]">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className="overflow-hidden rounded-2xl"
              style={{ border: `1px solid ${c.line}`, background: c.surface }}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full cursor-pointer items-center justify-between gap-5 border-0 bg-transparent px-6 py-[21px] text-left text-base font-semibold tracking-[-.01em]"
                style={{ color: c.text, fontFamily: font.display }}
              >
                <span>{f.q}</span>
                <span className="flex-none text-xl font-normal" style={{ color: c.accent }}>
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && (
                <div
                  className="max-w-[680px] px-6 pb-[22px] text-[15px] leading-[1.7]"
                  style={{ color: c.dim }}
                >
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}