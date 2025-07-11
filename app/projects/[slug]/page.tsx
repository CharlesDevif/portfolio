// app/projects/[slug]/page.tsx
import Image from "next/image"
import { notFound } from "next/navigation"
import { projects } from "../data"

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
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
