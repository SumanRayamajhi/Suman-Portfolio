type NavLinks = {
  href: string;
  label: string;
};

export function NavItems(): NavLinks[] {
  return [
    {
      href: "#home",
      label: "home",
    },
    {
      href: "#about",
      label: "about",
    },
    {
      href: "#project",
      label: "project",
    },
    {
      href: "#contact",
      label: "contact",
    },
  ];
}
