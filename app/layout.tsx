import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "next-themes"
import "./globals.css"
import Navbar from "@/components/ui/Navbar"
import Footer from "@/components/ui/Footer"


/* ——— Google Fonts ——— */
const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

/* ——— SEO de base ——— */
export const metadata: Metadata = {
  title: "Charles Devif | Développeur Full-Stack & DevSecOps",
  description:
    "Portfolio – projets React / Next.js, sécurité applicative, DevSecOps, coaching technique.",
  keywords: [
    "React",
    "Next.js",
    "DevSecOps",
    "Full-Stack",
    "Portfolio",
    "Charles Devif",
  ],
  authors: [{ name: "Charles Devif", url: "https://github.com/CharlesDevif" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {/* Dark-mode + system preference */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
