import { Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/getDictionary'
import LockableGasSpring from '@/components/products/LockableGasSpring'
import CTA from '@/components/products/CTA'
import LockableStickyNav from '@/components/products/LockableStickyNav'

export default async function Page(
  props: {
    params: Promise<{ locale: Locale }>
  }
) {
  const params = await props.params
  const { locale } = params
  const dict = await getDictionary(locale)

  return (
    <div className="relative min-h-screen w-full bg-background selection:bg-primary/10 selection:text-primary">
      {/* 背景样式 - 模仿 SolarDamperPage */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#ffffff33_1px,transparent_1px)]"></div>

      {/* 顶部吸附导航 */}
      <LockableStickyNav navigationItems={dict.products['lockable-gas-spring'].Navigation} />

      <LockableGasSpring dict={dict.products['lockable-gas-spring']} />
      
      <section id="cta" className="scroll-mt-24">
        <CTA
          title={dict.products['lockable-gas-spring'].CTA?.title ?? 'Ready to Find Your Perfect Lockable Gas Spring?'}
          desc={dict.products['lockable-gas-spring'].CTA?.desc ?? [
            'Our technical team is ready to assist with selection, customization, and rapid delivery.',
            'Contact us today for a detailed quotation or technical consultation.'
          ]}
          locale={locale}
        />
      </section>
    </div>
  )
}
