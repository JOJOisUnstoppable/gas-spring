/**
 * @file CTA.tsx
 * @description 产品页面的行动号召（Call to Action）组件
 * @module components/products/CTA
 */

'use client'

import { motion } from 'framer-motion'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

/**
 * CTA组件的属性接口
 * @interface CTAProps
 * @property {string} title - 标题文本
 * @property {string[]} desc - 描述文本数组，每项为一段
 * @property {string} locale - 当前语言环境代码
 */
interface CTAProps {
  title: string
  desc: string[]
  locale: string
}

/**
 * 行动号召组件
 * 用于在页面底部引导用户进行联系或其他操作
 * 
 * @param {CTAProps} props - 组件属性
 * @returns {JSX.Element} CTA组件渲染结果
 */
export default function CTA({ title, desc, locale }: CTAProps) {
  return (
    <section className="mx-auto w-full py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
            {title}
          </h2>
          
          {/* Description */}
          <div className="space-y-4 max-w-2xl mx-auto">
            {desc.map((text, index) => (
              <p key={index} className="text-lg text-gray-600 leading-relaxed">
                {text}
              </p>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Primary CTA - Contact */}
            <Link href={`/${locale}/contact`}>
              <ShimmerButton className="group px-8 py-4 text-lg font-semibold">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us Now
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </ShimmerButton>
            </Link>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div
            className="pt-8 border-t border-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}