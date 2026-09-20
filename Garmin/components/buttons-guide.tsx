"use client"

import { useState } from "react"
import { Breadcrumb } from "@/components/breadcrumb"
import { GarminWatch } from "@/components/garmin-watch"
import { buttonsInfo, type ButtonId } from "@/lib/garmin-data"

export function ButtonsGuide({ onHome }: { onHome: () => void }) {
  const [selected, setSelected] = useState<ButtonId>("GPS")
  const active = buttonsInfo.find((b) => b.id === selected)!

  return (
    <div className="mx-auto w-full max-w-2xl px-5 pb-28 pt-5">
      <Breadcrumb items={[{ label: "Inicio", onClick: onHome }, { label: "Los botones" }]} />

      <header className="mt-4 text-center">
        <h1 className="text-3xl font-black text-slate-900">Los botones de tu reloj</h1>
        <p className="mx-auto mt-2 max-w-md text-lg text-slate-500">
          Tocá un botón del reloj o de la lista para saber para qué sirve.
        </p>
      </header>

      {/* Reloj interactivo */}
      <div className="mt-6 flex justify-center">
        <GarminWatch
          highlight={selected}
          size={280}
          showCallout={false}
          interactive
          onButtonClick={(id) => setSelected(id)}
        />
      </div>

      {/* Explicación del botón elegido */}
      <div className="gw-fade-up mt-2 rounded-2xl bg-slate-900 p-6 text-center text-white">
        <span className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-1 text-lg font-black">
          {active.label}
        </span>
        <p className="mt-4 text-xl font-bold">{active.what}</p>
        <p className="mt-2 text-lg text-slate-300">{active.more}</p>
      </div>

      {/* Lista de todos los botones */}
      <div className="mt-6 grid gap-3">
        {buttonsInfo.map((b) => (
          <button
            key={b.id}
            onClick={() => setSelected(b.id)}
            aria-pressed={selected === b.id}
            className={`flex items-center gap-4 rounded-2xl border-2 px-5 py-4 text-left transition ${
              selected === b.id
                ? "border-slate-900 bg-white shadow-md"
                : "border-slate-100 bg-white hover:border-slate-300"
            }`}
          >
            <span
              className={`flex min-w-20 shrink-0 items-center justify-center rounded-xl px-3 py-2 text-base font-black ${
                selected === b.id ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-700"
              }`}
            >
              {b.label}
            </span>
            <span className="text-lg font-semibold text-slate-700">{b.what}</span>
          </button>
        ))}
      </div>

      <p className="mt-6 rounded-xl bg-slate-50 px-4 py-3 text-center text-base text-slate-500">
        Los botones <strong>UP</strong>, <strong>DOWN</strong> y <strong>CTRL</strong> están del lado izquierdo.{" "}
        <strong>GPS</strong> y <strong>BACK</strong> del lado derecho.
      </p>
    </div>
  )
}
