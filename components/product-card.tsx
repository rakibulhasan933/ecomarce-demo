import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/lib/products"
import { Card, CardContent } from "@/components/ui/card"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <Card className="group overflow-hidden border-border hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-0">
          <div className="aspect-square overflow-hidden bg-muted">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-4 space-y-2">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-medium text-base leading-tight text-pretty">{product.name}</h3>
              <p className="font-medium text-base whitespace-nowrap">${product.price}</p>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
            {!product.inStock && <p className="text-sm text-destructive">Out of stock</p>}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
