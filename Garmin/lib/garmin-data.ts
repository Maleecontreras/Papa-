// Datos del Garmin Instinct 2 convertidos en tutoriales guiados.
// Todo el contenido está pensado específicamente para el Garmin Instinct 2.

export type ButtonId = "CTRL" | "GPS" | "BACK" | "UP" | "DOWN"

export type CategoryId = "actividades" | "salud" | "herramientas" | "info" | "config"

export type Step = {
  short: string // frase muy corta, el título del paso
  detail: string // explicación sencilla
  highlight?: ButtonId // botón a resaltar en el reloj
  longPress?: boolean // si hay que dejarlo apretado
  hint?: string // aclaración corta (ej: "No lo mantengas apretado")
}

export type Tutorial = {
  id: string
  title: string
  icon: string // emoji
  category: CategoryId
  summary: string // aparece en la tarjeta
  keywords: string[] // para el buscador en lenguaje natural
  intro?: string // frase de bienvenida antes de empezar
  steps: Step[]
  ending?: string // qué hacer para terminar / guardar
  note?: string // diferencias entre modelos del Instinct 2, si aplica
}

export type Category = {
  id: CategoryId
  title: string
  icon: string
  color: string // clase tailwind del acento
}

export const categories: Category[] = [
  { id: "actividades", title: "Actividades", icon: "🏃", color: "text-emerald-700" },
  { id: "salud", title: "Salud", icon: "❤️", color: "text-rose-600" },
  { id: "herramientas", title: "Herramientas", icon: "🧰", color: "text-blue-700" },
  { id: "info", title: "Información", icon: "🔎", color: "text-slate-700" },
  { id: "config", title: "Reloj", icon: "⚙️", color: "text-slate-700" },
]

// Explicación de cada botón físico del Garmin Instinct 2.
export type ButtonInfo = {
  id: ButtonId
  label: string
  side: "left" | "right"
  what: string
  more: string
}

export const buttonsInfo: ButtonInfo[] = [
  {
    id: "CTRL",
    label: "CTRL",
    side: "left",
    what: "Abre el menú de controles rápidos.",
    more: "Dejalo apretado unos segundos para prender la pantalla, apagar el reloj o buscar el teléfono.",
  },
  {
    id: "UP",
    label: "UP / MENU",
    side: "left",
    what: "Sirve para subir por las opciones y abrir el menú.",
    more: "Tocalo una vez para subir en una lista. Dejalo apretado para abrir el menú grande de opciones.",
  },
  {
    id: "DOWN",
    label: "DOWN",
    side: "left",
    what: "Sirve para bajar por las opciones.",
    more: "Tocalo una vez para bajar en una lista o para pasar entre las pantallas de información.",
  },
  {
    id: "GPS",
    label: "GPS",
    side: "right",
    what: "Sirve para iniciar actividades, elegir opciones y confirmar.",
    more: "Es el botón más importante. Cada vez que quieras entrar o aceptar algo, apretá GPS.",
  },
  {
    id: "BACK",
    label: "BACK",
    side: "right",
    what: "Sirve para volver atrás.",
    more: "Si te equivocaste o querés salir de una pantalla, apretá BACK. No borra nada.",
  },
]

// Glosario: "¿Qué significa esto?"
export type GlossaryItem = {
  icon: string
  label: string
  meaning: string
}

export const glossary: GlossaryItem[] = [
  { icon: "❤️", label: "72 lpm", meaning: "Es tu corazón: está latiendo 72 veces por minuto. Es tu ritmo cardíaco de ahora." },
  { icon: "👣", label: "4.523", meaning: "Son los pasos que caminaste hoy. Se reinician cada día a la medianoche." },
  { icon: "🔋", label: "68%", meaning: "Es la batería que le queda al reloj. Cuando llega a 0% hay que cargarlo." },
  { icon: "☀️", label: "23°", meaning: "Es la temperatura que muestra el reloj. Puede ser del ambiente o de tu muñeca." },
  { icon: "🔥", label: "1.240 cal", meaning: "Son las calorías que gastaste hoy con tu cuerpo y tus movimientos." },
  { icon: "🔵", label: "Body Battery 60", meaning: "Es tu energía del día, de 0 a 100. Más alto es que estás más descansado." },
  { icon: "😟", label: "Estrés 35", meaning: "Es tu nivel de estrés, de 0 a 100. Más bajo es que estás más tranquilo." },
  { icon: "🏃", label: "5,20 km", meaning: "Es la distancia que recorriste en tu actividad o durante el día." },
  { icon: "⏱️", label: "32:15", meaning: "Es el tiempo que llevás en la actividad: 32 minutos y 15 segundos." },
  { icon: "📶", label: "Símbolo de teléfono", meaning: "Si aparece, el reloj está conectado a tu celular. Si está tachado, no lo encuentra." },
  { icon: "🌙", label: "Luna", meaning: "Es el modo No molestar. El reloj no te va a avisar con vibraciones." },
  { icon: "⚡", label: "Rayo", meaning: "El reloj se está cargando. Está enchufado y sumando batería." },
]

