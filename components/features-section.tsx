import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

const features = [
  {
    icon: Icons.upload,
    title: "Easy Upload",
    description:
      "Simply drag and drop your PDF files or click to browse. Supports all PDF versions and sizes up to 100MB.",
  },
  {
    icon: Icons.features,
    title: "Multiple Formats",
    description:
      "Convert PDF pages to PNG, JPEG, or JPG images with perfect clarity and color accuracy. Choose your preferred format.",
  },
  {
    icon: Icons.download,
    title: "ZIP Download",
    description:
      "Download individual pages or get all converted images in a convenient ZIP file. No waiting, no queues, just instant results.",
  },
  {
    icon: Icons.privacy,
    title: "100% Secure",
    description:
      "Your files are processed locally in your browser. No uploads to servers, complete privacy guaranteed.",
  },
  {
    icon: Icons.sun,
    title: "Free Forever",
    description: "Convert unlimited PDF files to images completely free. No registration, no hidden fees, no limits.",
  },
  {
    icon: Icons.features,
    title: "All Devices",
    description: "Works perfectly on desktop, tablet, and mobile devices. Responsive design for any screen size.",
  },
]

export function FeaturesSection() {
  return (
    <section className="container space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Why Choose Our PDF to Images Converter?
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Experience the fastest, most reliable PDF to image conversion tool with advanced features designed for your
          needs.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="rounded-lg bg-accent p-2">
                  <feature.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
