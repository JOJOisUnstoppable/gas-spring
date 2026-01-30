
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import {
  MinimalCard,
  MinimalCardDescription,
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

/**
 * 产品卡片组件
 * 展示产品图片、名称、描述和详情链接
 * 包含悬停动画和交互效果
 */
export function ProductCard({ product, locale }: ProductCardProps) {
  return (
    <div className="h-full group">
      <MinimalCard className="h-full flex flex-col !bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/50 hover:-translate-y-1 overflow-hidden">
        {/* 图片区域 - 自定义以支持缩放动画 */}
        <div className="relative h-[228px] w-full rounded-[20px] mb-6 overflow-hidden bg-slate-200">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="rounded-[16px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* 图片遮罩层，增加质感 - 浅色模式下使用极淡的渐变或移除 */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="flex-1 flex flex-col justify-between p-1 relative z-10">
          <div>
            <MinimalCardTitle className="text-lg font-bold leading-tight mb-3 text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
              {product.name}
            </MinimalCardTitle>
            <MinimalCardDescription className="text-sm text-slate-600 mb-6 group-hover:text-slate-800 transition-colors duration-300">
              <div className="line-clamp-3 leading-relaxed tracking-wide">
                {product.description}
              </div>
            </MinimalCardDescription>
          </div>
          <MinimalCardFooter className="p-0 mt-auto">
            <Link
              href={`/${locale}/products/category/${product.id}`}
              className="group/btn w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-all duration-300 shadow-lg shadow-blue-200/50 hover:shadow-blue-300/60 relative overflow-hidden"
            >
              <span className="relative z-10">Read More</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 relative z-10" />
              {/* 按钮光效 */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-white/20 to-blue-500/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            </Link>
          </MinimalCardFooter>
        </div>
      </MinimalCard>
    </div>
  )
}