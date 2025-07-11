"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background/70 backdrop-blur">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 text-sm sm:flex-row">
        {/* © Copy */}
        <p className="text-muted-foreground">
          © {year} Charles Devif – Tous droits réservés.
        </p>

        {/* Social links */}
        <nav className="flex items-center gap-4">
          <Link
            href="mailto:charlesdevif@hotmail.fr"
            aria-label="Envoyer un e-mail"
            className="transition-opacity hover:opacity-80"
          >
            <Mail className="h-5 w-5" />
          </Link>

          <Link
            href="https://github.com/CharlesDevif"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-opacity hover:opacity-80"
          >
            <Github className="h-5 w-5" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/charlesdevif/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-opacity hover:opacity-80"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </nav>
      </div>
    </footer>
  )
}
