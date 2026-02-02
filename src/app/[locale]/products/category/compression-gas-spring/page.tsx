import { getDictionary } from '@/lib/i18n/getDictionary'
import { Locale } from '@/lib/i18n/config'
import CTA from '@/components/products/CTA'
import { ProductHero } from '@/components/products/ProductHero'
import CompressionStickyNav from '@/components/products/CompressionStickyNav'
import CompressionOverview from '@/components/products/compression/CompressionOverview'
import CompressionSpecs from '@/components/products/compression/CompressionSpecs'
import CompressionTesting from '@/components/products/compression/CompressionTesting'

export default async function Page(
  props: {
    params: Promise<{ locale: Locale }>
  }
) {
  const params = await props.params
  const { locale } = params
  const dict = await getDictionary(locale)
  const productDict = dict.products['compression-gas-spring']

  // 默认导航项，以防字典中未定义
  const defaultNavItems = [
    "Overview",
    "Tech Specs",
    "Testing & Curves",
    "Contact Us"
  ];
  
  const navItems = productDict.Navigation || defaultNavItems;

  return (
    <div className="relative min-h-screen w-full bg-background selection:bg-primary/10 selection:text-primary">
       {/* 背景样式 - 模仿 SolarDamperPage */}
       <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#ffffff33_1px,transparent_1px)]"></div>

      <section id="hero" className="scroll-mt-24">
        <ProductHero
          title={productDict.hero.title}
          description={productDict.hero.subtitle}
          image="/images/products_page/compress_gas_spring.jpg"
          dict={dict}
          locale={locale}
        />
      </section>

      <CompressionStickyNav navigationItems={navItems} />

      <section id="overview" className="scroll-mt-24">
        <CompressionOverview dict={productDict.overview} />
      </section>

      <section id="specs" className="scroll-mt-24 bg-slate-50/80">
        <CompressionSpecs dict={productDict.specs} />
      </section>

      <section id="testing" className="scroll-mt-24">
        <CompressionTesting 
          dict={productDict.testing} 
          forceCurveDict={productDict.GasSpringForceCurve}
        />
      </section>

      <section id="cta" className="scroll-mt-24">
        <CTA
          title={productDict.cta.title}
          desc={productDict.cta.desc}
          locale={locale}
        />
      </section>
    </div>
  )
}
