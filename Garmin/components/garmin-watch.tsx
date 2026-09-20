"use client"

import type { ButtonId } from "@/lib/garmin-data"

type Props = {
  highlight?: ButtonId
  longPress?: boolean
  size?: number
  // Muestra la etiqueta del botón resaltado como un cartelito
  showCallout?: boolean
  onButtonClick?: (id: ButtonId) => void
  interactive?: boolean
}

// Posición de cada botón sobre el cuerpo del reloj (coordenadas del viewBox 0..300).
const BUTTONS: Record<
  ButtonId,
  { cx: number; cy: number; side: "left" | "right"; label: string }
> = {
  CTRL: { cx: 46, cy: 96, side: "left", label: "CTRL" },
  UP: { cx: 40, cy: 150, side: "left", label: "UP" },
  DOWN: { cx: 46, cy: 204, side: "left", label: "DOWN" },
  GPS: { cx: 254, cy: 110, side: "right", label: "GPS" },
  BACK: { cx: 254, cy: 190, side: "right", label: "BACK" },
}

export function GarminWatch({
  highlight,
  longPress = false,
  size = 260,
  showCallout = true,
  onButtonClick,
  interactive = false,
}: Props) {
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 300 300"
        width={size}
        height={size}
        role="img"
        aria-label={
          highlight
            ? `Reloj Garmin Instinct 2 con el botón ${BUTTONS[highlight].label} resaltado`
            : "Reloj Garmin Instinct 2"
        }
      >
        {/* Correa arriba */}
        <rect x="112" y="6" width="76" height="54" rx="14" fill="#1f2937" />
        {/* Correa abajo */}
        <rect x="112" y="240" width="76" height="54" rx="14" fill="#1f2937" />

        {/* Cuerpo del reloj */}
        <rect x="60" y="52" width="180" height="196" rx="46" fill="#111827" />
        <rect x="66" y="58" width="168" height="184" rx="42" fill="#0b0f19" />
        {/* Bisel */}
        <rect x="76" y="68" width="148" height="164" rx="34" fill="#0f172a" stroke="#374151" strokeWidth="2" />

        {/* Pantalla */}
        <rect x="90" y="84" width="120" height="132" rx="22" fill="#161c2b" />

        {/* Ventanita superior derecha característica del Instinct */}
        <circle cx="182" cy="112" r="20" fill="#0b0f19" stroke="#334155" strokeWidth="2" />
        <text
          x="182"
          y="117"
          textAnchor="middle"
          fontSize="12"
          fill="#64748b"
          fontFamily="ui-sans-serif, system-ui"
        >
          68%
        </text>

        {/* Hora en la pantalla */}
        <text
          x="140"
          y="168"
          textAnchor="middle"
          fontSize="40"
          fontWeight="700"
          fill="#e2e8f0"
          fontFamily="ui-sans-serif, system-ui"
        >
          10:24
        </text>
        <text
          x="140"
          y="196"
          textAnchor="middle"
          fontSize="13"
          fill="#94a3b8"
          fontFamily="ui-sans-serif, system-ui"
        >
          LUN 20
        </text>

        {/* Botones físicos */}
        {(Object.keys(BUTTONS) as ButtonId[]).map((id) => {
          const b = BUTTONS[id]
          const active = highlight === id
          const w = 16
          const h = id === "UP" || id === "DOWN" ? 34 : 30
          const x = b.side === "left" ? b.cx - w + 4 : b.cx - 4
          const y = b.cy - h / 2
          return (
            <g
              key={id}
              onClick={interactive ? () => onButtonClick?.(id) : undefined}
              style={{ cursor: interactive ? "pointer" : "default" }}
            >
              <rect
                x={x}
                y={y}
                width={w}
                height={h}
                rx={6}
                fill={active ? "#16a34a" : "#334155"}
                stroke={active ? "#16a34a" : "#1e293b"}
                strokeWidth="2"
              />
              {active && (
                <rect
                  x={x - 5}
                  y={y - 5}
                  width={w + 10}
                  height={h + 10}
                  rx={9}
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth="3"
                  className={longPress ? "gw-pulse-slow" : "gw-pulse"}
                />
              )}
            </g>
          )
        })}

        {/* Flecha animada apuntando al botón resaltado */}
        {highlight &&
          (() => {
            const b = BUTTONS[highlight]
            if (b.side === "left") {
              return (
                <g className="gw-arrow-left">
                  <line
                    x1={b.cx - 44}
                    y1={b.cy}
                    x2={b.cx - 18}
                    y2={b.cy}
                    stroke="#16a34a"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <polygon
                    points={`${b.cx - 20},${b.cy - 8} ${b.cx - 6},${b.cy} ${b.cx - 20},${b.cy + 8}`}
                    fill="#16a34a"
                  />
                </g>
              )
            }
            return (
              <g className="gw-arrow-right">
                <line
                  x1={b.cx + 46}
                  y1={b.cy}
                  x2={b.cx + 20}
                  y2={b.cy}
                  stroke="#16a34a"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <polygon
                  points={`${b.cx + 22},${b.cy - 8} ${b.cx + 8},${b.cy} ${b.cx + 22},${b.cy + 8}`}
                  fill="#16a34a"
                />
              </g>
            )
          })()}
      </svg>

      {/* Cartelito con el nombre del botón */}
      {highlight && showCallout && (
        <div
          className={`absolute top-1/2 -translate-y-1/2 ${
            BUTTONS[highlight].side === "left" ? "left-0 -translate-x-1" : "right-0 translate-x-1"
          }`}
        >
          <span className="inline-flex items-center rounded-full bg-emerald-600 px-3 py-1 text-sm font-bold text-white shadow-lg">
            {BUTTONS[highlight].label}
          </span>
        </div>
      )}
    </div>
  )
}
