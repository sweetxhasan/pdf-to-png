import Link from "next/link"
import { Icons } from "@/components/icons"

const footerNavigation = {
  product: [
    { name: "Features", href: "/features" },
    { name: "Reviews", href: "/reviews" },
    { name: "About", href: "/about" },
  ],
  support: [
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="relative border-t bg-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full animate-pulse-slow"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent/3 rounded-full animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3 animate-fade-in-up">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="transition-transform group-hover:scale-110">
                <Icons.logo className="h-6 w-6" />
              </div>
              <span className="font-bold text-lg">PDF TO IMAGES</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Convert PDF files to high-quality images in PNG, JPEG, or JPG format online for free. Fast, secure, and
              easy to use.
            </p>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>

          <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="space-y-2">
              {footerNavigation.product.map((item, index) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-sm font-semibold">Support</h4>
            <ul className="space-y-2">
              {footerNavigation.support.map((item, index) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h4 className="text-sm font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2 group">
                <Icons.contact className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span className="hover:text-foreground transition-colors">kinghasanbd1@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <Icons.contact className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span className="hover:text-foreground transition-colors">+8801744298642</span>
              </div>
              <div className="flex items-start space-x-2 group">
                <Icons.contact className="h-4 w-4 mt-0.5 transition-transform group-hover:scale-110" />
                <span className="hover:text-foreground transition-colors">Nilphamari, Rangpur City, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-muted-foreground">© 2025 PDF TO IMAGES. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary to-accent animate-pulse-slow"></div>
      <div
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </footer>
  )
}
