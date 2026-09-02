import { c, eyebrow, font, h2, lede, shell } from '@/lib/tokens';
import { fits } from '@/lib/content';

export default function Fit() {
  return (
    <section
      id="fit"
      className=" pb-[88px] bg-surface [scroll-margin-top:90px]"
    >
      <div className="container">
        <div style={eyebrow}>IS IT FOR US?</div>
        <h2 className="gc-h2" style={h2}>
          You don&apos;t have to be expanding anywhere.
        </h2>
        <p style={lede}>
          Most of our brands started by fixing the market they already sell in. Find yourself
          below — the first thing we&apos;d switch on is different for each.
        </p>
      </div>

      <div className="gc-grid-2 container mt-11 grid grid-cols-2 gap-4">
        {fits.map((f) => (
          <div
            key={f.t}
            className="rounded-[18px] p-[30px] bg-surface border border-line"
          >
            <h3
              className="m-0 text-xl  font-bold tracking-[-.02em]"
              style={{ fontFamily: font.display }}
            >
              {f.t}
            </h3>
            <p className="mt-[11px] text-[15px] leading-[1.65]" style={{ color: c.dim }}>
              {f.d}
            </p>
            <div
              className="mt-[18px] rounded-xl px-4 py-[14px] text-[13.5px] leading-[1.55]"
              style={{ background: c.accentA(0.07), border: `1px solid ${c.accentA(0.2)}`, color: c.textSoft }}
            >
              <strong className='text-accent'>Start with:</strong> {f.start}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}