import { useLang } from '../i18n/LangContext.jsx'
import pages, { PIMG } from '../data/pages.js'
import { asset } from '../data/asset.js'
import Reveal from '../components/Reveal.jsx'
import { PageHeader, CtaSection } from '../components/sections.jsx'

export default function Projects() {
  const { lang } = useLang()
  const t = pages[lang].projects

  return (
    <>
      <PageHeader title={t.title} sub={t.sub} />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x grid gap-8 md:grid-cols-2">
          {t.items.map((p, i) => (
            <Reveal key={i} delay={(i % 2) * 100} className="group overflow-hidden rounded-3xl border border-black/[0.06] bg-white transition hover:shadow-soft">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={asset(PIMG.projects[i])} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-7">
                <span className="text-sm font-semibold text-brand-dark">{String(i + 1).padStart(2, '0')} / {String(t.items.length).padStart(2, '0')}</span>
                <h3 className="mt-3 text-xl font-bold text-ink-900">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-500">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
