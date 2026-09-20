"use client"

import { useEffect, useState } from "react"
import { ArrowLeft, ArrowRight, Check, CircleAlert, Info, RotateCcw, TriangleAlert } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { GarminWatch } from "@/components/garmin-watch"
import { categories, type Tutorial } from "@/lib/garmin-data"

type Props = {
  tutorial: Tutorial
  companion: boolean
  onHome: () => void
  onBack: () => void
}

export function TutorialView({ tutorial, companion, onHome, onBack }: Props) {
  // index: 0..steps.length-1 son los pasos, steps.length es la pantalla de "terminaste"
  const [index, setIndex] = useState(0)
  const [showOops, setShowOops] = useState(false)
  const [showNotFound, setShowNotFound] = useState(false)

  useEffect(() => {
    setIndex(0)
    setShowOops(false)
    setShowNotFound(false)
    // Llevar al usuario al inicio de la pantalla al cambiar de tutorial
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [tutorial.id])

  useEffect(() => {
    setShowOops(false)
    setShowNotFound(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [index])

  const total = tutorial.steps.length
  const isEnding = index >= total
  const step = isEnding ? null : tutorial.steps[index]
  const cat = categories.find((c) => c.id === tutorial.category)

  const next = () => setIndex((i) => Math.min(i + 1, total))
  const prev = () => setIndex((i) => Math.max(i - 1, 0))

  return (
    <div className="mx-auto w-full max-w-2xl px-5 pb-28 pt-5">
      <Breadcrumb
        items={[
          { label: "Inicio", onClick: onHome },
          { label: cat?.title ?? "", onClick: onHome },
          { label: tutorial.title },
        ]}
      />

      {/* Título */}
      <div className="mt-4 flex items-center gap-3">
        <span className="text-4xl" aria-hidden="true">
          {tutorial.icon}
        </span>
        <h1 className="text-2xl font-black text-slate-900">{tutorial.title}</h1>
      </div>

      {/* Barra de progreso por puntitos */}
      {!isEnding && (
        <div className="mt-5">
          <div className="flex items-center justify-center gap-2" aria-hidden="true">
            {tutorial.steps.map((_, i) => (
              <span
                key={i}
                className={`h-3 rounded-full transition-all ${
                  i < index ? "w-3 bg-emerald-500" : i === index ? "w-8 bg-slate-900" : "w-3 bg-slate-200"
                }`}
              />
            ))}
          </div>
          <p className="mt-2 text-center text-base font-semibold text-slate-500">
            Paso {index + 1} de {total}
          </p>
        </div>
      )}

      {/* Intro (solo en el primer paso) */}
      {!isEnding && index === 0 && tutorial.intro && (
        <p className="mt-5 rounded-2xl bg-slate-50 px-4 py-3 text-center text-lg font-semibold text-slate-700">
          {tutorial.intro}
        </p>
      )}

      {/* Paso actual */}
      {step && (
        <div key={index} className="gw-fade-up mt-6">
          <div className="flex flex-col items-center text-center">
            <div className="flex size-12 items-center justify-center rounded-full bg-slate-900 text-2xl font-black text-white">
              {index + 1}
            </div>
            <h2 className="mt-4 text-balance text-3xl font-black leading-tight text-slate-900">{step.short}</h2>
            <p className="mt-3 max-w-md text-balance text-xl leading-relaxed text-slate-600">{step.detail}</p>

            {step.longPress && (
              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-base font-bold text-amber-800">
                <Info className="size-5" aria-hidden="true" />
                Dejá el botón apretado unos segundos
              </p>
            )}

            {/* Reloj */}
            <div className="mt-6">
              <GarminWatch highlight={step.highlight} longPress={step.longPress} size={companion ? 300 : 260} />
            </div>

            {step.hint && (
              <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-base font-medium text-slate-600">
                <CircleAlert className="size-5 text-slate-400" aria-hidden="true" />
                {step.hint}
              </p>
            )}
          </div>

          {/* Botón principal */}
          <button
            onClick={next}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-5 text-xl font-black text-white shadow-md transition hover:bg-emerald-700 active:scale-[0.99]"
          >
            {companion ? (index === total - 1 ? "Ya está, terminé" : "Sí, lo hice") : "Siguiente"}
            <ArrowRight className="size-6" aria-hidden="true" />
          </button>

          {/* Ayuda */}
          <div className="mt-5 grid gap-3">
            <button
              onClick={() => {
                setShowOops((v) => !v)
                setShowNotFound(false)
              }}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-base font-bold text-slate-600 hover:bg-slate-50"
            >
              <TriangleAlert className="size-5 text-amber-500" aria-hidden="true" />
              Me equivoqué
            </button>
            {showOops && (
              <div className="gw-fade-up rounded-2xl bg-amber-50 p-5 text-center">
                <p className="text-xl font-black text-slate-900">Tranquilo. No pasa nada.</p>
                <p className="mt-2 text-lg text-slate-600">
                  Apretá el botón <strong>BACK</strong> (abajo a la derecha) para volver atrás. No se borra ni se rompe
                  nada. Después seguimos desde donde estabas.
                </p>
                <div className="mt-4 flex justify-center">
                  <GarminWatch highlight="BACK" size={200} showCallout={false} />
                </div>
              </div>
            )}

            <button
              onClick={() => {
                setShowNotFound((v) => !v)
                setShowOops(false)
              }}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-base font-bold text-slate-600 hover:bg-slate-50"
            >
              <CircleAlert className="size-5 text-blue-500" aria-hidden="true" />
              No encuentro esta opción
            </button>
            {showNotFound && (
              <div className="gw-fade-up rounded-2xl bg-blue-50 p-5">
                <p className="text-center text-xl font-black text-slate-900">Vamos a probar de nuevo</p>
                <ul className="mx-auto mt-3 max-w-md space-y-2 text-lg text-slate-600">
                  <li>• Volvé al principio apretando <strong>BACK</strong> varias veces hasta ver la hora.</li>
                  <li>• Apretá los botones <strong>UP</strong> y <strong>DOWN</strong> despacio, de a uno.</li>
                  <li>• La opción puede tener un nombre parecido. Leé con calma la lista.</li>
                  {tutorial.note && <li>• {tutorial.note}</li>}
                </ul>
                <button
                  onClick={() => setIndex(0)}
                  className="mx-auto mt-4 flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-base font-bold text-white hover:bg-slate-800"
                >
                  <RotateCcw className="size-5" aria-hidden="true" />
                  Empezar de nuevo
                </button>
              </div>
            )}
          </div>

          {/* Aclaración de modelo */}
          {tutorial.note && !showNotFound && (
            <p className="mt-5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-500">
              <strong className="text-slate-700">Ojo:</strong> {tutorial.note}
            </p>
          )}
        </div>
      )}

      {/* Pantalla de terminado */}
      {isEnding && (
        <div className="gw-fade-up mt-8 text-center">
          <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-emerald-100">
            <Check className="size-11 text-emerald-600" aria-hidden="true" />
          </div>
          <h2 className="mt-5 text-3xl font-black text-slate-900">¡Perfecto! Lo lograste</h2>
          {tutorial.ending && (
            <p className="mx-auto mt-4 max-w-md text-balance rounded-2xl bg-slate-50 px-5 py-4 text-xl leading-relaxed text-slate-700">
              {tutorial.ending}
            </p>
          )}

          <div className="mt-8 grid gap-3">
            <button
              onClick={() => setIndex(0)}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-6 py-4 text-lg font-bold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="size-5" aria-hidden="true" />
              Repetir desde el principio
            </button>
            <button
              onClick={onHome}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-5 text-xl font-black text-white hover:bg-slate-800"
            >
              Volver al inicio
            </button>
          </div>
        </div>
      )}

      {/* Navegación inferior fija */}
      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={index === 0 ? onBack : prev}
          className="flex items-center gap-2 rounded-xl px-4 py-3 text-lg font-bold text-slate-600 hover:bg-slate-100"
        >
          <ArrowLeft className="size-5" aria-hidden="true" />
          Volver
        </button>
      </div>
    </div>
  )
}
