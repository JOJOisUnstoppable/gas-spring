'use client'

import { CompressionDict } from './types'
import GasSpringForceCurve from '@/components/visualization/GasSpringForceCurve';

export default function CompressionTesting({ 
  dict, 
  forceCurveDict,
  id
}: { 
  dict: CompressionDict['testing'],
  forceCurveDict: CompressionDict['GasSpringForceCurve'],
  id?: string
}) {
  return (
    <div id={id} className="pt-6 md:pt-8 lg:pt-10 pb-6 md:pb-8 lg:pb-10">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col space-y-4 items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl pb-2">
              Testing & Curves
            </h2>
            <div className="w-20 h-1 bg-blue-500 rounded-full" />
          </div>

          <div className="mt-8 bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div className="px-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">{dict.card.standardConditions.title}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-card rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-2">{dict.card.standardConditions.speed.label}</p>
                    <p className="text-2xl font-bold text-foreground">{dict.card.standardConditions.speed.value}</p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-2">{dict.card.standardConditions.temperature.label}</p>
                    <p className="text-2xl font-bold text-foreground">{dict.card.standardConditions.temperature.value}</p>
                  </div>
                </div>
              </div>
              <div className="container mx-auto py-12 px-4 bg-gray-50 rounded-lg">
                <h1 className="text-3xl font-bold mb-8 text-center">Gas Spring Force Curve Visualization</h1>

                <div className="max-w-4xl mx-auto space-y-12">

                  {/* Default Configuration */}
                  <section>
                    <h2 className="text-xl font-semibold mb-4">Default Configuration (Standard 165mm stroke)</h2>
                    <GasSpringForceCurve title={forceCurveDict.title1} />
                  </section>

                  {/* Custom Configuration */}
                  <section>
                    <h2 className="text-xl font-semibold mb-4">Custom Examples</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <GasSpringForceCurve
                        title={forceCurveDict.title2}
                        f1={800}
                        stroke={200}
                        className="shadow-md"
                      />
                      <GasSpringForceCurve
                        title={forceCurveDict.title3}
                        f1={200}
                        stroke={100}
                        className="shadow-md"
                      />
                    </div>
                  </section>
                </div>
              </div>
              <div className="pt-6 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">{dict.card.fourPointForce.title}</h3>
                <div className="space-y-3">
                  {dict.card.fourPointForce.items.map((item, index) => (
                    <div key={index} className="p-4 bg-card rounded-lg border border-border transition-colors">
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
      </div>
    </div>
  )
}
