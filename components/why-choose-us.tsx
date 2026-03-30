"use client"

import { Shield, Clock, DollarSign, ThumbsUp, Award, Users } from "lucide-react"
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const reasons = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete liability coverage for your peace of mind. We protect your property and our team.",
  },
  {
    icon: Clock,
    title: "On-Time Completion",
    description: "We respect your timeline and deliver projects on schedule. No excuses, just results.",
  },
  {
    icon: DollarSign,
    title: "Fair Pricing",
    description: "Competitive rates with transparent quotes. No hidden fees or surprise charges.",
  },
  {
    icon: ThumbsUp,
    title: "Quality Work",
    description: "We take pride in every project, big or small. Your satisfaction is guaranteed.",
  },
  {
    icon: Award,
    title: "Experienced Team",
    description: "Over 15 years of hands-on experience in land clearing and dirt work.",
  },
  {
    icon: Users,
    title: "Local & Trusted",
    description: "Family-owned business with deep roots in the San Antonio community.",
  },
]

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Satisfaction Rate" },
  { value: 24, suffix: "hr", label: "Response Time" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      })
      return controls.stop
    }
  }, [isInView, count, value])

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest)
    })
    return unsubscribe
  }, [rounded])

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  )
}

export function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="why-us" className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.05 } : {}}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)`,
          backgroundSize: '20px 20px'
        }} />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            Why Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 font-[family-name:var(--font-display)] uppercase"
          >
            Why Choose <span className="text-primary">{"Jay's"}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-foreground/70"
          >
            {"When you choose Jay's Land Clearing, you're choosing reliability, quality, and a commitment to excellence."}
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex gap-4 p-6 bg-background rounded-lg border border-border hover:border-primary/30 transition-colors"
            >
              <div className="shrink-0">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center"
                >
                  <reason.icon className="w-6 h-6 text-primary-foreground" />
                </motion.div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 font-[family-name:var(--font-display)] uppercase">
                  {reason.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary font-[family-name:var(--font-display)]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-foreground/60 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
