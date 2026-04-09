import Image from "next/image";
import Link from "next/link";
import { LeadForm } from "@/components/landing/lead-form";
import {
  faqItems,
  fitItems,
  insightItems,
  intentItems,
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
          <a
            href="#formular"
            className="inline-flex min-h-11 items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
          >
            Zjistit, co má smysl řešit jako první
          </a>
        ) : null}
      </Container>
    </header>
  );
}

export function HeroSection() {
  return (
    <section className="bg-[var(--color-night)] text-white">
      <Container className="py-16 lg:py-20">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Rychlý první krok místo velkého projektu
          </p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ztrácíte přehled v zakázkách?
            <span className="block text-[var(--color-accent)]">Excel na tohle už nestačí.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
            Pomáhám menším a středním firmám dát poptávkám, nabídkám a zakázkám jasný stav,
            další krok a sdílený přehled bez velkého ERP projektu.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            Nejdřív společně určíme, kde se proces láme. Pak navrhnu první realistický krok
            a podle potřeby ho i rychle zavedu do praxe.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#formular"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[var(--color-accent)] px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-[var(--color-accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
            >
              Zjistit, co má smysl řešit jako první
            </a>
            <a
              href="#jak-to-probiha"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-slate-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Jak to probíhá
            </a>
          </div>
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
                <p className="mt-1 text-sm text-slate-600">Vývojář a IT konzultant</p>
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
              Pomáhám firmám dávat do pořádku interní procesy, workflow a systémy tam,
              kde už e-mail, Excel a ruční dohledávání přestávají stačit.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Neřeším zbytečně velké projekty. Hledám nejkratší cestu k tomu,
              aby firma měla přehled, jasný další krok a méně provozního chaosu.
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
          <SectionEyebrow>To je obvykle ten moment</SectionEyebrow>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Kdy se přehled začne rozpadat
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Ne proto, že by byl Excel sám o sobě špatný. Ale proto, že přes něj už držíte proces,
            který potřebuje jasný stav, odpovědnost a návaznost mezi kroky.
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
      </Container>
    </section>
  );
}

export function IntentSection() {
  return (
    <section className="bg-white">
      <Container className="py-16">
        <div className="max-w-3xl">
          <SectionEyebrow>S čím nejčastěji pomáhám</SectionEyebrow>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Nejčastější situace, které firmy potřebují srovnat
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {intentItems.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 p-5">
              <h3 className="font-heading text-base font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
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
          <SectionEyebrow>Důležitý rozdíl</SectionEyebrow>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Problém není nástroj.
            <span className="block text-[var(--color-accent-deep)]">
              Problém je, že ve firmě chybí sdílený přehled.
            </span>
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Jakmile přes tabulku řídíte stav, odpovědnost, návaznost kroků a spolupráci
              více lidí, přehled se začne rozpadat.
            </p>
            <p>
              Proto většinou nejde o “lepší Excel”. Jde o to správně určit, co má být vidět,
              kdo má další krok a kde se proces zbytečně láme.
            </p>
          </div>
        </div>
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="font-heading text-2xl font-bold tracking-tight text-slate-900">
            Co typicky dostanete
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
            S tímto se na mě firmy obrací nejčastěji
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
            Rychlý a praktický postup
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Cíl není otevřít velký projekt. Cíl je rychle zjistit, kde se přehled láme a co má
            smysl řešit jako první.
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
            Pro firmy, které chtějí rychle udělat pořádek v zakázkách
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
              Nezávazný první krok
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Popište stručně vaši situaci
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Po odeslání se vám ozvu zpět a domluvíme krátký úvodní call. Během něj společně
              vyhodnotíme, kde se přehled láme a co má smysl řešit jako první.
            </p>
            <p className="mt-3 text-base leading-7 text-slate-500">
              Úvodní call je nezávazný a obvykle stačí 20-30 minut.
            </p>
          </div>
          <LeadForm />
          <div className="mt-6 border-t border-slate-200 pt-6 text-sm leading-6 text-slate-500">
            Raději to chcete nejdřív stručně probrat e-mailem? Napište na{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-medium text-slate-900 underline">
              {siteConfig.email}
            </a>
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
          <a href={`mailto:${siteConfig.email}`} className="hover:text-slate-900">
            {siteConfig.email}
          </a>
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
