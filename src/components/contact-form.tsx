"use client";

import { FormEvent, useState } from "react";
import { interestOptions } from "@/lib/contact-options";

type Status = { type: "idle" | "success" | "error"; message: string };

const initialStatus: Status = { type: "idle", message: "" };

export function ContactForm() {
  const [status, setStatus] = useState<Status>(initialStatus);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(initialStatus);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      interest: String(formData.get("interest") || ""),
      message: String(formData.get("message") || ""),
      preferredContact: formData.getAll("preferredContact").map(String)
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario.");
      }

      form.reset();
      setStatus({ type: "success", message: "Recibimos tu consulta. Te contactamos dentro de 24/48h hábiles." });
    } catch {
      setStatus({
        type: "error",
        message: "Hubo un inconveniente al enviar. Podés escribirnos por email mientras lo resolvemos."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-sage-200 bg-white/80 p-6 shadow-soft md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-ink/85">
          Nombre
          <input
            required
            name="name"
            type="text"
            className="rounded-xl border border-sage-200 bg-sand px-4 py-3 text-ink outline-none transition focus:border-sage-500"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-ink/85">
          Email
          <input
            required
            name="email"
            type="email"
            className="rounded-xl border border-sage-200 bg-sand px-4 py-3 text-ink outline-none transition focus:border-sage-500"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-ink/85">
          Teléfono (opcional)
          <input
            name="phone"
            type="tel"
            className="rounded-xl border border-sage-200 bg-sand px-4 py-3 text-ink outline-none transition focus:border-sage-500"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-ink/85">
          Tipo de interés
          <select
            required
            name="interest"
            defaultValue=""
            className="rounded-xl border border-sage-200 bg-sand px-4 py-3 text-ink outline-none transition focus:border-sage-500"
          >
            <option value="" disabled>
              Seleccionar
            </option>
            {interestOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm text-ink/85">
        Mensaje
        <textarea
          required
          name="message"
          rows={5}
          className="rounded-xl border border-sage-200 bg-sand px-4 py-3 text-ink outline-none transition focus:border-sage-500"
        />
      </label>

      <fieldset className="space-y-2">
        <legend className="text-sm text-ink/85">Prefiero que me contacten por</legend>
        <label className="mr-5 inline-flex items-center gap-2 text-sm text-ink/80">
          <input type="checkbox" name="preferredContact" value="WhatsApp" className="accent-sage-700" />
          WhatsApp
        </label>
        <label className="inline-flex items-center gap-2 text-sm text-ink/80">
          <input type="checkbox" name="preferredContact" value="Email" className="accent-sage-700" />
          Email
        </label>
      </fieldset>

      <p className="text-sm text-ink/70">Respondemos en 24/48h hábiles.</p>

      {status.type !== "idle" ? (
        <p className={`text-sm ${status.type === "success" ? "text-sage-700" : "text-red-700"}`}>{status.message}</p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex rounded-full bg-sage-700 px-8 py-3 text-xs uppercase tracking-[0.2em] text-sand transition hover:bg-sage-900 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Enviando..." : "Enviar consulta"}
      </button>
    </form>
  );
}
