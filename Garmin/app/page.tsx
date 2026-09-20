"use client"

import { useEffect, useState } from "react"
import { CircleHelp } from "lucide-react"
import { HomeScreen } from "@/components/home-screen"
import { TutorialView } from "@/components/tutorial-view"
import { ButtonsGuide } from "@/components/buttons-guide"
import { GlossaryView } from "@/components/glossary-view"
import { getTutorial, type Tutorial } from "@/lib/garmin-data"

type View =
  | { name: "home" }
  | { name: "tutorial"; id: string }
  | { name: "buttons" }
  | { name: "glossary" }

const COMPANION_KEY = "mi-garmin-companion"

export default function Page() {
  const [view, setView] = useState<View>({ name: "home" })
  const [companion, setCompanion] = useState(false)

  // Cargar preferencia guardada
  useEffect(() => {
    try {
      const saved = localStorage.getItem(COMPANION_KEY)
      if (saved === "1") setCompanion(true)
    } catch {
      // ignorar
    }
  }, [])

  const toggleCompanion = (v: boolean) => {
    setCompanion(v)
    try {
      localStorage.setItem(COMPANION_KEY, v ? "1" : "0")
    } catch {
      // ignorar
    }
  }

  const openTutorial = (t: Tutorial) => setView({ name: "tutorial", id: t.id })
  const goHome = () => setView({ name: "home" })

  const activeTutorial = view.name === "tutorial" ? getTutorial(view.id) : undefined

  return (
    <main className="min-h-dvh bg-slate-50">
      {view.name === "home" && (
        <HomeScreen
          onOpenTutorial={openTutorial}
          onOpenButtons={() => setView({ name: "buttons" })}
          onOpenGlossary={() => setView({ name: "glossary" })}
          companion={companion}
          onToggleCompanion={toggleCompanion}
        />
      )}

      {view.name === "tutorial" && activeTutorial && (
        <TutorialView tutorial={activeTutorial} companion={companion} onHome={goHome} onBack={goHome} />
      )}

      {view.name === "buttons" && <ButtonsGuide onHome={goHome} />}

      {view.name === "glossary" && <GlossaryView onHome={goHome} />}

      {/* Botón permanente de ayuda: ¿Qué significa esto? */}
      {view.name !== "glossary" && (
        <button
          onClick={() => setView({ name: "glossary" })}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-slate-900 px-5 py-4 text-base font-black text-white shadow-xl transition hover:bg-slate-800 active:scale-95"
          aria-label="¿Qué significa esto? Abrir el glosario del reloj"
        >
          <CircleHelp className="size-6 text-emerald-400" aria-hidden="true" />
          <span className="hidden sm:inline">¿Qué significa esto?</span>
        </button>
      )}
    </main>
  )
}
