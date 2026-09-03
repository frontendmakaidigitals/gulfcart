'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { faqs } from '@/lib/content';

const INITIAL_COUNT = 4;

export default function Faq() {
  const [open, setOpen] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, INITIAL_COUNT);
  const hasMore = faqs.length > INITIAL_COUNT;

  return (
    <section className="mx-auto max-w-[900px] px-[26px] pb-22">
      <h2 className="mb-8 text-center text-[30px] leading-tight tracking-[-.03em] text-fg sm:text-[38px]">
        Questions brands ask before booking.
      </h2>

      <div className="relative">
        <div className="grid grid-cols-1 gap-4">
          <AnimatePresence initial={false}>
            {visibleFaqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={f.q}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, delay: i < INITIAL_COUNT ? i * 0.05 : (i - INITIAL_COUNT) * 0.05 }}
                  className="overflow-hidden rounded-[14px] border border-ghost/30 bg-surface"
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-5 border-0 bg-transparent px-6 py-[21px] text-left font-display text-base font-semibold tracking-[-.01em] text-fg"
                  >
                    <span>{f.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-[21px] font-normal text-accent"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="max-w-[680px] px-6 pb-[22px] text-[15px] leading-[1.7] text-dim">{f.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {hasMore && !showAll && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
        )}
      </div>

      {hasMore && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="cursor-pointer rounded-[10px] border border-ghost/30 bg-surface px-6 py-2.5 text-sm font-semibold text-fg hover:border-accent/50"
          >
            {showAll ? 'Show less' : `Show ${faqs.length - INITIAL_COUNT} more`}
          </button>
        </div>
      )}
    </section>
  );
}