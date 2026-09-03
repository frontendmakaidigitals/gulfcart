export default function Logo({ size = 27 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="flex items-center justify-center rounded-[9px] bg-linear-145 from-accent to-accent-deep font-display font-bold text-ink"
        style={{ width: size, height: size, fontSize: size * 0.52 }}
      >
        G
      </div>
      <span className="font-display text-[17px] font-bold tracking-[-.02em]">GulfCart</span>
    </div>
  );
}
