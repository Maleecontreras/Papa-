"use client"

import { useMemo, useState } from "react"
import { Search, X } from "lucide-react"
import { searchTutorials, type Tutorial } from "@/lib/garmin-data"

const EXAMPLES = [
  "Quiero medir cuánto camino",
  "Quiero poner una alarma",
  "Quiero ver mis pulsaciones",
  "Quiero saber cuánta batería tengo",
]

export function SearchBar({ onOpen }: { onOpen: (t: Tutorial) => void }) {
  const [query, setQuery] = useState("")
  const results = useMemo(() => (query.trim().length > 1 ? searchTutorials(query) : []), [query])

  return (
    <div className="w-full">
      <label htmlFor="buscador" className="sr-only">
        ¿Qué querés hacer?
      </label>
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 size-6 -translate-y-1/2 text-slate-400" aria-hidden="true" />
        <input
          id="buscador"
          type="text"
          inputMode="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="¿Qué querés hacer?"
          className="w-full rounded-2xl border-2 border-slate-200 bg-white py-4 pl-13 pr-12 text-lg font-semibold text-slate-900 shadow-sm outline-none placeholder:font-normal placeholder:text-slate-400 focus:border-slate-900"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            aria-label="Borrar búsqueda"
            className="absolute right-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          >
            <X className="size-5" />
          </button>
        )}
      </div>

      {query.trim().length > 1 ? (
        <div className="mt-3 overflow-hidden rounded-2xl border-2 border-slate-100 bg-white shadow-sm">
          {results.length > 0 ? (
            <ul>
              {results.map((t) => (
                <li key={t.id}>
                  <button
                    onClick={() => onOpen(t)}
                    className="flex w-full items-center gap-3 border-b border-slate-100 px-4 py-4 text-left last:border-b-0 hover:bg-slate-50"
                  >
                    <span className="text-2xl" aria-hidden="true">
                      {t.icon}
                    </span>
                    <span>
                      <span className="block text-lg font-bold text-slate-900">{t.title}</span>
                      <span className="block text-sm text-slate-500">{t.summary}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-6 text-center">
              <p className="text-lg font-semibold text-slate-700">No encontré eso.</p>
              <p className="mt-1 text-base text-slate-500">Probá con otras palabras, como "caminar" o "alarma".</p>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-3 flex flex-wrap gap-2">
          {EXAMPLES.map((ex) => (
            <button
              key={ex}
              onClick={() => setQuery(ex)}
              className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 hover:border-slate-300 hover:bg-slate-50"
            >
              {ex}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
