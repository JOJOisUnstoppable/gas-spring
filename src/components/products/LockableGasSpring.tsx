'use client'

import { useState } from 'react'
import { Button } from '@/components/GasSpringGuide/ui/button'
import { CheckCircle2, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/GasSpringGuide/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/GasSpringGuide/ui/tabs";
import GasSpringForceCurve from '@/components/visualization/GasSpringForceCurve';
import Image from 'next/image';

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
    rigid?: { title?: string; desc?: string; points?: string[] }
    elastic?: { title?: string; desc?: string; points?: string[] }
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
  detailedSelectionGuide?: {
    title?: string
    step1?: {
      title?: string
      description?: string
      rigid?: { label?: string; title?: string; items?: string[] }
      elastic?: { label?: string; title?: string; items?: string[] }
    }
    step2?: {
      title?: string
      description?: string
      rigid?: { title?: string; minLen?: string; maxStroke?: string }
      elastic?: { title?: string; minLen?: string; maxStroke?: string }
      dimensionRule?: { label?: string; text?: string }
    }
    step3?: {
      title?: string
      description?: string
      subDesc?: string[]
      nominal?: { title?: string; description?: string }
      support?: { title?: string; description?: string }
      locking?: { title?: string; description?: string }
      opening?: { title?: string; description?: string }
    }
    step4?: {
      title?: string
      description?: string
      metrics?: Array<{ title?: string; value?: string }>
    }
    step5?: {
      title?: string
      description?: string
      labels?: { code?: string; diameter?: string; stroke?: string; length?: string; force?: string }
      example?: { label?: string; text?: string }
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
  const [activeTab, setActiveTab] = useState("rigid");
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
            <div className="relative min-h-[300px] w-full">
              <Image 
                src="/images/product/products_page/lockable_gas_spring.jpg" 
                alt={lgs.hero?.imageAlt ?? "Lockable Gas Spring"}
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-bold text-4xl md:text-5xl mb-4">{lgs.why?.title ?? 'What is Adjustable Lockable Gas Spring?'}</h2>
            <p className="text-lg text-muted-foreground">{lgs.why?.subtitle ?? 'DKG has a line of adjustable locking gas springs which look like traditional gas springs but can be locked in any position along the stroke.'}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
              <div className="mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
              </div>
              <h3 className="font-bold text-xl mb-2">{lgs.why?.cards?.zero?.title ?? 'Rigid in compression:'}</h3>
              <p className="text-muted-foreground mb-4">{lgs.why?.cards?.zero?.desc ?? 'No movement when the rod is pushed, but some movement when the rod is pulled.'}</p>
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
              <h3 className="font-bold text-xl mb-2">{lgs.why?.cards?.flexible?.title ?? 'Rigid in extension:'}</h3>
              <p className="text-muted-foreground mb-4">{lgs.why?.cards?.flexible?.desc ?? 'No movement when the rod is pulled, but some movement when the rod is pushed.'}</p>
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
              <div className="relative min-h-[300px] w-full">
                <Image 
                  src="/images/product/gas-spring/lockable-gas-spring/rigid-locking-gas-spring.png" 
                  alt={lgs.technology?.imagesAlt?.rigid ?? 'Rigid Locking Mechanism'}
                  fill
                  className="object-contain rounded-lg shadow-lg"
                />
              </div>
              <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
                <h3 className="font-bold text-2xl mb-4 text-primary">{lgs.technology?.rigid?.title ?? 'Rigid Locking'}</h3>
                <p className="text-muted-foreground mb-4">{lgs.technology?.rigid?.desc ?? ''}</p>
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
              <div className="relative min-h-[300px] w-full">
                <Image 
                  src="/images/product/gas-spring/lockable-gas-spring/Elastic-gas-spring.png" 
                  alt={lgs.technology?.imagesAlt?.elastic ?? 'Elastic Locking Mechanism'}
                  fill
                  className="object-contain rounded-lg shadow-lg"
                />
              </div>
              <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
                <h3 className="font-bold text-2xl mb-4 text-accent">{lgs.technology?.elastic?.title ?? 'Elastic Locking'}</h3>
                <p className="text-muted-foreground mb-4">{lgs.technology?.elastic?.desc ?? ''}</p>
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

      <section id="TypeSelection" className="py-16 md:py-24 bg-background">
        <div className="container max-w-7xl mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl mb-12 text-center">
            {lgs.detailedSelectionGuide?.title ?? 'Detailed Selection Guide'}
          </h2>

          {/* Step 1: Locking Type */}
          <Card className="mb-8">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <CardTitle className="text-2xl">{lgs.detailedSelectionGuide?.step1?.title ?? 'Step 1: Determine Locking Type and Application Needs'}</CardTitle>
              <CardDescription>
                {lgs.detailedSelectionGuide?.step1?.description ?? 'Rigid and elastic locking are the two main types of gas springs and the key starting point for selection.'}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="rigid">{lgs.detailedSelectionGuide?.step1?.rigid?.label ?? 'Rigid Locking'}</TabsTrigger>
                  <TabsTrigger value="elastic">{lgs.detailedSelectionGuide?.step1?.elastic?.label ?? 'Elastic Locking'}</TabsTrigger>
                </TabsList>

                <TabsContent value="rigid" className="space-y-4 mt-6">
                  <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-4 rounded">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2" />
                      {lgs.detailedSelectionGuide?.step1?.rigid?.title ?? 'Rigid Locking Characteristics'}
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {(lgs.detailedSelectionGuide?.step1?.rigid?.items ?? [
                        'Minimal displacement under pull force in locked state (typically ≤ 2mm)',
                        'Ideal for precise positioning and absolute support',
                        'Applications: Medical beds, auxiliary instruments, precision equipment',
                        'Stroke Factor: 2.4 (relatively lower stroke utilization)'
                      ]).map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="elastic" className="space-y-4 mt-6">
                  <div className="bg-green-50 dark:bg-green-900/10 border-l-4 border-green-500 p-4 rounded">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
                      {lgs.detailedSelectionGuide?.step1?.elastic?.title ?? 'Elastic Locking Characteristics'}
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {(lgs.detailedSelectionGuide?.step1?.elastic?.items ?? [
                        'Significant displacement under force in locked state (> 1mm)',
                        'Provides cushioning and vibration damping',
                        'Applications: Office chairs, leisure beds, comfort-focused equipment',
                        'Stroke Factor: 2.0 (higher stroke utilization)'
                      ]).map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Step 2: Stroke Calculation */}
          <Card className="mb-8">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20">
              <CardTitle className="text-2xl">{lgs.detailedSelectionGuide?.step2?.title ?? 'Step 2: Determine Stroke and Installation Space'}</CardTitle>
              <CardDescription>
                {lgs.detailedSelectionGuide?.step2?.description ?? 'Use formulas to determine the relationship between stroke and extended length based on space and expected movement.'}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Rigid Locking Formulas */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground text-lg">{lgs.detailedSelectionGuide?.step2?.rigid?.title ?? 'Rigid Locking Formulas'}</h4>

                  <div className="bg-muted p-4 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-2">{lgs.detailedSelectionGuide?.step2?.rigid?.minLen ?? 'Given Stroke S, find minimum Extended Length:'}</p>
                    <div className="bg-card p-3 rounded font-mono text-center text-blue-600 dark:text-blue-400 font-semibold">
                      L<sub>min</sub> = 2.4 × S + 53
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-2">{lgs.detailedSelectionGuide?.step2?.rigid?.maxStroke ?? 'Given Extended Length L, find maximum Stroke:'}</p>
                    <div className="bg-card p-3 rounded font-mono text-center text-blue-600 dark:text-blue-400 font-semibold">
                      S<sub>max</sub> = L / 2.4 - 22
                    </div>
                  </div>
                </div>

                {/* Elastic Locking Formulas */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground text-lg">{lgs.detailedSelectionGuide?.step2?.elastic?.title ?? 'Elastic Locking Formulas'}</h4>

                  <div className="bg-muted p-4 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-2">{lgs.detailedSelectionGuide?.step2?.elastic?.minLen ?? 'Given Stroke S, find minimum Extended Length:'}</p>
                    <div className="bg-card p-3 rounded font-mono text-center text-green-600 dark:text-green-400 font-semibold">
                      L<sub>min</sub> = 2 × S + 53
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-2">{lgs.detailedSelectionGuide?.step2?.elastic?.maxStroke ?? 'Given Extended Length L, find maximum Stroke:'}</p>
                    <div className="bg-card p-3 rounded font-mono text-center text-green-600 dark:text-green-400 font-semibold">
                      S<sub>max</sub> = L / 2 - 26.5
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-4 rounded">
                <p className="text-sm text-foreground">
                  <strong>{lgs.detailedSelectionGuide?.step2?.dimensionRule?.label ?? 'Dimension Rule:'}</strong>{lgs.detailedSelectionGuide?.step2?.dimensionRule?.text ?? 'The ratio of cylinder diameter (D) to piston rod diameter (d) should not be less than 1.1. Standard values: KQ10/22, KQ10/28. Contact us for custom needs.'}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Step 3: Force Design */}
          <Card className="mb-8">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
              <CardTitle className="text-2xl">{lgs.detailedSelectionGuide?.step3?.title ?? ''}</CardTitle>
              <CardDescription>
                {lgs.detailedSelectionGuide?.step3?.description ?? 'Force design is core to ensuring smooth load bearing and reliable locking'}
              </CardDescription>
            </CardHeader>
            <div className="relative">
              <div className="relative min-h-[400px] w-full">
                <Image 
                  src="/images/product/gas-spring/lockable-gas-spring/Gas-Spring-Force-Curve-Visualization.png" 
                  alt={lgs.forcePerformance?.imageAlt ?? "Locking Force Curves"}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-8 bg-muted/40 rounded-xl p-5 md:p-6 border border-border/50">
                <ul className="space-y-3 text-muted-foreground list-disc pl-4 marker:text-primary/70 text-sm md:text-base leading-relaxed">
                  {(lgs.detailedSelectionGuide?.step3?.subDesc ?? [
                    "Weight in Newtons: mass (kg) × 9.81",
                    "One-spring force: F = 1.2 × (W × L) ÷ (B × 0.65)",
                    "L = hinge-to-CG distance",
                    "B = hinge-to-spring distance",
                    "Use n springs? Divide F by n.",
                    "For lockable springs, you also need to consider the locking force and friction, which might require specialized configurators.",
                    "Complexity: Real-world applications involve changing geometry and dynamic forces;"
                  ]).map((item, idx) => (
                    <li key={idx} className="pl-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-muted p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-primary mb-2">{lgs.detailedSelectionGuide?.step3?.nominal?.title ?? 'Nominal Force (Fₙ)'}</h4>
                  <p className="text-sm text-muted-foreground">
                    {lgs.detailedSelectionGuide?.step3?.nominal?.description ?? 'The initial force during extension or compression. For Fₙ > 100N, use increments of 50N.'}
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-primary mb-2">{lgs.detailedSelectionGuide?.step3?.support?.title ?? 'Support Force (Fₛ)'}</h4>
                  <p className="text-sm text-muted-foreground">
                    {lgs.detailedSelectionGuide?.step3?.support?.description ?? 'Ensure support force < 1.3 × Fₙ (max air pressure) for smooth lifting.'}
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-primary mb-2">{lgs.detailedSelectionGuide?.step3?.locking?.title ?? 'Locking Force (Fₗ)'}</h4>
                  <p className="text-sm text-muted-foreground">
                    {lgs.detailedSelectionGuide?.step3?.locking?.description ?? 'Compression locking force for rigid gas springs should exceed:'}
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-primary mb-2">{lgs.detailedSelectionGuide?.step3?.opening?.title ?? 'Opening Force (Fₒ)'}</h4>
                  <p className="text-sm text-muted-foreground">
                    {lgs.detailedSelectionGuide?.step3?.opening?.description ?? 'The force required to release the lock, typically determined by user needs.'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 4: Performance Verification */}
          <Card className="mb-8">
            <CardHeader className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20">
              <CardTitle className="text-2xl">{lgs.detailedSelectionGuide?.step4?.title ?? 'Step 4: Performance Verification'}</CardTitle>
              <CardDescription>
                {lgs.detailedSelectionGuide?.step4?.description ?? 'Confirm the product meets the following technical requirements during selection.'}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {(lgs.detailedSelectionGuide?.step4?.metrics ?? [
                  { title: 'Extension Speed', value: 'Standard requirement: 40mm/s ~ 200mm/s' },
                  { title: 'Cycle Life', value: 'DKG gas springs reach 50,000 cycles with < 12% force decay.' },
                  { title: 'Sealing Performance', value: 'No stroke change after 24 hours under rated force at any angle.' },
                  { title: 'Environmental Adaptability', value: 'Must meet temp requirements (-30℃ to +60℃) and corrosion resistance.' }
                ]).map((metric, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      {idx === 0 ? <Zap className="h-6 w-6 text-blue-600 mt-1" /> :
                        idx === 1 ? <CheckCircle2 className="h-6 w-6 text-green-600 mt-1" /> :
                          idx === 2 ? <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1" /> :
                            <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1" />}
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">{metric.title}</h5>
                      <p className="text-muted-foreground text-sm">{metric.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Step 5: Model Output */}
          <Card>
            <CardHeader className="bg-gradient-to-r from-rose-50 to-red-50 dark:from-rose-950/20 dark:to-red-950/20">
              <CardTitle className="text-2xl">{lgs.detailedSelectionGuide?.step5?.title ?? 'Step 5: Final Model Selection (Model Output)'}</CardTitle>
              <CardDescription>
                {lgs.detailedSelectionGuide?.step5?.description ?? 'Record and purchase selected specifications in the following format.'}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="bg-slate-900 text-white p-6 rounded-lg mb-6 font-mono text-center text-lg shadow-inner">
                KQ 10/27 60 260 F350
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="font-bold text-foreground">KQ</div>
                  <div className="text-xs text-muted-foreground">{lgs.detailedSelectionGuide?.step5?.labels?.code ?? 'Code'}</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-foreground">10/27</div>
                  <div className="text-xs text-muted-foreground">{lgs.detailedSelectionGuide?.step5?.labels?.diameter ?? 'Diameter (d/D)'}</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-foreground">60</div>
                  <div className="text-xs text-muted-foreground">{lgs.detailedSelectionGuide?.step5?.labels?.stroke ?? 'Stroke (S)'}</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-foreground">260</div>
                  <div className="text-xs text-muted-foreground">{lgs.detailedSelectionGuide?.step5?.labels?.length ?? 'Ext. Length (L)'}</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-foreground">F350</div>
                  <div className="text-xs text-muted-foreground">{lgs.detailedSelectionGuide?.step5?.labels?.force ?? 'Nominal Force (Fn)'}</div>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-foreground">
                  <strong>{lgs.detailedSelectionGuide?.step5?.example?.label ?? 'Example Description:'}</strong>{lgs.detailedSelectionGuide?.step5?.example?.text ?? ' KQ 10/27 60 260 F350 represents 10mm rod, 27mm cylinder, 60mm stroke, 260mm extended length, and 350N force.'}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="applications" className="py-16 md:py-24 bg-background">
        <div className="container max-w-7xl mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl mb-12 text-center">{lgs.applications?.title ?? 'Real-World Applications'}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl shadow-sm p-8 border transition-colors hover:shadow-md hover:bg-accent/5">
              <h3 className="font-bold text-xl mb-4 text-primary">{lgs.applications?.medical?.title ?? 'Medical'}</h3>
              <img alt={'Lockable Gas Spring for Medical'} className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg" src="/images/application/grid/medical_bed.jpg" />
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
              <img alt={'Lockable Gas Spring for Furniture & Office'} className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg" src="/images/application/grid/health-leisure-and-furniture.png" />
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
              <img alt={'Lockable Gas Spring for Industrial'} className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg" src="/images/application/grid/mechanical-engineering-and-automation.png" />
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
              <img alt={'Lockable Gas Spring for Aviation'} className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg" src="/images/application/grid/aerospace-navy-railways.png" />
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
            <div className="gap-8 mb-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">Default Configuration (Standard 165mm stroke)</h2>
              <GasSpringForceCurve title={'Locking Force Curve for Standard 165mm Stroke'} />
            </section>
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
