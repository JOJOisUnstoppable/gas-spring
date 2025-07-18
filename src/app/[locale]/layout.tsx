import '../globals.css'
import type { Metadata } from 'next'
// import type { Metadata, ResolvingMetadata } from 'next'
import { headers } from 'next/headers'
import localFont from 'next/font/local'
import { Navbar } from '@/components/layout/Navbar'
import { getDictionary } from '@/lib/i18n/getDictionary'
import type { Locale } from '@/lib/i18n/config'
import { Toaster } from '@/components/ui/sonner'
import { getProductData } from '@/lib/products'
import { Footer } from '@/components/layout/Footer'
import { notFound } from 'next/navigation'
import { ScrollToTop } from '@/components/shared/ScrollToTop'

const hubotSans = localFont({
  src: [
    {
      path: '../../../public/fonts/HubotSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/HubotSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/HubotSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-hubot-sans',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif']
})



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
  if (!['en', 'zh', 'es', 'de'].includes(locale)) {
    notFound()
  }

  const dict = await getDictionary(locale)
  const { categories } = await getProductData(locale)

  return (
    <html lang={locale}>
      <body className={hubotSans.className}>
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
  { params: { locale } }: { params: { locale: Locale } },
): Promise<Metadata> {
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
  const titleParts = [...titleSegments, baseTitle];
  if (locale !== 'en') {
    titleParts.push(`[${locale}]`);
  }
  const title = titleParts.join(' | ');

  return {
    title,
    description: 'Professional Damper and Gas Spring Solutions for Global Manufacturing by DK',
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
    authors: [{ name: 'DK Gas Spring Solutions' }],
    metadataBase: new URL('https://www.dkgasspring.com'),
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
      apple: '/apple-touch-icon.svg',
      other: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          sizes: '32x32',
          url: '/favicon-32x32.svg',
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          sizes: '16x16',
          url: '/favicon-16x16.svg',
        },
      ],
    },
    openGraph: {
      type: 'website',
      siteName: 'DK Gas Spring Solutions',
      title,
      description: 'Professional Damper and Gas Spring Solutions for Global Manufacturing by DK',
      images: '/images/og-image.jpg',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: 'Professional Damper and Gas Spring Solutions for Global Manufacturing by DK',
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
      'application/ld+json': JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "DK Gas Spring Solutions",
        "url": 'https://www.dkgasspring.com',
        "logo": `https://www.dkgasspring.com/logoWithDK.svg`,
        "image": `https://www.dkgasspring.com/images/og-image.jpg`,
        "description": "Professional Damper and Gas Spring Solutions for Global Manufacturin by DK",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": process.env.NEXT_PUBLIC_CONTACT_PHONE || "Will Update Soon",
          "contactType": "customer service",
          "areaServed": ["CN", "US", "EU", "JP", "KR", "IN", "UK", "CA", "AE", "SA", "EG", "ZA"],
          "availableLanguage": ["en", "zh", "es", "de"]
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
      })
    }
  };
}