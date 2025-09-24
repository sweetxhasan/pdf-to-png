import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Terms of Service - PDF to PNG Converter | Usage Terms & Conditions",
  description:
    "Read our terms of service for PDF to PNG converter. Understand the terms and conditions for using our free PDF conversion tool.",
  keywords: "terms of service, usage terms, PDF converter terms, conditions",
  robots: "index, follow",
  openGraph: {
    title: "Terms of Service - PDF to PNG Converter",
    description: "Terms and conditions for using our free PDF to PNG conversion service.",
    type: "website",
  },
}

export default function TermsPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-balance">Terms of Service</h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-pretty">
              Please read these terms carefully before using our PDF to PNG conversion service.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using PDF to PNG converter service, you accept and agree to be bound by the terms and
                  provision of this agreement. If you do not agree to abide by the above, please do not use this
                  service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Use License</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Permission is granted to temporarily use PDF to PNG converter for personal and commercial purposes.
                  This is the grant of a license, not a transfer of title, and under this license you may:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Convert PDF files to PNG images for personal or business use</li>
                  <li>Use the service on multiple devices</li>
                  <li>Share converted images as needed</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  This license shall automatically terminate if you violate any of these restrictions and may be
                  terminated by us at any time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prohibited Uses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">You may not use our service:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>
                    To violate any international, federal, provincial, or state regulations, rules, laws, or local
                    ordinances
                  </li>
                  <li>
                    To infringe upon or violate our intellectual property rights or the intellectual property rights of
                    others
                  </li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                  <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                  <li>For any obscene or immoral purpose</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to provide continuous service availability, but we do not guarantee that our service will be
                  available at all times. We may experience hardware, software, or other problems or need to perform
                  maintenance related to the service, resulting in interruptions, delays, or errors. We reserve the
                  right to change, revise, update, suspend, discontinue, or otherwise modify the service at any time or
                  for any reason without notice to you.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The information on this website is provided on an "as is" basis. To the fullest extent permitted by
                  law, this Company:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Excludes all representations and warranties relating to this website and its contents</li>
                  <li>
                    Excludes all liability for damages arising out of or in connection with your use of this website
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall PDF to PNG converter or its suppliers be liable for any damages (including, without
                  limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                  use or inability to use the materials on PDF to PNG converter's website, even if PDF to PNG converter
                  or a PDF to PNG converter authorized representative has been notified orally or in writing of the
                  possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties,
                  or limitations of liability for consequential or incidental damages, these limitations may not apply
                  to you.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accuracy of Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  The materials appearing on PDF to PNG converter's website could include technical, typographical, or
                  photographic errors. PDF to PNG converter does not warrant that any of the materials on its website
                  are accurate, complete, or current. PDF to PNG converter may make changes to the materials contained
                  on its website at any time without notice. However, PDF to PNG converter does not make any commitment
                  to update the materials.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of Bangladesh and
                  you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 space-y-1">
                  <p className="font-medium">Email: kinghasanbd1@gmail.com</p>
                  <p className="font-medium">Phone: +8801744298642</p>
                  <p className="font-medium">Address: Nilphamari, Rangpur City, Bangladesh</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                  revision is material, we will try to provide at least 30 days notice prior to any new terms taking
                  effect.
                </p>
                <p className="text-sm text-muted-foreground mt-4">Last updated: January 2025</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
