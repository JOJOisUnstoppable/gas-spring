'use client'

import { Button } from '@/components/ui/button'
import { CompressionDict } from '@/lib/i18n/dictionaries/CompressionDict'

export default function CompressionGasSpring({ dict }: { dict: CompressionDict }) {


  return (
    <div className="flex flex-col">
      <section className="relative py-[var(--space-hero-y)] md:py-[var(--space-hero-y-md)] bg-gradient-to-br from-[#0F172B] via-[#2a5298] to-[#0F172B] text-white">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-[var(--space-hero-gap)] items-center">
            <div className="space-y-[var(--space-block-gap)]">
              <h1 className="font-bold text-5xl md:text-6xl leading-tight mb-[var(--space-title-mb)]">{dict.hero.title}</h1>
              <p className="text-lg leading-relaxed opacity-90">
                {dict.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-[var(--space-grid-gap)] pt-[var(--space-divider-pt)]">
                <Button className="h-10 px-6 bg-[#ff6b35] hover:bg-[#e55a2b] text-white">{dict.hero.cta}</Button>
                <Button className="h-10 px-6 bg-transparent border border-white text-white hover:bg-white/10">Request Quote</Button>
              </div>
            </div>
            <div className="relative">
              <img alt="Compression Gas Spring" className="w-full h-auto rounded-lg shadow-lg" src="/images/products_page/compress_gas_spring.jpg" />
            </div>
          </div>
        </div>
      </section>
      <div className="container max-w-7xl mx-auto py-[var(--space-section-y)] md:py-[var(--space-section-y-md)] px-[var(--space-container-x-sm)] sm:px-[var(--space-container-x-md)] lg:px-[var(--space-container-x-lg)]">
        <div
          dir="ltr"
          data-orientation="horizontal"
          data-slot="tabs"
          className="flex flex-col gap-[var(--space-section-gap)]"
        >

          <div
            role="tabpanel"
            aria-labelledby="radix-tabs-trigger-overview"
            id="radix-tabs-content-overview"
            tabIndex={0}
            data-loc="client/src/pages/Product.tsx:162"
            data-slot="tabs-content"
            className="flex-1 outline-none space-y-[var(--space-block-gap)]"
          >
            <h2 className="text-3xl font-bold text-primary mb-[var(--space-title-mb)]">{dict.overview.tabName}</h2>
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-[var(--space-grid-gap)] rounded-xl border py-[var(--space-card-padding)] shadow-sm"
            >
              <div
                data-slot="card-header"
                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-[var(--space-card-padding)] has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-[var(--space-card-padding)]"
              >
                <div data-slot="card-title" className="leading-none font-semibold">
                  {dict.overview.card.title}
                </div>
              </div>
              <div data-slot="card-content" className="px-[var(--space-card-padding)] prose prose-sm max-w-none">
                <div className="space-y-[var(--space-block-gap)]">
                  <h2 className="mt-6 mb-2 font-semibold text-2xl">
                    {dict.overview.card.content.title}
                  </h2>
                  <p>
                    {dict.overview.card.content.definition}
                  </p>
                  <h3 className="mt-6 mb-2 font-semibold text-xl">{dict.overview.card.content.coreFunction.title}</h3>
                  <p>
                    {dict.overview.card.content.coreFunction.description}
                  </p>
                  <h3 className="mt-6 mb-2 font-semibold text-xl">{dict.overview.card.content.applications.title}</h3>
                  <ul className="ml-4 list-outside list-disc whitespace-normal">
                    {dict.overview.card.content.applications.items.map((item, index) => (
                      <li key={index} className="py-1"><span className="font-semibold">{item.name}</span> {item.value}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            role="tabpanel"
            aria-labelledby="radix-tabs-trigger-specs"
            id="radix-tabs-content-specs"
            tabIndex={0}
            data-slot="tabs-content"
            className="flex-1 outline-none space-y-[var(--space-block-gap)]"
          >
            <h2 className="text-3xl font-bold text-primary mb-[var(--space-title-mb)]">{dict.specs.tabName}</h2>
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-[var(--space-grid-gap)] rounded-xl border py-[var(--space-card-padding)] shadow-sm"
            >
              <div
                data-slot="card-header"
                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-[var(--space-card-padding)] has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-[var(--space-card-padding)]"
              >
                <div data-slot="card-title" className="leading-none font-semibold">
                  {dict.specs.card.title}
                </div>
                <div data-slot="card-description" className="text-muted-foreground text-sm">
                  {dict.specs.card.description}
                </div>
              </div>
              <div data-slot="card-content" className="px-[var(--space-card-padding)] space-y-[var(--space-block-gap)]">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-[var(--space-subtitle-mb)]">{dict.specs.card.techSpecs.title}</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-primary text-white">
                        <tr>
                          {dict.specs.card.techSpecs.table.headers.map((header, index) => (
                            <th key={index} className="text-left py-[var(--space-table-py)] px-[var(--space-table-px)] font-semibold border border-border">{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {dict.specs.card.techSpecs.table.rows.map((row, index) => (
                          <tr key={index} className="border-b border-border hover:bg-card transition-colors">
                            <td className="py-[var(--space-table-py)] px-[var(--space-table-px)] font-medium text-foreground">{row.parameter}</td>
                            <td className="py-[var(--space-table-py)] px-[var(--space-table-px)] text-muted-foreground">{row.range}</td>
                            <td className="py-[var(--space-table-py)] px-[var(--space-table-px)] text-muted-foreground">{row.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-base font-semibold">{dict.specs.card.selectionGuide.title}</h4>
                  <ol className="list-decimal pl-6 space-y-1">
                    {dict.specs.card.selectionGuide.items.map((item, index) => (
                      <li key={index} className="text-muted-foreground">{item}</li>
                    ))}
                  </ol>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-grid-gap)]">
                  <div className="space-y-3">
                    <h4 className="text-base font-semibold">{dict.specs.card.endFittings.title}</h4>
                    <ul className="list-disc pl-6">
                      {dict.specs.card.endFittings.items.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-base font-semibold">{dict.specs.card.options.title}</h4>
                    <ul className="list-disc pl-6">
                      {dict.specs.card.options.items.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="pt-[var(--space-divider-pt)] border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-[var(--space-subtitle-mb)]">{dict.specs.card.connectionTypes.title}</h3>
                  <div className="relative">
                    <img alt="Connection Types" className="w-full h-auto rounded-lg shadow-lg" src="/images/products_page/accessories.png" />
                  </div>
                </div>
                <div className="pt-[var(--space-divider-pt)] border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-[var(--space-subtitle-mb)]">{dict.specs.card.surfaceTreatments.title}</h3>
                  <div className="grid md:grid-cols-2 gap-[var(--space-grid-gap)]">
                    <div className="p-[var(--space-card-padding)] bg-card rounded-lg border border-border">
                      <h4 className="font-semibold text-foreground mb-3">{dict.specs.card.surfaceTreatments.card.title}</h4>
                      <ul className="space-y-[var(--space-list-gap)]">
                        {dict.specs.card.surfaceTreatments.card.items.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pt-[var(--space-divider-pt)] border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-[var(--space-subtitle-mb)]">{dict.specs.card.qualityCerts.title}</h3>
                  <div className="flex flex-wrap gap-[var(--space-list-gap)]">
                    {dict.specs.card.qualityCerts.items.map((item, index) => (
                      <span key={index} className="px-3 py-1 bg-accent/10 text-foreground rounded-full text-sm font-medium">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            role="tabpanel"
            aria-labelledby="radix-tabs-trigger-testing"
            id="radix-tabs-content-testing"
            tabIndex={0}
            data-slot="tabs-content"
            className="flex-1 outline-none space-y-[var(--space-block-gap)]"
          >
            <h2 className="text-3xl font-bold text-primary mb-[var(--space-title-mb)]">{dict.testing.tabName}</h2>
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-[var(--space-grid-gap)] rounded-xl border py-[var(--space-card-padding)] shadow-sm"
            >
              <div
                data-slot="card-header"
                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-[var(--space-card-padding)] has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-[var(--space-card-padding)]"
              >
              </div>
              <div data-slot="card-content" className="px-[var(--space-card-padding)] space-y-[var(--space-block-gap)]">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-[var(--space-subtitle-mb)]">{dict.testing.card.standardConditions.title}</h3>
                  <div className="grid md:grid-cols-2 gap-[var(--space-grid-gap)]">
                    <div className="p-[var(--space-card-padding)] bg-card rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground mb-2">{dict.testing.card.standardConditions.speed.label}</p>
                      <p className="text-2xl font-bold text-foreground">{dict.testing.card.standardConditions.speed.value}</p>
                    </div>
                    <div className="p-[var(--space-card-padding)] bg-card rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground mb-2">{dict.testing.card.standardConditions.temperature.label}</p>
                      <p className="text-2xl font-bold text-foreground">{dict.testing.card.standardConditions.temperature.value}</p>
                    </div>
                  </div>
                </div>
                <div className="pt-[var(--space-divider-pt)] border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-[var(--space-subtitle-mb)]">{dict.testing.card.fourPointForce.title}</h3>
                  <div className="space-y-3">
                    {dict.testing.card.fourPointForce.items.map((item, index) => (
                      <div key={index} className="p-[var(--space-card-padding)] bg-card rounded-lg border border-border transition-colors">
                        <div className="flex items-start gap-4">
                          <div className="px-3 py-1 bg-accent/10 text-foreground rounded font-bold text-sm">{item.point}</div>
                          <div className="flex-1">
                            <p className="font-medium text-foreground mb-1">{item.title}</p>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center py-[var(--space-section-y)] md:py-[var(--space-section-y-md)]">
            <h2 className="text-3xl font-bold text-primary mb-[var(--space-title-mb)]">{dict.cta.title}</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {dict.cta.desc.map((item, index) => (
                <p key={index} className="text-lg text-muted-foreground">{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
