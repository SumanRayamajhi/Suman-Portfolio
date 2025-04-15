"use client";

import { NavItems } from "@/utils/navLinks";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

function HeaderSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = NavItems();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");
      let currentSection: string = activeSection;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id") || "";
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = sectionId;
        }
      });
      setActiveSection(currentSection);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 h-[11vh] w-full z-50 px-4 sm:px-8 lg:px-16 flex justify-center items-center transition-all duration-300 ease-in-out ${
        isScrolled
          ? activeSection === "home"
            ? "bg-black"
            : "bg-white"
          : "shadow-[0px_2px_6px_0px_rgba(0,_0,_0,_0.1)] translate-y-[-5px] bg-black"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between">
        <div className="hidden lg:flex font-semibold text-xl lg:text-[16px] space-x-24">
          {navItems.slice(0, 2).map((item, index) => (
            <NavLink
              href={item.href}
              key={index}
              label={item.label}
              isActive={activeSection === item.href.replace("#", "")}
            />
          ))}
        </div>
        <div>
          <Logo />
        </div>
        <div className="hidden lg:flex font-semibold text-xl lg:text-[16px] space-x-24">
          {navItems.slice(2).map((item, index) => (
            <NavLink
              href={item.href}
              key={index}
              label={item.label}
              isActive={activeSection === item.href.replace("#", "")}
            />
          ))}
        </div>
      </nav>
      <MobileMenu activeSection={activeSection} />
    </header>
  );
}

export default HeaderSection;
