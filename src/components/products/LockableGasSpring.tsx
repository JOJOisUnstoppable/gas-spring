'use client'

import { Button } from '@/components/ui/button'

export default function LockableGasSpring() {
  return (
    <div className="flex flex-col">
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0F172B] via-[#2a5298] to-[#0F172B] text-white">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-bold text-5xl md:text-6xl leading-tight">Precision Locking at <span className="text-primary">Any Position</span></h1>
              <p className="text-lg leading-relaxed opacity-90">
                Advanced lockable gas springs combining support, control, and reliability. Choose between rigid
                zero-displacement locking or elastic soft-rebound technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="h-10 px-6 bg-[#ff6b35] hover:bg-[#e55a2b] text-white">Get Technical Specs</Button>
                <Button className="h-10 px-6 bg-transparent border border-white text-white hover:bg-white/10">Request Quote</Button>
              </div>
            </div>
            <div className="relative">
              <img alt="Rigid Locking Gas Spring Cross-Section" className="w-full h-auto rounded-lg shadow-lg" src="/images/hero-rigid-locking.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-bold text-4xl md:text-5xl mb-4">Why Lockable Gas Springs?</h2>
            <p className="text-lg text-muted-foreground">More than just support—precision positioning with confidence</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
              <div className="mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Zero Displacement Locking</h3>
              <p className="text-muted-foreground">Rigid locking provides completely stable support without any movement, ensuring precise position retention.</p>
            </div>
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
              <div className="mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Flexible Solutions</h3>
              <p className="text-muted-foreground">Elastic locking offers soft-rebound cushioning for applications requiring gentle positioning.</p>
            </div>
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
              <div className="mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
              </div>
              <h3 className="font-bold text-xl mb-2">High Load Capacity</h3>
              <p className="text-muted-foreground">Withstand lateral forces ≥ 2,000 N with reliable locking force plateau performance.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="technology" className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container max-w-7xl mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl mb-12 text-center">Rigid vs. Elastic: The Core Difference</h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <div className="relative">
                <img alt="Rigid Locking Mechanism" className="w-full h-auto rounded-lg shadow-lg" src="/images/hero-rigid-locking.png" />
              </div>
              <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
                <h3 className="font-bold text-2xl mb-4 text-primary">Rigid Locking</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span><strong>Zero Displacement</strong> – Completely rigid support</span></li>
                  <li className="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span><strong>Dual Chamber</strong> – Oil-gas separation with floating piston</span></li>
                  <li className="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span><strong>High Locking Force</strong> – ≥ 2,000 N lateral capacity</span></li>
                  <li className="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span><strong>Best For</strong> – Operating tables, tooling fixtures, aircraft bins</span></li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative">
                <img alt="Elastic Locking Mechanism" className="w-full h-auto rounded-lg shadow-lg" src="/images/hero-elastic-locking.png" />
              </div>
              <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
                <h3 className="font-bold text-2xl mb-4 text-accent">Elastic Locking</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span><strong>Soft Rebound</strong> – Allows ≤ 5 mm elastic displacement</span></li>
                  <li className="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span><strong>Single Chamber</strong> – N₂ + lubricating oil mixture</span></li>
                  <li className="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span><strong>Cushioning Effect</strong> – Gentle positioning with damping</span></li>
                  <li className="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span><strong>Best For</strong> – Wheelchairs, hospital beds, office furniture</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div id="comparison" className="overflow-x-auto">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-4 px-4 font-bold">Feature</th>
                  <th className="text-center py-4 px-4 font-bold text-primary">Rigid Locking</th>
                  <th className="text-center py-4 px-4 font-bold text-accent">Elastic Locking</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border transition-colors hover:bg-accent/10">
                  <td className="py-4 px-4 font-medium text-foreground">Internal Structure</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">Oil-gas separation, dual chamber</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">Oil-gas mixture, single chamber</td>
                </tr>
                <tr className="border-b border-border transition-colors hover:bg-accent/10">
                  <td className="py-4 px-4 font-medium text-foreground">Locking Medium</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">Hydraulic oil (sealed)</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">N₂ + lubricating oil</td>
                </tr>
                <tr className="border-b border-border transition-colors hover:bg-accent/10">
                  <td className="py-4 px-4 font-medium text-foreground">Locked Performance</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">Zero displacement</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">≤ 5 mm elastic displacement</td>
                </tr>
                <tr className="border-b border-border transition-colors hover:bg-accent/10">
                  <td className="py-4 px-4 font-medium text-foreground">Locking Force</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">High (≥ 2,000 N)</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">Moderate with cushioning</td>
                </tr>
                <tr className="border-b border-border transition-colors hover:bg-accent/10">
                  <td className="py-4 px-4 font-medium text-foreground">Compression Ratio</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">High</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">Low</td>
                </tr>
                <tr className="border-b border-border transition-colors hover:bg-accent/10">
                  <td className="py-4 px-4 font-medium text-foreground">Force Range</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">200–1,200 N</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">200–1,200 N</td>
                </tr>
                <tr className="border-b border-border transition-colors hover:bg-accent/10">
                  <td className="py-4 px-4 font-medium text-foreground">Stroke Range</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">50–300 mm</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">50–500 mm (customizable)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="applications" className="py-16 md:py-24 bg-background">
        <div className="container max-w-7xl mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl mb-12 text-center">Real-World Applications</h2>
          <div className="mb-12">
            <img alt="Lockable Gas Spring Applications" className="w-full h-auto rounded-lg shadow-lg" src="/images/applications-collage.png" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
              <h3 className="font-bold text-xl mb-4 text-primary">Medical</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary font-bold">•</span>Wheelchair backrests</li>
                <li className="flex gap-2"><span className="text-primary font-bold">•</span>Hospital bed height adjustment</li>
                <li className="flex gap-2"><span className="text-primary font-bold">•</span>Operating table positioning</li>
              </ul>
            </div>
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
              <h3 className="font-bold text-xl mb-4 text-primary">Furniture &amp; Office</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary font-bold">•</span>Seat height adjustment</li>
                <li className="flex gap-2"><span className="text-primary font-bold">•</span>Keyboard tray positioning</li>
                <li className="flex gap-2"><span className="text-primary font-bold">•</span>Lifting display stands</li>
              </ul>
            </div>
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
              <h3 className="font-bold text-xl mb-4 text-primary">Industrial</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary font-bold">•</span>Tooling fixtures</li>
                <li className="flex gap-2"><span className="text-primary font-bold">•</span>Equipment positioning</li>
                <li className="flex gap-2"><span className="text-primary font-bold">•</span>Workstation adjustment</li>
              </ul>
            </div>
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
              <h3 className="font-bold text-xl mb-4 text-primary">Aviation</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary font-bold">•</span>Aircraft overhead bins</li>
                <li className="flex gap-2"><span className="text-primary font-bold">•</span>Cargo door control</li>
                <li className="flex gap-2"><span className="text-primary font-bold">•</span>Cabin equipment support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-accent/10">
        <div className="container max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-4xl md:text-5xl mb-8 text-center">Locking Force Performance</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">The locking force curve shows the stability plateau—the higher and flatter the plateau, the more reliable the locking performance.</p>
            <div className="mb-12">
              <img alt="Locking Force Curves" className="w-full h-auto rounded-lg shadow-lg" src="/images/force-curve-visualization.png" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card text-card-foreground flex flex-col gap-3 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-primary"></span>Rigid Locking</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Long, stable plateau region</li>
                  <li>• Theoretical spring ratio: 1.28–1.44</li>
                  <li>• Superior load retention</li>
                  <li>• Ideal for high-rigidity applications</li>
                </ul>
              </div>
              <div className="bg-card text-card-foreground flex flex-col gap-3 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-accent"></span>Elastic Locking</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Gradual force curve with cushioning</li>
                  <li>• Softer load response</li>
                  <li>• Better for comfort-focused applications</li>
                  <li>• Gentle positioning with damping</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-accent/10 border border-border rounded-lg">
              <p className="font-bold text-foreground mb-2">Safety Selection Principle</p>
              <p className="text-muted-foreground">Always ensure: <strong>Plateau Force ≥ Customer&apos;s Maximum Lateral Load × 1.5 Safety Factor</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-7xl mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl mb-12 text-center">Quick Selection Guide</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
              <h3 className="font-bold text-xl mb-4">Selection Formulas</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2"><strong>Rigid Locking:</strong> S = working stroke, L = extended length (mm)</p>
                  <div className="bg-muted p-4 rounded font-mono text-sm">Lmin = 2.4·S + 53 mm<br />Smax = L / 2.4 – 22 mm</div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2"><strong>Elastic Locking:</strong> S = working stroke, L = extended length (mm)</p>
                  <div className="bg-muted p-4 rounded font-mono text-sm">Lmin = 2·S + 53 mm<br />Smax = L / 2 – 26.5 mm</div>
                </div>
              </div>
            </div>
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
              <h3 className="font-bold text-xl mb-4">Key Parameters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Force Range</p>
                  <p className="font-bold text-primary">200–1,200 N</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Stroke Range</p>
                  <p className="font-bold text-primary">50–300 mm (up to 500 mm)</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Release Mechanism</p>
                  <p className="font-bold text-primary">≤ Ø8 mm pin or top button</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Standard Series</p>
                  <p className="font-bold text-primary">KQ10-22, KQ10-26, KQ10-28</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Cycle Life</p>
                  <p className="font-bold text-primary">10,000+ cycles without leakage</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pressure Retention</p>
                  <p className="font-bold text-primary">≤ 5% drop over 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-accent/10">
        <div className="container max-w-7xl mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl mb-8 text-center">Precision Manufacturing Process</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Every lockable gas spring undergoes rigorous quality control with specialized precision assembly steps.</p>
          <div className="mb-12">
            <img alt="Manufacturing Process Flow" className="w-full h-auto rounded-lg shadow-lg" src="/images/manufacturing-process.png" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
              <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                Key Difference
              </h3>
              <p className="text-muted-foreground">Compared to standard gas springs, lockable versions include a critical precision assembly step for the floating piston, needle valve, and steel ball locking mechanism.</p>
            </div>
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
              <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                Quality Assurance
              </h3>
              <p className="text-muted-foreground">Force characteristic testing, pressure retention verification, and 10,000-cycle leakage testing ensure long-term reliability and performance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl mb-12 text-center">We Solve Your Challenges</h2>
          <div className="space-y-6">
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border hover:shadow-lg transition-colors hover:bg-accent/5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 bg-gradient-to-b from-white to-[#0F172B] rounded-full"></div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Long Lead Times</h3>
                  <p className="text-muted-foreground">We reduce delivery from 8–12 weeks to 2–4 weeks as a direct replacement for Stabilus, Suspa, and Hahn products.</p>
                </div>
              </div>
            </div>
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border hover:shadow-lg transition-colors hover:bg-accent/5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 bg-gradient-to-b from-white to-[#0F172B] rounded-full"></div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Micro-Movement After Locking</h3>
                  <p className="text-muted-foreground">Switch to our Rigid Series (KQ10-28 Rigid) for zero-displacement performance.</p>
                </div>
              </div>
            </div>
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border hover:shadow-lg transition-colors hover:bg-accent/5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 bg-gradient-to-b from-white to-[#0F172B] rounded-full"></div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Release Mechanism Mismatch</h3>
                  <p className="text-muted-foreground">We offer full customization for ≤ Ø8 mm side pins or top buttons to fit your existing structure.</p>
                </div>
              </div>
            </div>
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border hover:shadow-lg transition-colors hover:bg-accent/5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 bg-gradient-to-b from-white to-[#0F172B] rounded-full"></div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Missing Technical Drawings</h3>
                  <p className="text-muted-foreground">We provide sample measurement + CAD + 3D PDF within 48 hours.</p>
                </div>
              </div>
            </div>
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border hover:shadow-lg transition-colors hover:bg-accent/5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 bg-gradient-to-b from-white to-[#0F172B] rounded-full"></div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Incomplete Certifications</h3>
                  <p className="text-muted-foreground">We deliver TS16949, ISO9001, RoHS, 96-hour salt spray, and SGS reports—all in one package.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-accent/10">
        <div className="container max-w-3xl mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-card text-card-foreground flex flex-col rounded-xl py-6 shadow-sm border overflow-hidden">
              <button className="w-full p-6 text-left hover:bg-accent/10 transition-colors flex justify-between items-start">
                <h3 className="font-bold text-lg pr-4">What&apos;s the main difference between rigid and elastic locking?</h3>
                <span className="text-primary flex-shrink-0">+</span>
              </button>
            </div>
            <div className="bg-card text-card-foreground flex flex-col rounded-xl py-6 shadow-sm border overflow-hidden">
              <button className="w-full p-6 text-left hover:bg-accent/10 transition-colors flex justify-between items-start">
                <h3 className="font-bold text-lg pr-4">How do I calculate the required extended length?</h3>
                <span className="text-primary flex-shrink-0">+</span>
              </button>
            </div>
            <div className="bg-card text-card-foreground flex flex-col rounded-xl py-6 shadow-sm border overflow-hidden">
              <button className="w-full p-6 text-left hover:bg-accent/10 transition-colors flex justify-between items-start">
                <h3 className="font-bold text-lg pr-4">What safety factor should I use?</h3>
                <span className="text-primary flex-shrink-0">+</span>
              </button>
            </div>
            <div className="bg-card text-card-foreground flex flex-col rounded-xl py-6 shadow-sm border overflow-hidden">
              <button className="w-full p-6 text-left hover:bg-accent/10 transition-colors flex justify-between items-start">
                <h3 className="font-bold text-lg pr-4">Can you customize the release mechanism?</h3>
                <span className="text-primary flex-shrink-0">+</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
