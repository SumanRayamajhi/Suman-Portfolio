import { StaticImageData } from "next/image";

type StackItem = { name: string };

export type ProjectProps = {
    category: string;
    title: string;
    description: string;
    stack: StackItem[];
    image: string | StaticImageData;
    liveLink: string;
    githubLink?: string;
};

export type TooltipLinkProps = {
    href: string;
    icon: React.ReactNode;
    label: string;
}