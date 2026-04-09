import { siteConfig } from "@/lib/site-config";

export const analyticsConfig = {
  gtmId: siteConfig.gtmId,
  gaMeasurementId: siteConfig.gaMeasurementId,
  gtmEnabled: Boolean(siteConfig.gtmId),
} as const;
