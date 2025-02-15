import { FaCode, FaGraduationCap } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";

type AboutLinkTypes = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const aboutList: AboutLinkTypes[] = [
  {
    icon: <FaCode size={30} />,
    title: "Languages",
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
