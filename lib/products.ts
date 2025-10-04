export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  featured?: boolean
  inStock: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "Minimalist Leather Tote",
    description: "Handcrafted Italian leather tote with brass hardware. Perfect for everyday elegance.",
    price: 289,
    image: "/elegant-leather-tote-bag-minimalist.jpg",
    category: "Bags",
    featured: true,
    inStock: true,
  },
  {
    id: "2",
    name: "Ceramic Coffee Set",
    description: "Artisan-made ceramic coffee set. Includes four cups and a matching carafe.",
    price: 145,
    image: "/modern-ceramic-coffee-set-white.jpg",
    category: "Home",
    featured: true,
    inStock: true,
  },
  {
    id: "3",
    name: "Wool Blend Throw",
    description: "Luxuriously soft merino wool throw blanket in neutral tones.",
    price: 198,
    image: "/luxury-wool-throw-blanket-beige.jpg",
    category: "Home",
    featured: true,
    inStock: true,
  },
  {
    id: "4",
    name: "Brass Desk Lamp",
    description: "Mid-century inspired brass desk lamp with adjustable arm.",
    price: 225,
    image: "/brass-desk-lamp-modern-minimalist.jpg",
    category: "Lighting",
    inStock: true,
  },
  {
    id: "5",
    name: "Linen Shirt",
    description: "Premium European linen shirt in classic fit. Breathable and timeless.",
    price: 128,
    image: "/linen-shirt-beige-minimalist.jpg",
    category: "Apparel",
    featured: true,
    inStock: true,
  },
  {
    id: "6",
    name: "Leather Journal",
    description: "Full-grain leather journal with handmade paper. A timeless companion.",
    price: 89,
    image: "/leather-journal-notebook-brown.jpg",
    category: "Accessories",
    inStock: true,
  },
  {
    id: "7",
    name: "Porcelain Vase",
    description: "Hand-thrown porcelain vase with organic form and matte finish.",
    price: 165,
    image: "/white-porcelain-vase-modern.jpg",
    category: "Home",
    inStock: true,
  },
  {
    id: "8",
    name: "Canvas Backpack",
    description: "Durable waxed canvas backpack with leather straps and brass buckles.",
    price: 245,
    image: "/canvas-backpack-leather-straps.jpg",
    category: "Bags",
    inStock: true,
  },
  {
    id: "9",
    name: "Merino Wool Scarf",
    description: "Soft merino wool scarf in classic herringbone pattern.",
    price: 95,
    image: "/merino-wool-scarf-grey.jpg",
    category: "Apparel",
    inStock: false,
  },
  {
    id: "10",
    name: "Oak Serving Board",
    description: "Solid oak serving board with natural edge. Perfect for entertaining.",
    price: 78,
    image: "/oak-wood-serving-board.jpg",
    category: "Home",
    inStock: true,
  },
  {
    id: "11",
    name: "Cashmere Sweater",
    description: "Pure cashmere crewneck sweater. Incredibly soft and warm.",
    price: 385,
    image: "/cashmere-sweater-cream-color.jpg",
    category: "Apparel",
    featured: true,
    inStock: true,
  },
  {
    id: "12",
    name: "Stoneware Dinner Set",
    description: "Complete dinner set for four in matte stoneware. Dishwasher safe.",
    price: 295,
    image: "/stoneware-dinner-plates-set.jpg",
    category: "Home",
    inStock: true,
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}
