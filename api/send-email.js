import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const { to, subject, html } = req.body;

  try {
    // Configurer Nodemailer avec Gmail (ou autre SMTP)
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: "consulting.food.expertise@gmail.com",
      to: process.env.EMAIL_USER,
      subject: subject,
      html: html
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    res.status(500).json({ error: "Échec de l'envoi" });
  }
}