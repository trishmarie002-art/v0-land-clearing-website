import { blogPosts, type BlogPost } from "@/lib/blog-posts"
import { locations, type LocationPage } from "@/lib/locations"
import { servicePages, type ServicePage } from "@/lib/service-pages"

// Link only to real, existing pages. Keep sitewide navigation separate from topical recommendations.
const topics = [
  { terms: /mulch|brush|mesquite|cedar|tree|vegetation|overgrown|wildlife/i, tag: "brush" },
  { terms: /driveway|road|gate|entrance|caliche|gravel|access/i, tag: "access" },
  { terms: /grading|grade|drainage|erosion|mud|level|cut and fill/i, tag: "grading" },
  { terms: /pad|home|building|shop|barn|construction|foundation|site prep/i, tag: "site" },
  { terms: /acre|ranch|pasture|hunting|fence/i, tag: "acreage" },
  { terms: /cost|price|estimate|budget/i, tag: "pricing" },
  { terms: /excavat|dirt work|hauling|debris/i, tag: "earthwork" },
] as const

function tags(text: string): string[] {
  return topics.filter(({ terms }) => terms.test(text)).map(({ tag }) => tag)
}

function similarity(left: string[], right: string[]): number {
  return left.reduce((score, item) => score + (right.includes(item) ? 1 : 0), 0)
}

export function relatedArticles(post: BlogPost, limit = 3): BlogPost[] {
  const current = tags(post.title)
  if (!current.length) return []
  return blogPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => ({ candidate, score: similarity(current, tags(candidate.title)) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.candidate.title.localeCompare(b.candidate.title))
    .slice(0, limit)
    .map(({ candidate }) => candidate)
}

export function relatedArticlesForLocation(location: LocationPage, limit = 3): BlogPost[] {
  const locationTopics = tags(location.focus.join(" ") + " " + location.localNeeds)
  return blogPosts
    .map((post) => {
      const titleTopics = tags(post.title)
      // Prefer articles that explicitly discuss local needs and project types.
      const score = similarity(locationTopics, titleTopics)
      return { post, score }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.post.title.localeCompare(b.post.title))
    .slice(0, limit)
    .map(({ post }) => post)
}

export function relatedLocationsForArticle(post: BlogPost, limit = 4): LocationPage[] {
  const text = post.title + " " + post.excerpt
  // Never manufacture geographical relevance: show only cities actually named by the article.
  return locations
    .filter(({ city }) => new RegExp("(^|[^a-z])" + city.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\\ /g, "\\s+") + "([^a-z]|$)", "i").test(text))
    .slice(0, limit)
}

const serviceTopics = [
  { slug: "concrete-removal", terms: /concrete|slab/i },
  { slug: "hoarding-cleanouts", terms: /hoard|cluttered/i },
  { slug: "junk-removal", terms: /junk|trash|unwanted items/i },
  { slug: "demolition", terms: /demolition|tear.?down/i },
  { slug: "rock-removal", terms: /rock removal|boulder|large rock/i },
  { slug: "fence-line-clearing", terms: /fence|fencing/i },
  { slug: "hauling-services", terms: /hauling|debris removal|material hauling/i },
  { slug: "excavation", terms: /excavat|trench|digging/i },
  { slug: "lot-preparation", terms: /lot prepar|site prep|home.?site|building pad|construction site/i },
  { slug: "dirt-work-grading", terms: /grading|grade|dirt work|drainage|driveway/i },
  { slug: "brush-removal", terms: /brush|cedar|mesquite|mulch|overgrown vegetation/i },
  { slug: "land-clearing", terms: /land clearing|acreage|clear an acre|ranch clearing/i },
] as const

/** Link articles to real service pages only when their subject directly matches the service. */
export function relatedServicesForArticle(post: BlogPost, limit = 3): ServicePage[] {
  const subject = `${post.title} ${post.excerpt}`
  const matching = serviceTopics.filter(({ terms }) => terms.test(subject)).map(({ slug }) => slug)
  return matching
    .slice(0, limit)
    .map((slug) => servicePages.find((service) => service.slug === slug))
    .filter((service): service is ServicePage => Boolean(service))
}

/** Select article titles with a direct topical match to this service page. */
export function relatedArticlesForService(service: ServicePage, limit = 3): BlogPost[] {
  const terms = serviceTopics.find((topic) => topic.slug === service.slug)?.terms
  if (!terms) return []
  return blogPosts
    .filter((post) => terms.test(post.title))
    .slice(0, limit)
}
