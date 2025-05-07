"use client";

import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { FiSend } from "react-icons/fi";
import { sendEmail } from "@/server/sendEmail";

function ContactForm() {
  const [formData, setFormData] = useState({ email: "", message: "" });

  return (
    <form
      className="flex flex-col gap-6 p-10 bg-stone-100 rounded-lg lg:w-[36rem]"
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
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <Button
        variant="outline"
        className="group max-w-44 flex items-center gap-2 focus:scale-110 hover:scale-110 active:scale-105 transition"
      >
        <span>Send Message</span>
        <FiSend className="text-xl opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
      </Button>
    </form>
  );
}

export default ContactForm;
