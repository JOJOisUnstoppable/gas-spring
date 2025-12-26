'use client'

import { Button } from '@/components/ui/button'

export default function CompressionGasSpring() {


  return (
    <div className="flex flex-col">
      <section className="relative py-[var(--space-hero-y)] md:py-[var(--space-hero-y-md)] bg-gradient-to-br from-[#0F172B] via-[#2a5298] to-[#0F172B] text-white">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-[var(--space-hero-gap)] items-center">
            <div className="space-y-[var(--space-block-gap)]">
              <h1 className="font-bold text-5xl md:text-6xl leading-tight mb-[var(--space-title-mb)]">Compression Gas Spring</h1>
              <p className="text-lg leading-relaxed opacity-90">
                Compression Gas Spring (Gas Strut) - Technical Guide
              </p>
              <div className="flex flex-col sm:flex-row gap-[var(--space-grid-gap)] pt-[var(--space-divider-pt)]">
                <Button className="h-10 px-6 bg-[#ff6b35] hover:bg-[#e55a2b] text-white">Get Technical Specs</Button>
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
            <h2 className="text-3xl font-bold text-primary mb-[var(--space-title-mb)]">Overview</h2>
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-[var(--space-grid-gap)] rounded-xl border py-[var(--space-card-padding)] shadow-sm"
            >
              <div
                data-slot="card-header"
                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-[var(--space-card-padding)] has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-[var(--space-card-padding)]"
              >
                <div data-slot="card-title" className="leading-none font-semibold">
                  Product Definition &amp; Applications
                </div>
              </div>
              <div data-slot="card-content" className="px-[var(--space-card-padding)] prose prose-sm max-w-none">
                <div className="space-y-[var(--space-block-gap)]">
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
            className="flex-1 outline-none space-y-[var(--space-block-gap)]"
          >
            <h2 className="text-3xl font-bold text-primary mb-[var(--space-title-mb)]">Specifications</h2>
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-[var(--space-grid-gap)] rounded-xl border py-[var(--space-card-padding)] shadow-sm"
            >
              <div
                data-slot="card-header"
                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-[var(--space-card-padding)] has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-[var(--space-card-padding)]"
              >
                <div data-slot="card-title" className="leading-none font-semibold">
                  Core Parameters &amp; Selection Guide
                </div>
                <div data-slot="card-description" className="text-muted-foreground text-sm">
                  Key technical specifications and selection criteria
                </div>
              </div>
              <div data-slot="card-content" className="px-[var(--space-card-padding)] space-y-[var(--space-block-gap)]">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-[var(--space-subtitle-mb)]">Key Technical Specifications</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-primary text-white">
                        <tr>
                          <th className="text-left py-[var(--space-table-py)] px-[var(--space-table-px)] font-semibold border border-border">Parameter</th>
                          <th className="text-left py-[var(--space-table-py)] px-[var(--space-table-px)] font-semibold border border-border">Range</th>
                          <th className="text-left py-[var(--space-table-py)] px-[var(--space-table-px)] font-semibold border border-border">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border hover:bg-card transition-colors">
                          <td className="py-[var(--space-table-py)] px-[var(--space-table-px)] font-medium text-foreground">Force (N)</td>
                          <td className="py-[var(--space-table-py)] px-[var(--space-table-px)] text-muted-foreground">50 - 5,000</td>
                          <td className="py-[var(--space-table-py)] px-[var(--space-table-px)] text-muted-foreground">Determines support capacity</td>
                        </tr>
                        <tr className="border-b border-border hover:bg-card transition-colors">
                          <td className="py-[var(--space-table-py)] px-[var(--space-table-px)] font-medium text-foreground">Stroke (mm)</td>
                          <td className="py-[var(--space-table-py)] px-[var(--space-table-px)] text-muted-foreground">30 - 700</td>
                          <td className="py-[var(--space-table-py)] px-[var(--space-table-px)] text-muted-foreground">Piston rod extension distance</td>
                        </tr>
                        <tr className="border-b border-border hover:bg-card transition-colors">
                          <td className="py-[var(--space-table-py)] px-[var(--space-table-px)] font-medium text-foreground">Full Length</td>
                          <td className="py-[var(--space-table-py)] px-[var(--space-table-px)] text-muted-foreground">Custom</td>
                          <td className="py-[var(--space-table-py)] px-[var(--space-table-px)] text-muted-foreground">Overall extended length (center-to-center)</td>
                        </tr>
                        <tr className="border-b border-border hover:bg-card transition-colors">
                          <td className="py-[var(--space-table-py)] px-[var(--space-table-px)] font-medium text-foreground">Rod Diameter</td>
                          <td className="py-[var(--space-table-py)] px-[var(--space-table-px)] text-muted-foreground">6 - 14 mm</td>
                          <td className="py-[var(--space-table-py)] px-[var(--space-table-px)] text-muted-foreground">Affects bending stiffness and sealing</td>
                        </tr>
                        <tr className="border-b border-border hover:bg-card transition-colors">
                          <td className="py-[var(--space-table-py)] px-[var(--space-table-px)] font-medium text-foreground">Cylinder Diameter</td>
                          <td className="py-[var(--space-table-py)] px-[var(--space-table-px)] text-muted-foreground">15 - 40 mm</td>
                          <td className="py-[var(--space-table-py)] px-[var(--space-table-px)] text-muted-foreground">Relates to internal gas volume</td>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-grid-gap)]">
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
                      <li className="text-muted-foreground">Damping performance is customizable</li>
                    </ul>
                  </div>
                </div>
                <div className="pt-[var(--space-divider-pt)] border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-[var(--space-subtitle-mb)]">Connection Types</h3>
                  <div className="relative">
                    <img alt="Connection Types" className="w-full h-auto rounded-lg shadow-lg" src="/images/products_page/accessories.png" />
                  </div>
                </div>
                <div className="pt-[var(--space-divider-pt)] border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-[var(--space-subtitle-mb)]">Surface Treatments</h3>
                  <div className="grid md:grid-cols-2 gap-[var(--space-grid-gap)]">
                    <div className="p-[var(--space-card-padding)] bg-card rounded-lg border border-border">
                      <h4 className="font-semibold text-foreground mb-3">Surface Treatment</h4>
                      <ul className="space-y-[var(--space-list-gap)]">
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
                <div className="pt-[var(--space-divider-pt)] border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-[var(--space-subtitle-mb)]">Quality Certifications</h3>
                  <div className="flex flex-wrap gap-[var(--space-list-gap)]">
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
            className="flex-1 outline-none space-y-[var(--space-block-gap)]"
          >
            <h2 className="text-3xl font-bold text-primary mb-[var(--space-title-mb)]">Testing</h2>
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
                  <h3 className="text-lg font-semibold text-foreground mb-[var(--space-subtitle-mb)]">Standard Test Conditions</h3>
                  <div className="grid md:grid-cols-2 gap-[var(--space-grid-gap)]">
                    <div className="p-[var(--space-card-padding)] bg-card rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground mb-2">Test Speed</p>
                      <p className="text-2xl font-bold text-foreground">400 mm/min</p>
                    </div>
                    <div className="p-[var(--space-card-padding)] bg-card rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground mb-2">Temperature</p>
                      <p className="text-2xl font-bold text-foreground">20°C</p>
                    </div>
                  </div>
                </div>
                <div className="pt-[var(--space-divider-pt)] border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-[var(--space-subtitle-mb)]">Four-Point Force Definition</h3>
                  <div className="space-y-3">
                    <div className="p-[var(--space-card-padding)] bg-card rounded-lg border border-border transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="px-3 py-1 bg-accent/10 text-foreground rounded font-bold text-sm">F1</div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground mb-1">Force at 10mm before full extension</p>
                          <p className="text-sm text-muted-foreground">Nominal lifting force (main selection criterion)</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-[var(--space-card-padding)] bg-card rounded-lg border border-border transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="px-3 py-1 bg-accent/10 text-foreground rounded font-bold text-sm">F2</div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground mb-1">Force at 10mm before full compression</p>
                          <p className="text-sm text-muted-foreground">Extension start force</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-[var(--space-card-padding)] bg-card rounded-lg border border-border transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="px-3 py-1 bg-accent/10 text-foreground rounded font-bold text-sm">F3</div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground mb-1">Force at 10mm after full extension</p>
                          <p className="text-sm text-muted-foreground">Compression start force</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-[var(--space-card-padding)] bg-card rounded-lg border border-border transition-colors">
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
                <div className="pt-[var(--space-divider-pt)] border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-[var(--space-subtitle-mb)]">Key Performance Metrics</h3>
                  <div className="bg-card rounded-lg border border-border p-[var(--space-card-padding)] space-y-3">
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
              className="bg-card text-card-foreground flex flex-col gap-[var(--space-grid-gap)] rounded-xl border py-[var(--space-card-padding)] shadow-sm"
            >
              <div
                data-slot="card-header"
                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-[var(--space-card-padding)] has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-[var(--space-card-padding)]"
              >
                <div data-slot="card-title" className="leading-none font-semibold">
                  Performance Validation
                </div>
              </div>
              <div data-slot="card-content" className="px-[var(--space-card-padding)]">
                <ul className="list-disc pl-6 space-y-[var(--space-list-gap)]">
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
            className="flex-1 outline-none space-y-[var(--space-block-gap)]"
          >
            <h2 className="text-3xl font-bold text-primary mb-[var(--space-title-mb)]">Solutions</h2>
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-[var(--space-grid-gap)] rounded-xl border py-[var(--space-card-padding)] shadow-sm"
            >
              <div
                data-slot="card-header"
                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-[var(--space-card-padding)] has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-[var(--space-card-padding)]"
              >
                <div data-slot="card-title" className="leading-none font-semibold">
                  DKG Solutions for Your Challenges
                </div>
                <div data-slot="card-description" className="text-muted-foreground text-sm">
                  How we address common customer pain points
                </div>
              </div>
              <div data-slot="card-content" className="px-[var(--space-card-padding)]">
                <div className="space-y-[var(--space-block-gap)]">
                  <div className="p-[var(--space-card-padding)] bg-card rounded-lg border border-border transition-colors">
                    <div className="flex gap-[var(--space-grid-gap)]">
                      <div className="flex-shrink-0 w-2 bg-gradient-to-b from-white to-[#0F172B] rounded-full"></div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">No domestic alternative</h4>
                        <p className="text-sm text-muted-foreground mb-2"><span className="font-medium">Solution:</span> Drop-in replacement by diameter/force/connection</p>
                        <p className="text-sm text-primary font-medium">✓ Fast supply chain switch</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-[var(--space-card-padding)] bg-card rounded-lg border border-border transition-colors">
                    <div className="flex gap-[var(--space-grid-gap)]">
                      <div className="flex-shrink-0 w-2 bg-gradient-to-b from-white to-[#0F172B] rounded-full"></div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">Connection mismatch</h4>
                        <p className="text-sm text-muted-foreground mb-2"><span className="font-medium">Solution:</span> M8→M10 adapters or custom redesign</p>
                        <p className="text-sm text-primary font-medium">✓ Flexible integration</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-[var(--space-card-padding)] bg-card rounded-lg border border-border transition-colors">
                    <div className="flex gap-[var(--space-grid-gap)]">
                      <div className="flex-shrink-0 w-2 bg-gradient-to-b from-white to-[#0F172B] rounded-full"></div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">Long lead times (8-12 weeks)</h4>
                        <p className="text-sm text-muted-foreground mb-2"><span className="font-medium">Solution:</span> Compressed to 2-4 weeks</p>
                        <p className="text-sm text-primary font-medium">✓ Accelerated project timeline</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-[var(--space-card-padding)] bg-card rounded-lg border border-border transition-colors">
                    <div className="flex gap-[var(--space-grid-gap)]">
                      <div className="flex-shrink-0 w-2 bg-gradient-to-b from-white to-[#0F172B] rounded-full"></div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">High costs</h4>
                        <p className="text-sm text-muted-foreground mb-2"><span className="font-medium">Solution:</span> 30%+ reduction via optimization</p>
                        <p className="text-sm text-primary font-medium">✓ Improved margins</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-[var(--space-card-padding)] bg-card rounded-lg border border-border transition-colors">
                    <div className="flex gap-[var(--space-grid-gap)]">
                      <div className="flex-shrink-0 w-2 bg-gradient-to-b from-white to-[#0F172B] rounded-full"></div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">Missing technical drawings</h4>
                        <p className="text-sm text-muted-foreground mb-2"><span className="font-medium">Solution:</span> Sample measurement + CAD 3D</p>
                        <p className="text-sm text-primary font-medium">✓ Quick documentation</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-[var(--space-card-padding)] bg-card rounded-lg border border-border transition-colors">
                    <div className="flex gap-[var(--space-grid-gap)]">
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
              className="bg-card text-card-foreground flex flex-col gap-[var(--space-grid-gap)] rounded-xl border py-[var(--space-card-padding)] shadow-sm"
            >
              <div
                data-slot="card-header"
                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-[var(--space-card-padding)] has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-[var(--space-card-padding)]"
              >
                <div data-slot="card-title" className="leading-none font-semibold">
                  Industry Solutions
                </div>
              </div>
              <div data-slot="card-content" className="px-[var(--space-card-padding)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-grid-gap)]">
                  <div className="bg-muted rounded-lg p-[var(--space-card-padding)]">
                    <h3 className="text-xl font-semibold text-foreground">Automotive</h3>
                    <p className="text-muted-foreground mt-2">Tailgate, hood, trunk—optimized force and stroke for smooth opening and safe hold.</p>
                  </div>
                  <div className="bg-muted rounded-lg p-[var(--space-card-padding)]">
                    <h3 className="text-xl font-semibold text-foreground">Medical</h3>
                    <p className="text-muted-foreground mt-2">Maintenance covers and patient bed mechanisms with low noise and stable damping.</p>
                  </div>
                  <div className="bg-muted rounded-lg p-[var(--space-card-padding)]">
                    <h3 className="text-xl font-semibold text-foreground">Furniture</h3>
                    <p className="text-muted-foreground mt-2">Cabinet doors and height-adjustable tables with controlled speed and safe stop.</p>
                  </div>
                  <div className="bg-muted rounded-lg p-[var(--space-card-padding)]">
                    <h3 className="text-xl font-semibold text-foreground">Industrial</h3>
                    <p className="text-muted-foreground mt-2">Enclosures, maintenance covers, and safety guards engineered for frequent operation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-[var(--space-grid-gap)] rounded-xl border py-[var(--space-card-padding)] shadow-sm"
            >
              <div
                data-slot="card-header"
                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-[var(--space-card-padding)] has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-[var(--space-card-padding)]"
              >
                <div data-slot="card-title" className="leading-none font-semibold text-foreground">
                  Ready to Get Started?
                </div>
              </div>
              <div data-slot="card-content" className="px-[var(--space-card-padding)]">
                <p className="text-muted-foreground mb-[var(--space-subtitle-mb)]">
                  Use our interactive selector tool to find the perfect gas spring specifications for your application.
                </p>
                <Button className="w-full">Launch Selector Tool</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
