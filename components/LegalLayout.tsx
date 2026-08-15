import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: React.ReactNode
}) {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />

      <div className="pt-40 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="font-dm-mono text-red text-sm tracking-widest uppercase mb-4 block">
            // LEGAL
          </span>
          <h1 className="font-satoshi font-bold text-4xl md:text-5xl text-navy tracking-tight-apple leading-display mb-3">
            {title}
          </h1>
          <p className="font-dm-sans text-sm text-navy/40 mb-12">
            Última actualización: {updated}
          </p>

          <div
            className="
              font-dm-sans text-navy/80 leading-body
              [&>h2]:font-satoshi [&>h2]:font-bold [&>h2]:text-navy [&>h2]:text-xl
              [&>h2]:mt-10 [&>h2]:mb-3
              [&>p]:mb-4
              [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1
              [&_a]:text-red [&_a]:underline [&_a]:underline-offset-2
              [&_strong]:text-navy [&_strong]:font-semibold
            "
          >
            {children}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
