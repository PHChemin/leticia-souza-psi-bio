import type { ComponentProps, ReactNode } from "react"

import { WhatsAppIcon } from "@/components/site/link-icons"
import { links } from "@/lib/links"
import { cn } from "@/lib/utils"

type WhatsAppCtaProps = Omit<ComponentProps<"a">, "href"> & {
  href?: string
  label?: string
  size?: "md" | "lg"
  icon?: ReactNode
  tone?: "oliva" | "lavanda"
}

/** Primary contact link. Real anchor so it works without JavaScript. */
export function WhatsAppCta({
  href = links.whatsapp,
  label = "WhatsApp",
  size = "lg",
  icon,
  tone = "oliva",
  className,
  ...props
}: WhatsAppCtaProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "wave-btn group relative inline-flex max-w-full items-center justify-center gap-2.5 rounded-full font-medium",
        tone === "lavanda" ? "wave-btn-lavanda border border-lavanda-tinta/50" : "wave-btn-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ameixa focus-visible:ring-offset-2 focus-visible:ring-offset-neve",
        size === "lg" ? "min-h-14 px-7 py-3 text-base" : "min-h-11 px-4 text-sm",
        className,
      )}
      {...props}
    >
      <span className="relative z-10 inline-flex min-w-0 items-center gap-2.5">
        <span className="shrink-0 [&>svg]:size-[1.05rem]">
          {icon ?? <WhatsAppIcon />}
        </span>
        <span className="truncate tracking-wide">{label}</span>
        <span className="sr-only"> (abre em nova aba)</span>
      </span>
    </a>
  )
}
