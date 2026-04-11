"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroSlides = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/597309592_122189063936538072_2733738572363445506_n-UOJPBnUWgzrcR6HTD4joppvqX0izck.jpg",
    title: "Professional Land Clearing",
    subtitle: "Transforming your property with expert clearing services",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/627162796_122195512712538072_1509152379615460320_n%20%281%29-FJolk2iSSpi1iXod4xk7xsCh8KB2oh.jpg",
    title: "Quality Dirt Work",
    subtitle: "Grading, excavation, and site preparation done right",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/653317281_122200574036538072_8200266081722862456_n%20%281%29-Bzw0ZQlOTF1QLSJ4IkEfqt6td2xpZ6.jpg",
    title: "Trusted in San Antonio",
    subtitle: "Serving the greater San Antonio area with pride",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden mt-[140px] md:mt-[172px]">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center md:justify-center">
        <div className="max-w-2xl pt-20 text-center">
          <div className="mb-4 animate-fade-in">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-sm font-semibold rounded-full border border-primary/30">
              San Antonio&apos;s Premier Land Clearing Service
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-[family-name:var(--font-display)] uppercase tracking-tight text-balance animate-slide-up">
            <span className="text-primary">{heroSlides[currentSlide].title.split(" ")[0]}</span>{" "}
            {heroSlides[currentSlide].title.split(" ").slice(1).join(" ")}
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-lg animate-slide-up-delay">
            {heroSlides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay justify-center">
            <Button
              asChild
              size="lg"
              className="animate-flash-sync bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8 transition-transform hover:scale-105"
            >
              <a href="tel:+12108914174">SCHEDULE YOUR FREE QUOTE NOW</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-base px-8 transition-transform hover:scale-105"
            >
              <Link href="#services">Our Services</Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-foreground/60 animate-fade-in-delay-2">
            {["Free Estimates", "Local Owned"].map((badge, index) => (
              <div
                key={badge}
                className="flex items-center gap-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-background/50 hover:bg-primary text-foreground hover:text-primary-foreground rounded-full transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-background/50 hover:bg-primary text-foreground hover:text-primary-foreground rounded-full transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all hover:scale-110 ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-foreground/30 hover:bg-foreground/50 w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:block animate-fade-in-delay-2">
        <div className="flex flex-col items-center gap-2 text-foreground/50 animate-bounce">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-5 h-8 border-2 border-foreground/30 rounded-full flex justify-center">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 animate-scroll-down" />
          </div>
        </div>
      </div>
    </section>
  )
}
