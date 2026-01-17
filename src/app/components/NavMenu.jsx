"use client"
import navLinks from "@/constants/navlinks";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCartPlus } from "react-icons/fa";
import AuthMenu from "./AuthMenu";
import ToggleTheme from "./ToggleTheme";


const NavMenu = () => {
  const pathname = usePathname();
  return (
    <nav className="hidden lg:flex justify-center items-center  gap-8 ">
      {navLinks.map((navLink) => {
        const isActive =navLink.route!=="/" && pathname.startsWith(navLink.route);
        return (
          <Link
          key={navLink.route}
            href={navLink.route}
            className={`text-md hover:text-primary ${
              isActive ? "text-secondary" : ""
            }`}
          >
            {navLink.label}
          </Link>
        );
      })}
      <ToggleTheme/>

      <div className="hidden lg:flex  hover:text-red-500 text-xl  w-16 justify-end">
        <FaCartPlus />
      </div>
      <AuthMenu/>
    </nav>
  );
};

export default NavMenu;
