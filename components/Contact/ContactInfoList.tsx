import { contactList } from "@/utils/contactLinks";

function ContactInfoList() {
  return (
    <ul className="flex flex-col gap-10">
      {contactList.map((contact, index) => {
        const { icon, title, description } = contact;

        const isLinkedin = index === contactList.length - 1;
        return (
          <li key={index} className="flex items-center gap-6">
            <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-stone-100 shadow-md text-green-600 rounded-full flex items-center justify-center">
              <div className="text-[28px]">
                {isLinkedin ? (
                  <a href="https://www.linkedin.com/in/suman-rayamajhi">
                    {icon}
                  </a>
                ) : (
                  icon
                )}
              </div>
            </div>
            <div className="flex-1 text-stone-900">
              <p>{title}</p>
              {isLinkedin ? (
                <a href="https://www.linkedin.com/in/suman-rayamajhi">
                  <h3 className="h3 text-stone-900">{description}</h3>
                </a>
              ) : (
                <h3 className="h3 text-stone-900">{description}</h3>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactInfoList;
