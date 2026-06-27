"use client";
import navLinks from "@/constants/navlinks";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import AuthMenu from "./AuthMenu";
import CartButton from "./CartButton";
import ToggleTheme from "./ToggleTheme";
import Logo from "./Logo";
import { PRODUCTS_CART_ROUTE } from "@/constants/route";

const NavMenu = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { products } = useSelector((state) => state.cart);

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (route) => route !== "/" && pathname.startsWith(route);

  return (
    <>
      {/* ── Desktop nav (hidden on mobile) ── */}
      <nav className="hidden lg:flex justify-center items-center gap-10">
        {navLinks.map((navLink) => (
          <Link
            key={navLink.route}
            href={navLink.route}
            className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
              isActive(navLink.route) ? "text-primary" : "text-on-surface-variant"
            }`}
          >
            {navLink.label}
          </Link>
        ))}
        <div className="flex items-center gap-6 pl-6 border-l border-outline-variant/60 text-primary">
          <ToggleTheme />
          <CartButton />
          <AuthMenu />
        </div>
      </nav>

      {/* ── Mobile: compact icon strip + hamburger (hidden on desktop) ── */}
      <div className="flex ml-6 lg:hidden items-center gap-4 text-on-surface">

     {/* Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="text-2xl text-on-surface p-1"
        >
          <HiMenuAlt3 />
        </button>
      </div>

      {/* ── Backdrop ── */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
<div className="lg:hidden">
   <AuthMenu /> 
</div>
      {/* ── Sidebar drawer ── */}
      <aside
        className={`fixed top-0 left-0 h-30svh w-72 z-50 lg:hidden
          bg-surface-container dark:bg-surface-container
          border-r border-outline-variant/40
          flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        aria-label="Mobile navigation"
      >
        {/* Sidebar header */}
        <div className="flex pt-4 h-20 border-b border-outline-variant/40 shrink-0">
          <div className="pr-8">
            <Logo/>
          </div>
         <div>
           <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-full hover:bg-surface-container text-on-surface transition-colors"
          >
            <HiX className="text-xl" />
          </button>
         </div>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col flex-1 px-4 py-6 gap-1 overflow-y-auto">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.route}
              href={navLink.route}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                isActive(navLink.route)
                  ? "bg-primary/10 text-primary"
                  : "text-on-surface hover:bg-surface-container hover:text-primary"
              }`}
            >
              {navLink.label}
              {isActive(navLink.route) && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
              )}
            </Link>
          ))}
        </nav>

        {/* Sidebar footer: cart + theme */}
        <div className="px-4 py-6 border-t border-outline-variant/40 shrink-0 space-y-2">
          {/* Cart row */}
          <button
            onClick={() => router.push(PRODUCTS_CART_ROUTE)}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-on-surface hover:bg-surface-container hover:text-primary transition-colors font-medium"
          >
            <div className="relative text-xl text-primary">
              <FaCartPlus />
              {products.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-error text-on-error text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {products.length}
                </span>
              )}
            </div>
            <span>Cart</span>
            {products.length > 0 && (
              <span className="ml-auto text-sm text-on-surface-variant">
                {products.length} item{products.length !== 1 ? "s" : ""}
              </span>
            )}
          </button>

          {/* Theme toggle row */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl">
            <ToggleTheme />
            <span className="text-sm font-medium text-on-surface-variant">
               Theme
            </span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default NavMenu;
