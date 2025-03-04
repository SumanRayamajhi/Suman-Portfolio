import React from "react";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import { projectList } from "@/utils/projectLinks";
import { assets } from "@/assets/assets";

function ProjectSection() {
  return (
    <section id="project">
      <SectionHeading
        title="Projects"
        description="Few projects that I made using React.Js"
      />
      <div className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div className="container mx-auto">
          {projectList.map((project, index) => {
            const { num, category, title, description, stack, image, link } =
              project;
            return (
              <div
                key={index}
                className="flex flex-col lg:flex-row xl:gap-[30px]"
              >
                <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
                  <div>
                    <div className="text-8xl leading-none font-extrabold  text-outline text-transparent">
                      {num}
                    </div>
                    <h2 className="h2 capitalize leading-none group-hover:text-green-600 transition-all duration-300">
                      {category}
                    </h2>
                    <p className="">{description}</p>
                    <ul className="flex gap-4">
                      {stack.map((item, index) => {
                        return (
                          <li key={index} className="text-xl text-green-600">
                            {item.name}
                            {index !== project.stack.length - 1 && ","}
                          </li>
                        );
                      })}
                    </ul>
                    <div className="border border-black/20"></div>
                  </div>
                </div>
                <div className="w-full lg:w-[50%]">slider</div>
              </div>
            );
          })}
        </div>

        {/*  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               
              /*   <div className="relative overflow-hidden rounded-lg shadow-md">
                  <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                      <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                        {project.num}
                      </div>
                      <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-green-600 transition">
                        {project.category}
                      </h2>
                      <p className="">{project.description}</p>
                    </div>
                  </div>  */}
        {/*     <Image
                    src={project.image}
                    alt="profile"
                    priority
                    quality={100}
                    width={400}
                    height={400}
                  /> */}
        {/*     <div className="absolute bottom-0 left-0 bg-gradient-to-r from-blue-500 to-purple-500 w-full h-20 px-4 py-2 text-sm text-white">
                    Project 1
                  </div> */}
      </div>
    </section>
  );
}

export default ProjectSection;
