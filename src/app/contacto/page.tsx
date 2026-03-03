import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { SectionTitle } from "@/components/section-title";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Consultas",
  description: "Canal de contacto institucional de TERRAVIGH para consultas patrimoniales."
};

export default function ContactoPage() {
  return (
    <section className="py-16 md:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div className="space-y-8">
          <SectionTitle
            overline="Consultas"
            title="Canal de contacto institucional"
            subtitle="Completá tus datos para coordinar una conversación inicial. Cada consulta se trata con reserva."
          />

          <div className="space-y-3 text-sm text-ink/75">
            <p>
              Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
            <p>Teléfono: {siteConfig.phone}</p>
            <p>{siteConfig.city}</p>
          </div>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}
