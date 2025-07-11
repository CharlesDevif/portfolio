// app/contact/page.tsx
import { Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Contact | Charles Devif",
  description: "Me contacter pour vos projets ou collaborations.",
}

export default function ContactPage() {
  const items = [
    {
      href: "mailto:charlesdevif@hotmail.fr",
      icon: Mail,
      label: "E-mail",
    },
    {
      href: "https://github.com/CharlesDevif",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/charlesdevif/",
      icon: Linkedin,
      label: "LinkedIn",
    },
  ]

  return (
    <section className="container mx-auto flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center gap-8 py-12">
      <h1 className="text-3xl font-bold">Me contacter</h1>

      <ul className="flex flex-col gap-4">
        {items.map(({ href, icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-3">
            <Icon className="h-5 w-5 opacity-70" />
            <Link
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
