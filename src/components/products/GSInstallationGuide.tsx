'use client'
/* eslint-disable @next/next/no-img-element */

import type { ReactNode } from 'react'
import parseMarkdownBold from '@/lib/parseMarkdownBold'
import { Wrench, CheckCircle2, AlertCircle } from 'lucide-react'

interface GSInstallationGuideProps {
  title: string
  desc: string | string[]
  imageCaption?: string
}

// Define structured types instead of any
type ParsedNode = ReactNode[]
interface StructuredItem {
  content: ParsedNode
  subItems?: ParsedNode[]
}

/**
 * GSInstallationGuide 组件
 * 
 * 展示气弹簧的安装指南步骤。
 * 视觉优化：采用垂直时间轴/步骤条布局，使安装流程更清晰直观。
 */
const GSInstallationGuide = ({ title, desc, imageCaption }: GSInstallationGuideProps) => {
  const lines = Array.isArray(desc) ? desc : [desc]

  const numericItemRegex = /^\s*\d+\./
  const structured: StructuredItem[] = []

  let current: StructuredItem | null = null

  for (const line of lines) {
    if (numericItemRegex.test(line)) {
      const item: StructuredItem = { content: parseMarkdownBold(line), subItems: [] }
      structured.push(item)
      current = item
    } else {
      const node: ParsedNode = parseMarkdownBold(line)
      if (current) {
        current.subItems?.push(node)
      } else {
        structured.push({ content: node })
      }
    }
  }

  return (
    <div className="pt-6 md:pt-8 lg:pt-10 pb-6 md:pb-8 lg:pb-10">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="container px-4 md:px-6">
          <div className="space-y-4">
            {/* 标题区域 */}
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400">
                <Wrench className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                {title}
              </h2>
              <div className="w-20 h-1 bg-blue-500 rounded-full" />
            </div>

            <div className="relative pt-4">
              {/* 垂直连接线 */}
              <div className="absolute left-6 top-6 bottom-0 w-0.5 bg-slate-200 hidden md:block" />

              <div className="space-y-8">
                {structured.map((item, idx) => (
                  <div key={idx} className="relative flex flex-col md:flex-row gap-6 group">
                    {/* 步骤序号 (桌面端) */}
                    <div className="hidden md:flex flex-col items-center flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-white border-4 border-blue-100 text-blue-600 font-bold text-xl flex items-center justify-center shadow-md z-10 group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300">
                        {idx + 1}
                      </div>
                    </div>

                    {/* 内容卡片 */}
                    <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md hover:border-blue-200 transition-all duration-300">
                      {/* 移动端序号 + 标题 */}
                      <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50">
                        <div className="flex items-center gap-3">
                          <span className="md:hidden flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                            {idx + 1}
                          </span>
                          <div className="text-base md:text-lg font-semibold text-slate-900 leading-snug">
                            {item.content}
                          </div>
                        </div>
                      </div>

                      {((item.subItems && item.subItems.length > 0) || idx === 0) && (
                        <div className="p-5 space-y-4">
                          {/* 子项列表 */}
                          {item.subItems && item.subItems.length > 0 && (
                            <div className="space-y-2">
                              {item.subItems.map((sub, sIdx) => (
                                <div key={sIdx} className="flex items-start gap-2.5 text-slate-600 group/item">
                                  <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1 shrink-0 opacity-70 group-hover/item:opacity-100 transition-opacity" />
                                  <div className="text-sm md:text-base leading-relaxed">
                                    {sub}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* 特殊内容：第一步显示图片 */}
                          {idx === 0 && (
                            <div className="mt-4 bg-slate-50 rounded-lg p-3 border border-slate-100">
                              <div className="flex items-center gap-2 mb-2 text-blue-600 font-semibold text-xs uppercase tracking-wider">
                                <AlertCircle className="w-3.5 h-3.5" />
                                Visual Guide
                              </div>
                              <div className="relative rounded-md overflow-hidden bg-white shadow-sm border border-slate-100">
                                <img
                                  src={'/images/products_page/Install_location.png'}
                                  alt={'Gas spring : Selection of Installation Location'}
                                  className="w-full h-auto object-contain max-h-[300px]"
                                />
                              </div>
                              {imageCaption && (
                                <div className="text-center text-slate-500 text-xs mt-2 font-medium">
                                  {imageCaption}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GSInstallationGuide