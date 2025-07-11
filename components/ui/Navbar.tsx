import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import ThemeToggle from "../ThemeToggle"

const navItems = [
  { label: "Projets", href: "/#projects" },
  { label: "À-propos", href: "/about" },
  { label: "Contact", href: "/#contact" },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full bg-background/70 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-screen-xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold">
          Charles Devif
        </Link>

        {/* Menu desktop */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            {navItems.map(({ label, href }) => (
              <NavigationMenuItem key={label}>
                <NavigationMenuLink
                  asChild
                  className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
                >
                  <Link href={href}>{label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm">
            <Link href="/Charles_Devif_CV_2025.pdf" target="_blank">
              Télécharger le CV
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
