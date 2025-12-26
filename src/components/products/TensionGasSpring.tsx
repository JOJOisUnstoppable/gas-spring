'use client'

import { Button } from '@/components/ui/button'

export default function TensionGasSpring() {
  return (
    <div className="flex flex-col">
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0F172B] via-[#2a5298] to-[#0F172B] text-white">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-bold text-5xl md:text-6xl leading-tight">Tension Gas Spring</h1>
              <p className="text-lg leading-relaxed opacity-90">
                Pull Gas Spring / Reverse Action Gas Spring - Professional Industrial Solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="h-10 px-6 bg-[#ff6b35] hover:bg-[#e55a2b] text-white">Get Technical Specs</Button>
                <Button className="h-10 px-6 bg-transparent border border-white text-white hover:bg-white/10">Request Quote</Button>
              </div>
            </div>
            <div className="relative">
              <img alt="Tension Gas Spring" className="w-full h-auto rounded-lg shadow-lg" src="/images/hero-fi.png" />
            </div>
          </div>
        </div>
      </section>

      <section id="definition" className="py-14 md:py-20 border-b border-border bg-background">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">1. Product Definition</h2>
          <h3 className="text-xl font-semibold text-[#2a5298] mb-4">Key Characteristics</h3>
          <div className="rounded-md border-l-4 border-primary bg-accent/10 p-5 mb-6">
            <p className="text-muted-foreground"><strong>Product Name:</strong> Tension Gas Spring / Pull Gas Spring / Reverse Action Gas Spring</p>
            <p className="text-muted-foreground"><strong>Free State:</strong> The piston rod is in the &quot;retracted&quot; position</p>
            <p className="text-muted-foreground"><strong>Working Characteristic:</strong> Extends when pulled, automatically retracts when released</p>
          </div>
          <h3 className="text-xl font-semibold text-[#2a5298] mb-2">Main Function</h3>
          <p className="text-muted-foreground">To enable covers/hatches that &quot;need to be pulled down and retracted&quot; to close automatically, while providing a controlled retraction speed. Typical applications include:</p>
          <ul className="mt-4 space-y-2">
            <li className="text-muted-foreground">Automatic retraction of hoods and hatches</li>
            <li className="text-muted-foreground">Assistance for medical equipment lifting</li>
            <li className="text-muted-foreground">Automatic barrier retraction</li>
            <li className="text-muted-foreground">Industrial equipment cover control</li>
          </ul>
        </div>
      </section>

      <section id="classification" className="py-14 md:py-20 border-b border-border bg-card">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">2. Structural Classification and Performance Differences</h2>
          <div className="overflow-x-auto rounded-lg border border-border mb-8">
            <table className="min-w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold border border-border">Type</th>
                  <th className="px-4 py-3 text-left font-semibold border border-border">Single Tube</th>
                  <th className="px-4 py-3 text-left font-semibold border border-border">Double Tube</th>
                </tr>
              </thead>
              <tbody className="[&>tr:nth-child(even)]:bg-muted/50">
                <tr>
                  <td className="px-4 py-3 border border-border"><strong>Rebound Speed</strong></td>
                  <td className="px-4 py-3 border border-border">Fast</td>
                  <td className="px-4 py-3 border border-border">Slower, more stable</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-border"><strong>Force Progression Rate</strong></td>
                  <td className="px-4 py-3 border border-border">High (100 N → 170-180 N)</td>
                  <td className="px-4 py-3 border border-border">Low (100 N → ~150 N)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-border"><strong>Closed Length Advantage</strong></td>
                  <td className="px-4 py-3 border border-border">Shorter (L ≥ 2S + 45)</td>
                  <td className="px-4 py-3 border border-border">Longer (L ≥ 2S + 70)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-border"><strong>Applicability</strong></td>
                  <td className="px-4 py-3 border border-border">Tight spaces, acceptable force progression</td>
                  <td className="px-4 py-3 border border-border">Stable force, high safety guidance requirements</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-md border border-border bg-muted/40 p-5">
              <h4 className="font-semibold text-primary mb-3">Single Tube Structure</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Simple design, lower cost</li>
                <li>Shorter closed length</li>
                <li>Fast rebound speed</li>
                <li>Noticeable force progression</li>
                <li>Preferred for tight space applications</li>
              </ul>
            </div>
            <div className="rounded-md border border-border bg-muted/40 p-5">
              <h4 className="font-semibold text-primary mb-3">Double Tube Structure</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Stable force curve</li>
                <li>Controllable rebound speed</li>
                <li>Good safety guidance</li>
                <li>Approx. 30% higher cost</li>
                <li>Preferred for high safety requirement applications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="parameters" className="py-14 md:py-20 border-b border-border bg-background">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">3. Core Parameter Range</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="rounded-md border border-[#d0d8e0] bg-gradient-to-br from-[#f5f7fa] to-[#e8ecf1] p-5 text-center">
              <h4 className="font-semibold text-primary mb-2">Force Range</h4>
              <p className="text-[#2a5298] font-semibold text-lg">100 – 1,500 N</p>
              <p className="text-muted-foreground text-xs">Common Stock: 150 / 250 / 350 N</p>
            </div>
            <div className="rounded-md border border-[#d0d8e0] bg-gradient-to-br from-[#f5f7fa] to-[#e8ecf1] p-5 text-center">
              <h4 className="font-semibold text-primary mb-2">Stroke Range</h4>
              <p className="text-[#2a5298] font-semibold text-lg">100 – 300 mm</p>
              <p className="text-muted-foreground text-xs">Available in 25 mm increments</p>
            </div>
            <div className="rounded-md border border-[#d0d8e0] bg-gradient-to-br from-[#f5f7fa] to-[#e8ecf1] p-5 text-center">
              <h4 className="font-semibold text-primary mb-2">Closed Length</h4>
              <p className="text-[#2a5298] font-semibold text-lg">200 – 450 mm</p>
              <p className="text-muted-foreground text-xs">Limited by formula</p>
            </div>
            <div className="rounded-md border border-[#d0d8e0] bg-gradient-to-br from-[#f5f7fa] to-[#e8ecf1] p-5 text-center">
              <h4 className="font-semibold text-primary mb-2">Minimum Order Qty</h4>
              <p className="text-[#2a5298] font-semibold text-lg">200 units</p>
              <p className="text-muted-foreground text-xs">Typical Annual Volume: 500 – 5,000 units</p>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-[#2a5298] mb-3">End Fitting Configuration</h3>
          <div className="rounded-md border-l-4 border-primary bg-accent/10 p-5">
            <p className="text-muted-foreground"><strong>Threaded Ends:</strong> Single/Double end M8 or M10 threads</p>
            <p className="text-muted-foreground"><strong>Ball Joint Ends:</strong> Ø10 mm ball joint</p>
            <p className="text-muted-foreground"><strong>Safety Accessories:</strong> Must be equipped with &quot;anti-detachment pin&quot; or safety wire</p>
          </div>
        </div>
      </section>

      <section id="principle" className="py-14 md:py-20 border-b border-border bg-card">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">4. Working Principle - Two Modes of Operation</h2>
          <h3 className="text-xl font-semibold text-[#2a5298] mb-3">Mode A: Traction Gas Spring (With Pull Force)</h3>
          <div className="rounded-md border-l-4 border-primary bg-muted/40 p-5 mb-6">
            <h4 className="font-semibold text-primary mb-2">Operation Flow</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><strong>Opening Phase:</strong> Cover&apos;s gravity overcomes initial pull force, pulling the rod out → Cover descends</li>
              <li><strong>Closing Phase:</strong> Gas spring automatically retracts, assisting the cover to pull back up</li>
            </ul>
            <p className="text-muted-foreground mt-3"><strong>Applicable Scenarios:</strong> Where the cover&apos;s natural descent is sufficient to pull the spring</p>
          </div>
          <h3 className="text-xl font-semibold text-[#2a5298] mb-3">Mode B: Pure Damper (Damping Only, No Pull Force)</h3>
          <div className="rounded-md border-l-4 border-primary bg-muted/40 p-5 mb-6">
            <h4 className="font-semibold text-primary mb-2">Operation Flow</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><strong>Opening Phase:</strong> Manual push throughout, no assistance</li>
              <li><strong>Closing Phase:</strong> Provides one-way damping only, allowing the cover to descend slowly</li>
            </ul>
            <p className="text-muted-foreground mt-3"><strong>Applicable Scenarios:</strong> Light covers or safety-critical scenarios requiring &quot;no assistance + slow descent&quot;</p>
          </div>
          <h3 className="text-xl font-semibold text-[#2a5298] mb-3">Working Principle Illustration</h3>
          <div className="rounded-md border-l-4 border-primary bg-accent/10 p-5">
            <p className="text-muted-foreground"><strong>Basic Principle:</strong> High-pressure nitrogen gas within the sealed cylinder generates a reverse thrust when the piston rod is pulled. When the external force is released, the gas pressure pushes the piston rod to retract, achieving the automatic closing function.</p>
            <p className="text-muted-foreground mt-2"><strong>Key Advantage:</strong> Compared to traditional springs, gas springs offer a more stable force curve and longer service life (typically over 100,000 cycles).</p>
          </div>
        </div>
      </section>

      <section id="formula" className="py-14 md:py-20 border-b border-border bg-background">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">5. Quick Selection Formula</h2>
          <h3 className="text-xl font-semibold text-[#2a5298] mb-3">Closed Length Calculation</h3>
          <div className="rounded-md border-l-4 border-primary bg-gradient-to-br from-[#e8f4f8] to-[#d4e9f2] p-5 font-mono">
            <p className="text-primary font-semibold">Single Tube: L ≥ 2S + 45</p>
            <p className="text-primary font-semibold">Double Tube: L ≥ 2S + 70</p>
            <p className="text-muted-foreground mt-3 text-sm">Where: L = Closed Length (mm) | S = Working Stroke (mm)</p>
          </div>
          <h3 className="text-xl font-semibold text-[#2a5298] mb-3">Selection Steps</h3>
          <ol className="list-decimal ml-6 space-y-2 text-muted-foreground">
            <li><strong>Determine Working Stroke S:</strong> Based on the required opening range of the cover/hatch</li>
            <li><strong>Select Structure Type:</strong> Choose Single or Double Tube based on space and force stability requirements</li>
            <li><strong>Calculate Closed Length:</strong> Use the formula above to determine the minimum closed length</li>
            <li><strong>Determine Force:</strong> Select appropriate force based on cover weight and pull resistance</li>
            <li><strong>Confirm End Fitting:</strong> Choose threaded or ball joint, and configure anti-detachment pin</li>
          </ol>
          <div className="rounded-md border-l-4 border-primary bg-accent/10 p-5 mt-6">
            <p className="text-muted-foreground"><strong>💡 Selection Tip:</strong> If unsure about specific parameters, we recommend starting with common stock items (150 N / 200 mm Stroke / Single Tube) for quick sample verification.</p>
          </div>
        </div>
      </section>

      <section id="faq" className="py-14 md:py-20 border-b border-border bg-card">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">6. High-Frequency Customer FAQ</h2>
          <div className="space-y-4">
            <div className="rounded-md border border-border bg-muted/50 p-5 border-l-4 border-l-primary">
              <div className="font-bold text-primary mb-2">① Can the initial pull force be reduced below 80 N?</div>
              <div className="text-muted-foreground">
                <strong>Answer:</strong> It can be reduced to 60 N, but this requires lowering the nitrogen pressure, which will reduce the service life by 20%. We recommend starting at 100 N. This is because excessively low initial pressure increases the gas expansion coefficient, affecting long-term stability.
              </div>
            </div>
            <div className="rounded-md border border-border bg-muted/50 p-5 border-l-4 border-l-primary">
              <div className="font-bold text-primary mb-2">② The force progression in the single tube is too high, can it be improved?</div>
              <div className="text-muted-foreground">
                <strong>Answer:</strong> Switch to a Double Tube structure for a flatter force curve, at an approx. 30% increase in cost. The double tube design reduces the force progression rate from 100 N → 170-180 N to 100 N → ~150 N by diverting damping.
              </div>
            </div>
            <div className="rounded-md border border-border bg-muted/50 p-5 border-l-4 border-l-primary">
              <div className="font-bold text-primary mb-2">③ What is the fastest lead time?</div>
              <div className="text-muted-foreground">
                <strong>Answer:</strong> Conventional 150/250 N, 150/200 mm stroke single tube blanks are stocked (500 units), shipping within 72 hours; non-standard items take 10 days. We maintain inventory on common specifications to ensure rapid response.
              </div>
            </div>
            <div className="rounded-md border border-border bg-muted/50 p-5 border-l-4 border-l-primary">
              <div className="font-bold text-primary mb-2">④ Certifications and Export?</div>
              <div className="text-muted-foreground">
                <strong>Answer:</strong> Default certifications include RoHS and 48h Salt Spray Test; military-grade products require additional MIL-STD-810G vibration testing, adding 7 days to the cycle. All products comply with the EU RoHS directive and can be exported directly to European and American markets.
              </div>
            </div>
            <div className="rounded-md border border-border bg-muted/50 p-5 border-l-4 border-l-primary">
              <div className="font-bold text-primary mb-2">⑤ I want to conceal the anti-detachment pin on the end fitting?</div>
              <div className="text-muted-foreground">
                <strong>Answer:</strong> We offer an &quot;internal thread + safety wire&quot; solution, which maintains the external appearance of a standard ball joint. This ensures both safety and an improved product aesthetic.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
