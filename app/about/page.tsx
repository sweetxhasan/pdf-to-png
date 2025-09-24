import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export const metadata: Metadata = {
  title: "About Us - PDF to PNG Converter | Learn About Our Mission",
  description:
    "Learn about PDF to PNG converter, our mission to provide free, secure, and high-quality PDF to PNG conversion tools for everyone.",
  keywords: "about PDF to PNG, converter mission, free PDF tools, secure conversion",
  robots: "index, follow",
  openGraph: {
    title: "About Us - PDF to PNG Converter",
    description: "Learn about our mission to provide free, secure PDF to PNG conversion tools.",
    type: "website",
  },
}

const teamValues = [
  {
    icon: Icons.privacy,
    title: "Privacy First",
    description: "We believe your documents should remain private. All conversions happen locally in your browser.",
  },
  {
    icon: Icons.features,
    title: "Quality Focus",
    description: "We're committed to delivering the highest quality PNG images from your PDF documents.",
  },
  {
    icon: Icons.sun,
    title: "Always Free",
    description: "Our core mission is to provide powerful PDF conversion tools completely free for everyone.",
  },
  {
    icon: Icons.home,
    title: "User Centric",
    description: "Every feature we build is designed with user experience and simplicity in mind.",
  },
]

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-balance">About PDF to PNG</h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-pretty">
              We're on a mission to make PDF to PNG conversion simple, secure, and accessible to everyone around the
              world.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  PDF to PNG was born from a simple frustration: existing PDF conversion tools were either expensive,
                  complicated, or compromised user privacy by uploading files to remote servers. We believed there had
                  to be a better way.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our team of developers and designers came together to create a solution that prioritizes user privacy,
                  delivers exceptional quality, and remains completely free. By processing files locally in your
                  browser, we ensure your documents never leave your device.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, thousands of users worldwide trust PDF to PNG for their daily conversion needs, from students
                  preparing presentations to professionals creating marketing materials.
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-6 sm:grid-cols-2">
              {teamValues.map((value, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="rounded-lg bg-accent p-2">
                        <value.icon className="h-5 w-5 text-accent-foreground" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Commitment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We're committed to continuously improving our service while maintaining our core principles of
                  privacy, quality, and accessibility. Our roadmap includes exciting new features while keeping the tool
                  simple and intuitive for users of all technical levels.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Thank you for choosing PDF to PNG. We're honored to be part of your workflow and look forward to
                  serving you for years to come.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
