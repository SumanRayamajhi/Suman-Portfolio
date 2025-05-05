import Image from "next/image";
import { assets } from "@/assets/assets";
import SectionHeading from "../SectionHeading";
import { Tabs } from "@/components/ui/tabs";
import { educationList, experienceList, skillsList } from "@/utils/aboutLinks";
import { AboutTabsList, AboutTabsContent } from "./index";
import AboutDownloadButton from "./AboutDownloadButton";

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
      <AboutDownloadButton />
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 mt-16 lg:items-stretch">
        <div className=" lg:order-none mb-8 lg:mb-0">
          <div className="w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] mt-9 lg:mt-0">
            <Image
              src={assets.ProfileImg}
              alt="Profile image of Suman Rayamajhi"
              priority
              quality={100}
              className="rounded-full "
            />
          </div>
        </div>
        <div className="flex-1 w-full flex-col justify-center">
          <Tabs defaultValue="Skills" className="w-full">
            <AboutTabsList />
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
