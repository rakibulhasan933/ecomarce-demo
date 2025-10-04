"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart()

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-light tracking-tight">Your cart is empty</h1>
          <p className="text-lg text-muted-foreground">Discover our curated collection of timeless essentials</p>
          <Link href="/shop">
            <Button size="lg" className="gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-light tracking-tight mb-12">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div key={item.id} className="flex gap-6 pb-6 border-b border-border last:border-0">
              <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <Link
                    href={`/product/${item.id}`}
                    className="font-medium hover:text-muted-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">${item.price}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-transparent"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </Button>
                    <span className="w-12 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-transparent"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </Button>
                  </div>

                  <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                    <span className="sr-only">Remove item</span>
                  </Button>
                </div>
              </div>

              <div className="text-right font-medium">${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-muted/30 rounded-lg p-6 space-y-6 sticky top-24">
            <h2 className="text-xl font-medium">Order Summary</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">{totalPrice > 200 ? "Free" : "$15.00"}</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between text-base">
                <span className="font-medium">Total</span>
                <span className="font-medium">${(totalPrice + (totalPrice > 200 ? 0 : 15)).toFixed(2)}</span>
              </div>
            </div>

            <Button size="lg" className="w-full">
              Proceed to Checkout
            </Button>

            <Link href="/shop">
              <Button variant="outline" size="lg" className="w-full gap-2 bg-transparent">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                Continue Shopping
              </Button>
            </Link>

            {totalPrice < 200 && (
              <p className="text-xs text-muted-foreground text-center">
                Add ${(200 - totalPrice).toFixed(2)} more for free shipping
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
