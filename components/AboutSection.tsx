import Image from "next/image";
import { assets } from "@/assets/assets";
import SectionHeading from "./SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RiUserSettingsFill } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";

function AboutSection() {
  return (
    <section
      id="about"
      className="w-full scroll-mt-20 py-16 px-4 sm:px-8 lg:px-16 bg-gray-200"
    >
      <SectionHeading
        title="About Me"
        description="Passionate about building user-friendly, responsive, and scalable
            web applications. Skilled in using TailwindCSS, TypeScript, Next.js,
            and consuming and implementing REST APIs to create efficient and
            aesthetically pleasing UI/UX designs."
      />
      <div className="flex w-full flex-col lg:flex-row items-center gap-10 my-20">
        <div className="w-[330px] md:w-[440px] lg:w-[550px] max-w-none">
          <Image src={assets.ComputerImg1} alt="computer" className="w-full" />
        </div>
        <div className="flex-1">
          <Tabs defaultValue="Skills">
            <TabsList
              className="grid w-full grid-cols-3 gap-7
            "
            >
              <TabsTrigger value="Skills" className="gap-3">
                <span>
                  <RiUserSettingsFill size={25} />
                </span>
                Skills
              </TabsTrigger>
              <TabsTrigger value="Education" className="gap-3">
                <span>
                  <FaGraduationCap size={25} />
                </span>
                Education
              </TabsTrigger>
              <TabsTrigger value="Projects" className="gap-3">
                <GoProjectSymlink size={25} />
                Projects
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Skills">Skills</TabsContent>
            <TabsContent value="Education">Education</TabsContent>
            <TabsContent value="Projects">Projects</TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
