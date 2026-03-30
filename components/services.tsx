import { Trees, Mountain, Home, Truck, Shovel, Fence } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Trees,
    title: "Land Clearing",
    description: "Complete brush, tree, and vegetation removal for residential and commercial properties. We handle everything from small lots to large acreage.",
  },
  {
    icon: Shovel,
    title: "Dirt Work & Grading",
    description: "Professional site grading, leveling, and earthmoving services. We ensure proper drainage and a solid foundation for your project.",
  },
  {
    icon: Mountain,
    title: "Excavation",
    description: "Expert excavation services for foundations, ponds, drainage systems, and more. Precision work with attention to detail.",
  },
  {
    icon: Truck,
    title: "Hauling Services",
    description: "Debris removal, material hauling, and disposal services. We keep your site clean and handle all waste responsibly.",
  },
  {
    icon: Home,
    title: "Lot Preparation",
    description: "Complete site preparation for new construction, including clearing, grading, and utility trenching.",
  },
  {
    icon: Fence,
    title: "Fence Line Clearing",
    description: "Clear brush and vegetation along fence lines for new installations or to reclaim existing boundaries.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 font-[family-name:var(--font-display)] uppercase">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-foreground/70">
            From initial land clearing to final grading, we provide comprehensive services to transform your property.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all group"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold font-[family-name:var(--font-display)] uppercase">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Area Note */}
        <div className="mt-16 bg-card border border-border rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-display)] uppercase">
            Proudly Serving <span className="text-primary">San Antonio</span> & Surrounding Areas
          </h3>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            We service all of Bexar County and surrounding communities including Boerne, New Braunfels, Seguin, Floresville, Castroville, and more. Contact us to see if we service your area.
          </p>
        </div>
      </div>
    </section>
  )
}
