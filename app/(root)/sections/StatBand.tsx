import { heroStats } from '@/lib/content';

export default function StatBand() {
  return (
    <section className="border-y border-white/[.07] bg-ink-alt">
      <div className="shell grid grid-cols-2 lg:grid-cols-4">
        {heroStats.map((s) => (
          <div key={s.l} className="border-r border-white/[.06] px-[26px] py-7">
            <div className="font-display text-[33px] font-bold tracking-[-.035em] text-accent">{s.v}</div>
            <div className="mt-1.5 text-[13px] leading-snug text-faint">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
