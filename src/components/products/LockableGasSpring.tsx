'use client'

import { Button } from '@/components/ui/button'

type LgsDict = {
  hero?: {
    title?: string
    subtitle?: string
    buttons?: { getSpecs?: string; requestQuote?: string }
    imageAlt?: string
  }
  why?: {
    title?: string
    subtitle?: string
    cards?: {
      zero?: { title?: string; desc?: string }
      flexible?: { title?: string; desc?: string }
      highLoad?: { title?: string; desc?: string }
    }
  }
  technology?: {
    title?: string
    imagesAlt?: { rigid?: string; elastic?: string }
    rigid?: { title?: string; points?: string[] }
    elastic?: { title?: string; points?: string[] }
  }
  applications?: {
    title?: string
    imageAlt?: string
    medical?: { title?: string; items?: string[] }
    furnitureOffice?: { title?: string; items?: string[] }
    industrial?: { title?: string; items?: string[] }
    aviation?: { title?: string; items?: string[] }
  }
  forcePerformance?: {
    title?: string
    desc?: string
    imageAlt?: string
    rigid?: string[]
    elastic?: string[]
    safetyLabel?: string
    safetyText?: string
  }
  selectionGuide?: {
    title?: string
    formulas?: {
      rigid?: { desc?: string; lines?: string[] }
      elastic?: { desc?: string; lines?: string[] }
    }
    keyParameters?: {
      force?: { label?: string; value?: string }
      stroke?: { label?: string; value?: string }
      release?: { label?: string; value?: string }
      series?: { label?: string; value?: string }
      life?: { label?: string; value?: string }
      retention?: { label?: string; value?: string }
    }
  }
  manufacturing?: {
    title?: string
    desc?: string
    imageAlt?: string
    cards?: {
      difference?: { title?: string; desc?: string }
      qa?: { title?: string; desc?: string }
    }
  }
  solutions?: {
    title?: string
    items?: Array<{ title?: string; desc?: string }>
  }
  faq?: {
    title?: string
    items?: Array<{ q?: string }>
  }
}

