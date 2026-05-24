import { LegendaryTeam, LVBPTeamStats, LVBPLegendaryRecord, TriviaQuestion, ForumPost, DailyGame, MLBLegend, Prospect } from '../types';

export const BASEBALL_FUNDAMENTALS = [
  {
    title: "Las Posiciones del Béisbol (Numeración Oficial)",
    description: "Cada jugador defensivo está asociado con un número del 1 al 9 para fines de anotación técnica (el famoso 'scorecard').",
    items: [
      { num: "1", role: "Lanzador (Pitcher / P)", detail: "Se ubica en la loma del montículo. Es el encargado de arrojar la bola intentando ponchar al bateador o generar un contacto débil." },
      { num: "2", role: "Receptor (Catcher / C)", detail: "Se coloca detrás de la caja de bateo. Recibe los lanzamientos, custodia el home plate y dirige la estrategia de lanzamientos." },
      { num: "3", role: "Primera Base (First Baseman / 1B)", detail: "Custodia la primera almohadilla. Recibe la gran mayoría de los outs por asistencia de sus compañeros del infield." },
      { num: "4", role: "Segunda Base (Second Baseman / 2B)", detail: "Cubre el espacio entre la primera y la segunda base. Trabaja con el campocorto para concretar jugadas de doble play." },
      { num: "5", role: "Tercera Base (Third Baseman / 3B)", detail: "La 'esquina caliente'. Requiere reflejos felinos debido a la velocidad con que salen los batazos por ese sector izquierdo." },
      { num: "6", role: "Campocorto (Shortstop / SS)", detail: "Posición clave ubicada entre la segunda y la tercera base. Suele tener el mayor alcance y agilidad del cuadro interno." },
      { num: "7", role: "Jardinero Izquierdo (Left Fielder / LF)", detail: "Cubre el tercio izquierdo del espacioso outfield. Debe dominar los batazos altos y los rebotes contra la pared." },
      { num: "8", role: "Jardinero Central (Center Fielder / CF)", detail: "El líder de los jardines. Cubre la zona más extensa y suele ser el corredor más veloz para fildear elevados de costa a costa." },
      { num: "9", role: "Jardinero Derecho (Right Fielder / RF)", detail: "Cubre la zona derecha externa. Necesita un brazo sumamente potente para poder lanzar largo hasta la tercera base o el home." },
    ]
  },
  {
    title: "Reglas Fundamentales y Conceptos Clave",
    description: "El béisbol es un ajedrez atlético regido por normas precisas de turnos y outs.",
    items: [
      { num: "Out", role: "Las Formas de Hacer Out", detail: "Ponche (tres strikes), out forzado (pisar la base antes de que llegue el corredor cuando está obligado a avanzar), out de aire o fly (atrapar la bola bateada antes de que toque el suelo) y out por etiqueta o tocando al corredor con la pelota en el guante fuera de la base." },
      { num: "Strikes", role: "La cuenta de conteo", detail: "Se declaran strikes cuando el bateador abanica sin conectar, cuando la bola pasa por la zona de strike (espacio imaginario sobre el plato entre las axilas y las rodillas del bateador) o mediante fouls (batazos fuera de la línea, excepto en el tercer strike)." },
      { num: "Bolas", role: "Bases por Bolas", detail: "Si el lanzador tira 4 lanzamientos fuera de la zona de strike y el bateador no realiza swing, recibe automáticamente el boleto para avanzar gratis a la primera base." },
      { num: "Innings", role: "Divisiones del Juego", detail: "Un juego estándar consta de 9 entradas (innings). Cada entrada se divide en una parte alta (donde batea el equipo visitante) y una parte baja (batea el equipo local). Cada una termina al concretarse 3 outs defensivos." },
    ]
  }
];

export const BASEBALL_HISTORY = {
  origins: "Aunque existen mitos populares sobre Abner Doubleday inventando el béisbol en Cooperstown en 1839, las investigaciones sugieren que el juego evolucionó a partir de varios juegos de bate y pelota más antiguos, incluyendo el 'rounders' inglés y el 'cricket'. Alexander Cartwright redactó las primeras reglas oficiales en 1845 para el Knickerbocker Base Ball Club de Nueva York, estableciendo la forma moderna del campo de juego en forma de diamante.",
  eras: [
    {
      title: "Era de la Pelota Muerta (Dead Ball Era: 1900-1919)",
      description: "Caracterizada por juegos de muy bajo carreraje. La pelota se usaba repetidamente hasta desgastarse y ensuciarse, los lanzadores usaban sustancias (como saliva) y el bateo dependía de jugadas pequeñas, toques de bola e intentar robar bases constantemente."
    },
    {
      title: "Era del Bateo Explosivo (Live Ball Era: 1920-1941)",
      description: "Inaugurada por la irrupción de Babe Ruth. Se cambió la composición de la pelota haciéndola más elástica y se prohibió la bola ensalivada. Los cuadrangulares pasaron a ser la atracción principal de los estadios, atrayendo a multitudes sin precedentes."
    },
    {
      title: "La Integración de las Grandes Ligas (1947)",
      description: "Un hito histórico cuando Jackie Robinson rompió la barrera racial del béisbol profesional al debutar con los Brooklyn Dodgers el 15 de abril de 1947. Su valentía abrió el camino para leyendas afroamericanas e hispanas."
    },
    {
      title: "La Globalización y la Era de la Analítica (2000-Presente)",
      description: "La revolución de datos conocida como Sabermetría (popularizada por el famoso 'Moneyball') cambió por completo cómo se evalúan los jugadores. Hoy en día, conceptos como el ángulo de salida de la pelota (launch angle), velocidad de rotación del pitcheo (spin rate) y formaciones especiales defensivas gobiernan el deporte."
    }
  ]
};

