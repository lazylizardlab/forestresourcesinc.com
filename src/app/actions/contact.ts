"use server";

import { Resend } from "resend";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  land?: string;
  message: string;
}

export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  // Validate
  if (!data.name || !data.email || !data.phone || !data.message) {
    return { success: false, error: "All fields are required." };
  }

  // If Resend API key is not configured, fall back to logging
  if (!process.env.RESEND_API_KEY) {
    console.log("Contact form submission (RESEND_API_KEY not configured):", data);
    return { success: true };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Forest Resources Website <noreply@forestresourcesinc.com>",
      to: "perrybushue@forestresourcesinc.com",
      replyTo: data.email,
      subject: `New Inquiry: ${data.service} - ${data.name}`,
      text: [
        `New contact form submission from forestresourcesinc.com`,
        ``,
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Service Interest: ${data.service}`,
        ...(data.land ? [`County / Acres: ${data.land}`] : []),
        ``,
        `Message:`,
        data.message,
      ].join("\n"),
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: "Failed to send message." };
  }
}
