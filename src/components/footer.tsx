export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-foreground mb-4">Little Lokkhi</h3>
            <p className="text-muted-foreground mb-4">
              Curating premium products with exceptional quality and craftsmanship.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">All Products</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">New Arrivals</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Shipping</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Returns</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Little Lokkhi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}