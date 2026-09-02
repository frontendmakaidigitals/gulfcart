import { c, font, shell } from '@/lib/tokens';

const columns = [
  {
    title: 'PLATFORM', links: [
      { href: '#currency', label: 'Local currency' },
      { href: '#leak', label: 'The leak' },
      { href: '#levers', label: "What's inside" },
      { href: '#network', label: 'Buyer network' },
      { href: '#pricing', label: 'Pricing' },
    ]
  },
  {
    title: 'CONTACT', links: [
      { href: 'mailto:support@gulfcart.ae', label: 'support@gulfcart.ae' },
      { href: 'https://www.instagram.com/gulf_cart.ae', label: 'Instagram' },
      { href: '#form', label: 'Book a demo' },
    ]
  },
];

export default function Footer() {
  return (
    <footer className="px-[26px] py-12" style={{ borderTop: '1px solid rgba(255,255,255,.07)' }}>
      <div className="flex flex-wrap justify-between gap-10" style={{ ...shell }}>
        <div className="max-w-[300px]">
          <div className="flex items-center gap-[9px]">
            <div
              className="flex h-6 w-6 items-center justify-center rounded-lg text-[13px] font-bold"
              style={{
                background: `linear-gradient(145deg,${c.accent},${c.accentDeep})`,
                fontFamily: font.display,
                color: c.bg,
              }}
            >
              G
            </div>
            <span className="text-base font-bold tracking-[-.02em]" style={{ fontFamily: font.display }}>
              GulfCart
            </span>
          </div>
          <p className="mt-[14px] text-sm leading-[1.6]" style={{ color: c.fainter }}>
            Checkout growth platform for Shopify brands in the Gulf. Better conversion first, more
            markets when you want them.
          </p>
        </div>

        <div className="flex flex-wrap gap-[60px]">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-[10px] text-sm">
              <div className="mb-1 text-[11px] font-bold tracking-[.14em]" style={{ color: '#565D6C' }}>
                {col.title}
              </div>
              {col.links.map((l) => (
                <a key={l.label} href={l.href} style={{ color: c.dim }}>
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div
        className="mt-10 flex flex-wrap justify-between gap-5 pt-5 text-[12.5px]"
        style={{ ...shell, borderTop: `1px solid ${c.lineSoft}`, color: '#565D6C' }}
      >
        <span>Copyright © {new Date().getFullYear()} GulfCart. All rights reserved.</span>
        <span>Dubai, United Arab Emirates</span>
      </div>
    </footer>
  );
}