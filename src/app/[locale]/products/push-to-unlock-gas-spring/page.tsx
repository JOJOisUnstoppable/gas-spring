import { Locale } from '@/lib/i18n/config'
import PushToUnlockGasSpring from '@/components/products/PushToUnlockGasSpring'
import CTA from '@/components/products/CTA'

export default async function Page(
  props: {
    params: Promise<{ locale: Locale }>
  }
) {
  const params = await props.params
  const { locale } = params

  return (
    <>
      <PushToUnlockGasSpring />
      <section id="cta">
        <CTA
          title={'Ready to Get Started?'}
          desc={[
            "Contact our sales engineers today for detailed technical drawings, customized services, or sample testing.",
            "We will provide you with the most professional Push-to-Unlock Gas Spring solution."
          ]}
          locale={locale}
        />
      </section>
    </>
  )
}
