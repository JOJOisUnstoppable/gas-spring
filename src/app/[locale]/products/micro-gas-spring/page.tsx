import { Locale } from '@/lib/i18n/config'
import MicroGasSpring from '@/components/products/MicroGasSpring'
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
      <MicroGasSpring />
      <section id="cta">
        <CTA
          title={'Ready to Find Your Perfect Micro Gas Spring?'}
          desc={[
            'Our technical team is ready to assist with selection, customization, and rapid delivery.',
            'Contact us today for a detailed quotation or technical consultation.'
          ]}
          locale={locale}
        />
      </section>
    </>
  )
}
