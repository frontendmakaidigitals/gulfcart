'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from "../components/Logo";

const links = [
  { href: '#currency', label: 'Local currency' },
  { href: '#leak', label: 'The leak' },
  { href: '#levers', label: "What's inside" },
  { href: '#network', label: 'Buyer network' },
  { href: '#fit', label: 'Is it for us?' },
  { href: '#pricing', label: 'Pricing' },
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (!isHome) return; // let Link handle navigation + native hash scroll on load
    e.preventDefault();
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', hash);
    }
  };

  return (
    <div className="sticky top-0 z-60 border-b border-white/[.07] bg-ink/85 backdrop-blur-lg">
      <div className="shell flex items-center gap-8 px-[26px] py-3.5">
        <Link href={'/'}>
          <Logo /></Link>
        <nav className="hidden flex-1 gap-6 text-sm font-medium text-dim lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={isHome ? l.href : `/${l.href}`}
              onClick={(e) => handleClick(e, l.href)}
              className="text-inherit hover:text-fg"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        {pathname !== '/book-a-demo' && (
          <Link
            href="/book-a-demo"
            className="ml-auto rounded-[10px] bg-accent px-5 py-2.5 text-sm font-bold text-ink hover:bg-accent-light lg:ml-0"
          >
            Book a demo
          </Link>
        )}
      </div>
    </div>
  );
}