export default function LockableGasSpring({ dict }: { dict?: LgsDict }) {
  const lgs: LgsDict = dict ?? {}
  return (
    <div className="flex flex-col">
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0F172B] via-[#2a5298] to-[#0F172B] text-white">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-bold text-5xl md:text-6xl leading-tight">{lgs.hero?.title ?? 'Precision Locking at Any Position'}</h1>
              <p className="text-lg leading-relaxed opacity-90">
                {lgs.hero?.subtitle ?? 'Advanced lockable gas springs combining support, control, and reliability. Choose between rigid zero-displacement locking or elastic soft-rebound technology.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="h-10 px-6 bg-[#ff6b35] hover:bg-[#e55a2b] text-white">{lgs.hero?.buttons?.getSpecs ?? 'Get Technical Specs'}</Button>
                <Button className="h-10 px-6 bg-transparent border border-white text-white hover:bg-white/10">{lgs.hero?.buttons?.requestQuote ?? 'Request Quote'}</Button>
              </div>
            </div>
            <div className="relative">
              <img alt={lgs.hero?.imageAlt ?? 'Rigid Locking Gas Spring Cross-Section'} className="w-full h-auto rounded-lg shadow-lg" src="/images/hero-rigid-locking.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-bold text-4xl md:text-5xl mb-4">{lgs.why?.title ?? 'What is Adjustable Gas Spring?'}</h2>
            <p className="text-lg text-muted-foreground">{lgs.why?.subtitle ?? ''}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
              <div className="mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
              </div>
              <h3 className="font-bold text-xl mb-2">{lgs.why?.cards?.zero?.title ?? 'Zero Displacement Locking'}</h3>
              <p className="text-muted-foreground mb-4">{lgs.why?.cards?.zero?.desc ?? 'Rigid locking provides completely stable support without any movement, ensuring precise position retention.'}</p>
              <div className="mt-auto pt-4 border-t border-border/50">
                <img
                  src="/images/product/gas-spring/lockable-gas-spring/Rigid-in-compression.png"
                  alt="Rigid in compression"
                  className="w-full h-auto rounded-lg object-contain bg-white/50 p-2"
                />
              </div>
            </div>
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
              <div className="mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
              </div>
              <h3 className="font-bold text-xl mb-2">{lgs.why?.cards?.flexible?.title ?? 'Flexible Solutions'}</h3>
              <p className="text-muted-foreground mb-4">{lgs.why?.cards?.flexible?.desc ?? 'Elastic locking offers soft-rebound cushioning for applications requiring gentle positioning.'}</p>
              <div className="mt-auto pt-4 border-t border-border/50">
                <img
                  src="/images/product/gas-spring/lockable-gas-spring/Rigid-in-Extension.png"
                  alt="Flexible solutions"
                  className="w-full h-auto rounded-lg object-contain bg-white/50 p-2"
                />
              </div>
            </div>
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
              <div className="mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
              </div>
              <h3 className="font-bold text-xl mb-2">{lgs.why?.cards?.highLoad?.title ?? 'High Load Capacity'}</h3>
              <p className="text-muted-foreground mb-4">{lgs.why?.cards?.highLoad?.desc ?? 'Withstand lateral forces ≥ 2,000 N with reliable locking force plateau performance.'}</p>
              <div className="mt-auto pt-4 border-t border-border/50">
                <img
                  src="/images/product/gas-spring/lockable-gas-spring/flexible.png"
                  alt="Rigid in Extension"
                  className="w-full h-auto rounded-lg object-contain bg-white/50 p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="technology" className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container max-w-7xl mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl mb-12 text-center">{lgs.technology?.title ?? 'Rigid vs. Elastic: The Core Difference'}</h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <div className="relative">
                <img alt={lgs.technology?.imagesAlt?.rigid ?? 'Rigid Locking Mechanism'} className="w-full h-auto rounded-lg shadow-lg" src="/images/hero-rigid-locking.png" />
              </div>
              <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
                <h3 className="font-bold text-2xl mb-4 text-primary">{lgs.technology?.rigid?.title ?? 'Rigid Locking'}</h3>
                <ul className="space-y-3">
                  {(lgs.technology?.rigid?.points ?? [
                    'Zero Displacement – Completely rigid support',
                    'Dual Chamber – Oil-gas separation with floating piston',
                    'High Locking Force – ≥ 2,000 N lateral capacity',
                    'Best For – Operating tables, tooling fixtures, aircraft bins'
                  ]).map((txt: string, idx: number) => (
                    <li key={idx} className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                      <span>{txt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative">
                <img alt={lgs.technology?.imagesAlt?.elastic ?? 'Elastic Locking Mechanism'} className="w-full h-auto rounded-lg shadow-lg" src="/images/hero-elastic-locking.png" />
              </div>
              <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
                <h3 className="font-bold text-2xl mb-4 text-accent">{lgs.technology?.elastic?.title ?? 'Elastic Locking'}</h3>
                <ul className="space-y-3">
                  {(lgs.technology?.elastic?.points ?? [
                    'Soft Rebound – Allows ≤ 5 mm elastic displacement',
                    'Single Chamber – N₂ + lubricating oil mixture',
                    'Cushioning Effect – Gentle positioning with damping',
                    'Best For – Wheelchairs, hospital beds, office furniture'
                  ]).map((txt: string, idx: number) => (
                    <li key={idx} className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                      <span>{txt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="applications" className="py-16 md:py-24 bg-background">
        <div className="container max-w-7xl mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl mb-12 text-center">{lgs.applications?.title ?? 'Real-World Applications'}</h2>
          <div className="mb-12">
            <img alt={lgs.applications?.imageAlt ?? 'Lockable Gas Spring Applications'} className="w-full h-auto rounded-lg shadow-lg" src="/images/applications-collage.png" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
              <h3 className="font-bold text-xl mb-4 text-primary">{lgs.applications?.medical?.title ?? 'Medical'}</h3>
              <ul className="space-y-2 text-muted-foreground">
                {(lgs.applications?.medical?.items ?? [
                  'Wheelchair backrests',
                  'Hospital bed height adjustment',
                  'Operating table positioning'
                ]).map((txt: string, idx: number) => (
                  <li key={idx} className="flex gap-2"><span className="text-primary font-bold">•</span>{txt}</li>
                ))}
              </ul>
            </div>
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
              <h3 className="font-bold text-xl mb-4 text-primary">{lgs.applications?.furnitureOffice?.title ?? 'Furniture & Office'}</h3>
              <ul className="space-y-2 text-muted-foreground">
                {(lgs.applications?.furnitureOffice?.items ?? [
                  'Seat height adjustment',
                  'Keyboard tray positioning',
                  'Lifting display stands'
                ]).map((txt: string, idx: number) => (
                  <li key={idx} className="flex gap-2"><span className="text-primary font-bold">•</span>{txt}</li>
                ))}
              </ul>
            </div>
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
              <h3 className="font-bold text-xl mb-4 text-primary">{lgs.applications?.industrial?.title ?? 'Industrial'}</h3>
              <ul className="space-y-2 text-muted-foreground">
                {(lgs.applications?.industrial?.items ?? [
                  'Tooling fixtures',
                  'Equipment positioning',
                  'Workstation adjustment'
                ]).map((txt: string, idx: number) => (
                  <li key={idx} className="flex gap-2"><span className="text-primary font-bold">•</span>{txt}</li>
                ))}
              </ul>
            </div>
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
              <h3 className="font-bold text-xl mb-4 text-primary">{lgs.applications?.aviation?.title ?? 'Aviation'}</h3>
              <ul className="space-y-2 text-muted-foreground">
                {(lgs.applications?.aviation?.items ?? [
                  'Aircraft overhead bins',
                  'Cargo door control',
                  'Cabin equipment support'
                ]).map((txt: string, idx: number) => (
                  <li key={idx} className="flex gap-2"><span className="text-primary font-bold">•</span>{txt}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-accent/10">
        <div className="container max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-4xl md:text-5xl mb-8 text-center">{lgs.forcePerformance?.title ?? 'Locking Force Performance'}</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">{lgs.forcePerformance?.desc ?? 'The locking force curve shows the stability plateau—the higher and flatter the plateau, the more reliable the locking performance.'}</p>
            <div className="mb-12">
              <img alt={lgs.forcePerformance?.imageAlt ?? 'Locking Force Curves'} className="w-full h-auto rounded-lg shadow-lg" src="/images/force-curve-visualization.png" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card text-card-foreground flex flex-col gap-3 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-primary"></span>{lgs.forcePerformance?.rigid ? 'Rigid Locking' : (lgs.technology?.rigid?.title ?? 'Rigid Locking')}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {(lgs.forcePerformance?.rigid ?? [
                    '• Long, stable plateau region',
                    '• Theoretical spring ratio: 1.28–1.44',
                    '• Superior load retention',
                    '• Ideal for high-rigidity applications'
                  ]).map((txt: string, idx: number) => (
                    <li key={idx}>{txt}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-card text-card-foreground flex flex-col gap-3 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-accent"></span>{lgs.forcePerformance?.elastic ? 'Elastic Locking' : (lgs.technology?.elastic?.title ?? 'Elastic Locking')}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {(lgs.forcePerformance?.elastic ?? [
                    '• Gradual force curve with cushioning',
                    '• Softer load response',
                    '• Better for comfort-focused applications',
                    '• Gentle positioning with damping'
                  ]).map((txt: string, idx: number) => (
                    <li key={idx}>{txt}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-accent/10 border border-border rounded-lg">
              <p className="font-bold text-foreground mb-2">{lgs.forcePerformance?.safetyLabel ?? 'Safety Selection Principle'}</p>
              <p className="text-muted-foreground">{lgs.forcePerformance?.safetyText ?? "Always ensure: Plateau Force ≥ Customer's Maximum Lateral Load × 1.5 Safety Factor"}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-7xl mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl mb-12 text-center">{lgs.selectionGuide?.title ?? 'Quick Selection Guide'}</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
              <h3 className="font-bold text-xl mb-4">{(lgs.selectionGuide?.formulas?.rigid || lgs.selectionGuide?.formulas?.elastic) ? 'Selection Formulas' : 'Selection Formulas'}</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">{lgs.selectionGuide?.formulas?.rigid?.desc ?? '<strong>Rigid Locking:</strong> S = working stroke, L = extended length (mm)'}</p>
                  <div className="bg-muted p-4 rounded font-mono text-sm">
                    {(lgs.selectionGuide?.formulas?.rigid?.lines ?? ['Lmin = 2.4·S + 53 mm', 'Smax = L / 2.4 – 22 mm']).map((line: string, idx: number) => (
                      <span key={idx}>
                        {line}
                        {idx < (lgs.selectionGuide?.formulas?.rigid?.lines?.length ?? 2) - 1 ? <br /> : null}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">{lgs.selectionGuide?.formulas?.elastic?.desc ?? '<strong>Elastic Locking:</strong> S = working stroke, L = extended length (mm)'}</p>
                  <div className="bg-muted p-4 rounded font-mono text-sm">
                    {(lgs.selectionGuide?.formulas?.elastic?.lines ?? ['Lmin = 2·S + 53 mm', 'Smax = L / 2 – 26.5 mm']).map((line: string, idx: number) => (
                      <span key={idx}>
                        {line}
                        {idx < (lgs.selectionGuide?.formulas?.elastic?.lines?.length ?? 2) - 1 ? <br /> : null}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
              <h3 className="font-bold text-xl mb-4">Key Parameters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">{lgs.selectionGuide?.keyParameters?.force?.label ?? 'Force Range'}</p>
                  <p className="font-bold text-primary">{lgs.selectionGuide?.keyParameters?.force?.value ?? '200–1,200 N'}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{lgs.selectionGuide?.keyParameters?.stroke?.label ?? 'Stroke Range'}</p>
                  <p className="font-bold text-primary">{lgs.selectionGuide?.keyParameters?.stroke?.value ?? '50–300 mm (up to 500 mm)'}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{lgs.selectionGuide?.keyParameters?.release?.label ?? 'Release Mechanism'}</p>
                  <p className="font-bold text-primary">{lgs.selectionGuide?.keyParameters?.release?.value ?? '≤ Ø8 mm pin or top button'}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{lgs.selectionGuide?.keyParameters?.series?.label ?? 'Standard Series'}</p>
                  <p className="font-bold text-primary">{lgs.selectionGuide?.keyParameters?.series?.value ?? 'KQ10-22, KQ10-26, KQ10-28'}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{lgs.selectionGuide?.keyParameters?.life?.label ?? 'Cycle Life'}</p>
                  <p className="font-bold text-primary">{lgs.selectionGuide?.keyParameters?.life?.value ?? '10,000+ cycles without leakage'}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{lgs.selectionGuide?.keyParameters?.retention?.label ?? 'Pressure Retention'}</p>
                  <p className="font-bold text-primary">{lgs.selectionGuide?.keyParameters?.retention?.value ?? '≤ 5% drop over 24 hours'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-accent/10">
        <div className="container max-w-7xl mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl mb-8 text-center">{lgs.manufacturing?.title ?? 'Precision Manufacturing Process'}</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">{lgs.manufacturing?.desc ?? 'Every lockable gas spring undergoes rigorous quality control with specialized precision assembly steps.'}</p>
          <div className="mb-12">
            <img alt={lgs.manufacturing?.imageAlt ?? 'Manufacturing Process Flow'} className="w-full h-auto rounded-lg shadow-lg" src="/images/manufacturing-process.png" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
              <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                {lgs.manufacturing?.cards?.difference?.title ?? 'Key Difference'}
              </h3>
              <p className="text-muted-foreground">{lgs.manufacturing?.cards?.difference?.desc ?? 'Compared to standard gas springs, lockable versions include a critical precision assembly step for the floating piston, needle valve, and steel ball locking mechanism.'}</p>
            </div>
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
              <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                {lgs.manufacturing?.cards?.qa?.title ?? 'Quality Assurance'}
              </h3>
              <p className="text-muted-foreground">{lgs.manufacturing?.cards?.qa?.desc ?? 'Force characteristic testing, pressure retention verification, and 10,000-cycle leakage testing ensure long-term reliability and performance.'}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl mb-12 text-center">{lgs.solutions?.title ?? 'We Solve Your Challenges'}</h2>
          <div className="space-y-6">
            {(lgs.solutions?.items ?? [
              { title: 'Long Lead Times', desc: 'We reduce delivery from 8–12 weeks to 2–4 weeks as a direct replacement for Stabilus, Suspa, and Hahn products.' },
              { title: 'Micro-Movement After Locking', desc: 'Switch to our Rigid Series (KQ10-28 Rigid) for zero-displacement performance.' },
              { title: 'Release Mechanism Mismatch', desc: 'We offer full customization for ≤ Ø8 mm side pins or top buttons to fit your existing structure.' },
              { title: 'Missing Technical Drawings', desc: 'We provide sample measurement + CAD + 3D PDF within 48 hours.' },
              { title: 'Incomplete Certifications', desc: 'We deliver TS16949, ISO9001, RoHS, 96-hour salt spray, and SGS reports—all in one package.' }
            ]).map((item, idx) => (
              <div key={idx} className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border hover:shadow-lg transition-colors hover:bg-accent/5">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 bg-gradient-to-b from-white to-[#0F172B] rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-accent/10">
        <div className="container max-w-3xl mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl mb-12 text-center">{lgs.faq?.title ?? 'Frequently Asked Questions'}</h2>
          <div className="space-y-4">
            {(lgs.faq?.items ?? [
              { q: "What's the main difference between rigid and elastic locking?" },
              { q: 'How do I calculate the required extended length?' },
              { q: 'What safety factor should I use?' },
              { q: 'Can you customize the release mechanism?' }
            ]).map((qa, idx) => (
              <div key={idx} className="bg-card text-card-foreground flex flex-col rounded-xl py-6 shadow-sm border overflow-hidden">
                <button className="w-full p-6 text-left hover:bg-accent/10 transition-colors flex justify-between items-start">
                  <h3 className="font-bold text-lg pr-4">{qa?.q ?? ''}</h3>
                  <span className="text-primary flex-shrink-0">+</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