// Todos los tutoriales.
export const tutorials: Tutorial[] = [
  // ---------------- BÁSICO ----------------
  {
    id: "empezar-desde-cero",
    title: "Empezar desde cero",
    icon: "▶️",
    category: "info",
    summary: "Conocé tu reloj antes de arrancar.",
    keywords: ["no se", "no se que tocar", "ayuda", "empezar", "basico", "primeros pasos", "como se usa"],
    intro: "Tranquilo. Vamos de a poco. Primero conocé tu reloj.",
    steps: [
      {
        short: "Mirá la pantalla",
        detail: "Cuando no tocás nada, el reloj muestra la hora. Eso se llama la pantalla principal.",
      },
      {
        short: "Los botones de la izquierda",
        detail: "De arriba hacia abajo son: CTRL, UP y DOWN. Con UP y DOWN te movés por las listas.",
        highlight: "UP",
      },
      {
        short: "Los botones de la derecha",
        detail: "Arriba está GPS y abajo BACK. GPS sirve para entrar y aceptar. BACK para volver.",
        highlight: "GPS",
      },
      {
        short: "Para volver siempre",
        detail: "Si te perdés en cualquier pantalla, apretá BACK varias veces hasta ver la hora.",
        highlight: "BACK",
      },
    ],
    ending: "Listo. Ya sabés lo básico. Ahora elegí qué querés hacer desde la pantalla de inicio.",
  },

  // ---------------- ACTIVIDADES ----------------
  {
    id: "caminar",
    title: "Caminar",
    icon: "🚶",
    category: "actividades",
    summary: "Registrá tu caminata con distancia y tiempo.",
    keywords: ["caminar", "caminata", "medir cuanto camino", "salir a caminar", "andar", "pasos afuera"],
    intro: "Vamos a preparar el reloj para salir a caminar.",
    steps: [
      {
        short: "Apretá GPS",
        detail: "Mirá el lado derecho del reloj y apretá el botón GPS una sola vez.",
        highlight: "GPS",
        hint: "No lo mantengas apretado.",
      },
      {
        short: 'Buscá "Caminar"',
        detail: "Con los botones UP y DOWN movete por la lista hasta que aparezca Caminar.",
        highlight: "DOWN",
      },
      {
        short: "Entrá con GPS",
        detail: "Cuando veas Caminar seleccionado, apretá GPS para entrar.",
        highlight: "GPS",
      },
      {
        short: "Esperá el GPS",
        detail: "El reloj busca tu ubicación. Esperá afuera hasta que la barra se ponga verde.",
        hint: "Esto puede tardar un ratito la primera vez.",
      },
      {
        short: "Empezá a caminar",
        detail: "Cuando estés listo, apretá GPS para arrancar. El tiempo empieza a correr.",
        highlight: "GPS",
      },
    ],
    ending: 'Para terminar: apretá GPS para pausar, después apretá UP/DOWN hasta "Guardar" y confirmá con GPS.',
  },
  {
    id: "correr",
    title: "Correr",
    icon: "🏃",
    category: "actividades",
    summary: "Salí a correr y guardá tu recorrido.",
    keywords: ["correr", "salir a correr", "running", "trote", "trotar"],
    intro: "Vamos a preparar el reloj para salir a correr.",
    steps: [
      { short: "Apretá GPS", detail: "Apretá el botón GPS del lado derecho una sola vez.", highlight: "GPS", hint: "No lo mantengas apretado." },
      { short: 'Buscá "Correr"', detail: "Con UP y DOWN movete por la lista hasta encontrar Correr.", highlight: "DOWN" },
      { short: "Entrá con GPS", detail: "Con Correr seleccionado, apretá GPS para entrar.", highlight: "GPS" },
      { short: "Esperá el GPS", detail: "Esperá afuera hasta que la barra del GPS se ponga verde.", hint: "Mejor al aire libre y quieto." },
      { short: "Empezá a correr", detail: "Cuando estés listo, apretá GPS para arrancar.", highlight: "GPS" },
    ],
    ending: 'Para terminar: apretá GPS para pausar, buscá "Guardar" con UP/DOWN y confirmá con GPS.',
  },
  {
    id: "bicicleta",
    title: "Bicicleta",
    icon: "🚴",
    category: "actividades",
    summary: "Registrá tu salida en bici.",
    keywords: ["bicicleta", "bici", "andar en bici", "ciclismo", "pedalear"],
    intro: "Vamos a preparar el reloj para salir en bicicleta.",
    steps: [
      { short: "Apretá GPS", detail: "Apretá el botón GPS del lado derecho una sola vez.", highlight: "GPS", hint: "No lo mantengas apretado." },
      { short: 'Buscá "Bici" o "Ciclismo"', detail: "Con UP y DOWN movete por la lista hasta encontrar la opción de bicicleta.", highlight: "DOWN" },
      { short: "Entrá con GPS", detail: "Con la bici seleccionada, apretá GPS para entrar.", highlight: "GPS" },
      { short: "Esperá el GPS", detail: "Esperá al aire libre hasta que la barra se ponga verde.", hint: "Quieto hasta que encuentre señal." },
      { short: "Empezá a pedalear", detail: "Cuando estés listo, apretá GPS para arrancar.", highlight: "GPS" },
    ],
    ending: 'Para terminar: apretá GPS para pausar, buscá "Guardar" y confirmá con GPS.',
  },
  {
    id: "natacion",
    title: "Natación",
    icon: "🏊",
    category: "actividades",
    summary: "Registrá tu natación en pileta.",
    keywords: ["natacion", "nadar", "pileta", "piscina", "agua"],
    intro: "El Instinct 2 se puede mojar. Vamos a registrar tu natación.",
    steps: [
      { short: "Apretá GPS", detail: "Apretá el botón GPS del lado derecho una sola vez.", highlight: "GPS", hint: "No lo mantengas apretado." },
      { short: 'Buscá "Natación en piscina"', detail: "Con UP y DOWN movete por la lista hasta encontrar la natación.", highlight: "DOWN" },
      { short: "Entrá con GPS", detail: "Apretá GPS para entrar.", highlight: "GPS" },
      { short: "Elegí el largo de la pileta", detail: "Si te lo pregunta, elegí el largo (por ejemplo 25 metros) con UP/DOWN y confirmá con GPS.", highlight: "GPS" },
      { short: "Empezá a nadar", detail: "Cuando estés listo, apretá GPS para arrancar.", highlight: "GPS" },
    ],
    ending: "Para terminar: mantené apretado GPS para pausar (dentro del agua los botones normales se bloquean), después guardá.",
    note: "En natación el reloj bloquea la pantalla táctil y algunos botones para que el agua no toque nada. Por eso a veces hay que dejar apretado el botón.",
  },
  {
    id: "gimnasio",
    title: "Gimnasio",
    icon: "💪",
    category: "actividades",
    summary: "Registrá tu entrenamiento de fuerza.",
    keywords: ["gimnasio", "gym", "pesas", "fuerza", "musculacion", "entrenar"],
    intro: "Vamos a registrar tu paso por el gimnasio.",
    steps: [
      { short: "Apretá GPS", detail: "Apretá el botón GPS del lado derecho una sola vez.", highlight: "GPS", hint: "No lo mantengas apretado." },
      { short: 'Buscá "Fuerza" o "Gimnasio"', detail: "Con UP y DOWN buscá la actividad de fuerza o cardio.", highlight: "DOWN" },
      { short: "Entrá con GPS", detail: "Apretá GPS para entrar. Adentro no hace falta esperar el GPS.", highlight: "GPS" },
      { short: "Empezá a entrenar", detail: "Cuando estés listo, apretá GPS para arrancar.", highlight: "GPS" },
    ],
    ending: 'Para terminar: apretá GPS para pausar, buscá "Guardar" y confirmá con GPS.',
  },

  // ---------------- SALUD ----------------
  {
    id: "frecuencia-cardiaca",
    title: "Ver pulsaciones",
    icon: "❤️",
    category: "salud",
    summary: "Mirá cuántas veces late tu corazón.",
    keywords: ["pulsaciones", "corazon", "ritmo cardiaco", "frecuencia cardiaca", "latidos", "pulso"],
    intro: "Vamos a ver cómo late tu corazón ahora.",
    steps: [
      { short: "Estás en la hora", detail: "Empezá desde la pantalla principal, donde se ve la hora.", },
      { short: "Apretá DOWN varias veces", detail: "Cada vez que apretás DOWN pasás a otra pantalla de información.", highlight: "DOWN" },
      { short: "Buscá el corazón", detail: "Parate en la pantalla que tiene un corazón ❤️ y un número.", highlight: "DOWN" },
      { short: "Listo", detail: "Ese número son tus pulsaciones de ahora. Si querés más detalle, apretá GPS.", highlight: "GPS" },
    ],
    ending: "Para volver a la hora, apretá BACK.",
  },
  {
    id: "pasos",
    title: "Ver pasos",
    icon: "👣",
    category: "salud",
    summary: "Mirá cuántos pasos caminaste hoy.",
    keywords: ["pasos", "cuanto camine", "contar pasos", "pasos de hoy"],
    intro: "Vamos a ver los pasos que hiciste hoy.",
    steps: [
      { short: "Estás en la hora", detail: "Empezá desde la pantalla principal." },
      { short: "Apretá UP o DOWN", detail: "Andá pasando las pantallas de información con UP o DOWN.", highlight: "UP" },
      { short: "Buscá los pasos", detail: "Parate en la pantalla con la figurita de pasos 👣 y un número grande.", highlight: "UP" },
    ],
    ending: "Ese número son tus pasos de hoy. Para volver, apretá BACK.",
  },
  {
    id: "calorias",
    title: "Ver calorías",
    icon: "🔥",
    category: "salud",
    summary: "Mirá las calorías que gastaste hoy.",
    keywords: ["calorias", "calorias quemadas", "energia gastada"],
    intro: "Vamos a ver las calorías que gastaste hoy.",
    steps: [
      { short: "Estás en la hora", detail: "Empezá desde la pantalla principal." },
      { short: "Apretá UP o DOWN", detail: "Andá pasando las pantallas con UP o DOWN.", highlight: "DOWN" },
      { short: "Buscá las calorías", detail: "Puede estar junto a los pasos. Buscá la pantalla que dice calorías o kcal.", highlight: "DOWN" },
    ],
    ending: "Ese número son las calorías que gastaste hoy. Para volver, apretá BACK.",
  },
  {
    id: "estres",
    title: "Ver estrés",
    icon: "😟",
    category: "salud",
    summary: "Mirá tu nivel de estrés del momento.",
    keywords: ["estres", "nivel de estres", "estoy estresado", "tension"],
    intro: "Vamos a ver tu nivel de estrés ahora.",
    steps: [
      { short: "Estás en la hora", detail: "Empezá desde la pantalla principal." },
      { short: "Apretá DOWN varias veces", detail: "Andá pasando las pantallas de información con DOWN.", highlight: "DOWN" },
      { short: "Buscá el estrés", detail: "Parate en la pantalla que dice Estrés y muestra un número de 0 a 100.", highlight: "DOWN" },
    ],
    ending: "Cuanto más bajo el número, más tranquilo estás. Para volver, apretá BACK.",
  },
  {
    id: "body-battery",
    title: "Ver Body Battery",
    icon: "🔵",
    category: "salud",
    summary: "Mirá cuánta energía te queda en el día.",
    keywords: ["body battery", "energia", "bateria del cuerpo", "cuanta energia tengo", "cansancio"],
    intro: "El Body Battery es tu energía del día, de 0 a 100.",
    steps: [
      { short: "Estás en la hora", detail: "Empezá desde la pantalla principal." },
      { short: "Apretá DOWN varias veces", detail: "Andá pasando las pantallas de información con DOWN.", highlight: "DOWN" },
      { short: "Buscá Body Battery", detail: "Parate en la pantalla que dice Body Battery con un número de 0 a 100.", highlight: "DOWN" },
    ],
    ending: "Más alto es que estás más descansado. Más bajo, que necesitás descansar. Para volver, apretá BACK.",
  },
  {
    id: "sueno",
    title: "Ver cómo dormí",
    icon: "😴",
    category: "salud",
    summary: "Mirá cuánto y cómo dormiste anoche.",
    keywords: ["sueno", "dormir", "como dormi", "descanso", "horas de sueno"],
    intro: "Vamos a ver cómo dormiste anoche. Para esto tenés que haber dormido con el reloj puesto.",
    steps: [
      { short: "Estás en la hora", detail: "Empezá desde la pantalla principal, a la mañana." },
      { short: "Apretá DOWN varias veces", detail: "Andá pasando las pantallas de información con DOWN.", highlight: "DOWN" },
      { short: "Buscá Sueño", detail: "Parate en la pantalla que dice Sueño y muestra las horas que dormiste.", highlight: "DOWN" },
      { short: "Mirá el detalle", detail: "Apretá GPS para ver más detalle de tu descanso.", highlight: "GPS" },
    ],
    ending: "El detalle completo se ve mejor en la app Garmin Connect del celular. Para volver, apretá BACK.",
  },
  {
    id: "intensidad",
    title: "Ver actividad diaria",
    icon: "📊",
    category: "salud",
    summary: "Mirá tus minutos de intensidad de la semana.",
    keywords: ["intensidad", "minutos de intensidad", "actividad diaria", "actividad semanal"],
    intro: "Los minutos de intensidad son tu actividad más movida de la semana.",
    steps: [
      { short: "Estás en la hora", detail: "Empezá desde la pantalla principal." },
      { short: "Apretá DOWN varias veces", detail: "Andá pasando las pantallas de información con DOWN.", highlight: "DOWN" },
      { short: "Buscá los minutos de intensidad", detail: "Parate en la pantalla que muestra los minutos de intensidad de la semana.", highlight: "DOWN" },
    ],
    ending: "Para volver a la hora, apretá BACK.",
  },

  // ---------------- HERRAMIENTAS ----------------
  {
    id: "alarma",
    title: "Poner una alarma",
    icon: "⏰",
    category: "herramientas",
    summary: "Programá una alarma para que te avise.",
    keywords: ["alarma", "despertador", "que me despierte", "poner alarma", "aviso"],
    intro: "Vamos a poner una alarma en el reloj.",
    steps: [
      { short: "Dejá apretado UP", detail: "Mantené apretado el botón UP unos segundos para abrir el menú grande.", highlight: "UP", longPress: true },
      { short: 'Buscá "Reloj"', detail: "Con UP y DOWN buscá la opción Reloj (o Alarmas) y entrá con GPS.", highlight: "DOWN" },
      { short: 'Entrá en "Alarmas"', detail: "Elegí Alarmas y apretá GPS.", highlight: "GPS" },
      { short: 'Elegí "Agregar alarma"', detail: "Con GPS agregá una alarma nueva.", highlight: "GPS" },
      { short: "Poné la hora", detail: "Con UP y DOWN cambiá la hora y confirmá cada número con GPS.", highlight: "UP" },
    ],
    ending: "La alarma queda activada. Para volver, apretá BACK hasta ver la hora.",
  },
  {
    id: "cronometro",
    title: "Usar el cronómetro",
    icon: "⏱️",
    category: "herramientas",
    summary: "Contá el tiempo que pasa desde cero.",
    keywords: ["cronometro", "medir tiempo", "contar tiempo", "cronometrar"],
    intro: "El cronómetro cuenta el tiempo hacia adelante, desde cero.",
    steps: [
      { short: "Dejá apretado UP", detail: "Mantené apretado UP para abrir el menú grande.", highlight: "UP", longPress: true },
      { short: 'Buscá "Reloj"', detail: "Con UP y DOWN buscá Reloj y entrá con GPS.", highlight: "DOWN" },
      { short: 'Elegí "Cronómetro"', detail: "Seleccioná Cronómetro y apretá GPS.", highlight: "GPS" },
      { short: "Arrancá el conteo", detail: "Apretá GPS para empezar a contar el tiempo.", highlight: "GPS" },
    ],
    ending: "Para pausar apretá GPS. Para volver a cero, apretá BACK.",
  },
  {
    id: "temporizador",
    title: "Usar el temporizador",
    icon: "⏲️",
    category: "herramientas",
    summary: "Que el reloj te avise cuando pase un tiempo.",
    keywords: ["temporizador", "timer", "cuenta regresiva", "que me avise en", "minutos"],
    intro: "El temporizador cuenta para atrás y te avisa cuando llega a cero.",
    steps: [
      { short: "Dejá apretado UP", detail: "Mantené apretado UP para abrir el menú grande.", highlight: "UP", longPress: true },
      { short: 'Buscá "Reloj"', detail: "Con UP y DOWN buscá Reloj y entrá con GPS.", highlight: "DOWN" },
      { short: 'Elegí "Temporizador"', detail: "Seleccioná Temporizador y apretá GPS.", highlight: "GPS" },
      { short: "Poné los minutos", detail: "Con UP y DOWN elegí cuántos minutos y confirmá con GPS.", highlight: "UP" },
      { short: "Arrancá", detail: "Apretá GPS para que empiece la cuenta regresiva.", highlight: "GPS" },
    ],
    ending: "Cuando llega a cero, el reloj vibra. Para volver, apretá BACK.",
  },
  {
    id: "linterna",
    title: "Usar la linterna",
    icon: "🔦",
    category: "herramientas",
    summary: "Iluminá con el reloj en la oscuridad.",
    keywords: ["linterna", "luz", "iluminar", "flashlight", "oscuridad"],
    intro: "Vamos a prender la linterna del reloj.",
    steps: [
      { short: "Dejá apretado CTRL", detail: "Mantené apretado el botón CTRL para abrir los controles rápidos.", highlight: "CTRL", longPress: true },
      { short: "Buscá la linterna", detail: "Con UP y DOWN buscá el dibujito de la linterna.", highlight: "DOWN" },
      { short: "Prendé la luz", detail: "Apretá GPS sobre la linterna para prenderla.", highlight: "GPS" },
    ],
    ending: "Para apagarla, apretá GPS de nuevo o BACK para salir.",
    note: "No todos los Instinct 2 tienen linterna de luz LED. El modelo Instinct 2X sí la tiene. Los demás usan la pantalla iluminada como linterna. Si no encontrás la linterna, tu modelo puede no tenerla.",
  },
  {
    id: "brujula",
    title: "Usar la brújula",
    icon: "🧭",
    category: "herramientas",
    summary: "Mirá hacia dónde estás mirando.",
    keywords: ["brujula", "norte", "orientarme", "hacia donde", "puntos cardinales"],
    intro: "La brújula te muestra hacia dónde estás mirando.",
    steps: [
      { short: "Estás en la hora", detail: "Empezá desde la pantalla principal." },
      { short: "Apretá UP o DOWN", detail: "Andá pasando las pantallas de información con UP o DOWN.", highlight: "UP" },
      { short: "Buscá la brújula", detail: "Parate en la pantalla que muestra la brújula con la N del norte.", highlight: "UP" },
    ],
    ending: "Movete despacio para que se acomode. Para volver, apretá BACK.",
  },
  {
    id: "buscar-telefono",
    title: "Buscar el teléfono",
    icon: "📱",
    category: "herramientas",
    summary: "Hacé sonar tu celular para encontrarlo.",
    keywords: ["buscar telefono", "encontrar celular", "perdi el celular", "hacer sonar el telefono", "donde esta mi celular"],
    intro: "Si tenés el reloj conectado al celular, el reloj lo puede hacer sonar.",
    steps: [
      { short: "Dejá apretado CTRL", detail: "Mantené apretado el botón CTRL para abrir los controles rápidos.", highlight: "CTRL", longPress: true },
      { short: "Buscá el teléfono", detail: "Con UP y DOWN buscá el dibujito de un teléfono que dice buscar.", highlight: "DOWN" },
      { short: "Hacelo sonar", detail: "Apretá GPS. Tu celular va a empezar a sonar aunque esté en silencio.", highlight: "GPS" },
    ],
    ending: "Cuando encuentres el celular, apretá BACK en el reloj para que deje de sonar.",
    note: "Para que funcione, el reloj tiene que estar conectado al celular y cerca (misma casa).",
  },

  // ---------------- INFORMACIÓN ----------------
  {
    id: "bateria",
    title: "Ver la batería",
    icon: "🔋",
    category: "info",
    summary: "Mirá cuánta batería le queda al reloj.",
    keywords: ["bateria", "cuanta bateria", "carga", "se queda sin bateria", "porcentaje"],
    intro: "Vamos a ver cuánta batería le queda al reloj.",
    steps: [
      { short: "Dejá apretado CTRL", detail: "Mantené apretado CTRL para abrir los controles rápidos.", highlight: "CTRL", longPress: true },
      { short: "Mirá el porcentaje", detail: "Arriba de todo suele aparecer el porcentaje de batería, por ejemplo 68%.", },
    ],
    ending: "También podés verla pasando las pantallas con DOWN. Para volver, apretá BACK.",
  },
  {
    id: "fecha-hora",
    title: "Ver fecha y hora",
    icon: "📅",
    category: "info",
    summary: "Mirá el día y la hora actual.",
    keywords: ["fecha", "hora", "que dia es", "dia de hoy", "calendario"],
    intro: "La hora se ve siempre en la pantalla principal.",
    steps: [
      { short: "Mirá la pantalla principal", detail: "Ahí ya se ve la hora. La fecha suele estar arriba o abajo en letra chica." },
      { short: "Si no ves la fecha", detail: "Apretá UP o DOWN para buscar la pantalla de calendario o del día.", highlight: "DOWN" },
    ],
    ending: "Para volver a la hora, apretá BACK.",
  },
  {
    id: "notificaciones",
    title: "Ver notificaciones",
    icon: "🔔",
    category: "info",
    summary: "Leé los mensajes que llegan del celular.",
    keywords: ["notificaciones", "mensajes", "whatsapp", "avisos", "llamadas"],
    intro: "Si el reloj está conectado al celular, te muestra los mensajes que llegan.",
    steps: [
      { short: "Estás en la hora", detail: "Empezá desde la pantalla principal." },
      { short: "Apretá UP", detail: "Andá pasando las pantallas con el botón UP.", highlight: "UP" },
      { short: "Buscá las notificaciones", detail: "Parate en la pantalla que muestra los mensajes o avisos.", highlight: "UP" },
      { short: "Leé el mensaje", detail: "Apretá GPS para abrir un mensaje y leerlo completo.", highlight: "GPS" },
    ],
    ending: "Para volver, apretá BACK.",
    note: "Necesitás tener el reloj conectado al celular con la app Garmin Connect.",
  },
  {
    id: "clima",
    title: "Ver el clima",
    icon: "🌤️",
    category: "info",
    summary: "Mirá el pronóstico del tiempo.",
    keywords: ["clima", "tiempo", "va a llover", "temperatura de hoy", "pronostico"],
    intro: "El reloj muestra el clima usando la conexión con tu celular.",
    steps: [
      { short: "Estás en la hora", detail: "Empezá desde la pantalla principal." },
      { short: "Apretá UP o DOWN", detail: "Andá pasando las pantallas con UP o DOWN.", highlight: "DOWN" },
      { short: "Buscá el clima", detail: "Parate en la pantalla del clima, con un solcito o una nube.", highlight: "DOWN" },
      { short: "Mirá el pronóstico", detail: "Apretá GPS para ver el clima de las próximas horas.", highlight: "GPS" },
    ],
    ending: "Para volver, apretá BACK.",
    note: "El clima necesita que el reloj esté conectado al celular.",
  },
  {
    id: "distancia",
    title: "Ver distancia recorrida",
    icon: "📏",
    category: "info",
    summary: "Mirá cuánto recorriste en tu actividad.",
    keywords: ["distancia", "cuanto recorri", "kilometros", "cuanto camine", "km"],
    intro: "Durante una actividad el reloj te muestra la distancia. También podés verla al terminar.",
    steps: [
      { short: "Durante la actividad", detail: "Mientras caminás o corrés, la distancia aparece en la pantalla en kilómetros." },
      { short: "Cambiá de pantalla", detail: "Si no la ves, apretá UP o DOWN para cambiar los datos que se muestran.", highlight: "DOWN" },
    ],
    ending: "Al terminar y guardar, el resumen te muestra la distancia total.",
  },

  // ---------------- CONFIGURACIÓN / RELOJ ----------------
  {
    id: "cambiar-pantalla",
    title: "Cambiar la pantalla del reloj",
    icon: "🎨",
    category: "config",
    summary: "Cambiá cómo se ve la esfera del reloj.",
    keywords: ["cambiar pantalla", "esfera", "watch face", "diseno del reloj", "como se ve"],
    intro: "Vamos a cambiar el diseño de la pantalla principal (la esfera).",
    steps: [
      { short: "Dejá apretado UP", detail: "Desde la hora, mantené apretado UP para abrir el menú grande.", highlight: "UP", longPress: true },
      { short: 'Buscá "Esfera del reloj"', detail: "Con UP y DOWN buscá la opción de esfera o pantalla del reloj y entrá con GPS.", highlight: "DOWN" },
      { short: "Mirá los diseños", detail: "Con UP y DOWN vas viendo distintos diseños.", highlight: "DOWN" },
      { short: "Elegí uno", detail: "Cuando te guste uno, apretá GPS para aplicarlo.", highlight: "GPS" },
    ],
    ending: "Listo. Para volver, apretá BACK hasta ver la hora.",
  },
  {
    id: "brillo",
    title: "Cambiar el brillo",
    icon: "🔆",
    category: "config",
    summary: "Ajustá la luz de la pantalla.",
    keywords: ["brillo", "luz de la pantalla", "mas claro", "mas oscuro", "backlight", "retroiluminacion"],
    intro: "Vamos a ajustar la luz de la pantalla (la retroiluminación).",
    steps: [
      { short: "Dejá apretado UP", detail: "Mantené apretado UP para abrir el menú grande.", highlight: "UP", longPress: true },
      { short: 'Entrá en "Sistema"', detail: "Con UP y DOWN buscá Configuración y después Sistema. Confirmá con GPS.", highlight: "DOWN" },
      { short: 'Elegí "Retroiluminación"', detail: "Buscá Retroiluminación o Luz y entrá con GPS.", highlight: "GPS" },
      { short: "Ajustá la luz", detail: "Con UP y DOWN cambiá la intensidad y confirmá con GPS.", highlight: "UP" },
    ],
    ending: "Para volver, apretá BACK hasta ver la hora.",
    note: "La pantalla del Instinct 2 se ve por luz de afuera. La retroiluminación es la luz que la ilumina de noche.",
  },
  {
    id: "sonidos",
    title: "Cambiar sonidos y vibración",
    icon: "🔕",
    category: "config",
    summary: "Ajustá los avisos y la vibración.",
    keywords: ["sonidos", "vibracion", "tonos", "que vibre", "silencio", "avisos"],
    intro: "Vamos a ajustar cómo te avisa el reloj.",
    steps: [
      { short: "Dejá apretado UP", detail: "Mantené apretado UP para abrir el menú grande.", highlight: "UP", longPress: true },
      { short: 'Entrá en "Sistema"', detail: "Con UP y DOWN buscá Configuración y después Sistema. Confirmá con GPS.", highlight: "DOWN" },
      { short: 'Elegí "Sonidos y vibración"', detail: "Buscá la opción de sonidos y vibración y entrá con GPS.", highlight: "GPS" },
      { short: "Ajustá a tu gusto", detail: "Con UP y DOWN activá o desactivá la vibración y confirmá con GPS.", highlight: "UP" },
    ],
    ending: "Para volver, apretá BACK.",
    note: "El Instinct 2 no tiene parlante: te avisa con vibración y tonos suaves, no con música ni voces.",
  },
  {
    id: "idioma",
    title: "Cambiar el idioma",
    icon: "🌎",
    category: "config",
    summary: "Poné el reloj en español.",
    keywords: ["idioma", "espanol", "cambiar idioma", "esta en ingles", "language"],
    intro: "Vamos a cambiar el idioma del reloj.",
    steps: [
      { short: "Dejá apretado UP", detail: "Mantené apretado UP para abrir el menú grande.", highlight: "UP", longPress: true },
      { short: 'Entrá en "Sistema"', detail: "Con UP y DOWN buscá Configuración y después Sistema. Confirmá con GPS.", highlight: "DOWN" },
      { short: 'Elegí "Idioma"', detail: "Buscá Idioma (Language) y entrá con GPS.", highlight: "GPS" },
      { short: "Elegí español", detail: "Con UP y DOWN buscá Español y confirmá con GPS.", highlight: "UP" },
    ],
    ending: "El reloj queda en español. Para volver, apretá BACK.",
  },
  {
    id: "apagar",
    title: "Apagar o reiniciar",
    icon: "⏻",
    category: "config",
    summary: "Apagá el reloj o reinicialo si se traba.",
    keywords: ["apagar", "reiniciar", "se colgo", "se trabo", "prender", "encender"],
    intro: "Si el reloj se traba, reiniciarlo lo suele arreglar.",
    steps: [
      { short: "Dejá apretado CTRL", detail: "Mantené apretado el botón CTRL unos segundos.", highlight: "CTRL", longPress: true },
      { short: "Buscá el ícono de apagar", detail: "Con UP y DOWN buscá el ícono de apagar (⏻).", highlight: "DOWN" },
      { short: "Elegí apagar o reiniciar", detail: "Apretá GPS y elegí Apagar o Reiniciar.", highlight: "GPS" },
    ],
    ending: "Para volver a prenderlo, mantené apretado CTRL unos segundos hasta que se encienda.",
    note: "Si el reloj está muy trabado y no responde, dejá apretado CTRL bastante tiempo para que se reinicie solo.",
  },
  {
    id: "conectar-celular",
    title: "Conectar al celular",
    icon: "🔗",
    category: "config",
    summary: "Vinculá el reloj con tu teléfono.",
    keywords: ["conectar", "vincular", "celular", "telefono", "bluetooth", "emparejar", "app"],
    intro: "Para conectar el reloj necesitás la app Garmin Connect en tu celular.",
    steps: [
      { short: "Instalá la app en el celular", detail: 'En tu celular, buscá "Garmin Connect" en la tienda de apps e instalala.', },
      { short: "Abrí la app y creá tu cuenta", detail: "Seguí los pasos de la app. Te va a pedir agregar un dispositivo.", },
      { short: 'En el reloj, dejá apretado UP', detail: "En el reloj, mantené apretado UP para abrir el menú.", highlight: "UP", longPress: true },
      { short: 'Buscá "Teléfono" o "Vincular"', detail: "Entrá en Configuración, después Teléfono, y elegí Vincular teléfono. Confirmá con GPS.", highlight: "GPS" },
      { short: "Seguí a la app", detail: "El celular va a encontrar el reloj. Aceptá en los dos y listo.", },
    ],
    ending: "Cuando aparezca el símbolo de teléfono en el reloj, ya están conectados.",
    note: "El reloj y el celular tienen que tener el Bluetooth prendido y estar cerca.",
  },
  {
    id: "sincronizar",
    title: "Sincronizar con Garmin Connect",
    icon: "🔄",
    category: "config",
    summary: "Pasá tus datos al celular.",
    keywords: ["sincronizar", "pasar datos", "garmin connect", "actualizar app", "sync"],
    intro: "Sincronizar es pasar la información del reloj a la app del celular.",
    steps: [
      { short: "Tené el celular cerca", detail: "Con el reloj conectado, la sincronización suele pasar sola.", },
      { short: "Para forzarla en el reloj", detail: "Dejá apretado UP, buscá Configuración y después la opción de Sincronizar. Confirmá con GPS.", highlight: "UP", longPress: true },
      { short: "O hacelo desde el celular", detail: "En la app Garmin Connect, deslizá la pantalla hacia abajo para actualizar.", },
    ],
    ending: "Cuando termina, ves tus datos actualizados en la app del celular.",
    note: "Necesitás el reloj conectado al celular con la app Garmin Connect abierta.",
  },
]

export function getTutorial(id: string): Tutorial | undefined {
  return tutorials.find((t) => t.id === id)
}

export function tutorialsByCategory(category: CategoryId): Tutorial[] {
  return tutorials.filter((t) => t.category === category)
}

// Búsqueda en lenguaje natural, tolerante a acentos y frases.
export function searchTutorials(query: string): Tutorial[] {
  const normalize = (s: string) =>
    s
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim()

  const q = normalize(query)
  if (!q) return []

  const words = q.split(/\s+/).filter((w) => w.length > 2)

  const scored = tutorials.map((t) => {
    const haystack = normalize([t.title, t.summary, ...t.keywords].join(" "))
    let score = 0
    if (haystack.includes(q)) score += 5
    for (const w of words) {
      if (haystack.includes(w)) score += 1
    }
    return { t, score }
  })

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((s) => s.t)
}
