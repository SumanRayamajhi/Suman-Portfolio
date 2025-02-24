import Link from "next/link";
import React from "react";

function NavLink({
  href,
  label,
}: {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      className={`uppercase font-medium py-3 hover:text-green-600 transition-colors relative block after:block after:absolute after:left-0 after:h-0.5 after:bg-green-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right after:hover:origin-left`}
    >
      {label}
    </Link>
  );
}

export default NavLink;
