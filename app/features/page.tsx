import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FeaturesSection } from "@/components/features-section"

export const metadata: Metadata = {
  title: "Features - PDF to PNG Converter | Advanced PDF Conversion Features",
  description:
    "Discover all features of our PDF to PNG converter: high-quality conversion, batch processing, secure local processing, and more.",
  keywords: "PDF to PNG features, batch conversion, high quality, secure conversion, free PDF tools",
  robots: "index, follow",
  openGraph: {
    title: "Features - PDF to PNG Converter",
    description: "Explore advanced features of our free PDF to PNG conversion tool.",
    type: "website",
  },
}

export default function FeaturesPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-balance">Powerful Features</h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-pretty">
              Discover all the advanced features that make our PDF to PNG converter the best choice for your needs.
            </p>
          </div>
        </div>
        <FeaturesSection />
      </main>
      <SiteFooter />
    </div>
  )
}
