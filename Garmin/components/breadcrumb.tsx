"use client"

import { ChevronRight, Home } from "lucide-react"

export type Crumb = { label: string; onClick?: () => void }

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Dónde estás" className="flex flex-wrap items-center gap-1 text-base text-slate-500">
      {items.map((item, i) => {
        const isLast = i === items.length - 1
        return (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="size-4 shrink-0 text-slate-400" aria-hidden="true" />}
            {item.onClick && !isLast ? (
              <button
                onClick={item.onClick}
                className="flex items-center gap-1 rounded-md px-1 py-0.5 font-semibold text-slate-600 underline-offset-2 hover:text-slate-900 hover:underline"
              >
                {i === 0 && <Home className="size-4" aria-hidden="true" />}
                {item.label}
              </button>
            ) : (
              <span className={`flex items-center gap-1 px-1 py-0.5 ${isLast ? "font-bold text-slate-900" : ""}`}>
                {i === 0 && <Home className="size-4" aria-hidden="true" />}
                {item.label}
              </span>
            )}
          </span>
        )
      })}
    </nav>
  )
}