export const LEGENDARY_TEAMS: LegendaryTeam[] = [
  {
    id: "nyy-1927",
    name: "New York Yankees 1927",
    year: "1927",
    league: "MLB",
    summary: "Ampliamente considerado el equipo más demoledor en la historia del béisbol. Se les conoció popularmente como la encarnación del 'Murderers' Row' (El Callejón de los Asesinos) debido al destructivo poder de su lineup ofensivo de principio a fin.",
    keyPlayers: ["Babe Ruth (60 Home Runs en la temporada)", "Lou Gehrig (47 Home Runs, 173 Carreras Impulsadas)", "Herb Pennock", "Waite Hoyt"],
    records: "Récord de temporada de 110-44. Barrieron a los Pittsburgh Pirates en la Serie Mundial de 1927 anotando un diferencial masivo de carreras.",
    achievements: ["Campeones de la Serie Mundial 1927", "Líderes históricos en porcentaje de embasado por equipo (.397)"],
    color: "indigo"
  },
  {
    id: "cin-1975",
    name: "Cincinnati Reds 1975",
    year: "1975",
    league: "MLB",
    summary: "La mítica 'Big Red Machine' (Gran Maquinaria Roja) dominó la década de los 70 en la Liga Nacional. Tenían una colosal combinación de bateo de poder, velocidad endiablada en las bases y una de las defensas más condecoradas de todos los tiempos.",
    keyPlayers: ["Pete Rose (Líder histórico de hits)", "Johnny Bench (Considerado el mejor receptor de la historia)", "Joe Morgan", "David Concepción (Orgullo venezolano y campocorto estelar)"],
    records: "Ganaron 108 juegos en temporada regular; vencieron a Boston en una de las mejores Series Mundiales de la historia en 7 juegos.",
    achievements: ["Campeones de Serie Mundial 1975", "6 jugadores Guante de Oro en el lineup titular"],
    color: "red"
  },
  {
    id: "tlg-1985",
    name: "Tiburones de La Guaira 1985-86",
    year: "1985-1986",
    league: "LVBP",
    summary: "Se ganaron la inmortalidad bajo el apodo de la célebre 'Guerrilla'. Era un equipo indomable que jugaba con una intensidad agresiva, pasión desbordada y una picardía criolla sin igual que llenó de alegría los estadios venezolanos.",
    keyPlayers: ["Oswaldo Guillén (Campocorto novato del año de la Liga Americana)", "Luis Salazar (El alma de la Guerrilla)", "Luis Mercedes Sánchez", "Gustavo Polidor", "Café Martínez"],
    records: "Formaron una dinastía en los años 80, conquistando tres campeonatos locales (82-83, 84-85, 85-86) jugando un béisbol electrizante.",
    achievements: ["Campeones de la LVBP 1985-86", "Heredaron un estilo agresivo de robo de base y juego táctico inolvidable"],
    color: "blue"
  },
  {
    id: "bos-2004",
    name: "Boston Red Sox 2004",
    year: "2004",
    league: "MLB",
    summary: "Los 'Idiots', autodenominados así por su actitud relajada ante la enorme presión, rompieron la mítica 'Maldición del Bambino' de 86 años sin títulos. Protagonizaron el mayor regreso en la historia de la postemporada al remontar un 0-3 ante su archirrival, los Yankees.",
    keyPlayers: ["David Ortiz ('Big Papi', héroe de batazos claves)", "Manny Ramírez", "Pedro Martínez (As del pitcheo dominicano)", "Curt Schilling"],
    records: "Único equipo en la historia de MLB que remonta una desventaja de 3-0 en una serie de postemporada al mejor de siete.",
    achievements: ["Campeones de la Serie Mundial 2004", "Rompedores de maldiciones históricas"],
    color: "emerald"
  }
];

export const LVBP_HISTORY = {
  summary: "La Liga Venezolana de Béisbol Profesional (LVBP) fue fundada oficialmente el 27 de diciembre de 1945 por iniciativa de los cuatro equipos fundadores: Cervecería Caracas, Magallanes, Sabios del Vargas y Patriotas de Venezuela. El primer torneo arrancó en enero de 1946. Desde entonces, el béisbol se consolidó como el deporte nacional indiscutible de Venezuela, uniendo al país a través de la pasión invernal, grandes rivalidades y exportando un talento estelar inigualable a las Grandes Ligas.",
  rivalry: "La rivalidad entre los Leones del Caracas (originalmente Cervecería Caracas) y los Navegantes del Magallanes es conocida informalmente como 'El Eterno Rival'. Es una de las rivalidades más encendidas e intensas del deporte mundial, capaz de paralizar al país entero durante la época del béisbol profesional invernal caribeño. Sus duelos dividen hogares y encienden estadios con una mística inigualable."
};

