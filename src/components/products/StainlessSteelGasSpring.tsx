'use client'

import { Button } from '@/components/GasSpringGuide/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/GasSpringGuide/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, Shield, Scale, Thermometer, Anchor, Utensils, Stethoscope } from 'lucide-react'

export type StainlessSteelGasSpringDict = {
  hero?: {
    tag?: string
    title?: string
    subtitle?: string
    ctaPrimary?: string
    ctaSecondary?: string
  }
  intro?: {
    title?: string
    description1?: string
    description2?: string
    checkListTitle?: string
    checkListItems?: string[]
  }
  composition?: {
    title?: string
    items?: { value: string; label: string; note?: string }[]
  }
  comparison?: {
    tag?: string
    title?: string
    subtitle?: string
    tableHeaders?: string[]
    rows?: { feature: string; ss304: string; ss316: string }[]
  }
  specs?: {
    title?: string
    items?: { label: string; value: string }[]
  }
  applications?: {
    title?: string
    items?: { title: string; description: string; recommended: string }[]
  }
  faq?: {
    title?: string
    questions?: { q: string; a: string }[]
  }
  cta?: {
    title?: string
    description?: string
    buttonPrimary?: string
    buttonSecondary?: string
  }
}

export default function StainlessSteelGasSpring({ dict }: { dict?: StainlessSteelGasSpringDict }) {
  const ss = dict ?? {}

  return (
    <div className="flex flex-col w-full font-sans text-slate-700">
      {/* Hero Section */}
      <section id="hero" className="relative py-32 bg-[#1a2332] text-white text-center" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 95%, 0 100%)' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2332]/95 to-[#1a2332]/80 z-0" />
        {/* Optional background image could go here with z-[-1] */}
        
        <div className="container relative z-10 max-w-5xl mx-auto px-6">
          <span className="inline-block py-1 px-3 mb-6 rounded-full bg-white/10 text-[#d4a574] text-xs font-bold uppercase tracking-wider">
            {ss.hero?.tag ?? 'The Ultimate Corrosion Resistance'}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            {ss.hero?.title ?? 'What is a Stainless Steel Gas Spring?'}
          </h1>
          <div className="w-20 h-1 bg-[#d4a574] mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 font-light">
            {ss.hero?.subtitle ?? 'Engineered for extreme environments. Discover why leading industries switch to SS304 and SS316 for longevity, hygiene, and performance.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#d4a574] hover:bg-[#b88d5e] text-white px-8 py-6 text-lg uppercase tracking-wide font-semibold shadow-lg hover:shadow-xl transition-all border-none">
              {ss.hero?.ctaPrimary ?? 'Compare 304 vs 316'}
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1a2332] px-8 py-6 text-lg uppercase tracking-wide font-semibold bg-transparent">
              {ss.hero?.ctaSecondary ?? 'View Applications'}
            </Button>
          </div>
        </div>
      </section>

      {/* Intro & Composition Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a2332] mb-4">
                {ss.intro?.title ?? 'More Than Just "Shiny" Steel'}
              </h2>
              <div className="w-20 h-1 bg-[#d4a574] mb-6"></div>
              <div className="space-y-4 text-lg text-slate-600 mb-8">
                <p dangerouslySetInnerHTML={{ __html: ss.intro?.description1 ?? '' }} />
                <p dangerouslySetInnerHTML={{ __html: ss.intro?.description2 ?? '' }} />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[#1a2332] mb-4">
                  {ss.intro?.checkListTitle ?? 'Why It Matters:'}
                </h3>
                <ul className="space-y-3">
                  {(ss.intro?.checkListItems ?? []).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <Check className="w-5 h-5 text-[#d4a574] mt-1 shrink-0 stroke-[3]" />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Card className="bg-slate-50 border-none shadow-md">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-serif font-bold text-[#1a2332] mb-8">
                  {ss.composition?.title ?? 'Material Composition'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {(ss.composition?.items ?? []).map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded shadow-sm">
                      <div className="text-3xl font-bold text-[#d4a574] mb-1">{item.value}</div>
                      <div className="text-xs font-bold text-slate-500 uppercase">{item.label}</div>
                      {item.note && <div className="mt-2 text-[10px] text-slate-400 leading-tight">{item.note}</div>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-24 bg-slate-50">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 mb-4 rounded-full bg-[#d4a574]/15 text-[#b88d5e] text-xs font-bold uppercase tracking-wider">
              {ss.comparison?.tag ?? 'Selection Guide'}
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1a2332] mb-6 tracking-tight">
              {ss.comparison?.title ?? 'SS304 vs SS316: Which One Do You Need?'}
            </h2>
            <p className="text-lg text-slate-600">
              {ss.comparison?.subtitle ?? 'Choosing the right alloy is critical for cost-efficiency and longevity.'}
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg shadow-xl border border-slate-200 mb-16 bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  {(ss.comparison?.tableHeaders ?? []).map((header, idx) => (
                    <th key={idx} className="p-6 bg-[#1a2332] text-white font-serif text-lg font-normal tracking-wide border-b border-slate-700">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(ss.comparison?.rows ?? []).map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#d4a574]/5 transition-colors border-b border-slate-100 last:border-0">
                    <td className="p-6 font-bold text-[#1a2332] bg-slate-50 border-r border-slate-100 w-1/4">
                      {row.feature}
                    </td>
                    <td className="p-6 text-slate-600" dangerouslySetInnerHTML={{ __html: row.ss304 }} />
                    <td className="p-6 text-slate-600" dangerouslySetInnerHTML={{ __html: row.ss316 }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Specs Grid */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-center text-2xl font-serif font-bold text-[#1a2332] mb-8">
              {ss.specs?.title ?? 'Key Specifications & Standards'}
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {(ss.specs?.items ?? []).map((item, idx) => (
                <div key={idx} className="flex items-center p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#d4a574]/20 text-[#d4a574] flex items-center justify-center mr-4 shrink-0">
                    {idx === 0 ? <Scale size={20} /> : idx === 1 ? <Shield size={20} /> : <Thermometer size={20} />}
                  </div>
                  <div>
                    <div className="font-bold text-[#1a2332]">{item.label}</div>
                    <div className="text-sm text-slate-500 font-['Arial']">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a2332] mb-4">
            {ss.applications?.title ?? 'Industry Applications'}
          </h2>
          <div className="w-20 h-1 bg-[#d4a574] mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {(ss.applications?.items ?? []).map((item, idx) => (
              <Card key={idx} className="h-full hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-slate-200">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-10 h-1.5 bg-[#d4a574] mb-6 rounded-sm"></div>
                  <div className="mb-4">
                    {idx === 0 ? <Anchor className="w-8 h-8 text-[#1a2332] mb-4" /> : 
                     idx === 1 ? <Utensils className="w-8 h-8 text-[#1a2332] mb-4" /> : 
                     <Stethoscope className="w-8 h-8 text-[#1a2332] mb-4" />}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a2332] mb-4">{item.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow">
                    {item.description}
                  </p>
                  <div className="pt-4 border-t border-dashed border-slate-200 mt-auto">
                    <strong className="text-[#1a2332]">{item.recommended}</strong>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a2332] mb-6">
              {ss.faq?.title ?? 'Frequently Asked Questions'}
            </h2>
            <div className="w-20 h-1 bg-[#d4a574] mx-auto"></div>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {(ss.faq?.questions ?? []).map((q, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border border-slate-200 rounded-lg px-2 shadow-sm data-[state=open]:border-[#d4a574]">
                <AccordionTrigger className="px-4 py-4 hover:no-underline text-lg font-semibold text-[#1a2332]">
                  {q.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-slate-600 leading-relaxed text-base">
                  {q.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 relative overflow-hidden bg-gradient-to-br from-[#1a2332] to-[#0f1623] text-white text-center">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="container relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            {ss.cta?.title ?? 'Ready to Upgrade?'}
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            {ss.cta?.description ?? 'Get a detailed quote for your project within 24 hours. We support low MOQ and custom engineering services.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#d4a574] hover:bg-[#b88d5e] text-white px-8 py-6 text-lg uppercase tracking-wide font-semibold shadow-lg hover:shadow-xl transition-all border-none">
              {ss.cta?.buttonPrimary ?? 'Get a Quote'}
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1a2332] px-8 py-6 text-lg uppercase tracking-wide font-semibold bg-transparent">
              {ss.cta?.buttonSecondary ?? 'Download PDF Catalog'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
