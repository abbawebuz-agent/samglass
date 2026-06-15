import { useState } from 'react'
import { useLang } from '../i18n/LangContext.jsx'
import { ui } from '../i18n/ui.js'

const heading = {
  ru: { title: 'Свяжитесь с нами', sub: 'Мы свяжемся с вами в ближайший рабочий день с 9:00 до 18:00 и расскажем подробнее об услугах.' },
  uz: { title: 'Biz bilan bog‘laning', sub: 'Yaqin ish kunida 9:00 dan 18:00 gacha siz bilan bog‘lanib, xizmatlar haqida batafsil ma’lumot beramiz.' },
  en: { title: 'Contact us', sub: 'We will contact you on the next business day from 9:00 to 18:00 and tell you more about the services.' },
}

export default function ContactForm({ compact = false }) {
  const { lang } = useLang()
  const t = ui[lang]
  const h = heading[lang]
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    const f = e.target
    setLoading(true)
    setError(false)
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: f.name.value,
          phone: f.phone.value,
          message: f.message.value,
          lang,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.ok !== false) setSent(true)
      else setError(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={compact ? '' : 'rounded-3xl bg-white p-6 shadow-soft sm:p-10'}>
      {!compact && (
        <>
          <h3 className="text-2xl font-bold text-ink-900 sm:text-3xl">{h.title}</h3>
          <p className="mt-3 max-w-md text-ink-500">{h.sub}</p>
        </>
      )}
      {sent ? (
        <div className="mt-6 rounded-2xl bg-brand-light/60 p-6 text-center font-semibold text-brand-deep">
          {lang === 'uz' ? 'Rahmat! Tez orada bog‘lanamiz.' : lang === 'en' ? 'Thank you! We will contact you soon.' : 'Спасибо! Мы скоро свяжемся с вами.'}
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <input required name="name" type="text" placeholder={t.form.name}
            className="w-full rounded-xl border border-black/10 bg-ink-900/[0.02] px-4 py-3.5 outline-none transition focus:border-brand" />
          <input required name="phone" type="tel" placeholder={t.form.phone}
            className="w-full rounded-xl border border-black/10 bg-ink-900/[0.02] px-4 py-3.5 outline-none transition focus:border-brand" />
          <textarea name="message" rows={3} placeholder={t.form.message}
            className="w-full resize-none rounded-xl border border-black/10 bg-ink-900/[0.02] px-4 py-3.5 outline-none transition focus:border-brand" />
          <button type="submit" disabled={loading} className="btn-brand w-full disabled:opacity-60">
            {loading ? '...' : t.cta.send}
          </button>
          {error && (
            <p className="text-sm font-medium text-red-500">
              {lang === 'uz' ? 'Xatolik yuz berdi. Telefon orqali bog‘laning.' : lang === 'en' ? 'An error occurred. Please call us.' : 'Произошла ошибка. Свяжитесь по телефону.'}
            </p>
          )}
          <p className="text-xs leading-relaxed text-ink-500">{t.form.agree}</p>
        </form>
      )}
    </div>
  )
}
