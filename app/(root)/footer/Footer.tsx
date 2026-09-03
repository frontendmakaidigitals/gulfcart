'use client'
import Logo from "../components/Logo";
import { InstagramLogoIcon, FacebookLogoIcon, LinkedinLogoIcon, EnvelopeIcon } from "@phosphor-icons/react";
const columns = [
  {
    title: 'PLATFORM',
    links: [
      { href: '#currency', label: 'Local currency' },
      { href: '#leak', label: 'The leak' },
      { href: '#levers', label: "What's inside" },
      { href: '#network', label: 'Buyer network' },
      { href: '#pricing', label: 'Pricing' },
    ],
  },
  {
    title: 'CONTACT',
    links: [
      { href: 'mailto:support@gulfcart.ae', label: 'support@gulfcart.ae' },
      { href: 'https://www.instagram.com/gulf_cart.ae', label: 'Instagram' },
      { href: '#form', label: 'Book a demo' },
    ],
  },
];

const socials = [
  { label: 'Facebook', href: 'https://facebook.com/gulfcart.ae', icon: FacebookLogoIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/gulfcart-ae', icon: LinkedinLogoIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/gulf_cart.ae', icon: InstagramLogoIcon },
  { label: 'Email', href: 'mailto:support@gulfcart.ae', icon: EnvelopeIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-ghost/30 px-[26px] py-12">
      <div className="shell flex flex-wrap justify-between gap-10">
        <div className="max-w-[300px]">
          <Logo />
          <p className="mt-3.5 text-sm leading-relaxed text-muted">
            Checkout growth platform for Shopify brands in the Gulf. Better conversion first, more markets when you want
            them.
          </p>
          <div className="mt-4 flex gap-3">
            {socials.map((s) => {
              const isEmail = s.href.startsWith('mailto:');
              return (
                <a
                  key={s.label}
                  href={s.href}
                  {...(!isEmail && { target: '_blank', rel: 'noopener noreferrer' })}
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-full border border-outline/25 text-dim hover:border-accent/50 hover:text-accent"
                >
                  <s.icon weight="fill" size={28} strokeWidth={2} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap gap-15">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-2.5 text-sm">
              <div className="mb-1 text-[11px] font-bold tracking-[.14em] text-outline">{col.title}</div>
              {col.links.map((l) => (
                <a key={l.label} href={l.href} className="text-dim hover:text-fg">{l.label}</a>
              ))}
            </div>
          ))}
        </div>

      </div>

      <div className="shell mt-10 text-muted! flex flex-wrap justify-between gap-5 border-t border-ghost/30 pt-5 text-[12.5px] text-outline">
        <span>Copyright © {new Date().getFullYear()} GulfCart. All rights reserved.</span>
        <span>Dubai, United Arab Emirates</span>
      </div>
    </footer >
  );
}
