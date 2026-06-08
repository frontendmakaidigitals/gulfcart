import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
// 1. Define your brand logos here
const logos = [
  {
    name: "Business Mansion",
    img: "/BM.png",
  },
  {
    name: "Max",
    img: "/max.png",
  },
  {
    name: "Noir Perfumes",
    img: "/noir.png",
  },
  {
    name: "Nova",
    img: "/nova.png",
  },
  {
    name: "Opto",
    img: "/opto.png",
  },
  {
    name: "Perfume Oasis",
    img: "/perfume oasis.png",
  },
  {
    name: "Ruhayah",
    img: "/ruhayah.png",
  },
  {
    name: "Teeser",
    img: "/teeser.png",
  },
];

// 2. Simplified Logo Card Component
const LogoCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <div className={cn(" flex w-28 lg:w-36 h-auto ml-8 lg:ml-14 ")}>
      <Image
        width={50}
        height={50}
        className="size-full object-contain"
        alt={`${name} logo`}
        src={`/partner-logos${img}`}
      />
    </div>
  );
};

export function LogoMarquee() {
  return (
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden py-4">
      {/* [--duration:30s] gives a smooth, steady pace for professional branding */}
      <Marquee className="gap-10 [--duration:20s]">
        {logos.map((logo) => (
          <LogoCard key={logo.name} {...logo} />
        ))}
      </Marquee>

      {/* These handle the smooth gradient fadeout on the left and right edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
