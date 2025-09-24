export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://pdf-to-png.vercel.app/sitemap.xml`

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
