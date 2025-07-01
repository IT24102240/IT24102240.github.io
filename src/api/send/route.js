import { NextResponse } from "next/server";
import { Resend } from "resend";
import React from "react"; // Required for JSX in email template

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();
    console.log("Received submission:", { email, subject, message });

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Define the email template as a simple component
    const EmailTemplate = () => (
      <>
        <h1>{subject}</h1>
        <p>New contact form submission:</p>
        <p>
          <strong>From:</strong> {email}
        </p>
        <p>
          <strong>Message:</strong> {message}
        </p>
      </>
    );

    const data = await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: [fromEmail],
      subject: `Portfolio Contact: ${subject}`,
      react: <EmailTemplate />,
      reply_to: email,
    });

    console.log("Email sent successfully:", data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    // Return more detailed error information for debugging
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        details: error.toString(),
      },
      { status: 500 }
    );
  }
}
