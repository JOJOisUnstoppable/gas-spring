import Image from 'next/image'
import Link from 'next/link'
import parseMarkdownBold from '@/lib/parseMarkdownBold'


interface ProductHeroProps {
  title: string
  description: string
  image: string
  dict: {
    common: {
      home: string
      products: string
    }
  }
  locale: string
}

export function ProductHero({ title, description, image, dict, locale }: ProductHeroProps) {
  return (
    <div className="relative h-[30vh] overflow-hidden">
      {/* 背景图片 */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172B]/45 via-black/20 to-transparent" />
      </div>

      {/* 内容 */}
      <div className="relative container h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white space-y-4">
          <h1 className="flex items-baseline gap-2 text-4xl md:text-5xl font-bold">
            <Link 
              href={`/${locale}`} 
              className="text-lg md:text-xl hover:text-primary transition-colors font-light"
            >
              {parseMarkdownBold(dict.common.home)}
            </Link>
            <span className="text-lg md:text-xl opacity-60">&gt;</span>
            <Link 
              href={`/${locale}/products/category`} 
              className="text-lg md:text-xl hover:text-primary transition-colors font-light"
            >
              {parseMarkdownBold(dict.common.products)}
            </Link>
            <span className="text-lg md:text-xl opacity-60">&gt;</span>
            {title}
          </h1>
          <p className="text-lg md:text-xl">
            {parseMarkdownBold(description)}
          </p>
        </div>
      </div>
    </div>
  )
}
