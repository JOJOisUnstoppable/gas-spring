import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// 需要先安装依赖: npm install @formatjs/intl-localematcher
import { match as matchLocale } from '@formatjs/intl-localematcher'
// 需要先安装依赖: npm install negotiator @types/negotiator
import Negotiator from 'negotiator'

const locales = ['en', 'zh', 'es', 'de', 'pl']
const defaultLocale = 'en'

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // 在浏览器语言列表前添加英语，提高其优先级
  const languages = ['en', ...new Negotiator({ headers: negotiatorHeaders }).languages()]
  const locale = matchLocale(languages, locales, defaultLocale)
  
  return locale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // 1. 如果路径是 /en 或以 /en/ 开头，重定向到无前缀路径（规范化 URL）
  if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
    const newPathname = pathname.replace(`/${defaultLocale}`, '')
    return NextResponse.redirect(
      new URL(newPathname || '/', request.url)
    )
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    
    // 2. 如果是默认语言，使用 Rewrite (保持 URL 不变，但在内部路由到 /en)
    if (locale === defaultLocale) {
      return NextResponse.rewrite(
        new URL(`/${defaultLocale}${pathname}`, request.url)
      )
    }

    // 3. 其他语言保持 Redirect
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }

  // 设置x-pathname请求头，包含完整的路径信息
  const response = NextResponse.next()
  response.headers.set('x-pathname', pathname)
  response.headers.set('X-Robots-Tag', 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1')
  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
}