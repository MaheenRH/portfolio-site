import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL,      // your Gmail
        pass: process.env.CONTACT_APP_PASS,   // app password
      },
    });

    // Format email message
    const mailOptions = {
      from: email,
      to: process.env.CONTACT_EMAIL,
      subject: `New Message from Portfolio | ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
`,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    return new Response("Failed to send message", { status: 500 });
  }
}
