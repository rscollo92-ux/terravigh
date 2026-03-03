import Link from "next/link";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-sage-100 bg-sage-50/70 py-12">
      <Container className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-2xl text-sage-900">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-ink/70">{siteConfig.city}</p>
        </div>

        <div className="space-y-2 text-sm text-ink/75">
          <p>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-sage-700">
              {siteConfig.email}
            </a>
          </p>
          <p>{siteConfig.phone}</p>
          <p className="text-xs uppercase tracking-[0.22em] text-sage-700/90">Atención reservada</p>
        </div>

        <Link
          href="/contacto"
          className="text-xs uppercase tracking-[0.2em] text-sage-700 transition hover:text-sage-900"
        >
          Hacer una consulta
        </Link>
      </Container>
    </footer>
  );
}
