'use client'

import { Button } from '@/components/ui/button'
import GasSpringForceCurve from '@/components/visualization/GasSpringForceCurve';
import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '@/lib/i18n/config';


export type CompressionDict = {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  overview: {
    tabName: string;
    card: {
      title: string;
      content: {
        title: string;
        definition: string;
        coreFunction: {
          title: string;
          description: string;
        };
        applications: {
          title: string;
          items: {
            name: string;
            value: string;
          }[];
        };
      };
    };
  };
  specs: {
    card: {
      title: string;
      techSpecs: {
        title: string;
        table: {
          headers: string[];
          rows: {
            parameter: string;
            range: string;
            description: string;
          }[];
        };
      };
      selectionGuide: {
        title: string;
        items: {
          key: string;
          value?: string;
          subItems?: {
            key: string;
            value: string;
          }[];
        }[];
      };
      endFittings: {
        title: string;
        items: string[];
      };
      options: {
        title: string;
        items: string[];
      };
      connectionTypes: {
        title: string;
      };
      qualityCerts: {
        title: string;
        items: string[];
      };
    };
  };
  testing: {
    card: {
      standardConditions: {
        title: string;
        speed: {
          label: string;
          value: string;
        };
        temperature: {
          label: string;
          value: string;
        };
      };
      fourPointForce: {
        title: string;
        items: {
          point: string;
          title: string;
          description: string;
        }[];
      };
    };
  };
  cta: {
    title: string;
    desc: string[];
  };
  GasSpringForceCurve: {
    title1: string;
    title2: string;
    title3: string;
  };
};


export default function CompressionGasSpring(
  { dict, locale }: { dict: CompressionDict; locale: Locale }) {


  return (
    <div className="flex flex-col">
      <section className="relative py-[var(--space-hero-y)] md:py-[var(--space-hero-y-md)] bg-gradient-to-br from-[#0F172B] via-[#2a5298] to-[#0F172B] text-white">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-[var(--space-hero-gap)] items-center">
            <div className="space-y-[var(--space-block-gap)]">
              <h1 className="font-bold text-5xl leading-tight mb-[var(--space-title-mb)]">{dict.hero.title}</h1>
              <p className="text-lg leading-relaxed opacity-90">
                {dict.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-[var(--space-grid-gap)] pt-[var(--space-divider-pt)]">
                <Button className="h-10 px-6 bg-[#ff6b35] hover:bg-[#e55a2b] text-white">{dict.hero.cta}</Button>
                <Button className="h-10 px-6 bg-transparent border border-white text-white hover:bg-white/10">Request Quote</Button>
              </div>
            </div>
            <div className="relative min-h-[300px] w-full">
              <Image 
                src="/images/products_page/compress_gas_spring.jpg" 
                alt={dict.hero.title}
                fill
                className="object-cover rounded-lg shadow-lg"
              />
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
              <div data-slot="card-content" className="px-[var(--space-card-padding)] prose prose-sm max-w-none">
                <div className="space-y-[var(--space-block-gap)]">
                  <p className="mt-6 mb-2">
                    <span className="font-semibold text-2xl mr-2">{dict.overview.card.content.title}</span>
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
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-[var(--space-grid-gap)] rounded-xl border py-[var(--space-card-padding)] shadow-sm"
            >
              <div
                data-slot="card-header"
                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-[var(--space-card-padding)] has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-[var(--space-card-padding)]"
              >
                <h2 className="text-3xl font-bold text-primary mb-[var(--space-title-mb)]"> {dict.specs.card.title}</h2>
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
                <div className="relative min-h-[400px] w-full">
                  <Image 
                    src="/images/product/gas-spring/compression-gas-spring/compression-gas-spring-render.png" 
                    alt={dict.overview.card.content.title ?? "Compression Gas Spring Render"}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-3">
                  <h4 className="text-base font-semibold">{dict.specs.card.selectionGuide.title}</h4>
                  <ol className="list-decimal pl-6 space-y-1">
                    {dict.specs.card.selectionGuide.items.map((item, index) => (
                      <li key={index} className="text-muted-foreground">
                        <span className="font-semibold text-foreground">{item.key} </span>
                        {item.value}
                        {item.subItems && (
                          <ol className="list-decimal pl-6 mt-1 space-y-1">
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <span className="font-semibold text-foreground">{subItem.key} </span>
                                {subItem.value}
                              </li>
                            ))}
                          </ol>
                        )}
                      </li>
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
                  <div className="relative min-h-[300px] w-full">
                    <Image 
                      alt="End Fittings Category" 
                      className="object-cover rounded-lg shadow-lg" 
                      src="/images/products_page/accessories.png" 
                      fill
                    />
                  </div>
                </div>
                <div className="pt-[var(--space-divider-pt)] border-t border-border">
                </div>
                <div className="pt-[var(--space-divider-pt)] border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-[var(--space-subtitle-mb)]">{dict.specs.card.qualityCerts.title}</h3>
                  <div className="flex flex-wrap gap-[var(--space-list-gap)]">
                    {dict.specs.card.qualityCerts.items.map((item, index) => (
                      <span key={index} className="px-3 py-1 bg-accent/10 text-foreground rounded-full text-sm font-medium">{item}</span>
                    ))}
                  </div>
                  {/* 暂时隐藏质量认证图片
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                    <img src="/images/product/gas-spring/compression-gas-spring/ACM-Quality-Certifications.png" alt="ACM Quality Certification" className="w-full h-auto rounded-lg shadow-sm border border-border" />
                    <img src="/images/product/gas-spring/compression-gas-spring/SGS-Quality-Certifications_.png" alt="SGS Quality Certification" className="w-full h-auto rounded-lg shadow-sm border border-border" />
                    <img src="/images/product/gas-spring/compression-gas-spring/SGS2-Quality-Certifications.png" alt="SGS2 Test report" className="w-full h-auto rounded-lg shadow-sm border border-border" />
                  </div>
                  */}
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
                <div className="container mx-auto py-12 px-4 bg-gray-50 min-h-screen">
                  <div className="mb-6">
                    <Link href={`/${locale}`} className="text-blue-600 hover:underline">
                      &larr; Back to Home ({locale})
                    </Link>
                  </div>

                  <h1 className="text-3xl font-bold mb-8 text-center">Gas Spring Force Curve Visualization</h1>

                  <div className="max-w-4xl mx-auto space-y-12">

                    {/* Default Configuration */}
                    <section>
                      <h2 className="text-xl font-semibold mb-4">Default Configuration (Standard 165mm stroke)</h2>
                      <GasSpringForceCurve title={dict.GasSpringForceCurve.title1} />
                    </section>

                    {/* Custom Configuration */}
                    <section>
                      <h2 className="text-xl font-semibold mb-4">Custom Examples</h2>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <GasSpringForceCurve
                          title={dict.GasSpringForceCurve.title2}
                          f1={800}
                          stroke={200}
                          className="shadow-md"
                        />
                        <GasSpringForceCurve
                          title={dict.GasSpringForceCurve.title3}
                          f1={200}
                          stroke={100}
                          className="shadow-md"
                        />
                      </div>
                    </section>
                    {/* 暂时隐藏视频展示
                    <section className="mt-8">
                      <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-border bg-black/5">
                        <video 
                          className="w-full h-full"
                          controls
                          playsInline
                          preload="metadata"
                        >
                          <source src="/videos/compress-gas-spring.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </section>
                    */}
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
