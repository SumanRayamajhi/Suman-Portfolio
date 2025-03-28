import Image from "next/image";
import { assets } from "@/assets/assets";
import SectionHeading from "./SectionHeading";
import { Tabs } from "@/components/ui/tabs";
import { educationList, experienceList, skillsList } from "@/utils/aboutLinks";
import AboutTabslist from "./AboutTabslist";
import AboutTabsContent from "./AboutTabsContent";

function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col items-center min-h-[80vh] w-full scroll-mt-14 py-16 px-4 sm:px-8 lg:px-16 bg-gray-200"
    >
      <SectionHeading
        title="About Me"
        description="Passionate about building user-friendly, responsive, and scalable
            web applications. Committed to creating seamless experiences by leveraging the latest technologies and best practices in web development."
      />
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 mt-16 lg:items-stretch">
        <div className="w-full max-w-sm lg:max-w-md xl:max-w-lg flex-shrink-0 ">
          <Image
            src={assets.ComputerImg1}
            alt="computer"
            className="w-full"
            priority
          />
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
