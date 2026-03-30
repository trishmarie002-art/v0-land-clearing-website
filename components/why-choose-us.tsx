"use client"

import { Shield, Clock, DollarSign, ThumbsUp, Award, Users } from "lucide-react"

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
  { value: "500+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "24hr", label: "Response Time" },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Why Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 font-[family-name:var(--font-display)] uppercase">
            Why Choose <span className="text-primary">{"Jay's"}</span>
          </h2>
          <p className="text-foreground/70">
            {"When you choose Jay's Land Clearing, you're choosing reliability, quality, and a commitment to excellence."}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-background rounded-lg border border-border hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-lg animate-on-scroll fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="shrink-0">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
                  <reason.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 font-[family-name:var(--font-display)] uppercase">
                  {reason.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-on-scroll fade-in">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transition-transform hover:scale-110"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary font-[family-name:var(--font-display)]">
                {stat.value}
              </div>
              <div className="text-foreground/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
