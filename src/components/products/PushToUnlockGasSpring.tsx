'use client'

import { Button } from '@/components/GasSpringGuide/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/GasSpringGuide/ui/card'
import { Locale } from '@/lib/i18n/config'
import { Lock, Zap, Maximize2, ShieldCheck } from 'lucide-react'
import Image from 'next/image'

export type PusDict = {
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  features: {
    title: string
    items: { title: string; desc: string }[]
  }
  specs: {
    title: string
    table: { label: string; value: string }[]
    note: string
    noteLink: string
  }
  proof: {
    title: string
    clients: string[]
    quote: string
    author: string
  }
  action: {
    title: string
    form: {
      company: string
      email: string
      quantity: string
      requirement: string
      submit: string
    }
    privacy: string
  }
  footer: {
    copyright: string
  }
}

interface PushToUnlockGasSpringProps {
  dict: PusDict
  locale?: Locale
}

export default function PushToUnlockGasSpring({ dict }: PushToUnlockGasSpringProps) {
  const scrollToForm = () => {
    const form = document.getElementById('quote')
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col w-full font-sans text-slate-700">
      {/* Hero Section */}
      <section id="hero" className="relative py-32 bg-[#1e293b] text-white text-center">
        <div className="container max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <h1 
              className="text-5xl md:text-6xl font-bold leading-tight"
              dangerouslySetInnerHTML={{ __html: dict.hero.title }}
            />
            <p className="text-xl text-slate-300 opacity-90 max-w-xl">
              {dict.hero.subtitle}
            </p>
            <Button 
              onClick={scrollToForm}
              className="bg-[#4f9cf9] hover:bg-[#3b82f6] text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all border-none"
            >
              {dict.hero.cta}
            </Button>
          </div>
          <div className="relative">
             {/* Placeholder for Hero Image - utilizing a gradient/placeholder div as per design system if no image provided */}
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl shadow-2xl flex items-center justify-center text-slate-500 overflow-hidden relative">
              <Image 
                src="/images/product/gas-spring/push-to-unlock-gas-spring/product_variety.jpg" 
                alt="Push-to-Unlock Gas Spring" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-12 text-center">
            {dict.features.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dict.features.items.map((item, idx) => (
              <Card key={idx} className="border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#4f9cf9]/10 text-[#4f9cf9] rounded-lg flex items-center justify-center mb-4">
                    {idx === 0 ? <Lock size={24} /> : 
                     idx === 1 ? <Zap size={24} /> : 
                     idx === 2 ? <Maximize2 size={24} /> : 
                     <ShieldCheck size={24} />}
                  </div>
                  <CardTitle className="text-xl font-bold text-[#1e293b]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section id="specs" className="py-24 bg-slate-50">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-12 text-center">
            {dict.specs.title}
          </h2>
          <Card className="border-none shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {dict.specs.table.map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                      <td className="p-6 font-semibold text-[#1e293b] bg-slate-50/50 w-1/3 border-r border-slate-100">
                        {row.label}
                      </td>
                      <td className="p-6 text-slate-600 font-mono">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <p className="text-center mt-8 text-slate-500">
            {dict.specs.note} 
            <a href="#quote" className="text-[#4f9cf9] hover:underline font-semibold">
              {dict.specs.noteLink}
            </a>
          </p>
        </div>
      </section>

      {/* Proof Section */}
      <section id="proof" className="py-24 bg-[#1e293b] text-white text-center">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-white">
            {dict.proof.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {dict.proof.clients.map((client, idx) => (
              <div key={idx} className="bg-slate-800 px-8 py-4 rounded-lg text-slate-400 font-bold border border-slate-700">
                {client}
              </div>
            ))}
          </div>
          <blockquote className="text-2xl font-light italic text-slate-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            {dict.proof.quote}
          </blockquote>
          <cite className="text-slate-500 not-italic font-semibold">
            {dict.proof.author}
          </cite>
        </div>
      </section>

      {/* Action Section */}
      <section id="quote" className="py-24 bg-white">
        <div className="container max-w-2xl mx-auto px-6">
          <Card className="shadow-2xl border-slate-200">
            <CardHeader className="text-center pb-2 pt-10">
              <CardTitle className="text-3xl font-bold text-[#1e293b]">
                {dict.action.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10">
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder={dict.action.form.company}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#4f9cf9] focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder={dict.action.form.email}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#4f9cf9] focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder={dict.action.form.quantity}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#4f9cf9] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder={dict.action.form.requirement}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#4f9cf9] focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                <Button className="w-full bg-[#4f9cf9] hover:bg-[#3b82f6] text-white py-6 text-lg font-bold shadow-md hover:shadow-lg transition-all">
                  {dict.action.form.submit}
                </Button>
              </form>
              <p className="text-center mt-6 text-sm text-slate-400">
                {dict.action.privacy}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-slate-400 border-t border-slate-200 bg-slate-50">
        <div className="container mx-auto px-6">
          <p>{dict.footer.copyright}</p>
        </div>
      </footer>
    </div>
  )
}
