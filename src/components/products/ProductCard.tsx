import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ProductCardProps {
  product: {
    id: string
    name: string
    description: string
    images: string[]
  }
  locale: string
}

export function ProductCard({ product, locale }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="py-3">
        <CardTitle className="text-base font-semibold line-clamp-1">
          {product.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between py-2">
        <p className="text-sm text-gray-600 line-clamp-3 mb-3">
          {product.description}
        </p>
        <Link 
          href={`/${locale}/products/${product.id}`}
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
        >
          <span>Talk to us</span>
          <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
        </Link>
      </CardContent>
    </Card>
  )
}