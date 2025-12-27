import { getBlogPosts, getBlogTags } from '@/lib/blog'
import { getProductData } from '@/lib/products'
import { MetadataRoute } from 'next'

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.dkgasspring.com' // 修复 URL

  try {
    // 获取所有博客文章和标签
    const zhPosts = await getBlogPosts('zh')
    const enPosts = await getBlogPosts('en')
    const esPosts = await getBlogPosts('es')
    const dePosts = await getBlogPosts('de')
    const plPosts = await getBlogPosts('pl')

    // 获取所有语言的标签
    const zhTags = await getBlogTags('zh')
    const enTags = await getBlogTags('en')
    const esTags = await getBlogTags('es')
    const deTags = await getBlogTags('de')
    const plTags = await getBlogTags('pl')

    // 获取产品数据
    const { categories: zhCategories } = await getProductData('zh')
    const { categories: enCategories } = await getProductData('en')
    const { categories: esCategories } = await getProductData('es')
    const { categories: deCategories } = await getProductData('de')
    const { categories: plCategories } = await getProductData('pl')

    // 静态页面
    const routes = [
      { path: '', priority: 1.0, changefreq: 'weekly' as ChangeFreq },
      { path: '/products', priority: 0.9, changefreq: 'weekly' as ChangeFreq },
      { path: '/applications', priority: 0.8, changefreq: 'monthly' as ChangeFreq },
      { path: '/blog', priority: 0.8, changefreq: 'daily' as ChangeFreq },
      { path: '/contact', priority: 0.7, changefreq: 'monthly' as ChangeFreq },
      { path: '/spotlights/solar-damper', priority: 0.9, changefreq: 'monthly' as ChangeFreq },
      { path: '/terms', priority: 0.5, changefreq: 'yearly' as ChangeFreq },
      { path: '/privacy', priority: 0.5, changefreq: 'yearly' as ChangeFreq },
    ]

    return [
      // 静态页面
      ...routes.flatMap(route => [
        {
          url: `${baseUrl}/zh${route.path}`,
          lastModified: new Date(),
          changeFrequency: route.changefreq,
          priority: route.priority,
        },
        {
          // 英语页面移除 /en 前缀
          url: `${baseUrl}${route.path}`,
          lastModified: new Date(),
          changeFrequency: route.changefreq,
          priority: route.priority,
        },
        {
          url: `${baseUrl}/es${route.path}`,
          lastModified: new Date(),
          changeFrequency: route.changefreq,
          priority: route.priority,
        },
        {
          url: `${baseUrl}/de${route.path}`,
          lastModified: new Date(),
          changeFrequency: route.changefreq,
          priority: route.priority,
        },
        {
          url: `${baseUrl}/pl${route.path}`,
          lastModified: new Date(),
          changeFrequency: route.changefreq,
          priority: route.priority,
        },
      ]),

      // 产品分类页面
      ...[zhCategories, enCategories, esCategories, deCategories, plCategories].flatMap((categories, index) => {
        const lang = ['zh', 'en', 'es', 'de', 'pl'][index]
        return categories.map(category => ({
          // 英语页面移除 /en 前缀
          url: lang === 'en' 
            ? `${baseUrl}/products/category/${category.id}`
            : `${baseUrl}/${lang}/products/category/${category.id}`,
          lastModified: new Date(),
          changeFrequency: 'weekly' as ChangeFreq,
          priority: 0.8,
        }))
      }),

      // 博客文章页面
      ...[zhPosts, enPosts, esPosts, dePosts, plPosts].flatMap((posts, index) => {
        const lang = ['zh', 'en', 'es', 'de', 'pl'][index]
        return posts.map(post => ({
          // 英语页面移除 /en 前缀
          url: lang === 'en'
            ? `${baseUrl}/blog/${post.slug}`
            : `${baseUrl}/${lang}/blog/${post.slug}`,
          lastModified: post.date ? new Date(post.date) : new Date(),
          changeFrequency: 'monthly' as ChangeFreq,
          priority: 0.6,
        }))
      }),

      // 博客标签页面
      ...[zhTags, enTags, esTags, deTags, plTags].flatMap((tags, index) => {
        const lang = ['zh', 'en', 'es', 'de', 'pl'][index]
        return tags.map(tag => ({
          // 英语页面移除 /en 前缀
          url: lang === 'en'
            ? `${baseUrl}/blog/tag/${tag}`
            : `${baseUrl}/${lang}/blog/tag/${tag}`,
          lastModified: new Date(),
          changeFrequency: 'weekly' as ChangeFreq,
          priority: 0.6,
        }))
      })
    ]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    // 返回基本的静态页面 sitemap
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily' as ChangeFreq,
        priority: 1.0,
      },
    ]
  }
}