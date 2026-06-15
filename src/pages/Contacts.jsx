import { useLang } from '../i18n/LangContext.jsx'
import { CONTACT } from '../i18n/ui.js'
import pages from '../data/pages.js'
import Reveal from '../components/Reveal.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { PageHeader } from '../components/sections.jsx'

const EMAIL = 'info@sam-glass.uz'
// Samarqand markazi (Rudakiy ko'chasi atrofi) — OpenStreetMap embed (kalit kerak emas)
const MAP_SRC = 'https://www.openstreetmap.org/export/embed.html?bbox=66.9600%2C39.6480%2C66.9900%2C39.6620&layer=mapnik&marker=39.6550%2C66.9750'

export default function Contacts() {
  const { lang } = useLang()
  const t = pages[lang].contacts

  const rows = [
    { label: t.addressLabel, value: t.address },
    { label: t.phoneLabel, value: CONTACT.phone, href: CONTACT.phoneHref },
    { label: t.emailLabel, value: EMAIL, href: `mailto:${EMAIL}` },
  ]

  return (
    <>
      <PageHeader title={t.title} />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="max-w-md leading-relaxed text-ink-500">{t.intro}</p>
            <div className="mt-8 space-y-5">
              {rows.map((r, i) => (
                <div key={i} className="rounded-2xl border border-black/[0.06] p-5">
                  <div className="text-sm font-semibold uppercase tracking-wide text-brand-dark">{r.label}</div>
                  {r.href ? (
                    <a href={r.href} className="mt-1 block text-lg font-medium text-ink-900 hover:text-brand-deep">{r.value}</a>
                  ) : (
                    <div className="mt-1 text-lg font-medium text-ink-900">{r.value}</div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={CONTACT.telegram} target="_blank" rel="noreferrer" className="btn-outline px-5 py-2.5 text-sm">Telegram</a>
              <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="btn-outline px-5 py-2.5 text-sm">Instagram</a>
              <a href={CONTACT.youtube} target="_blank" rel="noreferrer" className="btn-outline px-5 py-2.5 text-sm">YouTube</a>
              <a href={CONTACT.facebook} target="_blank" rel="noreferrer" className="btn-outline px-5 py-2.5 text-sm">Facebook</a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>

        {/* Xarita */}
        <div className="container-x mt-12">
          <div className="overflow-hidden rounded-3xl shadow-soft ring-1 ring-black/[0.06]">
            <iframe
              title="SamGlass — Samarqand"
              src={MAP_SRC}
              className="h-[380px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
