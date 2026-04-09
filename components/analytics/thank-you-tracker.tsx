"use client";

import { useEffect } from "react";
import { pushDataLayerEvent } from "@/lib/data-layer";

export function ThankYouTracker() {
  useEffect(() => {
    pushDataLayerEvent({
      event: "lead_thank_you_view",
      page_type: "thank_you",
      conversion_path: "/dekuji",
    });
  }, []);

  return null;
}
