"use client"  
import Image from "next/image"
import Link from "next/link"
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"
import type { Project } from "@/app/projects/data"
import { ArrowUpRight } from "lucide-react"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div whileHover={{ y: -4 }}>
      <Tilt glareEnable glareBorderRadius="8px" glareMaxOpacity={0.15}>
        <Link
          href={`/projects/${project.slug}`}
          className="group relative flex flex-col overflow-hidden rounded-lg border bg-card"
        >
          <Image
            src={project.img}
            alt={project.title}
            width={800}
            height={450}
            className="h-48 w-full object-cover transition-transform group-hover:scale-105"
          />

          <div className="flex flex-1 flex-col gap-2 p-5">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="flex-1 text-sm text-muted-foreground">
              {project.summary}
            </p>
            <div className="flex items-center justify-between text-xs">
              <span>{project.period}</span>
              <ArrowUpRight className="h-4 w-4 opacity-60" />
            </div>
          </div>
        </Link>
      </Tilt>
    </motion.div>
  )
}
