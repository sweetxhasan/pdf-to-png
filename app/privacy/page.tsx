import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy - PDF to PNG Converter | Your Data Protection",
  description:
    "Read our privacy policy to understand how PDF to PNG converter protects your data. Local processing ensures complete privacy and security.",
  keywords: "privacy policy, data protection, PDF converter privacy, secure conversion",
  robots: "index, follow",
  openGraph: {
    title: "Privacy Policy - PDF to PNG Converter",
    description: "Learn how we protect your privacy with local PDF processing and no data collection.",
    type: "website",
  },
}

export default function PrivacyPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-balance">Privacy Policy</h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-pretty">
              Your privacy is our priority. Learn how we protect your data and ensure complete security.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Data Collection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>We do not collect, store, or transmit your PDF files or converted images.</strong> All PDF to
                  PNG conversion happens locally in your browser using JavaScript and the PDF.js library. Your files
                  never leave your device.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We may collect basic analytics data such as page views and general usage statistics to improve our
                  service, but this data is anonymous and cannot be linked to individual users or their files.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Process Your Files</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">When you upload a PDF file to our converter:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>The file is processed entirely within your web browser</li>
                  <li>No data is sent to our servers or any third-party services</li>
                  <li>The converted PNG images are generated locally on your device</li>
                  <li>All processing happens in your browser's memory and is cleared when you close the page</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookies and Local Storage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We use minimal cookies and local storage only for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Remembering your theme preference (dark/light mode)</li>
                  <li>Basic analytics to understand how our service is used</li>
                  <li>Improving user experience and site performance</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  We do not use cookies to track your personal information or browsing behavior across other websites.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Our website may use the following third-party services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>
                    <strong>Google Fonts:</strong> For loading the Open Sans font family
                  </li>
                  <li>
                    <strong>Analytics Services:</strong> For anonymous usage statistics
                  </li>
                  <li>
                    <strong>CDN Services:</strong> For faster loading of PDF.js library
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  These services have their own privacy policies and do not have access to your PDF files or converted
                  images.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Since all processing happens locally in your browser, your files are as secure as your own device. We
                  recommend:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Using an updated web browser with security patches</li>
                  <li>Ensuring your device has up-to-date antivirus software</li>
                  <li>Using secure networks when accessing our service</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
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
                <CardTitle>Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
                  updated revision date. We encourage you to review this policy periodically.
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
