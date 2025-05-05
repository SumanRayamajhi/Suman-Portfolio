import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  SVGIconEducation,
  SVGIconExperience,
  SVGIconSkill,
} from "@/utils/aboutLinks";

function AboutTabslist() {
  return (
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
  );
}

export default AboutTabslist;
