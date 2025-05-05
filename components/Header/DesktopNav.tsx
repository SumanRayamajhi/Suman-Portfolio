import React from "react";
import NavLink from "./NavLink";

type NavItemsProps = {
  navItems: { href: string; label: string }[];
  activeSection: string;
};
function DesktopNav({ navItems, activeSection }: NavItemsProps) {
  return (
    <div className="hidden lg:flex space-x-24">
      {navItems.map((item, index) => (
        <NavLink
          href={item.href}
          key={index}
          label={item.label}
          isActive={activeSection === item.href.replace("#", "")}
          activeSection={activeSection}
        />
      ))}
    </div>
  );
}

export default DesktopNav;
