import { Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/getDictionary'
import StainlessSteelGasSpring from '@/components/products/StainlessSteelGasSpring'
import { Metadata } from 'next'

export async function generateMetadata(
  props: {
    params: Promise<{ locale: Locale }>
  }
): Promise<Metadata> {
  const params = await props.params
  const { locale } = params
  const dict = await getDictionary(locale)

  return {
    title: `${dict.products['stainless-steel-gas-spring'].hero?.title} | DKG Gas Spring`,
    description: dict.products['stainless-steel-gas-spring'].hero?.subtitle,
  }
}

export default async function Page(
  props: {
    params: Promise<{ locale: Locale }>
  }
) {
  const params = await props.params
  const { locale } = params
  const dict = await getDictionary(locale)

  return (
    <StainlessSteelGasSpring dict={dict.products['stainless-steel-gas-spring']} />
  )
}
