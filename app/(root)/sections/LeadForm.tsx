'use client';

import { useState } from 'react';
import { c, font } from '@/lib/tokens';
import { goalChips } from '@/lib/content';

type Mode = 'demo' | 'call';

const field: React.CSSProperties = {
  padding: '12px 14px',
  borderRadius: 10,
  border: '1px solid rgba(255,255,255,.11)',
  background: c.input,
  color: c.text,
  fontSize: 14.5,
  outline: 'none',
  width: '100%',
};

const labelText: React.CSSProperties = { fontSize: 12, fontWeight: 600, color: c.dim };
const labelWrap: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 6 };

export default function LeadForm() {
  const [mode, setMode] = useState<Mode>('demo');
  const [chips, setChips] = useState<string[]>(['Cart abandonment']);
  const [sent, setSent] = useState<Mode | null>(null);

  const toggleChip = (label: string) =>
    setChips((prev) => (prev.includes(label) ? prev.filter((x) => x !== label) : [...prev, label]));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // TODO: POST { ...data, mode, chips } to your CRM / lead endpoint.
    await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, mode, focus: chips }),
    }).catch(() => { });
    setSent(mode);
  }

  const tab = (m: Mode, label: string) => (
    <button
      key={m}
      type="button"
      onClick={() => setMode(m)}
      style={{ padding: 9, borderRadius: 8, border: 0, cursor: 'pointer', fontSize: 13, fontWeight: 700, background: mode === m ? c.accent : 'transparent', color: mode === m ? c.bg : c.faint }}
    >
      {label}
    </button>
  );

  return (
    <div
      id="form"
      className="
    gc-sticky
    sticky
    top-[92px]
    overflow-hidden
    rounded-[20px]
    border
    border-accent/25
    bg-white
    shadow-[0_30px_70px_rgba(13,13,13,0.12)]
    scroll-mt-[90px]
  "
    >
      {/* Header */}
      <div
        className="
      border-b
      border-line-soft
      bg-accent/[0.06]
      px-[30px]
      py-[22px]
    "
      >
        <h2
          className="
        m-0
        font-display
        text-[22px]
        font-semibold
        tracking-[-.02em]
        text-text
      "
        >
          {mode === 'demo'
            ? 'Get a free checkout teardown'
            : "Leave your number, we'll call"}
        </h2>


        <p
          className="
    mt-[7px]
    mb-0
    text-[13.5px]
    leading-[1.55]
    text-muted
  "
        >
          {mode === 'demo'
            ? 'Twenty minutes on your live checkout: where buyers drop, and what fixing it is worth.'
            : 'A specialist calls you within one business day — no slides, just answers.'}
        </p>


      </div>

      {/* Form Body */}

      <div className="px-[30px] pb-[30px] pt-[24px]">
        {sent ? (
          /* Success State */
          <div className="flex flex-col gap-[14px] px-0 pb-[6px] pt-[14px]">
            <div
              className="
            flex
            h-[44px]
            w-[44px]
            items-center
            justify-center
            rounded-full
            border
            border-accent/40
            bg-accent/[0.10]
            text-[19px]
            text-accent
          "
            >
              ✓
            </div>

            <h3
              className="
        m-0
        font-display
        text-[24px]
        font-semibold
        tracking-[-.02em]
        text-text
      "
            >
              {sent === 'call'
                ? "We'll call you."
                : 'Teardown request received.'}
            </h3>

            <p
              className="
        m-0
        text-[15px]
        leading-[1.65]
        text-muted
      "
            >
              {sent === 'call'
                ? "A specialist will ring you within one business day at the time you picked. If it's urgent, email support@gulfcart.ae and we'll bring it forward."
                : "You'll get a calendar link within one business day, along with a first look at where your checkout is leaking. No credit card, and the first 60 days are free."}
            </p>

            <button
              onClick={() => setSent(null)}
              className="
        mt-[4px]
        self-start
        rounded-[10px]
        border
        border-line
        bg-transparent
        px-[20px]
        py-[11px]
        text-[13.5px]
        font-semibold
        text-text
        transition
        hover:border-accent/40
        hover:bg-accent/[0.05]
      "
            >
              Send another
            </button>
          </div>
        ) : (
          <>
            {/* Mode Tabs */}
            <div
              className="
        mb-[18px]
        grid
        grid-cols-2
        gap-[6px]
        rounded-[11px]
        border
        border-line
        bg-bg-alt
        p-[5px]
      "
            >
              {tab('demo', 'Book a demo')}
              {tab('call', 'Call me back')}
            </div>

            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-[13px]"
            >
              {/* Full Name */}
              <label className="flex flex-col gap-[7px]">
                <span
                  className="
            text-[12px]
            font-semibold
            tracking-[.01em]
            text-text-soft
          "
                >
                  Full name
                </span>

                <input
                  className="
            gc-field
            w-full
            rounded-[10px]
            border
            border-line
            bg-input
            px-[13px]
            py-[12px]
            text-[14px]
            text-text
            outline-none
            placeholder:text-fainter
            transition
            focus:border-accent/50
            focus:ring-2
            focus:ring-accent/10
          "
                  name="name"
                  required
                  placeholder="Your name"
                />
              </label>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 gap-[13px] sm:grid-cols-2">
                <label className="flex flex-col gap-[7px]">
                  <span
                    className="
              text-[12px]
              font-semibold
              tracking-[.01em]
              text-text-soft
            "
                  >
                    Work email
                  </span>

                  <input
                    className="
              gc-field
              w-full
              rounded-[10px]
              border
              border-line
              bg-input
              px-[13px]
              py-[12px]
              text-[14px]
              text-text
              outline-none
              placeholder:text-fainter
              transition
              focus:border-accent/50
              focus:ring-2
              focus:ring-accent/10
            "
                    name="email"
                    required
                    type="email"
                    placeholder="you@brand.com"
                  />
                </label>

                <label className="flex flex-col gap-[7px]">
                  <span
                    className="
              text-[12px]
              font-semibold
              tracking-[.01em]
              text-text-soft
            "
                  >
                    WhatsApp number
                  </span>

                  <input
                    className="
              gc-field
              w-full
              rounded-[10px]
              border
              border-line
              bg-input
              px-[13px]
              py-[12px]
              text-[14px]
              text-text
              outline-none
              placeholder:text-fainter
              transition
              focus:border-accent/50
              focus:ring-2
              focus:ring-accent/10
            "
                    name="phone"
                    required
                    placeholder="+971 50 000 0000"
                  />
                </label>
              </div>

              {/* Demo Fields */}
              {mode === 'demo' && (
                <>
                  {/* Store URL */}
                  <label className="flex flex-col gap-[7px]">
                    <span
                      className="
                text-[12px]
                font-semibold
                tracking-[.01em]
                text-text-soft
              "
                    >
                      Store URL
                    </span>

                    <input
                      className="
                gc-field
                w-full
                rounded-[10px]
                border
                border-line
                bg-input
                px-[13px]
                py-[12px]
                text-[14px]
                text-text
                outline-none
                placeholder:text-fainter
                transition
                focus:border-accent/50
                focus:ring-2
                focus:ring-accent/10
              "
                      name="store"
                      placeholder="yourbrand.com"
                    />
                  </label>

                  {/* Monthly Orders */}
                  <label className="flex flex-col gap-[7px]">
                    <span
                      className="
                text-[12px]
                font-semibold
                tracking-[.01em]
                text-text-soft
              "
                    >
                      Monthly orders
                    </span>

                    <select
                      className="
                gc-field
                w-full
                rounded-[10px]
                border
                border-line
                bg-input
                px-[13px]
                py-[12px]
                text-[14px]
                text-text
                outline-none
                transition
                focus:border-accent/50
                focus:ring-2
                focus:ring-accent/10
              "
                      name="volume"
                      defaultValue="500 – 2,000"
                    >
                      <option>Under 500</option>
                      <option>500 – 2,000</option>
                      <option>2,000 – 10,000</option>
                      <option>10,000+</option>
                    </select>
                  </label>

                  {/* Goals */}
                  <div>
                    <div
                      className="
                mb-[9px]
                text-[12px]
                font-semibold
                tracking-[.01em]
                text-text-soft
              "
                    >
                      What would you fix first?
                    </div>

                    <div className="flex flex-wrap gap-[7px]">
                      {goalChips.map((label) => {
                        const on = chips.includes(label);

                        return (
                          <button
                            key={label}
                            type="button"
                            onClick={() => toggleChip(label)}
                            className={`
                      cursor-pointer
                      rounded-[8px]
                      border
                      px-[13px]
                      py-[7px]
                      text-[12.5px]
                      font-semibold
                      transition
                      ${on
                                ? 'border-accent bg-accent/[0.10] text-accent'
                                : 'border-line bg-transparent text-faint hover:border-accent/30 hover:text-text-soft'
                              }
                    `}
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              {/* Call Fields */}
              {mode === 'call' && (
                <label className="flex flex-col gap-[7px]">
                  <span
                    className="
              text-[12px]
              font-semibold
              tracking-[.01em]
              text-text-soft
            "
                  >
                    Best time to call
                  </span>

                  <select
                    className="
              gc-field
              w-full
              rounded-[10px]
              border
              border-line
              bg-input
              px-[13px]
              py-[12px]
              text-[14px]
              text-text
              outline-none
              transition
              focus:border-accent/50
              focus:ring-2
              focus:ring-accent/10
            "
                    name="slot"
                    defaultValue="Morning (9am – 12pm GST)"
                  >
                    <option>Morning (9am – 12pm GST)</option>
                    <option>Afternoon (12pm – 4pm GST)</option>
                    <option>Evening (4pm – 8pm GST)</option>
                  </select>
                </label>
              )}

              {/* Submit */}
              <button
                className="
          gc-btn-primary
          mt-[5px]
          w-full
          cursor-pointer
          rounded-[11px]
          border-0
          bg-accent
          p-[15px]
          font-display
          text-[15.5px]
          font-bold
          tracking-[-.01em]
          text-white
          transition
          hover:bg-accent-deep
          active:scale-[.99]
        "
                type="submit"
              >
                {mode === 'demo'
                  ? 'Book my 20-minute teardown'
                  : 'Call me back'}
              </button>

              {/* Trust Points */}
              <div
                className="
          mt-[2px]
          flex
          flex-wrap
          justify-center
          gap-[14px]
          text-[11.5px]
          text-ghost
        "
              >
                <span>No credit card</span>
                <span>·</span>
                <span>Reply in 1 business day</span>
                <span>·</span>
                <span>Details never resold</span>
              </div>
            </form>
          </>
        )}


      </div>
    </div>

  );
}
