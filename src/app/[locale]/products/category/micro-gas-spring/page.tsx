import { Locale } from '@/lib/i18n/config'
import MicroGasSpring from '@/components/products/MicroGasSpring'
import { getDictionary } from '@/lib/i18n/getDictionary'

export default async function Page(
  props: {
    params: Promise<{ locale: Locale }>
  }
) {
  const params = await props.params
  const { locale } = params
  const dict = await getDictionary(locale)

  return (
    <MicroGasSpring dict={dict.products['micro-gas-spring']} locale={locale} />
  )
}
