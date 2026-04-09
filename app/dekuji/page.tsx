import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/sections";
import { landingConfig, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Děkuji za zprávu | nahradit-excel.cz",
  description: "Potvrzení odeslání formuláře pro úvodní call.",
  alternates: {
    canonical: "/dekuji",
  },
};

export default function ThankYouPage() {
  return (
    <>
      <Header compact />
      <main className="bg-[var(--color-night)] px-4 py-16 text-white sm:px-6 lg:px-8">
        <section className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.35)] backdrop-blur sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Odesláno
            </p>
            <h1 className="mt-4 max-w-2xl font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Děkuji, ozvu se vám zpět.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Zpráva dorazila a navážu co nejdříve. Pokud chcete celý proces urychlit,
              můžete si rovnou vybrat termín krátkého úvodního callu.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Kdybyste chtěli něco doplnit hned, napište na{" "}
              <a
                className="font-semibold text-white underline decoration-white/40 underline-offset-4"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
              .
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[var(--color-accent)] px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-[var(--color-accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
              >
                Zpět na landing page
              </Link>
              <a
                href={siteConfig.calendly}
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                target="_blank"
                rel="noreferrer"
              >
                Otevřít Calendly v novém okně
              </a>
            </div>
            <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-300">
              {landingConfig.name} · {siteConfig.legalName} · {siteConfig.phoneDisplay}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.35)]">
            <div className="border-b border-slate-200 px-6 py-5 text-slate-900 sm:px-8">
              <h2 className="font-heading text-2xl font-bold tracking-tight">
                Vyberte si termín hovoru
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Pokud vám to dává smysl, rezervujte si rovnou 30 minut v Calendly.
              </p>
            </div>
            <iframe
              src={`${siteConfig.calendly}?hide_gdpr_banner=1`}
              title="Calendly rezervace úvodního callu"
              className="min-h-[760px] w-full bg-white"
            />
          </div>
        </section>
      </main>
    </>
  );
}
