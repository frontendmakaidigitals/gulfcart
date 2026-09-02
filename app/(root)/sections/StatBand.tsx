import { heroStats } from '@/lib/content';

export default function StatBand() {
  return (
    <section className="border-y border-line-soft bg-bg-alt">
      <div className="gc-grid-4 mx-auto grid w-full max-w-[1200px] grid-cols-4">
        {heroStats.map((s, i) => (
          <div
            key={s.l}
            className={`px-[26px] py-7 ${i !== heroStats.length - 1 ? 'border-r border-line-soft' : ''
              }`}
          >
            <div className="font-display text-[33px] font-bold tracking-[-.035em] text-accent">
              {s.v}
            </div>

            <div className="mt-1.5 text-[13px] leading-[1.45] text-faint">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}