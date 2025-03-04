/* export const projects = [//-
  {//-
    num: "01",//-
    category: "frontend",//-
    title: "Spain at Mipim",//-
    description://-
      "A responsive website built with Next JS for a company business.",//-
    stack: [//-
      { name: "HTML 5" },//-
      { name: "CSS 3" },//-
      { name: "JavaScript" },//-
      { name: "NextJS" },//-
    ],//-
    image: "ProfileImg",//-
    github: "",//-
  },//-
]; */ //-
import { StaticImageData } from "next/image"; //+
import { assets } from "@/assets/assets";

type ProjectLinkTypes = {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: { name: string }[];
  image: StaticImageData;
  github?: string;
  link: string;
};

export const projectList: ProjectLinkTypes[] = [
  {
    num: "01",
    category: "frontend project",
    title: "Spain at Mipim",
    description:
      "A responsive website built with Next JS for a company business.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "NextJS" },
    ],
    image: assets.ProjectImg1,
    link: "https://www.spainatmipim.com",
  },
];
