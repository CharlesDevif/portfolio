export type Project = {
  slug: string
  title: string
  period: string
  stack: string[]
  summary: string
  img: string
  links?: { github?: string; demo?: string }
}

export const projects: Project[] = [
  {
    slug: "2sn-logistic",
    title: "2SN – Plateforme logistique sécurisée",
    period: "Nov. 2022 – Août 2025",
    stack: ["React", "Electron", "Node/Express", "SQL Server"],
    summary:
      "Application desktop & tablette gérant > 4 000 conteneurs/mois ; temps de saisie caristes -40 %, traçabilité complète des scellés.",
    img: "/projects/2sn.png",
    links: {
     // github: "https://github.com/CharlesDevif/2sn-logistic",
      // demo est simplement omis si non disponible
    },
  },
  {
    slug: "platform-data-secure",
    title: "Plateforme data full-stack sécurisée (Mastère 2)",
    period: "Sept. 2024 – Juin 2025",
    stack: ["React", "Vite", "PHP", "MySQL", "Leaflet", "MUI", "Highcharts"],
    summary:
      "Conception back-to-front d’un portail analytique multilingue ; module API `apiCallEx`, SWR cache, scripts CRON. Chargement ÷2, adoption interne 90 %.",
    img: "/projects/platform-data.png",
    // links peut être complètement absent
  },
  {
    slug: "fitcraft",
    title: "FitCraft – App mobile de coaching fitness",
    period: "Depuis Janv. 2024",
    stack: ["React Native", "Expo", "AWS", "Node/Express", "JWT"],
    summary:
      "Programmes personnalisés, suivi des progrès et notifications push ; positionnement marché validé (CPC -28 %), monitoring Crashlytics.",
    img: "/projects/fitcraft.png",
    links: {
      demo: "https://fitcraft.app",
    },
  },
]
