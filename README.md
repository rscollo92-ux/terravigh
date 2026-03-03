# TERRAVIGH - Sitio institucional

Sitio institucional para TERRAVIGH (Rosario, Argentina), construido con Next.js + React + Tailwind CSS.

## Requisitos

- Node.js 18+
- npm

## Configuración

1. Copiar variables de entorno:

```bash
cp .env.example .env.local
```

2. Completar los datos de contacto y SMTP en `.env.local`.

## Correr localmente

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Formulario de contacto

El formulario envía datos al endpoint `POST /api/contact`, que utiliza SMTP (Nodemailer).

Si faltan variables SMTP, el endpoint responde con error 500 para evitar enviar datos sin configuración explícita.
