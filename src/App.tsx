import type { CSSProperties } from "react"

import { FlowLines } from "@/components/site/flow-lines"
import { GrowingMark } from "@/components/site/growing-mark"
import { InstagramIcon, LattesIcon } from "@/components/site/link-icons"
import { LinkButton } from "@/components/site/link-button"
import { WhatsAppCta } from "@/components/site/whatsapp-cta"
import { asset } from "@/lib/asset"
import { links } from "@/lib/links"

const otherLinks = [
  { href: links.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: links.lattes, label: "Currículo Lattes", Icon: LattesIcon },
] as const

const step = (n: number) => ({ "--step": n }) as CSSProperties

export default function App() {
  const year = new Date().getFullYear()

  return (
    <div className="garden-light relative isolate text-ameixa">
      <FlowLines />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden [contain:paint]" aria-hidden>
        <GrowingMark className="bottom-[7%] -left-[12%] w-[124%] sm:left-auto sm:-right-[6%] sm:bottom-[9%] sm:h-[70vh] sm:w-auto" />
      </div>

      <div className="mx-auto flex min-h-svh w-full max-w-xl flex-col items-center justify-center px-6 py-6 text-center sm:py-10">
        <main className="flex w-full flex-col items-center">
        <div className="mark-arrive relative grid h-24 w-36 place-items-center sm:h-32 sm:w-48">
          <img
            src={asset("logo-mark.png")}
            alt=""
            width={640}
            height={640}
            className="relative h-34 w-34 max-w-none sm:h-44 sm:w-44"
          />
        </div>

        <h1
          className="rise mt-7 font-display sm:mt-9 text-[clamp(2.75rem,12.4vw,4.75rem)] leading-[0.95] font-medium tracking-[-0.025em] whitespace-nowrap"
          style={step(1)}
        >
          Letícia Souza
        </h1>
        <p
          className="rise mt-4 text-[0.68rem] font-semibold text-oliva-funda tracking-[0.42em] uppercase sm:mt-5 sm:text-[0.8rem]"
          style={step(2)}
        >
          Psicóloga clínica
        </p>

        <p
          className="rise mt-7 max-w-[19rem] font-display text-[1.3rem] leading-snug italic sm:max-w-[22rem] sm:text-2xl"
          style={step(3)}
        >
          Atendimentos online para adolescentes, adultos e idosos.
        </p>

        <nav
          id="contato"
          aria-labelledby="contato-titulo"
          className="mt-8 flex w-full max-w-xs flex-col gap-3"
        >
          <h2
            id="contato-titulo"
            className="rise mb-2 flex items-center justify-center gap-3 font-sans text-[0.7rem] font-semibold tracking-[0.3em] uppercase"
            style={step(4)}
          >
            <span className="wave-rule" aria-hidden />
            Entre em contato!
            <span className="wave-rule wave-rule-flip" aria-hidden />
          </h2>

          <div className="rise" style={step(5)}>
            <WhatsAppCta className="w-full" />
          </div>
          {otherLinks.map((link, i) => (
            <LinkButton
              key={link.href}
              href={link.href}
              icon={<link.Icon />}
              className="rise"
              style={step(6 + i)}
            >
              {link.label}
            </LinkButton>
          ))}
        </nav>
        </main>

        <footer
          className="rise mt-8 text-xs leading-relaxed tracking-wide text-ameixa"
          style={step(8)}
        >
          <p>Letícia Aparecida Souza Tomaz · CRP 06/229667 · {year}</p>
        </footer>
      </div>
    </div>
  )
}
