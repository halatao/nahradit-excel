import Script from "next/script";
import { analyticsConfig } from "@/lib/analytics";

export function AnalyticsScripts() {
  if (!analyticsConfig.gtm.enabled) {
    return null;
  }

  return (
    <Script id="gtm-script" strategy="afterInteractive">
      {`
        // GTM-first setup: the app only loads the GTM container.
        // GA4 is expected to be configured and published inside GTM.
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','${analyticsConfig.gtm.dataLayerName}','${analyticsConfig.gtm.containerId}');
      `}
    </Script>
  );
}

export function GoogleTagManagerNoScript() {
  if (!analyticsConfig.gtm.enabled) {
    return null;
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${analyticsConfig.gtm.containerId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