export const LVBP_TEAMS: LVBPTeamStats[] = [
  {
    id: "leones",
    name: "Leones del Caracas",
    shortName: "CAR",
    championships: 21,
    founded: "1952 (Sucesor directo del Cervecería Caracas fundado en 1942)",
    city: "Caracas / La Rinconada",
    summary: "El equipo con la mayor cantidad de campeonatos en la historia de la liga. Nació del arraigo popular de la zona capitalina y es poseedor de una de las fanaticadas más numerosas e intensas.",
    legendaryPlayers: ["Víctor Davalillo (Leyenda eterna del strike)", "Andrés Galarraga (El Gran Gato)", "Alfonso 'Chico' Carrasquel", "Baudilio Díaz (Receptor récord)", "Omar Vizquel", "Antonio Armas"]
  },
  {
    id: "magallanes",
    name: "Navegantes del Magallanes",
    shortName: "MAG",
    championships: 13,
    founded: "1917 (El club de béisbol más antiguo en funcionamiento continuo de Venezuela)",
    city: "Valencia",
    summary: "La nave turca cuenta con una de las identidades más icónicas de Latinoamérica. Es el primer equipo venezolano en coronarse en una Serie del Caribe (1970).",
    legendaryPlayers: ["Luis 'Camaleón' García", "Félix Hernández", "Johan Santana", "Richard Hidalgo", "Melvin Mora", "Luis Raven"]
  },
  {
    id: "tigres",
    name: "Tigres de Aragua",
    shortName: "ARA",
    championships: 10,
    founded: "1965",
    city: "Maracay",
    summary: "Protagonistas de 'La Dinastía de los 2000' bajo el mando del mánager Buddy Bailey, logrando conquistar 6 campeonatos en una sola década y erigiéndose en un coloso de la liga.",
    legendaryPlayers: ["Miguel Cabrera (Triple Coronador de la MLB e ídolo histórico de Maracay)", "David Concepción", "Robert Pérez (refuerzo/leyenda)", "Ronny Cedeño"]
  },
  {
    id: "tiburones",
    name: "Tiburones de La Guaira",
    shortName: "LAG",
    championships: 8,
    founded: "1962 (Sustituyó a los Licoreros de Pampero)",
    city: "La Guaira / Caracas",
    summary: "Creadores de la samba, llenando de contagioso sabor musical las tribunas. Son los vigentes campeones de la Serie del Caribe, reconocidos históricamente por su estilo rítmico y aguerrido.",
    legendaryPlayers: ["Luis Salazar", "Oswaldo Guillén (Mánager campeón de Serie Mundial y LVBP)", "Álex Cabrera", "Luis Aparicio (Breve estancia)", "Ronald Acuña Jr."]
  },
  {
    id: "cardenales",
    name: "Cardenales de Lara",
    shortName: "LAR",
    championships: 6,
    founded: "1942",
    city: "Barquisimeto",
    summary: "La escuadra crepuscular es sinónimo de consistencia competitiva y desarrollo de talentos de élite de enorme proyección internacional.",
    legendaryPlayers: ["Robert Pérez ('La Pared Negra', amo de marcas ofensivas locales)", "Luis Sojo (Ganador de múltiples anillos con Yankees)", "Giovanni Carrara", "Luis Valbuena"]
  },
  {
    id: "aguilas",
    name: "Águilas del Zulia",
    shortName: "ZUL",
    championships: 6,
    founded: "1969",
    city: "Maracaibo",
    summary: "Garantizan el ardor de la tierra del sol amada a punta de garra. Han ganado dos Series del Caribe (1984 y 1989) demostrando la jerarquía del béisbol zuliano.",
    legendaryPlayers: ["Luis Aparicio (Único venezolano en el Salón de la Fama de Cooperstown)", "Leonel Carrión", "Wilson Álvarez", "Carlos González (CarGo)", "Ernesto Mejía"]
  },
  {
    id: "caribes",
    name: "Caribes de Anzoátegui",
    shortName: "ANZ",
    championships: 4,
    founded: "1987",
    city: "Puerto La Cruz",
    summary: "La tribu oriental se asume como uno de los equipos más temidos en postemporada en los últimos quince años debido a su inagotable capacidad de bateo de poder de libre flujo.",
    legendaryPlayers: ["Alexi Amarista", "Niuman Romero", "Eliézer Alfonzo (El Matador, récord de HRs históricos de LVBP)", "Freddy García"]
  },
  {
    id: "bravos",
    name: "Bravos de Margarita",
    shortName: "MAR",
    championships: 0,
    founded: "2007 (Evolución de Pastora de Los Llanos / Petroleros de Cabimas)",
    city: "Guatamare, Margarita",
    summary: "Están en incansable búsqueda de su primera estrella. Tienen una de las localías más pintorescas del Caribe y un constante semillero de atletas.",
    legendaryPlayers: ["Henry Blanco (Jugador y Mánager)", "Frank Díaz", "Yorman Rodríguez", "Bravitos prospectos"]
  }
];

export const LVBP_RECORDS: LVBPLegendaryRecord[] = [
  {
    id: "rec-1",
    category: "Hits de por Vida",
    player: "Víctor Davalillo",
    value: "1,505 Hits",
    description: "La marca más inalcanzable de la LVBP. Davalillo dominó el bateo criollo jugando hasta pasados los 45 años, ganando 4 títulos de bateo con su magistral swing zurdo."
  },
  {
    id: "rec-2",
    category: "Jonrones de por Vida",
    player: "Eliézer Alfonzo",
    value: "138 Home Runs",
    description: "'El Matador' superó la mítica marca de Robert Pérez (125) para consolidarse como el slugger más destructor y temido de la era contemporánea en Venezuela."
  },
  {
    id: "rec-3",
    category: "Carreras Impulsadas",
    player: "Robert Pérez",
    value: "739 Carreras Remolcadas",
    description: "Legendario jugador de los Cardenales de Lara apodado 'La Pared Negra'. Jugó 27 temporadas locales demostrando un embrague extraordinario en momentos de alta presión."
  },
  {
    id: "rec-4",
    category: "Promedio de Bateo Ajustado",
    player: "Víctor Davalillo",
    value: ".325 AVG",
    description: "El promedio de bateo de por vida más alto registrado por un jugador nativo con un mínimo de 2,000 apariciones al plato en la historia invernal."
  },
  {
    id: "rec-5",
    category: "Efectividad de Pitcheo",
    player: "Carrao Bracho",
    value: "109 Victorias",
    description: "El serpentinero más ganador del certamen local, recordado por su envidiable durabilidad en el montículo caribeño."
  }
];

