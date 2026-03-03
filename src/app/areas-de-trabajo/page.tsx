import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Áreas de trabajo",
  description:
    "Bienes inmuebles, fondos de comercio, campos y oportunidades de negocio con gestión reservada."
};

const areas = [
  {
    title: "Bienes inmuebles",
    description:
      "Seleccionamos activos con perspectiva patrimonial, contemplando ubicación, proyección y perfil de riesgo."
  },
  {
    title: "Fondos de comercio",
    description:
      "Intervenimos en procesos de compra, venta o evaluación de negocios en marcha con análisis operativo y comercial."
  },
  {
    title: "Campos",
    description:
      "Trabajamos oportunidades rurales y productivas considerando escala, entorno y condiciones de la operación."
  },
  {
    title: "Negocios / oportunidades",
    description:
      "Abordamos oportunidades específicas que requieren curaduría, negociación y tratamiento confidencial."
  }
];

export default function AreasPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionTitle
          overline="Áreas de trabajo"
          title="Gestión patrimonial en cuatro líneas"
          subtitle="No publicamos listados extensos ni operamos por volumen. Cada consulta se atiende según contexto y disponibilidad real."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {areas.map((area) => (
            <article key={area.title} className="rounded-2xl border border-sage-200 bg-white/75 p-6 shadow-soft">
              <h3 className="text-2xl text-ink">{area.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/75">{area.description}</p>
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-sage-700">Consultas por disponibilidad</p>
            </article>
          ))}
        </div>

        <Link
          href="/contacto"
          className="mt-12 inline-flex rounded-full bg-sage-700 px-8 py-3 text-xs uppercase tracking-[0.2em] text-sand transition hover:bg-sage-900"
        >
          Iniciar consulta reservada
        </Link>
      </Container>
    </section>
  );
}
