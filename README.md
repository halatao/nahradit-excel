# nahradit-excel-landing

Samostatná výkonová landing page v Next.js, TypeScriptu a Tailwind CSS pro lead generation z Google Ads.

## Skripty

```bash
npm install
npm run dev
npm run build
npm run lint
```

Lokálně poběží na `http://localhost:3000`.

## Struktura

- `app/page.tsx` hlavní landing page
- `app/dekuji/page.tsx` děkovací stránka
- `app/api/lead/route.ts` nevyužitý placeholder submit endpoint
- `components/landing/sections.tsx` obsahové sekce landing page
- `components/landing/lead-form.tsx` klientský formulář a validace
- `components/analytics.tsx` GTM skript
- `components/analytics/tracked-link.tsx` jednoduché click tracking komponenty
- `components/analytics/thank-you-tracker.tsx` thank-you page event do `dataLayer`
- `lib/site-config.ts` kontaktní a business údaje
- `lib/analytics.ts` zapouzdření analytics konfigurace
- `lib/data-layer.ts` helper pro `dataLayer.push(...)`
- `lib/landing-content.ts` textový obsah sekcí

## Kde co změnit

- Kontaktní údaje a právní informace: `lib/site-config.ts`
- GTM a GA ID: `lib/site-config.ts`
- Texty sekcí: `lib/landing-content.ts`
- Odesílání leadů do reálného backendu / CRM: `app/api/lead/route.ts`

## Analytics

- Landing page používá jednu čistou cestu měření přes Google Tag Manager v `components/analytics.tsx`.
- Přímé načítání `gtag.js` se nepoužívá, aby nehrozilo duplicitní měření vedle GTM.
- Hodnota `gaMeasurementId` z `lib/site-config.ts` slouží jako referenční údaj pro nastavení GA4 tagu uvnitř GTM, ne pro přímé načítání v aplikaci.
- Připravené základní eventy do `dataLayer`:
  - klik na CTA v headeru
  - klik na hlavní CTA v hero
  - klik na e-mailový odkaz na landing page
  - návštěva děkovací stránky jako `lead_thank_you_view`
- Doporučená hlavní konverze v GA4 i Google Ads je návštěva `/dekuji`.
- Pro ověření leadu je nejjednodušší nastavit conversion podle page path `/dekuji`; vlastní submit event není nutný.

## Ověření GTM a GA4

- Ověření, že GTM běží: otevřete web, zkontrolujte v DevTools přítomnost požadavku na `googletagmanager.com/gtm.js` a ověřte, že `window.dataLayer` existuje.
- Ověření, že GA4 tag je publikovaný v GTM: použijte GTM Preview a potvrďte, že se po načtení stránky odpálí GA4 Configuration nebo Google tag pro měřicí ID `G-LT3TYJS6PZ`.
- V GTM-only setupu nemusí být `window.gtag` dostupné v globálním scope. Samotná absence `window.gtag` tedy neznamená chybnou implementaci.
- Správné end-to-end ověření je přes GTM Preview a současně přes GA4 Realtime, kde se musí projevit návštěva i očekávané eventy.

## Poznámky

- Formulář teď používá Formspree a po úspěchu přesměruje na `/dekuji`.
- `app/api/lead/route.ts` je momentálně nevyužitá a může se později smazat, pokud ji nebudete chtít držet jako rezervu.
- Implementace analytics je oddělená, takže jde snadno vypnout nebo nahradit.
- Profilová fotka je uložená lokálně v `public/ondrej-halata.jpg`.