export const TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: "q-1",
    question: "¿Quién es el único pelotero venezolano exaltado al Salón de la Fama de Cooperstown (MLB)?",
    options: [
      "Andrés Galarraga",
      "Miguel Cabrera",
      "Luis Aparicio",
      "David Concepción"
    ],
    correctAnswer: 2,
    explanation: "Luis Aparicio fue exaltado al Salón de la Fama de Cooperstown de las Grandes Ligas en el año 1984, gracias a su maravillosa trayectoria de 18 temporadas brillando como campocorto con Medias Blancas de Chicago, Orioles de Baltimore y Medias Rojas de Boston, ganando 9 Guantes de Oro."
  },
  {
    id: "q-2",
    question: "¿Qué histórico pelotero posee el récord de más Hits de por vida en la LVBP con 1,505 hits?",
    options: [
      "Robert Pérez",
      "Víctor Davalillo",
      "Teolindo Acosta",
      "César Tovar"
    ],
    correctAnswer: 1,
    explanation: "Víctor 'Vitico' Davalillo es el rey indiscutible de los hits en el béisbol venezolano con 1,505 inatrapables logrados en 30 fabulosas temporadas."
  },
  {
    id: "q-3",
    question: "En las posiciones de anotación técnica del béisbol, ¿cuál de todas corresponde al número '6'?",
    options: [
      "Campocorto (Shortstop)",
      "Segunda Base",
      "Tercera Base",
      "Receptor (Catcher)"
    ],
    correctAnswer: 0,
    explanation: "En la numeración técnica tradicional del béisbol, el campocorto (shortstop) lleva asignado el número 6 para agilizar el registro oficial de jugadas en el scorecard (como el famoso out de doble play 6-4-3)."
  },
  {
    id: "q-4",
    question: "¿Quién posee la marca absoluta de más campeonatos de la LVBP venezolana?",
    options: [
      "Navegantes del Magallanes",
      "Tiburones de La Guaira",
      "Cardenales de Lara",
      "Leones del Caracas"
    ],
    correctAnswer: 3,
    explanation: "Los Leones del Caracas es el equipo más ganador con 21 títulos conquistados en la LVBP. Le siguen los Navegantes del Magallanes con 13 coronas."
  },
  {
    id: "q-5",
    question: "¿Cuál de estos equipos legendarios norteamericanos es famoso bajo el apodo del 'Murderers' Row'?",
    options: [
      "New York Yankees 1927",
      "Boston Red Sox 2004",
      "Cincinnati Reds 1975",
      "San Francisco Giants 2012"
    ],
    correctAnswer: 0,
    explanation: "El roster de los New York Yankees de 1927 fue bautizado como 'Murderers' Row' (El Callejón de los Asesinos) debido a que contaban con un lineup devastador encabezado por Babe Ruth y Lou Gehrig."
  },
  {
    id: "q-6",
    question: "¿A qué equipo de la LVBP se le conocía en los años 80 por jugar intensamente bajo el mote de 'La Guerrilla'?",
    options: [
      "Águilas del Zulia",
      "Tiburones de La Guaira",
      "Tigres de Aragua",
      "Cervecería Caracas"
    ],
    correctAnswer: 1,
    explanation: "Se le conoció como 'La Guerrilla' a los Tiburones de La Guaira de mediados de los años 80, liderados por Luis Salazar y Oswaldo Guillén, juego bravío que trascendió por su picardía y espíritu indomable."
  },
  {
    id: "q-7",
    question: "¿Quién ostenta el récord de más Jonrones de por vida en la LVBP venezolana?",
    options: [
      "Alex Cabrera",
      "Luis Landaeta",
      "Eliézer Alfonzo",
      "Robert Pérez"
    ],
    correctAnswer: 2,
    explanation: "Eliézer 'El Matador' Alfonzo es el líder histórico de cuadrangulares en la LVBP con 138 vuelacercas, superando los 125 jonrones del legendario Robert Pérez."
  },
  {
    id: "q-8",
    question: "¿Qué pelotero criollo consiguió la mítica hazaña de ganar la TRIPLE CORONA de bateo en las Grandes Ligas en el siglo XXI?",
    options: [
      "José Altuve",
      "Bob Abreu",
      "Ronald Acuña Jr.",
      "Miguel Cabrera"
    ],
    correctAnswer: 3,
    explanation: "Miguel Cabrera se inmortalizó en el año 2012 con los Tigres de Detroit al ganar la Triple Corona de Bateo de la Liga Americana (.330 AVG, 44 HR, 139 RBI), una hazaña colectiva ofensiva que no ocurría desde 1967."
  }
];

