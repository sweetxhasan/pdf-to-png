import type React from "react"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "PDF to Images - Convert PDF Files to PNG, JPEG, JPG Online | Free PDF Converter",
  description:
    "Convert PDF files to high-quality images in PNG, JPEG, or JPG format online for free. Fast, secure PDF to images converter with ZIP download. No registration required.",
  keywords:
    "PDF to images, PDF to PNG, PDF to JPEG, PDF to JPG, convert PDF, PDF converter, image converter, online converter, free PDF tools, ZIP download",
  authors: [{ name: "PDF to Images Converter" }],
  creator: "PDF to Images Converter",
  publisher: "PDF to Images Converter",
  robots: "index, follow",
  openGraph: {
    title: "PDF to Images - Free Online PDF to Images Converter",
    description:
      "Convert PDF files to high-quality PNG, JPEG, or JPG images online for free. Fast, secure, and easy-to-use with ZIP download.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF to Images - Free Online PDF to Images Converter",
    description: "Convert PDF files to PNG, JPEG, or JPG images online for free with ZIP download.",
  },
  viewport: "width=device-width, initial-scale=1",
  generator: "PDF to Images Converter",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${openSans.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
