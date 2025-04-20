"use client";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { FiSend } from "react-icons/fi";
import { contactList } from "@/utils/contactLinks";
import { sendEmail } from "@/server/sendEmail";
import { Label } from "./ui/label";

function ContactSection() {
  const [formData, setFormData] = useState({ email: "", message: "" });

  /*  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  }; */

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
            <form
              className="flex flex-col gap-6 p-10 bg-stone-300 rounded-lg lg:w-[36rem]"
              action={async (formData) => {
                await sendEmail(formData);
              }}
            >
              <h3 className="h3 text-stone-900 ">Let´s work together</h3>

              <Label htmlFor="email" className="-mb-5 text-lg text-green-600">
                Email
              </Label>
              <Input
                type="email"
                name="senderEmail"
                required
                placeholder="example@email.com"
                area-label="Email address"
                className="h-14"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <Label htmlFor="email" className="-mb-5 text-lg text-green-600">
                Message
              </Label>
              <Textarea
                className="h-52"
                required
                placeholder="Type your message here..."
                name="message"
                aria-label="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <Button
                variant="outline"
                className="group max-w-44 flex items-center gap-2 focus:scale-110 hover:scale-110 active:scale-105 transition"
              >
                <span>Send Message</span>
                <FiSend className="text-xl opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {contactList.map((contact, index) => {
                const { icon, title, description } = contact;
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-stone-300 text-green-600 rounded-md flex items-center justify-center">
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
