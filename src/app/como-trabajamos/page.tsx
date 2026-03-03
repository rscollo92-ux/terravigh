import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Cómo trabajamos",
  description: "Proceso de trabajo en cuatro etapas, con gestión reservada y seguimiento."
};

const steps = [
  {
    step: "01",
    title: "Reunión y entendimiento del objetivo",
    description: "Definimos contexto, prioridades y tiempos para ordenar el proceso desde el inicio."
  },
  {
    step: "02",
    title: "Búsqueda y curaduría",
    description: "Identificamos alternativas pertinentes, incluyendo circuito off-market cuando aplica."
  },
  {
    step: "03",
    title: "Evaluación y negociación",
    description: "Contrastamos escenarios y acompañamos la negociación con foco en sustentabilidad del acuerdo."
  },
  {
    step: "04",
    title: "Cierre y seguimiento",
    description: "Asistimos la etapa final y quedamos disponibles para el seguimiento posterior."
  }
];

export default function ComoTrabajamosPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionTitle
          overline="Cómo trabajamos"
          title="Proceso claro, tiempos realistas"
          subtitle="Cada gestión se diseña según el objetivo patrimonial y el grado de reserva necesario."
        />

        <div className="mt-10 space-y-4">
          {steps.map((item) => (
            <article
              key={item.step}
              className="grid gap-4 rounded-2xl border border-sage-200 bg-white/70 p-6 shadow-soft md:grid-cols-[80px_1fr] md:items-start"
            >
              <p className="font-serif text-3xl text-sage-700">{item.step}</p>
              <div>
                <h3 className="text-2xl text-ink">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/75">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-sage-300 bg-sage-100/70 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-sage-700">Aclaración</p>
          <p className="mt-2 text-lg leading-relaxed text-ink/85">
            No publicamos la totalidad de oportunidades. Algunas se gestionan de forma reservada.
          </p>
        </div>

        <Link
          href="/contacto"
          className="mt-10 inline-flex rounded-full border border-sage-700 px-8 py-3 text-xs uppercase tracking-[0.2em] text-sage-900 transition hover:bg-sage-100"
        >
          Coordinar reunión inicial
        </Link>
      </Container>
    </section>
  );
}
