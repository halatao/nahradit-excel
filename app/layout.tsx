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
  title: "Evidence zakázek bez Excelu | Interní systém na míru",
  description:
    "Interní systém na míru pro firmy, které chtějí spravovat poptávky, nabídky, realizace a zakázky bez chaosu v Excelu.",
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
    title: "Evidence zakázek bez Excelu | Interní systém na míru",
    description:
      "Interní systém na míru místo Excelu pro správu poptávek, nabídek, realizací a stavů zakázek.",
    siteName: landingConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Evidence zakázek bez Excelu | Interní systém na míru",
    description:
      "Interní systém na míru místo Excelu pro správu poptávek, nabídek, realizací a stavů zakázek.",
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
