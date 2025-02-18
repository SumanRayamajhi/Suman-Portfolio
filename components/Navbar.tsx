"use client";

import { NavItems } from "@/utils/links";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = NavItems();

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
      className={`fixed top-0 left-0 h-[10vh] w-full z-10 px-4 md:px-8 lg:px-16 transition-all duration-300 flex justify-center items-center ${
        isScrolled ? "bg-opacity-55 backdrop-blur-lg shadow-md" : ""
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between">
        <section className="hidden lg:flex font-semibold text-xl lg:text-[20px] gap-5">
          {navItems.slice(0, 2).map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="uppercase font-medium hover:text-emerald-600 hover:transition-all hover:border-b-2 
              "
            >
              {item.label}
            </Link>
          ))}
        </section>
        <section>
          <Logo />
        </section>

        <section className="hidden lg:flex font-semibold text-xl lg:text-[20px] space-x-8">
          {navItems.slice(2).map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="uppercase font-medium hover:text-emerald-600 hover:transition-all hover:border-b-2 "
            >
              {item.label}
            </Link>
          ))}
        </section>

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
                isMobileMenuOpen
                  ? "-rotate-45 w-6 -translate-y-1.5 bg-black"
                  : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-[10vh] left-0 w-full h-screen lg:hidden bg-slate-200 flex flex-col items-center justify-center transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <section className="flex flex-col font-semibold space-y-6">
          {navItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="uppercase font-medium hover:text-emerald-600 hover:transition-all hover:border-b-2 "
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
