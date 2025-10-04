import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">All Products</h1>
        <p className="text-lg text-muted-foreground">Explore our complete collection of curated essentials</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
