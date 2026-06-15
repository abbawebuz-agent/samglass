import { useLang } from '../i18n/LangContext.jsx'
import { CONTACT } from '../i18n/ui.js'
import home from '../data/home.js'
import Reveal from './Reveal.jsx'
import ContactForm from './ContactForm.jsx'

// Ichki sahifa sarlavhasi (banner)
export function PageHeader({ title, sub }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ink-900 via-ink-700 to-brand-deep text-white">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/30 blur-3xl" />
      <div className="container-x relative py-16 lg:py-24">
        <Reveal>
          <h1 className="text-4xl font-extrabold sm:text-5xl">{title}</h1>
          {sub && <p className="mt-5 max-w-2xl text-lg text-white/70">{sub}</p>}
        </Reveal>
      </div>
    </section>
  )
}

// "Отправляйте заявки" + forma — barcha ichki sahifalar oxirida
export function CtaSection() {
  const { lang } = useLang()
  const c = home[lang].cta
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl font-extrabold uppercase leading-tight text-ink-900 sm:text-4xl">{c.title}</h2>
          <p className="mt-5 max-w-md text-ink-500">{c.text}</p>
          <a href={CONTACT.phoneHref} className="mt-8 inline-flex items-center gap-3 text-2xl font-bold text-brand-dark hover:text-brand-deep">
            {CONTACT.phone}
          </a>
        </Reveal>
        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
