import '../globals.css'
import 'katex/dist/katex.min.css'
import type { Metadata } from 'next'
// import type { Metadata, ResolvingMetadata } from 'next'
import { headers } from 'next/headers'
import { Navbar } from '@/components/layout/Navbar'
import { getDictionary } from '@/lib/i18n/getDictionary'
import type { Locale } from '@/lib/i18n/config'
import { Toaster } from '@/components/ui/sonner'
import { getProductData } from '@/lib/products'
import { Footer } from '@/components/layout/Footer'
import { notFound } from 'next/navigation'
import { ScrollToTop } from '@/components/shared/ScrollToTop'




export default async function LocaleLayout(
  props: {
    children: React.ReactNode
    params: Promise<{ locale: Locale }>
  }
) {
  const params = await props.params;

  const {
    locale
  } = params;

  const {
    children
  } = props;

  // 检查语言是否有效
  if (!['en', 'zh', 'es', 'de', 'pl'].includes(locale)) {
    notFound()
  }

  const dict = await getDictionary(locale)
  const { categories } = await getProductData(locale)

  return (
    <html lang={locale}>
      <body>
        <Navbar 
          locale={locale} 
          dict={dict} 
          categories={categories.map(cat => ({
            id: cat.id,
            title: cat.title,
            description: cat.description
          }))} 
        />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer 
          locale={locale}
          dict={dict}
          categories={categories.map(cat => ({
            id: cat.id,
            title: cat.title,
            description: cat.description
          }))}
        />
        <Toaster />
        <ScrollToTop />
      </body>
    </html>
  )
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: Locale }> },
): Promise<Metadata> {
  const { locale } = await params;
  
  // 获取当前路径
  const pathname = (await headers()).get('x-pathname') || '';
  const segments = pathname.split('/').filter(Boolean);
  
  // 生成标题部分
  let titleSegments: string[] = [];
  if (segments.length > 1) {
    // 移除locale部分
    segments.shift();
    // 将路径段转换为标题格式
    titleSegments = segments.map((s: string) => {
      // 将连字符替换为空格并转换为标题格式
      return s.split('-').map((word: string) => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
    }).reverse();
  }

  // 构建完整标题
  const baseTitle = 'DK Gas Spring Solutions';
  let title = '';

  // 首页使用更丰富的标题 (当没有路径段时)
  if (titleSegments.length === 0) {
    title = 'DK Gas Spring Solutions | Custom Manufacturer & Supplier';
  } else {
    // 内页使用标准格式：页面标题 | 品牌名
    title = [...titleSegments, baseTitle].join(' | ');
  }

  // 非英文添加语言标识
  if (locale !== 'en') {
    title += ` | [${locale}]`;
  }

  // 处理 Canonical 和 Hreflang
  let pathWithoutLocale = pathname;
  if (pathWithoutLocale.startsWith(`/${locale}/`)) {
    pathWithoutLocale = pathWithoutLocale.replace(`/${locale}`, '');
  } else if (pathWithoutLocale === `/${locale}`) {
    pathWithoutLocale = '/';
  }
  
  if (!pathWithoutLocale) pathWithoutLocale = '/';
  
  const languages: Record<string, string> = {};
  ['en', 'zh', 'es', 'de', 'pl'].forEach(lang => {
    if (lang === 'en') {
      languages[lang] = pathWithoutLocale;
    } else {
      languages[lang] = `/${lang}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    }
  });

  const description = 'DK Machinery Enhance Equipment Performance & Reliability: Precision gas spring solutions engineered for demanding industrial environments. ISO certified, precision engineering & fast delivery for global industries. Contact DK for a quote today!';

  const canonical = locale === 'en' 
    ? pathWithoutLocale 
    : `/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    keywords: [
      // Core Products
      'gas spring', 'gas strut', 'gas lift', 'damper',
      'pneumatic cylinder', 'pneumatic actuator', 'pneumatic system',
      'industrial automation', 'compressed air components',
      'shock absorber', 'motion control', 'pneumatic suspension',
      // Product Types
      'adjustable gas spring', 'locking gas spring',
      'tension gas spring', 'compression gas spring',
      'hydraulic damper', 'pneumatic damper',
      'industrial damping solutions', 'energy absorption',
      // Business Identity
      'gas spring manufacturer', 'gas strut manufacturer',
      'gas lift manufacturer', 'damper manufacturer',
      'gas spring supplier', 'gas strut supplier',
      'gas lift supplier', 'damper supplier',
      'gas spring factory', 'gas strut factory',
      'gas lift factory', 'damper factory'
    ],
    authors: [{ name: 'DK Machinery' }],
    metadataBase: new URL('https://www.dkgasspring.com'),
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/favicon.ico',
    },
    openGraph: {
      type: 'website',
      siteName: 'DK Gas Spring Solutions',
      title,
      description,
      images: '/images/og-image.jpg',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: '/images/og-image.jpg',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    other: {
      'application/ld+json': JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "DK Gas Spring Solutions",
          "url": "https://www.dkgasspring.com",
          "logo": "https://www.dkgasspring.com/DK_Logo_withoutBG.png",
          "image": "https://www.dkgasspring.com/images/og-image.jpg",
          "description": description,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": process.env.NEXT_PUBLIC_CONTACT_PHONE || "+86-123456789",
            "contactType": "customer service",
            "areaServed": ["CN", "US", "EU", "JP", "KR", "IN", "UK", "CA", "AE", "SA", "EG", "ZA"],
            "availableLanguage": ["en", "zh", "es", "de", "pl"]
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "CN",
            "addressRegion": "Zhejiang",
            "addressLocality": "Ningbo"
          },
          "sameAs": [
            "https://www.facebook.com/dkgasspring",
            "https://twitter.com/dkgasspring",
            "https://www.linkedin.com/company/dkgasspring"
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "DK Gas Spring Solutions",
          "url": "https://www.dkgasspring.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.dkgasspring.com/en/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        }
      ])
    }
  };
}