import React from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 ">
      <nav className="flex  justify-between bg-slate-100  h-16 items-center shadow dark:bg-slate-600 dark:text-white">
        <Logo />
        <NavMenu />
      </nav>
    </header>
  );
};

export default Header;
