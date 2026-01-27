'use client'

import { Button } from '@/components/ui/button'
import CTA from '@/components/products/CTA'
import { Locale } from '@/lib/i18n/config'
import Image from 'next/image'

export type MicroDict = {
  hero: {
    title: string;
    description: string;
    cta: string;
  };
  definition: {
    title: string;
    content: string[];
    quote: string;
  };
  specifications: {
    title: string;
    description: string;
    tableHeaders: string[];
    items: {
      parameter: string;
      spec: string;
      remark: string;
    }[];
  };
  performance: {
    title: string;
    description: string;
    tableHeaders: string[];
    items: {
      indicator: string;
      requirement: string;
      remark: string;
    }[];
  };
  connectors: {
    title: string;
    description: string;
    tableHeaders: string[];
    items: {
      type: string;
      spec: string;
      application: string;
    }[];
  };
  applications: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  faq: {
    title: string;
    description: string;
    items: {
      question: string;
      answer: string;
      tag: string;
    }[];
  };
  cta: {
    title: string;
    desc: string[];
  };
};

interface MicroGasSpringProps {
  dict: MicroDict
  locale: Locale
}

export default function MicroGasSpring({ dict, locale }: MicroGasSpringProps) {
  return (
    <div className="flex flex-col">
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0F172B] via-[#2a5298] to-[#0F172B] text-white">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-bold text-5xl md:text-6xl leading-tight">{dict.hero.title}</h1>
              <p className="text-lg leading-relaxed opacity-90">
                {dict.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="h-10 px-6 bg-[#ff6b35] hover:bg-[#e55a2b] text-white">{dict.hero.cta.split('/')[0]}</Button>
                <Button className="h-10 px-6 bg-transparent border border-white text-white hover:bg-white/10">{dict.hero.cta.split('/')[1]}</Button>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3]">
              <Image 
                alt="Micro Gas Spring Product Image" 
                className="rounded-lg shadow-lg object-cover" 
                src="/images/product/product-gs-003.jpg" 
                fill
              />
            </div>
          </div>
        </div>
      </section>

      <section id="definition" className="py-14 md:py-20 border-b border-border bg-background">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">{dict.definition.title}</h2>
          {dict.definition.content.map((paragraph, index) => (
            <p key={index} className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
          <div className="rounded-md border-l-4 border-primary bg-accent/10 p-5 italic text-primary font-medium mb-6" dangerouslySetInnerHTML={{ __html: dict.definition.quote }} />
        </div>
      </section>

      <section id="specifications" className="py-14 md:py-20 border-b border-border bg-card">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">{dict.specifications.title}</h2>
          <p className="text-muted-foreground mb-6">
            {dict.specifications.description}
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="min-w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  {dict.specifications.tableHeaders.map((header, index) => (
                    <th key={index} className="px-4 py-3 text-left font-semibold border border-border">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="[&>tr:nth-child(even)]:bg-muted/50">
                {dict.specifications.items.map((item, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 border border-border" dangerouslySetInnerHTML={{ __html: item.parameter }} />
                    <td className="px-4 py-3 border border-border" dangerouslySetInnerHTML={{ __html: item.spec }} />
                    <td className="px-4 py-3 border border-border" dangerouslySetInnerHTML={{ __html: item.remark }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-b border-border bg-background">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">{dict.performance.title}</h2>
          <p className="text-muted-foreground mb-6" dangerouslySetInnerHTML={{ __html: dict.performance.description }} />
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="min-w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  {dict.performance.tableHeaders.map((header, index) => (
                    <th key={index} className="px-4 py-3 text-left font-semibold border border-border">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="[&>tr:nth-child(even)]:bg-muted/50">
                {dict.performance.items.map((item, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 border border-border" dangerouslySetInnerHTML={{ __html: item.indicator }} />
                    <td className="px-4 py-3 border border-border" dangerouslySetInnerHTML={{ __html: item.requirement }} />
                    <td className="px-4 py-3 border border-border" dangerouslySetInnerHTML={{ __html: item.remark }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-b border-border bg-card">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">{dict.connectors.title}</h2>
          <p className="text-muted-foreground mb-6">
            {dict.connectors.description}
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="min-w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  {dict.connectors.tableHeaders.map((header, index) => (
                    <th key={index} className="px-4 py-3 text-left font-semibold border border-border">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="[&>tr:nth-child(even)]:bg-muted/50">
                {dict.connectors.items.map((item, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 border border-border" dangerouslySetInnerHTML={{ __html: item.type }} />
                    <td className="px-4 py-3 border border-border" dangerouslySetInnerHTML={{ __html: item.spec }} />
                    <td className="px-4 py-3 border border-border" dangerouslySetInnerHTML={{ __html: item.application }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="applications" className="py-14 md:py-20 border-b border-border bg-background">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">{dict.applications.title}</h2>
          <p className="text-muted-foreground mb-6">
            {dict.applications.description}
          </p>
          <ul className="space-y-4">
            {dict.applications.items.map((item, index) => (
              <li key={index} className="p-4 border-b border-border">
                <span className="font-semibold text-primary">{item.title}</span> <span dangerouslySetInnerHTML={{ __html: item.description }} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="faq" className="py-14 md:py-20 border-b border-border bg-card">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">{dict.faq.title}</h2>
          <p className="text-muted-foreground mb-6">
            {dict.faq.description}
          </p>
          <div className="space-y-4">
            {dict.faq.items.map((item, index) => (
              <div key={index} className="rounded-md border border-border bg-muted/50 p-5 border-l-4 border-l-primary">
                <div className="font-bold text-primary mb-2">{item.question}</div>
                <div className="text-muted-foreground">
                  <span dangerouslySetInnerHTML={{ __html: item.answer }} />
                  <div className="inline-block mt-2 rounded bg-[#ff6b35] text-white text-xs px-2 py-1">{item.tag}</div>
                </div>
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