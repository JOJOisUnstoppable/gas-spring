import 'server-only'
import type { Locale } from './config'
import type { Dictionary } from '@/types/dictionary'


export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const mod = await import(`./dictionaries/${locale}.json`)
  return mod.default as Dictionary
}