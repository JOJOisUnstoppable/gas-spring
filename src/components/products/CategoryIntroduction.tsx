/**
 * @file CategoryIntroduction.tsx
 * @description 产品类别介绍组件，展示WhatIs
 */

'use client'

import parseMarkdownBold from '@/lib/parseMarkdownBold'


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
export function CategoryIntroduction({ locale = 'en', id, whatIsTitle, whatIsDesc}: CategoryIntroductionProps) {
  if (!id || !locale) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto w-full py-8 bg-background">
      <div className="container px-4 mt-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground mb-2">
            {whatIsTitle || 'What is Gas Spring'}
          </h2>
          {/* 标题 下划线 */}
          <div className="w-full border-b-3 border-[#0F172B] mb-4"></div>
          {/* 遍历 whatIsDesc 数组，为每个描述项创建一个 <p> 标签 */}
          <div className="space-y-4">
            {Array.isArray(whatIsDesc) && whatIsDesc.map((desc, index) => (
              <p key={index} className="text-muted-foreground text-lg leading-relaxed">
                {parseMarkdownBold(desc)}
              </p>
            ))}
          </div>
      </div>
    </section>
  );
}