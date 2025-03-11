import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

type ContactLinkTypes = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const contactList: ContactLinkTypes[] = [
  {
    icon: <FaPhoneAlt size={30} />,
    title: "Phone",
    description: "(+34) 631 887 080",
  },
  {
    icon: <MdOutlineMail size={30} />,
    title: "Email",
    description: "samsrayamajhi@gmail.com",
  },
  {
    icon: <FaLinkedin size={30} />,
    title: "Linkedin",
    description: "linkedin.com/in/suman-rayamajhi",
  },
];
