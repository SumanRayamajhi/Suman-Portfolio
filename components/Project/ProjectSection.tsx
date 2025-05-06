import React from "react";
import SectionHeading from "../SectionHeading";
import { projectList } from "@/utils/projectLinks";
import ProjectCard from "./ProjectCard";

function ProjectSection() {
  return (
    <section id="project" className="py-16 px-4 sm:px-8 lg:px-16">
      <SectionHeading
        title="Projects"
        description="Few projects that I made using React.Js"
      />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
