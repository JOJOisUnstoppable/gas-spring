'use client'

import { Button } from '@/components/ui/button'

export default function PushToUnlockGasSpring() {
  return (
    <div className="flex flex-col">
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0F172B] via-[#2a5298] to-[#0F172B] text-white">
        <div className="container max-w-7xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block mb-4 px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
              Advanced Gas Spring Solution
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Push-to-Unlock Gas Spring
            </h1>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              <strong>One-hand operation. Compression self-locking. Quick release.</strong> The Push-to-Unlock Gas Spring is an advanced solution designed for applications requiring quick folding, positioning, and release.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="h-10 rounded-md px-6 w-full sm:w-auto bg-[#ff6b35] hover:bg-[#e55a2b] text-white">
                Request Sample
              </Button>
              <Button className="h-10 rounded-md px-6 w-full sm:w-auto bg-transparent border border-white text-white hover:bg-white/10">
                Download Datasheet
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="definition" className="py-16 md:py-24 border-b border-border">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Product Definition</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-primary mb-2">Alternative Names</h3>
                  <p className="text-muted-foreground">
                    Compression End Self-Locking Gas Spring / Self-Locking Gas Spring / Push-to-Unlock Gas Spring
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Working Mechanism</h3>
                  <p className="text-muted-foreground">
                    Based on a standard gas spring, the piston rod <strong>automatically triggers an internal lock when compressed to the end of its shortest stroke</strong>, maintaining the shortest state. By <strong>lightly pushing down again</strong> (Push-to-Unlock), the lock is disengaged, and the spring automatically extends to its free length.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Key Selling Points</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary font-bold">•</span><span><strong>One-Hand Operation:</strong> Simple to operate without an external handle or button.</span></li>
                    <li className="flex gap-3"><span className="text-primary font-bold">•</span><span><strong>Space Saving:</strong> The locking mechanism is internal, requiring no extra internal space.</span></li>
                    <li className="flex gap-3"><span className="text-primary font-bold">•</span><span><strong>Quick Release:</strong> Ideal for medical equipment, furniture, and cabinets.</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-border shadow-sm">
              <img alt="Push-to-Unlock Gas Spring Product Render" className="w-full h-auto object-cover" src="/images/product_render.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section id="mechanism" className="py-16 md:py-24 border-b border-border bg-card">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden border border-border shadow-sm order-2 md:order-1">
              <img alt="Gas Spring Components and Locking Mechanism" className="w-full h-auto object-cover" src="/images/product/gas-spring/push-to-unlock-gas-spring/diagram_locking_mechanism.jpg" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-primary">Unlocking Mechanism &amp; Structure</h2>
              <p className="text-muted-foreground mb-6">The key to the Push-to-Unlock Gas Spring lies in its <strong>built-in mechanical locking component</strong>.</p>
              <div className="space-y-5">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-1">Lock Position</h3>
                  <p className="text-sm text-muted-foreground">The locking component is located at the end of the piston.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-1">Unlocking Stroke</h3>
                  <p className="text-sm text-muted-foreground">A fixed &quot;unlocking stroke&quot; of <strong>8–10 mm</strong> is set at the end of the travel (non-adjustable).</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-1">Unlocking Force</h3>
                  <p className="text-sm text-muted-foreground">Typically between <strong>20–40 N</strong>, allowing for easy operation with just a thumb or simple lever.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-1">Locking Reliability</h3>
                  <p className="text-sm text-muted-foreground">Can withstand a thrust force of <strong>≥ 2 times the nominal force</strong> without rebounding.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="specs" className="py-16 md:py-24 border-b border-border">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-primary">Key Specifications</h2>
          <p className="text-muted-foreground mb-8">Taking the popular <strong>ZQ8-18 series</strong> as an example for your selection reference:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold border border-border">Parameter Name</th>
                  <th className="text-left py-3 px-4 font-semibold border border-border">Specification Range</th>
                  <th className="text-left py-3 px-4 font-semibold border border-border">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="py-3 px-4 font-medium">Tube/Rod Diameter</td>
                  <td className="py-3 px-4">18 / 8 mm</td>
                  <td className="py-3 px-4 text-muted-foreground">Industry standard size, easy to interchange.</td>
                </tr>
                <tr className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="py-3 px-4 font-medium">Force Range</td>
                  <td className="py-3 px-4">100 – 350 N</td>
                  <td className="py-3 px-4 text-muted-foreground"><strong>Common Stock Levels: 150 N, 200 N, 250 N</strong></td>
                </tr>
                <tr className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="py-3 px-4 font-medium">Stroke</td>
                  <td className="py-3 px-4">60 – 200 mm</td>
                  <td className="py-3 px-4 text-muted-foreground">Available in 10 mm increments for flexible selection.</td>
                </tr>
                <tr className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="py-3 px-4 font-medium">Unlocking Stroke</td>
                  <td className="py-3 px-4">Fixed 10 mm</td>
                  <td className="py-3 px-4 text-muted-foreground"><strong>Fixed by structure, non-reducible</strong></td>
                </tr>
                <tr className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="py-3 px-4 font-medium">Thread Specification</td>
                  <td className="py-3 px-4">M8×1 / M7×1</td>
                  <td className="py-3 px-4 text-muted-foreground">Rod end thread length can be customized.</td>
                </tr>
                <tr className="hover:bg-secondary/50 transition-colors">
                  <td className="py-3 px-4 font-medium">Damping Characteristics</td>
                  <td className="py-3 px-4">Slight Damping</td>
                  <td className="py-3 px-4 text-muted-foreground">Secondary oil adjustment available upon request.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-12 rounded-lg overflow-hidden border border-border shadow-sm">
            <img alt="Push-to-Unlock Gas Spring Product Series" className="w-full h-auto object-cover" src="/images/product/gas-spring/push-to-unlock-gas-spring/product_variety.jpg" />
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 md:py-24 border-b border-border bg-card">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-primary">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
              <div data-slot="card-content" className="px-6 pt-6">
                <h3 className="font-semibold mb-3 text-primary">① Can damping be added to both ends?</h3>
                <p className="text-sm text-muted-foreground"><strong>Yes.</strong> However, the first sample only provides baseline damping. We recommend customers test it on their machine and provide feedback, and we will perform a secondary oil adjustment for the best result.</p>
              </div>
            </div>
            <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
              <div data-slot="card-content" className="px-6 pt-6">
                <h3 className="font-semibold mb-3 text-primary">② Can the 1 cm unlocking stroke be shortened?</h3>
                <p className="text-sm text-muted-foreground"><strong>No, it cannot be shortened.</strong> This is a fixed value determined by the internal locking structure. If space is critical, we suggest considering the &quot;Side Button&quot; type of self-locking gas spring.</p>
              </div>
            </div>
            <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
              <div data-slot="card-content" className="px-6 pt-6">
                <h3 className="font-semibold mb-3 text-primary">③ What is the maximum thread size?</h3>
                <p className="text-sm text-muted-foreground">The rod end can be up to <strong>8–10 mm</strong>, and the tube end up to <strong>7 mm</strong>. The thread length can be customized according to customer requirements.</p>
              </div>
            </div>
            <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
              <div data-slot="card-content" className="px-6 pt-6">
                <h3 className="font-semibold mb-3 text-primary">④ Are there requirements for installation direction?</h3>
                <p className="text-sm text-muted-foreground"><strong>Yes.</strong> If you want to achieve a &quot;slow pop-up&quot; damping effect at the end of extension, the piston rod must be installed facing downwards to utilize the oil for damping control.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 border-b border-border">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-primary">Selection &amp; Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2 text-primary">In-Stock Supply</h3>
              <p className="text-muted-foreground text-sm">ZQ8-18 Series in <strong>150/200/250 N</strong> force levels, <strong>shippable within 48 hours</strong>.</p>
            </div>
            <div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2 text-primary">Non-Standard Customization</h3>
              <p className="text-muted-foreground text-sm">Non-standard force or stroke, <strong>sampling completed within 2 weeks</strong>.</p>
            </div>
            <div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2 text-primary">Quick Alternative</h3>
              <p className="text-muted-foreground text-sm">Can quickly replace <strong>Stabilus BLOC-O-LIFT 8-18 models below 300 N</strong>, with overall length tolerance controlled to <strong>±1 mm</strong>.</p>
            </div>
            <div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2 text-primary">Product Certification</h3>
              <p className="text-muted-foreground text-sm"><strong>RoHS, Salt Spray 48 h, ISO9001</strong> reports available. Automotive-grade <strong>TS16949</strong> certification requires an additional 1 week.</p>
            </div>
            <div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2 text-primary">Customized Release Mechanism</h3>
              <p className="text-muted-foreground text-sm">Currently available in <strong>&quot;Top Thumb Press&quot;</strong> and <strong>&quot;Side Lever&quot;</strong> types. Side Lever is prioritized if lateral space is insufficient.</p>
            </div>
            <div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2 text-primary">Technical Support</h3>
              <p className="text-muted-foreground text-sm">Detailed technical drawings, customized services, and sample testing available upon request.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
