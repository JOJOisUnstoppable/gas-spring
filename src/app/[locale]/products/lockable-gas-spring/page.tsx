import { Locale } from '@/lib/i18n/config'
import LockableGasSpring from '@/components/products/LockableGasSpring'

export default async function Page(
  props: {
    params: Promise<{ locale: Locale }>
  }
) {
  const params = await props.params
  const { locale } = params

  return (
    <>
      <LockableGasSpring />
    </>
  )
}
