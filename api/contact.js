const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { firstName, lastName, email, phone, message } = req.body;

  const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await contactEmail.sendMail({
      from: `${firstName} ${lastName}`,
      to: "agarwalpoorvi060@gmail.com",
      subject: "Contact Form Submission - Portfolio",
      html: `
        <p>Name: ${firstName} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>
      `,
    });

    res.status(200).json({ message: "Message Sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
}
