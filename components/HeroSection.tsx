import Image from "next/image";
import { assets } from "@/assets/assets";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden -z-10 bg-fixed bg-parallax bg-cover mt-14 py-16 px-4 sm:px-8 lg:px-16 bg-stone-200"
    >
      <div className="h-screen flex justify-center items-start ">
        <div className="absolute font-semibold flex items-center p-20 mx-6 md:w-[1000px] text-white flex-col text-center gap-4">
          <h2 className="h1">Suman Rayamajhi</h2>
          <h3 className="h3 text-green-600 flex justify-center items-center gap-4">
            |
            <span className="text-white uppercase text-[21px] font-serif">
              Frontend Web Developer
            </span>
            |
          </h3>
          {/*   <p className="max-w-[700px] mb-9 mt-5 ">
            Motivated and detail-oriented Junior Frontend Developer specializing
            in React.js. Seeking an opportunity to grow and contribute to a
            dynamic development team.
          </p> */}

          {/*  <Button
            variant="outline"
            className="uppercase flex items-center gap-2"
          >
            <a
              download="Suman-Rayamajhi-Resume.pdf"
              href="/resume/Suman-Rayamajhi-Resume.pdf"
            >
              Download CV
            </a>
            <FiDownload className="text-xl" />
          </Button> */}
          <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl flex-shrink-0 py-4">
            <Image
              src={assets.ComputerImg1}
              alt="computer"
              className="w-full"
              priority
            />
          </div>
        </div>

        {/*  <div className="order-1 lg:order-none mb-8 lg:mb-0">
          <div className="w-[298px] h-[298px] lg:w-[498px] lg:h-[498px] mt-9 lg:mt-0">
            <Image
              src={assets.ProfileImg}
              alt="profile"
              priority
              quality={100}
              className="rounded-full "
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default HeroSection;
