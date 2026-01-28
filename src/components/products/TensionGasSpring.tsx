'use client'

import { Button } from '@/components/GasSpringGuide/ui/button'
import { Card } from '@/components/GasSpringGuide/ui/card'
import { CheckCircle2, XCircle } from 'lucide-react'

export type TensionGasSpringDict = {
  hero?: {
    title?: string
    subtitle?: string
  }
  interest?: {
    title?: string
    subtitle?: string
    cards?: {
      freeState?: { title?: string; desc?: string }
      assist?: { title?: string; desc?: string }
    }
    specs?: {
      title?: string
      items?: string[]
    }
  }
  desire?: {
    title?: string
    applications?: {
      title?: string
      items?: string[]
    }
    comparison?: {
      title?: string
      single?: string
      double?: string
    }
    tableSection?: {
      title?: string
      headers?: string[]
      rows?: {
        tension?: { type?: string; freeState?: string; opening?: string; closing?: string; assist?: string }
        damper?: { type?: string; freeState?: string; opening?: string; closing?: string; assist?: string }
      }
      note?: string
    }
  }
  action?: {
    title?: string
    desc?: string
    button?: string
    catalogLink?: string
  }
  CTA?: {
    title?: string
    desc?: string[]
  }
}

export default function TensionGasSpring({ dict }: { dict?: TensionGasSpringDict }) {
  const tgs = dict ?? {}

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section id="attention" className="relative py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)', marginBottom: '2rem' }}>
        <div className="container max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            {tgs.hero?.title ?? 'What is a Tension Gas Spring?'}
          </h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto text-blue-50">
            {tgs.hero?.subtitle ?? 'Discover the hidden force that pulls lids, hatches and guards back into place—smoothly, safely and without motors.'}
          </p>
        </div>
      </section>

      {/* Interest Section */}
      <section id="interest" className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              {tgs.interest?.title ?? 'How it works'} <span className="font-light text-muted-foreground">{tgs.interest?.subtitle ?? '(and why it’s different)'}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 border-l-4 border-l-primary bg-card">
              <h3 className="text-xl font-bold mb-4 text-foreground">{tgs.interest?.cards?.freeState?.title ?? '1. Free-state = Rod Retracted'}</h3>
              <div 
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: tgs.interest?.cards?.freeState?.desc ?? '' }}
              />
            </Card>
            <Card className="p-8 border-l-4 border-l-primary bg-card">
              <h3 className="text-xl font-bold mb-4 text-foreground">{tgs.interest?.cards?.assist?.title ?? '2. Self-retracting Assist'}</h3>
              <div 
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: tgs.interest?.cards?.assist?.desc ?? '' }}
              />
            </Card>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 border-b pb-4 text-foreground">
              {tgs.interest?.specs?.title ?? 'Key Specifications Customers Ask For'}
            </h3>
            <ul className="grid md:grid-cols-2 gap-6">
              {(tgs.interest?.specs?.items ?? []).map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full p-1 flex items-center justify-center w-6 h-6">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Desire Section */}
      <section id="desire" className="py-20 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-foreground relative after:content-[''] after:block after:w-16 after:h-1 after:bg-primary after:mt-2">
            {tgs.desire?.title ?? 'Where you’ll see it'}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-bold mb-6 text-foreground">{tgs.desire?.applications?.title ?? 'Typical Applications'}</h3>
              <ul className="space-y-4">
                {(tgs.desire?.applications?.items ?? []).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full p-1 flex items-center justify-center w-6 h-6">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="p-8 bg-background">
              <h3 className="text-xl font-bold mb-4 text-primary">{tgs.desire?.comparison?.title ?? 'Single-tube vs. Double-tube'}</h3>
              <div className="space-y-4 text-muted-foreground">
                <p dangerouslySetInnerHTML={{ __html: tgs.desire?.comparison?.single ?? '' }} />
                <hr className="border-dashed border-border" />
                <p dangerouslySetInnerHTML={{ __html: tgs.desire?.comparison?.double ?? '' }} />
              </div>
            </Card>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              {tgs.desire?.tableSection?.title ?? 'Traction Spring vs. Pure Damper'}
            </h3>
            <div className="overflow-x-auto rounded-lg shadow-sm border bg-background">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    {(tgs.desire?.tableSection?.headers ?? []).map((header, idx) => (
                      <th key={idx} className="p-4 font-semibold">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-muted/50">
                    <td className="p-4 font-bold">{tgs.desire?.tableSection?.rows?.tension?.type}</td>
                    <td className="p-4 text-primary font-medium">{tgs.desire?.tableSection?.rows?.tension?.freeState}</td>
                    <td className="p-4 text-muted-foreground">{tgs.desire?.tableSection?.rows?.tension?.opening}</td>
                    <td className="p-4 text-muted-foreground">{tgs.desire?.tableSection?.rows?.tension?.closing}</td>
                    <td className="p-4 text-emerald-600 font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> {tgs.desire?.tableSection?.rows?.tension?.assist}
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/50">
                    <td className="p-4 font-bold">{tgs.desire?.tableSection?.rows?.damper?.type}</td>
                    <td className="p-4 text-muted-foreground">{tgs.desire?.tableSection?.rows?.damper?.freeState}</td>
                    <td className="p-4 text-muted-foreground">{tgs.desire?.tableSection?.rows?.damper?.opening}</td>
                    <td className="p-4 text-muted-foreground">{tgs.desire?.tableSection?.rows?.damper?.closing}</td>
                    <td className="p-4 text-red-500 font-bold flex items-center gap-2">
                      <XCircle className="w-4 h-4" /> {tgs.desire?.tableSection?.rows?.damper?.assist}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: tgs.desire?.tableSection?.note ?? '' }} />
          </div>
        </div>
      </section>

      {/* Action Section */}
      <section id="action" className="py-20 bg-muted/50">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="bg-background rounded-2xl shadow-lg p-12 text-center border-t-4 border-primary">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{tgs.action?.title ?? 'Need a Custom Tension Spring?'}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto whitespace-pre-line">
              {tgs.action?.desc ?? 'Send us your required force, stroke and end-fitting drawing.\nWe’ll return a detailed quote with FOB & door-to-door freight within 24 h.'}
            </p>
            <div className="flex flex-col items-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-md hover:shadow-xl transition-all">
                {tgs.action?.button ?? 'Request Quote Now'}
              </Button>
              <div className="text-sm text-muted-foreground">
                {tgs.action?.catalogLink}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}