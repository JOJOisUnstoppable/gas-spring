import parseMarkdownBold from '@/lib/parseMarkdownBold'

interface InstallAndUsageProps {
  title?: string
  installation?: { title?: string; desc?: string }
  usage?: { title?: string; desc?: string }
}

export default function InstallAndUsage({ title, installation, usage }: InstallAndUsageProps) {
  if (!installation && !usage) return null

  return (
    <section className="max-w-7xl mx-auto w-full py-8 bg-background">
      <div className="container px-4 md:px-6 space-y-6">
        {title && (
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            {title}
          </h2>
        )}
        <div className="w-full border-b border-[#0F172B]"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {installation && (
            <div>
              {installation.title && (
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl text-foreground">
                  {installation.title}
                </h3>
              )}
              {installation.desc && (
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {parseMarkdownBold(installation.desc)}
                </p>
              )}
            </div>
          )}
          {usage && (
            <div>
              {usage.title && (
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl text-foreground">
                  {usage.title}
                </h3>
              )}
              {usage.desc && (
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {parseMarkdownBold(usage.desc)}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
