import type { MetadataRoute } from "next"
import { locations } from "@/lib/locations"

const baseUrl = "https://jayslandclearingserviceanddirtwork.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const locationPages = locations.map((location) => ({
    url: `${baseUrl}/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...locationPages,
  ]
}
