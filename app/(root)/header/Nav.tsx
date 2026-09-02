import { c, font, shell } from '@/lib/tokens';
import Logo from '../components/Logo';

const links = [
  { href: '#currency', label: 'Local currency' },
  { href: '#leak', label: 'The leak' },
  { href: '#levers', label: 'What\u2019s inside' },
  { href: '#network', label: 'Buyer network' },
  { href: '#fit', label: 'Is it for us?' },
  { href: '#pricing', label: 'Pricing' },
];

export default function Nav() {
  return (
    <div
      className="sticky top-0 z-[60] backdrop-blur-[16px] border-b bg-background border-white/[0.07] "
    >
      <div

        className="flex container items-center gap-[34px] py-4"
      >
        <Logo />
        <nav
          className="flex flex-1 gap-6 text-sm font-medium"
          style={{ color: c.dim }}
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-inherit">
              {l.label}
            </a>
          ))}
        </nav>
        <a

          className="gc-btn-primary rounded-[10px] px-5 py-[10px] text-sm font-bold"
          href="#form"
          style={{ background: c.accent, color: c.bg }}
        >
          Book a demo
        </a>
      </div>
    </div>
  );
}