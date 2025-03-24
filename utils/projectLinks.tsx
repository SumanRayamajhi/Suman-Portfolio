import { StaticImageData } from "next/image"; //+
import { assets } from "@/assets/assets";

type ProjectLinkTypes = {
  category: string;
  title: string;
  description: string;
  stack: { name: string }[];
  image: StaticImageData;
  githubLink?: string;
  liveLink: string;
};

export const projectList: ProjectLinkTypes[] = [
  {
    category: "Frontend Project",
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
    liveLink: "https://www.spainatmipim.com",
    githubLink: "https://www.spainatmipim.com",
  },
  {
    category: "Frontend Project",
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
    liveLink: "https://www.spainatmipim.com",
  },
  {
    category: "Frontend Project",
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
    liveLink: "https://www.spainatmipim.com",
    githubLink: "https://www.spainatmipim.com",
  },
  {
    category: "Frontend Project",
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
    liveLink: "https://www.spainatmipim.com",
    githubLink: "https://www.spainatmipim.com",
  },
];
