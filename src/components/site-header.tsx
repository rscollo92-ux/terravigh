import Link from "next/link";
import { Container } from "@/components/container";
import { navItems, siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-sage-100/80 bg-sand/90 backdrop-blur-md">
      <Container className="py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl tracking-wide text-sage-900">
            {siteConfig.name}
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-ink/80 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors duration-300 hover:text-sage-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contacto"
            className="rounded-full border border-sage-700 px-4 py-2 text-xs uppercase tracking-[0.2em] text-sage-900 transition hover:bg-sage-700 hover:text-sand md:text-[11px]"
          >
            Consulta
          </Link>
        </div>

        <nav className="mt-4 flex gap-4 overflow-x-auto border-t border-sage-100 pt-3 text-xs uppercase tracking-[0.15em] text-ink/75 md:hidden">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap transition hover:text-sage-700">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
