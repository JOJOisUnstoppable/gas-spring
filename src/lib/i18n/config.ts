export const locales = ['en', 'zh', 'es', 'de', 'pl'] as const
export type Locale = typeof locales[number]
export const defaultLocale: Locale = 'en'

export const localeNames = {
  en: 'English',
  zh: '中文',
  es: 'Español',
  de: 'Deutsch',
  pl: 'Polski'
} as const