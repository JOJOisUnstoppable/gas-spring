/**
 * @file ProductHero.tsx
 * @description 产品英雄区域组件，显示全宽背景图、面包屑导航、标题和描述。
 */

import Image from 'next/image'
import Link from 'next/link'
import parseMarkdownBold from '@/lib/parseMarkdownBold'


interface ProductHeroProps {
  /** 标题 */
  title: string
  /** 描述 */
  description: string
  /** 背景图片路径 */
  image: string
  /** 国际化字典 */
  dict: {
    common: {
      home: string
      products: string
    }
  }
  /** 当前语言环境 */
  locale: string
}

/**
 * 产品英雄区域组件
 * @param props 组件属性
 * @returns JSX.Element
 */
export function ProductHero({ title, description, image, dict, locale }: ProductHeroProps) {
  return (
    <div className="relative h-[15vh] overflow-hidden">
      {/* 背景图片 */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172B]/55 via-black/40 to-transparent" />
      </div>

      {/* 内容 */}
      <div className="relative container h-full flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white space-y-4 text-center">
          <h1 className="flex items-baseline justify-center gap-2 text-4xl md:text-5xl font-bold">
            <Link 
              href={`/${locale}`} 
              className="text-lg md:text-xl hover:text-primary transition-colors font-light"
            >
              {parseMarkdownBold(dict.common.home)}
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
