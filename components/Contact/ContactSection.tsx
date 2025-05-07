"use client";

import SectionHeading from "../SectionHeading";
import ContactForm from "./ContactForm";
import ContactInfoList from "./ContactInfoList";

function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-14 py-16 px-4 sm:px-8 lg:px-16 bg-stone-200"
    >
      <SectionHeading
        title="Contact"
        description="
      Do not hesitate to get in touch with me."
      />
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          <div className="lg:h-[54%] order-2 lg:order-none">
            <ContactForm />
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ContactInfoList />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
