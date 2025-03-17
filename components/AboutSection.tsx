import Image from "next/image";
import { assets } from "@/assets/assets";
import { aboutList } from "@/utils/aboutLinks";
import SectionHeading from "./SectionHeading";

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
          <ul className="grid grid-cols-3 lg:grid-cols-3 gap-6 max-w-2xl">
            {aboutList.map((list, index) => {
              const { icon, title } = list;
              return (
                <li key={index} className="flex">
                  <div className="text-green-700 font-extrabold mt-3">
                    {icon}
                  </div>
                  <h3 className="my-4 font-semibold">{title}</h3>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
