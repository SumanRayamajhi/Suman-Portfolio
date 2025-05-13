import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { Button } from "../ui/button";
import HeroImage from "./HeroImage";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-fixed bg-parallax bg-cover mt-14 px-6 md:px-4 lg:px-16 py-16 z-0"
    >
      <div className="flex justify-center items-center h-full">
        <div className="absolute flex flex-col justify-center items-center gap-4 text-center font-semibold p-6 md:p-6 md:w-[1000px]">
          <h1 className="h1 uppercase text-white  tracking-wider">
            Suman Rayamajhi
          </h1>
          <h3 className="h3 flex items-center font-serif uppercase gap-3 tracking-wider text-stone-300">
            <span className="bg-green-600 h-6 w-[3px] rounded-lg" />
            Frontend Web Developer
            <span className="bg-green-600 h-6 w-[3px] rounded-lg" />
          </h3>
          <a href="#contact">
            <Button
              variant="outline"
              className="group uppercase flex  items-center gap-2 transition-transform duration-300 ease-in-out focus:scale-[1.05] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
            >
              Get in Touch
              <MdKeyboardDoubleArrowDown className="text-xl transform transition-transform group-hover:translate-y-[4px]" />
            </Button>
          </a>
          <HeroImage />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
