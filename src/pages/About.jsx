import { useLang } from '../i18n/LangContext.jsx'
import pages, { PIMG } from '../data/pages.js'
import { asset } from '../data/asset.js'
import Reveal from '../components/Reveal.jsx'
import { CtaSection } from '../components/sections.jsx'

export default function About() {
  const { lang } = useLang()
  const t = pages[lang].about

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ink-900 via-ink-700 to-brand-deep text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/30 blur-3xl" />
        <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <Reveal>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">{t.title}</h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">{t.intro}</p>
          </Reveal>
          <Reveal delay={120} className="grid grid-cols-2 gap-4">
            {PIMG.aboutGallery.map((g, i) => (
              <img key={i} src={asset(g)} alt="" loading="lazy" className="aspect-square w-full rounded-2xl object-cover ring-1 ring-white/10" />
            ))}
          </Reveal>
        </div>
      </section>

      {/* Why + stats */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">{t.whyTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-500">{t.whyText}</p>
          </Reveal>
          <div className="grid grid-cols-2 gap-5">
            {t.stats.map((s, i) => (
              <Reveal key={i} delay={i * 80} className="rounded-2xl bg-gradient-to-br from-brand-light/50 to-white p-7 text-center ring-1 ring-brand/10">
                <div className="text-4xl font-extrabold text-brand-dark">{s.num}</div>
                <div className="mt-2 text-sm text-ink-500">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team line */}
      <section className="bg-ink-900/[0.03] py-16">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center text-2xl font-medium leading-snug text-ink-900">
            “{t.teamLine}”
          </Reveal>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <Reveal><h2 className="text-3xl font-bold sm:text-4xl">{t.advantagesTitle}</h2></Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {t.advantages.map((a, i) => (
              <Reveal key={i} delay={(i % 2) * 90} className="rounded-2xl border border-black/[0.06] p-7 transition hover:shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-xl font-black text-brand-dark">{i + 1}</div>
                <h3 className="mt-5 text-xl font-bold text-ink-900">{a.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-500">{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-ink-900 py-20 text-white lg:py-28">
        <div className="container-x">
          <Reveal><h2 className="text-3xl font-bold sm:text-4xl">{t.capsTitle}</h2></Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {t.caps.map((c, i) => (
              <span key={i} className="rounded-full bg-white/[0.06] px-5 py-2.5 text-sm font-medium ring-1 ring-white/10 transition hover:bg-brand/20 hover:ring-brand/40">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
