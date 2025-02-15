import Image from "next/image";
import { assets } from "@/assets/assets";
import { aboutList } from "@/utils/aboutLinks";

function AboutSection() {
  return (
    <section className="w-full  py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">Introduction</h4>
      <h2 className="h2 text-center text-5xl">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-10 my-20">
        <div className="w-[330px] md:w-[440px] lg:w-[550px] max-w-none">
          <Image src={assets.ComputerImg1} alt="computer" className="w-full" />
        </div>
        <div className="flex-1">
          <p className="mb-10   lg:text-left">
            Passionate about building user-friendly, responsive, and scalable
            web applications. Skilled in using TailwindCSS, TypeScript, Next.js,
            and consuming and implementing REST APIs to create efficient and
            aesthetically pleasing UI/UX designs.
          </p>

          <ul className="grid grid-cols-3 lg:grid-cols-3 gap-6 max-w-2xl">
            {aboutList.map((list, index) => {
              const { icon, title, description } = list;
              return (
                <li
                  key={index}
                  className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-300 hover:shadow-black"
                >
                  <div className="text-green-700 font-extrabold mt-3">
                    {icon}
                  </div>
                  <h3 className="my-4 font-semibold">{title}</h3>
                  <p className="text-sm">{description}</p>
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
