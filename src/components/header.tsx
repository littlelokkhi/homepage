import { ShoppingBag, Search, Menu } from "lucide-react"

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <div className="ml-4 md:ml-0">
              <h1 className="text-2xl font-bold text-primary">Little Lokkhi</h1>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-foreground hover:text-primary">Shop</a>
            <a href="#" className="text-foreground hover:text-primary">About</a>
            <a href="#" className="text-foreground hover:text-primary">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-foreground hover:text-primary">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-foreground hover:text-primary">
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}