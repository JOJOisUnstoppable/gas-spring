'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function CompressionGasSpring() {
  const [active, setActive] = useState<'overview' | 'specs' | 'testing' | 'solutions'>('overview')

  const triggerClass =
    "inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium transition-[color,box-shadow] bg-muted text-muted-foreground hover:bg-muted/70 hover:text-foreground data-[state=active]:text-white data-[state=active]:bg-[#0F172B] data-[state=active]:border-[#0F172B] data-[state=active]:shadow-sm focus-visible:ring-[3px] focus-visible:border-[#0F172B] focus-visible:ring-[#0F172B]/50 disabled:pointer-events-none disabled:opacity-50"

  return (
    <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div
        dir="ltr"
        data-orientation="horizontal"
        data-slot="tabs"
        className="flex flex-col gap-2 mb-12"
      >
        <div
          role="tablist"
          aria-orientation="horizontal"
          data-slot="tabs-list"
          className="bg-muted text-muted-foreground h-9 items-center justify-center rounded-lg p-[3px] grid w-full grid-cols-4 mb-8"
          tabIndex={0}
          data-orientation="horizontal"
          style={{ outline: 'none' }}
        >
          <button
            type="button"
            role="tab"
            aria-selected={active === 'overview'}
            aria-controls="radix-tabs-content-overview"
            data-state={active === 'overview' ? 'active' : 'inactive'}
            id="radix-tabs-trigger-overview"
            data-slot="tabs-trigger"
            className={triggerClass}
            tabIndex={0}
            data-orientation="horizontal"
            onClick={() => setActive('overview')}
          >
            Overview
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={active === 'specs'}
            aria-controls="radix-tabs-content-specs"
            data-state={active === 'specs' ? 'active' : 'inactive'}
            id="radix-tabs-trigger-specs"
            data-slot="tabs-trigger"
            className={triggerClass}
            tabIndex={0}
            data-orientation="horizontal"
            onClick={() => setActive('specs')}
          >
            Specifications
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={active === 'testing'}
            aria-controls="radix-tabs-content-testing"
            data-state={active === 'testing' ? 'active' : 'inactive'}
            id="radix-tabs-trigger-testing"
            data-slot="tabs-trigger"
            className={triggerClass}
            tabIndex={0}
            data-orientation="horizontal"
            onClick={() => setActive('testing')}
          >
            Testing
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={active === 'solutions'}
            aria-controls="radix-tabs-content-solutions"
            data-state={active === 'solutions' ? 'active' : 'inactive'}
            id="radix-tabs-trigger-solutions"
            data-slot="tabs-trigger"
            className={triggerClass}
            tabIndex={0}
            data-orientation="horizontal"
            onClick={() => setActive('solutions')}
          >
            Solutions
          </button>
        </div>

        <div
          role="tabpanel"
          aria-labelledby="radix-tabs-trigger-overview"
          id="radix-tabs-content-overview"
          tabIndex={0}
          data-loc="client/src/pages/Product.tsx:162"
          data-slot="tabs-content"
          className="flex-1 outline-none space-y-6"
          hidden={active !== 'overview'}
        >
          <div
            data-slot="card"
            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
          >
            <div
              data-slot="card-header"
              className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
            >
              <div data-slot="card-title" className="leading-none font-semibold">
                Product Definition &amp; Applications
              </div>
            </div>
            <div data-slot="card-content" className="px-6 prose prose-sm max-w-none">
              <div className="space-y-4">
                <h1 className="mt-6 mb-2 font-semibold text-3xl">
                  Compression Gas Spring (Gas Strut) - Technical Guide
                </h1>
                <h2 className="mt-6 mb-2 font-semibold text-2xl">
                  Product Definition &amp; Typical Applications
                </h2>
                <p>
                  <span className="font-semibold">Compression Gas Spring</span> (also known as Gas Strut, Gas Spring, Gas Lift, or Support Rod) is an industrial component that uses high-pressure inert gas (typically nitrogen) to provide controlled support, buffering, and lifting force. It&apos;s widely used in applications requiring precise, smooth motion control.
                </p>
                <h3 className="mt-6 mb-2 font-semibold text-xl">Core Function</h3>
                <p>
                  Through compressed nitrogen, gas springs provide stable <span className="font-semibold">lifting force</span> to assist in opening, supporting, and cushioning heavy components.
                </p>
                <h3 className="mt-6 mb-2 font-semibold text-xl">Typical Applications</h3>
                <ul className="ml-4 list-outside list-disc whitespace-normal">
                  <li className="py-1"><span className="font-semibold">Automotive:</span> Tailgate, engine hood, trunk lid</li>
                  <li className="py-1"><span className="font-semibold">Medical Devices:</span> Maintenance covers, bed adjustment mechanisms</li>
                  <li className="py-1"><span className="font-semibold">Furniture:</span> Flip-up doors, cabinet doors, height-adjustable tables</li>
                  <li className="py-1"><span className="font-semibold">Industrial Machinery:</span> Equipment enclosures, maintenance covers, safety guards</li>
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
          className="flex-1 outline-none space-y-6"
          hidden={active !== 'specs'}
        >
          <div
            data-slot="card"
            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
          >
            <div
              data-slot="card-header"
              className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
            >
              <div data-slot="card-title" className="leading-none font-semibold">
                Core Parameters &amp; Selection Guide
              </div>
              <div data-slot="card-description" className="text-muted-foreground text-sm">
                Key technical specifications and selection criteria
              </div>
            </div>
            <div data-slot="card-content" className="px-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Key Technical Specifications</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="text-left py-3 px-4 font-semibold border border-border">Parameter</th>
                        <th className="text-left py-3 px-4 font-semibold border border-border">Range</th>
                        <th className="text-left py-3 px-4 font-semibold border border-border">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border hover:bg-card transition-colors">
                        <td className="py-3 px-4 font-medium text-foreground">Force (N)</td>
                        <td className="py-3 px-4 text-muted-foreground">50 - 2,000</td>
                        <td className="py-3 px-4 text-muted-foreground">Determines support capacity (~11-450 lbf)</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-card transition-colors">
                        <td className="py-3 px-4 font-medium text-foreground">Stroke (mm)</td>
                        <td className="py-3 px-4 text-muted-foreground">30 - 700</td>
                        <td className="py-3 px-4 text-muted-foreground">Piston rod extension distance</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-card transition-colors">
                        <td className="py-3 px-4 font-medium text-foreground">Full Length</td>
                        <td className="py-3 px-4 text-muted-foreground">Custom</td>
                        <td className="py-3 px-4 text-muted-foreground">Overall extended length (center-to-center)</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-card transition-colors">
                        <td className="py-3 px-4 font-medium text-foreground">Rod Diameter</td>
                        <td className="py-3 px-4 text-muted-foreground">6 - 14 mm</td>
                        <td className="py-3 px-4 text-muted-foreground">Affects bending stiffness and sealing</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-card transition-colors">
                        <td className="py-3 px-4 font-medium text-foreground">Cylinder Diameter</td>
                        <td className="py-3 px-4 text-muted-foreground">15 - 40 mm</td>
                        <td className="py-3 px-4 text-muted-foreground">Relates to internal gas volume</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-base font-semibold">Selection Guide</h4>
                <ol className="list-decimal pl-6 space-y-1">
                  <li className="text-muted-foreground">Define application and required motion behavior</li>
                  <li className="text-muted-foreground">Measure extended and compressed center-to-center lengths</li>
                  <li className="text-muted-foreground">Determine target force based on load and geometry</li>
                  <li className="text-muted-foreground">Choose end fittings compatible with mounting points</li>
                  <li className="text-muted-foreground">Select options (damping, coating, corrosion resistance)</li>
                </ol>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-base font-semibold">End Fittings</h4>
                  <ul className="list-disc pl-6">
                    <li className="text-muted-foreground">Ball-joint sockets</li>
                    <li className="text-muted-foreground">Eyelets and clevis</li>
                    <li className="text-muted-foreground">Brackets and studs</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-base font-semibold">Options</h4>
                  <ul className="list-disc pl-6">
                    <li className="text-muted-foreground">Damping control</li>
                    <li className="text-muted-foreground">Powder-coated cylinder</li>
                    <li className="text-muted-foreground">Corrosion-resistant variants</li>
                  </ul>
                </div>
              </div>
              <div className="pt-6 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Connection Types &amp; Surface Treatments</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-3">Thread Connections</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        M8×1
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        M10×1
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-3">Ball Connections</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        Ø10mm ball head
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        Stainless steel ball socket
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-3">Special Connections</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        Clevis fork ends
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-3">Surface Treatment</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        Black electroplating
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        QPQ nitriding
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        Polished SS304/SS316
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">Quality Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent/10 text-foreground rounded-full text-sm font-medium">ISO9001</span>
                  <span className="px-3 py-1 bg-accent/10 text-foreground rounded-full text-sm font-medium">TS16949</span>
                  <span className="px-3 py-1 bg-accent/10 text-foreground rounded-full text-sm font-medium">RoHS</span>
                  <span className="px-3 py-1 bg-accent/10 text-foreground rounded-full text-sm font-medium">CE</span>
                  <span className="px-3 py-1 bg-accent/10 text-foreground rounded-full text-sm font-medium">96h Salt Spray</span>
                  <span className="px-3 py-1 bg-accent/10 text-foreground rounded-full text-sm font-medium">SGS</span>
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
          className="flex-1 outline-none space-y-6"
          hidden={active !== 'testing'}
        >
          <div
            data-slot="card"
            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
          >
            <div
              data-slot="card-header"
              className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
            >
              <div data-slot="card-title" className="leading-none font-semibold">
                Testing Standards &amp; Force Characteristics
              </div>
              <div data-slot="card-description" className="text-muted-foreground text-sm">
                Standardized testing methodology and force definitions
              </div>
            </div>
            <div data-slot="card-content" className="px-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Standard Test Conditions</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-2">Test Speed</p>
                    <p className="text-2xl font-bold text-foreground">400 mm/min</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-2">Temperature</p>
                    <p className="text-2xl font-bold text-foreground">20°C</p>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Four-Point Force Definition</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-card rounded-lg border border-border transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="px-3 py-1 bg-accent/10 text-foreground rounded font-bold text-sm">F1</div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground mb-1">Force at 10mm before full extension</p>
                        <p className="text-sm text-muted-foreground">Nominal lifting force (main selection criterion)</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="px-3 py-1 bg-accent/10 text-foreground rounded font-bold text-sm">F2</div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground mb-1">Force at 10mm before full compression</p>
                        <p className="text-sm text-muted-foreground">Extension start force</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="px-3 py-1 bg-accent/10 text-foreground rounded font-bold text-sm">F3</div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground mb-1">Force at 10mm after full extension</p>
                        <p className="text-sm text-muted-foreground">Compression start force</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="px-3 py-1 bg-accent/10 text-foreground rounded font-bold text-sm">F4</div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground mb-1">Force at 10mm before full compression</p>
                        <p className="text-sm text-muted-foreground">Maximum compression force</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Key Performance Metrics</h3>
                <div className="bg-card rounded-lg border border-border p-4 space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Friction Force</p>
                    <p className="font-mono text-foreground">Fr = (F3 - F1) / 2</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Progression Ratio</p>
                    <p className="font-mono text-foreground">Fb / Fa</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Industry Rule of Thumb</p>
                    <p className="font-mono text-foreground">F1 : F4 ≈ 1 : 1.75</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-slot="card"
            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
          >
            <div
              data-slot="card-header"
              className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
            >
              <div data-slot="card-title" className="leading-none font-semibold">
                Performance Validation
              </div>
            </div>
            <div data-slot="card-content" className="px-6">
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-muted-foreground">Force calibration across full stroke</li>
                <li className="text-muted-foreground">Cycle endurance under load and temperature variation</li>
                <li className="text-muted-foreground">Damping consistency and oil leakage inspection</li>
                <li className="text-muted-foreground">Salt spray and corrosion resistance for coated parts</li>
              </ul>
            </div>
          </div>
        </div>

        <div
          role="tabpanel"
          aria-labelledby="radix-tabs-trigger-solutions"
          id="radix-tabs-content-solutions"
          tabIndex={0}
          data-slot="tabs-content"
          className="flex-1 outline-none space-y-6"
          hidden={active !== 'solutions'}
        >
          <div
            data-slot="card"
            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
          >
            <div
              data-slot="card-header"
              className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
            >
              <div data-slot="card-title" className="leading-none font-semibold">
                DKG Solutions for Your Challenges
              </div>
              <div data-slot="card-description" className="text-muted-foreground text-sm">
                How we address common customer pain points
              </div>
            </div>
            <div data-slot="card-content" className="px-6">
              <div className="space-y-4">
                <div className="p-4 bg-card rounded-lg border border-border transition-colors">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 bg-gradient-to-b from-white to-[#0F172B] rounded-full"></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">No domestic alternative</h4>
                      <p className="text-sm text-muted-foreground mb-2"><span className="font-medium">Solution:</span> Drop-in replacement by diameter/force/connection</p>
                      <p className="text-sm text-primary font-medium">✓ Fast supply chain switch</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border transition-colors">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 bg-gradient-to-b from-white to-[#0F172B] rounded-full"></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">Connection mismatch</h4>
                      <p className="text-sm text-muted-foreground mb-2"><span className="font-medium">Solution:</span> M8→M10 adapters or custom redesign</p>
                      <p className="text-sm text-primary font-medium">✓ Flexible integration</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border transition-colors">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 bg-gradient-to-b from-white to-[#0F172B] rounded-full"></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">Long lead times (8-12 weeks)</h4>
                      <p className="text-sm text-muted-foreground mb-2"><span className="font-medium">Solution:</span> Compressed to 2-4 weeks</p>
                      <p className="text-sm text-primary font-medium">✓ Accelerated project timeline</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border transition-colors">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 bg-gradient-to-b from-white to-[#0F172B] rounded-full"></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">High costs</h4>
                      <p className="text-sm text-muted-foreground mb-2"><span className="font-medium">Solution:</span> 30%+ reduction via optimization</p>
                      <p className="text-sm text-primary font-medium">✓ Improved margins</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border transition-colors">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 bg-gradient-to-b from-white to-[#0F172B] rounded-full"></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">Missing technical drawings</h4>
                      <p className="text-sm text-muted-foreground mb-2"><span className="font-medium">Solution:</span> Sample measurement + CAD 3D</p>
                      <p className="text-sm text-primary font-medium">✓ Quick documentation</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border transition-colors">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 bg-gradient-to-b from-white to-[#0F172B] rounded-full"></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">Incomplete certifications</h4>
                      <p className="text-sm text-muted-foreground mb-2"><span className="font-medium">Solution:</span> One-stop RoHS, CE, ISO, SGS reports</p>
                      <p className="text-sm text-primary font-medium">✓ Market compliance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-slot="card"
            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
          >
            <div
              data-slot="card-header"
              className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
            >
              <div data-slot="card-title" className="leading-none font-semibold">
                Industry Solutions
              </div>
            </div>
            <div data-slot="card-content" className="px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground">Automotive</h3>
                  <p className="text-muted-foreground mt-2">Tailgate, hood, trunk—optimized force and stroke for smooth opening and safe hold.</p>
                </div>
                <div className="bg-muted rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground">Medical</h3>
                  <p className="text-muted-foreground mt-2">Maintenance covers and patient bed mechanisms with low noise and stable damping.</p>
                </div>
                <div className="bg-muted rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground">Furniture</h3>
                  <p className="text-muted-foreground mt-2">Cabinet doors and height-adjustable tables with controlled speed and safe stop.</p>
                </div>
                <div className="bg-muted rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground">Industrial</h3>
                  <p className="text-muted-foreground mt-2">Enclosures, maintenance covers, and safety guards engineered for frequent operation.</p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-slot="card"
            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
          >
            <div
              data-slot="card-header"
              className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
            >
              <div data-slot="card-title" className="leading-none font-semibold text-foreground">
                Ready to Get Started?
              </div>
            </div>
            <div data-slot="card-content" className="px-6">
              <p className="text-muted-foreground mb-6">
                Use our interactive selector tool to find the perfect gas spring specifications for your application.
              </p>
              <Button className="w-full">Launch Selector Tool</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
