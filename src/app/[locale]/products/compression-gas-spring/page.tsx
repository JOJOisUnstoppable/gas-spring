import { getDictionary } from '@/lib/i18n/getDictionary'
import { Locale } from '@/lib/i18n/config'
import CompressionGasSpring from '@/components/products/CompressionGasSpring'
import CTA from '@/components/products/CTA'

export default async function Page(
  props: {
    params: { locale: Locale }
  }
) {
  const dict = await getDictionary(props.params.locale)

  return (
    <>
      <CompressionGasSpring dict={dict.products['compression-gas-spring']} />
      <CTA
        title={'Ready to Get Started?'}
        desc={[
          "Contact our sales engineers today for detailed technical drawings, customized services, or sample testing.",
          "We will provide you with the most professional Push-to-Unlock Gas Spring solution."
        ]}
        locale={props.params.locale}
      />
    </>
  )
}
