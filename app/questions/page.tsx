import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen, Phone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chat-widget"
import { UrgentQuoteBanner } from "@/components/urgent-quote-banner"
import { servicePages } from "@/lib/service-pages"
import { serviceQuestionLibrary } from "@/lib/service-question-library"

export const metadata: Metadata = {
  title: { absolute: "Property Service Questions & Answers | Jay's Land Clearing" },
  description: "Answers to common land clearing, grading, excavation, concrete removal, junk removal and demolition questions for South Texas property owners. Browse all 12 services.",
  alternates: { canonical: "https://jayslandclearingserviceanddirtwork.com/questions" },
}

export default function QuestionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <UrgentQuoteBanner />
      <Header />
      <section className="pt-40 md:pt-48 pb-16 bg-secondary border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <span className="inline-flex items-center gap-2 text-sm uppercase font-bold tracking-wider text-primary"><BookOpen size={18} /> Property Planning Answers</span>
          <h1 className="text-4xl md:text-6xl font-bold uppercase font-[family-name:var(--font-display)] mt-4">Questions About <span className="text-primary">Property Services</span></h1>
          <p className="mt-5 text-lg text-foreground/70 max-w-3xl">Browse 72 practical questions covering costs, safety, job preparation, debris handling, and scope for land clearing and property services throughout San Antonio and surrounding South Texas communities.</p>
          <p className="mt-4 text-sm text-foreground/60">Answers are general planning guidance, not fixed-price quotes or guarantees. Actual work, permits, and availability require project review.</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {servicePages.map((service) => {
              const questions = [
                service.questionOne,
                service.questionTwo,
                ...(serviceQuestionLibrary[service.slug] ?? []).map((item) => item.question),
              ]
              return <section key={service.slug} className="bg-card border border-border rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold uppercase font-[family-name:var(--font-display)]">{service.title}</h2>
                <ul className="mt-5 space-y-3">
                  {questions.map((question) => <li key={question} className="text-foreground/75 leading-relaxed">• {question}</li>)}
                </ul>
                <Link href={`/services/${service.slug}#service-questions`} className="inline-flex gap-2 items-center mt-6 text-primary font-bold hover:underline">
                  Read all {questions.length} answers <ArrowRight size={16} />
                </Link>
              </section>
            })}
          </div>
        </div>
      </section>
      <section className="bg-secondary py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Have a question about your property?</h2>
          <p className="mt-3 text-foreground/70">Send photos and your city or ZIP to help us understand the project before discussing a quote.</p>
          <a className="inline-flex items-center gap-2 mt-6 rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground" href="tel:+12108914174"><Phone size={18}/> Call (210) 891-4174</a>
        </div>
      </section>
      <Footer />
      <ChatWidget />
    </main>
  )
}
