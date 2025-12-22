'use client'

import { Button } from '@/components/ui/button'

export default function MicroGasSpring() {
  return (
    <div className="flex flex-col">
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0F172B] via-[#2a5298] to-[#0F172B] text-white">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-bold text-5xl md:text-6xl leading-tight">Micro Gas Spring Solutions</h1>
              <p className="text-lg leading-relaxed opacity-90">
                Precision-engineered miniature gas springs for compact spaces—delivering light thrust, short stroke, and silent operation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="h-10 px-6 bg-[#ff6b35] hover:bg-[#e55a2b] text-white">Get Technical Specs</Button>
                <Button className="h-10 px-6 bg-transparent border border-white text-white hover:bg-white/10">Request Quote</Button>
              </div>
            </div>
            <div className="relative">
              <img alt="Micro Gas Spring Product Image" className="w-full h-auto rounded-lg shadow-lg" src="/images/product/product-gs-003.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section id="definition" className="py-14 md:py-20 border-b border-border bg-background">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">1. Product Definition</h2>
          <p className="text-muted-foreground mb-4">
            Micro Gas Spring, also known as <strong>miniature gas spring</strong>, <strong>micro gas strut</strong>, or <strong>small gas spring</strong>, is a precision product created by proportionally scaling down standard gas springs.
          </p>
          <div className="rounded-md border-l-4 border-primary bg-accent/10 p-5 italic text-primary font-medium mb-6">
            The core value lies in meeting the stringent demands of confined spaces for <strong>&quot;light thrust, short stroke, and low noise&quot;</strong>—making it an irreplaceable precision micro-actuator where traditional mechanical springs or standard gas springs fall short.
          </div>
          <p className="text-muted-foreground">
            These compact actuators are engineered for applications where space is at a premium and performance cannot be compromised. Whether supporting inspection hatches in medical devices or enabling smooth operation in handheld tools, micro gas springs deliver reliable, whisper-quiet motion control.
          </p>
        </div>
      </section>

      <section id="specifications" className="py-14 md:py-20 border-b border-border bg-card">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">2. Core Dimensions &amp; Force Values</h2>
          <p className="text-muted-foreground mb-6">
            Micro gas springs feature ultra-compact design with refined force options to accommodate diverse miniaturized equipment requirements.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="min-w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold border border-border">Parameter</th>
                  <th className="px-4 py-3 text-left font-semibold border border-border">Specification Range</th>
                  <th className="px-4 py-3 text-left font-semibold border border-border">Remarks</th>
                </tr>
              </thead>
              <tbody className="[&>tr:nth-child(even)]:bg-muted/50">
                <tr>
                  <td className="px-4 py-3 border border-border"><strong>Tube Diameter (Ø)</strong></td>
                  <td className="px-4 py-3 border border-border">8 mm / <span className="rounded bg-accent/20 px-2 py-0.5">10 mm</span></td>
                  <td className="px-4 py-3 border border-border">10 mm is the market standard, most widely applied.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-border"><strong>Rod Diameter (Ø)</strong></td>
                  <td className="px-4 py-3 border border-border">4 mm / 5 mm / 6 mm</td>
                  <td className="px-4 py-3 border border-border">Rod diameter determines load capacity and structural strength.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-border"><strong>Stroke</strong></td>
                  <td className="px-4 py-3 border border-border">20 – 130 mm</td>
                  <td className="px-4 py-3 border border-border">Increments of 5 mm provide flexible selection options.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-border"><strong>Force (Thrust)</strong></td>
                  <td className="px-4 py-3 border border-border">30 – 120 N</td>
                  <td className="px-4 py-3 border border-border"><span className="rounded bg-accent/20 px-2 py-0.5">30 / 50 / 80 / 100 N</span> are standard stock configurations.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-border"><strong>Unit Weight</strong></td>
                  <td className="px-4 py-3 border border-border">≤ 60 g</td>
                  <td className="px-4 py-3 border border-border">Applies to 10–100 mm stroke range; ideal for weight-sensitive designs.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-b border-border bg-background">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">3. Performance Indicators</h2>
          <p className="text-muted-foreground mb-6">
            While maintaining ultra-compact dimensions, micro gas springs are optimized for performance, with particular emphasis on <strong>low noise</strong> and <strong>extended service life</strong>.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="min-w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold border border-border">Performance Indicator</th>
                  <th className="px-4 py-3 text-left font-semibold border border-border">Standard Requirement</th>
                  <th className="px-4 py-3 text-left font-semibold border border-border">Remarks</th>
                </tr>
              </thead>
              <tbody className="[&>tr:nth-child(even)]:bg-muted/50">
                <tr>
                  <td className="px-4 py-3 border border-border"><strong>Dynamic Noise Level</strong></td>
                  <td className="px-4 py-3 border border-border">≤ 45 dB (@ 0.3 m distance)</td>
                  <td className="px-4 py-3 border border-border">Ensures quiet operation, meeting precision instrument requirements.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-border"><strong>Cycle Life</strong></td>
                  <td className="px-4 py-3 border border-border">≥ 50,000 cycles</td>
                  <td className="px-4 py-3 border border-border">Guaranteed leak-free operation under rated load and stroke.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-border"><strong>Salt Spray Test</strong></td>
                  <td className="px-4 py-3 border border-border">24 h: white rust ≤ 5%</td>
                  <td className="px-4 py-3 border border-border">Standard corrosion resistance; 48 h premium option available.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-border"><strong>Unlock Force</strong> (self-locking models)</td>
                  <td className="px-4 py-3 border border-border">15 – 25 N</td>
                  <td className="px-4 py-3 border border-border">Precise unlock force control for self-locking variants.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-b border-border bg-card">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">4. End Connector Types</h2>
          <p className="text-muted-foreground mb-6">
            To accommodate diverse installation environments, micro gas springs offer multiple end connector options for rapid, reliable integration.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="min-w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold border border-border">Connector Type</th>
                  <th className="px-4 py-3 text-left font-semibold border border-border">Specification</th>
                  <th className="px-4 py-3 text-left font-semibold border border-border">Typical Application</th>
                </tr>
              </thead>
              <tbody className="[&>tr:nth-child(even)]:bg-muted/50">
                <tr>
                  <td className="px-4 py-3 border border-border"><strong>Metal Threaded</strong></td>
                  <td className="px-4 py-3 border border-border">M5×0.8 thread (rod end &amp; tube end)</td>
                  <td className="px-4 py-3 border border-border">High-strength applications, precise alignment, or nut-fixed installations.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-border"><strong>Plastic Quick-Lock</strong></td>
                  <td className="px-4 py-3 border border-border">Push-fit into Ø6 hole (no nut required)</td>
                  <td className="px-4 py-3 border border-border">Fast assembly, plastic or thin-sheet structures; greatly simplifies installation.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-border"><strong>Ball Joint</strong></td>
                  <td className="px-4 py-3 border border-border">Ø6 mm stainless steel ball / POM socket</td>
                  <td className="px-4 py-3 border border-border">Requires 180° rotation or multi-angle articulation in complex linkages.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="applications" className="py-14 md:py-20 border-b border-border bg-background">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">5. Typical Applications</h2>
          <p className="text-muted-foreground mb-6">
            Leveraging their compact size, lightweight design, and precise thrust characteristics, micro gas springs are extensively deployed in space and weight-sensitive precision equipment.
          </p>
          <ul className="space-y-4">
            <li className="p-4 border-b border-border">
              <span className="font-semibold text-primary">Small Inspection Hatches:</span> Medical POCT (Point-of-Care Testing) devices, analytical instruments—providing lid support and cushioning.
            </li>
            <li className="p-4 border-b border-border">
              <span className="font-semibold text-primary">Handheld Tool Access Doors:</span> Electric torque wrenches, precision measurement instruments—enabling smooth battery cover or service hatch operation.
            </li>
            <li className="p-4 border-b border-border">
              <span className="font-semibold text-primary">Mini Drawer Auto-Eject:</span> Cash registers, test fixtures, precision storage cabinets—delivering gentle, automatic drawer extension.
            </li>
            <li className="p-4 border-b border-border">
              <span className="font-semibold text-primary">Unmanned Aerial Vehicle (UAV) Payload Doors:</span> In <strong>weight-critical applications</strong>, providing reliable hatch actuation while minimizing payload burden.
            </li>
          </ul>
        </div>
      </section>

      <section id="faq" className="py-14 md:py-20 border-b border-border bg-card">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">6. Customer FAQs &amp; Response Templates</h2>
          <p className="text-muted-foreground mb-6">
            Below are the most frequently asked questions during selection and quotation, with professional responses to quickly identify customer needs.
          </p>
          <div className="space-y-4">
            <div className="rounded-md border border-border bg-muted/50 p-5 border-l-4 border-l-primary">
              <div className="font-bold text-primary mb-2">① Can you manufacture 8 mm tube diameter?</div>
              <div className="text-muted-foreground">
                <strong>Yes</strong>, but with limitations: maximum force is 60 N, stroke ≤ 80 mm; minimum order quantity (MOQ) is 500 units.
                <div className="inline-block mt-2 rounded bg-[#ff6b35] text-white text-xs px-2 py-1">8 mm specs: force/stroke/MOQ constraints</div>
              </div>
            </div>
            <div className="rounded-md border border-border bg-muted/50 p-5 border-l-4 border-l-primary">
              <div className="font-bold text-primary mb-2">② Can noise be reduced below 40 dB?</div>
              <div className="text-muted-foreground">
                Achievable at <span className="rounded bg-accent/20 px-2 py-0.5">30–50 N</span> force range, reaching <span className="rounded bg-accent/20 px-2 py-0.5">38 dB</span>. Requires secondary oil tuning and sample testing on customer equipment for validation.
                <div className="inline-block mt-2 rounded bg-[#ff6b35] text-white text-xs px-2 py-1">38 dB requires: force range / oil tuning / field testing</div>
              </div>
            </div>
            <div className="rounded-md border border-border bg-muted/50 p-5 border-l-4 border-l-primary">
              <div className="font-bold text-primary mb-2">③ What is the fastest lead time?</div>
              <div className="text-muted-foreground">
                Standard forces <span className="rounded bg-accent/20 px-2 py-0.5">30/50/80 N</span> and strokes <span className="rounded bg-accent/20 px-2 py-0.5">60/80/100 mm</span> maintain stock of 1,000 units, enabling <span className="rounded bg-accent/20 px-2 py-0.5">48-hour shipment</span>. Custom configurations require 10 days.
                <div className="inline-block mt-2 rounded bg-[#ff6b35] text-white text-xs px-2 py-1">Stock specs: 48 h delivery</div>
              </div>
            </div>
            <div className="rounded-md border border-border bg-muted/50 p-5 border-l-4 border-l-primary">
              <div className="font-bold text-primary mb-2">④ Can weight be further reduced?</div>
              <div className="text-muted-foreground">
                Optional <span className="rounded bg-accent/20 px-2 py-0.5">full aluminum tube + POM end connector</span> configuration achieves <span className="rounded bg-accent/20 px-2 py-0.5">18% weight reduction</span> at same specifications, though cycle life decreases approximately 20%.
                <div className="inline-block mt-2 rounded bg-[#ff6b35] text-white text-xs px-2 py-1">Lightweight option: 18% lighter, 20% shorter life</div>
              </div>
            </div>
            <div className="rounded-md border border-border bg-muted/50 p-5 border-l-4 border-l-primary">
              <div className="font-bold text-primary mb-2">⑤ What certifications are available?</div>
              <div className="text-muted-foreground">
                Standard certifications include <span className="rounded bg-accent/20 px-2 py-0.5">RoHS and REACH</span> compliance. Medical-grade <span className="rounded bg-accent/20 px-2 py-0.5">ISO 10993 biocompatibility</span> certification requires an additional 7 days.
                <div className="inline-block mt-2 rounded bg-[#ff6b35] text-white text-xs px-2 py-1">Default: RoHS/REACH; Optional: ISO 10993</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
