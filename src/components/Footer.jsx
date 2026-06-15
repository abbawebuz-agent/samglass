import { Link } from 'react-router-dom'
import { useLang, localizedPath } from '../i18n/LangContext.jsx'
import { ui, CONTACT } from '../i18n/ui.js'

export default function Footer() {
  const { lang } = useLang()
  const t = ui[lang]
  const year = 2024

  const socials = [
    { label: 'Telegram', href: CONTACT.telegram },
    { label: 'Instagram', href: CONTACT.instagram },
    { label: 'YouTube', href: CONTACT.youtube },
    { label: 'Facebook', href: CONTACT.facebook },
  ]

  return (
    <footer className="bg-ink-900 text-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src="/assets/samglasslogo.png" alt="SamGlass" className="h-10 w-auto brightness-0 invert" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            SamGlass — {lang === 'uz' ? 'har qanday bino uchun zamonaviy shisha yechimlari.' : lang === 'en' ? 'modern glass solutions for any building.' : 'современные стеклянные решения для любых зданий.'}
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">{t.nav.contacts}</h4>
          <a href={CONTACT.phoneHref} className="block text-white/80 hover:text-brand">{CONTACT.phone}</a>
          <div className="mt-4 flex flex-wrap gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-sm text-white/60 hover:text-brand">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">{t.nav.services}</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to={localizedPath('projects', lang)} className="hover:text-brand">{t.nav.projects}</Link></li>
            <li><Link to={localizedPath('about', lang)} className="hover:text-brand">{t.nav.about}</Link></li>
            <li><Link to={localizedPath('news', lang)} className="hover:text-brand">{t.nav.news}</Link></li>
            <li><a href={CONTACT.catalog} target="_blank" rel="noreferrer" className="hover:text-brand">{t.nav.catalog}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/40 sm:flex-row">
          <span>© {year} SamGlass. {t.footer.rights}.</span>
          <span>{t.footer.madeBy}</span>
        </div>
      </div>
    </footer>
  )
}
