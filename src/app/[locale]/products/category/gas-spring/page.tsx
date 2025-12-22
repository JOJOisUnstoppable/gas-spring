
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
import FloatingNavMenu from '@/components/products/FloatingNavMenu'
import Image from 'next/image'

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
    <>
      {/* 悬浮内容菜单 */}
      <FloatingNavMenu navigationItems={dict.products['gas-spring'].Navigation} />

      {/*hero*/}
      <section id="hero">
        <ProductHero
          title={category.title}
          description={category.description}
          image={category.image}  // 传入分类图片
          dict={dict}
          locale={locale}
        />
      </section>

      {/*what is gas spring*/}
      <section id="what-is-gas-spring">
        <CategoryIntroduction
          whatIsTitle={dict.products['gas-spring'].whatIsGS.title}
          whatIsDesc={dict.products['gas-spring'].whatIsGS.description}
          id={id}
          locale={locale}
        />
      </section>

      {/* 产品系列 卡片 */}
      <section id="product-series">
        <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {dict.products['gas-spring'].productSeries?.title || 'Product Series'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
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
          <h2 className="text-3xl font-bold text-gray-900 mt-12">
            {'Gas Spring Accessories'}
          </h2>
          <div className="flex flex-col items-center space-y-4 mt-12">
            <div className="w-full max-w-7xl relative h-[700px]">
              <Image
                src='/images/products_page/accessories.png'
                alt='gas-spring-accessories-picture'
                fill={true}
                sizes="100vw"
                className="rounded-lg shadow-lg object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How GAS Spring work */}
      < section id="how-gs-work" >
        <HowGSWork
          mainTitle={dict.products['gas-spring'].howGSWork.title}
          mainContent={dict.products['gas-spring'].howGSWork.desc}
          subTitle1={dict.products['gas-spring'].howGSWork.KeyBehavior.title}
          subContent1={dict.products['gas-spring'].howGSWork.KeyBehavior.desc}
          imageSrc={'/images/products_page/HowGSWork.png'}
          imageAlt={'GAS Spring Key Behavior: Pressure vs. Volume'}
          imageCaption={dict.products['gas-spring'].howGSWork.KeyBehavior.imageCaption}
          subTitle2={dict.products['gas-spring'].howGSWork.CriticalPerformanceMeasure.title}
          frontdesc={dict.products['gas-spring'].howGSWork.CriticalPerformanceMeasure.frontdesc}
          subContent2={dict.products['gas-spring'].howGSWork.CriticalPerformanceMeasure.desc}
        />
      </section >

      {/* GAS Spring 型号选择器 */}
      < section id="replacement" >
        <ImageInputForm
          title={dict.products['gas-spring'].Replacement.title}
          subtitle={dict.products['gas-spring'].Replacement.subTitle}
          desc={dict.products['gas-spring'].Replacement.desc}
        />
      </section >

      {/* How to choose gas spring */}
      < section id="how-to-choose" >
        <HowtoChooseGS
          dict={dict}
          imageSrc={'/images/products_page/CalculationF1.png'}
          imageAlt={'GAS Spring Calculation Principle F1'}
        />
      </section >

      {/* Calculation Principle F1 */}
      < section id="calculation" >
        <CalculationF1
          midTitle1={dict.products['gas-spring'].CalculationF1.EFC.title}
          midDesc1={dict.products['gas-spring'].CalculationF1.EFC.desc}
          midDesc2={dict.products['gas-spring'].CalculationF1.GSDFCC.desc}
        />
      </section >

      {/* Gas spring Installation Guideline  */}
      < section id="installation" >
        <GSInstallationGuide
          imageCaption={dict.products['gas-spring'].GSInstallationGuide.imageCaption}
          title={dict.products['gas-spring'].GSInstallationGuide.title}
          desc={dict.products['gas-spring'].GSInstallationGuide.desc}
        />
      </section >

      {/* CTA */}
      < section id="cta" >
        <CTA
          title={dict.products['gas-spring'].CTA.title}
          desc={dict.products['gas-spring'].CTA.desc}
          locale={locale}
        />
      </section >
    </>
  )
}