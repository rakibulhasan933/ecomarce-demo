import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { CartProvider } from "@/lib/cart-context"
import { Suspense } from "react"
import Link from "next/link"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "Atelier - Curated Essentials",
  description: "Discover timeless pieces crafted with care",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-sans">
        <CartProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
          </Suspense>
          <main className="min-h-screen">{children}</main>
          <footer className="border-t border-border bg-muted/30 mt-24">
            <div className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">About</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Curating timeless essentials for modern living.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Shop</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <Link href="/shop" className="hover:text-foreground transition-colors">
                        All Products
                      </Link>
                    </li>
                    <li>
                      <Link href="/collections" className="hover:text-foreground transition-colors">
                        Collections
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Support</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <Link href="/contact" className="hover:text-foreground transition-colors">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link href="/shipping" className="hover:text-foreground transition-colors">
                        Shipping
                      </Link>
                    </li>
                    <li>
                      <Link href="/returns" className="hover:text-foreground transition-colors">
                        Returns
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Connect</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Instagram</li>
                    <li>Pinterest</li>
                    <li>Newsletter</li>
                  </ul>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                <p>&copy; 2025 Atelier. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  )
}
