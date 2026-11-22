import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chat-widget"
import { UrgentQuoteBanner } from "@/components/urgent-quote-banner"
import { blogPosts } from "@/lib/blog-posts"

export const metadata: Metadata = {
  title: { absolute: "Land Clearing & Dirt Work Blog | San Antonio, TX" },
  description:
    "Land clearing and dirt work blog for San Antonio, TX. Read practical guides about clearing costs, grading, excavation, brush removal, acreage, pads, driveways, and site prep.",
  alternates: {
    canonical: "https://jayslandclearingserviceanddirtwork.com/blog",
  },
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <UrgentQuoteBanner />
      <Header />

      <section className="pt-40 md:pt-48 pb-16 md:pb-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              <BookOpen className="w-4 h-4" />
              Property Tips & Guides
            </div>
            <h1 className="text-4xl md:text-6xl font-bold uppercase leading-tight font-[family-name:var(--font-display)]">
              Land Clearing & Dirt Work <span className="text-primary">Blog</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground/75 leading-relaxed max-w-3xl">
              Practical information for San Antonio and South Texas property owners planning land clearing,
              grading, excavation, brush removal, driveways, building pads, ranch improvements, and site preparation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-card border border-border rounded-lg p-6 flex flex-col">
                <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-3">Land & Property Guide</p>
                <h2 className="text-xl md:text-2xl font-bold leading-tight font-[family-name:var(--font-display)]">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-foreground/70 mt-4 leading-relaxed flex-1">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 mt-6 text-primary font-bold"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </main>
  )
}
