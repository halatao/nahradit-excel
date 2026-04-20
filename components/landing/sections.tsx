import Image from "next/image";
import { TrackedAnchor } from "@/components/analytics/tracked-link";
import { LeadForm } from "@/components/landing/lead-form";
import {
  faqItems,
  fitItems,
  insightItems,
  intentItems,
  practiceItems,
  problemItems,
  processItems,
  situationsItems,
  trustCards,
} from "@/lib/landing-content";
import { landingConfig, siteConfig } from "@/lib/site-config";

function Container({
  children,
  className = "",
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

function SectionEyebrow({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
      {children}
    </p>
  );
}

export function Header({ compact = false }: Readonly<{ compact?: boolean }>) {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <div className="text-lg font-heading font-extrabold tracking-tight text-slate-900">
          {landingConfig.name}
        </div>
        {!compact ? (
          <TrackedAnchor
            href="#formular"
            className="inline-flex min-h-11 items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
            analyticsEvent="cta_click"
            analyticsLabel="header_cta"
          >
            Domluvit nezávaznou konzultaci
          </TrackedAnchor>
        ) : null}
      </Container>
    </header>
  );
}

export function HeroSection() {
  return (
    <section className="bg-[var(--color-night)] text-white">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.45fr)] lg:items-center">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Interní nástroj pro řízení zakázek
            </p>
            <h1 className="mt-4 max-w-4xl font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Poptávky v mailu, zakázky v Excelu?
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              Budete mít všechny zakázky na jednom místě – s jasným stavem a dalším krokem.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Navrhnu jednoduchý interní nástroj podle vašeho procesu. Bez složitého ERP
              a bez zbytečně velkého projektu.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <TrackedAnchor
                href="#formular"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[var(--color-accent)] px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-[var(--color-accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
                analyticsEvent="cta_click"
                analyticsLabel="hero_primary_cta"
              >
                Ukázat, kde se to rozpadá
              </TrackedAnchor>
              <a
                href="#jak-to-probiha"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-slate-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Jak probíhá první krok
              </a>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Nezávazná konzultace (30 min)
            </p>
          </div>
          <aside className="rounded-[2rem] border border-slate-700 bg-white/5 p-6 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-white">Kde bývá problém</h2>
            <dl className="mt-5 space-y-4 text-base leading-7">
              {[
                ["Poptávky", "e-mail"],
                ["Nabídky", "Excel"],
                ["Zakázky", "další tabulka"],
                ["Stav", "dohledávání"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-4 border-b border-slate-700 pb-3">
                  <dt className="text-slate-400">{label}:</dt>
                  <dd className="font-semibold text-slate-100">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 rounded-2xl bg-[var(--color-accent)] p-4 text-base font-bold leading-7 text-slate-950">
              Výsledek: chaos a nejasný další krok
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className="bg-white">
      <Container className="py-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="h-full rounded-[2rem] border border-slate-200 bg-[var(--color-cream)] p-8">
            <div className="flex items-center gap-4">
              <Image
                src="/ondrej-halata.jpg"
                alt="Ondřej Halata"
                width={64}
                height={64}
                className="h-16 w-16 rounded-full object-cover"
                priority
              />
              <div>
                <h2 className="text-xl font-heading font-bold text-slate-900">Ondřej Halata</h2>
                <p className="mt-1 text-sm text-slate-600">
                  Vývojář interních systémů jako náhrady Excelu
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-x-2 text-sm text-slate-600">
                  <a
                    href={siteConfig.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-slate-300 underline-offset-2 hover:text-slate-900"
                  >
                    LinkedIn
                  </a>
                  <span aria-hidden="true" className="text-slate-400">
                    |
                  </span>
                  <a
                    href={siteConfig.navolnenoze}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-slate-300 underline-offset-2 hover:text-slate-900"
                  >
                    Na volné noze
                  </a>
                  <span aria-hidden="true" className="text-slate-400">
                    |
                  </span>
                  <a
                    href={siteConfig.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-slate-300 underline-offset-2 hover:text-slate-900"
                  >
                    halatao.cz
                  </a>
                </div>
              </div>
            </div>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Navrhuji a vyvíjím jednoduché interní systémy tam, kde Excel přestal stačit
              na poptávky, nabídky, realizace a stav zakázek.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Pracuji přímo s majiteli a týmy, které chtějí praktický první krok bez
              zbytečně velkého a drahého řešení.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 auto-rows-fr">
            {trustCards.map((card, index) => (
              <article
                key={card.title}
                className={`flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-7 ${
                  index === trustCards.length - 1 ? "md:col-span-2" : ""
                }`}
              >
                <h3 className="text-base font-heading font-bold text-slate-900">{card.title}</h3>
                <p className="mt-3 max-w-[34ch] text-sm leading-6 text-slate-600">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ProblemSection() {
  return (
    <section className="bg-slate-100">
      <Container className="py-16">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>Kdy Excel přestává stačit</SectionEyebrow>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Kdy Excel přestává stačit
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Jakmile řešíte poptávky, nabídky a realizace napříč týmem, začne se ztrácet přehled.
          </p>
          <p className="mt-3 text-base leading-7 text-slate-500">
            Pokud dnes evidujete zakázky v Excelu, pravděpodobně narážíte na:
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {problemItems.map((item) => (
            <article key={item.title} className="rounded-3xl bg-white p-6 ring-1 ring-slate-200">
              <h3 className="text-xl font-heading font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl rounded-2xl bg-white px-5 py-4 text-center text-base font-semibold leading-7 text-slate-700 ring-1 ring-slate-200">
          Výsledek: víc času hledáte než pracujete.
        </p>
      </Container>
    </section>
  );
}

export function IntentSection() {
  return (
    <section className="bg-white">
      <Container className="py-16">
        <div className="max-w-3xl">
          <SectionEyebrow>Interní software místo Excelu</SectionEyebrow>
          <p className="mt-3 text-lg font-semibold text-[var(--color-accent-deep)]">
            Místo tří různých míst budete mít jedno.
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Jedno místo pro poptávky, nabídky, realizace a stavy zakázek
          </h2>
          <p className="mt-4 text-lg font-semibold text-[var(--color-accent-deep)]">
            Poptávka → Nabídka → Realizace → Dokončeno
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {intentItems.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 p-5">
              <h3 className="font-heading text-base font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-[2rem] bg-[var(--color-cream)] p-6 ring-1 ring-slate-200 sm:p-8">
          <h3 className="font-heading text-2xl font-bold tracking-tight text-slate-900">
            Co to znamená v praxi
          </h3>
          <ul className="mt-5 grid gap-3 text-base leading-7 text-slate-700 md:grid-cols-2">
            {practiceItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 text-[var(--color-accent-deep)]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function ProductPreviewSection() {
  return (
    <section className="bg-slate-100">
      <Container className="py-16">
        <div className="max-w-3xl">
          <SectionEyebrow>Ukázka systému</SectionEyebrow>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Jak může vypadat náhrada Excelu
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Na reálném příkladu: dnes evidence v Excelu, potom přehled v systému.
          </p>
          <p className="mt-3 text-base leading-7 text-slate-500">
            Tohle není jeden konkrétní produkt – ale příklad, jak může řešení vypadat.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
            <div className="p-6">
              <h3 className="text-xl font-heading font-bold text-slate-900">
                Takhle dnes často vypadá evidence zakázek v Excelu
              </h3>
            </div>
            <div className="overflow-x-auto border-y border-slate-200">
              <Image
                src="/images/landing/excel-before.png"
                alt="Ukázka evidence zakázek v Excelu s chybějícími údaji"
                width={1350}
                height={326}
                className="h-auto min-w-[1280px] max-w-none lg:min-w-full"
              />
            </div>
            <div className="m-8 rounded-2xl border-2 border-red-300 bg-red-100 p-8 shadow-sm">
              <p className="text-xl font-heading font-extrabold leading-8 text-red-950 sm:text-2xl">
                <strong>❗ Chybí datum realizace</strong>
                <br />
                <span className="font-normal">→ zakázka se vůbec nedostane do výkazu práce</span>
              </p>
            </div>
          </article>

          <p className="my-14 rounded-2xl bg-white p-8 text-2xl font-heading font-extrabold text-[var(--color-accent-deep)] ring-1 ring-slate-200 sm:text-3xl">
            A takhle to může fungovat místo toho
          </p>

          <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
            <Image
              src="/images/landing/system-after-list.png"
              alt="Ukázka přehledu zakázek v systému se stavem a chybějícími informacemi"
              width={1572}
              height={768}
              className="h-auto w-full border-b border-slate-200"
            />
            <div className="p-6">
              <h3 className="text-lg font-heading font-bold text-slate-900">
                Všechny zakázky, jejich stav a chybějící informace vidíte okamžitě.
              </h3>
            </div>
          </article>

          <article className="max-w-4xl overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
            <div className="max-h-[520px] overflow-hidden border-b border-slate-200">
              <Image
                src="/images/landing/system-dashboard.png"
                alt="Ukázka dashboardu s přehledem hotových, chybějících a rozpracovaných zakázek"
                width={1365}
                height={768}
                className="h-auto w-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-heading font-bold text-slate-900">
                Okamžitý přehled o tom, co je hotovo, co chybí a co se řeší.
              </h3>
            </div>
          </article>
        </div>

        <p className="mt-6 text-sm leading-6 text-slate-500">
          Ukázka řešení na anonymizovaných datech
        </p>
      </Container>
    </section>
  );
}

export function FieldUseSection() {
  return (
    <section className="bg-white">
      <Container className="py-16">
        <div className="max-w-3xl">
          <SectionEyebrow>Práce mimo kancelář</SectionEyebrow>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Funguje v kanceláři i v terénu
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Systém odpovídá tomu, jak vaše firma skutečně pracuje – bez přepisování
            informací zpět do Excelu.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function InsightSection() {
  return (
    <section className="bg-slate-100">
      <Container className="grid gap-8 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionEyebrow>Výsledek spolupráce</SectionEyebrow>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Místo další tabulky vznikne funkční interní nástroj.
            <span className="block text-[var(--color-accent-deep)]">
              Začínáme tím, co dnes řeší Excel. A rychle to převádíme do funkčního systému.
            </span>
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Nezačíná se velkým software projektem. Nejdřív vezmeme konkrétní část procesu,
              kterou dnes drží Excel, a převedeme ji do použitelné první verze.
            </p>
          </div>
        </div>
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="font-heading text-2xl font-bold tracking-tight text-slate-900">
            Co typicky získáte
          </h3>
          <ul className="mt-6 space-y-4 text-base leading-7 text-slate-700">
            {insightItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 text-emerald-600">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function SituationsSection() {
  return (
    <section className="bg-white">
      <Container className="py-16">
        <div className="max-w-3xl">
          <SectionEyebrow>Typické situace</SectionEyebrow>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Kde Excel nejčastěji přestává stačit
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {situationsItems.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl bg-[var(--color-cream)] p-6 ring-1 ring-slate-200"
            >
              <h3 className="text-lg font-heading font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="bg-[var(--color-accent-soft)]">
      <Container className="py-16">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>Jak to probíhá</SectionEyebrow>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Ukážu vám, jak může vypadat náhrada vašeho Excelu
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Bez obecné IT konzultace. Krátce projdeme současnou evidenci zakázek a vybereme
            část, kde má řešení na míru největší smysl.
          </p>
        </div>
        <div id="jak-to-probiha" className="mt-10 grid gap-6 lg:grid-cols-3">
          {processItems.map((item, index) => (
            <article key={item.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-amber-200">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-extrabold text-slate-950">
                {index + 1}
              </div>
              <h3 className="mt-4 text-xl font-heading font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FitSection() {
  return (
    <section className="bg-[var(--color-night)] text-white">
      <Container className="grid gap-6 py-16 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Pro koho to dává smysl
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Pro firmy, kterým Excel přestal stačit
          </h2>
          <ul className="mt-6 space-y-4 text-base leading-7 text-slate-300">
            {fitItems.goodFit.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-[2rem] bg-white p-8 text-slate-900 ring-1 ring-slate-200">
          <h3 className="font-heading text-2xl font-bold tracking-tight">Nehodí se to pro vás, pokud:</h3>
          <ul className="mt-6 space-y-4 text-base leading-7 text-slate-600">
            {fitItems.badFit.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 text-rose-500">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="bg-white">
      <Container className="py-16">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>Časté otázky</SectionEyebrow>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Co bývá dobré vědět předem
          </h2>
        </div>
        <div className="mt-10 space-y-4">
          {faqItems.map((item) => (
            <article key={item.question} className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-heading font-bold text-slate-900">{item.question}</h3>
              <p className="mt-2 text-base leading-7 text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function LeadFormSection() {
  return (
    <section id="formular" className="bg-[var(--color-accent-soft)]">
      <Container className="max-w-5xl py-16">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-amber-200 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-deep)]">
              Nezávazně probereme současný stav
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Ukážu vám, jak může vypadat náhrada vašeho Excelu
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Stačí pár vět o tom, jak dnes evidujete zakázky, poptávky, nabídky nebo realizace.
              Ozvu se zpět a projdeme, jak může vypadat řešení na míru místo Excelu.
            </p>
            <p className="mt-3 text-base leading-7 text-slate-500">
              Stačí mi ukázat, jak dnes evidujete zakázky (klidně Excel). Řeknu vám, jestli
              má smysl to řešit jinak.
            </p>
            <p className="mt-3 text-base font-semibold leading-7 text-slate-700">
              Odpovím vám, jestli má smysl Excel nahrazovat právě ve vašem případě.
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Nezávazná konzultace (30 min)
            </p>
            <div className="mt-6 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <h3 className="font-heading text-base font-bold text-slate-900">
                Co se stane po odeslání:
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                <li>– podívám se na váš proces</li>
                <li>– ukážu, kde se ztrácí přehled</li>
                <li>– navrhnu první konkrétní krok</li>
              </ul>
            </div>
          </div>
          <LeadForm />
          <div className="mt-6 border-t border-slate-200 pt-6 text-sm leading-6 text-slate-500">
            Chcete nejdřív jen poslat stručný popis současného Excelu? Napište na{" "}
            <TrackedAnchor
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-slate-900 underline"
              analyticsEvent="email_click"
              analyticsLabel="lead_form_email"
            >
              {siteConfig.email}
            </TrackedAnchor>
            .
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FooterSection() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="flex flex-col gap-4 py-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">
        <div>
          © 2026 {landingConfig.name}
          <br />
          {siteConfig.legalName} ·{" "}
          <TrackedAnchor
            href={`mailto:${siteConfig.email}`}
            className="hover:text-slate-900"
            analyticsEvent="email_click"
            analyticsLabel="footer_email"
          >
            {siteConfig.email}
          </TrackedAnchor>
          <br />
          IČO: {siteConfig.ico} · {siteConfig.phoneDisplay}
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
          <a href={siteConfig.linkedIn} className="hover:text-slate-900" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={siteConfig.navolnenoze} className="hover:text-slate-900" target="_blank" rel="noreferrer">
            Na volné noze
          </a>
          <a
            href={siteConfig.siteUrl}
            className="hover:text-slate-900"
            target="_blank"
            rel="sponsored noreferrer"
          >
            halatao.cz
          </a>
        </div>
      </Container>
    </footer>
  );
}
