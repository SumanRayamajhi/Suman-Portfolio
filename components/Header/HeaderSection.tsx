"use client";

import { NavItems } from "@/utils/navLinks";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import useActiveSection from "./useActiveSection";
import DesktopNav from "./DesktopNav";

function HeaderSection() {
  const navItems = NavItems();
  const leftNavItems = navItems.slice(0, 2);
  const rightNavItems = navItems.slice(2);

  const { isScrolled, activeSection } = useActiveSection();

  return (
    <header
      className={`fixed top-0 left-0 h-[11vh] w-full z-50 px-4 sm:px-8 lg:px-16 flex justify-center items-center transition-all duration-300 ease-in-out ${
        isScrolled
          ? activeSection === "home"
            ? "bg-black"
            : "bg-white shadow-[0px_2px_6px_0px_rgba(0,_0,_0,_0.1)]"
          : "shadow-[0px_2px_6px_0px_rgba(0,_0,_0,_0.1)] bg-black"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between">
        <div className="hidden lg:flex font-semibold text-xl lg:text-[16px] space-x-24">
          <DesktopNav navItems={leftNavItems} activeSection={activeSection} />
        </div>
        <div>
          <Logo />
        </div>
        <div className="hidden lg:flex font-semibold text-xl lg:text-[16px] space-x-24">
          <DesktopNav navItems={rightNavItems} activeSection={activeSection} />
        </div>
      </nav>
      <MobileMenu activeSection={activeSection} />
    </header>
  );
}

export default HeaderSection;
