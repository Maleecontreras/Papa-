"use client"

import { ChevronRight, CircleHelp, HandHelping, Play, Watch } from "lucide-react"
import { SearchBar } from "@/components/search-bar"
import { categories, tutorials, tutorialsByCategory, type Tutorial } from "@/lib/garmin-data"

type Props = {
  onOpenTutorial: (t: Tutorial) => void
  onOpenButtons: () => void
  onOpenGlossary: () => void
  companion: boolean
  onToggleCompanion: (v: boolean) => void
}

export function HomeScreen({ onOpenTutorial, onOpenButtons, onOpenGlossary, companion, onToggleCompanion }: Props) {
  const empezar = tutorials.find((t) => t.id === "empezar-desde-cero")!

  return (
    <div className="mx-auto w-full max-w-2xl px-5 pb-28 pt-8">
      {/* Encabezado */}
      <header className="text-center">
        <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-slate-900">
          <Watch className="size-8 text-white" aria-hidden="true" />
        </div>
        <h1 className="text-balance text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
          ¿Qué querés hacer con tu reloj?
        </h1>
        <p className="mx-auto mt-3 max-w-md text-balance text-lg text-slate-500">
          Elegí una opción y te voy a decir exactamente qué botones tocar.
        </p>
      </header>

      {/* Buscador */}
      <section className="mt-8">
        <SearchBar onOpen={onOpenTutorial} />
      </section>

      {/* No sé qué tocar */}
      <section className="mt-6">
        <button
          onClick={() => onOpenTutorial(empezar)}
          className="flex w-full items-center gap-4 rounded-2xl bg-slate-900 px-5 py-5 text-left text-white shadow-md transition hover:bg-slate-800 active:scale-[0.99]"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-emerald-500">
            <Play className="size-6 fill-white text-white" aria-hidden="true" />
          </span>
          <span className="flex-1">
            <span className="block text-sm font-semibold text-slate-300">No sé qué tocar</span>
            <span className="block text-xl font-bold">Empezar desde cero</span>
          </span>
          <ChevronRight className="size-6 text-slate-400" aria-hidden="true" />
        </button>
      </section>

      {/* Modo acompañame */}
      <section className="mt-4">
        <div className="flex items-center gap-4 rounded-2xl border-2 border-slate-100 bg-white px-5 py-4 shadow-sm">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-2xl" aria-hidden="true">
            <HandHelping className="size-6 text-amber-600" />
          </span>
          <span className="flex-1">
            <span className="block text-lg font-bold text-slate-900">Acompañame paso a paso</span>
            <span className="block text-sm text-slate-500">Te muestro un solo paso por vez. Más tranquilo.</span>
          </span>
          <button
            role="switch"
            aria-checked={companion}
            aria-label="Activar modo acompañame paso a paso"
            onClick={() => onToggleCompanion(!companion)}
            className={`relative h-9 w-16 shrink-0 rounded-full transition-colors ${
              companion ? "bg-emerald-600" : "bg-slate-300"
            }`}
          >
            <span
              className={`absolute top-1 size-7 rounded-full bg-white shadow transition-all ${
                companion ? "left-8" : "left-1"
              }`}
            />
          </button>
        </div>
      </section>

      {/* Categorías */}
      {categories.map((cat) => {
        const items = tutorialsByCategory(cat.id).filter((t) => t.id !== "empezar-desde-cero")
        if (items.length === 0) return null
        return (
          <section key={cat.id} className="mt-10">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-black text-slate-900">
              <span className="text-2xl" aria-hidden="true">
                {cat.icon}
              </span>
              {cat.title}
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {items.map((t) => (
                <button
                  key={t.id}
                  onClick={() => onOpenTutorial(t)}
                  className="flex min-h-28 flex-col items-start gap-2 rounded-2xl border-2 border-slate-100 bg-white p-4 text-left shadow-sm transition hover:border-slate-300 hover:shadow-md active:scale-[0.98]"
                >
                  <span className="text-3xl" aria-hidden="true">
                    {t.icon}
                  </span>
                  <span className="text-lg font-bold leading-tight text-slate-900">{t.title}</span>
                </button>
              ))}
            </div>
          </section>
        )
      })}

      {/* Accesos extra */}
      <section className="mt-10 grid gap-3">
        <button
          onClick={onOpenButtons}
          className="flex items-center gap-4 rounded-2xl border-2 border-slate-100 bg-white px-5 py-5 text-left shadow-sm transition hover:border-slate-300 active:scale-[0.99]"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-2xl" aria-hidden="true">
            <Watch className="size-6 text-blue-700" />
          </span>
          <span className="flex-1">
            <span className="block text-xl font-bold text-slate-900">Los botones del reloj</span>
            <span className="block text-sm text-slate-500">Aprendé para qué sirve cada botón.</span>
          </span>
          <ChevronRight className="size-6 text-slate-400" aria-hidden="true" />
        </button>

        <button
          onClick={onOpenGlossary}
          className="flex items-center gap-4 rounded-2xl border-2 border-slate-100 bg-white px-5 py-5 text-left shadow-sm transition hover:border-slate-300 active:scale-[0.99]"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-violet-100 text-2xl" aria-hidden="true">
            <CircleHelp className="size-6 text-violet-700" />
          </span>
          <span className="flex-1">
            <span className="block text-xl font-bold text-slate-900">¿Qué significa esto?</span>
            <span className="block text-sm text-slate-500">Te explico los números y símbolos del reloj.</span>
          </span>
          <ChevronRight className="size-6 text-slate-400" aria-hidden="true" />
        </button>
      </section>
    </div>
  )
}
