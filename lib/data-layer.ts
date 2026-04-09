export type DataLayerEvent = {
  event: string;
  [key: string]: string | number | boolean | undefined;
};

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

export function pushDataLayerEvent(event: DataLayerEvent) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}
