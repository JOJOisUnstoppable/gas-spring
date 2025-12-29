'use client'

import { Button } from '@/components/ui/button'
import { PusDict } from '@/lib/i18n/dictionaries/PusDict'
import CTA from '@/components/products/CTA'
import { Locale } from '@/lib/i18n/config'

interface PushToUnlockGasSpringProps {
  dict: PusDict
  locale: Locale
}

export default function PushToUnlockGasSpring({ dict, locale }: PushToUnlockGasSpringProps) {
  return (
    <div className="flex flex-col">
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0F172B] via-[#2a5298] to-[#0F172B] text-white">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-bold text-5xl md:text-6xl leading-tight" dangerouslySetInnerHTML={{ __html: dict.hero.title }}></h1>
              <p className="text-lg leading-relaxed opacity-90" dangerouslySetInnerHTML={{ __html: dict.hero.subtitle }}></p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="h-10 px-6 bg-[#ff6b35] hover:bg-[#e55a2b] text-white">{dict.hero.cta?.split('/')[0]}</Button>
                <Button className="h-10 px-6 bg-transparent border border-white text-white hover:bg-white/10">{dict.hero.cta?.split('/')[1]}</Button>
              </div>
            </div>
            <div className="relative">
              <img alt="Push-to-Unlock Gas Spring Mechanism" className="w-full h-auto rounded-lg shadow-lg" src="/images/product/gas-spring/push-to-unlock-gas-spring/product_variety.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section id="definition" className="py-16 md:py-24 border-b border-border">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">{dict.definition.title}</h2>
              <div className="space-y-6" dangerouslySetInnerHTML={{ __html: dict.definition.description }}>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-border shadow-sm">
              <img alt="Push-to-Unlock Gas Spring Product Render" className="w-full h-auto object-cover" src="/images/product_render.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section id="mechanism" className="py-16 md:py-24 border-b border-border bg-card">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden border border-border shadow-sm order-2 md:order-1">
              <img alt="Gas Spring Components and Locking Mechanism" className="w-full h-auto object-cover" src="/images/product/gas-spring/push-to-unlock-gas-spring/diagram_locking_mechanism.jpg" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-primary" dangerouslySetInnerHTML={{ __html: dict.mechanism.title }}></h2>
              <div dangerouslySetInnerHTML={{ __html: dict.mechanism.description }}></div>
            </div>
          </div>
        </div>
      </section>

      <section id="specs" className="py-16 md:py-24 border-b border-border">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-primary">{dict.specs.title}</h2>
          <p className="text-muted-foreground mb-8" dangerouslySetInnerHTML={{ __html: dict.specs.description }}></p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold border border-border">{dict.specs.tableHeaders[0]}</th>
                  <th className="text-left py-3 px-4 font-semibold border border-border">{dict.specs.tableHeaders[1]}</th>
                </tr>
              </thead>
              <tbody>
                {dict.specs.items?.map((item, index) => (
                  <tr key={index} className="border-b border-border hover:bg-secondary/50 transition-colors">
                    <td className="py-3 px-4 font-medium">{item.name}</td>
                    <td className="py-3 px-4">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-12 rounded-lg overflow-hidden border border-border shadow-sm">
            <img alt="Push-to-Unlock Gas Spring Product Series" className="w-full h-auto object-cover" src="/images/product/gas-spring/push-to-unlock-gas-spring/product_variety.jpg" />
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 md:py-24 border-b border-border bg-card">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-primary">{dict.faq.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {dict.faq.questions?.map((q, i) => (
              <div key={i} data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                <div data-slot="card-content" className="px-6 pt-6">
                  <h3 className="font-semibold mb-3 text-primary" dangerouslySetInnerHTML={{ __html: q.q }}></h3>
                  <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: q.a }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 border-b border-border">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-primary">{dict.services.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {dict.services.items?.map((item, i) => (
              <div key={i} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <p dangerouslySetInnerHTML={{ __html: item }}></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta">
        <CTA
          title={dict.cta.title}
          desc={dict.cta.desc}
          locale={locale}
        />
      </section>
    </div>
  )
}
