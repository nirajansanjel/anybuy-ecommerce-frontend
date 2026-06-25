import Logo from "./Logo";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/40">
      <nav className="flex justify-between items-center max-w-[1200px] mx-auto px-6 lg:px-16 h-24">
        <Logo />
        <NavMenu />
      </nav>
    </header>
  );
};

export default Header;
