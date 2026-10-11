import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, MapPin, Phone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Contact } from "@/components/contact"
import { ChatWidget } from "@/components/chat-widget"
import { UrgentQuoteBanner } from "@/components/urgent-quote-banner"
import { blogPosts, blogPostBySlug } from "@/lib/blog-posts"
import { locations } from "@/lib/locations"

type Props = {
  params: Promise<{ slug: string }>
}

const baseUrl = "https://jayslandclearingserviceanddirtwork.com"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPostBySlug[slug]
  if (!post) return {}

  const url = `${baseUrl}/blog/${post.slug}`
  return {
    title: { absolute: post.title },
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "Jay's Land Clearing Service & Dirt Work",
      type: "article",
      images: [
        {
          url: "/images/hero-2.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/images/hero-2.jpg"],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPostBySlug[slug]
  if (!post) notFound()

  const pageUrl = `${baseUrl}/blog/${post.slug}`
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    mainEntityOfPage: pageUrl,
    author: {
      "@type": "Organization",
      name: "Jay's Land Clearing Service & Dirt Work",
    },
    publisher: {
      "@type": "Organization",
      name: "Jay's Land Clearing Service & Dirt Work",
    },
  }

  return (
    <main className="min-h-screen bg-background">
      <UrgentQuoteBanner />
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article>
        <section className="relative pt-40 md:pt-48 pb-16 md:pb-20 overflow-hidden border-b border-border">
          <img
            src="/images/hero-2.jpg"
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="container mx-auto px-4 relative z-10">
            <nav className="text-sm text-white/70 mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-primary">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{post.title}</span>
            </nav>

            <div className="max-w-5xl">
              <p className="text-primary uppercase tracking-wider text-sm font-bold mb-4">Land Clearing & Dirt Work Guide</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white font-[family-name:var(--font-display)]">
                {post.title}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl">{post.excerpt}</p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6 text-lg text-foreground/75 leading-relaxed">
                {post.body.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12 bg-primary rounded-lg p-7 md:p-9">
                <h2 className="text-2xl md:text-3xl font-bold uppercase text-primary-foreground font-[family-name:var(--font-display)]">
                  Ready to Work on Your Property?
                </h2>
                <p className="mt-3 text-primary-foreground/85 text-lg">{post.cta}</p>
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <a
                    href="tel:+12108914174"
                    className="inline-flex items-center justify-center gap-2 bg-background text-foreground font-bold px-6 py-3 rounded-md"
                  >
                    <Phone className="w-5 h-5" />
                    Call (210) 891-4174
                  </a>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 text-primary-foreground font-bold px-6 py-3 rounded-md"
                  >
                    Request a Free Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-secondary border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-sm mb-3">
                <MapPin className="w-4 h-4" />
                Service Areas
              </div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase font-[family-name:var(--font-display)] mb-4">
                Land Clearing & Dirt Work Near San Antonio
              </h2>
              <p className="text-foreground/70 max-w-3xl mb-8">
                We serve San Antonio plus surrounding South Texas and Hill Country communities. Choose your area for local service information.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {locations.map((location) => (
                  <Link
                    key={location.slug}
                    href={`/${location.slug}`}
                    className="bg-card border border-border rounded-md px-4 py-3 text-sm hover:border-primary hover:text-primary transition-colors"
                  >
                    {location.city}, TX
                  </Link>
                ))}
              </div>

              <Link href="/service-areas" className="inline-flex items-center gap-2 mt-7 text-primary font-bold">
                View All Service Areas <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </article>

      <Contact />
      <Footer />
      <ChatWidget />
    </main>
  )
}
