import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Format the email content with HTML
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #6B46C1; border-bottom: 1px solid #ddd; padding-bottom: 10px;">
          New Portfolio Contact Form Submission
        </h1>
        
        <div style="margin-bottom: 20px;">
          <h2 style="font-size: 18px; color: #333;">Client Information</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h2 style="font-size: 18px; color: #333;">Client Message</h2>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #6B46C1;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
        
        <div style="font-size: 12px; color: #666; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 10px;">
          <p>This email was sent from your portfolio contact form.</p>
          <p>You can reply directly to this email to contact ${email}.</p>
        </div>
      </div>
    `;

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "kalwis.wizdev@gmail.com", // Changed to your preferred email address
      replyTo: email, // So you can reply directly to the client
      subject: `📬 Portfolio Client: ${subject}`,
      html: htmlContent,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully using Nodemailer");
    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
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
