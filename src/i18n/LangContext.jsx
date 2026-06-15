import { createContext, useContext } from 'react'
import { useLocation } from 'react-router-dom'

export const LANGS = ['ru', 'uz', 'en']
const LangContext = createContext({ lang: 'ru', prefix: '' })

// URL prefiksidan tilni aniqlaydi: / -> ru, /uz -> uz, /en -> en
export function langFromPath(pathname) {
  if (pathname === '/uz' || pathname.startsWith('/uz/')) return 'uz'
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en'
  return 'ru'
}

export function LangProvider({ children }) {
  const { pathname } = useLocation()
  const lang = langFromPath(pathname)
  const prefix = lang === 'ru' ? '' : `/${lang}`
  return <LangContext.Provider value={{ lang, prefix }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}

// Sahifa kaliti + til -> URL yo'li
export function localizedPath(pageKey, lang) {
  const prefix = lang === 'ru' ? '' : `/${lang}`
  if (pageKey === 'home') return prefix || '/'
  return `${prefix}/${pageKey}`
}
