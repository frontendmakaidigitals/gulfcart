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
  const handleClick = () => {
    const id = link.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY + 15;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <li>
      <button
        onClick={handleClick}
        className="p-2 rounded-md hover:bg-neutral-200/70 transition-all duration-300"
      >
        {label}
      </button>
    </li>
  );
};

export default Menu;
