import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { getFeaturedProducts } from "@/lib/products"

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-muted">
        <Image src="/minimalist-interior-design-luxury.jpg" alt="Hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-background/40" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 text-balance">
            Timeless essentials for modern living
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
            Discover our curated collection of thoughtfully crafted pieces
          </p>
          <Link href="/shop">
            <Button size="lg" className="gap-2">
              Explore Collection
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-24">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-2">Featured Collection</h2>
            <p className="text-muted-foreground">Handpicked pieces for the discerning eye</p>
          </div>
          <Link href="/shop" className="hidden md:block">
            <Button variant="outline" className="gap-2 bg-transparent">
              View All
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link href="/shop">
            <Button variant="outline" className="gap-2 bg-transparent">
              View All Products
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12 text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Home",
                image: "/modern-home-decor.png",
              },
              {
                name: "Apparel",
                image: "/minimalist-clothing.png",
              },
              {
                name: "Accessories",
                image: "/leather-accessories.jpg",
              },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/shop?category=${category.name}`}
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-medium mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    Explore{" "}
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] relative overflow-hidden rounded-lg bg-muted">
            <Image src="/artisan-craftsmanship-workshop.jpg" alt="Craftsmanship" fill className="object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">Crafted with intention</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every piece in our collection is thoughtfully selected for its quality, design, and timeless appeal. We
              partner with artisans and makers who share our commitment to excellence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From sustainable materials to ethical production, we believe in creating products that not only look
              beautiful but also stand the test of time.
            </p>
            <Link href="/about">
              <Button variant="outline" className="gap-2 bg-transparent">
                Our Story
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
