import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useLang, localizedPath, LANGS } from '../i18n/LangContext.jsx'
import { ui, CONTACT } from '../i18n/ui.js'

export default function Header() {
  const { lang, prefix } = useLang()
  const { pathname } = useLocation()
  const t = ui[lang]
  const [open, setOpen] = useState(false)

  const navItems = [
    { key: 'projects', to: localizedPath('projects', lang), label: t.nav.projects },
    { key: 'about', to: localizedPath('about', lang), label: t.nav.about },
    { key: 'news', to: localizedPath('news', lang), label: t.nav.news },
    { key: 'contacts', to: localizedPath('contacts', lang), label: t.nav.contacts },
  ]

  // Joriy sahifani boshqa tilga o'tkazish (yo'lni saqlab)
  const pathForLang = (target) => {
    const rest = pathname.replace(/^\/(uz|en)(?=\/|$)/, '') || '/'
    const tp = target === 'ru' ? '' : `/${target}`
    return rest === '/' ? tp || '/' : `${tp}${rest}`
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link to={prefix || '/'} className="flex items-center gap-2 shrink-0">
          <img src="/assets/logosam.png" alt="SamGlass" className="h-9 w-auto lg:h-10" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((n) => (
            <NavLink
              key={n.key}
              to={n.to}
              className={({ isActive }) =>
                `text-[15px] font-medium transition-colors hover:text-brand-dark ${
                  isActive ? 'text-brand-dark' : 'text-ink'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <a href={CONTACT.catalog} target="_blank" rel="noreferrer" className="text-[15px] font-medium text-ink transition-colors hover:text-brand-dark">
            {t.nav.catalog}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 rounded-full bg-ink-900/[0.04] p-1 sm:flex">
            {LANGS.map((l) => (
              <Link
                key={l}
                to={pathForLang(l)}
                className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
                  l === lang ? 'bg-brand text-white' : 'text-ink-500 hover:text-ink'
                }`}
              >
                {l === 'ru' ? 'Ру' : l === 'uz' ? 'Uz' : 'En'}
              </Link>
            ))}
          </div>
          <a href={CONTACT.phoneHref} className="hidden font-semibold text-ink-900 md:inline">
            {CONTACT.phone}
          </a>
          <Link to={localizedPath('contacts', lang)} className="btn-brand hidden h-10 px-5 py-0 text-sm lg:inline-flex">
            {t.cta.orderProject}
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-900 lg:hidden"
          >
            <span className="text-2xl">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Mobil menyu */}
      {open && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <nav className="container-x flex flex-col py-3">
            {navItems.map((n) => (
              <NavLink key={n.key} to={n.to} onClick={() => setOpen(false)} className="py-3 text-base font-medium text-ink">
                {n.label}
              </NavLink>
            ))}
            <a href={CONTACT.catalog} target="_blank" rel="noreferrer" className="py-3 text-base font-medium text-ink">{t.nav.catalog}</a>
            <div className="mt-2 flex items-center gap-2">
              {LANGS.map((l) => (
                <Link key={l} to={pathForLang(l)} onClick={() => setOpen(false)} className={`rounded-full px-3 py-1.5 text-sm font-semibold ${l === lang ? 'bg-brand text-white' : 'bg-ink-900/[0.05] text-ink'}`}>
                  {l === 'ru' ? 'Ру' : l === 'uz' ? 'Uz' : 'En'}
                </Link>
              ))}
              <a href={CONTACT.phoneHref} className="ml-auto font-semibold text-ink-900">{CONTACT.phone}</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
