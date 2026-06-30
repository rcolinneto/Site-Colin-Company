import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Colin Co. — Agência de Tráfego Orgânico em Joinville",
  description:
    "A Colin Co. é uma agência de marketing digital especializada em tráfego orgânico, baseada em Joinville/SC. Dominamos o Google, Instagram e YouTube para fazer sua marca crescer de forma sustentável.",
  keywords: [
    "agência marketing digital joinville",
    "tráfego orgânico",
    "SEO joinville",
    "marketing de conteúdo",
    "redes sociais joinville",
  ],
  authors: [{ name: "Colin Co." }],
  openGraph: {
    title: "Colin Co. — Agência de Tráfego Orgânico em Joinville",
    description:
      "Dominamos o Google, Instagram e YouTube para fazer sua marca crescer de forma sustentável.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
