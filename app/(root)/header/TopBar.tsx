export default function TopBar() {
  return (
    <div className="border-b border-white/[.06] bg-surface">
      <div className="shell flex flex-wrap items-center justify-between gap-5 px-[26px] py-[9px] text-[12.5px] text-dim">
        <div className="flex items-center gap-2">
          <span className="size-1.5 animate-blip rounded-full bg-good" />
          Works on your existing Shopify store · live in 7 days · first 60 days free
        </div>
        <div className="flex gap-5">
          <a href="mailto:support@gulfcart.ae" className="text-dim hover:text-fg-soft">support@gulfcart.ae</a>
          <a href="#form" className="font-semibold text-accent">Get a free checkout teardown →</a>
        </div>
      </div>
    </div>
  );
}
