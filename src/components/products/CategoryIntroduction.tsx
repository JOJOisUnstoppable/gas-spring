/**
 * @file CategoryIntroduction.tsx
 * @description 产品类别介绍组件，展示WhatIs
 */

'use client'

import Image from 'next/image';

interface CategoryIntroductionProps {
  locale?: string;
  id?: string;
  whatIsTitle?: string;
  whatIsDesc?: string;
  principalTitle?: string;
  principalDesc?: string;
  image?: string;
}

/**
 * Category 产品分类介绍组件
 * @param props - 组件属性
 * @param props.locale - 语言代码
 * @param props.id - 产品分类id
 */
export function CategoryIntroduction({ locale = 'en', id, whatIsTitle, whatIsDesc, principalTitle, principalDesc, image }: CategoryIntroductionProps) {
  if (!id || !locale) {
    return null;
  }

  // 如果没有图片或标题，不渲染图片部分
  if (!image || !whatIsTitle) {
    return (
      <section className="max-w-7xl mx-auto w-full py-12 md:py-12 lg:py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {whatIsTitle || '产品介绍'}
            </h2>
            <p className="text-muted-foreground text-lg">
             {whatIsDesc}
            </p>
            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-bold">
                {principalTitle}
              </h3>
              <p className="text-muted-foreground">
                {principalDesc}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto w-full py-12 md:py-12 lg:py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {whatIsTitle}
            </h2>
            <p className="text-muted-foreground text-lg">
             {whatIsDesc}
            </p>
            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-bold">
                {principalTitle}
              </h3>
              <p className="text-muted-foreground">
                {principalDesc}
              </p>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <Image
              src={image}
              alt={whatIsTitle}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}