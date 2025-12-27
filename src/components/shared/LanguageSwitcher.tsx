'use client'

import { usePathname, useRouter } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { locales, localeNames } from '@/lib/i18n/config'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  // 假设当前语言是 URL 的第一部分（如果不是支持的语言，则默认为 'en'）
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]
  const isDefaultLocale = !(locales as readonly string[]).includes(firstSegment)
  const currentLocale = isDefaultLocale ? 'en' : firstSegment
  
  const handleLocaleChange = (newLocale: string) => {
    let newPath = ''
    
    if (isDefaultLocale) {
      // 当前是默认语言（无前缀），添加新语言前缀（如果新语言不是 'en'）
      if (newLocale === 'en') {
        newPath = pathname // 已经是英语，无需跳转
      } else {
        newPath = `/${newLocale}${pathname === '/' ? '' : pathname}`
      }
    } else {
      // 当前有语言前缀
      if (newLocale === 'en') {
        // 切换到英语：移除前缀
        // 例如 /zh/products -> /products
        const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/'
        newPath = pathWithoutLocale
      } else {
        // 切换到其他语言：替换前缀
        newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`)
      }
    }

    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:text-foreground/80 text-sm font-medium text-foreground/60">
        <Globe className="h-4 w-4" />
        <span className="flex items-center gap-2">
          <span>{localeNames[currentLocale as keyof typeof localeNames]}</span>
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => handleLocaleChange(locale)}
            className="block py-2 px-3 hover:bg-accent rounded-md text-sm text-foreground/60 hover:text-foreground/80 transition-colors"
          >
            <span className="flex items-center gap-2">
              <span className="w-6 text-xs font-semibold uppercase">{locale}</span>
              {localeNames[locale]}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}