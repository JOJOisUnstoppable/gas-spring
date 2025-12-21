import { Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { ProductHero } from '@/components/products/ProductHero'
import CompressionGasSpring from '@/components/products/CompressionGasSpring'

export default async function Page(
  props: {
    params: Promise<{ locale: Locale }>
  }
) {
  const params = await props.params
  const { locale } = params
  const dict = await getDictionary(locale)

  return (
    <>
      <section id="hero">
        <ProductHero
          title={'Compression Gas Spring'}
          description={'Industrial-grade gas spring for controlled motion, stable force, and durable lifecycle.'}
          image={'/images/products_page/compress_gas_spring.jpg'}
          dict={{ common: { home: dict.common.home, products: dict.common.products } }}
          locale={locale}
        />
      </section>
      <CompressionGasSpring />
    </>
  )
}