export const INITIAL_FORUM_POSTS: ForumPost[] = [
  {
    id: "post-best-active",
    title: "¿Quién es el mejor jugador venezolano en la actualidad en la MLB?",
    category: "MLB",
    content: "¡Se abre el gran debate nacional! Con una camada increíble de talento criollo activo en las Grandes Ligas, ¿quién es el número uno hoy en día? ¿El histórico astro José Altuve manteniendo su consistencia legendaria con Houston? ¿La superestrella Ronald Acuña Jr. tras su histórico hito 40-70 y buscando recuperar su trono MVP? ¿O el sensacional receptor de los Cerveceros William Contreras? ¿Quizás la regadera Luis Arráez coleccionando coronas de bateo históricas con múltiples franquicias? ¿O Anthony Santander y su espectacular poder jonronero? ¡Comenten con argumentos, números y pasión!",
    author: "ArepaBower2026",
    date: "2026-05-23",
    upvotes: 42,
    comments: [
      {
        id: "c-best-1",
        author: "AstroBoyTuPapa",
        content: "Para mí sigue siendo José Altuve. Lleva una década rindiendo al máximo nivel en postemporada y playoffs, liderando la ofensiva de Houston. Su consistencia juego tras juego lo hace insustituible.",
        date: "2026-05-23"
      },
      {
        id: "c-best-2",
        author: "LaSabanaSamba",
        content: "Sin lesiones, Ronald Acuña Jr. es el jugador más electrizante del planeta completo. Un verdadero 5 herramientas que asusta cuando entra a la caja de bateo o roba una almohadilla. ¡La Bestia regresará más fuerte!",
        date: "2026-05-23"
      },
      {
        id: "c-best-3",
        author: "RegaderaDeSanFelipe",
        content: "No dejen por fuera a Luis Arráez. Ganar tres títulos de bateo seguidos en tres franquicias distintas (Mellizos, Marlins y Padres) es algo que no se veía desde la era del béisbol vintage. ¡Contacto puro al estilo manito de seda!",
        date: "2026-05-23"
      },
      {
        id: "c-best-4",
        author: "WillyContraFans",
        content: "Ojo con William Contreras. Se ha convertido en el mejor receptor ofensivo y defensivo de la Liga Nacional y pieza fundamental del éxito de Milwuakee.",
        date: "2026-05-23"
      }
    ]
  },
  {
    id: "post-1",
    title: "¿Es Miguel Cabrera el atleta más importante en la historia de Venezuela?",
    category: "General",
    content: "Con su Triple Corona, sus más de 3,000 hits, 500+ jonrones y su corona de Serie Mundial, Miguel Cabrera marcó una era. ¿Consideran que supera el legado histórico de figuras como Luis Aparicio o atletas de otras disciplinas? ¡Abro debate!",
    author: "PelotaCaliente45",
    date: "2026-05-22",
    upvotes: 18,
    comments: [
      {
        id: "c-11",
        author: "FanaticoCaracas",
        content: "Sin duda numéricamente es el más grande. Sin embargo, no podemos olvidar la barrera que rompió Luis Aparicio al conseguir la entrada al Salón de la Fama. Ambos son titanes.",
        date: "2026-05-22"
      },
      {
        id: "c-12",
        author: "ZuliaBaseball",
        content: "Correcto, Aparicio puso a Venezuela en el mapa de Cooperstown en una época muy difícil. Pero en cuanto a impacto de bateo puro, Cabrera está a la altura de los mejores bateadores de toda la historia mundial, no solo de Venezuela.",
        date: "2026-05-23"
      }
    ]
  },
  {
    id: "post-2",
    title: "¿Cuál ha sido la mejor importación en la historia de la LVBP?",
    category: "LVBP",
    content: "Quiero recordar a esos jugadores extranjeros que vinieron a dejar la vida en Venezuela. Para mí, el estadounidense Harold Baines o el increíble pitcheo de Mitchell Page en su momento con el Magallanes. ¿Cuál es su favorito de todos los tiempos?",
    author: "MagallaneroMio",
    date: "2026-05-21",
    upvotes: 12,
    comments: [
      {
        id: "c-21",
        author: "CardenalEterno",
        content: "Recordemos a Cecil Fielder fletando cuadrangulares kilométricos con Lara en los 80, o a Tom Grieve. Realmente la LVBP era un torneo de un nivel altísimo.",
        date: "2026-05-21"
      }
    ]
  },
  {
    id: "post-3",
    title: "La dinastía de los Yankees y el Murderers' Row contra los equipos modernos",
    category: "MLB",
    content: "Analizando las métricas modernas, el pitcheo actual de rectas a 100 mph es muy diferente. Si trasladáramos el lineup de los Yankees de 1927 con Babe Ruth y Lou Gehrig a la actualidad, ¿creen que tendrían el mismo éxito o les costaría por la velocidad y rotación de lanzamientos?",
    author: "Sabermetrico99",
    date: "2026-05-20",
    upvotes: 9,
    comments: [
      {
        id: "c-31",
        author: "BabeRuthFan",
        content: "El talento natural se adapta. Si Babe Ruth tuviera la nutrición y tecnología de acondicionamiento de hoy en día, seguro seguiría conectando jonrones descomunales.",
        date: "2026-05-20"
      }
    ]
  },
  {
    id: "post-4",
    title: "La mística de la Samba de La Guaira: ¿La mejor tribuna del Caribe?",
    category: "Equipos",
    content: "El ambiente criollo que le imprime la Samba en el estadio Universitario u Jorge Luis García Carneiro es único. Opino que eleva el estado de ánimo de los Tiburones y deprime al rival. ¿Qué opinan de esta sazón caribeña en nuestro juego dominical?",
    author: "LaSambaSuena",
    date: "2026-05-19",
    upvotes: 15,
    comments: [
      {
        id: "c-41",
        author: "Antisamba_01",
        content: "Como rival es estresante, pero debo admitir que le da un colorido espectacular que no verás jamás en los estadios de EE.UU. Es patrimonio de nuestra pelota caribeña.",
        date: "2026-05-20"
      }
    ]
  }
];

