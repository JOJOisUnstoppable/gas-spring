
import { Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { getProductDetailsById } from '@/lib/products'
import { ProductHero } from '@/components/products/ProductHero'
import { CategoryIntroduction } from '@/components/products/CategoryIntroduction'
import KeyComponentsGrid from '@/components/products/KeyComponentsGrid'
import InstallAndUsage from '@/components/products/InstallAndUsage'
import CTA from '@/components/products/CTA'
import Image from 'next/image'
import parseMarkdownBold from '@/lib/parseMarkdownBold'

export default async function ProductPage(
  props: {
    params: Promise<{ locale: Locale; id: string }>
  }
) {
  const params = await props.params
  const { locale, id } = params

  const product = await getProductDetailsById(locale, id)
  const dict = await getDictionary(locale)

  if (!product) {
    return (
      <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <span>Page Maintenance </span>
      </div>
    )
  }

  return (
    <>
      <section id="hero">
        <ProductHero
          title={product.title}
          description={product.description}
          image={product.image}
          dict={{ common: { home: dict.common.home, products: dict.common.products } }}
          locale={locale}
        />
      </section>
      
      <section id="overview-summary">
        <div className="container max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-border">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                {product.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {parseMarkdownBold(
                  product.WhatIsCGSParts?.StruAndFunc?.Desc || product.description
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="what-is">
        <CategoryIntroduction
          locale={locale}
          id={product.id}
          whatIsTitle={product.WhatIsCGSParts?.Title || product.title}
          whatIsDesc={
            product.WhatIsCGSParts?.StruAndFunc?.Desc
              ? [product.WhatIsCGSParts.StruAndFunc.Desc]
              : [product.description]
          }
        />
      </section>

      {product.WhatIsCGSParts?.StruAndFunc?.Title && (
        <section id="structure-function" className="max-w-7xl mx-auto w-full py-8 bg-background">
          <div className="container px-4 md:px-6 space-y-4">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl text-foreground">
              {product.WhatIsCGSParts.StruAndFunc.Title}
            </h3>
            {product.WhatIsCGSParts.StruAndFunc.Desc && (
              <p className="text-muted-foreground text-lg leading-relaxed">
                {parseMarkdownBold(product.WhatIsCGSParts.StruAndFunc.Desc)}
              </p>
            )}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-full max-w-4xl relative h-96">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="100vw"
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      <section id="key-components">
        <KeyComponentsGrid
          title={product.WhatIsCGSParts?.KeyComponents?.Title}
          components={product.WhatIsCGSParts?.KeyComponents?.List}
        />
      </section>

      <section id="installation-usage">
        <InstallAndUsage
          title={product.InstallAndUsage?.Title}
          installation={{
            title: product.InstallAndUsage?.Installation?.Title,
            desc: product.InstallAndUsage?.Installation?.Desc,
          }}
          usage={{
            title: product.InstallAndUsage?.Usage?.Title,
            desc: product.InstallAndUsage?.Usage?.Desc,
          }}
        />
      </section>

      <section id="cta">
        <CTA
          title={dict.products['gas-spring'].CTA.title}
          desc={dict.products['gas-spring'].CTA.desc}
          locale={locale}
        />
      </section>
      
      <style>{`
        [data-slot="tabs-trigger"][data-state="active"] {
          background-color: hsl(var(--accent));
          color: hsl(var(--foreground));
          border-color: hsl(var(--border));
          box-shadow: 0 0 0 1px hsl(var(--border)), 0 0 0 3px hsla(var(--ring), 0.5);
          font-weight: 600;
        }
        [data-slot="tabs-trigger"][data-state="inactive"] {
          color: hsl(var(--muted-foreground));
          background-color: transparent;
          border-color: transparent;
          opacity: 0.9;
        }
      `}</style>
    </>
  )
}
