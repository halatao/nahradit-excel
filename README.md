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
- `app/api/lead/route.ts` jednoduchý placeholder submit endpoint
- `components/landing/sections.tsx` obsahové sekce landing page
- `components/landing/lead-form.tsx` klientský formulář a validace
- `components/analytics.tsx` GTM a GA skripty
- `lib/site-config.ts` kontaktní a business údaje
- `lib/analytics.ts` zapouzdření analytics konfigurace
- `lib/landing-content.ts` textový obsah sekcí

## Kde co změnit

- Kontaktní údaje a právní informace: `lib/site-config.ts`
- GTM a GA ID: `lib/site-config.ts`
- Texty sekcí: `lib/landing-content.ts`
- Odesílání leadů do reálného backendu / CRM: `app/api/lead/route.ts`

## Poznámky

- Formulář teď odesílá data do jednoduché API route a po úspěchu přesměruje na `/dekuji`.
- Implementace analytics je oddělená, takže jde snadno vypnout nebo nahradit.
- Profilová fotka je uložená lokálně v `public/ondrej-halata.jpg`.
