import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface TransitionLinksProps extends LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function TransitionLinks({ children, href, ...props }: TransitionLinksProps) {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const contentWrapper = document.querySelector("#content-wrapper");
    contentWrapper?.classList.add("page-transition");
    await sleep(300);
    router.push(href);
    await sleep(300);
    contentWrapper?.classList.remove("page-transition");
  };
  return (
    <Link onClick={handleTransition} href={href} {...props}>
      {children}
    </Link>
  );
}

export default TransitionLinks;
