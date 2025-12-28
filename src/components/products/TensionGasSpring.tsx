'use client'

import { Button } from '@/components/ui/button'

type TgsDict = {
  hero?: {
    title?: string
    subtitle?: string
    buttons?: { getSpecs?: string; requestQuote?: string }
    imageAlt?: string
  }
  definition?: {
    title?: string
    keyCharacteristics?: {
      title?: string
      items?: Array<{ label?: string; value?: string }>
    }
    mainFunction?: {
      title?: string
      desc?: string
      scenarios?: string[]
    }
  }
  classification?: {
    title?: string
    table?: {
      headers?: string[]
      rows?: Array<{ label?: string; single?: string; double?: string }>
    }
    cards?: {
      singleTube?: { title?: string; items?: string[] }
      doubleTube?: { title?: string; items?: string[] }
    }
  }
  parameters?: {
    title?: string
    cards?: {
      force?: { title?: string; value?: string; note?: string }
      stroke?: { title?: string; value?: string; note?: string }
      closedLength?: { title?: string; value?: string; note?: string }
      moq?: { title?: string; value?: string; note?: string }
    }
    endFitting?: { title?: string; items?: string[] }
  }
  principle?: {
    title?: string
    modeA?: { title?: string; flow?: string[]; scenario?: string }
    modeB?: { title?: string; flow?: string[]; scenario?: string }
    illustration?: { title?: string; points?: string[] }
    labels?: { operationFlow?: string; applicableScenarios?: string }
  }
  formula?: {
    title?: string
    closedLength?: { title?: string; lines?: string[] }
    selection?: { title?: string; steps?: string[] }
    tipLabel?: string
    tip?: string
  }
  faq?: {
    title?: string
    items?: Array<{ q?: string; a?: string }>
  }
  CTA?: { title?: string; desc?: string[] }
}

