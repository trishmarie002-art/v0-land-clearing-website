import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { ServiceArea } from "@/components/service-area"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chat-widget"
import { UrgentQuoteBanner } from "@/components/urgent-quote-banner"

export default function Home() {
  return (
    <main className="min-h-screen">
      <UrgentQuoteBanner />
      <Header />
      <Hero />
      <About />
      <Services />
      <ServiceArea />
      <FAQ />
      <Contact />
      <Footer />
      <ChatWidget />
    </main>
  )
}
