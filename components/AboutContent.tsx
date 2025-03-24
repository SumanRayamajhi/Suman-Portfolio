type ContentTypes = {
  key: number;
  icon: React.ReactNode;
  duration: string;
  title: string;
  organization: string;
  description?: string;
};

function AboutContent({
  key,
  icon,
  duration,
  title,
  organization,
  description,
}: ContentTypes) {
  return (
    <li
      key={key}
      className="h-[184px] py-6 md:py-10 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start  bg-stone-400 shadow-md transition group gap-2"
    >
      <div className="flex gap-2">
        <span className="text-green-600">{icon}</span>
        <h4 className="font-bold">{duration}</h4>
      </div>

      <h3 className="h3 lg:text-[20px]">{title}</h3>
      <p className="text-green-600">{organization}</p>
      <p className="">{description}</p>
    </li>
  );
}

export default AboutContent;
