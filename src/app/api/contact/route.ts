import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
  preferredContact?: string[];
};

function missingSmtpConfig() {
  return (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_PORT ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS ||
    !process.env.SMTP_FROM ||
    !process.env.CONTACT_TO_EMAIL
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload;

    if (!body.name || !body.email || !body.interest || !body.message) {
      return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
    }

    if (missingSmtpConfig()) {
      return NextResponse.json(
        { error: "Configuración SMTP incompleta. Revisá variables de entorno." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const preferred = body.preferredContact?.length ? body.preferredContact.join(", ") : "No especificado";

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: body.email,
      subject: `Nueva consulta web - ${body.interest}`,
      text: [
        `Nombre: ${body.name}`,
        `Email: ${body.email}`,
        `Teléfono: ${body.phone || "No informado"}`,
        `Interés: ${body.interest}`,
        `Preferencia de contacto: ${preferred}`,
        "",
        "Mensaje:",
        body.message
      ].join("\n")
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "No se pudo procesar la consulta." }, { status: 500 });
  }
}
