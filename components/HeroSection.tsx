import Image from "next/image";
import { assets } from "@/assets/assets";

function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 mt-[10vh]">
      <div className="col-span-7 place-self-center">
        <h1 className="mb-4 text-4xl lg:text-6xl font-extrabold">
          {" "}
          Hello, I'm Suman
        </h1>
        <p className="text-lg lg:text-xl">Front-end web developer</p>
        <div>
          <button className="px-6 py-3 rounded-full mr-4 bg-green-600 hover:bg-green-700">
            Hire Me
          </button>
          <button className="px-6 py-3 rounded-full bg-green-600  hover:bg-green-700">
            Download CV
          </button>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-1">
        <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image src={assets.ProfileImg} alt="profile" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
