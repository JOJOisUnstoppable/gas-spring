
import { Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { ProductCard } from '@/components/products/ProductCard'
import { ProductHero } from '@/components/products/ProductHero'
import { getProductData, getProductsByCategory } from '@/lib/products'
import { notFound } from 'next/navigation'

export default async function ProductPage(
  props: {
    params: Promise<{ locale: Locale; id: string }>
  }
) {
  const params = await props.params;

  const {
    locale,
    id
  } = params;

  const products = await getProductsByCategory(locale, id)
  const dict = await getDictionary(locale)

  return (
    <>
      <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <span>Maintenance / 维护中</span>
      </div>
    </>
  )
}