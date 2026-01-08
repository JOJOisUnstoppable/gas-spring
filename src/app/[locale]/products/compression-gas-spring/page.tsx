import { getDictionary } from '@/lib/i18n/getDictionary'
import { Locale } from '@/lib/i18n/config'
import CompressionGasSpring from '@/components/products/CompressionGasSpring'
import CTA from '@/components/products/CTA'

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
      <CompressionGasSpring dict={dict.products['compression-gas-spring']} locale={locale} />
      <section id="cta">
        <CTA
          title={dict.products['lockable-gas-spring'].CTA?.title ?? 'Ready to Find Your Perfect Lockable Gas Spring?'}
          desc={dict.products['lockable-gas-spring'].CTA?.desc ?? [
            'Our technical team is ready to assist with selection, customization, and rapid delivery.',
            'Contact us today for a detailed quotation or technical consultation.'
          ]}
          locale={locale}
        />
      </section>
    </>
  )
}
