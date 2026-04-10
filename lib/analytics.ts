import { siteConfig } from "@/lib/site-config";

export const analyticsConfig = {
  gtm: {
    containerId: siteConfig.gtmId,
    dataLayerName: "dataLayer",
    enabled: Boolean(siteConfig.gtmId),
  },
  ga4: {
    measurementIdForGtm: siteConfig.gaMeasurementId,
    expectedInGtm: Boolean(siteConfig.gaMeasurementId),
    directGtagEnabled: false,
  },
} as const;
