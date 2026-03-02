import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Reparaciones Aldama | Reparacion de iPhone, Mac y iPad en Queretaro",
  description:
    "Especialistas en reparacion de productos Apple en el centro de Queretaro. iPhone, iPad, Mac, Apple Watch. Diagnostico gratuito. Mas de 10 anos de experiencia.",
  keywords:
    "reparacion iPhone Queretaro, reparacion Mac Queretaro, reparacion iPad Queretaro, servicio tecnico Apple Queretaro",
  openGraph: {
    title:
      "Reparaciones Aldama | Reparacion de iPhone, Mac y iPad en Queretaro",
    description:
      "Especialistas en reparacion de productos Apple en el centro de Queretaro. Diagnostico gratuito. Mas de 10 anos de experiencia.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
