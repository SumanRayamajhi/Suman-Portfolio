import Image from "next/image";
import { assets } from "@/assets/assets";
import SectionHeading from "./SectionHeading";
import { Tabs } from "@/components/ui/tabs";
import { educationList, experienceList, skillsList } from "@/utils/aboutLinks";
import AboutTabslist from "./AboutTabslist";
import AboutTabsContent from "./AboutTabsContent";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";

function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col items-center min-h-[80vh] w-full scroll-mt-14 py-16 px-4 sm:px-8 lg:px-16 bg-stone-200"
    >
      <SectionHeading
        title="About Me"
        description="Passionate about building user-friendly, responsive, and scalable
            web applications. Committed to creating seamless experiences by leveraging the latest technologies and best practices in web development."
      />
      <Button variant="outline" className="uppercase flex items-center gap-2">
        <a
          download="Suman-Rayamajhi-Resume.pdf"
          href="/resume/Suman-Rayamajhi-Resume.pdf"
        >
          Download CV
        </a>
        <FiDownload className="text-xl" />
      </Button>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 mt-16 lg:items-stretch">
        <div className=" lg:order-none mb-8 lg:mb-0">
          <div className="w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] mt-9 lg:mt-0">
            <Image
              src={assets.ProfileImg}
              alt="profile"
              priority
              quality={100}
              className="rounded-full "
            />
          </div>
        </div>
        <div className="flex-1 w-full flex-col justify-center">
          <Tabs defaultValue="Skills" className="w-full">
            <AboutTabslist />
            <AboutTabsContent
              educationList={educationList}
              experienceList={experienceList}
              skillsList={skillsList}
            />
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
