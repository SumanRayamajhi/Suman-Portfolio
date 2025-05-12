import { AboutContentTypes } from "@/types/about";

function AboutContent({
  icon,
  duration,
  title,
  organization,
  description,
}: AboutContentTypes) {
  return (
    <div className="h-full py-4 lg:py-8 px-5 lg:px-8 rounded-md flex flex-col justify-center items-center bg-stone-100 shadow-md transition group gap-2">
      <div className="flex gap-2">
        <span className="text-green-600">{icon}</span>
        <h4 className="font-bold">{duration}</h4>
      </div>

      <h3 className="h3 lg:text-[20px] text-center">{title}</h3>
      <p className="text-green-600 font-medium text-center">{organization}</p>
      <p className="text-center">{description}</p>
    </div>
  );
}

export default AboutContent;
