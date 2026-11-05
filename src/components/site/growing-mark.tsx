import type { CSSProperties } from "react"

import { asset } from "@/lib/asset"
import { cn } from "@/lib/utils"

/** Box in % of the mark's frame (logo space 360,140 → 1054,734). */
type Piece = { left: number; top: number; width: number; height: number }

const ground: Piece = { left: 0.773, top: 84.526, width: 98.374, height: 14.384 }
const stem: Piece = { left: 47.525, top: 46.346, width: 13.319, height: 44.961 }
const leafLeft: Piece = { left: 8.309, top: 11.415, width: 45.284, height: 37.006 }
const leafRight: Piece = { left: 53.593, top: 0.866, width: 45.432, height: 47.555 }
const circle: Piece = { left: 47.563, top: 4.567, width: 13.068, height: 15.268 }

const box = (p: Piece, origin?: string): CSSProperties => ({
  left: `${p.left}%`,
  top: `${p.top}%`,
  width: `${p.width}%`,
  height: `${p.height}%`,
  transformOrigin: origin,
})

/**
 * The mark growing from its root: the ground opens, the stem rises,
 * the leaves unfold from the joint and the light arrives last.
 */
export function GrowingMark({ className }: { className?: string }) {
  return (
    <div className={cn("grow-mark aspect-[694/594]", className)} aria-hidden>
      <img src={asset("grow/ground.png")} alt="" className="grow-ground absolute" style={box(ground)} />
      <div className="grow-sway absolute inset-0">
        <img src={asset("grow/stem.png")} alt="" className="grow-stem absolute" style={box(stem)} />
        <img
          src={asset("grow/leaf-left.png")}
          alt=""
          className="grow-leaf grow-leaf-left absolute"
          style={box(leafLeft, "99% 98%")}
        />
        <img
          src={asset("grow/leaf-right.png")}
          alt=""
          className="grow-leaf grow-leaf-right absolute"
          style={box(leafRight, "-1% 98.5%")}
        />
        <span className="grow-light absolute rounded-full bg-lavanda" style={box(circle)} />
      </div>
    </div>
  )
}
