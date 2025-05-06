import { ProjectProps } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TooltipLink from "./TooltipLink";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

function ProjectCard({
  category,
  title,
  description,
  stack,
  image,
  liveLink,
  githubLink,
}: ProjectProps) {
  return (
    <div className="bg-stone-100 rounded-xl shadow-md overflow-hidden w-full max-w-md flex flex-col">
      <div className="w-full  overflow-hidden">
        <Image src={image} alt={title} className="object-cover " />
      </div>

      <div className="bg-slate-100 flex flex-col items-center gap-4 p-4 text-center">
        <h3 className="h3 group-hover:text-green-600 transition capitalize">
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

        <div className="flex items-center gap-4 group hover:text-green-600">
          <TooltipLink
            href={liveLink}
            icon={<BsArrowUpRight />}
            label="Live Project"
          />

          {githubLink && (
            <Link href={githubLink}>
              <TooltipLink
                href={githubLink}
                icon={<BsGithub />}
                label="Github Repo"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
