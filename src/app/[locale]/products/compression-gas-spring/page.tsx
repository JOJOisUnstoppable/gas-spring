import { getDictionary } from '@/lib/i18n/getDictionary'
import { Locale } from '@/lib/i18n/config'
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
    <CompressionGasSpring dict={dict.products['compression-gas-spring']} locale={locale} />
  )
}
