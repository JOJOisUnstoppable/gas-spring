
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
  MinimalCardFooter,
} from "@/components/ui/minimal-card"

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
    <div className="h-full">
      <MinimalCard className="h-full flex flex-col !bg-[#0F172B] border-0">
        <MinimalCardImage
          src={product.images[0]}
          alt={product.name}
          className=""
        />
        <div className="flex-1 flex flex-col justify-between p-1">
          <div>
            <MinimalCardTitle className="text-lg font-semibold leading-tight mb-2 text-white">
              {product.name}
            </MinimalCardTitle>
            <MinimalCardDescription className="text-sm text-gray-300 mb-4 overflow-hidden">
              <div className="line-clamp-3 leading-relaxed">
                {product.description}
              </div>
            </MinimalCardDescription>
          </div>
          <MinimalCardFooter className="p-0 mt-auto">
            <Link
              href={`/${locale}/products/category/${product.id}`}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg"
            >
              Read More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MinimalCardFooter>
        </div>
      </MinimalCard>
    </div>
  )
}