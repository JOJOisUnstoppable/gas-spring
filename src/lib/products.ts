import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Locale } from './i18n/config'

interface ProductCategory {
  id: string
  title: string
  description: string
  image: string
  order: number
}

interface Product {
  id: string
  title: string
  description: string
  category: string
  image: string
}

interface ProductData {
  categories: ProductCategory[]
  items: Product[]
  content: string
}

export async function getProductData(locale: Locale): Promise<ProductData> {
  const filePath = path.join(process.cwd(), 'content', 'products', locale, 'categories.md')
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  
  return {
    categories: data.categories || [],
    items: data.items || [],
    content
  }
}

export async function getProductsByCategory(locale: Locale, categoryId: string): Promise<Product[]> {
  const { items } = await getProductData(locale)
  return items.filter(item => item.category === categoryId)
}