"use client"
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "./projects/data"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="container mx-auto space-y-32 py-20">
      {/* ——— HERO ——— */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center text-center">
        {/* halo */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 aspect-square w-[70vw] -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h1 className="text-4xl sm:text-6xl">
            Salut, moi c’est <span className="text-primary">Charles Devif</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Développeur Full-Stack orienté <strong>DevSecOps</strong>.  
            Je conçois des apps sécurisées et performantes, du design aux
            pipelines&nbsp;CI/CD.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#projects">
                Voir mes projets <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="backdrop-blur">
              <Link href="/Charles_Devif_CV_2025.pdf" target="_blank">
                Télécharger le CV <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Image
            src="/hero-illustration.svg"
            alt="Illustration code & sécurité"
            width={640}
            height={360}
            priority
            className="drop-shadow-2xl dark:invert"
          />
        </motion.div>
      </section>

      {/* ——— PROJETS ——— */}
      <section id="projects" className="space-y-10">
        <h2 className="text-3xl">Projets récents</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="secondary">
            <Link href="/projects">Voir tous les projets</Link>
          </Button>
        </div>
      </section>

      {/* ——— CONTACT ——— */}
      <section
        id="contact"
        className="flex flex-col items-center justify-center gap-8 text-center"
      >
        <h2 className="text-3xl">Contact</h2>
        <p className="max-w-md text-muted-foreground">
          Besoin d’un développeur full-stack passionné par la sécurité ?  
          Écrivez-moi ou retrouvons-nous sur les réseaux.
        </p>

        <ul className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          {[
            {
              href: "mailto:charlesdevif@hotmail.fr",
              Icon: Mail,
              label: "E-mail",
            },
            {
              href: "https://github.com/CharlesDevif",
              Icon: Github,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/charlesdevif/",
              Icon: Linkedin,
              label: "LinkedIn",
            },
          ].map(({ href, Icon, label }) => (
            <motion.li
              key={label}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Link
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                className="flex items-center gap-2 rounded px-3 py-2 transition-colors hover:bg-muted"
              >
                <Icon className="h-5 w-5" />
                {label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </section>
    </main>
  )
}
