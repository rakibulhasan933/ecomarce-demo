"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/products"

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  if (!product.inStock) {
    return (
      <Button size="lg" className="w-full" disabled>
        Out of Stock
      </Button>
    )
  }

  return (
    <Button size="lg" className="w-full gap-2" onClick={handleAddToCart} disabled={added}>
      {added ? (
        <>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Added to Cart
        </>
      ) : (
        "Add to Cart"
      )}
    </Button>
  )
}
