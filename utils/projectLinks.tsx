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
    title: "Rick and Morty",
    description:
      "A responsive website built with public API of Rick and Morty.",
    stack: [
      { name: "HTML 5" },
      { name: "TailwindCSS" },
      { name: "TypeScript" },
      { name: "NextJS" },
    ],
    image: assets.RickMorty,
    liveLink: "https://ricky-morty-xi.vercel.app",
    githubLink: "https://github.com/SumanRayamajhi/Rick-Morty",
  },
  {
    category: "Frontend Project",
    title: "Spain at Mipim",
    description: "A responsive website built with Next JS for a company.",
    stack: [
      { name: "HTML 5" },
      { name: "TailwindCSS" },
      { name: "TypeScript" },
      { name: "NextJS" },
    ],
    image: assets.SpainAtMipim,
    liveLink: "https://www.spainatmipim.com",
  },
  {
    category: "Frontend Project",
    title: "Connect Four Game",
    description: "A game built with ReactJS as a personal project.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "ReactJS" },
    ],
    image: assets.ConnectFour,
    liveLink: "https://connect-four-game-aebdd.web.app/",
    githubLink: "https://github.com/SumanRayamajhi/Connect-Four-Game",
  },
  {
    category: "Frontend Project",
    title: "Tic-Tac-Toe Game",
    description: "A game built with ReactJS as a personal project",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "ReactJS" },
    ],
    image: assets.TicTacToeGame,
    liveLink: "https://tic-tac-toe-game-a70aa.web.app/",
    githubLink: "https://github.com/SumanRayamajhi/tik-tak-toe-game",
  },
];
