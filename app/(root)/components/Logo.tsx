import Image from "next/image";
import { cn } from "@/app/lib/utils";
const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      width={100}
      height={100}
      src={"/logo/gulfcart-logo.png"}
      alt={"gulfcart logo"}
      className={cn(className, 'w-34')}
    />
  );
};

export default Logo;
