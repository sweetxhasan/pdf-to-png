"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"

const navigation = [
  {
    name: "Home",
    href: "/",
    icon: Icons.home,
  },
  {
    name: "Features",
    href: "/features",
    icon: Icons.features,
  },
  {
    name: "Reviews",
    href: "/reviews",
    icon: Icons.reviews,
  },
  {
    name: "About",
    href: "/about",
    icon: Icons.about,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: Icons.contact,
  },
  {
    name: "Privacy Policy",
    href: "/privacy",
    icon: Icons.privacy,
  },
  {
    name: "Terms of Service",
    href: "/terms",
    icon: Icons.terms,
  },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">PDF TO IMAGES</span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center transition-colors hover:text-foreground/80",
              pathname === item.href ? "text-foreground" : "text-foreground/60",
            )}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}
