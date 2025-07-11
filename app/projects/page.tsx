// app/projects/page.tsx
import ProjectCard from "@/components/ProjectCard"
import { projects } from "./data"

export const metadata = {
  title: "Projets | Charles Devif",
  description: "Sélection de projets full-stack et DevSecOps.",
}

export default function ProjectsPage() {
  return (
    <section className="container mx-auto py-12">
      <h1 className="mb-8 text-3xl font-bold">Mes projets</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  )
}
