/**
 * @file CategoryIntroduction.tsx
 * @description 产品类别介绍组件，展示WhatIs
 */

'use client'

import parseMarkdownBold from '@/lib/parseMarkdownBold'
import Image from 'next/image'



interface CategoryIntroductionProps {
  locale?: string;
  id?: string;
  whatIsTitle?: string;
  whatIsDesc?: string[];
  principalTitle?: string;
  principalDesc?: string;
}

/**
 * Category 产品分类介绍组件
 * @param props - 组件属性
 * @param props.locale - 语言代码
 * @param props.id - 产品分类id
 */
export function CategoryIntroduction({ locale = 'en', id, whatIsTitle, whatIsDesc }: CategoryIntroductionProps) {
  if (!id || !locale) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto w-full pt-12 md:pt-16 lg:pt-20 pb-6 md:pb-8 lg:pb-10 bg-background">
      <div className="container px-4 md:px-6">
        {/* 修改 grid 布局比例：lg:grid-cols-3，文字占 col-span-2 (2/3)，图片占 col-span-1 (1/3) */}
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 items-center">
          <div className="space-y-4 lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {whatIsTitle || 'What is Gas Spring'}
            </h2>
            {/* 遍历 whatIsDesc 数组，为每个描述项创建一个 <p> 标签 */}
            <div className="space-y-4">
              {Array.isArray(whatIsDesc) && whatIsDesc.map((desc, index) => (
                <p key={index} className="text-muted-foreground text-lg leading-relaxed">
                  {parseMarkdownBold(desc)}
                </p>
              ))}
            </div>
          </div>
          {/* 图片占 lg:col-span-1，在移动端自动堆叠在下方 */}
          <div className="relative aspect-square overflow-hidden rounded-xl max-w-md mx-auto w-full lg:col-span-1">
            <Image
              src="/images/product/gas-spring/what-is-gas-spring.png"
              alt="Gas Spring Product"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