export const SIMULATED_GAMES: DailyGame[] = [
  {
    id: "game-1",
    teamHome: "Leones del Caracas",
    teamAway: "Navegantes del Magallanes",
    shortHome: "CAR",
    shortAway: "MAG",
    runsHome: 5,
    runsAway: 4,
    hitsHome: 9,
    hitsAway: 11,
    errorsHome: 0,
    errorsAway: 1,
    status: "live",
    inning: "9na Baja",
    currentPlay: "Corredor en 2da base. 2 outs. Batea Harold Castro con cuenta de 2-2. ¡Magallanes busca el extrainning!",
    league: "LVBP",
    time: "En curso (Clásico de la LVBP)"
  },
  {
    id: "game-2",
    teamHome: "Tiburones de La Guaira",
    teamAway: "Cardenales de Lara",
    shortHome: "LAG",
    shortAway: "LAR",
    runsHome: 6,
    runsAway: 2,
    hitsHome: 10,
    hitsAway: 5,
    errorsHome: 1,
    errorsAway: 0,
    status: "finished",
    inning: "Final",
    currentPlay: "Juego Finalizado. Victoria para La Guaira con enorme relevo final de Arnaldo Hernández y cuadrangular clave de Yasiel Puig.",
    league: "LVBP",
    time: "Finalizado"
  },
  {
    id: "game-3",
    teamHome: "Tigres de Aragua",
    teamAway: "Águilas del Zulia",
    shortHome: "ARA",
    shortAway: "ZUL",
    runsHome: 0,
    runsAway: 0,
    hitsHome: 0,
    hitsAway: 0,
    errorsHome: 0,
    errorsAway: 0,
    status: "scheduled",
    inning: "7:00 PM",
    currentPlay: "Abren los lanzadores anunciados: Guillermo Moscoso (Tigres) vs Wilson Álvarez Jr. (Águilas).",
    league: "LVBP",
    time: "Hoy 7:00 PM"
  },
  {
    id: "game-4",
    teamHome: "New York Yankees",
    teamAway: "Boston Red Sox",
    shortHome: "NYY",
    shortAway: "BOS",
    runsHome: 3,
    runsAway: 2,
    hitsHome: 6,
    hitsAway: 7,
    errorsHome: 0,
    errorsAway: 0,
    status: "live",
    inning: "7ma Alta",
    currentPlay: "Sin corredores en base. 1 out. Aaron Judge fildendo un elevado de rutina en el jardín derecho.",
    league: "MLB",
    time: "En curso"
  },
  {
    id: "game-5",
    teamHome: "Los Angeles Dodgers",
    teamAway: "San Diego Padres",
    shortHome: "LAD",
    shortAway: "SDP",
    runsHome: 8,
    runsAway: 4,
    hitsHome: 12,
    hitsAway: 9,
    errorsHome: 1,
    errorsAway: 1,
    status: "finished",
    inning: "Final",
    currentPlay: "Shohei Ohtani conectó 2 dobles y 1 cuadrangular solitario para guiar la ofensiva de los Dodgers.",
    league: "MLB",
    time: "Finalizado"
  }
];

export const VENEZUELAN_MLB_LEGENDS: MLBLegend[] = [
  {
    id: "leg-miggy",
    name: "Miguel Cabrera",
    nickname: "El Orgullo de Maracay / Miggy",
    yearsActive: "2003 - 2023",
    positions: "Primera Base / Tercera Base",
    achievements: [
      "Ganador de la Triple Corona de Bateo (2012) - Primera en 45 años",
      "2 veces Jugador Más Valioso (MVP) de la Liga Americana (2012, 2013)",
      "4 veces Campeón de Bateo de la Liga Americana (.344, .330, .348, .338)",
      "12 veces All-Star",
      "Club exclusivo de 3,000 Hits y 500 Home Runs (Solo 7 jugadores en la historia)",
      "Campeón de Serie Mundial (2003) con los Florida Marlins"
    ],
    careerHighlights: "Completó una de las carreras ofensivas más perfectas de todos los tiempos. En 2012, paralizó al mundo al comandar los departamentos de promedio (.330), jonrones (44) y carreras impulsadas (139), logrando la primera Triple Corona desde Carl Yastrzemski en 1967. Se retiró como héroe nacional con 511 jonrones de por vida y 3,174 hits.",
    milestoneText: "El bateador más completo y temido nacido en tierra venezolana de todos los tiempos."
  },
  {
    id: "leg-aparicio",
    name: "Luis Aparicio",
    nickname: "El Eterno Hall of Fame / El Grande de Zulia",
    yearsActive: "1956 - 1973",
    positions: "Campocorto (Shortstop)",
    achievements: [
      "Exaltado al Salón de la Fama de Cooperstown (1984) - Único venezolano",
      "9 veces ganador del Guante de Oro por su excelencia defensiva",
      "Novato del Año de la Liga Americana (1956)",
      "Líder en bases robadas por 9 temporadas consecutivas",
      "13 veces seleccionado al Juego de Estrellas",
      "Campeón de Serie Mundial (1966) con Baltimore Orioles"
    ],
    careerHighlights: "Redefinió el rol del campocorto defensivo y revivió el arte del robo de bases en la Era Moderna del Béisbol. Su velocidad electrizante y fildeo acrobático dominaron las ligas por casi dos décadas. Hasta hoy, es la máxima deidad del béisbol venezolano en lo más alto del Salón de la Fama.",
    milestoneText: "El pionero indiscutible que abrió las puertas de las Grandes Ligas al talento criollo."
  },
  {
    id: "leg-santana",
    name: "Johan Santana",
    nickname: "El Gocho",
    yearsActive: "2000 - 2012",
    positions: "Lanzador Abridor zurdo (LHP)",
    achievements: [
      "2 veces ganador unánime del Premio Cy Young AL (2004, 2006)",
      "Triple Corona de Pitcheo en la Liga Americana (2006)",
      "Lanza el primer juego Sin Hits ni Carreras (No-Hitter) en la historia de los NY Mets (2012)",
      "4 veces All-Star y 3 títulos de efectividad (ERA)",
      "Guante de Oro al mejor lanzador defensivo (2007)"
    ],
    careerHighlights: "Durante su apogeo con los Mellizos de Minnesota, poseía el cambio de velocidad (changeup) más devastador e impredecible del juego entero. Su temporada 2006 fue antológica: 19 victorias, 2.77 de efectividad y 245 ponches. Su hazaña del No-Hitter de 2012 con los Mets quedó grabada como un testamento a su indomable coraje físico.",
    milestoneText: "El serpentinero zurdo venezolano más imponente y dominador de la historia."
  },
  {
    id: "leg-vizquel",
    name: "Omar Vizquel",
    nickname: "Manos de Seda / Kike",
    yearsActive: "1989 - 2012",
    positions: "Campocorto (Shortstop)",
    achievements: [
      "11 veces ganador del Guante de Oro como Shortstop (9 en la Americana, 2 en la Nacional)",
      "Porcentaje de fildeo histórico de por vida más alto para campocortos (.985)",
      "Más doble plays realizados por un campocorto defensivo en la historia (1,734)",
      "3 veces All-Star",
      "2,877 hits acumulados, la mayor cantidad para un shortstop venezolano"
    ],
    careerHighlights: "Hizo de la defensa un ballet artístico. Sus atrapadas a mano limpia con los Cleveland Indians dominaron los programas deportivos de los noventas convirtiéndolo en un ícono global del fildeo suave e ingenioso. Jugó béisbol al máximo nivel hasta los 45 años de edad.",
    milestoneText: "Reconocido mundialmente como de los mejores campocortos defensivos en la historia del deporte."
  },
  {
    id: "leg-felix",
    name: "Félix Hernández",
    nickname: "El Rey Félix",
    yearsActive: "2005 - 2019",
    positions: "Lanzador Abridor derecho (RHP)",
    achievements: [
      "Ganador del Premio Cy Young de la Liga Americana (2010)",
      "Lanzó el 23° Juego Perfecto en la historia del béisbol de Grandes Ligas (15 de Agosto, 2012)",
      "2 veces líder en Efectividad (ERA) de la Liga Americana (2.49 en 2009, 2.14 en 2014)",
      "6 veces seleccionado al Juego de Estrellas",
      "Más ponches (2,524) y más victorias (169) para un lanzador de Seattle Mariners"
    ],
    careerHighlights: "El ídolo intocable de Seattle. El 15 de agosto de 2012 ante Tampa Bay, completó una joya monticular perfecta: 27 bateadores retirados en orden, con 12 ponches, desatando la locura en la 'Corte del Rey' (su sección exclusiva de fanáticos en el estadio con camisetas amarillas).",
    milestoneText: "Su imponente recta de dedos separados (sinker) y temple lo erigieron como realeza de la lomita."
  },
  {
    id: "leg-acuna",
    name: "Ronald Acuña Jr.",
    nickname: "El Abusador",
    yearsActive: "2018 - Presente",
    positions: "Jardinero Derecho (Outfielder)",
    achievements: [
      "Premio al Jugador Más Valioso (MVP) de la Liga Nacional (2023)",
      "Creador único del club 40-70: 41 jonrones y 73 bases robadas en 2023",
      "Novato del Año de la Liga Nacional (2018)",
      "4 veces seleccionado All-Star",
      "3 Bates de Plata consecutivos",
      "Campeón de la Serie Mundial con Atlanta Braves"
    ],
    careerHighlights: "Representa el poder moderno y el ritmo vertiginoso del béisbol actual. Su campaña de 2023 destrozó los manuales históricos al combinar 41 bambinazos de vuelta completa con un asombroso registro de 73 bases estafadas, ganando el MVP de manera unánime con su característico juego energético.",
    milestoneText: "El rostro del béisbol moderno de Grandes Ligas y representante de la nueva dinastía criolla."
  },
  {
    id: "leg-paton",
    name: "Alejandro Carrasquel",
    nickname: "El Patón",
    yearsActive: "1939 - 1949",
    positions: "Lanzador relevista y abridor (RHP)",
    achievements: [
      "Primer jugador nacido en Venezuela en debutar en las Grandes Ligas (23 de abril de 1939)",
      "Jugó 8 temporadas con los senadores de Washington y Medias Blancas de Chicago",
      "252 juegos oficiales, 50 victorias totales"
    ],
    careerHighlights: "El pionero que inició la travesía. Enfrentó los prejuicios de la época y demostró la calidad del lanzador venezolano, abriendo el camino para la dinastía de los Carrasquel (su sobrino 'Chico' Carrasquel sería leyenda de las paradas cortas) y todas las camadas subsecuentes.",
    milestoneText: "La semilla inicial de toda la historia dorada venezolana en el Big Show."
  }
];

