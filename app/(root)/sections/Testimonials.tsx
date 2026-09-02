import { c, font, shell } from '@/lib/tokens';
import { quotes } from '@/lib/content';

export default function Testimonials() {
  return (
    <section className="pb-[88px] bg-surface" >
      <div className="gc-grid-3  grid container grid-cols-3 gap-4">
        {quotes.map((q) => (
          <figure
            key={q.who}
            className="m-0 border border-line bg-surface flex flex-col gap-[18px] rounded-[18px] p-7"
          >
            <div
              className="text-[22px] font-bold tracking-[-.02em] text-accent"
              style={{ fontFamily: font.display }}
            >
              {q.stat}
            </div>
            <blockquote className="m-0 flex-1 text-[15.5px] leading-[1.6] text-muted" >
              {q.text}
            </blockquote>
            <figcaption className="border-t pt-4" style={{ borderColor: 'rgba(255,255,255,.07)' }}>
              <div className="text-[13.5px] font-bold">{q.who}</div>
              <div className="mt-[3px] text-[12.5px]" style={{ color: c.fainter }}>
                {q.org}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}