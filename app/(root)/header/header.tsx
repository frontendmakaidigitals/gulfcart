import Menu from "./menu";
import Logo from "../components/Logo";
import Strip from "./strip";
export const menuLinks = [
  { label: "Platform", link: "/" },
  { label: "Why us", link: "/" },
  { label: "Buyer network", link: "/" },
  { label: "GCC expansion", link: "/" },
  { label: "Pricing", link: "/" },
];
const Header = () => {
  return (
    <header className="  ">
      <Strip />
      <div className="flex py-4 items-center justify-between container">
        <Logo className="w-40" />
        <Menu />
        <button className="bg-secondary hover:opacity-90 hover:scale-105 transform duration-300 cursor-pointer text-sm text-background px-5 py-2 rounded-md">
          Book a demo
        </button>
      </div>
    </header>
  );
};

export default Header;
