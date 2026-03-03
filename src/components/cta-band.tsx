import Link from "next/link";
import { Container } from "@/components/container";

export function CtaBand() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="rounded-3xl border border-sage-200 bg-sage-100/60 p-8 shadow-soft md:p-12">
          <h3 className="font-serif text-3xl text-ink md:text-4xl">Conversación inicial, sin exposición pública.</h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/80">
            Si estás evaluando una decisión patrimonial, coordinamos una instancia de contacto para entender el objetivo y definir próximos pasos con reserva.
          </p>
          <Link
            href="/contacto"
            className="mt-8 inline-flex rounded-full bg-sage-700 px-7 py-3 text-xs uppercase tracking-[0.2em] text-sand transition hover:bg-sage-900"
          >
            Hacer una consulta
          </Link>
        </div>
      </Container>
    </section>
  );
}
