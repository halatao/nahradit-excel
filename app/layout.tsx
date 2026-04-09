import type { Metadata } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import { AnalyticsScripts, GoogleTagManagerNoScript } from "@/components/analytics";
import { landingConfig, siteConfig } from "@/lib/site-config";
import "./globals.css";

const headingFont = Manrope({
  variable: "--font-heading",
  subsets: ["latin-ext"],
});

const bodyFont = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(landingConfig.siteUrl),
  title: "Přehled v zakázkách bez velkého ERP projektu | nahradit-excel.cz",
  description:
    "Ztrácíte přehled v poptávkách, nabídkách a zakázkách? Pomáhám firmám dát procesům jasný stav, další krok a sdílený přehled bez velkého ERP projektu.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: landingConfig.siteUrl,
    title: "Přehled v zakázkách bez velkého ERP projektu | nahradit-excel.cz",
    description:
      "Pomáhám firmám dát poptávkám, nabídkám a zakázkám jasný stav, další krok a sdílený přehled bez velkého ERP projektu.",
    siteName: landingConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Přehled v zakázkách bez velkého ERP projektu | nahradit-excel.cz",
    description:
      "Pomáhám firmám dát poptávkám, nabídkám a zakázkám jasný stav, další krok a sdílený přehled bez velkého ERP projektu.",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "business",
  creator: siteConfig.displayName,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${headingFont.variable} ${bodyFont.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-[var(--color-cream)] text-[var(--color-ink)] antialiased">
        <GoogleTagManagerNoScript />
        <AnalyticsScripts />
        <div className="flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  );
}
