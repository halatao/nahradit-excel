"use client";

import Link from "next/link";
import { pushDataLayerEvent } from "@/lib/data-layer";

type TrackedLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  analyticsEvent: string;
  analyticsLabel: string;
};

export function TrackedAnchor({
  href,
  children,
  className,
  target,
  rel,
  analyticsEvent,
  analyticsLabel,
}: TrackedLinkProps) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={() =>
        pushDataLayerEvent({
          event: analyticsEvent,
          link_text: analyticsLabel,
          link_url: href,
        })
      }
    >
      {children}
    </a>
  );
}

type TrackedNextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  analyticsEvent: string;
  analyticsLabel: string;
};

export function TrackedLink({
  href,
  children,
  className,
  analyticsEvent,
  analyticsLabel,
}: TrackedNextLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() =>
        pushDataLayerEvent({
          event: analyticsEvent,
          link_text: analyticsLabel,
          link_url: href,
        })
      }
    >
      {children}
    </Link>
  );
}
