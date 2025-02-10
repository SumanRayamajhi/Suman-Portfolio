"use client";

import { NavItems } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegSun } from "react-icons/fa";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = NavItems();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header
      className={`bg-slate-400 fixed top-0 left-0 h-[10vh] w-full z-10 transition-all duration-300 flex justify-center items-center ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <div className=" md:block">
          <Link href="/">
            <span className="font-bold text-xl md:text-2xl lg:text-3xl">
              SumanPortfolio
            </span>
          </Link>
        </div>

        <section className="hidden md:flex font-semibold text-xl lg:text-[20px] space-x-8">
          {navItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={`capitalize font-medium hover:text-emerald-600 transition-all ${
                item.href === pathname
                  ? "text-emerald-600 border-b-2 border-emerald-600"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </section>

        <div className="flex items-center space-x-6">
          <FaRegSun className="hidden md:flex text-2xl cursor-pointer" />

          <button
            onClick={toggleMobileMenu}
            className=" flex flex-col justify-center items-end w-8 h-8 focus:outline-none group gap-1 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-4 h-0.5 bg-emerald-700 transform transition-all duration-300 rounded-sm  ${
                isMobileMenuOpen
                  ? "rotate-45 w-[23px] translate-y-[6px] "
                  : isScrolled
                  ? "bg-black"
                  : "bg-white"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-emerald-700 transform transition-all duration-300 rounded-sm ${
                isMobileMenuOpen
                  ? "opacity-0 scale-x-0"
                  : isScrolled
                  ? "bg-black"
                  : "bg-white"
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-emerald-700 transform transition-all duration-300 rounded-sm ${
                isMobileMenuOpen
                  ? "-rotate-45 w-6 -translate-y-1.5 bg-black"
                  : isScrolled
                  ? "bg-black"
                  : "bg-white"
              }`}
            ></span>
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-[10vh] left-0 w-full h-screen bg-slate-800 flex flex-col items-center justify-center transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <section className="flex flex-col font-semibold space-y-6">
          {navItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={`capitalize font-medium hover:text-emerald-600 transition-all ${
                item.href === pathname
                  ? "text-emerald-600 border-b-2 border-emerald-600"
                  : ""
              }`}
              onClick={toggleMobileMenu}
            >
              {item.label}
            </Link>
          ))}
        </section>
      </div>
    </header>
  );
}

export default Navbar;
