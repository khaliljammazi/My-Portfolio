import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, subject, message, budget, timeline } = body as Record<string, string>;

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Name, email, subject, and message are required." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO_EMAIL = process.env.CONTACT_EMAIL ?? "khalil.jammazi366@gmail.com";

  if (!RESEND_API_KEY) {
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #9019d7;">New Portfolio Contact</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px; font-weight: bold; width: 120px;">Name</td><td style="padding: 8px;">${name}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Subject</td><td style="padding: 8px;">${subject}</td></tr>
        ${budget ? `<tr><td style="padding: 8px; font-weight: bold;">Budget</td><td style="padding: 8px;">${budget}</td></tr>` : ""}
        ${timeline ? `<tr><td style="padding: 8px; font-weight: bold;">Timeline</td><td style="padding: 8px;">${timeline}</td></tr>` : ""}
      </table>
      <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
        <p style="font-weight: bold; margin: 0 0 8px;">Message</p>
        <p style="margin: 0; white-space: pre-wrap;">${message}</p>
      </div>
    </div>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: TO_EMAIL,
      reply_to: email,
      subject: `[Portfolio] ${subject}`,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
