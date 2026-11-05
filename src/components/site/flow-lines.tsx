import { useReducedMotion } from "@/hooks/use-reduced-motion"

type Line = {
  /** Vertical position, fraction of the viewBox height. */
  base: number
  amp: number
  /** Wavelength, fraction of the viewBox width. */
  wave: number
  phase: number
  /** Rise across the width, fraction of the viewBox height. */
  tilt: number
  color: string
  opacity: number
  width: number
}

type Field = { w: number; h: number; lines: Line[] }

const lavanda = "#bda7d5"

const desktop: Field = {
  w: 1440,
  h: 900,
  lines: [
    { base: 0.1, amp: 18, wave: 1.5, phase: 2.2, tilt: 0.08, color: lavanda, opacity: 0.55, width: 1.4 },
    { base: 0.14, amp: 16, wave: 1.5, phase: 2.35, tilt: 0.08, color: lavanda, opacity: 0.3, width: 1 },
  ],
}

const mobile: Field = {
  w: 390,
  h: 844,
  lines: [
    { base: 0.1, amp: 12, wave: 1.5, phase: 2.4, tilt: 0.06, color: lavanda, opacity: 0.75, width: 1.6 },
    { base: 0.13, amp: 11, wave: 1.5, phase: 2.55, tilt: 0.06, color: lavanda, opacity: 0.45, width: 1.1 },
  ],
}

function wavePath({ w, h }: Field, line: Line, shift: number) {
  const steps = 10
  const points = Array.from({ length: steps + 1 }, (_, i) => {
    const x = -0.12 * w + (i / steps) * 1.24 * w
    const t = (x / (line.wave * w)) * Math.PI * 2
    const y =
      line.base * h +
      line.tilt * h * (x / w) +
      line.amp * Math.sin(t + line.phase + shift) +
      line.amp * 0.25 * Math.sin(t * 1.9 + line.phase * 1.6)
    return [x, y] as const
  })

  const round = (n: number) => Math.round(n * 10) / 10
  let d = `M${round(points[0][0])} ${round(points[0][1])}`
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)]
    const p1 = points[i]
    const p2 = points[i + 1]
    const p3 = points[Math.min(points.length - 1, i + 2)]
    const c1x = p1[0] + (p2[0] - p0[0]) / 6
    const c1y = p1[1] + (p2[1] - p0[1]) / 6
    const c2x = p2[0] - (p3[0] - p1[0]) / 6
    const c2y = p2[1] - (p3[1] - p1[1]) / 6
    d += `C${round(c1x)} ${round(c1y)} ${round(c2x)} ${round(c2y)} ${round(p2[0])} ${round(p2[1])}`
  }
  return d
}

const shift = 0.4
const easing = {
  calcMode: "spline",
  keyTimes: "0;0.5;1",
  keySplines: "0.45 0 0.55 1;0.45 0 0.55 1",
  dur: "48s",
  repeatCount: "indefinite",
} as const

function FieldSvg({ field, className }: { field: Field; className: string }) {
  const reduced = useReducedMotion()

  return (
    <svg
      viewBox={`0 0 ${field.w} ${field.h}`}
      preserveAspectRatio="xMidYMid slice"
      overflow="hidden"
      className={className}
      fill="none"
      aria-hidden
    >
      {field.lines.map((line, i) => {
        const rest = wavePath(field, line, 0)
        const drift = wavePath(field, line, shift)
        return (
          <path
            key={i}
            d={rest}
            stroke={line.color}
            strokeOpacity={line.opacity}
            strokeWidth={line.width}
            strokeLinecap="round"
            className="flow-line"
            style={{ animationDelay: `${0.3 + i * 0.25}s` }}
          >
            {!reduced && (
              <animate attributeName="d" values={`${rest};${drift};${rest}`} {...easing} />
            )}
          </path>
        )
      })}
    </svg>
  )
}

/** Light lines drifting across the top of the page. */
export function FlowLines() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden [contain:paint]" aria-hidden>
      <FieldSvg field={mobile} className="absolute inset-0 h-full w-full sm:hidden" />
      <FieldSvg field={desktop} className="absolute inset-0 hidden h-full w-full sm:block" />
    </div>
  )
}
