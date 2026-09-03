import { fits } from '@/lib/content';

export default function Fit() {
  return (
    <section id="fit" className="shell scroll-mt-24 px-[26px] pb-22">
      <div className="max-w-[700px]">
        <div className="eyebrow">IS IT FOR US?</div>
        <h2 className="mt-4 text-[32px] leading-tight tracking-[-.032em] sm:text-[46px]">You don&apos;t have to be expanding anywhere.</h2>
        <p className="mt-[18px] text-[17.5px] leading-relaxed text-muted">
          Most of our brands started by fixing the market they already sell in. Find yourself below — the first thing
          we&apos;d switch on is different for each.
        </p>
      </div>

      <div className="mt-11 grid gap-4 lg:grid-cols-2">
        {fits.map((f) => (
          <div key={f.t} className="rounded-[18px] border border-white/8 bg-surface p-7.5">
            <h3 className="text-xl tracking-[-.02em]">{f.t}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-dim">{f.d}</p>
            <div className="mt-4.5 rounded-xl border border-accent/20 bg-accent/[.07] px-4 py-3.5 text-[13.5px] leading-snug text-fg-soft">
              <strong className="text-accent-light">Start with:</strong> {f.start}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
