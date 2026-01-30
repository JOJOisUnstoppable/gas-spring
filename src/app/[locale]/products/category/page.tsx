
import { Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { ProductCard } from '@/components/products/ProductCard'
import { ProductHero } from '@/components/products/ProductHero'
import { getProductData, getProductsByCategory } from '@/lib/products'
import { notFound } from 'next/navigation'
import { CategoryIntroduction } from '@/components/products/CategoryIntroduction'
import ImageInputForm from "@/components/products/ImageInputForm"
import HowtoChooseGS from '@/components/products/HowtoChooseGS'
import HowGSWork from '@/components/products/HowGSWork'
import CalculationF1 from '@/components/products/CalculationF1'
import GSInstallationGuide from '@/components/products/GSInstallationGuide'
import CTA from '@/components/products/CTA'
import SidebarDirectory from '@/components/products/SidebarDirectory'
import Image from 'next/image'

/**
 * CategoryPage Component
 * 
 * 展示产品分类详情页面，采用 SolarDamper 风格布局
 * 包含顶部吸附导航和主要内容区域
 */
export default async function CategoryPage(
  props: {
    params: Promise<{ locale: Locale }>
  }
) {
  const params = await props.params;
  const { locale } = params;

  // 对于静态路由 gas-spring，直接使用硬编码的 id
  const id = 'gas-spring';

  const { categories } = await getProductData(locale)
  const products = await getProductsByCategory(locale, id)
  const dict = await getDictionary(locale)

  const category = categories.find(cat => cat.id === id)

  if (!category) {
    notFound()
  }

  return (
    <div className="relative min-h-screen w-full bg-background selection:bg-primary/10 selection:text-primary">
      {/* 背景样式 - 模仿 SolarDamperPage */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#ffffff33_1px,transparent_1px)]"></div>

      {/* Hero Section */}
      <section id="hero" className="scroll-mt-24">
        <ProductHero
          title={category.title}
          description={category.description}
          image={category.image}
          dict={dict}
          locale={locale}
        />
      </section>

      {/* 顶部吸附导航 */}
      <SidebarDirectory navigationItems={dict.products['gas-spring'].Navigation} />


      {/* What is Gas Spring */}
      <section id="what-is-gas-spring" className="scroll-mt-24">
        <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <CategoryIntroduction
            whatIsTitle={dict.products['gas-spring'].whatIsGS.title}
            whatIsDesc={dict.products['gas-spring'].whatIsGS.description}
            id={id}
            locale={locale}
          />
        </div>
      </section>

      {/* Product Series */}
      <section id="product-series" className="scroll-mt-24 bg-slate-50/80">
        <div className="pt-6 md:pt-8 lg:pt-10 pb-6 md:pb-8 lg:pb-10 ">
          <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="container px-4 md:px-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {dict.products['gas-spring'].productSeries?.title || 'Product Series'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={{
                        id: product.id,
                        name: product.title,
                        description: product.description,
                        images: [product.image]
                      }}
                      locale={locale}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Series */}
      <section id="accessories-series" className="scroll-mt-24">
        <div className="pt-6 md:pt-8 lg:pt-10 pb-6 md:pb-8 lg:pb-10">
          <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="container px-4 md:px-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {dict.products['gas-spring'].accessoriesSeries?.title || 'Accessories Series'}
                </h2>
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-full relative h-[400px] md:h-[600px] lg:h-[700px]">
                    <Image
                      src='/images/products_page/accessories.png'
                      alt='gas-spring-accessories-picture'
                      fill={true}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      className="rounded-lg shadow-lg object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* How Gas Spring Work */}
      <section id="how-gs-work" className="scroll-mt-24">
        <HowGSWork
          mainTitle={dict.products['gas-spring'].howGSWork.title}
          mainContent={dict.products['gas-spring'].howGSWork.desc}
          subTitle1={dict.products['gas-spring'].howGSWork.KeyBehavior.title}
          subContent1={dict.products['gas-spring'].howGSWork.KeyBehavior.desc}
          imageSrc={'/images/products_page/HowGSWork.png'}
          imageAlt={'Gas Spring Force Curve'}
          imageCaption={dict.products['gas-spring'].howGSWork.KeyBehavior.imageCaption}
          subTitle2={dict.products['gas-spring'].howGSWork.CriticalPerformanceMeasure.title}
          frontdesc={dict.products['gas-spring'].howGSWork.CriticalPerformanceMeasure.frontdesc}
          subContent2={dict.products['gas-spring'].howGSWork.CriticalPerformanceMeasure.desc}
        />
      </section>

      {/* Replacement / Image Input Form */}
      <section id="replacement" className="scroll-mt-24">
        <ImageInputForm
          title={dict.products['gas-spring'].Replacement.title}
          subtitle={dict.products['gas-spring'].Replacement.subTitle}
          desc={dict.products['gas-spring'].Replacement.desc}
        />
      </section>

      {/* How to Choose */}
      <section id="how-to-choose" className="scroll-mt-24">
        <HowtoChooseGS
          dict={dict}
          imageSrc={'/images/products_page/CalculationF1.png'}
          imageAlt={'GAS Spring Calculation Principle F1'}
        />
      </section>

      {/* Calculation */}
      <section id="calculation" className="scroll-mt-24">
        <CalculationF1
          midTitle1={dict.products['gas-spring'].CalculationF1.EFC.title}
          midDesc1={dict.products['gas-spring'].CalculationF1.EFC.desc}
          midDesc2={dict.products['gas-spring'].CalculationF1.GSDFCC.desc}
        />
      </section>

      {/* Installation */}
      <section id="installation" className="scroll-mt-24">
        <GSInstallationGuide
          imageCaption={dict.products['gas-spring'].GSInstallationGuide.imageCaption}
          title={dict.products['gas-spring'].GSInstallationGuide.title}
          desc={dict.products['gas-spring'].GSInstallationGuide.desc}
        />
      </section>


      {/* CTA */}
      <section id="cta" className="scroll-mt-24 pb-12">
        <CTA
          title={dict.products['gas-spring'].CTA.title}
          desc={dict.products['gas-spring'].CTA.desc}
          locale={locale}
        />
      </section>
    </div>
  )
}
