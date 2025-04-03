"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const getErrorMessage = (error: unknown): string => {
    let message: string;
    if (error instanceof Error) {
        message = error.message
    } else if (error && typeof error === "object" && "message" in error) {
        message = String(error.message)
    } else if (typeof error === "string") {
        message = error;
    } else {
        message = "Something went wrong"
    }
    return message;
}

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
        await resend.emails.send({
            from: "Contact from <onboarding@resend.dev>",
            to: "samsrayamajhi@gmail.com",
            subject: "Message from Contact Form",
            reply_to: senderEmail,
            text: message,
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }
};




