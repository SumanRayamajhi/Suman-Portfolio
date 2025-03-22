import { FaCode, FaGraduationCap } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { RiUserSettingsFill, RiNextjsFill } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";
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
};

type SkillsLinkTypes = {
  icon: React.ReactNode;
  title: string;
};

type EducationLinkTypes = {
  icon: React.ReactNode;
  duration: string;
  degree: string;
  institution: string;
};

export const aboutList: AboutLinkTypes[] = [
  {
    icon: <RiUserSettingsFill size={30} />,
    title: "Skills",
  },
  {
    icon: <FaGraduationCap size={30} />,
    title: "Education",
  },
  {
    icon: <GoProjectSymlink size={30} />,
    title: "Projects",
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

export const educationList: EducationLinkTypes[] = [
  {
    icon: <MdDateRange size={30} />,
    duration: "May 2021 - Jan 2022",
    degree: "Full-Stack Web Development Course",
    institution: "Migracode, Bircelona",
  },
  {
    icon: <MdDateRange size={30} />,
    duration: "Oct 2015 - Nov 2016",
    degree: "MSC in International Business and Management",
    institution: "Niels Brock Copenhagen Business College",
  },
];
