import { Card, CardContent } from "@/components/ui/card"
import { Icons } from "@/components/icons"

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Graphic Designer",
    content:
      "This PDF to images converter is amazing! I use it daily for my design work. The quality is perfect and it supports multiple formats.",
    rating: 5,
    avatar: "/professional-woman.png",
  },
  {
    name: "Michael Chen",
    role: "Marketing Manager",
    content:
      "Finally found a converter that actually works well. PNG, JPEG, JPG - all formats work perfectly. Highly recommended!",
    rating: 5,
    avatar: "/professional-man.png",
  },
  {
    name: "Emily Rodriguez",
    role: "Student",
    content:
      "Perfect for converting my study materials. Free, fast, and works on my phone too. Love the ZIP download feature!",
    rating: 5,
    avatar: "/student-woman.png",
  },
  {
    name: "David Thompson",
    role: "Business Owner",
    content:
      "I convert dozens of PDFs weekly for my business. This tool saves me hours of work. The batch download feature is fantastic.",
    rating: 5,
    avatar: "/diverse-businessman.png",
  },
  {
    name: "Lisa Wang",
    role: "Researcher",
    content:
      "As a researcher, I need high-quality image conversions for my papers. This tool delivers exceptional results in any format.",
    rating: 5,
    avatar: "/researcher-woman.jpg",
  },
  {
    name: "James Miller",
    role: "Web Developer",
    content:
      "Clean, simple interface with powerful functionality. Multiple formats, ZIP downloads - everything I need!",
    rating: 5,
    avatar: "/developer-man.png",
  },
]

export function ReviewsSection() {
  return (
    <section className="container space-y-6 py-8 md:py-12 lg:py-24 bg-muted/50">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">What Our Users Say</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Join thousands of satisfied users who trust our PDF to images converter for their daily needs.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3">
        {reviews.map((review, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Icons.reviews key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed">"{review.content}"</blockquote>
                <div className="flex items-center space-x-3">
                  <img src={review.avatar || "/placeholder.svg"} alt={review.name} className="h-10 w-10 rounded-full" />
                  <div>
                    <div className="font-semibold text-sm">{review.name}</div>
                    <div className="text-xs text-muted-foreground">{review.role}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
