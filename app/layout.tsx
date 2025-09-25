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
  title: "PDF to PNG - Convert PDF Files to PNG Images Online | Free PDF Converter",
  description:
    "Convert PDF files to high-quality PNG images online for free. Fast, secure, and easy-to-use PDF to PNG converter. No registration required.",
  keywords: "PDF to PNG, convert PDF, PDF converter, PNG converter, online converter, free PDF tools",
  authors: [{ name: "PDF to PNG Converter" }],
  creator: "PDF to PNG Converter",
  publisher: "PDF to PNG Converter",
  robots: "index, follow",
  openGraph: {
    title: "PDF to PNG - Free Online PDF to PNG Converter",
    description: "Convert PDF files to high-quality PNG images online for free. Fast, secure, and easy-to-use.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF to PNG - Free Online PDF to PNG Converter",
    description: "Convert PDF files to high-quality PNG images online for free.",
  },
  viewport: "width=device-width, initial-scale=1",
  generator: "PDF to PNG Converter",
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
