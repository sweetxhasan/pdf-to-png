import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ReviewsSection } from "@/components/reviews-section"

export const metadata: Metadata = {
  title: "Reviews - PDF to PNG Converter | User Testimonials & Feedback",
  description:
    "Read user reviews and testimonials about our PDF to PNG converter. See why thousands trust our free conversion tool.",
  keywords: "PDF to PNG reviews, user testimonials, converter feedback, user experiences",
  robots: "index, follow",
  openGraph: {
    title: "Reviews - PDF to PNG Converter",
    description: "Read what users say about our free PDF to PNG conversion tool.",
    type: "website",
  },
}

export default function ReviewsPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-balance">User Reviews</h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-pretty">
              See what our users say about their experience with our PDF to PNG converter.
            </p>
          </div>
        </div>
        <ReviewsSection />
      </main>
      <SiteFooter />
    </div>
  )
}
