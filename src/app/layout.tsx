import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "500", "600"] });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://terravigh.com.ar"),
  title: {
    default: `${siteConfig.name} | Gestión patrimonial reservada`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | Gestión patrimonial reservada`,
    description: siteConfig.description,
    type: "website",
    locale: "es_AR",
    url: "https://terravigh.com.ar"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es-AR">
      <body className={`${serif.variable} ${sans.variable} bg-sand text-ink antialiased`}>
        <div className="grain fixed inset-0 -z-10" aria-hidden />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
