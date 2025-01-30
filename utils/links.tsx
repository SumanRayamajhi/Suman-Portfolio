import { usePathname } from "next/navigation";

type NavLinks = {
  href: string;
  label: string;
  active: boolean;
  position: string;
};

export function NavItems(): NavLinks[] {
  const pathname = usePathname();

  function isNavItemsActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      href: "/",
      label: "home",
      active: pathname === "/",
      position: "top",
    },
    {
      href: "/about",
      label: "about",
      active: isNavItemsActive(pathname, "/about"),
      position: "top",
    },
    {
      href: "/project",
      label: "project",
      active: isNavItemsActive(pathname, "/project"),
      position: "top",
    },
    {
      href: "/contact",
      label: "contact",
      active: isNavItemsActive(pathname, "/contact"),
      position: "top",
    },
  ];
}
