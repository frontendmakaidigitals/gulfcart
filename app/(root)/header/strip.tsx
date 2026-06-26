import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
const Strip = () => {
  return (
    <div className="bg-black ">
      <p className="text-center text-xs py-3 text-background">
        Get 20% off. Start a free 7-day trial.{" "}
        <Link
          href={"/"}
          className="inline-flex text-primary items-center gap-1 whitespace-nowrap"
        >
          Book Now <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </p>
    </div>
  );
};

export default Strip;
