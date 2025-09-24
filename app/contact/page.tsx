import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Icons } from "@/components/icons"

export const metadata: Metadata = {
  title: "Contact Us - PDF to PNG Converter | Get Support & Help",
  description:
    "Contact PDF to PNG converter support team. Get help with PDF conversion, report issues, or share feedback about our free conversion tool.",
  keywords: "contact PDF to PNG, support, help, feedback, PDF converter support",
  robots: "index, follow",
  openGraph: {
    title: "Contact Us - PDF to PNG Converter",
    description: "Get support and help with PDF to PNG conversion. Contact our team for assistance.",
    type: "website",
  },
}

const contactInfo = [
  {
    icon: Icons.contact,
    title: "Email",
    content: "kinghasanbd1@gmail.com",
    description: "Send us an email for support or inquiries",
  },
  {
    icon: Icons.contact,
    title: "Phone",
    content: "+8801744298642",
    description: "Call us for urgent support needs",
  },
  {
    icon: Icons.contact,
    title: "Address",
    content: "Nilphamari, Rangpur City, Bangladesh",
    description: "Our office location",
  },
]

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-balance">Contact Us</h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-pretty">
              Have questions, feedback, or need support? We're here to help. Reach out to us anytime.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="rounded-lg bg-accent p-2">
                          <info.icon className="h-5 w-5 text-accent-foreground" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold">{info.title}</h3>
                          <p className="font-medium">{info.content}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Quick Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      For the fastest response, please email us with details about your issue. We typically respond
                      within 24 hours during business days.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" placeholder="How can we help?" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your question or feedback..."
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
