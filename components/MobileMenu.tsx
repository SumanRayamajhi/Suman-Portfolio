import { NavItems } from "@/utils/navLinks";
import { useState } from "react";
import NavLink from "./NavLink";

function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navItems = NavItems();

  return (
    <div>
      <div className="flex items-center space-x-6 lg:hidden>">
        <button
          onClick={toggleMobileMenu}
          className=" flex flex-col justify-center items-end w-8 h-8 focus:outline-none group gap-1 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-4 h-0.5 bg-black transform transition-all duration-300 rounded-sm  ${
              isMobileMenuOpen ? "rotate-45 w-[23px] translate-y-[6px] " : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transform transition-all duration-300 rounded-sm ${
              isMobileMenuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          ></span>
          <span
            className={`block w-5 h-0.5 bg-black transform transition-all duration-300 rounded-sm ${
              isMobileMenuOpen ? "-rotate-45 w-6 -translate-y-1.5 bg-black" : ""
            }`}
          ></span>
        </button>
      </div>

      <div
        className={`fixed top-[10vh] left-0 w-full h-screen lg:hidden bg-slate-200 flex flex-col items-center justify-center transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={toggleMobileMenu}
      >
        <section className="flex flex-col font-semibold space-y-6">
          {navItems.map((item, index) => (
            <NavLink
              href={item.href}
              key={index}
              label={item.label}
              onClick={toggleMobileMenu}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default MobileMenu;
