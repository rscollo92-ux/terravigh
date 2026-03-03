import Link from "next/link";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { SectionTitle } from "@/components/section-title";
import { siteConfig } from "@/lib/site-config";

const areas = [
  {
    title: "Bienes inmuebles",
    description: "Activos urbanos y suburbanos evaluados con foco patrimonial y horizonte de largo plazo."
  },
  {
    title: "Fondos de comercio",
    description: "Operaciones con lectura integral del negocio, su estructura y su continuidad."
  },
  {
    title: "Campos",
    description: "Búsquedas y oportunidades rurales con análisis de contexto productivo y estratégico."
  },
  {
    title: "Negocios / oportunidades",
    description: "Situaciones puntuales que requieren criterio, negociación y manejo reservado de información."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="py-20 md:py-28">
        <Container>
          <p className="text-xs uppercase tracking-[0.25em] text-sage-700">Rosario, Argentina</p>
          <h1 className="mt-5 max-w-4xl text-5xl leading-tight text-ink md:text-7xl md:leading-[1.08] slow-fade">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80 md:text-xl">
            Acompañamos decisiones patrimoniales con discreción y criterio.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contacto"
              className="inline-flex rounded-full bg-sage-700 px-8 py-3 text-xs uppercase tracking-[0.2em] text-sand transition hover:bg-sage-900"
            >
              Hacer una consulta
            </Link>
            <Link
              href="/quienes-somos"
              className="inline-flex rounded-full border border-sage-700 px-8 py-3 text-xs uppercase tracking-[0.2em] text-sage-900 transition hover:bg-sage-100"
            >
              Conocer Terravigh
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle
            overline="Enfoque"
            title="Operación orgánica, por recomendación y vínculo directo"
            subtitle="No trabajamos con lógica de volumen. Priorizamos entender cada objetivo patrimonial y construir un proceso sobrio, con tiempos realistas y confidencialidad."
          />
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <SectionTitle overline="Áreas" title="Líneas de trabajo" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {areas.map((area, index) => (
              <article
                key={area.title}
                className="rounded-2xl border border-sage-200 bg-white/70 p-6 shadow-soft slow-fade"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <h3 className="text-2xl text-ink">{area.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink/75">{area.description}</p>
                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-sage-700">Consultas por disponibilidad</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
