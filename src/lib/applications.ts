import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { cache } from 'react'
import type { ApplicationData, Application } from '@/types/application'
import type { Locale } from './i18n/config'
import { getBlogPosts } from './blog'

// 使用 React cache 优化性能
export const getApplicationData = cache(async (locale: Locale): Promise<ApplicationData> => {
  try {
    // 读取对应语言的 applications.md 文件
    const filePath = path.join(process.cwd(), 'content', 'applications', locale, 'applications.md')
    const fileContent = fs.readFileSync(filePath, 'utf8')
    
    // 使用 gray-matter 解析 frontmatter 和内容
    const { data, content } = matter(fileContent)
    
    // 确保 applications 数组存在并按 order 排序
    const applications = (data.applications || []) as Application[]
    applications.sort((a, b) => a.order - b.order)

    return {
      applications,
      content: content.trim()
    }
  } catch (error) {
    console.error(`Error loading application data for locale ${locale}:`, error)
    // 返回空数据而不是抛出错误，以避免整个页面崩溃
    return {
      applications: [],
      content: ''
    }
  }
})

// 获取单个应用详情
export const getApplication = cache(async (locale: Locale, id: string): Promise<Application | null> => {
  try {
    const { applications } = await getApplicationData(locale)
    return applications.find(app => app.id === id) || null
  } catch (error) {
    console.error(`Error loading application ${id} for locale ${locale}:`, error)
    return null
  }
})

// 获取与应用相关标签关联的所有博客文章
export const getApplicationRelatedPosts = cache(async (
  locale: Locale,
  applicationId: string
): Promise<Array<{ slug: string; title: string; date: string; coverImage?: string }>> => {
  try {
    const application = await getApplication(locale, applicationId)
    if (!application) return []

    const posts = await getBlogPosts(locale)
    
    return posts
      .filter(post => 
        post.tags.some(tag => application.relatedTags.includes(tag))
      )
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map(post => ({
        slug: post.slug,
        title: post.title,
        date: post.date,
        coverImage: post.coverImage
      }))
  } catch (error) {
    console.error(`Error loading related posts for application ${applicationId}:`, error)
    return []
  }
})

// 获取与应用相关标签关联的最新5篇博客文章
export const getApplicationLatestRelatedPosts = cache(async (
  locale: Locale,
  applicationId: string,
  limit: number = 5
): Promise<Array<{ slug: string; title: string; date: string; coverImage?: string }>> => {
  try {
    const allRelatedPosts = await getApplicationRelatedPosts(locale, applicationId)
    return allRelatedPosts.slice(0, limit)
  } catch (error) {
    console.error(`Error loading latest related posts for application ${applicationId}:`, error)
    return []
  }
})