import { Button } from "../ui/button";
import { FiDownload } from "react-icons/fi";

function AboutDownloadButton() {
  return (
    <Button
      variant="outline"
      className="group uppercase flex items-center gap-2 focus:scale-110 hover:scale-110 active:scale-105 transition"
    >
      <a
        download="Suman-Rayamajhi-Resume.pdf"
        href="/resume/Suman-Rayamajhi-Resume.pdf"
      >
        Download CV
      </a>
      <FiDownload className="text-xl group-hover:translate-y-1 transition-all" />
    </Button>
  );
}

export default AboutDownloadButton;
