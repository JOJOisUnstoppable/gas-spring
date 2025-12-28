import { Metadata } from 'next'

interface PageMetadataProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  locale: string
  type?: string
  canonical?: string
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image = '/images/og-image.jpg',
  locale,
  type = 'website',
  canonical
}: PageMetadataProps): Metadata {
  const baseUrl = 'https://www.dkgasspring.com'
  const baseTitle = 'DK Gas Spring Solutions'
  
  // 根据类型添加不同的中间层级
  const titleSegments = [title]
  if (type === 'article') {
    titleSegments.push('Blog')
  }
  titleSegments.push(baseTitle)
  
  // 非英文添加语言标识
  if (locale !== 'en') {
    titleSegments.push(`[${locale}]`)
  }

  const metadata: Metadata = {
    title: titleSegments.join(' | '),
    description,
    keywords: keywords.join(', '),
    openGraph: {
      type: type as 'website' | 'article',
      title: titleSegments.join(' | '),
      description,
      images: [{ url: `${baseUrl}${image}` }],
      locale,
      siteName: 'DK Gas Spring Solutions',
      url: canonical,
    },
    twitter: {
      card: 'summary_large_image',
      title: titleSegments.join(' | '),
      description,
      images: [{ url: `${baseUrl}${image}` }],
      site: '@dkgasspring',
    }
  }

  if (canonical) {
    metadata.alternates = {
      canonical: canonical
    }
  }

  return metadata
}