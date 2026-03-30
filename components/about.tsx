"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const highlights = [
  "Over 15 years of experience in land clearing",
  "Locally owned and operated in San Antonio",
  "Fully licensed and insured",
  "State-of-the-art equipment and techniques",
  "Commitment to environmental responsibility",
  "Competitive pricing with no hidden fees",
]

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {isInView && (
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            {value}{suffix}
          </motion.span>
        )}
      </motion.span>
    </motion.span>
  )
}

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 md:py-28 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/hero-2.jpg"
                alt="Jay's Land Clearing team at work"
                fill
                className="object-cover"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute inset-0 bg-primary/10"
              />
            </div>
            {/* Accent box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-lg hidden md:block shadow-2xl"
            >
              <div className="text-center">
                <span className="block text-4xl font-bold text-primary-foreground font-[family-name:var(--font-display)]">
                  <Counter value={15} suffix="+" />
                </span>
                <span className="text-primary-foreground/80 text-sm">Years of Experience</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-primary font-semibold text-sm uppercase tracking-wider"
            >
              About Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6 font-[family-name:var(--font-display)] uppercase"
            >
              Your Trusted Partner in <span className="text-primary">Land Clearing</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-foreground/80 mb-6 leading-relaxed"
            >
              {"Jay's Land Clearing Service & Dirt Work has been serving San Antonio and the surrounding areas for over 15 years. What started as a small family operation has grown into one of the most trusted land clearing companies in South Texas."}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-foreground/80 mb-8 leading-relaxed"
            >
              We take pride in transforming properties of all sizes, from residential lots to large commercial developments. Our team combines years of expertise with modern equipment to deliver exceptional results on every project.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  </motion.div>
                  <span className="text-foreground/80 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
