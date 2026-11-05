import { blogPosts, type BlogPost } from "@/lib/blog-posts"
import { locations, type LocationPage } from "@/lib/locations"

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
