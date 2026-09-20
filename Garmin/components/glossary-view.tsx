"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { glossary, type GlossaryItem } from "@/lib/garmin-data"

export function GlossaryView({ onHome }: { onHome: () => void }) {
  const [selected, setSelected] = useState<GlossaryItem | null>(null)

  return (
    <div className="mx-auto w-full max-w-2xl px-5 pb-28 pt-5">
      <Breadcrumb items={[{ label: "Inicio", onClick: onHome }, { label: "¿Qué significa esto?" }]} />

      <header className="mt-4 text-center">
        <h1 className="text-3xl font-black text-slate-900">¿Qué significa esto?</h1>
        <p className="mx-auto mt-2 max-w-md text-lg text-slate-500">
          Tocá lo que ves en tu reloj y te explico qué quiere decir.
        </p>
      </header>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {glossary.map((item) => (
          <button
            key={item.label}
            onClick={() => setSelected(item)}
            className="flex min-h-24 flex-col items-center justify-center gap-1 rounded-2xl border-2 border-slate-100 bg-white p-4 text-center shadow-sm transition hover:border-slate-300 hover:shadow-md active:scale-[0.98]"
          >
            <span className="text-3xl" aria-hidden="true">
              {item.icon}
            </span>
            <span className="text-lg font-bold text-slate-900">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Explicación en ventana emergente */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label={`Qué significa ${selected.label}`}
          onClick={() => setSelected(null)}
        >
          <div
            className="gw-fade-up w-full max-w-md rounded-3xl bg-white p-7 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Cerrar"
              className="ml-auto flex size-11 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
            >
              <X className="size-6" />
            </button>
            <div className="text-6xl" aria-hidden="true">
              {selected.icon}
            </div>
            <p className="mt-3 text-2xl font-black text-slate-900">{selected.label}</p>
            <p className="mt-3 text-xl leading-relaxed text-slate-600">{selected.meaning}</p>
            <button
              onClick={() => setSelected(null)}
              className="mt-6 w-full rounded-2xl bg-slate-900 px-6 py-4 text-lg font-black text-white hover:bg-slate-800"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
