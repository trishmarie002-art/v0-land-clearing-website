"use client"

import { motion } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "How much does land clearing cost in San Antonio?",
    answer: "Land clearing costs in San Antonio vary based on the size of the property, density of vegetation, terrain, and accessibility. On average, expect to pay between $1,500 to $5,000 per acre for light clearing, and $3,000 to $8,000+ per acre for heavy brush and tree removal. We offer free on-site estimates to give you an accurate quote for your specific project."
  },
  {
    question: "What areas do you serve near San Antonio?",
    answer: "We proudly serve San Antonio and all surrounding areas including Bexar County, New Braunfels, Boerne, Seguin, Helotes, Castroville, Floresville, Pleasanton, Schertz, Cibolo, Universal City, Live Oak, Converse, and throughout South Texas. If you're within 60 miles of San Antonio, give us a call!"
  },
  {
    question: "How long does land clearing take?",
    answer: "The timeline depends on the property size and vegetation density. A small residential lot (under 1 acre) with light brush can typically be cleared in 1-2 days. Larger properties or dense vegetation may take 3-7 days or more. We'll provide a timeline estimate during your free consultation."
  },
  {
    question: "Do you handle brush and debris removal?",
    answer: "Yes! We provide complete land clearing services including all brush, tree, and debris removal. We haul away everything, leaving you with a clean, clear property ready for your next project. We can also provide mulching services to leave organic material on-site if preferred."
  },
  {
    question: "Can you clear land for new construction?",
    answer: "Absolutely. We specialize in lot preparation for new construction, including residential homes, commercial buildings, and agricultural structures. Our services include clearing, grading, and preparing the site to meet your builder's specifications."
  },
  {
    question: "Do you offer free estimates for land clearing?",
    answer: "Yes, we offer 100% free estimates with no obligation. We'll visit your property, assess the scope of work, and provide a detailed written quote. Call us at (210) 891-4174 or fill out our contact form to schedule your free estimate."
  },
]

// FAQ JSON-LD for structured data
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Common Questions
          </span>
          <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 uppercase tracking-tight text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto text-balance">
            Get answers to common questions about our land clearing services in San Antonio
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors text-left"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <span className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-primary" />
                  ) : (
                    <Plus className="w-4 h-4 text-primary" />
                  )}
                </span>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="p-5 bg-card/50 border border-t-0 border-border rounded-b-lg">
                  <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-foreground/70 mb-4">
            Have more questions? We&apos;re here to help!
          </p>
          <a
            href="tel:+12108914174"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Call (210) 891-4174
          </a>
        </motion.div>
      </div>
    </section>
  )
}
