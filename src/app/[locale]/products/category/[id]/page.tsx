
import { Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { ProductCard } from '@/components/products/ProductCard'
import { ProductHero } from '@/components/products/ProductHero'
import { getProductData, getProductsByCategory } from '@/lib/products'
import { notFound } from 'next/navigation'
import { categoryConfig } from '@/components/products/categoryConfig'
import { CategoryIntroduction } from '@/components/products/CategoryIntroduction'

export default async function CategoryPage(
  props: {
    params: Promise<{ locale: Locale; id: string }>
  }
) {
  const params = await props.params;

  const {
    locale,
    id
  } = params;

  const { categories } = await getProductData(locale)
  const products = await getProductsByCategory(locale, id)
  const dict = await getDictionary(locale)

  const category = categories.find(cat => cat.id === id)
  if (!category) {
    notFound()
  }

  return (
    <>
      <ProductHero
        title={category.title}
        description={category.description}
        image={category.image}  // 传入分类图片
        dict={dict}
        locale={locale}
      />

      <CategoryIntroduction
        id={id}
        locale={locale}
      />

      <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
    </>
  )
}