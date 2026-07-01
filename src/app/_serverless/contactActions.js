"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const contactEmail = "samwilk1898@gmail.com";

function cleanField(value) {
  return String(value || "").trim();
}

export async function sendContactRequest(_previousState, formData) {
  const name = cleanField(formData.get("name"));
  const email = cleanField(formData.get("email"));
  const topic = cleanField(formData.get("topic"));
  const message = cleanField(formData.get("message"));

  if (!name || !email || !topic || !message) {
    return {
      ok: false,
      message: "Please complete every field before sending your message.",
    };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      ok: false,
      message: `This form is not configured yet. Please email ${contactEmail}.`,
    };
  }

  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ||
    "Gator Nation Football Podcast <onboarding@resend.dev>";

  try {
    await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: email,
      subject: `GNFP contact from ${name}: ${topic}`,
      text: [
        "New message from the GNFP landing page.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Topic: ${topic}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return {
      ok: true,
      message: "Message sent. Sam will follow up soon.",
    };
  } catch {
    return {
      ok: false,
      message: `The message could not be sent. Please email ${contactEmail}.`,
    };
  }
}
