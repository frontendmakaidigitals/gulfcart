import { c, shell } from '@/lib/tokens';

export default function TopBar() {
  return (
    <div className='bg-background border-b border-line-soft' >
      <div
        className="flex container flex-wrap items-center justify-between gap-5 px-[26px] py-[9px] text-[12.5px]"
      >
        <div className="flex items-center gap-2">
          <span
            className="gc-dot h-[6px] w-[6px] rounded-full"

          />
          Works on your existing Shopify store · live in 7 days · first 60 days free
        </div>
        <div className="flex gap-5">
          <a href="mailto:support@gulfcart.ae" style={{ color: c.dim }}>
            support@gulfcart.ae
          </a>
          <a href="#form" className="font-semibold" style={{ color: c.accent }}>
            Get a free checkout teardown →
          </a>
        </div>
      </div>
    </div>
  );
}