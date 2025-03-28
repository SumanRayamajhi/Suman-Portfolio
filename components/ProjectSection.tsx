import React from "react";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import { projectList } from "@/utils/projectLinks";
import { assets } from "@/assets/assets";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa6";

function ProjectSection() {
  return (
    <section id="project">
      <SectionHeading
        title="Projects"
        description="Few projects that I made using React.Js"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
            <div key={index} className="container mx-auto p-[20px]">
              <div className="flex flex-col lg:flex-row lg:gap-[30px]">
                <div className="w-full lg:w-[50%] h-full order-2 lg:order-none">
                  <div className="flex flex-col gap-[10px]">
                    <h3 className="h3 leading-none group-hover:text-green-600 transition-all duration-300 capitalize">
                      {title}
                    </h3>
                    <h3>{category}</h3>
                    <p className="6px">{description}</p>
                    <ul className="text-green-600 flex gap-2 lg:text-[15px]">
                      {stack.map((item, index) => (
                        <li key={index}>
                          {item.name}
                          {index !== stack.length - 1 && ","}
                        </li>
                      ))}
                    </ul>
                    <div className="border border-black"></div>
                    <div className="flex items-center gap-4">
                      <Link href={liveLink}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[40px] h-[40px] rounded-full bg-slate-300 flex justify-center items-center group">
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
                              <TooltipTrigger className="w-[40px] h-[40px] rounded-full bg-slate-400 flex justify-center items-center group">
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
                <div className="w-full lg:w-[50%]">
                  <Image src={image} alt={title} className="object-cover" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectSection;
