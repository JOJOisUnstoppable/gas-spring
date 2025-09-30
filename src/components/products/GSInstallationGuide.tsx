'use client'

import parseMarkdownBold from '@/lib/parseMarkdownBold'

interface GSInstallationGuideProps {
  // 大标题（H2）
  title: string
  // 正文：可传一段字符串，或多行（推荐对接 en.json 的 desc: string[]）
  desc: string | string[]
  imageCaption?: string
}

/**
 * Gas Spring 安装位置选择/安装指南 组件
 * 结构：大标题（H2）/ 正文（列表形式，有序 + 合理的子项分组）
 */
const GSInstallationGuide = ({ title, desc, imageCaption }: GSInstallationGuideProps) => {
  // 归一化为数组
  const lines = Array.isArray(desc) ? desc : [desc]

  // 将数字开头的行作为顶级项；非数字开头的行作为前一个顶级项的子项
  const numericItemRegex = /^\s*\d+\./
  const structured: { content: any; subItems?: any[] }[] = []

  let current: { content: any; subItems?: any[] } | null = null

  for (const line of lines) {
    if (numericItemRegex.test(line)) {
      // 新的顶级项
      const item = { content: parseMarkdownBold(line), subItems: [] as any[] }
      structured.push(item)
      current = item
    } else {
      // 子项（如果没有当前顶级项，则作为一个无编号的顶级项）
      const node = parseMarkdownBold(line)
      if (current) {
        current.subItems?.push(node)
      } else {
        structured.push({ content: node })
      }
    }
  }

  return (
    <section className="max-w-7xl mx-auto w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          {/* 大标题 */}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            {title}
          </h2>
          {/* 标题 下划线 */}
          <div className="w-full border-b-3 border-[#0F172B]"></div>  
          {/* 正文（列表） */}
          <div className="space-y-6">
            {structured.map((item, idx) => (
              <div key={idx}>
                <div className="space-y-3">
                  <div className="text-muted-foreground text-lg leading-relaxed">
                    {item.content}
                  </div>
                  {item.subItems && item.subItems.length > 0 && (
                    <ul className="list-disc pl-6 space-y-2">
                      {item.subItems.map((sub, sIdx) => (
                        <li key={sIdx} className="text-muted-foreground text-lg leading-relaxed">
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* 在第一项后插入图片 */}
                {idx === 0 && (
                  <div className="my-8 flex flex-col items-center">
                    <img
                      src={'/images/products_page/Install_location.png'}
                      alt={'Gas spring : Selection of Installation Location'}
                      className="max-w-full h-auto rounded-lg shadow-md"
                    />
                    {/* 图片注释 */}
                    <div className="text-center text-muted-foreground text-sm mt-2">
                      {imageCaption}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GSInstallationGuide