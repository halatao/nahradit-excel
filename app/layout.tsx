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
  title: "Nahradit Excel interním systémem na míru | nahradit-excel.cz",
  description:
    "Excel už nestačí na poptávky, nabídky a zakázky? Ondřej Halata navrhne a vyvine interní systém na míru, workflow nebo sdílený přehled bez velkého ERP projektu.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: landingConfig.siteUrl,
    title: "Nahradit Excel interním systémem na míru | nahradit-excel.cz",
    description:
      "Pomáhám firmám nahradit přerostlý Excel jednoduchým interním systémem, workflow aplikací nebo sdíleným přehledem pro poptávky, nabídky a zakázky.",
    siteName: landingConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nahradit Excel interním systémem na míru | nahradit-excel.cz",
    description:
      "Pomáhám firmám nahradit přerostlý Excel jednoduchým interním systémem, workflow aplikací nebo sdíleným přehledem pro poptávky, nabídky a zakázky.",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "business",
  creator: siteConfig.displayName,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.legalName,
  url: siteConfig.siteUrl,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  brand: {
    "@type": "Brand",
    name: landingConfig.name,
    url: landingConfig.siteUrl,
  },
  logo: `${landingConfig.siteUrl}/favicon.png`,
} as const;

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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full bg-[var(--color-cream)] text-[var(--color-ink)] antialiased">
        <GoogleTagManagerNoScript />
        <AnalyticsScripts />
        <div className="flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  );
}
