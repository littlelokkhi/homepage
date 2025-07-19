import { Truck, Shield, Heart, Award } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on orders over $75"
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Your payment information is safe"
  },
  {
    icon: Heart,
    title: "Handcrafted",
    description: "Every item is made with love and care"
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "30-day money back guarantee"
  }
]

export function Features() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}