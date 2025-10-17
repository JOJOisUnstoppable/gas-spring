'use client'
/* eslint-disable @next/next/no-img-element */

import type { ReactNode } from 'react'
import parseMarkdownBold from '@/lib/parseMarkdownBold'

interface GSInstallationGuideProps {
  title: string
  desc: string | string[]
  imageCaption?: string
}

// Define structured types instead of any
type ParsedNode = ReactNode[]
interface StructuredItem {
  content: ParsedNode
  subItems?: ParsedNode[]
}

const GSInstallationGuide = ({ title, desc, imageCaption }: GSInstallationGuideProps) => {
  const lines = Array.isArray(desc) ? desc : [desc]

  const numericItemRegex = /^\s*\d+\./
  const structured: StructuredItem[] = []

  let current: StructuredItem | null = null

  for (const line of lines) {
    if (numericItemRegex.test(line)) {
      const item: StructuredItem = { content: parseMarkdownBold(line), subItems: [] }
      structured.push(item)
      current = item
    } else {
      const node: ParsedNode = parseMarkdownBold(line)
      if (current) {
        current.subItems?.push(node)
      } else {
        structured.push({ content: node })
      }
    }
  }

  return (
    <section className="max-w-7xl mx-auto w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            {title}
          </h2>
          <div className="w-full border-b-3 border-[#0F172B]"></div>  
          <div className="space-y-6">
            {structured.map((item, idx) => (
              <div key={idx}>
                <div className="space-y-3">
                  <div className="text-muted-foreground text-lg leading-relaxed">
                    {item.content}
                  </div>
                  {item.subItems && item.subItems.length > 0 && (
                    <ul className="list-disc pl-6 space-y-2">
                      {item.subItems.map((sub, sIdx) => (
                        <li key={sIdx} className="text-muted-foreground text-lg leading-relaxed">
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {idx === 0 && (
                  <div className="my-8 flex flex-col items-center">
                    <img
                      src={'/images/products_page/Install_location.png'}
                      alt={'Gas spring : Selection of Installation Location'}
                      className="max-w-full h-auto rounded-lg shadow-md"
                    />
                    <div className="text-center text-muted-foreground text-sm mt-2">
                      {imageCaption}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GSInstallationGuide