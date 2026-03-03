export const siteConfig = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || "TERRAVIGH",
  city: process.env.NEXT_PUBLIC_CITY || "Rosario, Santa Fe",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto@terravigh.com.ar",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+54 9 341 000 0000",
  whatsapp: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP || "5493410000000",
  tagline: "Activos reales. Decisiones privadas.",
  description:
    "Acompañamos decisiones patrimoniales con discreción y criterio. Bienes inmuebles, fondos de comercio, campos y oportunidades de negocio."
};

export const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/areas-de-trabajo", label: "Áreas" },
  { href: "/como-trabajamos", label: "Cómo trabajamos" },
  { href: "/contacto", label: "Consultas" }
];
