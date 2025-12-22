import { Locale } from '@/lib/i18n/config'
import CompressionGasSpring from '@/components/products/CompressionGasSpring'

export default async function Page(
  props: {
    params: Promise<{ locale: Locale }>
  }
) {
  const params = await props.params
  const { locale } = params

  return (
    <>
      <CompressionGasSpring />
    </>
  )
}
