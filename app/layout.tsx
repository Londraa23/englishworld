import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "English World - Academia de Inglés en Zaragoza",
  description: "Academia de inglés en Zaragoza. Preparación de exámenes Cambridge desde A2 hasta C2.",
  icons:{
  icon: '/favicon.png'
}
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

