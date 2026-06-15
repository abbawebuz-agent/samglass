import { useLang } from '../i18n/LangContext.jsx'
import pages, { PIMG } from '../data/pages.js'
import { asset } from '../data/asset.js'
import Reveal from '../components/Reveal.jsx'
import { PageHeader, CtaSection } from '../components/sections.jsx'

export default function News() {
  const { lang } = useLang()
  const t = pages[lang].news

  return (
    <>
      <PageHeader title={t.title} />

      {/* Asosiy yangilik */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-3xl shadow-soft">
            <img src={asset(PIMG.newsFeatured)} alt={t.featured.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </Reveal>
          <Reveal delay={120}>
            <h2 className="text-3xl font-bold text-ink-900">{t.featured.title}</h2>
            <p className="mt-5 leading-relaxed text-ink-500">{t.featured.text1}</p>
            <p className="mt-4 leading-relaxed text-ink-500">{t.featured.text2}</p>
          </Reveal>
        </div>
      </section>

      {/* Boshqa yangiliklar */}
      <section className="bg-ink-900/[0.03] py-20 lg:py-28">
        <div className="container-x">
          <Reveal><h2 className="text-3xl font-bold sm:text-4xl">{t.moreTitle}</h2></Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.items.map((n, i) => (
              <Reveal key={i} delay={(i % 4) * 70} className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/[0.04] transition hover:shadow-soft">
                <div className="aspect-[16/11] overflow-hidden">
                  <img src={asset(PIMG.news[i % PIMG.news.length])} alt={n.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
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

      <CtaSection />
    </>
  )
}
