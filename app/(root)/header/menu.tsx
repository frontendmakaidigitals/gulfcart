import Link from "next/link";
import { menuLinks } from "./header";

const Menu = () => {
  return (
    <ul className="hidden lg:flex items-center gap-3">
      {menuLinks.map(({ label, link }, i) => (
        <MenuButtons key={i} label={label} link={link} />
      ))}
    </ul>
  );
};

interface Menuprops {
  label: string;
  link: string;
}
const MenuButtons = ({ label, link }: Menuprops) => {
  return (
    <li>
      <Link
        className=" p-2 rounded-md hover:bg-neutral-200/70 transition-all duration-300"
        href={link}
      >
        {label}
      </Link>
    </li>
  );
};

export default Menu;
