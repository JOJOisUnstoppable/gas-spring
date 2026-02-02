'use client'

import { CompressionDict } from './types'
import Image from 'next/image'

export default function CompressionSpecs({ dict, id }: { dict: CompressionDict['specs'], id?: string }) {
  return (
    <div id={id} className="pt-6 md:pt-8 lg:pt-10 pb-6 md:pb-8 lg:pb-10">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col space-y-4 items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl pb-2">
              {dict.card.title}
            </h2>
            <div className="w-20 h-1 bg-blue-500 rounded-full" />
          </div>

          <div className="mt-8 bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div className="px-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">{dict.card.techSpecs.title}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-primary text-white">
                      <tr>
                        {dict.card.techSpecs.table.headers.map((header, index) => (
                          <th key={index} className="text-left py-3 px-4 font-semibold border border-border">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {dict.card.techSpecs.table.rows.map((row, index) => (
                        <tr key={index} className="border-b border-border hover:bg-card transition-colors">
                          <td className="py-3 px-4 font-medium text-foreground">{row.parameter}</td>
                          <td className="py-3 px-4 text-muted-foreground">{row.range}</td>
                          <td className="py-3 px-4 text-muted-foreground">{row.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="relative min-h-[400px] w-full">
                <Image 
                  src="/images/product/gas-spring/compression-gas-spring/compression-gas-spring-render.png" 
                  alt="Compression Gas Spring Render"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-base font-semibold">{dict.card.selectionGuide.title}</h4>
                <ol className="list-decimal pl-6 space-y-1">
                  {dict.card.selectionGuide.items.map((item, index) => (
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-base font-semibold">{dict.card.endFittings.title}</h4>
                  <ul className="list-disc pl-6">
                    {dict.card.endFittings.items.map((item, index) => (
                      <li key={index} className="text-muted-foreground">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-base font-semibold">{dict.card.options.title}</h4>
                  <ul className="list-disc pl-6">
                    {dict.card.options.items.map((item, index) => (
                      <li key={index} className="text-muted-foreground">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="pt-6 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">{dict.card.connectionTypes.title}</h3>
                <div className="relative min-h-[300px] w-full">
                  <Image 
                    alt="End Fittings Category" 
                    className="object-cover rounded-lg shadow-lg" 
                    src="/images/products_page/accessories.png" 
                    fill
                  />
                </div>
              </div>
              <div className="pt-6 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">{dict.card.qualityCerts.title}</h3>
                <div className="flex flex-wrap gap-4">
                  {dict.card.qualityCerts.items.map((item, index) => (
                    <span key={index} className="px-3 py-1 bg-accent/10 text-foreground rounded-full text-sm font-medium">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
