import { FaCode, FaGraduationCap } from "react-icons/fa6";

type AboutLinkTypes = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function AboutLinks(): AboutLinkTypes[] {
  return [
    {
      icon: <FaCode />,
      title: "Languages",
      description: "HTML, CSS, JavaScript, React Js, Next Ja",
    },
    {
      icon: <FaGraduationCap />,
      title: "Languages",
      description: "HTML, CSS, JavaScript, React Js, Next Ja",
    },
    {
      icon: "/",
      title: "Languages",
      description: "HTML, CSS, JavaScript, React Js, Next Ja",
    },
  ];
}

export default AboutLinks;
