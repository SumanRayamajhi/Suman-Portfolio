import React from "react";
import SectionHeading from "./SectionHeading";
import { Input } from "./ui/input";

function ContactSection() {
  return (
    <section id="contact" className="py-10 scroll-mt-20">
      <SectionHeading
        title="Contact"
        description="
      Do not hesitate to reach out, to get in touch with me."
      />
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          <div className="lg:h-[54%] order-2 lg:order-none">
            <form
              action=""
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="h3 text-green-600 ">Let´s work together</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            info
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