export default function TensionGasSpring({ dict }: { dict?: TgsDict }) {
  const tgs: TgsDict = dict ?? {}
  return (
    <div className="flex flex-col">
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0F172B] via-[#2a5298] to-[#0F172B] text-white">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-bold text-5xl md:text-6xl leading-tight">{tgs.hero?.title ?? 'Tension Gas Spring'}</h1>
              <p className="text-lg leading-relaxed opacity-90">
                {tgs.hero?.subtitle ?? 'Pull Gas Spring / Reverse Action Gas Spring - Professional Industrial Solutions'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="h-10 px-6 bg-[#ff6b35] hover:bg-[#e55a2b] text-white">{tgs.hero?.buttons?.getSpecs ?? 'Get Technical Specs'}</Button>
                <Button className="h-10 px-6 bg-transparent border border-white text-white hover:bg-white/10">{tgs.hero?.buttons?.requestQuote ?? 'Request Quote'}</Button>
              </div>
            </div>
            <div className="relative">
              <img alt={tgs.hero?.imageAlt ?? 'Tension Gas Spring'} className="w-full h-auto rounded-lg shadow-lg" src="/images/hero-fi.png" />
            </div>
          </div>
        </div>
      </section>

      <section id="definition" className="py-14 md:py-20 border-b border-border bg-background">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">{tgs.definition?.title ?? '1. Product Definition'}</h2>
          <h3 className="text-xl font-semibold text-[#2a5298] mb-4">{tgs.definition?.keyCharacteristics?.title ?? 'Key Characteristics'}</h3>
          <div className="rounded-md border-l-4 border-primary bg-accent/10 p-5 mb-6">
            {(tgs.definition?.keyCharacteristics?.items ?? [
              { label: 'Product Name', value: 'Tension Gas Spring / Pull Gas Spring / Reverse Action Gas Spring' },
              { label: 'Free State', value: 'The piston rod is in the "retracted" position' },
              { label: 'Working Characteristic', value: 'Extends when pulled, automatically retracts when released' }
            ]).map((item, idx) => (
              <p className="text-muted-foreground" key={idx}><strong>{item.label}:</strong> {item.value}</p>
            ))}
          </div>
          <h3 className="text-xl font-semibold text-[#2a5298] mb-2">{tgs.definition?.mainFunction?.title ?? 'Main Function'}</h3>
          <p className="text-muted-foreground">{tgs.definition?.mainFunction?.desc ?? 'To enable covers/hatches that "need to be pulled down and retracted" to close automatically, while providing a controlled retraction speed. Typical applications include:'}</p>
          <ul className="mt-4 space-y-2">
            {(tgs.definition?.mainFunction?.scenarios ?? [
              'Automatic retraction of hoods and hatches',
              'Assistance for medical equipment lifting',
              'Automatic barrier retraction',
              'Industrial equipment cover control'
            ]).map((txt: string, idx: number) => (
              <li className="text-muted-foreground" key={idx}>{txt}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="classification" className="py-14 md:py-20 border-b border-border bg-card">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">{tgs.classification?.title ?? '2. Structural Classification and Performance Differences'}</h2>
          <div className="overflow-x-auto rounded-lg border border-border mb-8">
            <table className="min-w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  {(
                    tgs.classification?.table?.headers ?? ['Type', 'Single Tube', 'Double Tube']
                  ).map((h: string, idx: number) => (
                    <th key={idx} className="px-4 py-3 text-left font-semibold border border-border">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="[&>tr:nth-child(even)]:bg-muted/50">
                {(tgs.classification?.table?.rows ?? [
                  { label: 'Rebound Speed', single: 'Fast', double: 'Slower, more stable' },
                  { label: 'Force Progression Rate', single: 'High (100 N → 170-180 N)', double: 'Low (100 N → ~150 N)' },
                  { label: 'Closed Length Advantage', single: 'Shorter (L ≥ 2S + 45)', double: 'Longer (L ≥ 2S + 70)' },
                  { label: 'Applicability', single: 'Tight spaces, acceptable force progression', double: 'Stable force, high safety guidance requirements' }
                ]).map((row, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-3 border border-border"><strong>{row.label}</strong></td>
                    <td className="px-4 py-3 border border-border">{row.single}</td>
                    <td className="px-4 py-3 border border-border">{row.double}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-md border border-border bg-muted/40 p-5">
              <h4 className="font-semibold text-primary mb-3">{tgs.classification?.cards?.singleTube?.title ?? 'Single Tube Structure'}</h4>
              <ul className="space-y-2 text-muted-foreground">
                {(tgs.classification?.cards?.singleTube?.items ?? [
                  'Simple design, lower cost',
                  'Shorter closed length',
                  'Fast rebound speed',
                  'Noticeable force progression',
                  'Preferred for tight space applications'
                ]).map((txt: string, idx: number) => (
                  <li key={idx}>{txt}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-md border border-border bg-muted/40 p-5">
              <h4 className="font-semibold text-primary mb-3">{tgs.classification?.cards?.doubleTube?.title ?? 'Double Tube Structure'}</h4>
              <ul className="space-y-2 text-muted-foreground">
                {(tgs.classification?.cards?.doubleTube?.items ?? [
                  'Stable force curve',
                  'Controllable rebound speed',
                  'Good safety guidance',
                  'Approx. 30% higher cost',
                  'Preferred for high safety requirement applications'
                ]).map((txt: string, idx: number) => (
                  <li key={idx}>{txt}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="parameters" className="py-14 md:py-20 border-b border-border bg-background">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">{tgs.parameters?.title ?? '3. Core Parameter Range'}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="rounded-md border border-[#d0d8e0] bg-gradient-to-br from-[#f5f7fa] to-[#e8ecf1] p-5 text-center">
              <h4 className="font-semibold text-primary mb-2">{tgs.parameters?.cards?.force?.title ?? 'Force Range'}</h4>
              <p className="text-[#2a5298] font-semibold text-lg">{tgs.parameters?.cards?.force?.value ?? '100 – 1,500 N'}</p>
              <p className="text-muted-foreground text-xs">{tgs.parameters?.cards?.force?.note ?? 'Common Stock: 150 / 250 / 350 N'}</p>
            </div>
            <div className="rounded-md border border-[#d0d8e0] bg-gradient-to-br from-[#f5f7fa] to-[#e8ecf1] p-5 text-center">
              <h4 className="font-semibold text-primary mb-2">{tgs.parameters?.cards?.stroke?.title ?? 'Stroke Range'}</h4>
              <p className="text-[#2a5298] font-semibold text-lg">{tgs.parameters?.cards?.stroke?.value ?? '100 – 300 mm'}</p>
              <p className="text-muted-foreground text-xs">{tgs.parameters?.cards?.stroke?.note ?? 'Available in 25 mm increments'}</p>
            </div>
            <div className="rounded-md border border-[#d0d8e0] bg-gradient-to-br from-[#f5f7fa] to-[#e8ecf1] p-5 text-center">
              <h4 className="font-semibold text-primary mb-2">{tgs.parameters?.cards?.closedLength?.title ?? 'Closed Length'}</h4>
              <p className="text-[#2a5298] font-semibold text-lg">{tgs.parameters?.cards?.closedLength?.value ?? '200 – 450 mm'}</p>
              <p className="text-muted-foreground text-xs">{tgs.parameters?.cards?.closedLength?.note ?? 'Limited by formula'}</p>
            </div>
            <div className="rounded-md border border-[#d0d8e0] bg-gradient-to-br from-[#f5f7fa] to-[#e8ecf1] p-5 text-center">
              <h4 className="font-semibold text-primary mb-2">{tgs.parameters?.cards?.moq?.title ?? 'Minimum Order Qty'}</h4>
              <p className="text-[#2a5298] font-semibold text-lg">{tgs.parameters?.cards?.moq?.value ?? '200 units'}</p>
              <p className="text-muted-foreground text-xs">{tgs.parameters?.cards?.moq?.note ?? 'Typical Annual Volume: 500 – 5,000 units'}</p>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-[#2a5298] mb-3">{tgs.parameters?.endFitting?.title ?? 'End Fitting Configuration'}</h3>
          <div className="rounded-md border-l-4 border-primary bg-accent/10 p-5">
            {(tgs.parameters?.endFitting?.items ?? [
              'Threaded Ends: Single/Double end M8 or M10 threads',
              'Ball Joint Ends: Ø10 mm ball joint',
              'Safety Accessories: Must be equipped with "anti-detachment pin" or safety wire'
            ]).map((txt: string, idx: number) => (
              <p className="text-muted-foreground" key={idx}>{txt}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="principle" className="py-14 md:py-20 border-b border-border bg-card">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">{tgs.principle?.title ?? '4. Working Principle - Two Modes of Operation'}</h2>
          <h3 className="text-xl font-semibold text-[#2a5298] mb-3">{tgs.principle?.modeA?.title ?? 'Mode A: Traction Gas Spring (With Pull Force)'}</h3>
          <div className="rounded-md border-l-4 border-primary bg-muted/40 p-5 mb-6">
            <h4 className="font-semibold text-primary mb-2">{tgs.principle?.labels?.operationFlow ?? 'Operation Flow'}</h4>
            <ul className="space-y-2 text-muted-foreground">
              {(tgs.principle?.modeA?.flow ?? [
                "Opening Phase: Cover's gravity overcomes initial pull force, pulling the rod out → Cover descends",
                'Closing Phase: Gas spring automatically retracts, assisting the cover to pull back up'
              ]).map((txt: string, idx: number) => (
                <li key={idx}>{txt}</li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-3"><strong>{tgs.principle?.labels?.applicableScenarios ?? 'Applicable Scenarios:'}</strong> {tgs.principle?.modeA?.scenario ?? "Where the cover's natural descent is sufficient to pull the spring"}</p>
          </div>
          <h3 className="text-xl font-semibold text-[#2a5298] mb-3">{tgs.principle?.modeB?.title ?? 'Mode B: Pure Damper (Damping Only, No Pull Force)'}</h3>
          <div className="rounded-md border-l-4 border-primary bg-muted/40 p-5 mb-6">
            <h4 className="font-semibold text-primary mb-2">{tgs.principle?.labels?.operationFlow ?? 'Operation Flow'}</h4>
            <ul className="space-y-2 text-muted-foreground">
              {(tgs.principle?.modeB?.flow ?? [
                'Opening Phase: Manual push throughout, no assistance',
                'Closing Phase: Provides one-way damping only, allowing the cover to descend slowly'
              ]).map((txt: string, idx: number) => (
                <li key={idx}>{txt}</li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-3"><strong>{tgs.principle?.labels?.applicableScenarios ?? 'Applicable Scenarios:'}</strong> {tgs.principle?.modeB?.scenario ?? 'Light covers or safety-critical scenarios requiring "no assistance + slow descent"'}</p>
          </div>
          <h3 className="text-xl font-semibold text-[#2a5298] mb-3">{tgs.principle?.illustration?.title ?? 'Working Principle Illustration'}</h3>
          <div className="rounded-md border-l-4 border-primary bg-accent/10 p-5">
            {(tgs.principle?.illustration?.points ?? [
              'Basic Principle: High-pressure nitrogen gas within the sealed cylinder generates a reverse thrust when the piston rod is pulled. When the external force is released, the gas pressure pushes the piston rod to retract, achieving the automatic closing function.',
              'Key Advantage: Compared to traditional springs, gas springs offer a more stable force curve and longer service life (typically over 100,000 cycles).'
            ]).map((txt: string, idx: number) => (
              <p key={idx} className={idx === 0 ? 'text-muted-foreground' : 'text-muted-foreground mt-2'}>
                {txt}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="formula" className="py-14 md:py-20 border-b border-border bg-background">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">{tgs.formula?.title ?? '5. Quick Selection Formula'}</h2>
          <h3 className="text-xl font-semibold text-[#2a5298] mb-3">{tgs.formula?.closedLength?.title ?? 'Closed Length Calculation'}</h3>
          <div className="rounded-md border-l-4 border-primary bg-gradient-to-br from-[#e8f4f8] to-[#d4e9f2] p-5 font-mono">
            {(tgs.formula?.closedLength?.lines ?? [
              'Single Tube: L ≥ 2S + 45',
              'Double Tube: L ≥ 2S + 70',
              'Where: L = Closed Length (mm) | S = Working Stroke (mm)'
            ]).map((txt: string, idx: number) => (
              <p key={idx} className={idx === 2 ? 'text-muted-foreground mt-3 text-sm' : 'text-primary font-semibold'}>
                {txt}
              </p>
            ))}
          </div>
          <h3 className="text-xl font-semibold text-[#2a5298] mb-3">{tgs.formula?.selection?.title ?? 'Selection Steps'}</h3>
          <ol className="list-decimal ml-6 space-y-2 text-muted-foreground">
            {(tgs.formula?.selection?.steps ?? [
              'Determine Working Stroke S: Based on the required opening range of the cover/hatch',
              'Select Structure Type: Choose Single or Double Tube based on space and force stability requirements',
              'Calculate Closed Length: Use the formula above to determine the minimum closed length',
              'Determine Force: Select appropriate force based on cover weight and pull resistance',
              'Confirm End Fitting: Choose threaded or ball joint, and configure anti-detachment pin'
            ]).map((txt: string, idx: number) => (
              <li key={idx}><strong>{txt.split(':')[0]}:</strong> {txt.slice(txt.indexOf(':') + 1).trim()}</li>
            ))}
          </ol>
          <div className="rounded-md border-l-4 border-primary bg-accent/10 p-5 mt-6">
            <p className="text-muted-foreground"><strong>{tgs.formula?.tipLabel ?? '💡 Selection Tip:'}</strong> {tgs.formula?.tip ?? 'If unsure about specific parameters, we recommend starting with common stock items (150 N / 200 mm Stroke / Single Tube) for quick sample verification.'}</p>
          </div>
        </div>
      </section>

      <section id="faq" className="py-14 md:py-20 border-b border-border bg-card">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">{tgs.faq?.title ?? '6. High-Frequency Customer FAQ'}</h2>
          <div className="space-y-4">
            {(tgs.faq?.items ?? [
              {
                q: '① Can the initial pull force be reduced below 80 N?',
                a: 'Answer: It can be reduced to 60 N, but this requires lowering the nitrogen pressure, which will reduce the service life by 20%. We recommend starting at 100 N. This is because excessively low initial pressure increases the gas expansion coefficient, affecting long-term stability.'
              },
              {
                q: '② The force progression in the single tube is too high, can it be improved?',
                a: 'Answer: Switch to a Double Tube structure for a flatter force curve, at an approx. 30% increase in cost. The double tube design reduces the force progression rate from 100 N → 170-180 N to 100 N → ~150 N by diverting damping.'
              },
              {
                q: '③ What is the fastest lead time?',
                a: 'Answer: Conventional 150/250 N, 150/200 mm stroke single tube blanks are stocked (500 units), shipping within 72 hours; non-standard items take 10 days. We maintain inventory on common specifications to ensure rapid response.'
              },
              {
                q: '④ Certifications and Export?',
                a: 'Answer: Default certifications include RoHS and 48h Salt Spray Test; military-grade products require additional MIL-STD-810G vibration testing, adding 7 days to the cycle. All products comply with the EU RoHS directive and can be exported directly to European and American markets.'
              },
              {
                q: '⑤ I want to conceal the anti-detachment pin on the end fitting?',
                a: 'Answer: We offer an "internal thread + safety wire" solution, which maintains the external appearance of a standard ball joint. This ensures both safety and an improved product aesthetic.'
              }
            ]).map((qa, idx) => (
              <div key={idx} className="rounded-md border border-border bg-muted/50 p-5 border-l-4 border-l-primary">
                <div className="font-bold text-primary mb-2">{qa?.q ?? ''}</div>
                <div className="text-muted-foreground">{qa?.a ?? ''}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
