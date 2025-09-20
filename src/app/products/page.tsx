"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Phone, ArrowRight, ShoppingCart, Quote } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ProductsPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navigateToHome = () => {
    router.push('/')
  }

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Premium Steel Beams",
      description: "High-quality structural steel beams for industrial construction",
      category: "Structural Materials",
      image: "/beams.jpg"
    },
    {
      id: 2,
      name: "Architectural Glass Panels",
      description: "Modern glass facades for contemporary building designs",
      category: "Exterior Materials",
      image: "/glass.jpg"
    },
    {
      id: 3,
      name: "Concrete Mix Solutions",
      description: "Pre-mixed concrete for various construction applications",
      category: "Construction Materials",
      image: "/cncrt.png"
    },
    {
      id: 4,
      name: "HVAC Systems",
      description: "Energy-efficient heating, ventilation, and air conditioning systems",
      category: "Building Systems",
      image: "/hvac.png"
    },
    {
      id: 5,
      name: "Safety Equipment",
      description: "Comprehensive safety gear and equipment for construction sites",
      category: "Safety",
      image: "/sfty.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md py-2' : 'bg-transparent'}`}>        
        <div className="flex items-center size-16">
          <img src="/logo.png" alt="logo" />
        </div>

        <nav className="hidden md:flex items-center bg-white/90 backdrop-blur-sm rounded-full px-1 py-1 border border-gray-200">
          <Button 
            variant="ghost" 
            className="rounded-full text-gray-600 hover:text-black px-5"
            onClick={navigateToHome}
          >
            Home
          </Button>
          <Button 
            variant="ghost" 
            className="rounded-full text-black bg-black text-white px-5 hover:bg-black/90"
          >
            Products
          </Button>
          <Button variant="ghost" className="rounded-full text-gray-600 hover:text-black px-5">
            Projects
          </Button>
          <Button variant="ghost" className="rounded-full text-gray-600 hover:text-black px-5">
            Contact Us
          </Button>
          
          {/* Language Selector */}
          <div className="flex items-center mx-2">
            <div className="h-6 w-px bg-gray-300 mx-3"></div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-full px-3 text-gray-800 font-medium"
            >
              EN
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-full px-3 text-gray-500 hover:text-gray-800"
            >
              العربية
            </Button>
          </div>
        </nav>

        <div className="flex items-center space-x-2 text-black">
          <Phone className="w-4 h-4" />
          <span className="text-sm font-medium">+38(098) 1301-26-34</span>
        </div>
      </header>

      {/* Products Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
            Discover our comprehensive range of high-quality construction materials
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            <Button className="rounded-full bg-gray-800 text-white hover:bg-gray-900">All Products</Button>
            <Button variant="outline" className="rounded-full">Structural Materials</Button>
            <Button variant="outline" className="rounded-full">Exterior Materials</Button>
            <Button variant="outline" className="rounded-full">Building Systems</Button>
            <Button variant="outline" className="rounded-full">Safety Equipment</Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-6 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group border-0 bg-white hover:bg-gray-50 transition-all duration-300 overflow-hidden rounded-xl shadow-sm hover:shadow-lg">
                <div className="h-56 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-gray-200 group-hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center">
                        <Quote className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-sm text-gray-600 font-medium">{product.category}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-lg text-gray-900 line-clamp-2">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">
                    {product.description}
                  </CardDescription>
                  <Button className="w-full bg-gray-800 text-white hover:bg-gray-900 rounded-lg py-2.5 transition-all duration-200 group-hover:translate-y-[-1px]">
                    <Quote className="w-4 h-4 mr-2" />
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">BRCD</div>
            <p className="text-gray-400">
              Quality construction products and services since 2019.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Structural Materials</li>
              <li>Exterior Materials</li>
              <li>Building Systems</li>
              <li>Safety Equipment</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>+38(098) 1301-26-34</li>
              <li>products@brcd-construction.com</li>
              <li>Kyiv, Ukraine</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Product Catalog</li>
              <li>Technical Specifications</li>
              <li>Delivery Information</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© 2024 BRCD Construction. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}