import React from "react";
import SectionHeading from "./SectionHeading";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { FiSend } from "react-icons/fi";
import { contactList } from "@/utils/contactLinks";

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-14 py-16 px-4 sm:px-8 lg:px-16">
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
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-lg lg:w-[36rem]"
            >
              <h3 className="h3 text-green-600 ">Let´s work together</h3>

              <Input
                type="email"
                placeholder="Email address"
                className="h-14 rounded-lg"
              />

              <Textarea
                className="h-52 my-3 text-white/75"
                placeholder="Type your message here."
              />
              <Button
                variant="outline"
                className="max-w-44 flex items-center gap-2"
              >
                <span>Send Message</span>
                <FiSend className="text-xl" />
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {contactList.map((contact, index) => {
                const { icon, title, description } = contact;
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-green-600 rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{icon}</div>
                    </div>
                    <div className="flex.1">
                      <p>{title}</p>
                      <h3 className="h3">{description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
