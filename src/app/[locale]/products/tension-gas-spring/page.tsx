import { Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/getDictionary'
import TensionGasSpring from '@/components/products/TensionGasSpring'
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
      <TensionGasSpring dict={dict.products['tension-gas-spring']} />
      <section id="cta">
        <CTA
          title={dict.products['tension-gas-spring'].CTA.title}
          desc={dict.products['tension-gas-spring'].CTA.desc}
          locale={locale}
        />
      </section>
    </>
  )
}
