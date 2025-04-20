import Image from "next/image";
import { assets } from "@/assets/assets";

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

          <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl flex-shrink-0 py-4">
            <Image
              src={assets.ComputerImg1}
              alt="computer"
              className="w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
