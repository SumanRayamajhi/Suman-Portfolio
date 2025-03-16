import Image from "next/image";
import { assets } from "@/assets/assets";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";

function HeroSection() {
  return (
    <section
      id="home"
      className="h-full mt-14 py-16 px-4 sm:px-8 lg:px-16 bg-stone-200"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          <div className=" text-center order-2 lg:order-none flex flex-col  items-center justify-between lg:items-start lg:text-left">
            <h3 className="h3">Frontend Web Developer</h3>
            <h2 className="h2">
              Hello I'm <br /> <span className="h1">Suman Rayamajhi</span>
            </h2>
            <p className="max-w-[500px] mb-9 mt-5 ">
              Motivated and detail-oriented Junior Frontend Developer
              specializing in React.js. Seeking an opportunity to grow and
              contribute to a dynamic development team.
            </p>

            <Button
              variant="outline"
              className="uppercase flex items-center gap-2"
            >
              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </Button>
          </div>
          <div className="order-1 lg:order-none mb-8 lg:mb-0">
            <div className="w-[298px] h-[298px] lg:w-[498px] lg:h-[498px] mt-9 lg:mt-0">
              <Image
                src={assets.ProfileImg}
                alt="profile"
                priority
                quality={100}
                className="rounded-full "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
