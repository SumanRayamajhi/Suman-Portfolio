import Image from "next/image";
import { assets } from "@/assets/assets";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-fixed bg-parallax bg-cover bg-stone-200 -z-10 mt-14 py-16  px-8 md:px-4 lg:px-16"
    >
      <div className="flex justify-center items-center h-full">
        <div className="absolute flex flex-col justify-center items-center gap-4 text-white text-center font-semibold p-6 md:p-20 md:w-[1000px]">
          <h2 className="h1 uppercase">Suman Rayamajhi</h2>
          <h3 className="h3 text-green-600 flex items-center gap-4">
            <span className="text-white uppercase text-[21px] font-serif">
              | Frontend Web Developer |
            </span>
          </h3>

          <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl py-16">
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
