import { getDictionary } from '@/lib/i18n/getDictionary'
import { Locale } from '@/lib/i18n/config'
import { Hero } from '@/components/home/Hero'
import { Features } from '@/components/home/Features'
import { Service } from '@/components/home/Service'
import { CategoryCard } from '@/components/products/CategoryCard'
import { ApplicationGrid } from '@/components/applications/ApplicationGrid'
import { getProductData } from '@/lib/products'
import { getApplicationData } from '@/lib/applications'
import { BentoGrid } from "@/components/magicui/bento-grid"
import { Contact } from '@/components/home/Contact'

export default async function Home(
  props: {
    params: Promise<{ locale: Locale }>
  }
) {
  const params = await props.params;

  const {
    locale
  } = params;

  const dict = await getDictionary(locale)
  const { categories, content } = await getProductData(locale)
  const { applications } = await getApplicationData(locale)

  return (
    <main>
      <Hero dict={dict} locale={locale} />

      <Features dict={dict} />

      <div className="container max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {dict.common.showProducts}
          </h2>
          <div className="text-gray-600 max-w-2xl mx-auto prose"
            dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        <BentoGrid className="grid-cols-1 lg:grid-cols-12 auto-rows-[310px] lg:auto-rows-[430px] [&>*]:transition-[grid-column] [&>*]:duration-500">
          {categories
            .sort((a, b) => a.order - b.order)
            .map((category) => (
              <CategoryCard
                key={category.id}
                category={{
                  id: category.id,
                  name: category.title,
                  description: category.description,
                  image: category.image
                }}
                locale={locale}
                viewMore={dict.applications.viewMoreString}
              />
            ))}
        </BentoGrid>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {dict.applications.description}
            </h2>
          </div>
          <ApplicationGrid
            applications={applications}
            locale={locale}
            dict={dict}
          />
        </div>
      </div>

      <Service dict={dict} />

      <Contact dict={dict} locale={locale} />

    </main>
  )
}