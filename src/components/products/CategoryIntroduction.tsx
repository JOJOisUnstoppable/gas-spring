/**
 * @file CategoryIntroduction.tsx
 * @description 产品类别介绍组件，展示WhatIs
 */

'use client'

import Image from 'next/image';
import { categoryConfig } from '@/components/products/categoryConfig';

interface CategoryIntroductionProps {
  locale?: string;
  id?: string;
}

/**
 * Category 产品分类介绍组件
 * @param props - 组件属性
 * @param props.locale - 语言代码
 * @param props.id - 产品分类id
 */
export function CategoryIntroduction({ locale = 'en', id }: CategoryIntroductionProps) {

  return (
    <section className="max-w-7xl mx-auto w-full py-12 md:py-12 lg:py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {id && locale && categoryConfig[id as 'gas-spring' | 'damper'][locale as 'zh' | 'en' | 'es' | 'de'].whatIsTitle}
            </h2>
            <p className="text-muted-foreground text-lg">
             {id && locale && categoryConfig[id as 'gas-spring' | 'damper'][locale as 'zh' | 'en' | 'es' | 'de'].whatIsDesc}
            </p>
            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-bold">
                {id && locale && categoryConfig[id as 'gas-spring' | 'damper'][locale as 'zh' | 'en' | 'es' | 'de'].principalTitle}</h3>
              <p className="text-muted-foreground">
                {id && locale && categoryConfig[id as 'gas-spring' | 'damper'][locale as 'zh' | 'en' | 'es' | 'de'].principalDesc}
              </p>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <Image
              src="/images/spotlights/solar-damper/solar_damper_product.jpg"
              alt="Solar Damper Product"
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