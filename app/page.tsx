import { SiteHeader } from "@/components/site-header"
import { PDFConverter } from "@/components/pdf-converter"
import { FeaturesSection } from "@/components/features-section"
import { ReviewsSection } from "@/components/reviews-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-balance">
              Convert PDF to Images Online
            </h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-pretty">
              Transform your PDF documents into high-quality images in PNG, JPEG, or JPG format instantly. Fast, secure,
              and completely free. No registration required.
            </p>
          </div>
        </section>

        {/* PDF Converter Tool */}
        <section className="container pb-8 md:pb-12 lg:pb-24">
          <PDFConverter />
        </section>

        {/* Features Section */}
        <FeaturesSection />

        {/* Reviews Section */}
        <ReviewsSection />
      </main>
      <SiteFooter />
    </div>
  )
}
