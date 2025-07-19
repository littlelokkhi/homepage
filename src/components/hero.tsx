import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Welcome to{" "}
            <span className="text-primary">Little Lokkhi</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            Discover our curated collection of premium products crafted with care and attention to detail. 
            Experience quality that speaks for itself.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="text-foreground font-semibold hover:text-primary transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}