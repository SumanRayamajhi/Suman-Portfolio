"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail") as string;
    const message = formData.get("message") as string;

    if (!senderEmail) {
        return { error: "Invalid email" };
    }
    if (!message) {
        return { error: "Invalid message" };
    }

    try {
        const response = await resend.emails.send({
            from: "Contact from <onboarding@resend.dev>",
            to: "samsrayamajhi@gmail.com",
            subject: "Message from Contact Form",
            reply_to: senderEmail,
            text: message,
        });

        console.log("Email sent successfully!", response);
        return { success: "Email sent successfully!" };
    } catch (error: unknown) {
        console.error("Error sending email:", error);
        return { error: "Failed to send email" };
    }
};




