import React from "react";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import { projectList } from "@/utils/projectLinks";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

function ProjectSection() {
  return (
    <section id="project" className="py-16 px-4 sm:px-8 lg:px-16 bg-stone-100">
      <SectionHeading
        title="Projects"
        description="Few projects that I made using React.Js"
      />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {projectList.map((project, index) => {
          const {
            category,
            title,
            description,
            stack,
            image,
            liveLink,
            githubLink,
          } = project;
          return (
            <div
              key={index}
              className="bg-stone-200 rounded-xl shadow-md overflow-hidden w-full max-w-md flex flex-col"
            >
              <div className="w-full  overflow-hidden">
                <Image src={image} alt={title} className="object-cover " />
              </div>

              <div className="flex flex-col items-center gap-4 p-4 text-center">
                <h3 className="h3 group-hover:text-green-600 transition-all duration-300 capitalize">
                  {title}
                </h3>
                <h3 className="font-semibold">{category}</h3>
                <p className="text-sm text-gray-700">{description}</p>
                <ul className="text-green-600 font-semibold flex flex-wrap justify-center gap-1 text-sm">
                  {stack.map((item, index) => (
                    <li key={index}>
                      {item.name}
                      {index !== stack.length - 1 && " |"}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4">
                  <Link href={liveLink}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[40px] h-[40px] rounded-full  flex justify-center items-center group bg-stone-300 focus:scale-110 hover:scale-110 active:scale-105 transition">
                          <BsArrowUpRight className="group-hover:text-green-600" />
                          <TooltipContent>
                            <p>Live Project</p>
                          </TooltipContent>
                        </TooltipTrigger>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {githubLink && (
                    <Link href={githubLink}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[40px] h-[40px] rounded-full bg-stone-300 flex justify-center items-center group  focus:scale-110 hover:scale-110 active:scale-105 transition">
                            <BsGithub className="group-hover:text-green-600" />
                            <TooltipContent>
                              <p>Github Repository</p>
                            </TooltipContent>
                          </TooltipTrigger>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/*    <div className="max-w-xs bg-gradient-to-r from-white to-blue-500  rounded-3xl shadow-xl overflow-hidden ">
        <div className="bg-blue-500 p-6 rounded-t-3xl flex flex-col items-center rounded-tl-[25px] rounded-tr-[25px] rounded-br-[0px] rounded-bl-[25px]">
          <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden "></div>
        </div>
        <div className="bg-white p-6 text-center rounded-tl-[0px] rounded-tr-[25px] rounded-br-[0px] rounded-bl-[25px]">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Frontend developer
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nam
            beatae provident temporibus eum molestias maiores, quis dolore,
            quisquam sunt mollitia! Cum, praesentium. Eaque ipsum amet ullam
            laboriosam quod sit.
          </p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            View More
          </button>
        </div>
      </div> */}
    </section>
  );
}

export default ProjectSection;
