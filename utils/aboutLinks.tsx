import { FaCode, FaGraduationCap } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { RiUserSettingsFill, RiNextjsFill } from "react-icons/ri";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa6";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

type AboutLinkTypes = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type SkillsLinkTypes = {
  icon: React.ReactNode;
  title: string;
};

export const aboutList: AboutLinkTypes[] = [
  {
    icon: <RiUserSettingsFill size={30} />,
    title: "Skills",
    description: "HTML, CSS, JavaScript, React Js, Next Ja",
  },
  {
    icon: <FaGraduationCap size={30} />,
    title: "Education",
    description: "Full Stack Web Development Course",
  },
  {
    icon: <GoProjectSymlink size={30} />,
    title: "Projects",
    description: "Build few projects",
  },
];

export const skillsList: SkillsLinkTypes[] = [
  {
    icon: <FaHtml5 size={30} />,
    title: "HTML 5",
  },
  {
    icon: <FaCss3 size={30} />,
    title: "CSS 3",
  },
  {
    icon: <FaJs size={30} />,
    title: "JavaScript",
  },
  {
    icon: <FaReact size={30} />,
    title: "react.js",
  },
  {
    icon: <SiNextdotjs size={30} />,
    title: "Next.js",
  },
  {
    icon: <SiTailwindcss size={30} />,
    title: "Tailwind.css",
  },
  {
    icon: <FaNodeJs size={30} />,
    title: "Node.js",
  },
  {
    icon: <FaFigma size={30} />,
    title: "Figma",
  },
];
