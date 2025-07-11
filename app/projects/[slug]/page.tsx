import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { projects } from "../data"

/* ---------- 1. Routes statiques ---------- */
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

/* ---------- 2. Méta dynamiques ---------- */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: "Projet introuvable | Charles Devif" }

  return {
    title: `${project.title} | Projets – Charles Devif`,
    description: project.summary,
    openGraph: { images: [project.img] },
  }
}

/* ---------- 3. Page détaillée ---------- */
export default async function ProjectPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return notFound()

  return (
    <article className="container mx-auto max-w-3xl py-12">
      <h1 className="mb-2 text-3xl font-bold">{project.title}</h1>
      <p className="text-muted-foreground">{project.period}</p>

      <Image
        src={project.img}
        alt={project.title}
        width={1200}
        height={600}
        className="my-8 rounded-lg border"
        priority
      />

      <p className="mb-6 leading-7">{project.summary}</p>

      <h2 className="mb-2 font-semibold">Stack principale</h2>
      <ul className="mb-6 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <li
            key={s}
            className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
          >
            {s}
          </li>
        ))}
      </ul>

      {project.links?.demo && (
        <a
          href={project.links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 underline underline-offset-4"
        >
          Demo live
        </a>
      )}
      {project.links?.github && (
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          Code source
        </a>
      )}
    </article>
  )
}
