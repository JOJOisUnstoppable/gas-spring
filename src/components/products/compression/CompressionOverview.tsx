'use client'

import { CompressionDict } from './types'

export default function CompressionOverview({ dict, id }: { dict: CompressionDict['overview'], id?: string }) {
  return (
    <div id={id} className="pt-12 md:pt-16 lg:pt-20 pb-6 md:pb-8 lg:pb-10">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 items-start">
            <div className="space-y-4 lg:col-span-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
                {dict.tabName || 'Overview'}
              </h2>
              
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  <span className="font-semibold text-foreground mr-2">{dict.card.content.title}</span>
                  {dict.card.content.definition}
                </p>
                
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl mb-4">{dict.card.content.coreFunction.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {dict.card.content.coreFunction.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl mb-4">{dict.card.content.applications.title}</h3>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {dict.card.content.applications.items.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2 text-muted-foreground">
                        <span className="h-2 w-2 mt-2 rounded-full bg-blue-500 shrink-0" />
                        <span>
                          <span className="font-semibold text-foreground">{item.name}</span> {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
