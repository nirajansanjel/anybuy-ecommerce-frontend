"use client";
import navLinks from "@/constants/navlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthMenu from "./AuthMenu";
import ToggleTheme from "./ToggleTheme";
import CartButton from "./CartButton";

const NavMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex justify-center items-center gap-10">
      {navLinks.map((navLink) => {
        const isActive =
          navLink.route !== "/" && pathname.startsWith(navLink.route);
        return (
          <Link
            key={navLink.route}
            href={navLink.route}
            className={`text-md font-medium tracking-wide transition-colors hover:text-primary ${
              isActive ? "text-primary" : "text-on-surface-variant"
            }`}
          >
            {navLink.label}
          </Link>
        );
      })}

      <div className="flex items-center gap-6 pl-6 border-l border-outline-variant/60 text-primary">
        <ToggleTheme />
        <CartButton />
        <AuthMenu />
      </div>
    </nav>
  );
};

export default NavMenu;
