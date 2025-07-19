import { Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Premium Ceramic Vase",
    price: "$89",
    image: "/api/placeholder/300/300",
    rating: 4.8,
    reviews: 24
  },
  {
    id: 2,
    name: "Handcrafted Wooden Bowl",
    price: "$45",
    image: "/api/placeholder/300/300", 
    rating: 4.9,
    reviews: 16
  },
  {
    id: 3,
    name: "Artisan Candle Set",
    price: "$32",
    image: "/api/placeholder/300/300",
    rating: 4.7,
    reviews: 31
  }
]

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully selected collection of premium items
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="bg-muted rounded-lg p-6 mb-4 group-hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-muted-foreground/10 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Product Image</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-muted-foreground ml-1">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
                
                <p className="font-bold text-lg text-foreground">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}