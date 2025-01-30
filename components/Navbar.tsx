"use client";

import { NavItems } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import TransitionLinks from "./TransitionLinks";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = NavItems();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        isScrolled ? "bg-gray-800/80 backdrop-blur-lg shadow-md" : "bg-blue-800"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" legacyBehavior>
          <a
            className={`text-2xl font-bold transition ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            SumanPortfolio
          </a>
        </Link>

        <div className="hidden md:flex space-x-8 ">
          {navItems.map((item, index) => {
            const { href, label } = item;
            return (
              <TransitionLinks href={href} key={index} legacyBehavior>
                <a
                  className={`${
                    href === pathname &&
                    "text-emerald-600 border-b-2 border-emerald-600"
                  } capitalize font-medium hover:text-emerald-600 transition-all`}
                >
                  {label}
                </a>
              </TransitionLinks>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
