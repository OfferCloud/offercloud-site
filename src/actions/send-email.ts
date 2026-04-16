"use server";

import nodemailer from "nodemailer";

export async function sendEmailAction(prevState: unknown, formData: FormData) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPortRaw = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const smtpFrom = process.env.SMTP_FROM_EMAIL || smtpUser;
  const smtpTo =
    process.env.SMTP_TO_EMAIL || process.env.SMTP_FROM_EMAIL || smtpUser;

  if (
    !smtpHost ||
    !smtpPortRaw ||
    !smtpUser ||
    !smtpPassword ||
    !smtpFrom ||
    !smtpTo
  ) {
    return {
      success: false,
      error:
        "Brak konfiguracji SMTP na serwerze (sprawdź SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASSWORD/SMTP_FROM_EMAIL/SMTP_TO_EMAIL).",
    };
  }

  const smtpPort = Number(smtpPortRaw);
  if (!Number.isFinite(smtpPort) || smtpPort <= 0) {
    return { success: false, error: "Nieprawidłowa wartość SMTP_PORT." };
  }

  // Extract form fields
  const name = formData.get("fullName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;
  const source = formData.get("source") as string;
  const subjectStr = formData.get("subject") as string;

  if (!name || !email || !message || !phone) {
    return {
      success: false,
      error: "Proszę wypełnić wszystkie wymagane pola.",
    };
  }

  try {
    // Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      ...(process.env.NODE_ENV !== "production"
        ? { logger: true, debug: true }
        : {}),
    });

    if (process.env.NODE_ENV !== "production") {
      await transporter.verify();
    }

    const subject =
      subjectStr || `Nowa wiadomość od ${name} przez formularz kontaktowy`;

    // Email options
    const mailOptions = {
      from: smtpFrom,
      to: smtpTo,
      replyTo: email,
      subject,
      text: `Imię i nazwisko: ${name}\nEmail: ${email}\nTelefon: ${phone}\n${source ? `Źródło: ${source}\n` : ""}\nWiadomość:\n${message}`,
      html: `
        <h3>Nowe zgłoszenie z formularza kontaktowego</h3>
        <p><strong>Imię i nazwisko:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        ${source ? `<p><strong>Źródło:</strong> ${source}</p>` : ""}
        <p><strong>Wiadomość:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Send the email
    const result = await transporter.sendMail(mailOptions);

    if (result.rejected?.length) {
      return {
        success: false,
        error: `Serwer SMTP odrzucił odbiorców: ${result.rejected.join(", ")}`,
      };
    }

    return { success: true, message: "Wiadomość została wysłana pomyślnie!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error:
        "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.",
    };
  }
}
