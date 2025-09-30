import 'server-only'
import type { Locale } from './config'
import type { Dictionary } from '@/types/dictionary'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  zh: () => import('./dictionaries/zh.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
  de: () => import('./dictionaries/de.json').then((module) => module.default),
  pl: () => import('./dictionaries/pl.json').then((module) => module.default),
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const mod = await import(`./dictionaries/${locale}.json`)
  return mod.default as Dictionary
}