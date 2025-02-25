import Link from "next/link";
import React from "react";

function NavLink({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`uppercase font-medium py-3 hover:text-green-600 transition-colors relative block after:block after:absolute after:left-0 after:h-0.5 after:bg-green-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right after:hover:origin-left ${
        isActive ? "text-green-600 " : ""
      }`}
    >
      {label}
    </Link>
  );
}

export default NavLink;
