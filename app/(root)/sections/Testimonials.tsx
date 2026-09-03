import { quotes } from '@/lib/content';

export default function Testimonials() {
  return (
    <section className="shell px-[26px] pb-22">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quotes.map((q) => (
          <figure key={q.who} className="m-0 flex flex-col gap-[18px] rounded-[18px] border border-white/8 bg-surface p-7">
            <div className="font-display text-[22px] font-bold tracking-[-.02em] text-accent">{q.stat}</div>
            <blockquote className="m-0 flex-1 text-[15.5px] leading-relaxed text-muted">{q.text}</blockquote>
            <figcaption className="border-t border-white/[.07] pt-4">
              <div className="text-[13.5px]  font-bold">{q.who}</div>
              <div className="mt-[3px] text-[12.5px] text-fainter">{q.org}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
