import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Configure your email service here
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send email to you
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We received your message",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for reaching out! I've received your message and will get back to you soon.</p>
        <p>Best regards,<br>Shashank</p>
      `,
    })

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