export const PROSPECTS: Prospect[] = [
  {
    id: "prop-chourio",
    name: "Jackson Chourio",
    teamMLB: "Milwaukee Brewers",
    lvlTripleA: "Graduado de Triple-A (Novato MLB)",
    teamLVBP: "Águilas del Zulia 🦅",
    position: "Jardinero (OF)",
    age: 20,
    overallGrade: 75,
    scoutingGrades: {
      contact: 65,
      power: 70,
      speed: 80,
      defense: 65,
      arm: 60
    },
    scoutingReport: "Chourio es un talento generacional de 'cinco herramientas' con una velocidad de élite calificada con 80 puntos en la escala de scouting. Su capacidad para generar poder con un swing compacto entusiasma a los expertos. Se asemeja al ascenso temprano de Ronald Acuña Jr. y ya está dejando su huella indiscutible en las Mayores tras ser el jugador más joven en firmar un contrato récord a largo plazo antes de debutar.",
    statsCurrentYear: {
      games: 145,
      avg: 0.275,
      hr: 21,
      ops: 0.812,
      sb: 22
    },
    projArrivalYear: 2024,
    highlights: "Primer novato de 20 años o menos en registrar una temporada de 20+ jonrones y 20+ bases robadas en la historia de la MLB."
  },
  {
    id: "prop-salas",
    name: "Ethan Salas",
    teamMLB: "San Diego Padres",
    lvlTripleA: "Acelerado (Doble-A / Triple-A Track)",
    teamLVBP: "Águilas del Zulia 🦅",
    position: "Receptor (C)",
    age: 19,
    overallGrade: 70,
    scoutingGrades: {
      contact: 60,
      power: 65,
      speed: 50,
      defense: 75,
      arm: 70
    },
    scoutingReport: "El prospecto número uno de la receptoría en todo el béisbol. Sorprendió al mundo al jugar beisbol profesional a los 17 años y ascender velozmente por las fincas de los Padres. Su madurez detrás del plato, el encuadre de lanzamientos (framing) y su extraordinario brazo de fusil son calificados por scouts como de calibre de Grandes Ligas hoy en día. Ofensivamente tiene el potencial de conectar 25 jonrones anuales con un promedio saludable.",
    statsCurrentYear: {
      games: 98,
      avg: 0.245,
      hr: 12,
      ops: 0.748,
      sb: 5
    },
    projArrivalYear: 2027,
    highlights: "Llegó al campamento de primavera de las mayores con la madurez mental de un veterano de diez años."
  },
  {
    id: "prop-acuna",
    name: "Luisangel Acuña",
    teamMLB: "New York Mets",
    lvlTripleA: "Syracuse Mets (Triple-A / MLB)",
    teamLVBP: "Cardenales de Lara 🪶",
    position: "Segunda Base / Campocorto (2B/SS)",
    age: 22,
    overallGrade: 60,
    scoutingGrades: {
      contact: 55,
      power: 45,
      speed: 75,
      defense: 60,
      arm: 55
    },
    scoutingReport: "Hermano menor de Ronald Acuña Jr., comparte el dinámico estilo de juego eléctrico que tanto entusiasma. Su mayor virtud es la velocidad excelsa sobre las bases y un guante pulido que le permite jugar segunda base y campocorto con un rango de cobertura fenomenal. Su poder es moderado pero genera líneas consistentes a todos los callejones.",
    statsCurrentYear: {
      games: 112,
      avg: 0.268,
      hr: 8,
      ops: 0.725,
      sb: 37
    },
    projArrivalYear: 2024,
    highlights: "Llamado a las Grandes Ligas por los Mets en Septiembre, bateando .308 en sus primeros turnos de impacto."
  },
  {
    id: "prop-quero",
    name: "Jefferson Quero",
    teamMLB: "Milwaukee Brewers",
    lvlTripleA: "Nashville Sounds (Triple-A)",
    teamLVBP: "Cardenales de Lara 🪶",
    position: "Receptor (C)",
    age: 21,
    overallGrade: 65,
    scoutingGrades: {
      contact: 55,
      power: 55,
      speed: 40,
      defense: 75,
      arm: 75
    },
    scoutingReport: "Receptor netamente defensivo de nivel superlativo. Su tiempo de transferencia y potente y preciso brazo bloquean complemente el juego de carrera oponente. No obstante su excelsa defensa, también ha desarrollado notable poder en su swing de derecha durante su paso por Triple-A, perfilándose como el receptor de dos vías del futuro de Milwaukee junto a William Contreras.",
    statsCurrentYear: {
      games: 85,
      avg: 0.272,
      hr: 15,
      ops: 0.795,
      sb: 2
    },
    projArrivalYear: 2025,
    highlights: "Guante de Oro en las ligas menores y tasa del 38% de corredores retirados en intento de robo."
  },
  {
    id: "prop-chaparro",
    name: "Andrés Chaparro",
    teamMLB: "Arizona Diamondbacks",
    lvlTripleA: "Reno Aces (Triple-A)",
    teamLVBP: "Águilas del Zulia 🦅",
    position: "Tercera Base / 1B (3B/1B)",
    age: 25,
    overallGrade: 55,
    scoutingGrades: {
      contact: 50,
      power: 65,
      speed: 35,
      defense: 45,
      arm: 55
    },
    scoutingReport: "Bateador de esquinas con un poder de impacto tremendo. Destrozó el pitcheo de la Costa del Pacífico en Triple-A con conexiones de velocidades de salida mayores a las 115 mph. Se destaca por un excelente reconocimiento de la zona de strike y una disciplina para conseguir bases por bolas de calidad.",
    statsCurrentYear: {
      games: 110,
      avg: 0.284,
      hr: 23,
      ops: 0.885,
      sb: 3
    },
    projArrivalYear: 2024,
    highlights: "Uno de los principales remolcadores criollos en los niveles altos de sucursales norteamericanas."
  },
  {
    id: "prop-gomez",
    name: "Moises Gómez",
    teamMLB: "St. Louis Cardinals",
    lvlTripleA: "Memphis Redbirds (Triple-A)",
    teamLVBP: "Navegantes del Magallanes ⚓",
    position: "Jardinero (OF)",
    age: 25,
    overallGrade: 55,
    scoutingGrades: {
      contact: 40,
      power: 70,
      speed: 45,
      defense: 50,
      arm: 55
    },
    scoutingReport: "Moises posee una de las fuerzas de muñeca más puras del béisbol profesional. Lideró todas las ligas menores en cuadrangulares hace temporadas y continúa amedrentando lanzadores en Triple-A. Aunque su nivel de ponches sigue siendo elevado (lo cual reduce su grado de contacto), su poder bruto calificado en 70 es capaz de sacar la bola en cualquier parque de Grandes Ligas.",
    statsCurrentYear: {
      games: 104,
      avg: 0.252,
      hr: 28,
      ops: 0.810,
      sb: 5
    },
    projArrivalYear: 2025,
    highlights: "Líder histórico de cuadrangulares de liga menor en un solo año de la franquicia de San Luis."
  },
  {
    id: "prop-tovar",
    name: "Ezequiel Tovar",
    teamMLB: "Colorado Rockies",
    lvlTripleA: "Graduado (Estelar de la MLB)",
    teamLVBP: "Tiburones de La Guaira 🦈",
    position: "Campocorto (SS)",
    age: 22,
    overallGrade: 65,
    scoutingGrades: {
      contact: 55,
      power: 50,
      speed: 65,
      defense: 75,
      arm: 70
    },
    scoutingReport: "Definitivamente un mago defensivo de la más fina escuela venezolana de torpederos (Vizquel, Aparicio). Su juego de pies y rango lateral lo hicieron el campocorto más joven en arrancar el Día Inaugural en Coors Field. Adicionalmente, ha agregado suficiente poder para sostenerse en la alineación titular como un productor de élite de doble vía.",
    statsCurrentYear: {
      games: 153,
      avg: 0.265,
      hr: 25,
      ops: 0.745,
      sb: 11
    },
    projArrivalYear: 2023,
    highlights: "Finalista al Guante de Oro de la LN en su primer año completo de novato en las Grandes Ligas."
  }
];


