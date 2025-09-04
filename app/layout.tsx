import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import "./globals.css";
import { Inter } from "next/font/google";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "English World - Academia de Inglés en Zaragoza",
  description:
    "Academia de inglés en Zaragoza. Preparación de exámenes Cambridge desde A2 hasta C2.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Script principal de Plausible */}
        <script
          defer
          data-domain="academiaenglishworld.com"
          src="https://plausible.io/js/script.file-downloads.outbound-links.pageview-props.revenue.tagged-events.js"
        ></script>

        {/* Script para enviar eventos a Plausible */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.plausible = window.plausible || function() { 
                (window.plausible.q = window.plausible.q || []).push(arguments) 
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
