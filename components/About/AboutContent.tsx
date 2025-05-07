import { AboutContentTypes } from "@/types/about";

function AboutContent({
  icon,
  duration,
  title,
  organization,
  description,
}: AboutContentTypes) {
  return (
    <div className="h-[200px] md:h-[184px] py-10 px-8 md:px-10 rounded-md flex flex-col justify-center items-center bg-stone-100 shadow-md transition group gap-2">
      <div className="flex gap-2">
        <span className="text-green-600">{icon}</span>
        <h4 className="font-bold">{duration}</h4>
      </div>

      <h3 className="h3 lg:text-[20px]">{title}</h3>
      <p className="text-green-600">{organization}</p>
      <p className="text-center">{description}</p>
    </div>
  );
}

export default AboutContent;
