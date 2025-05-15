import Image from "next/image";
import { assets } from "@/assets/assets";

function HeroImage() {
  return (
    <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl py-6">
      <Image
        src={assets.ComputerImg1}
        alt="computer"
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  );
}

export default HeroImage;
