"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const heroSlides = [
  {
    image: "/images/hero-1.jpg",
    title: "Professional Land Clearing",
    subtitle: "Transforming your property with expert clearing services",
  },
  {
    image: "/images/hero-2.jpg",
    title: "Quality Dirt Work",
    subtitle: "Grading, excavation, and site preparation done right",
  },
  {
    image: "/images/hero-3.jpg",
    title: "Trusted in San Antonio",
    subtitle: "Serving the greater San Antonio area with pride",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        {heroSlides.map((slide, index) =>
          index === currentSlide ? (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-sm font-semibold rounded-full border border-primary/30">
              San Antonio&apos;s Premier Land Clearing Service
            </span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.h1
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-[family-name:var(--font-display)] uppercase tracking-tight text-balance"
            >
              <span className="text-primary">{heroSlides[currentSlide].title.split(" ")[0]}</span>{" "}
              {heroSlides[currentSlide].title.split(" ").slice(1).join(" ")}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-foreground/80 mb-8 max-w-lg"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.p>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8 transition-transform hover:scale-105"
            >
              <Link href="#contact">Get Free Estimate</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-base px-8 transition-transform hover:scale-105"
            >
              <Link href="#services">Our Services</Link>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex items-center gap-8 text-sm text-foreground/60"
          >
            {[
              "Fully Insured",
              "Free Estimates",
              "Local Owned",
            ].map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-2"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="w-2 h-2 bg-primary rounded-full"
                />
                <span>{badge}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Navigation arrows */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-background/50 hover:bg-primary text-foreground hover:text-primary-foreground rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-background/50 hover:bg-primary text-foreground hover:text-primary-foreground rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-foreground/30 hover:bg-foreground/50 w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-8 z-20 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-foreground/50"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-5 h-8 border-2 border-foreground/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
