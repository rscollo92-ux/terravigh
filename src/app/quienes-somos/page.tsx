import { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description:
    "Tradición familiar, ética de trabajo y visión de largo plazo para acompañar decisiones patrimoniales con reserva."
};

const principles = [
  {
    title: "Discreción",
    description:
      "Cada proceso se maneja con confidencialidad y cuidado por la información sensible de las partes involucradas."
  },
  {
    title: "Criterio",
    description:
      "Analizamos contexto, riesgos y objetivos antes de sugerir una acción. Evitamos decisiones impulsivas."
  },
  {
    title: "Gestión integral",
    description:
      "Acompañamos desde la etapa inicial hasta el cierre, coordinando aspectos comerciales y operativos."
  },
  {
    title: "Relación de largo plazo",
    description:
      "Buscamos construir confianza sostenida en el tiempo, más allá de una operación puntual."
  }
];

export default function QuienesSomosPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle
            overline="Quiénes somos"
            title="Trayectoria local, mirada patrimonial"
            subtitle="Terravigh es una firma de base familiar radicada en Rosario. Trabajamos con una lógica de cercanía profesional, ética de trabajo y visión de largo plazo. Nuestro foco está en acompañar decisiones patrimoniales con criterio y confidencialidad, en procesos donde la confianza es central."
          />

          <div className="mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-ink/80">
            <p>
              Elegimos una operación sobria, sin exposición innecesaria. Muchas de las oportunidades que gestionamos surgen de vínculos construidos con el tiempo y se abordan de manera reservada.
            </p>
            <p>
              Nuestra tarea es ordenar información, evaluar alternativas y facilitar acuerdos sostenibles para todas las partes.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <SectionTitle overline="Forma de trabajar" title="Cuatro principios que sostienen cada gestión" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {principles.map((item) => (
              <article key={item.title} className="rounded-2xl border border-sage-200 bg-white/75 p-6 shadow-soft">
                <h3 className="text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/75">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
