import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getProductById } from "@/lib/products"
import { AddToCartButton } from "@/components/add-to-cart-button"

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/shop"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back to Shop
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="aspect-square relative overflow-hidden rounded-lg bg-muted">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" priority />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
            <h1 className="text-4xl font-light tracking-tight mb-4">{product.name}</h1>
            <p className="text-3xl font-medium">${product.price}</p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>

          <div className="space-y-4">
            <AddToCartButton product={product} />
          </div>

          <div className="border-t border-border pt-6 space-y-4">
            <h3 className="font-medium">Product Details</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Free shipping on orders over $200</li>
              <li>• 30-day return policy</li>
              <li>• Handcrafted with premium materials</li>
              <li>• Sustainably sourced</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
