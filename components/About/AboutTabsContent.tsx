import { TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { ScrollArea } from "../ui/scroll-area";
import AboutContent from "./AboutContent";

type AboutTabsContentType = {
  skillsList: { title: string; icon: React.ReactNode }[];
  educationList: {
    icon: React.ReactNode;
    duration: string;
    degree: string;
    institution: string;
  }[];
  experienceList: {
    icon: React.ReactNode;
    duration: string;
    title: string;
    company: string;
    description: string;
  }[];
};

function AboutTabsContent({
  skillsList,
  educationList,
  experienceList,
}: AboutTabsContentType) {
  return (
    <div>
      <TabsContent value="Skills" className="w-full py-6">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
          {skillsList.map((skill, index) => (
            <li key={index} className="hover:scale-105 transition-transform">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-16 h-16 sm:w-24 sm:h-24 bg-stone-300 rounded-full flex justify-center items-center shadow-md transition group">
                    <div className="text-5xl text-stone-900 group-hover:text-green-600">
                      {skill.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="capitalize">{skill.title}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </TabsContent>

      <TabsContent value="Education" className="w-full py-6">
        <div className="h-[400px]">
          <ul className="grid grid-col-1 gap-4">
            {educationList.map((education, index) => (
              <AboutContent
                key={index}
                icon={education.icon}
                duration={education.duration}
                title={education.degree}
                organization={education.institution}
              />
            ))}
          </ul>
        </div>
      </TabsContent>

      <TabsContent value="Experience" className="w-full py-6">
        <ScrollArea className="h-[400px]">
          <ul className="grid grid-cols-1 gap-4">
            {experienceList.map((experience, index) => (
              <AboutContent
                key={index}
                icon={experience.icon}
                duration={experience.duration}
                title={experience.title}
                organization={experience.company}
                description={experience.description}
              />
            ))}
          </ul>
        </ScrollArea>
      </TabsContent>
    </div>
  );
}

export default AboutTabsContent;
