import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    // Email options
    const mailOptions = {
  from: `"${name}" <${email}>`,
  to: process.env.EMAIL_TO,
  subject: subject,
  text: message,
  html: `
    <div style="max-width:600px;margin:0 auto;padding:0;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#374151;">
      <!-- Header -->
      <div style="background:#4f46e5;padding:24px;text-align:center;border-radius:8px 8px 0 0;">
        <h1 style="margin:0;color:white;font-size:1.75rem;font-weight:600;">New Contact Message</h1>
      </div>
      
      <!-- Content -->
      <div style="padding:32px;background:#ffffff;border-radius:0 0 8px 8px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);">
        <!-- Sender Info -->
        <div style="display:flex;margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid #e5e7eb;">
          <div style="flex:1;">
            <div style="font-size:0.875rem;color:#6b7280;margin-bottom:4px;">From</div>
            <div style="font-weight:600;font-size:1.125rem;">${name}</div>
            <div style="color:#4f46e5;">${email}</div>
          </div>
          <div style="flex:1;">
            <div style="font-size:0.875rem;color:#6b7280;margin-bottom:4px;">Subject</div>
            <div style="font-weight:600;font-size:1.125rem;">${subject}</div>
          </div>
        </div>
        
        <!-- Message -->
        <div>
          <div style="font-size:0.875rem;color:#6b7280;margin-bottom:8px;">Message</div>
          <div style="background:#f9fafb;padding:16px;border-radius:6px;border:1px solid #e5e7eb;white-space:pre-line;line-height:1.5;">${message}</div>
        </div>
        
        <!-- Footer -->
        <div style="margin-top:32px;padding-top:16px;border-top:1px solid #e5e7eb;text-align:center;font-size:0.75rem;color:#9ca3af;">
          <p style="margin:0;">This message was sent from your portfolio contact form</p>
          <p style="margin:8px 0 0;color:#d1d5db;">© ${new Date().getFullYear()} Your Portfolio. All rights reserved.</p>
        </div>
      </div>
    </div>
  `,
};

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to send message." }, { status: 500 });
  }
}