import { MinimalCard, MinimalCardTitle, MinimalCardDescription } from "@/components/ui/minimal-card"
import parseMarkdownBold from '@/lib/parseMarkdownBold'

interface KeyComponentsGridProps {
  title?: string
  components?: Array<{ name: string; desc: string }>
}

export default function KeyComponentsGrid({ title, components = [] }: KeyComponentsGridProps) {
  if (!components || components.length === 0) return null

  return (
    <section className="max-w-7xl mx-auto w-full py-8 bg-background">
      <div className="container px-4 md:px-6">
        {title && (
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground mb-2">
            {title}
          </h2>
        )}
        <div className="w-full border-3 border-[#0F172B] mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {components.map((c, idx) => (
            <MinimalCard key={`${c.name}-${idx}`}>
              <div className="p-4">
                <MinimalCardTitle>{c.name}</MinimalCardTitle>
                <MinimalCardDescription>{parseMarkdownBold(c.desc)}</MinimalCardDescription>
              </div>
            </MinimalCard>
          ))}
        </div>
      </div>
    </section>
  )
}
