"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle, CardVariant } from "@/components/ui/card"
import { Phone, ChevronDown, ArrowRight, Building, Factory, HardHat, ClipboardCheck } from "lucide-react"
import { useRouter } from "next/navigation"

export default function HomePage() {
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
    const navigateToProduct = () => {
    router.push('/products')
  }

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
            className="rounded-full text-black bg-black text-white px-5 hover:bg-black/90"
            onClick={() => scrollToSection('advantages')}
          >
            Home
          </Button>
          <Button 
            variant="ghost" 
            className="rounded-full text-gray-600 hover:text-black px-5"
            onClick={navigateToProduct}
          >
            Products
          </Button>
          <Button variant="ghost" className="rounded-full text-gray-600 hover:text-black px-5">
            Projects
          </Button>
          <Button variant="ghost" className="rounded-full text-gray-600 hover:text-black px-5">
            Contact Us
          </Button>
          {/* Language Selector as part of the nav */}
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

        <div className="flex items-center space-x-2 text-white">
          <Phone className="w-4 h-4" />
          <span className="text-sm font-medium">+38(098) 1301-26-34</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
          src="/3112.jpg"
            alt="Modern Industrial Building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <p className="text-lg mb-4 font-light">Saudi public joint stock company</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            United Wire Factories Company
          </h1>
          
          <Button 
            size="lg" 
            variant="accent" 
            className="rounded-full px-8 py-6 text-lg flex items-center mx-auto space-x-2 mb-16"
          >
            <span>Get Quote</span>
            <ArrowRight className="w-5 h-5" />
          </Button>

          <div className="flex justify-center space-x-16">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-gray-300 text-sm">
                Years on
                <br />
                the market
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">70+</div>
              <div className="text-gray-300 text-sm">
                Projects
                <br />
                implemented
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full text-white animate-bounce"
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* About Us Section */}
<section id="about" className="py-20 px-6 bg-gray-800 text-white min-h-screen">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <div className="inline-block px-16 py-4 bg-[#FFD700]/10 rounded-full mb-6">
        <span className="text-[#FFD700] font-bold tracking-wider">ABOUT US</span>
      </div>
      <h2 className="text-4xl font-bold mb-4">Building Excellence Since 2019</h2>
      <div className="w-20 h-1 bg-[#FFD700] mx-auto mb-6"></div>
      <p className="text-gray-300 max-w-2xl mx-auto text-lg">
        Leading Steel & Wire Manufacturing Excellence.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="w-8 h-0.5 bg-[#FFD700] mr-4"></span>
            Our Story
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            United Wire Factories Company (ASLAK) is one of the leading and distinct industrial firm in Saudi Arabia, ASLAK is specialized in manufacturing steel wire products that covers wide range of customers in different sectors; (industrial, construction, and civil).
          </p>
          <p className="text-gray-300 mb-8 leading-relaxed">
           ASLAK was transformed from private to a public company in Aug 2011, and its shares are listed in Saudi Stock Exchange (TADAWUL) with the symbol ID 1301.
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-800">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FFD700] mb-2">70+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FFD700] mb-2">50+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FFD700] mb-2">5+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Years</div>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <div className="grid grid-cols-2 gap-5">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#FFD700] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg z-10"></div>
            <div className="h-80 rounded-lg overflow-hidden">
              <img 
                src="/102.jpg" 
                alt="Our Professional Team" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
              <p className="text-white text-sm font-medium">Our Professional Team</p>
            </div>
          </div>
          <div className="relative group mt-10">
            <div className="absolute inset-0 bg-[#FFD700] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg z-10"></div>
            <div className="h-80 rounded-lg overflow-hidden">
              <img 
                src="/site.jpg" 
                alt="Modern Construction Site" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
              <p className="text-white text-sm font-medium">Modern Construction Site</p>
            </div>
          </div>
        </div>
        
        <div className="absolute -z-10 top-6 -right-6 w-full h-full border-2 border-[#FFD700]/20 rounded-lg"></div>
      </div>
    </div>
  </div>
</section>

      {/* Services Section */}
    <section className="min-h-screen bg-white/95 px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-start justify-between mb-8">
            <button className="text-black text-sm font-medium flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-xs">↗</span>
              Request A Quote
            </button>
          </div>

          <h1 className="text-black text-8xl font-bold mb-6 text-balance">Our Services</h1>

          <p className="text-gray text-xl italic max-w-2xl text-pretty">
            Comprehensive, Custom-Tailored Industrial Solutions Designed for Every Aspect of Manufacturing Excellence
            and Operational Success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Manufacturing Services */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#ff4d6d] via-[#c44569] to-[#8e44ad] rounded-2xl overflow-hidden h-80">
              <img
                src="/cst.jpg"
                alt="Construction & Building Services"
                width={400}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-black text-xl font-semibold flex items-center gap-2">
                <span className="text-sm">↗</span>
                Construction & Building Services
              </h3>
            </div>
          </div>

          {/* Engineering Solutions */}
          <div className="relative">
            <div className="bg-[#7fb3d3] rounded-2xl overflow-hidden h-80">
              <img
                src="/cvl.jpg"
                alt="Civil Sector"
                width={400}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-black text-xl font-semibold flex items-center gap-2">
                <span className="text-sm">↗</span>
                Civil Sector
              </h3>
            </div>
          </div>

          {/* Automation Services */}
          <div className="relative">
            <div className="bg-[#4a69bd] rounded-2xl overflow-hidden h-64 mb-4">
              <img
                src="/stl.jpg"
                alt="Industrial Products"
                width={400}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl">
              <h3 className="text-white text-xl font-semibold flex items-center gap-2 mb-3">
                <span className="text-sm">↗</span>
                Industrial Products
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                ASLAK Progress a bouquet of integrated services to its clients include the implementation of different kinds of fencing projects and by providing materials and accessories manufactured.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* CTA Section
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let's bring your vision to life with our expertise and dedication.
          </p>
          <Button size="lg" variant="accent" className="rounded-full px-8 py-6 text-lg">
            Get in touch
          </Button>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">BRCD</div>
            <p className="text-gray-400">
              Quality construction services in Kyiv and the region since 2019.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Construction & Building</li>
              <li>Civil Engineering</li>
              <li>Industrial Projects</li>
              <li>Project Management</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>+38(098) 1301-26-34</li>
              <li>info@brcd-construction.com</li>
              <li>Kyiv, Ukraine</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                <span className="text-sm">FB</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                <span className="text-sm">IG</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                <span className="text-sm">IN</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© 2024 BRCD Construction. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}