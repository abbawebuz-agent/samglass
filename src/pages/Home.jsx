import { Link } from 'react-router-dom'
import { useLang, localizedPath } from '../i18n/LangContext.jsx'
import { ui, CONTACT } from '../i18n/ui.js'
import home, { IMG, serviceImg } from '../data/home.js'
import { asset } from '../data/asset.js'
import Reveal from '../components/Reveal.jsx'
import ContactForm from '../components/ContactForm.jsx'

const HERO_IMG = 'https://static.tildacdn.one/tild3339-3664-4631-b232-626330343434/image_4.png'
const HERO_THUMBS = [
  'https://static.tildacdn.one/tild3361-6431-4130-b435-333939396639/Rectangle_67.png',
  'https://static.tildacdn.one/tild6431-3731-4130-b331-356630306162/Rectangle_66.png',
  'https://static.tildacdn.one/tild3962-6534-4266-a238-333530363230/Rectangle_68.png',
]

export default function Home() {
  const { lang } = useLang()
  const t = home[lang]
  const u = ui[lang]

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ink-900 via-ink-700 to-brand-deep text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${asset(HERO_IMG)})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand/30 blur-3xl" />
        <div className="container-x relative grid gap-10 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <Reveal>
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-brand-light">SamGlass</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">{t.hero.title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{t.hero.sub}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to={localizedPath('contacts', lang)} className="btn-brand">{t.hero.cta}</Link>
              <a href={CONTACT.catalog} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white/10">
                {t.hero.catalog}
              </a>
            </div>
          </Reveal>
          <Reveal delay={150} className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
              <img src={asset(HERO_IMG)} alt="SamGlass" className="aspect-[4/3] w-full object-cover" loading="eager" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {HERO_THUMBS.map((s, i) => (
                <img key={i} src={asset(s)} alt="" className="aspect-square w-full rounded-2xl object-cover ring-1 ring-white/10" loading="lazy" />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">{t.servicesTitle}</h2>
            <p className="mt-4 text-lg text-ink-500">{t.servicesSub}</p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.map((s, i) => (
              <Reveal key={i} delay={(i % 3) * 80} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                {serviceImg[i] ? (
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={asset(serviceImg[i])} alt={s.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                ) : (
                  <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-brand-light to-brand/20">
                    <span className="text-4xl font-black text-brand-dark/40">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-ink-900">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FACADE HIGHLIGHT ===== */}
      <section className="bg-ink-900/[0.03] py-20 lg:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-3xl shadow-soft">
            <img src={asset(IMG.facade)} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xl font-medium leading-relaxed text-ink-900">{t.facade.text1}</p>
            <p className="mt-5 text-ink-500">{t.facade.text2}</p>
            <Link to={localizedPath('about', lang)} className="btn-outline mt-8">{t.facade.more}</Link>
          </Reveal>
        </div>
      </section>

      {/* ===== ABOUT / STATS ===== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">{t.statsTitle}</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-500">“{t.statsQuote}”</p>
          </Reveal>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {t.features.map((f, i) => (
              <span key={i} className="rounded-full bg-brand-light/60 px-5 py-2.5 text-sm font-semibold text-brand-deep">{f}</span>
            ))}
          </div>
          <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {t.stats.map((s, i) => (
              <Reveal key={i} delay={i * 80} className="rounded-2xl bg-gradient-to-br from-brand-light/50 to-white p-7 text-center ring-1 ring-brand/10">
                <div className="text-4xl font-extrabold text-brand-dark lg:text-5xl">{s.num}</div>
                <div className="mt-2 text-sm text-ink-500">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="bg-ink-900 py-20 text-white lg:py-28">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold sm:text-4xl">{t.projectsTitle}</h2>
            <Link to={localizedPath('projects', lang)} className="text-brand-light hover:text-brand">{u.cta.more} →</Link>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {t.projects.map((p, i) => (
              <Reveal key={i} delay={(i % 2) * 100} className="group relative overflow-hidden rounded-3xl bg-white/[0.04] p-8 ring-1 ring-white/10 transition hover:ring-brand/40">
                <span className="text-sm font-semibold text-brand">{String(i + 1).padStart(2, '0')}/04</span>
                <h3 className="mt-4 text-xl font-semibold leading-snug">{p}</h3>
                <div className="mt-6 h-px w-full bg-white/10" />
                <span className="mt-4 inline-block text-sm text-white/50 transition group-hover:text-brand">{u.cta.more} →</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERS ===== */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-x">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">{t.partnersTitle}</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {IMG.partners.map((p, i) => (
              <div key={i} className="flex items-center justify-center rounded-2xl border border-black/[0.06] bg-white p-5 grayscale transition hover:grayscale-0">
                <img src={asset(p)} alt="partner" className="max-h-14 w-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWS ===== */}
      <section className="bg-ink-900/[0.03] py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold sm:text-4xl">{t.newsTitle}</h2>
            <Link to={localizedPath('news', lang)} className="font-semibold text-brand-dark hover:text-brand-deep">{t.newsMore} →</Link>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.news.map((n, i) => (
              <Reveal key={i} delay={(i % 4) * 70} className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/[0.04] transition hover:shadow-soft">
                <div className="aspect-[16/11] overflow-hidden">
                  <img src={asset(IMG.news[i])} alt={n.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-bold leading-snug text-ink-900">{n.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{n.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA + FORM ===== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-extrabold uppercase leading-tight text-ink-900 sm:text-4xl">{t.cta.title}</h2>
            <p className="mt-5 max-w-md text-ink-500">{t.cta.text}</p>
            <a href={CONTACT.phoneHref} className="mt-8 inline-flex items-center gap-3 text-2xl font-bold text-brand-dark hover:text-brand-deep">
              {CONTACT.phone}
            </a>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
