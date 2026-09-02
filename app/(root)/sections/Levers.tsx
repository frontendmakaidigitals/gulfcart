import { c, eyebrow, font, h2, lede, shell } from '@/lib/tokens';
import { levers } from '@/lib/content';

export default function Levers() {
  return (
    <section
      id="levers"
      className="bg-surface pb-[88px] [scroll-margin-top:90px]"
    >
      <div className="container">
        <div style={eyebrow}>WHAT&apos;S INSIDE</div>
        <h2 className="gc-h2" style={h2}>
          Six things Shopify can&apos;t do in the Gulf.
        </h2>
        <p style={lede}>
          Each one is a rule Shopify applies globally or not at all. GulfCart makes every one of
          them country-aware. Turn on the ones you need.
        </p>
      </div>

      <div className="gc-grid-3 container mt-11 grid grid-cols-3 gap-4">
        {levers.map((l) => (
          <div
            key={l.t}
            className="gc-card hover:bg-surface/80! border border-line bg-surface flex flex-col gap-[14px] rounded-[18px] p-7"
          >
            <div className="flex items-start justify-between gap-[14px]">
              <div
                className="pt-[5px] text-[10.5px] font-bold tracking-[.14em]"
                style={{ color: c.accent }}
              >
                {l.tag}
              </div>
              <div
                className="text-2xl font-bold text-muted/50 tracking-[-.03em]"
                style={{ fontFamily: font.display }}
              >
                {l.metric}
              </div>
            </div>
            <h3
              className="m-0 text-[19px] font-bold leading-[1.3] tracking-[-.02em]"
              style={{ fontFamily: font.display }}
            >
              {l.t}
            </h3>
            <p className="m-0 flex-1 text-[14.5px] leading-[1.65]" style={{ color: c.dim }}>
              {l.d}
            </p>
            <div
              className="pt-[14px] text-[12.5px]"
              style={{ borderTop: '1px solid rgba(255,255,255,.07)', color: c.fainter }}
            >
              {l.metricLabel}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}