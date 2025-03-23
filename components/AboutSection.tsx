import Image from "next/image";
import { assets } from "@/assets/assets";
import SectionHeading from "./SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  educationList,
  experienceList,
  skillsList,
  SVGIconEducation,
  SVGIconExperience,
  SVGIconSkill,
} from "@/utils/aboutLinks";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col items-center w-full scroll-mt-14 py-16 px-4 sm:px-8 lg:px-16 bg-gray-200"
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
        <div className="flex-1 w-full flex flex-col justify-center">
          <Tabs defaultValue="Skills" className="w-full">
            <TabsList className="flex flex-col md:flex-row justify-center gap-4 py-20 md:py-0">
              <TabsTrigger
                value="Skills"
                className="flex items-center gap-2 px-6 py-2 text-lg rounded-md"
              >
                <SVGIconSkill />
                Skills
              </TabsTrigger>
              <TabsTrigger
                value="Education"
                className="flex items-center gap-2 px-6 py-2 text-lg rounded-md"
              >
                <SVGIconEducation />
                Education
              </TabsTrigger>
              <TabsTrigger
                value="Experience"
                className="flex items-center gap-2 px-6 py-2 text-lg rounded-md"
              >
                <SVGIconExperience />
                Experience
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Skills" className="w-full py-6">
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
                {skillsList.map((skill, index) => {
                  return (
                    <li
                      key={index}
                      className="hover:scale-105 transition-transform"
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-20 h-20 sm:w-24 sm:h-24  bg-stone-400 rounded-lg flex justify-center items-center shadow-md transition group">
                            <div className="text-5xl text-gray-100 group-hover:text-green-600">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.title}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
            <TabsContent value="Education" className="w-full py-6">
              <div className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {educationList.map((education, index) => {
                    return (
                      <li
                        key={index}
                        className="h-[184px] py-6 md:py-10 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start  bg-stone-400 shadow-md transition group gap-2"
                      >
                        <div className="flex gap-2">
                          <span className="text-green-600">
                            {education.icon}
                          </span>
                          <h4 className="font-bold">{education.duration}</h4>
                        </div>

                        <h3 className="h3 lg:text-[20px]">
                          {education.degree}
                        </h3>
                        <p className="text-green-600">
                          {education.institution}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="Experience" className="w-full py-6">
              <div className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {experienceList.map((experience, index) => {
                    return (
                      <li
                        key={index}
                        className="h-[184px] py-6 md:py-10 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start  bg-stone-400 shadow-md transition group gap-2"
                      >
                        <div className="flex gap-2">
                          <span className="text-green-600">
                            {experience.icon}
                          </span>
                          <h4 className="font-bold">{experience.duration}</h4>
                        </div>

                        <h3 className="h3 lg:text-[20px]">
                          {experience.title}
                        </h3>
                        <p className="text-green-600">{experience.company}</p>
                        <p className="">{experience.description}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
