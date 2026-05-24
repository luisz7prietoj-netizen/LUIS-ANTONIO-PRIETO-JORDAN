import React, { useState, useEffect } from 'react';
import {
  Trophy,
  Users,
  Flame,
  Calendar,
  Bell,
  Award,
  MessageSquare,
  Plus,
  Search,
  ThumbsUp,
  CheckCircle2,
  MapPin,
  RotateCcw,
  HelpCircle,
  History,
  Sparkles,
  BookOpen,
  Heart,
  Tv,
  Activity,
  ChevronRight,
  TrendingUp,
  AlertCircle,
  Clock,
  Send,
  Star,
  Play,
  Pause,
  Sliders,
  ChevronLeft,
  Image as ImageIcon,
  Copy,
  Check
} from 'lucide-react';

import {
  Comment,
  ForumPost,
  TriviaQuestion,
  LegendaryTeam,
  LVBPTeamStats,
  LVBPLegendaryRecord,
  DailyGame,
  NotificationItem,
  MLBLegend,
  Prospect
} from './types';

import {
  BASEBALL_FUNDAMENTALS,
  BASEBALL_HISTORY,
  LEGENDARY_TEAMS,
  LVBP_HISTORY,
  LVBP_TEAMS,
  LVBP_RECORDS,
  TRIVIA_QUESTIONS,
  INITIAL_FORUM_POSTS,
  SIMULATED_GAMES,
  VENEZUELAN_MLB_LEGENDS,
  PROSPECTS
} from './data/baseballData';

// Mapping of public high-quality baseball/stadium images to represent each LVBP team's identity & background colors
const TEAM_COVER_IMAGES: { [key: string]: string } = {
  leones: "https://images.unsplash.com/photo-1544045564-148004cd40f4?q=80&w=600&auto=format&fit=crop", // Elegant baseball stadium field lights (Caracas green/navy atmosphere)
  magallanes: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop", // Twilight stadium lights (Valencia navy)
  tigres: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=600&auto=format&fit=crop", // Leather baseball stitches and mitt (Aragua Red/Black themes)
  tiburones: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=600&auto=format&fit=crop", // Shining stadium over clear night (La Guaira blue samba)
  cardenales: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=600&auto=format&fit=crop", // Red baseball retro textures (Lara Red bird theme)
  aguilas: "https://images.unsplash.com/photo-1562074244-31771720636d?q=80&w=600&auto=format&fit=crop", // Premium baseball glove and bat detail (Zulia orange/black)
  caribes: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=600&auto=format&fit=crop", // Warm sunburst sunset sports stadium (Anzoátegui orange/blue)
  bravos: "https://images.unsplash.com/photo-1471295263379-6af76d62b947?q=80&w=600&auto=format&fit=crop" // Beautiful wide floodlit stadium outline (Margarita beach/slate vibe)
};

// Mapping of premium background images representing MLB stadium atmospheres or legendary icons for each legend
const LEGEND_COVER_IMAGES: { [key: string]: string } = {
  "leg-miggy": "https://images.unsplash.com/photo-1544045564-148004cd40f4?q=80&w=600&auto=format&fit=crop", // Stadium outfield under starry lights
  "leg-aparicio": "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=600&auto=format&fit=crop", // Vintage baseball leather tones
  "leg-santana": "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=600&auto=format&fit=crop", // Dynamic pitcher mount lights view
  "leg-vizquel": "https://images.unsplash.com/photo-1562074244-31771720636d?q=80&w=600&auto=format&fit=crop", // Close-up on dynamic leather fielding glove for "Manos de Seda"
  "leg-felix": "https://images.unsplash.com/photo-1471295263379-6af76d62b947?q=80&w=600&auto=format&fit=crop", // Perfect game dramatic night floodlights
  "leg-acuna": "https://images.unsplash.com/photo-1601058268499-e52658bdf943?q=80&w=600&auto=format&fit=crop", // Dynamic homeplate baseball waiting for launch (40-70 raw power)
  "leg-paton": "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=600&auto=format&fit=crop" // Retro style baseball background
};

// Mapping of official-style portrait photos for each legend from public Wikimedia Commons assets (safe for reference)
const LEGEND_PORTRAITS: { [key: string]: string } = {
  "leg-miggy": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Miguel_Cabrera_2021.jpg",
  "leg-aparicio": "https://upload.wikimedia.org/wikipedia/commons/2/23/Luis_Aparicio_1961.jpg",
  "leg-santana": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Johan_Santana_on_August_2%2C_2008.jpg",
  "leg-vizquel": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Omar_Vizquel_on_May_1%2C_2009.jpg",
  "leg-felix": "https://upload.wikimedia.org/wikipedia/commons/0/02/F%C3%A9lix_Hern%C3%A1ndez_pitching_in_2011.jpg",
  "leg-acuna": "https://upload.wikimedia.org/wikipedia/commons/8/87/Ronald_Acu%C3%B1a_Jr._%2848128911516%29.jpg",
  "leg-paton": "https://upload.wikimedia.org/wikipedia/commons/d/df/Alex_Carrasquel_Senators_cropped.jpg"
};

// Premium stadium wallpaper backgrounds representing MLB & LVBP Venezuelan teams
const WALLPAPERS = [
  {
    id: 'stadium-classic',
    name: 'Estadio Monumental de Caracas 🦁',
    league: 'LVBP',
    team: 'Leones del Caracas',
    stadium: 'Estadio Monumental de Caracas "Simón Bolívar" (La Rinconada)',
    description: 'La joya arquitectónica del béisbol latinoamericano. Con capacidad para casi 40,000 fanáticos, el Monumental cobija el rugido de la histórica fanaticada de los Leones del Caracas.',
    url: 'https://images.unsplash.com/photo-1544045564-148004cd40f4?q=80&w=1920&auto=format&fit=crop',
    color: '#004a2f'
  },
  {
    id: 'valencia-stadium',
    name: 'Estadio José Bernardo Pérez ⚓',
    league: 'LVBP',
    team: 'Navegantes del Magallanes',
    stadium: 'Estadio José Bernardo Pérez (Valencia)',
    description: 'Bajo el crepúsculo carabobeño, la nave turca despliega su artillería en un estadio vibrante donde se vive la máxima rivalidad del Caribe con pasión electrizante.',
    url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1920&auto=format&fit=crop',
    color: '#0d2240'
  },
  {
    id: 'tiburones-stadium',
    name: 'Estadio Jorge Luis García Carneiro 🦈',
    league: 'LVBP',
    team: 'Tiburones de La Guaira',
    stadium: 'Estadio Jorge Luis García Carneiro (El Pavero, Macuto)',
    description: 'Ubicado a las orillas mismas del mar caribe, donde la brisa marina acompaña los cuadrangulares y la espectacular samba de la fanaticada guaireña.',
    url: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1920&auto=format&fit=crop',
    color: '#007799'
  },
  {
    id: 'lara-stadium',
    name: 'Estadio Antonio Herrera Gutiérrez 🪶',
    league: 'LVBP',
    team: 'Cardenales de Lara',
    stadium: 'Estadio Antonio Herrera Gutiérrez (Barquisimeto)',
    description: 'La casa de los pájaros rojos resplandece bajo el cielo crepuscular más hermoso de Venezuela. Sede de un equipo batallador repleto de talento y tradición.',
    url: 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=1920&auto=format&fit=crop',
    color: '#9b1c1c'
  },
  {
    id: 'tigres-stadium',
    name: 'Estadio José Pérez Colmenares 🐯',
    league: 'LVBP',
    team: 'Tigres de Aragua',
    stadium: 'Estadio José Pérez Colmenares (Maracay)',
    description: 'La cuna del histórico Miguel Cabrera y la gloriosa dinastía de los Tigres de Aragua bajo la dirección de Buddy Bailey. Un nido de campeones y garra tigrera.',
    url: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=1920&auto=format&fit=crop',
    color: '#dd6b20'
  },
  {
    id: 'aguilas-stadium',
    name: 'Estadio Luis Aparicio "El Grande" 🦅',
    league: 'LVBP',
    team: 'Águilas del Zulia',
    stadium: 'Estadio Luis Aparicio "El Grande" (Maracaibo)',
    description: 'Nombrado en honor al único salón de la fama venezolano en las mayores. La fiebre naranja ruge con fuerza al ritmo de la gaita zuliana y bajo el calor de Maracaibo.',
    url: 'https://images.unsplash.com/photo-1562074244-31771720636d?q=80&w=1920&auto=format&fit=crop',
    color: '#2d3748'
  },
  {
    id: 'caribes-stadium',
    name: 'Estadio Alfonso "Chico" Carrasquel 🏹',
    league: 'LVBP',
    team: 'Caribes de Anzoátegui',
    stadium: 'Estadio Alfonso "Chico" Carrasquel (Puerto La Cruz)',
    description: 'Famoso como "La Choza de la Tribu". Un parque caliente donde se vive el fragor de remontadas memorables junto al cálido caribe oriental.',
    url: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1920&auto=format&fit=crop',
    color: '#c2410c'
  },
  {
    id: 'bravos-stadium',
    name: 'Estadio Nueva Esparta 🏝️',
    league: 'LVBP',
    team: 'Bravos de Margarita',
    stadium: 'Estadio Nueva Esparta (Guatamare)',
    description: 'Templo de la pelota insular rodeado por los cerros verdes de Margarita. La fanaticada celebra con sabor caribeño en la hermosa perla del Caribe.',
    url: 'https://images.unsplash.com/photo-1471295263379-6af76d62b947?q=80&w=1920&auto=format&fit=crop',
    color: '#334155'
  },
  {
    id: 'yankees-stadium',
    name: 'Yankee Stadium 🗽',
    league: 'MLB',
    team: 'New York Yankees',
    stadium: 'Yankee Stadium (El Bronx, Nueva York)',
    description: 'La catedral de los bombardeos del Bronx. En las vitrinas reposan 27 series mundiales, el monumento de leyendas y la huella de peloteros venezolanos como Gleyber Torres.',
    url: 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=1920&auto=format&fit=crop',
    color: '#0c2340'
  },
  {
    id: 'dodgers-stadium',
    name: 'Dodger Stadium 🌴',
    league: 'MLB',
    team: 'Los Angeles Dodgers',
    stadium: 'Dodger Stadium (Chavez Ravine, Los Ángeles)',
    description: 'El tercer estadio más antiguo de las Grandes Ligas y uno de los más hermosos de California. Enmarcado por palmeras gigantescas de la costa oeste.',
    url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1920&auto=format&fit=crop',
    color: '#005a9c'
  },
  {
    id: 'redsox-stadium',
    name: 'Fenway Park 🟩',
    league: 'MLB',
    team: 'Boston Red Sox',
    stadium: 'Fenway Park (Boston, Massachusetts)',
    description: 'Hogar del mítico "Green Monster" (el Monstruo Verde). El estadio más antiguo y sagrado de las mayores, cargado de mística centenaria y tradición beisbolera.',
    url: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=1920&auto=format&fit=crop',
    color: '#bd3039'
  },
  {
    id: 'astros-stadium',
    name: 'Minute Maid Park 🚀',
    league: 'MLB',
    team: 'Houston Astros',
    stadium: 'Minute Maid Park (Houston, Texas)',
    description: 'Estadio de techo retráctil moderno con su carismático tren antiguo cargado de naranjas sobre el jardín izquierdo que pita con cada batazo kilométrico de José Altuve.',
    url: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1920&auto=format&fit=crop',
    color: '#eb6e1f'
  }
];

export default function App() {
  // State variables with local storage persistence
  const [activeTab, setActiveTab] = useState<'games' | 'fundamentals' | 'mlb-venezuela' | 'lvbp' | 'forum' | 'trivia' | 'prospects'>('mlb-venezuela');
  
  const [games, setGames] = useState<DailyGame[]>(() => {
    const saved = localStorage.getItem('baseball_games');
    return saved ? JSON.parse(saved) : SIMULATED_GAMES;
  });

  const [notifications, setNotifications] = useState<NotificationItem[]>(() => {
    const saved = localStorage.getItem('baseball_notifications');
    return saved ? JSON.parse(saved) : [
      {
        id: 'init-1',
        title: '¡Bienvenidos al Estadio Virtual!',
        message: 'Explora toda la historia del béisbol, estadísticas de la LVBP y los héroes venezolanos en la MLB.',
        time: 'Hace unos instantes',
        isRead: false
      },
      {
        id: 'init-2',
        title: 'Clásico en Vivo: CAR vs MAG',
        message: 'El eterno rival está disputando un gran duelo en el monumental de La Rinconada.',
        time: 'Hace 5 minutos',
        isRead: false,
        gameId: 'game-1'
      }
    ];
  });

  const [forumPosts, setForumPosts] = useState<ForumPost[]>(() => {
    const saved = localStorage.getItem('baseball_forum_posts');
    if (saved) {
      const parsed: ForumPost[] = JSON.parse(saved);
      // Ensure our new hot debate post about the best active player is merged in if missing
      if (!parsed.some(p => p.id === 'post-best-active')) {
        const newPost = INITIAL_FORUM_POSTS.find(p => p.id === 'post-best-active');
        if (newPost) {
          return [newPost, ...parsed];
        }
      }
      return parsed;
    }
    return INITIAL_FORUM_POSTS;
  });

  // User credentials (simple mock session)
  const [forumAuthor, setForumAuthor] = useState('Fanatico_Criollo');
  
  // Game simulation interval or trigger variables
  const [showNotificationCenter, setShowNotificationCenter] = useState(false);
  const [latestToast, setLatestToast] = useState<string | null>(null);

  // Position selector state for Fundamentals tab
  const [selectedPosition, setSelectedPosition] = useState<string>('1');

  // Selected Venezuelan MLB legend ID
  const [selectedLegendId, setSelectedLegendId] = useState<string>('leg-miggy');

  // Selected LVBP Team ID
  const [selectedLVBPTeamId, setSelectedLVBPTeamId] = useState<string>('leones');

  // Forum States
  const [forumCategoryFilter, setForumCategoryFilter] = useState<'All' | 'MLB' | 'LVBP' | 'General' | 'Equipos'>('All');
  const [forumSearch, setForumSearch] = useState('');
  const [selectedPost, setSelectedPost] = useState<ForumPost | null>(() => {
    return INITIAL_FORUM_POSTS.find(p => p.id === 'post-best-active') || INITIAL_FORUM_POSTS[0] || null;
  });
  const [copiedPostId, setCopiedPostId] = useState<string | null>(null);
  const [newCommentText, setNewCommentText] = useState('');
  const [newCommentAuthor, setNewCommentAuthor] = useState('Pelotero99');
  
  // New Post Creator Modal/Form states
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostCategory, setNewPostCategory] = useState<'MLB' | 'LVBP' | 'General' | 'Equipos'>('General');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostAuthor, setNewPostAuthor] = useState('');

  // Trivia states
  const [triviaAttempts, setTriviaAttempts] = useState<{ [key: string]: number }>({}); // questionId -> selectedOptionIdx
  const [triviaLocked, setTriviaLocked] = useState<{ [key: string]: boolean }>({}); // questionId -> submitted
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [triviaScore, setTriviaScore] = useState(0);
  const [triviaCompleted, setTriviaCompleted] = useState(false);

  // Prospect / Rookie sensations states
  const [selectedProspectId, setSelectedProspectId] = useState<string>('prop-chourio');
  const [compareProspectIdA, setCompareProspectIdA] = useState<string>('prop-chourio');
  const [compareProspectIdB, setCompareProspectIdB] = useState<string>('prop-salas');
  const [customScout, setCustomScout] = useState({
    name: 'Novato Estrella Criolla ⭐',
    contact: 55,
    power: 50,
    speed: 60,
    defense: 55,
    arm: 55,
    lvl: 'Triple-A',
    lvbpTeam: 'Águilas del Zulia 🦅',
    position: 'Jardinero (OF)',
    velocity: 95, // only if pitcher
    control: 50 // only if pitcher
  });
  const [customScoutPositionType, setCustomScoutPositionType] = useState<'batter' | 'pitcher'>('batter');

  const [prospectVotes, setProspectVotes] = useState<{ [key: string]: number }>(() => {
    const saved = localStorage.getItem('baseball_prospect_votes');
    return saved ? JSON.parse(saved) : {
      'prop-chourio': 142,
      'prop-salas': 120,
      'prop-acuna': 85,
      'prop-quero': 64,
      'prop-chaparro': 32,
      'prop-gomez': 40
    };
  });
  const [userVotedProspectId, setUserVotedProspectId] = useState<string | null>(() => {
    return localStorage.getItem('baseball_user_voted_prospect');
  });

  // Persist prospect votes
  useEffect(() => {
    localStorage.setItem('baseball_prospect_votes', JSON.stringify(prospectVotes));
  }, [prospectVotes]);

  useEffect(() => {
    if (userVotedProspectId) {
      localStorage.setItem('baseball_user_voted_prospect', userVotedProspectId);
    } else {
      localStorage.removeItem('baseball_user_voted_prospect');
    }
  }, [userVotedProspectId]);

  // Wallpaper background and presentation slideshow states
  const [selectedWallpaperIdx, setSelectedWallpaperIdx] = useState<number>(0);
  const [isSlideshowActive, setIsSlideshowActive] = useState<boolean>(true); // active slideshow on start for a lively sports arena feel
  const [slideshowIntervalSec, setSlideshowIntervalSec] = useState<number>(7); // every 7 seconds
  const [bgOpacity, setBgOpacity] = useState<number>(0.93); // customized backdrop opacity
  const [showWallpaperPanel, setShowWallpaperPanel] = useState<boolean>(true); // collapsible wallpaper console

  // Slide presentation automatic cycling
  useEffect(() => {
    if (!isSlideshowActive) return;
    const interval = setInterval(() => {
      setSelectedWallpaperIdx(prev => (prev + 1) % WALLPAPERS.length);
    }, slideshowIntervalSec * 1000);
    return () => clearInterval(interval);
  }, [isSlideshowActive, slideshowIntervalSec]);

  // Save to local storage when state shifts
  useEffect(() => {
    localStorage.setItem('baseball_games', JSON.stringify(games));
  }, [games]);

  useEffect(() => {
    localStorage.setItem('baseball_notifications', JSON.stringify(notifications));
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem('baseball_forum_posts', JSON.stringify(forumPosts));
  }, [forumPosts]);

  // Read count of unread notifications
  const unreadCount = notifications.filter(n => !n.isRead).length;

  const handleClearNotifications = () => {
    setNotifications([]);
  };

  const handleMarkAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  // Star game as favorite
  const handleToggleFavoriteGame = (gameId: string) => {
    setGames(prev => prev.map(g => g.id === gameId ? { ...g, isFavorite: !g.isFavorite } : g));
  };

  // Play-by-play action simulator to create alerts or runs
  const handleSimulatePlay = () => {
    // Pick live games: game-1 and game-4 are 'live' in the data
    const liveGames = games.filter(g => g.status === 'live');
    if (liveGames.length === 0) {
      setLatestToast("¡No hay juegos en vivo actualmente! Vuelve a iniciar la simulación.");
      setTimeout(() => setLatestToast(null), 3000);
      return;
    }

    // Select random live game
    const randomGame = liveGames[Math.floor(Math.random() * liveGames.length)];
    
    // Choose exciting baseball actions
    const playsMLB = [
      {
        desc: "¡Cuadrangular solitario de Gleyber Torres por la banda derecha para empujar carrera!",
        runTeam: "Home",
        runVal: 1,
        hitVal: 1,
      },
      {
        desc: "¡Doble play defensivo espectacular por la vía 6-4-3! Termina la amenaza ofensiva.",
        runTeam: "None",
        runVal: 0,
        hitVal: 0,
      },
      {
        desc: "¡Ponche abanicando! El lanzador saca un cero de leyenda con las bases llenas.",
        runTeam: "None",
        runVal: 0,
        hitVal: 0,
      },
      {
        desc: "¡Sencillo impulsor al jardín central! Entra una carrera más para poner presión al juego.",
        runTeam: "Away",
        runVal: 1,
        hitVal: 1,
      }
    ];

    const playsLVBP = [
      {
        desc: "¡Harold Castro conecta un largo batacazo entre los jardines central y derecho impulsando dos carreras!",
        runTeam: "Home",
        runVal: 2,
        hitVal: 1,
      },
      {
        desc: "¡Estalla la samba en las tribunas! Robo audaz de tercera base que termina en out por etiqueta.",
        runTeam: "None",
        runVal: 0,
        hitVal: 0,
      },
      {
        desc: "¡Cuadrangular monumental de Yasiel Puig directo a las gradas izquierdas del Universitario!",
        runTeam: "Home",
        runVal: 1,
        hitVal: 1,
      },
      {
        desc: "¡Sensacional jugada colgada de out de aire en la zona de advertencia del campocorto defensivo!",
        runTeam: "None",
        runVal: 0,
        hitVal: 0,
      }
    ];

    const isLVBP = randomGame.league === 'LVBP';
    const playsPool = isLVBP ? playsLVBP : playsMLB;
    const selectedPlay = playsPool[Math.floor(Math.random() * playsPool.length)];

    // Update game scores and text
    setGames(prev => prev.map(g => {
      if (g.id === randomGame.id) {
        const addedRunsHome = selectedPlay.runTeam === 'Home' ? selectedPlay.runVal : 0;
        const addedRunsAway = selectedPlay.runTeam === 'Away' ? selectedPlay.runVal : 0;
        const addedHitsHome = selectedPlay.runTeam === 'Home' ? selectedPlay.hitVal : 0;
        const addedHitsAway = selectedPlay.runTeam === 'Away' ? selectedPlay.hitVal : 0;
        
        return {
          ...g,
          runsHome: g.runsHome + addedRunsHome,
          runsAway: g.runsAway + addedRunsAway,
          hitsHome: g.hitsHome + addedHitsHome,
          hitsAway: g.hitsAway + addedHitsAway,
          currentPlay: selectedPlay.desc,
          inning: g.inning === "9na Baja" ? "9na Baja (Simulado)" : g.inning
        };
      }
      return g;
    }));

    // Create Notification Alert
    const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const teamAbbrHighlight = `${randomGame.shortAway} ${randomGame.runsAway + (selectedPlay.runTeam === 'Away' ? selectedPlay.runVal : 0)} - ${randomGame.shortHome} ${randomGame.runsHome + (selectedPlay.runTeam === 'Home' ? selectedPlay.runVal : 0)}`;

    const newNotification: NotificationItem = {
      id: `sim-notif-${Date.now()}`,
      title: `¡Jugada Clave en el juego de ${randomGame.league}!`,
      message: `${selectedPlay.desc} (${teamAbbrHighlight})`,
      time: `Hoy ${timeString}`,
      isRead: false,
      gameId: randomGame.id
    };

    setNotifications(prev => [newNotification, ...prev]);
    setLatestToast(`¡ALERTA DE JUEGO! ${selectedPlay.desc}`);
    setTimeout(() => {
      setLatestToast(null);
    }, 4500);
  };

  // Forum Functions
  const handleVotePost = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setForumPosts(prev => prev.map(p => {
      if (p.id === postId) {
        const liked = p.likedBy?.includes('user-session') || false;
        let newLiked = [...(p.likedBy || [])];
        let newUpvotes = p.upvotes;
        if (liked) {
          newLiked = newLiked.filter(id => id !== 'user-session');
          newUpvotes = p.upvotes - 1;
        } else {
          newLiked.push('user-session');
          newUpvotes = p.upvotes + 1;
        }
        return {
          ...p,
          upvotes: newUpvotes,
          likedBy: newLiked
        };
      }
      return p;
    }));
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;
    if (!selectedPost) return;

    const newComment: Comment = {
      id: `comment-${Date.now()}`,
      author: newCommentAuthor.trim() || 'Fanático Anónimo',
      content: newCommentText.trim(),
      date: new Date().toISOString().split('T')[0]
    };

    const updatedPosts = forumPosts.map(p => {
      if (p.id === selectedPost.id) {
        const updatedComments = [...p.comments, newComment];
        return {
          ...p,
          comments: updatedComments
        };
      }
      return p;
    });

    setForumPosts(updatedPosts);
    
    // Update active post view copy
    const activeMatch = updatedPosts.find(p => p.id === selectedPost.id);
    if (activeMatch) {
      setSelectedPost(activeMatch);
    }

    setNewCommentText('');
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostTitle.trim() || !newPostContent.trim()) {
      alert("Por favor rellena el título y el contenido del post.");
      return;
    }

    const newPost: ForumPost = {
      id: `post-${Date.now()}`,
      title: newPostTitle.trim(),
      category: newPostCategory,
      content: newPostContent.trim(),
      author: newPostAuthor.trim() || 'Aficionado_Estrella',
      date: new Date().toISOString().split('T')[0],
      upvotes: 1,
      comments: [],
      likedBy: ['user-session']
    };

    setForumPosts([newPost, ...forumPosts]);
    
    // Clear post data
    setNewPostTitle('');
    setNewPostContent('');
    setShowCreatePost(false);

    // Alert toast
    setLatestToast("¡Tu publicación ha sido creada exitosamente en el foro!");
    setTimeout(() => setLatestToast(null), 3000);
  };

  const handleCopyPostToClipboard = () => {
    if (!selectedPost) return;

    const commentsText = selectedPost.comments.length > 0
      ? selectedPost.comments.map(c => `• @${c.author} (${c.date}): ${c.content}`).join('\n')
      : 'Sin comentarios aún.';

    const textToCopy = `⚾ DEBATE DE BÉISBOL: ${selectedPost.title}
--------------------------------------------------
Categoría: ${selectedPost.category}
Publicado por: @${selectedPost.author} el ${selectedPost.date}

${selectedPost.content}

==================================================
COMENTARIOS (${selectedPost.comments.length}):
${commentsText}
==================================================
Compartido desde la Tribuna de Béisbol Venezolano & MLB App`;

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopiedPostId(selectedPost.id);
        setLatestToast("¡Debate copiado al portapapeles con éxito!");
        setTimeout(() => setLatestToast(null), 3000);
        setTimeout(() => setCopiedPostId(null), 3000);
      })
      .catch(() => {
        setLatestToast("Error al copiar el debate al portapapeles.");
        setTimeout(() => setLatestToast(null), 3000);
      });
  };

  // Trivia Functions
  const handleSelectTriviaOption = (questionId: string, optionIdx: number) => {
    if (triviaLocked[questionId]) return;
    setTriviaAttempts(prev => ({ ...prev, [questionId]: optionIdx }));
  };

  const handleSubmitTriviaAnswer = (questionId: string, correctIdx: number) => {
    if (triviaLocked[questionId]) return;
    if (triviaAttempts[questionId] === undefined) return;

    const selected = triviaAttempts[questionId];
    if (selected === correctIdx) {
      setTriviaScore(prev => prev + 1);
    }

    setTriviaLocked(prev => ({ ...prev, [questionId]: true }));
  };

  const handleResetTrivia = () => {
    setTriviaAttempts({});
    setTriviaLocked({});
    setTriviaScore(0);
    setCurrentQuestionIdx(0);
    setTriviaCompleted(false);
  };

  // Helper variables for data fetching
  const activeLegend = VENEZUELAN_MLB_LEGENDS.find(l => l.id === selectedLegendId) || VENEZUELAN_MLB_LEGENDS[0];
  const activeLVBPTeam = LVBP_TEAMS.find(t => t.id === selectedLVBPTeamId) || LVBP_TEAMS[0];

  const filteredForumPosts = forumPosts.filter(post => {
    const matchesCategory = forumCategoryFilter === 'All' || post.category === forumCategoryFilter;
    const matchesSearch = post.title.toLowerCase().includes(forumSearch.toLowerCase()) || 
                          post.content.toLowerCase().includes(forumSearch.toLowerCase()) ||
                          post.author.toLowerCase().includes(forumSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div 
      className="min-h-screen text-[#1a1a1a] font-sans antialiased selection:bg-[#bf0d3e] selection:text-white relative bg-fixed bg-cover bg-center transition-all duration-1000 ease-in-out" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(248, 249, 250, ${bgOpacity}), rgba(248, 249, 250, ${bgOpacity})), url('${WALLPAPERS[selectedWallpaperIdx]?.url || WALLPAPERS[0].url}')` 
      }}
      id="main-container"
    >
      
      {/* Dynamic Toast Alerter (Play-by-play notification toast) */}
      {latestToast && (
        <div 
          className="fixed bottom-6 right-6 z-50 max-w-md bg-[#041e42] border-b-4 border-[#bf0d3e] shadow-2xl rounded-sm p-4 flex items-start gap-3 space-x-2 animate-bounce animate-duration-1000 text-white"
          id="toast-alert"
        >
          <div className="p-1.5 bg-white/10 rounded-full text-[#bf0d3e] mt-0.5">
            <Flame className="w-5 h-5 animate-pulse text-[#bf0d3e]" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#bf0d3e]">Notificación del Estadio</span>
              <span className="text-[10px] text-slate-300 font-mono">¡Ahora mismo!</span>
            </div>
            <p className="text-sm font-semibold text-white mt-1">{latestToast}</p>
          </div>
        </div>
      )}

      {/* Main App Bar Header */}
      <header className="sticky top-0 z-40 bg-[#041e42] text-white border-b-4 border-[#bf0d3e] shadow-md" id="app-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
              <div className="w-7 h-7 border-2 border-[#041e42] rounded-full flex items-center justify-center font-bold text-xs text-[#041e42]">DH</div>
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold tracking-tight uppercase text-white font-sans">
                Diamante Histórico <span className="text-[#bf0d3e] font-light">LVBP</span>
              </h1>
              <p className="text-[9px] uppercase tracking-widest text-[#bf0d3e] font-bold">
                Historias, Foro e Información General
              </p>
            </div>
          </div>

          {/* Quick Stats Panel Header Widget */}
          <div className="hidden lg:flex items-center gap-4 text-[10px] font-mono bg-[#031732] border border-white/10 rounded-sm px-3 py-1.5" id="quick-stats-widget">
            <span className="text-slate-300">Total MLB: <strong className="text-white">480+ 🇻🇪</strong></span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">Caracas Récord: <strong className="text-white">21 🏆</strong></span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">LVBP: <strong className="text-white">8 Clubes</strong></span>
          </div>

          {/* Right Controls Container */}
          <div className="flex items-center gap-3">
            {/* Simulation action button */}
            <button
              onClick={handleSimulatePlay}
              className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest bg-[#bf0d3e] hover:bg-[#a00a33] text-white rounded-sm px-3.5 py-2 transition-all active:scale-95 shadow-sm cursor-pointer"
              title="Simula un bateo, cuadrangular o out del partido en vivo"
              id="simulate-play-btn"
            >
              <Activity className="w-3.5 h-3.5 animate-pulse text-white" />
              <span>Lanzamiento en Vivo</span>
            </button>

            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setShowNotificationCenter(!showNotificationCenter)}
                className="p-2 text-slate-300 hover:text-white bg-[#031732] hover:bg-[#021124] border border-white/10 rounded-sm transition-colors relative cursor-pointer"
                id="bell-icon-btn"
                aria-label="Resultados y alertas"
              >
                <Bell className={`w-4 h-4 ${unreadCount > 0 ? "animate-swing origin-top" : ""}`} />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 block h-4 w-4 rounded-full ring-2 ring-[#041e42] bg-[#bf0d3e] text-[9px] font-bold text-white flex items-center justify-center font-sans">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notification dropdown popover */}
              {showNotificationCenter && (
                <div 
                  className="absolute right-0 mt-2.5 w-80 sm:w-96 bg-white border border-slate-200 shadow-2xl p-4 rounded-sm overflow-hidden z-50 text-[#1a1a1a] font-sans"
                  id="notif-dropdown"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                    <h3 className="text-xs font-bold text-[#041e42] uppercase tracking-wider flex items-center gap-2">
                      <Bell className="w-4 h-4 text-[#bf0d3e]" />
                      Alertas de Partidos
                    </h3>
                    <div className="flex gap-2">
                      {unreadCount > 0 && (
                        <button 
                          onClick={handleMarkAllAsRead} 
                          className="text-[10px] text-[#bf0d3e] hover:underline font-bold"
                        >
                          Marcar todo
                        </button>
                      )}
                      <button 
                        onClick={handleClearNotifications} 
                        className="text-[10px] text-slate-400 hover:underline font-bold"
                      >
                        Limpiar
                      </button>
                    </div>
                  </div>

                  <div className="max-h-80 overflow-y-auto space-y-2 pr-1" id="notifications-list">
                    {notifications.length === 0 ? (
                      <div className="py-8 text-center text-xs text-slate-450">
                        No hay notificaciones ni resultados nuevos. ¡Haz clic en &quot;Lanzamiento en Vivo&quot; para crear emoción!
                      </div>
                    ) : (
                      notifications.map(notif => (
                        <div 
                          key={notif.id}
                          className={`p-2.5 rounded-sm border transition-all text-xs cursor-pointer ${notif.isRead ? 'bg-[#f8f9fa] border-slate-200 text-slate-400' : 'bg-white border-slate-300 text-slate-800'}`}
                          onClick={() => handleMarkAsRead(notif.id)}
                        >
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-bold flex items-center gap-1 text-[11px] text-[#bf0d3e]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#bf0d3e] inline-block"></span>
                              {notif.title}
                            </span>
                            <span className="text-[9px] text-slate-400 font-mono tracking-tighter">{notif.time}</span>
                          </div>
                          <p className="leading-relaxed">{notif.message}</p>
                          {!notif.isRead && (
                            <div className="mt-1 flex justify-end">
                              <span className="text-[9px] text-[#041e42] hover:text-[#bf0d3e] font-bold cursor-pointer">
                                Marcar como leído
                              </span>
                            </div>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                  
                  <div className="border-t border-slate-100 pt-2 mt-3 text-center">
                    <p className="text-[10px] text-slate-450 leading-snug">
                      Presiona el botón <span className="text-[#bf0d3e] font-bold">Lanzamiento en Vivo</span> para actualizar el marcador y simular jugadas de la LVBP y MLB.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </header>

      {/* Hero Banner Section */}
      <section 
        className="relative overflow-hidden bg-[#041e42] text-white border-b-4 border-[#bf0d3e] pb-10 pt-8 bg-cover bg-center transition-all duration-1000 ease-in-out" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(4, 30, 66, 0.85), rgba(4, 30, 66, 0.92)), url('${WALLPAPERS[selectedWallpaperIdx]?.url || WALLPAPERS[0].url}')` 
        }}
        id="hero-banner"
      >
        {/* Background geometric accents */}
        <div className="absolute -right-16 -top-16 w-56 h-56 bg-white/5 rounded-full border border-white/10 pointer-events-none"></div>
        <div className="absolute left-1/3 -bottom-12 w-32 h-32 bg-[#bf0d3e]/8 rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#bf0d3e]/20 border border-[#bf0d3e]/30 rounded-sm text-xs text-white font-medium tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-[#bf0d3e]" />
                <span>Béisbol del Caribe e Internacional</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif italic tracking-tight leading-tight text-white">
                La pasión por la pelota <br />
                <span className="text-[#bf0d3e] font-sans uppercase font-black not-italic block mt-1 tracking-wide">
                  Diamante Histórico
                </span>
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl font-light">
                Explora las leyendas venezolanas en el Big Show, revive estadísticas históricas de la LVBP venezolana y las grandes eras de la MLB, participa en nuestro foro de debates y demuestra tus conocimientos en la gran trivia fanática de béisbol.
              </p>

              {/* Stats badges */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs" id="quick-badges-list">
                <div className="flex items-center gap-1.5 bg-[#031732] border border-white/10 rounded-sm px-3 py-1">
                  <span className="w-2 h-2 rounded-full bg-[#bf0d3e]"></span>
                  <span className="text-slate-300">Marcadores en vivo</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#031732] border border-white/10 rounded-sm px-3 py-1">
                  <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                  <span className="text-slate-300">8 Equipos competitivos</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#031732] border border-white/10 rounded-sm px-3 py-1">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <span className="text-slate-300">Foro de Discusión Libre</span>
                </div>
              </div>
            </div>

            {/* Quick Live Match Box Container in Hero */}
            <div className="lg:col-span-5 bg-white text-[#1a1a1a] border border-slate-200 shadow-xl rounded-sm p-5 border-t-4 border-t-[#bf0d3e]" id="hero-live-games">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#bf0d3e]"></span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#bf0d3e]">En Curso en este Instante</span>
                </div>
                <span className="text-xs font-semibold text-[#041e42] bg-[#041e42]/10 border border-[#041e42]/20 rounded-sm px-2 py-0.5 font-mono">LVBP Clásico</span>
              </div>

              {/* Selected Live Match details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-[#bf0d3e] rounded-sm"></div>
                    <span className="font-bold text-sm text-slate-800">Magallanes (MAG)</span>
                  </div>
                  <span className="text-2xl font-black text-[#041e42] font-mono">4</span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-[#041e42] rounded-sm"></div>
                    <span className="font-bold text-sm text-slate-800">Leones del Caracas (CAR)</span>
                  </div>
                  <span className="text-2xl font-black text-[#041e42] font-mono">5</span>
                </div>

                <div className="text-xs text-[#1a1a1a] space-y-1 bg-[#f8f9fa] border border-slate-200 rounded-sm p-3">
                  <span className="text-[10px] text-[#bf0d3e] font-bold uppercase tracking-wider block font-mono">Último Evento:</span>
                  <p className="italic text-slate-600 leading-relaxed font-sans">
                    &ldquo;{games[0]?.currentPlay || 'Preparando transmisión...'}&rdquo;
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1.5 font-mono">
                    <span>Inning: <strong>9na Entrada Baja</strong></span>
                    <span>Outs: <strong>2 Outs</strong></span>
                  </div>
                </div>

                <div className="flex justify-between items-center gap-3 pt-1">
                  <button 
                    onClick={() => { setActiveTab('games'); }} 
                    className="flex justify-center items-center flex-1 gap-1 text-[11px] font-bold uppercase tracking-wider text-slate-600 hover:text-[#041e42] hover:bg-slate-100 bg-slate-50 border border-slate-200 rounded-sm py-2 transition-colors cursor-pointer"
                  >
                    Ver Todo el Marcador
                  </button>
                  <button 
                    onClick={handleSimulatePlay} 
                    className="flex justify-center items-center flex-1 gap-1.5 text-[11px] font-bold uppercase tracking-wider text-white bg-[#bf0d3e] hover:bg-[#a00a33] rounded-sm py-2 transition-all active:scale-95 shadow-sm cursor-pointer"
                  >
                    ⚡ Lanzamiento
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Navigation Subbar Menu tabs */}
      <nav className="sticky top-[73px] sm:top-[74px] z-30 bg-white border-b-2 border-slate-200 flex overflow-x-auto scrollbar-none shadow-sm" id="tabs-navigation">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex justify-start lg:justify-between items-center whitespace-nowrap py-1">
          <div className="flex space-x-1 py-1">
            <button
              onClick={() => { setActiveTab('mlb-venezuela'); setSelectedPost(null); }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeTab === 'mlb-venezuela' ? 'text-white bg-[#041e42] border-b-4 border-b-[#bf0d3e]' : 'text-slate-600 hover:text-[#041e42] hover:bg-slate-50'}`}
              id="tab-mlb-venezuela"
            >
              <Award className="w-4 h-4 text-[#bf0d3e]" />
              <span>Venezolanos en la MLB</span>
            </button>

            <button
              onClick={() => { setActiveTab('lvbp'); setSelectedPost(null); }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeTab === 'lvbp' ? 'text-white bg-[#041e42] border-b-4 border-b-[#bf0d3e]' : 'text-slate-600 hover:text-[#041e42] hover:bg-slate-50'}`}
              id="tab-lvbp"
            >
              <Trophy className="w-4 h-4 text-[#bf0d3e]" />
              <span>LVBP de Venezuela</span>
            </button>

            <button
              onClick={() => { setActiveTab('prospects'); setSelectedPost(null); }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeTab === 'prospects' ? 'text-white bg-[#041e42] border-b-4 border-b-[#bf0d3e]' : 'text-slate-600 hover:text-[#041e42] hover:bg-slate-50'}`}
              id="tab-prospects"
            >
              <Sparkles className="w-4 h-4 text-[#bf0d3e]" />
              <span>Novatos y Prospectos</span>
            </button>

            <button
              onClick={() => { setActiveTab('games'); setSelectedPost(null); }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeTab === 'games' ? 'text-white bg-[#041e42] border-b-4 border-b-[#bf0d3e]' : 'text-slate-600 hover:text-[#041e42] hover:bg-slate-50'}`}
              id="tab-games"
            >
              <Calendar className="w-4 h-4 text-[#bf0d3e]" />
              <span>Resultados Diarios</span>
            </button>

            <button
              onClick={() => { setActiveTab('fundamentals'); setSelectedPost(null); }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeTab === 'fundamentals' ? 'text-white bg-[#041e42] border-b-4 border-b-[#bf0d3e]' : 'text-slate-600 hover:text-[#041e42] hover:bg-slate-50'}`}
              id="tab-fundamentals"
            >
              <BookOpen className="w-4 h-4 text-[#bf0d3e]" />
              <span>Fundamentos e Historia</span>
            </button>

            <button
              onClick={() => { setActiveTab('forum'); setSelectedPost(null); }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeTab === 'forum' ? 'text-white bg-[#041e42] border-b-4 border-b-[#bf0d3e]' : 'text-slate-600 hover:text-[#041e42] hover:bg-slate-50'}`}
              id="tab-forum"
            >
              <MessageSquare className="w-4 h-4 text-[#bf0d3e]" />
              <span>Foro de Discusión</span>
            </button>

            <button
              onClick={() => { setActiveTab('trivia'); setSelectedPost(null); }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeTab === 'trivia' ? 'text-white bg-[#041e42] border-b-4 border-b-[#bf0d3e]' : 'text-slate-600 hover:text-[#041e42] hover:bg-slate-50'}`}
              id="tab-trivia"
            >
              <HelpCircle className="w-4 h-4 text-[#bf0d3e]" />
              <span>Trivia Fanática</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Pane Wrapper */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="tab-content-panel">

        {/* PANEL DE FONDOS Y PRESENTACIÓN DE ESTADIOS (LVBP & MLB) */}
        <section className="bg-white border border-slate-200 rounded-sm shadow-md mb-8 overflow-hidden" id="wallpaper-slideshow-panel">
          {/* Header Bar (Collapsible Toggle) */}
          <div 
            onClick={() => setShowWallpaperPanel(!showWallpaperPanel)}
            className="bg-[#041e42] hover:bg-[#031732] cursor-pointer text-white px-4 py-3 sm:px-6 flex items-center justify-between transition-colors text-xs sm:text-sm"
          >
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <div className="p-1 px-1.5 bg-[#bf0d3e] rounded-xs text-white">
                <ImageIcon className="w-4 h-4 animate-pulse inline-block" />
              </div>
              <div>
                <h3 className="font-bold uppercase tracking-wider font-sans text-xs sm:text-sm flex items-center gap-1.5">
                  Presentación de Estadios y Fondos Dinámicos
                  <span className="bg-[#bf0d3e] text-white text-[9px] font-black px-1.5 py-0.5 rounded-sm uppercase tracking-widest animate-pulse">
                    MLB & LVBP
                  </span>
                </h3>
                <p className="text-[10px] text-slate-300 font-mono mt-0.5">
                  {isSlideshowActive ? (
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping inline-block"></span>
                      Presentación activa: Rotando cada {slideshowIntervalSec} segundos
                    </span>
                  ) : (
                    <span className="text-amber-400">Presentación pausada. Selecciona un estadio manualmente</span>
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono text-slate-300 bg-[#031124] px-2.5 py-1 rounded border border-white/5">
                <span className="text-slate-400">Estadio Actual:</span>
                <span className="text-white font-bold">{WALLPAPERS[selectedWallpaperIdx]?.team}</span>
              </div>
              <button 
                type="button"
                className="text-white hover:text-[#bf0d3e] text-xs font-bold uppercase tracking-wider underline cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowWallpaperPanel(!showWallpaperPanel);
                }}
              >
                {showWallpaperPanel ? 'Contraer [-]' : 'Expandir [+]'}
              </button>
            </div>
          </div>

          {/* Expanded Panel Details */}
          {showWallpaperPanel && (
            <div className="p-5 sm:p-6 border-t border-slate-100 bg-[#f8f9fa] space-y-6">
              
              {/* Top Section: Active Wallpaper Details and Quick Navigation */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* Visual Preview Card */}
                <div className="lg:col-span-5 bg-white border border-slate-200 rounded-sm p-4 shadow-sm flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-[#041e42] text-white text-[9px] font-black uppercase tracking-widest font-mono px-3 py-1 rounded-bl-sm z-10">
                    {WALLPAPERS[selectedWallpaperIdx]?.league}
                  </div>
                  
                  {/* Aspect-ratio preview image of stadium with text overlay */}
                  <div className="relative h-44 sm:h-48 w-full rounded-sm overflow-hidden bg-slate-900 shadow-inner group">
                    <img 
                      src={WALLPAPERS[selectedWallpaperIdx]?.url} 
                      alt={WALLPAPERS[selectedWallpaperIdx]?.name} 
                      className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent flex flex-col justify-end p-4">
                      <span className="text-[9px] font-bold tracking-widest text-[#bf0d3e] uppercase font-mono">
                        {WALLPAPERS[selectedWallpaperIdx]?.team}
                      </span>
                      <h4 className="text-white font-serif font-bold italic text-base leading-tight">
                        {WALLPAPERS[selectedWallpaperIdx]?.name}
                      </h4>
                      <p className="text-[10px] text-slate-300 font-sans mt-0.5 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#bf0d3e]" />
                        {WALLPAPERS[selectedWallpaperIdx]?.stadium}
                      </p>
                    </div>
                  </div>

                  {/* Stadium Information Paragraph */}
                  <div className="mt-3.5 space-y-2">
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      {WALLPAPERS[selectedWallpaperIdx]?.description}
                    </p>
                  </div>

                  {/* Prev / Next slideshow controls */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSlideshowActive(false); // pause to let user navigate
                        setSelectedWallpaperIdx(prev => (prev - 1 + WALLPAPERS.length) % WALLPAPERS.length);
                      }}
                      className="flex items-center gap-1 text-[11px] font-bold text-slate-600 hover:text-[#041e42] transition-colors border border-slate-200 hover:border-slate-350 px-2.5 py-1.5 rounded bg-white cursor-pointer"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      Anterior
                    </button>

                    <div className="flex items-center gap-1">
                      {WALLPAPERS.map((_, idx) => (
                        <button
                          key={_.id}
                          type="button"
                          onClick={() => {
                            setIsSlideshowActive(false);
                            setSelectedWallpaperIdx(idx);
                          }}
                          className={`h-2 rounded-full transition-all duration-300 ${idx === selectedWallpaperIdx ? 'w-5 bg-[#bf0d3e]' : 'w-2 bg-slate-250 hover:bg-slate-350'}`}
                          title={`Ver ${_?.team}`}
                        />
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSlideshowActive(false); // pause
                        setSelectedWallpaperIdx(prev => (prev + 1) % WALLPAPERS.length);
                      }}
                      className="flex items-center gap-1 text-[11px] font-bold text-slate-600 hover:text-[#041e42] transition-colors border border-slate-200 hover:border-slate-350 px-2.5 py-1.5 rounded bg-white cursor-pointer"
                    >
                      Siguiente
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

                {/* Team Selection Grid */}
                <div className="lg:col-span-7 bg-white border border-slate-200 rounded-sm p-4 sm:p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-sans">
                      Selecciona un Fondo / Estadio Temático de Béisbol
                    </h4>

                    {/* LVBP Category */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between border-b border-rose-50 pb-1">
                        <span className="text-[10px] font-black uppercase text-[#bf0d3e] tracking-widest font-sans flex items-center gap-1.5">
                          <Trophy className="w-3.5 h-3.5 text-[#bf0d3e]" />
                          LVBP de Venezuela (Hogar)
                        </span>
                        <span className="text-[9px] text-slate-400 font-mono">8 Estadios Criollos</span>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {WALLPAPERS.filter(item => item.league === 'LVBP').map((wp) => {
                          const idx = WALLPAPERS.findIndex(x => x.id === wp.id);
                          const isActive = idx === selectedWallpaperIdx;
                          return (
                            <button
                              key={wp.id}
                              type="button"
                              onClick={() => {
                                setSelectedWallpaperIdx(idx);
                                setIsSlideshowActive(false); // Pause so they can enjoy their pick
                              }}
                              className={`p-2 text-left rounded-sm border transition-all text-xs flex flex-col justify-between h-[68px] cursor-pointer group ${isActive ? 'bg-[#041e42] border-[#041e42] text-white shadow-md ring-2 ring-[#bf0d3e]/20 font-semibold' : 'bg-slate-50 border-slate-200 text-[#1a1a1a] hover:bg-slate-100'}`}
                            >
                              <span className={`text-[8px] uppercase font-bold tracking-tight ${isActive ? 'text-[#bf0d3e]' : 'text-slate-400'}`}>
                                {wp.team.split(' ')[0]}
                              </span>
                              <span className="font-bold leading-tight line-clamp-2">
                                {wp.name.replace(/🦁|⚓|🦈|🪶|🐯|🦅|🏹|🏝️|⚾|🗽|🌴|🟩|🚀/g, '').trim()}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* MLB Category */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between border-b border-rose-50 pb-1">
                        <span className="text-[10px] font-black uppercase text-[#041e42] tracking-widest font-sans flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-[#041e42]" />
                          Grandes Ligas (MLB de USA)
                        </span>
                        <span className="text-[9px] text-slate-400 font-mono">4 Catedrales</span>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {WALLPAPERS.filter(item => item.league === 'MLB').map((wp) => {
                          const idx = WALLPAPERS.findIndex(x => x.id === wp.id);
                          const isActive = idx === selectedWallpaperIdx;
                          return (
                            <button
                              key={wp.id}
                              type="button"
                              onClick={() => {
                                setSelectedWallpaperIdx(idx);
                                setIsSlideshowActive(false); // Pause so they can enjoy their pick
                              }}
                              className={`p-2 text-left rounded-sm border transition-all text-xs flex flex-col justify-between h-[68px] cursor-pointer group ${isActive ? 'bg-[#041e42] border-[#041e42] text-white shadow-md ring-2 ring-[#bf0d3e]/20 font-semibold' : 'bg-slate-50 border-slate-200 text-[#1a1a1a] hover:bg-slate-100'}`}
                            >
                              <span className={`text-[8px] uppercase font-bold tracking-tight ${isActive ? 'text-[#bf0d3e]' : 'text-slate-400'}`}>
                                {wp.team.split(' ')[0]}
                              </span>
                              <span className="font-bold leading-tight line-clamp-2">
                                {wp.name.replace(/🦁|⚓|🦈|🪶|🐯|🦅|🏹|🏝️|⚾|🗽|🌴|🟩|🚀/g, '').trim()}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                  </div>

                  {/* BOTTOM REPRODUCTION AND OPACITY CALIBRATOR */}
                  <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    
                    {/* Slideshow Active Toggle */}
                    <div className="md:col-span-4 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setIsSlideshowActive(!isSlideshowActive)}
                        className={`flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${isSlideshowActive ? 'bg-[#bf0d3e] text-white hover:bg-[#a00a33]' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'}`}
                      >
                        {isSlideshowActive ? (
                          <>
                            <Pause className="w-3.5 h-3.5 fill-current" />
                            Pausar Rueda
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 fill-current animate-pulse text-emerald-500" />
                            Auto-Presentar
                          </>
                        )}
                      </button>
                    </div>

                    {/* Slideshow Interval speed configuration */}
                    <div className="md:col-span-4 space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase block">
                        Velocidad de Giro
                      </label>
                      <div className="flex rounded-sm bg-slate-100 p-0.5 border border-slate-200">
                        {[4, 7, 12].map((sec) => (
                          <button
                            key={sec}
                            type="button"
                            onClick={() => setSlideshowIntervalSec(sec)}
                            className={`flex-1 text-center py-1 text-[10px] font-bold uppercase rounded-xs transition-all cursor-pointer ${slideshowIntervalSec === sec ? 'bg-white text-[#041e42] shadow-xs font-black' : 'text-slate-500 hover:text-slate-800'}`}
                          >
                            {sec}s
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Background reading contrast range slider */}
                    <div className="md:col-span-4 space-y-1">
                      <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase">
                        <span>Opacidad Imagen</span>
                        <span className="text-[#bf0d3e] font-mono">{Math.round((1 - bgOpacity) * 100)}% Fondo</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sliders className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <input 
                          type="range" 
                          min="0.80" 
                          max="0.98" 
                          step="0.01" 
                          value={bgOpacity}
                          onChange={(e) => setBgOpacity(parseFloat(e.target.value))}
                          className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#bf0d3e]"
                          title="Ajusta el nivel de contraste para ver mejor las fotos de estadios o leer mejor el texto"
                        />
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          )}
        </section>

        {/* TAB 1: VENEZOLANOS EN LAS GRANDES LIGAS (MLB) */}
        {activeTab === 'mlb-venezuela' && (
          <section className="space-y-8 animate-fade-in" id="content-mlb-venezuela">
            
            {/* Header intro of this section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-350 pb-5 gap-4">
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-[#041e42] flex items-center gap-2">
                  <Award className="w-6 h-6 text-[#bf0d3e]" />
                  La Hazaña de los Venezolanos en las Grandes Ligas (MLB)
                </h3>
                <p className="text-sm text-slate-600 mt-1 max-w-3xl font-light">
                  Un tributo al talento y la garra venezolana que ha conquistado el Big Show norteamericano, desde los primeros lanzamientos del &ldquo;Patón&rdquo; Carrasquel en 1939 hasta el majestuoso club de la Triple Corona y el asombroso hito moderno de 40-70.
                </p>
              </div>

              {/* General historical stats box */}
              <div className="bg-[#041e42] border-b-4 border-b-[#bf0d3e] text-white rounded-sm px-4 py-3 text-xs space-y-1.5 font-mono shadow-sm">
                <span className="text-slate-300 block text-[9px] font-bold uppercase tracking-widest">HITOS GENERALES MLB:</span>
                <div>🇻🇪 Primer Pelotero: <strong className="text-white font-bold">1939 (Alejandro Carrasquel)</strong></div>
                <div>🏆 Salones de Fama: <strong className="text-[#bf0d3e] font-bold">Luis Aparicio (1984)</strong></div>
                <div>⚔️ Club de 3,000 Hits: <strong className="text-emerald-400 font-bold">Miguel Cabrera (3,174)</strong></div>
                <div>⚡ Club Único 40-70: <strong className="text-amber-400 font-bold">Ronald Acuña Jr. (2023)</strong></div>
              </div>
            </div>

            {/* Main Interactive Slider and Card Component */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Selector Sidebar of Players list */}
              <div className="lg:col-span-4 space-y-3" id="legends-sidebar-selector">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-455 px-1.5 block font-sans">
                  Elige una Leyenda Criolla:
                </span>
                
                <div className="space-y-2">
                  {VENEZUELAN_MLB_LEGENDS.map(legend => {
                    const isSelected = legend.id === selectedLegendId;
                    return (
                      <button
                        key={legend.id}
                        onClick={() => setSelectedLegendId(legend.id)}
                        className={`w-full text-left p-3.5 rounded-sm border transition-all flex items-start justify-between cursor-pointer group ${isSelected ? 'bg-[#041e42] border-l-4 border-l-[#bf0d3e] border-[#041e42] text-white shadow-md' : 'bg-white border-slate-200 text-[#1a1a1a] hover:border-slate-350'}`}
                      >
                        <div className="space-y-1 flex-1">
                          <h4 className={`font-bold transition-colors ${isSelected ? 'text-white text-base font-serif italic' : 'text-slate-800 group-hover:text-[#bf0d3e]'}`}>
                            {legend.name}
                          </h4>
                          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                            <span className={isSelected ? 'text-slate-300' : 'text-slate-500'}>{legend.positions}</span>
                            <span>•</span>
                            <span className={isSelected ? 'text-[#bf0d3e] font-bold' : 'text-slate-400 font-medium'}>{legend.yearsActive}</span>
                          </div>
                        </div>
                        <div className={`p-1.5 rounded-full transition-colors ${isSelected ? 'bg-[#bf0d3e] text-white' : 'bg-slate-50 text-slate-400'}`}>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Sub banner of history */}
                <div className="bg-[#f1f5f9] border border-slate-200 rounded-sm p-4 text-xs text-slate-600 space-y-2 leading-relaxed">
                  <h5 className="font-sans font-bold text-[#041e42] uppercase tracking-wider flex items-center gap-1.5">
                    <History className="w-4 h-4 text-[#bf0d3e]" />
                    ¿Sabías Qué? EL DEBUT CRIOLLO
                  </h5>
                  <p className="font-light text-slate-700">
                    <strong>Alejandro &ldquo;Patón&rdquo; Carrasquel</strong> fue el pionero al lanzar para los Washington Senators en 1939. El locutor norteamericano de radio, incapaz de pronunciar &ldquo;Carrasquel&rdquo;, lo bautizó artísticamente como <strong>&ldquo;Alex Carrasquel&rdquo;</strong>. Abrió las puertas a más de 450 compatriotas.
                  </p>
                </div>
              </div>

              {/* Right Big Informational dynamic card for selected player */}
              <div 
                className="lg:col-span-8 bg-white border border-slate-200 rounded-sm p-6 shadow-md relative overflow-hidden bg-cover bg-center" 
                style={{ 
                  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.93), rgba(255, 255, 255, 0.95)), url('${LEGEND_COVER_IMAGES[activeLegend.id]}')` 
                }}
                id="legend-display-card"
              >
                
                {/* Visual grid watermark accent */}
                <div className="absolute top-0 right-0 p-8 text-[#bf0d3e]/5 rotate-12 pointer-events-none text-9xl font-black font-mono select-none">
                  ⚾
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 relative z-10">
                  <div>
                    <span className="text-[10px] font-mono text-[#bf0d3e] uppercase tracking-widest block font-bold">Héroe Inmortal del Béisbol Venezolano</span>
                    <h3 className="text-3xl font-bold font-serif text-[#041e42] tracking-tight mt-1">{activeLegend.name}</h3>
                    <div className="inline-block mt-2 px-2.5 py-1 bg-[#041e42]/5 border border-[#041e42]/10 rounded-sm text-xs text-[#041e42] font-semibold italic">
                      &ldquo;{activeLegend.nickname}&rdquo;
                    </div>
                  </div>

                  <div className="flex flex-col items-start sm:items-end font-mono text-xs text-slate-550 bg-slate-50 border border-slate-200 rounded-sm p-3">
                    <div>Posición: <strong className="text-[#041e42] font-bold">{activeLegend.positions}</strong></div>
                    <div>Periodo: <strong className="text-[#bf0d3e] font-bold">{activeLegend.yearsActive}</strong></div>
                  </div>
                </div>

                {/* Main statistics / details content spacing with two-column layout */}
                <div className="py-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6">
                  
                  {/* Left portrait card container */}
                  <div className="md:col-span-4 flex flex-col items-center">
                    <div className="w-full max-w-[210px] rounded-sm overflow-hidden border-2 border-[#041e42] shadow-md bg-slate-900 p-2 text-center relative group select-none">
                      {/* Card stamp sticker overlay */}
                      <span className="absolute top-3 right-3 bg-amber-500 text-[8px] font-black uppercase text-slate-950 px-1.5 py-0.5 rounded-sm tracking-wider z-10 shadow-sm">
                        LEYENDA VENEZOLANA
                      </span>
                      <div className="aspect-[3/4] w-full rounded-sm bg-slate-950 overflow-hidden border border-slate-800 relative flex items-center justify-center">
                        <img 
                          src={LEGEND_PORTRAITS[activeLegend.id]} 
                          alt={activeLegend.name}
                          className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="pt-2 pb-1 px-1">
                        <p className="text-[11.5px] font-extrabold uppercase tracking-tight text-white leading-none font-mono truncate">
                          {activeLegend.name}
                        </p>
                        <span className="text-[9px] text-[#bf0d3e] font-extrabold block mt-1 uppercase tracking-wider font-sans truncate">
                          {activeLegend.positions}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right side information & detailed report */}
                  <div className="md:col-span-8 space-y-4">
                    
                    {/* Highlights section */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#041e42] flex items-center gap-1.5 font-sans">
                        <Award className="w-4 h-4 text-[#bf0d3e]" />
                        Hazañas Importantes y Palmarés:
                      </span>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {activeLegend.achievements.map((ach, index) => (
                          <div 
                            key={index}
                            className="flex items-start gap-2 bg-slate-50 border border-slate-200 p-2 rounded-sm text-slate-700 hover:bg-slate-100/50 transition-colors"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#bf0d3e] mt-0.5 shrink-0" />
                            <span className="font-medium text-[10.5px] leading-snug">{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Highlights story box */}
                    <div className="bg-[#f8f9fa] border border-slate-200 text-xs p-3.5 rounded-sm leading-relaxed space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#bf0d3e] block font-mono">Trayectoria e Impacto en la MLB:</span>
                      <p className="text-slate-600 font-light text-[11.5px]">
                        {activeLegend.careerHighlights}
                      </p>
                    </div>

                    {/* Honor summary quote */}
                    <div className="border-l-4 border-l-[#bf0d3e] pl-3 py-1 italic text-slate-710 text-xs font-serif leading-relaxed">
                      <span className="text-[#041e42] block uppercase tracking-wider font-mono text-[9px] font-bold not-italic font-sans mb-0.5">Mención de Honor:</span>
                      &ldquo;{activeLegend.milestoneText}&rdquo;
                    </div>

                  </div>
                </div>

                {/* Grid stats comparing with other historic moments */}
                <div className="border-t border-slate-200 pt-5 mt-4 grid grid-cols-1 sm:grid-cols-4 gap-4 text-center text-xs relative z-10" id="comparison-subgrid">
                  <div className="p-3 bg-[#f8f9fa] border border-slate-200 rounded-sm">
                    <span className="text-slate-400 font-mono block text-[10px] font-bold uppercase tracking-wide">Triple Corona</span>
                    <p className="font-bold text-[#041e42] mt-1">Cabrera (2012)</p>
                    <span className="text-[10px] text-slate-500 italic block mt-0.5">Primer latino en lograrlo</span>
                  </div>
                  <div className="p-3 bg-[#f8f9fa] border border-slate-200 rounded-sm">
                    <span className="text-slate-400 font-mono block text-[10px] font-bold uppercase tracking-wide">Único Hall of Fame</span>
                    <p className="font-bold text-[#041e42] mt-1">Luis Aparicio (1984)</p>
                    <span className="text-[10px] text-slate-500 italic block mt-0.5">Inducido con 84.6%</span>
                  </div>
                  <div className="p-3 bg-[#f8f9fa] border border-slate-200 rounded-sm">
                    <span className="text-slate-400 font-mono block text-[10px] font-bold uppercase tracking-wide">Juego Perfecto</span>
                    <p className="font-bold text-[#041e42] mt-1">Félix Hernández (2012)</p>
                    <span className="text-[10px] text-slate-500 italic block mt-0.5">27 de 27 retirados</span>
                  </div>
                  <div className="p-3 bg-rose-50/50 border border-rose-200 rounded-sm hover:border-rose-350 transition-colors">
                    <span className="text-[#bf0d3e] font-mono block text-[10px] font-bold uppercase tracking-wide">Ponches: Félix vs Zurdos</span>
                    <p className="font-bold text-[#041e42] mt-1">2,524 K vs ~1,150 K</p>
                    <span className="text-[10px] text-slate-500 italic block mt-0.5">¡Félix dobla el promedio histórico de abridores!</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Extra Section: El Rol Histórico del Shortstop Venezolano */}
            <div className="bg-white border border-slate-200 rounded-sm p-6 shadow-md" id="shortstop-tradition">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-lg font-bold text-[#041e42] flex items-center gap-1.5 uppercase tracking-tight">
                    <TrendingUp className="w-5 h-5 text-[#bf0d3e]" />
                    La Dinastía Venezolana del Campocorto (Shortstop)
                  </h4>
                  <p className="text-xs text-slate-500 font-light max-w-2xl">
                    Por décadas, el béisbol venezolano ha tenido una reputación formidable de fabricar los shortstops defensivos más ágiles e inteligentes de la historia de este deporte.
                  </p>
                </div>
                <div className="h-10 w-10 shrink-0 bg-[#041e42] text-white rounded-sm flex items-center justify-center font-bold text-xs font-mono shadow-sm">
                  SS
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-sm space-y-1 shadow-sm">
                  <strong className="text-[#041e42] block text-sm">1. Alfonso Carrasquel</strong>
                  <span className="text-[11px] text-[#bf0d3e] block font-mono font-bold uppercase tracking-wider">El Chico (1950s)</span>
                  <p className="text-slate-600 leading-relaxed pt-1 font-light">
                    El primer latino en iniciar un juego de estrellas en las Mayores. Pionero absoluto de la elegancia defensiva en el infield.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4 rounded-sm space-y-1 shadow-sm">
                  <strong className="text-[#041e42] block text-sm">2. Luis Aparicio</strong>
                  <span className="text-[11px] text-[#bf0d3e] block font-mono font-bold uppercase tracking-wider">Don Luis (1950s-1970s)</span>
                  <p className="text-slate-600 leading-relaxed pt-1 font-light">
                    Exaltado al Salón de la Fama. 9 Guantes de Oro que moldearon el estándar del SS de la Liga Americana por siempre.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4 rounded-sm space-y-1 shadow-sm">
                  <strong className="text-[#041e42] block text-sm">3. David Concepción</strong>
                  <span className="text-[11px] text-[#bf0d3e] block font-mono font-bold uppercase tracking-wider">El Rey David (1970s-1980s)</span>
                  <p className="text-slate-600 leading-relaxed pt-1 font-light">
                    Eje vital de la mítica Gran Maquinaria Roja de Cincinnati. Ideó el lance de bote en césped artificial de primera base.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4 rounded-sm space-y-1 shadow-sm">
                  <strong className="text-[#041e42] block text-sm">4. Omar Vizquel</strong>
                  <span className="text-[11px] text-[#bf0d3e] block font-mono font-bold uppercase tracking-wider">Manos de Seda (1990s-2010s)</span>
                  <p className="text-slate-600 leading-relaxed pt-1 font-light">
                    Llevó el arte del fildeo a niveles extraordinarios con sus 11 Guantes de Oro y vigencia inigualable hasta los 45 años.
                  </p>
                </div>
              </div>
            </div>

          </section>
        )}

        {/* TAB 2: EL BÉISBOL VENEZOLANO Y LA LVBP */}
        {activeTab === 'lvbp' && (
          <section className="space-y-8 animate-fade-in" id="content-lvbp">
            
            {/* Header portion */}
            <div className="border-b border-slate-200 pb-5">
              <h3 className="text-2xl font-bold uppercase tracking-tight text-[#041e42] flex items-center gap-2">
                <Trophy className="w-6 h-6 text-[#bf0d3e]" />
                La Liga Venezolana de Béisbol Profesional (LVBP)
              </h3>
              <p className="text-sm text-slate-600 mt-1 max-w-4xl font-light">
                La LVBP es el corazón de la cultura deportiva venezolana, activa desde enero de 1946. Aquí vibra la rivalidad del &ldquo;Eterno Rival&rdquo;, resuena la samba alegre de La Guaira y se construyen las leyendas que nutren las Grandes Ligas.
              </p>
            </div>

            {/* Quick Summary of LVBP and Rivalry */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-sm bg-white border border-slate-200 shadow-sm space-y-2">
                <h4 className="font-sans font-bold text-[#041e42] text-sm uppercase tracking-wider flex items-center gap-1.5">
                  <History className="w-4 h-4 text-[#bf0d3e]" />
                  Orígenes del Torneo Criollo
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-light font-sans">
                  {LVBP_HISTORY.summary}
                </p>
              </div>

              <div className="p-5 rounded-sm bg-white border border-slate-200 border-l-4 border-l-[#bf0d3e] shadow-sm space-y-2">
                <h4 className="font-sans font-bold text-[#041e42] text-sm uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-[#bf0d3e]" />
                  El Eterno Rival: Caracas vs Magallanes
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-light font-sans">
                  {LVBP_HISTORY.rivalry}
                </p>
              </div>
            </div>

            {/* Grid of LVBP Teams & details */}
            <div className="space-y-4">
              <h4 className="font-bold text-[#041e42] text-lg uppercase tracking-tight">
                Los 8 Equipos de la LVBP Activos
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" id="lvbp-teams-grid">
                {LVBP_TEAMS.map(team => {
                  const isSelected = team.id === selectedLVBPTeamId;
                  
                  let borderCol = "border-slate-200 hover:border-slate-350";
                  if (isSelected) {
                    borderCol = "border-2 border-[#041e42] border-b-4 border-b-[#bf0d3e]";
                  }
                  
                  return (
                    <div
                      key={team.id}
                      onClick={() => setSelectedLVBPTeamId(team.id)}
                      className={`group rounded-sm border bg-white cursor-pointer transition-all overflow-hidden ${borderCol} ${isSelected ? 'shadow-md scale-[1.01]' : 'shadow-sm hover:translate-y-[-2px]'}`}
                    >
                      {/* Team Cover Image */}
                      <div className="h-28 w-full bg-[#041e42] relative overflow-hidden">
                        <img 
                          src={TEAM_COVER_IMAGES[team.id]} 
                          alt={team.name}
                          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" 
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#041e42] via-[#041e42]/50 to-transparent" />
                        <div className="absolute bottom-2 left-3 right-3 flex items-end justify-between z-10">
                          <span className="text-[9px] uppercase font-mono font-bold text-slate-200">
                            {team.city}
                          </span>
                          <span className="font-sans font-black text-[10px] text-white bg-[#bf0d3e] rounded-sm px-1.5 py-0.5 shadow-sm">
                            {team.shortName}
                          </span>
                        </div>
                      </div>

                      <div className="p-4 space-y-2">
                        <h5 className="font-bold text-[#041e42] text-sm group-hover:text-[#bf0d3e] transition-colors font-sans leading-tight min-h-[40px] flex items-center">
                          {team.name}
                        </h5>

                        <div className="flex items-center gap-1 text-xs text-[#bf0d3e] font-bold mt-1 font-mono">
                          <Trophy className="w-3.5 h-3.5 text-[#bf0d3e] shrink-0" />
                          <span>{team.championships} {team.championships === 1 ? 'Título' : 'Títulos'}</span>
                        </div>

                        <p className="text-[11px] text-slate-550 line-clamp-2 mt-2 leading-relaxed font-light">
                          {team.summary}
                        </p>

                        <div className="mt-3 flex justify-end">
                          <span className="text-[10px] text-[#bf0d3e] font-bold uppercase tracking-wider hover:underline flex items-center gap-0.5 font-sans">
                            Ver Plantilla Histórica
                            <ChevronRight className="w-3 h-3 text-[#bf0d3e]" />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dynamic details section for selected LVBP Team */}
            <div 
              className="bg-[#041e42] text-white border border-[#041e42] rounded-sm p-5 sm:p-6 shadow-md relative overflow-hidden bg-cover bg-center" 
              style={{ 
                backgroundImage: `linear-gradient(rgba(4, 30, 66, 0.90), rgba(4, 30, 66, 0.94)), url('${TEAM_COVER_IMAGES[activeLVBPTeam.id]}')` 
              }}
              id="lvbp-team-detail-viewer"
            >
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/5 rounded-full border border-white/10 pointer-events-none"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10 relative z-10">
                <div>
                  <span className="text-[9px] text-[#bf0d3e] font-mono uppercase tracking-widest font-bold">Ficha de Equipo Oficial LVBP</span>
                  <h4 className="text-xl sm:text-2xl font-serif italic text-white font-bold">{activeLVBPTeam.name}</h4>
                  <p className="text-xs text-slate-300 mt-1 font-mono">Sede: <strong className="text-white">{activeLVBPTeam.city}</strong> | Fundación: <strong className="text-white">{activeLVBPTeam.founded}</strong></p>
                </div>

                <div className="inline-flex items-center gap-2 bg-[#021126] border border-white/10 rounded-sm px-4 py-2 text-xs font-mono">
                  <Trophy className="w-4 h-4 text-[#bf0d3e]" />
                  <span>Estrellas de Oro: <strong className="text-white font-bold">{activeLVBPTeam.championships} 🏆</strong></span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-5 relative z-10" id="team-stats-and-roster">
                <div className="md:col-span-7 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block font-mono">Reseña Histórica:</span>
                  <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-light font-sans">
                    {activeLVBPTeam.summary}
                  </p>
                </div>

                <div className="md:col-span-5 bg-white/5 border border-white/10 rounded-sm p-4 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#bf0d3e] block font-mono flex items-center gap-1">
                    <Users className="w-4 h-4 text-[#bf0d3e]" />
                    Inmortales del Equipo / Peloteros Célebres:
                  </span>
                  
                  <div className="flex flex-wrap gap-1.5 pt-1.5" id="celebrity-badges-list">
                    {activeLVBPTeam.legendaryPlayers.map((player, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 bg-[#021126] border border-white/10 text-[11px] text-white rounded-sm hover:border-[#bf0d3e]/40 transition-all font-mono"
                      >
                        ⚾ {player}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* LVBP Legendary Records Section */}
            <div className="space-y-4 pt-4" id="lvbp-famous-records">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#bf0d3e]" />
                <h4 className="font-bold text-[#041e42] text-lg uppercase tracking-tight">
                  Récords Históricos Legendarios de la LVBP
                </h4>
              </div>

              <p className="text-xs text-slate-550 font-light max-w-2xl font-sans">
                Marcas eternas inscritas en bronce por titanes locales de la pelota criolla. Verdaderos hitos de por vida de la LVBP.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4" id="lvbp-records-holder">
                {LVBP_RECORDS.map(record => (
                  <div 
                    key={record.id}
                    className="p-4 rounded-sm border border-slate-200 bg-white hover:bg-slate-50 transition-all text-xs space-y-2 shadow-sm"
                  >
                    <span className="text-[9px] text-[#bf0d3e] uppercase tracking-widest font-mono font-bold block">{record.category}</span>
                    <h5 className="font-black text-2xl text-[#041e42] font-mono leading-none">{record.value}</h5>
                    <div>
                      <strong className="text-slate-800 block text-[11px] font-sans">{record.player}</strong>
                      <p className="text-[11px] text-slate-500 text-left pt-1 leading-normal font-light font-sans">
                        {record.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </section>
        )}

        {/* TAB EXTRA: NOVATOS & PROSPECTOS TRIPLE-A / LVBP */}
        {activeTab === 'prospects' && (
          <section className="space-y-8 animate-fade-in" id="content-prospects">
            {/* Header Banner */}
            <div className="bg-[#041e42] text-white p-6 sm:p-8 rounded-sm relative overflow-hidden shadow-md">
              <div className="absolute right-0 bottom-0 opacity-15 translate-x-12 translate-y-12">
                <Sparkles className="w-64 h-64 text-[#bf0d3e]" />
              </div>
              <div className="max-w-3xl relative z-10">
                <span className="bg-[#bf0d3e] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white inline-block mb-3">
                  Semillero de Grandes Ligas & Triple-A
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mb-2 font-mono">
                  Prospectos del Futuro & Novatos Sensaciones
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  El puente directo entre la mística invernal de la <strong>LVBP</strong> y el Big Show de la <strong>MLB</strong>. Explora perfiles, simula e interactúa con los talentos jóvenes que heredarán el trono de Cabrera, Martínez y Santana.
                </p>
              </div>
            </div>

            {/* Grid 2 Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column (2/3 width) */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* 1. Scouting Profile Panel */}
                <div className="bg-white border border-slate-200 rounded-sm shadow-sm p-5">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#041e42]" />
                      <h3 className="font-extrabold text-base text-[#041e42] uppercase tracking-tight">
                        Perfiles de Scouting de Élite
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-sm">
                      Total: {PROSPECTS.length} Promesas
                    </span>
                  </div>

                  {/* List / Badge Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {PROSPECTS.map(p => {
                      const isSelected = selectedProspectId === p.id;
                      return (
                        <button
                          key={p.id}
                          onClick={() => setSelectedProspectId(p.id)}
                          className={`w-full text-left p-4 rounded-sm border transition-all flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? 'bg-[#041e42] text-white border-[#041e42]'
                              : 'bg-slate-50 text-slate-800 border-slate-250 hover:bg-slate-100 hover:border-slate-350'
                          }`}
                        >
                          <div>
                            <p className="font-bold text-sm tracking-tight">{p.name}</p>
                            <span className={`text-[10px] block mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                              {p.position} • {p.age} años
                            </span>
                            <span className={`text-[10.5px] font-bold block ${isSelected ? 'text-pink-300' : 'text-[#bf0d3e]'}`}>
                              {p.teamLVBP}
                            </span>
                          </div>

                          <div className={`text-center px-2 py-1 rounded-full border w-12 h-12 flex flex-col items-center justify-center ${
                            isSelected 
                              ? 'bg-[#bf0d3e] border-[#bf0d3e] text-white' 
                              : 'bg-white border-slate-300 text-[#041e42]'
                          }`}>
                            <span className="text-[9px] uppercase font-mono block leading-none">Grade</span>
                            <span className="font-bold text-sm leading-none mt-0.5">{p.overallGrade}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Single Detailed Prospect Scouting View (Full Baseball Card Layout) */}
                  {(() => {
                    const activeP = PROSPECTS.find(p => p.id === selectedProspectId);
                    if (!activeP) return null;
                    return (
                      <div className="bg-slate-950 text-white rounded-sm border border-slate-800 overflow-hidden relative" id="scouting-card-detail">
                        {/* Background accents */}
                        <div className="absolute right-0 top-0 bg-gradient-to-l from-slate-900/40 p-4 border-l border-b border-slate-800">
                          <span className="font-mono text-emerald-400 font-bold text-xs">OFFICIAL REPORT</span>
                        </div>

                        {/* Top banner / stats header */}
                        <div className="p-5 border-b border-slate-850">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="text-xl font-bold uppercase tracking-tight text-white leading-none">
                                  {activeP.name}
                                </h4>
                                <span className="bg-slate-800 text-[#bf0d3e] text-[9.5px] font-bold uppercase px-2 py-0.5 rounded-sm font-mono tracking-wider">
                                  {activeP.lvlTripleA}
                                </span>
                              </div>
                              <span className="text-slate-400 text-xs block mt-1 font-sans">
                                Organización MLB: <strong>{activeP.teamMLB}</strong> • Equipo LVBP: <strong>{activeP.teamLVBP}</strong>
                              </span>
                            </div>

                            <div className="flex items-center gap-3">
                              <div className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-sm text-center">
                                <span className="text-[9px] text-slate-500 uppercase font-mono block">Edad</span>
                                <span className="text-sm font-bold text-slate-200">{activeP.age} años</span>
                              </div>
                              <div className="bg-[#bf0d3e] border border-[#bf0d3e] px-3.5 py-1.5 rounded-sm text-center">
                                <span className="text-[9px] text-pink-200 uppercase font-mono block">Overall</span>
                                <span className="text-base font-black text-white">{activeP.overallGrade} / 80</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Middle Content: Scouting Tool chart & Narrative */}
                        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                          
                          {/* 5-tool chart on 20-80 scale */}
                          <div className="space-y-3.5 bg-slate-900/60 p-4 rounded-sm border border-slate-850">
                            <h5 className="text-[11px] uppercase font-mono font-bold tracking-widest text-slate-400 border-b border-slate-850 pb-2 flex items-center justify-between">
                              <span>Herramientas del Prospecto (20-80)</span>
                              <span className="text-[9.5px] italic text-[#bf0d3e]">Escala Profesional</span>
                            </h5>

                            {Object.entries(activeP.scoutingGrades).map(([tool, grade]) => {
                              const toolLabels: { [key: string]: string } = {
                                contact: 'Contacto',
                                power: 'Poder (Power)',
                                speed: 'Velocidad (Speed)',
                                defense: 'Defensa',
                                arm: 'Fuerza de Brazo'
                              };
                              let colorClass = 'bg-blue-500';
                              let textClass = 'text-blue-400';
                              if (grade >= 70) {
                                colorClass = 'bg-emerald-500';
                                textClass = 'text-emerald-400';
                              } else if (grade >= 60) {
                                colorClass = 'bg-teal-500';
                                textClass = 'text-teal-400';
                              } else if (grade < 50) {
                                colorClass = 'bg-amber-500';
                                textClass = 'text-amber-500';
                              }

                              return (
                                <div key={tool} className="space-y-1">
                                  <div className="flex justify-between text-xs">
                                    <span className="text-slate-300 font-sans">{toolLabels[tool] || tool}</span>
                                    <span className={`font-mono font-bold ${textClass}`}>{grade}</span>
                                  </div>
                                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <div 
                                      className={`h-full ${colorClass} rounded-full transition-all duration-500`}
                                      style={{ width: `${((grade - 20) / 60) * 100}%` }}
                                    ></div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* Stat summary & report */}
                          <div className="space-y-4">
                            <div className="bg-slate-900/60 p-4 rounded-sm border border-slate-850">
                              <h5 className="text-[11px] uppercase font-mono font-bold tracking-widest text-[#bf0d3e] border-b border-slate-850 pb-2">
                                Reporte Narrativo del Scout
                              </h5>
                              <p className="text-xs text-slate-300 pt-2 leading-relaxed">
                                {activeP.scoutingReport}
                              </p>
                            </div>

                            {/* Triple-A Stats box */}
                            <div className="bg-slate-900/60 p-4 rounded-sm border border-slate-850">
                              <h5 className="text-[11px] uppercase font-mono font-bold tracking-widest text-slate-400 border-b border-slate-850 pb-2">
                                Estadísticas Recientes Registradas
                              </h5>
                              <div className="grid grid-cols-4 gap-2 pt-2.5 text-center font-mono font-bold">
                                <div>
                                  <span className="text-[9px] text-slate-500 block font-normal">Juegos</span>
                                  <span className="text-xs text-slate-300">{activeP.statsCurrentYear.games}</span>
                                </div>
                                {activeP.statsCurrentYear.avg !== undefined && (
                                  <div>
                                    <span className="text-[9px] text-slate-500 block font-normal">AVG</span>
                                    <span className="text-xs text-slate-300">.{activeP.statsCurrentYear.avg.toString().split('.')[1] || activeP.statsCurrentYear.avg}</span>
                                  </div>
                                )}
                                {activeP.statsCurrentYear.hr !== undefined && (
                                  <div>
                                    <span className="text-[9px] text-slate-500 block font-normal">HR</span>
                                    <span className="text-xs text-slate-200">{activeP.statsCurrentYear.hr}</span>
                                  </div>
                                )}
                                {activeP.statsCurrentYear.ops !== undefined && (
                                  <div>
                                    <span className="text-[9px] text-slate-500 block font-normal">OPS</span>
                                    <span className="text-xs text-emerald-400">{activeP.statsCurrentYear.ops}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                        </div>

                        {/* Bottom highlight text */}
                        <div className="bg-slate-900 border-t border-slate-850 px-5 py-3.5 flex items-center gap-2 text-xs">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span className="text-slate-300">
                            <strong>Dato Destacado:</strong> {activeP.highlights}
                          </span>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* 2. Comparison Tool */}
                <div className="bg-white border border-slate-200 rounded-sm shadow-sm p-5">
                  <div className="flex items-center gap-2 border-b border-slate-200 pb-4 mb-5">
                    <Activity className="w-5 h-5 text-[#041e42]" />
                    <h3 className="font-extrabold text-base text-[#041e42] uppercase tracking-tight">
                      Comparador Cara a Cara (Prospect Matchup)
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Prospecto A</label>
                      <select
                        value={compareProspectIdA}
                        onChange={(e) => setCompareProspectIdA(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-250 hover:border-slate-350 p-2 text-xs rounded-sm text-[#041e42] focus:outline-none focus:ring-1 focus:ring-slate-400"
                      >
                        {PROSPECTS.map(p => (
                          <option key={p.id} value={p.id}>{p.name} ({p.position})</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Prospecto B</label>
                      <select
                        value={compareProspectIdB}
                        onChange={(e) => setCompareProspectIdB(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-250 hover:border-slate-350 p-2 text-xs rounded-sm text-[#041e42] focus:outline-none focus:ring-1 focus:ring-slate-400"
                      >
                        {PROSPECTS.map(p => (
                          <option key={p.id} value={p.id}>{p.name} ({p.position})</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Compare layout sheets */}
                  {(() => {
                    const pA = PROSPECTS.find(p => p.id === compareProspectIdA);
                    const pB = PROSPECTS.find(p => p.id === compareProspectIdB);
                    if (!pA || !pB) return null;
                    return (
                      <div className="border border-slate-200 rounded-sm overflow-hidden text-xs">
                        {/* Header naming */}
                        <div className="grid grid-cols-3 bg-[#041e42] text-white py-3 px-4 font-bold text-center">
                          <div className="text-left font-mono truncate">{pA.name}</div>
                          <div className="text-[#bf0d3e] uppercase text-[10px] tracking-wider self-center">VS</div>
                          <div className="text-right font-mono truncate">{pB.name}</div>
                        </div>

                        {/* Comparison Rows */}
                        <div className="divide-y divide-slate-150">
                          {/* Position */}
                          <div className="grid grid-cols-3 py-2.5 px-4 text-center hover:bg-slate-50">
                            <div className="text-left font-semibold text-slate-800">{pA.position}</div>
                            <div className="text-slate-400 uppercase text-[9.5px] font-mono">Posición</div>
                            <div className="text-right font-semibold text-slate-800">{pB.position}</div>
                          </div>

                          {/* LVBP Team */}
                          <div className="grid grid-cols-3 py-2.5 px-4 text-center hover:bg-slate-50">
                            <div className="text-left text-[#041e42] font-semibold">{pA.teamLVBP}</div>
                            <div className="text-slate-400 uppercase text-[9.5px] font-mono">Team LVBP</div>
                            <div className="text-right text-[#041e42] font-semibold">{pB.teamLVBP}</div>
                          </div>

                          {/* Age */}
                          <div className="grid grid-cols-3 py-2.5 px-4 text-center hover:bg-slate-50">
                            <div className="text-left font-mono font-medium text-slate-700">{pA.age} años</div>
                            <div className="text-slate-400 uppercase text-[9.5px] font-mono">Edad</div>
                            <div className="text-right font-mono font-medium text-slate-700">{pB.age} años</div>
                          </div>

                          {/* Overall Grade Comparison */}
                          <div className="grid grid-cols-3 py-3 px-4 text-center bg-slate-50/70 border-y border-slate-200 font-mono">
                            <div className={`text-left font-black text-sm ${pA.overallGrade > pB.overallGrade ? 'text-emerald-600' : 'text-slate-600'}`}>
                              {pA.overallGrade} {pA.overallGrade > pB.overallGrade && '👑'}
                            </div>
                            <div className="text-[#041e42] uppercase text-[10px] font-extrabold tracking-wider">Overall Grade</div>
                            <div className={`text-right font-black text-sm ${pB.overallGrade > pA.overallGrade ? 'text-emerald-600' : 'text-slate-600'}`}>
                              {pB.overallGrade > pA.overallGrade && '👑'} {pB.overallGrade}
                            </div>
                          </div>

                          {/* Tools comparison list */}
                          {Object.keys(pA.scoutingGrades).map((tool) => {
                            const valA = pA.scoutingGrades[tool as keyof typeof pA.scoutingGrades];
                            const valB = pB.scoutingGrades[tool as keyof typeof pB.scoutingGrades];
                            const toolLabels: { [key: string]: string } = {
                              contact: 'Contacto',
                              power: 'Poder (Power)',
                              speed: 'Velocidad',
                              defense: 'Defensa',
                              arm: 'Fuerza de Brazo'
                            };

                            return (
                              <div key={tool} className="grid grid-cols-3 py-2.5 px-4 text-center hover:bg-slate-50 font-mono">
                                <div className={`text-left font-bold ${valA > valB ? 'text-emerald-600' : 'text-slate-600'}`}>
                                  {valA} {valA > valB && '▲'}
                                </div>
                                <div className="text-slate-500 font-sans text-xs">{toolLabels[tool] || tool}</div>
                                <div className={`text-right font-bold ${valB > valA ? 'text-emerald-600' : 'text-slate-600'}`}>
                                  {valB > valA && '▲'} {valB}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        
                        <div className="bg-slate-50 p-3 text-center text-[11.5px] text-slate-500 border-t border-slate-200 italic">
                          * La escala de 20-80 define 50 como promedio regulado de Grandes Ligas. Las flechas ▲ indican superioridad técnica relativa en esa área específica.
                        </div>
                      </div>
                    );
                  })()}
                </div>

              </div>

              {/* Right Column (1/3 width): Interactive Sandbox and Voting Poll */}
              <div className="space-y-8">
                
                {/* 1. Prospecciómetro Sandbox */}
                <div className="bg-white border border-slate-200 rounded-sm shadow-sm p-5" id="prospectiometro-panel">
                  <div className="flex items-center gap-2 border-b border-slate-200 pb-4 mb-4">
                    <Sliders className="w-5 h-5 text-[#bf0d3e]" />
                    <h3 className="font-extrabold text-base text-[#041e42] uppercase tracking-tight">
                      El Prospecciómetro 🛠️
                    </h3>
                  </div>

                  <p className="text-slate-500 text-xs leading-relaxed mb-4 font-light">
                    ¡Crea tu propio novato sensación! Ajusta las herramientas de scouting en la escala 20-80 para simular su potencial y recibir una predicción de su porvenir profesional.
                  </p>

                  <div className="space-y-4 text-xs">
                    {/* Basic info selects */}
                    <div>
                      <label className="block text-slate-600 font-bold mb-1 uppercase text-[9.5px]">Nombre del Novato</label>
                      <input
                        type="text"
                        value={customScout.name}
                        onChange={(e) => setCustomScout({ ...customScout, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-250 hover:border-slate-350 p-2 text-xs rounded-sm text-[#041e42] focus:outline-none focus:ring-1 focus:ring-slate-400 font-bold"
                        placeholder="Ej. Ronald Acuña III"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-slate-600 font-bold mb-1 uppercase text-[9.5px]">Tipo de Roster</label>
                        <select
                          value={customScoutPositionType}
                          onChange={(e) => {
                            const newType = e.target.value as 'batter' | 'pitcher';
                            setCustomScoutPositionType(newType);
                            setCustomScout({ 
                              ...customScout, 
                              position: newType === 'batter' ? 'Jardinero (OF)' : 'Lanzador Abridor (RHP)'
                            });
                          }}
                          className="w-full bg-slate-50 border border-slate-250 p-1.5 text-xs rounded-sm text-[#041e42]"
                        >
                          <option value="batter">Bateador</option>
                          <option value="pitcher">Lanzador</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-600 font-bold mb-1 uppercase text-[9.5px]">Equipo LVBP</label>
                        <select
                          value={customScout.lvbpTeam}
                          onChange={(e) => setCustomScout({ ...customScout, lvbpTeam: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-250 p-1.5 text-xs rounded-sm text-[#041e42]"
                        >
                          <option value="Leones del Caracas 🦁">Leones del Caracas</option>
                          <option value="Navegantes del Magallanes ⚓">Navegantes del Magallanes</option>
                          <option value="Tiburones de La Guaira 🦈">Tiburones de La Guaira</option>
                          <option value="Águilas del Zulia 🦅">Águilas del Zulia</option>
                          <option value="Cardenales de Lara 🪶">Cardenales de Lara</option>
                          <option value="Tigres de Aragua 🐯">Tigres de Aragua</option>
                          <option value="Caribes de Anzoátegui 🏹">Caribes de Anzoátegui</option>
                          <option value="Bravos de Margarita 🏝️">Bravos de Margarita</option>
                        </select>
                      </div>
                    </div>

                    {/* Dynamic tool sliders */}
                    <div className="bg-slate-50 p-3.5 border border-slate-150 rounded-sm space-y-3 font-bold">
                      
                      {customScoutPositionType === 'batter' ? (
                        <>
                          <div className="space-y-1">
                            <div className="flex justify-between font-mono text-[10.5px]">
                              <span>Contacto:</span>
                              <span className="text-[#bf0d3e]">{customScout.contact}</span>
                            </div>
                            <input
                              type="range"
                              min="20"
                              max="80"
                              step="5"
                              value={customScout.contact}
                              onChange={(e) => setCustomScout({ ...customScout, contact: parseInt(e.target.value) })}
                              className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#bf0d3e]"
                            />
                          </div>

                          <div className="space-y-1">
                            <div className="flex justify-between font-mono text-[10.5px]">
                              <span>Poder:</span>
                              <span className="text-[#bf0d3e]">{customScout.power}</span>
                            </div>
                            <input
                              type="range"
                              min="20"
                              max="80"
                              step="5"
                              value={customScout.power}
                              onChange={(e) => setCustomScout({ ...customScout, power: parseInt(e.target.value) })}
                              className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#bf0d3e]"
                            />
                          </div>

                          <div className="space-y-1">
                            <div className="flex justify-between font-mono text-[10.5px]">
                              <span>Velocidad:</span>
                              <span className="text-[#bf0d3e]">{customScout.speed}</span>
                            </div>
                            <input
                              type="range"
                              min="20"
                              max="80"
                              step="5"
                              value={customScout.speed}
                              onChange={(e) => setCustomScout({ ...customScout, speed: parseInt(e.target.value) })}
                              className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#bf0d3e]"
                            />
                          </div>

                          <div className="space-y-1">
                            <div className="flex justify-between font-mono text-[10.5px]">
                              <span>Defensa:</span>
                              <span className="text-[#bf0d3e]">{customScout.defense}</span>
                            </div>
                            <input
                              type="range"
                              min="20"
                              max="80"
                              step="5"
                              value={customScout.defense}
                              onChange={(e) => setCustomScout({ ...customScout, defense: parseInt(e.target.value) })}
                              className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#bf0d3e]"
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="space-y-1">
                            <div className="flex justify-between font-mono text-[10.5px]">
                              <span>Velo Recta:</span>
                              <span className="text-[#041e42]">{customScout.contact} K</span>
                            </div>
                            <input
                              type="range"
                              min="20"
                              max="80"
                              step="5"
                              value={customScout.contact}
                              onChange={(e) => setCustomScout({ ...customScout, contact: parseInt(e.target.value) })}
                              className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#041e42]"
                            />
                          </div>

                          <div className="space-y-1">
                            <div className="flex justify-between font-mono text-[10.5px]">
                              <span>Efectos / Curvas:</span>
                              <span className="text-[#041e42]">{customScout.power}</span>
                            </div>
                            <input
                              type="range"
                              min="20"
                              max="80"
                              step="5"
                              value={customScout.power}
                              onChange={(e) => setCustomScout({ ...customScout, power: parseInt(e.target.value) })}
                              className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#041e42]"
                            />
                          </div>

                          <div className="space-y-1">
                            <div className="flex justify-between font-mono text-[10.5px]">
                              <span>Control / Comando:</span>
                              <span className="text-[#041e42]">{customScout.control}</span>
                            </div>
                            <input
                              type="range"
                              min="20"
                              max="80"
                              step="5"
                              value={customScout.control}
                              onChange={(e) => setCustomScout({ ...customScout, control: parseInt(e.target.value) })}
                              className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#041e42]"
                            />
                          </div>

                          <div className="space-y-1">
                            <div className="flex justify-between font-mono text-[10.5px]">
                              <span>Durabilidad:</span>
                              <span className="text-[#041e42]">{customScout.speed}</span>
                            </div>
                            <input
                              type="range"
                              min="20"
                              max="80"
                              step="5"
                              value={customScout.speed}
                              onChange={(e) => setCustomScout({ ...customScout, speed: parseInt(e.target.value) })}
                              className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#041e42]"
                            />
                          </div>
                        </>
                      )}

                      <div className="space-y-1">
                        <div className="flex justify-between font-mono text-[10.5px]">
                          <span>Frente Mental / Carácter:</span>
                          <span className="text-[#bf0d3e]">{customScout.arm}</span>
                        </div>
                        <input
                          type="range"
                          min="20"
                          max="80"
                          step="5"
                          value={customScout.arm}
                          onChange={(e) => setCustomScout({ ...customScout, arm: parseInt(e.target.value) })}
                          className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#bf0d3e]"
                        />
                      </div>

                    </div>

                    {/* Calculated Outcome */}
                    {(() => {
                      const avgG = Math.round(
                        customScoutPositionType === 'batter'
                        ? (customScout.contact * 0.25 + customScout.power * 0.3 + customScout.speed * 0.15 + customScout.defense * 0.15 + customScout.arm * 0.15)
                        : (customScout.contact * 0.3 + customScout.power * 0.25 + (customScout.control || 50) * 0.25 + customScout.speed * 0.1 + customScout.arm * 0.1)
                      );
                      const roundedOverall = Math.max(20, Math.min(80, Math.round(avgG / 5) * 5));

                      let title = 'Prospecto de Suplemento';
                      let desc = 'Jugador reserva de ligas menores con refinaciones pendientes.';
                      let color = 'text-amber-700 bg-amber-50 border-amber-200';

                      if (roundedOverall >= 70) {
                        title = 'Franquicia Superstar ⭐️';
                        desc = `¡Alerta de Titán! ${customScout.name} tiene un potencial generacional comparable con Miguel Cabrera o Félix Hernández. Su presencia en ${customScout.lvbpTeam} desatará locura total en postemporada.`;
                        color = 'text-emerald-700 bg-emerald-50 border-emerald-300';
                      } else if (roundedOverall >= 60) {
                        title = 'All-Star Regular 🚀';
                        desc = `${customScout.name} se perfila como un titular indiscutible en las mayores. Gran balance técnico que causará un impacto inmediato en el lineup de ${customScout.lvbpTeam}.`;
                        color = 'text-teal-700 bg-teal-50 border-teal-300';
                      } else if (roundedOverall >= 50) {
                        title = 'Jugador Promedio MLB ⚾';
                        desc = 'Jugador sólido que alcanzará las Grandes Ligas con un aporte estable. Valiosa pieza de roster para campeonatos exigentes.';
                        color = 'text-blue-700 bg-blue-50 border-blue-200';
                      }

                      return (
                        <div className={`p-4 border rounded-sm ${color} transition-all`}>
                          <div className="flex justify-between items-center mb-1.5 font-mono">
                            <span className="font-extrabold tracking-wide uppercase text-[10.5px]">Calificación: {roundedOverall} / 80</span>
                            <span className="text-[12px] font-black">{roundedOverall >= 50 ? 'PRO' : 'Rookie'}</span>
                          </div>
                          <p className="font-extrabold text-sm mb-0.5">{title}</p>
                          <p className="text-[11px] leading-relaxed italic font-normal">{desc}</p>
                        </div>
                      );
                    })()}

                  </div>
                </div>

                {/* 2. Live Voting Poll */}
                <div className="bg-white border border-slate-200 rounded-sm shadow-sm p-5" id="prospect-voting-poll">
                  <div className="flex items-center gap-2 border-b border-slate-200 pb-4 mb-4">
                    <TrendingUp className="w-5 h-5 text-[#041e42]" />
                    <h3 className="font-extrabold text-base text-[#041e42] uppercase tracking-tight">
                      Votación Fanática 🗳️
                    </h3>
                  </div>

                  <p className="text-slate-500 text-xs leading-relaxed mb-4">
                    ¿Cuál de estas noveles sensaciones consideras que tendrá una trayectoria más legendaria en Grandes Ligas y la selección nacional? ¡Solo un voto por fanático!
                  </p>

                  <div className="space-y-3 text-xs">
                    {PROSPECTS.filter(p => p.id !== 'prop-tovar' && p.id !== 'prop-chaparro').map(p => {
                      const votes = prospectVotes[p.id] || 0;
                      const totalVotes = Object.keys(prospectVotes).reduce((sum, key) => sum + Number(prospectVotes[key] || 0), 0);
                      const percentage = totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0;
                      const hasVoted = userVotedProspectId !== null;
                      const isVotedChoice = userVotedProspectId === p.id;

                      const handleVote = () => {
                        if (hasVoted) return;
                        const updated = {
                          ...prospectVotes,
                          [p.id]: (prospectVotes[p.id] || 0) + 1
                        };
                        setProspectVotes(updated);
                        setUserVotedProspectId(p.id);
                        setLatestToast(`¡Tu voto por ${p.name} ha sido registrado! ⚾`);
                        setTimeout(() => setLatestToast(null), 3000);
                      };

                      return (
                        <div key={p.id} className="bg-slate-50 p-2.5 border border-slate-150 rounded-sm relative">
                          <div className="flex justify-between font-bold mb-1">
                            <span>{p.name}</span>
                            <span className="font-mono text-slate-500 font-normal">{votes} votos ({percentage}%)</span>
                          </div>

                          <div className="h-2 w-full bg-slate-205 rounded-full overflow-hidden mb-2">
                            <div 
                              className={`h-full rounded-full transition-all duration-300 ${isVotedChoice ? 'bg-[#bf0d3e]' : 'bg-[#041e42]'}`}
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-[10px] text-[#bf0d3e] font-semibold">{p.teamLVBP}</span>
                            {hasVoted ? (
                              isVotedChoice ? (
                                <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                                  <Check className="w-3 h-3" /> Tu Voto
                                </span>
                              ) : (
                                <span className="text-[10px] text-slate-400 font-light">Votaciones cerradas</span>
                              )
                            ) : (
                              <button
                                onClick={handleVote}
                                className="bg-[#041e42] hover:bg-[#bf0d3e] text-white text-[10px] font-bold px-2.5 py-1 rounded-sm cursor-pointer transition-colors"
                              >
                                Votar
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>
          </section>
        )}

        {/* TAB 3: RESULTADOS DIARIOS Y EN VIVO */}
        {activeTab === 'games' && (
          <section className="space-y-8 animate-fade-in" id="content-games">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-5 gap-4">
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-[#041e42] flex items-center gap-2">
                  <Tv className="w-6 h-6 text-[#bf0d3e]" />
                  Resultados Diarios y Transmisiones Simuladas
                </h3>
                <p className="text-sm text-slate-650 mt-1 max-w-2xl font-light">
                  Visualiza los marcadores más atractivos de la MLB e LVBP. Haz clic en &ldquo;Lanzamiento en Vivo&rdquo; para simular jugadas clave ofensivas y registrar notificaciones.
                </p>
              </div>

              {/* Reset simulator scores option */}
              <button
                onClick={() => {
                  setGames(SIMULATED_GAMES);
                  setLatestToast("Marcadores restablecidos al estado inicial.");
                  setTimeout(() => setLatestToast(null), 3000);
                }}
                className="flex items-center gap-1.5 self-start sm:self-center text-xs font-mono font-bold text-[#041e42] hover:text-[#bf0d3e] bg-white border border-slate-200 rounded-sm px-3 py-2 cursor-pointer shadow-sm active:scale-95 transition-all animate-fade-in"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#bf0d3e]" />
                <span>Restablecer Tableros</span>
              </button>
            </div>

            {/* Scorecard grids with Live trigger instruction */}
            <div className="p-4 bg-white border border-slate-200 rounded-sm flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm animate-fade-in">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-50 text-[#bf0d3e] border border-slate-200 rounded-sm mt-1 shrink-0">
                  <Tv className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#041e42] text-sm font-sans">Prueba simulador de resultados de béisbol en vivo</h4>
                  <p className="text-xs text-slate-500 max-w-xl font-light font-sans leading-relaxed">
                    Cada vez que presionas el botón verde &ldquo;Lanzamiento en Vivo&rdquo; en el encabezado, nuestro simulador genera una jugada clásica real (con runs, hits, y jugadas de strike/out) y dispara alertas al panel de notificaciones de la campana.
                  </p>
                </div>
              </div>

              <button
                onClick={handleSimulatePlay}
                className="w-full md:w-auto bg-[#bf0d3e] hover:bg-[#b10c36] text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-sm active:scale-95 transition-all text-center shrink-0 cursor-pointer shadow-sm"
              >
                Simular Lanzamiento Ahora!
              </button>
            </div>

            {/* Actual listings of physical scores */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="games-box-score-grid animate-fade-in">
              {games.map(game => {
                const isLive = game.status === 'live';
                const isFinished = game.status === 'finished';
                
                return (
                  <div 
                    key={game.id}
                    className={`bg-white border rounded-sm p-5 shadow-sm relative overflow-hidden transition-all hover:border-slate-350 ${game.isFavorite ? 'border-2 border-[#bf0d3e]' : 'border-slate-200'}`}
                  >
                    
                    {/* Top status indicator header of game card */}
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-1.5 font-sans">
                        <span className="px-2 py-0.5 rounded-sm text-[9px] font-mono font-bold uppercase bg-[#041e42] text-white">
                          {game.league}
                        </span>
                        
                        {isLive && (
                          <span className="flex items-center gap-1 text-[10px] text-[#bf0d3e] font-bold uppercase animate-pulse">
                            <span className="h-1.5 w-1.5 rounded bg-[#bf0d3e] block"></span>
                            {game.inning}
                          </span>
                        )}

                        {isFinished && (
                          <span className="text-[10px] text-slate-400 font-semibold uppercase">
                            Finalizado
                          </span>
                        )}

                        {game.status === 'scheduled' && (
                          <span className="text-[10px] text-[#041e42] font-semibold uppercase flex items-center gap-1 font-mono">
                            <Clock className="w-3 h-3 text-[#bf0d3e]" />
                            {game.time}
                          </span>
                        )}
                      </div>

                      {/* Favorite star tagger toggler */}
                      <button 
                        onClick={() => handleToggleFavoriteGame(game.id)}
                        className={`p-1 rounded hover:bg-slate-50 transition-colors ${game.isFavorite ? "text-[#bf0d3e]" : "text-slate-400 hover:text-[#041e42]"}`}
                        title="Marcar juego como favorito"
                      >
                        <Star className="w-4 h-4 fill-current" />
                      </button>
                    </div>

                    {/* Score grid RHE box score style */}
                    <div className="space-y-3 font-sans">
                      
                      {/* Away Team Line */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded bg-slate-300"></span>
                          <span className="font-bold text-sm text-[#041e42]">{game.teamAway}</span>
                          <span className="text-xs text-slate-400 font-mono font-bold">({game.shortAway})</span>
                        </div>
                        <span className="text-lg font-bold text-[#041e42] font-mono">{game.status !== 'scheduled' ? game.runsAway : '-'}</span>
                      </div>

                      {/* Home Team Line */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded bg-[#bf0d3e]"></span>
                          <span className="font-bold text-sm text-[#041e42]">{game.teamHome}</span>
                          <span className="text-xs text-slate-400 font-mono font-bold">({game.shortHome})</span>
                        </div>
                        <span className="text-lg font-bold text-[#041e42] font-mono">{game.status !== 'scheduled' ? game.runsHome : '-'}</span>
                      </div>

                    </div>

                    {/* Box Score Stats if match active or finished */}
                    {game.status !== 'scheduled' && (
                      <div className="mt-3.5 pt-3 border-t border-slate-100 grid grid-cols-3 text-center text-[10px] font-mono text-slate-400 bg-slate-50 rounded-sm p-1.5">
                        <div>
                          <span>Carreras (R)</span>
                          <p className="font-bold text-[#041e42] mt-1">{game.runsAway} - {game.runsHome}</p>
                        </div>
                        <div>
                          <span>Hits (H)</span>
                          <p className="font-bold text-[#041e42] mt-1">{game.hitsAway} - {game.hitsHome}</p>
                        </div>
                        <div>
                          <span>Errores (E)</span>
                          <p className="font-bold text-[#041e42] mt-1">{game.errorsAway} - {game.errorsHome}</p>
                        </div>
                      </div>
                    )}

                    {/* Play-by-play string box */}
                    <div className="mt-3 bg-slate-50 rounded-sm p-3 border border-slate-150 text-xs font-sans">
                      <span className="text-[9px] uppercase tracking-wider text-[#bf0d3e] block font-bold font-mono">Último Lance / Reporte:</span>
                      <p className="text-slate-600 italic leading-relaxed pt-1 select-none font-light">
                        &ldquo;{game.currentPlay || 'Esperando el silbato de inicio para arrancar transmisión...'}&rdquo;
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>

          </section>
        )}

        {/* TAB 4: HISTORIA Y FUNDAMENTOS */}
        {activeTab === 'fundamentals' && (
          <section className="space-y-8 animate-fade-in" id="content-fundamentals">
            
            <div className="border-b border-slate-800 pb-5">
              <h3 className="text-2xl font-black text-slate-100 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-violet-400" />
                Fundamentos Técnicos y Grandes Eras de la Historia
              </h3>
              <p className="text-sm text-slate-400 mt-1 max-w-4xl">
                Domina los conceptos clave del &ldquo;Rey de los Deportes&rdquo;. Conoce de manera didáctica las 9 posiciones del campo mediante nuestro scorecard interactivo, y recorre las grandes eras históricas de la pelota mundial.
              </p>
            </div>

            {/* Interactive Scorecard Map Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="scorecard-interactive-grid">
              
              {/* Field position descriptions left select panel */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block font-mono">
                  Guía Técnica del Infield & Outfield
                </span>

                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Sigue la numeración oficial aprobada para la anotación oficial del scorecard de béisbol (técnica tradicional usada por scouts y relatores en estadios). Elige un número de posición en el panel inferior o los botones del mapa:
                  </p>

                  <div className="grid grid-cols-3 gap-2" id="scorecard-numbers-grid">
                    {Array.from({ length: 9 }, (_, i) => String(i + 1)).map(num => {
                      const isSelected = selectedPosition === num;
                      return (
                        <button
                          key={num}
                          onClick={() => setSelectedPosition(num)}
                          className={`py-3 px-1 rounded-xl border font-mono font-bold text-sm tracking-tight text-center cursor-pointer transition-all ${isSelected ? 'bg-violet-600 border-violet-500 text-white shadow-md' : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'}`}
                        >
                          Posición {num}
                        </button>
                      );
                    })}
                  </div>

                  {/* Display details of active selection */}
                  {selectedPosition && (
                    <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl space-y-2 animate-fade-in" id="active-position-shower">
                      {BASEBALL_FUNDAMENTALS[0].items.map(item => {
                        if (item.num === selectedPosition) {
                          return (
                            <div key={item.num} className="space-y-1">
                              <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                                <span className="text-xs text-violet-400 font-mono font-bold uppercase">Posición #{item.num}</span>
                                <span className="text-[10px] text-slate-500 italic">Scorecard Técnico</span>
                              </div>
                              <h5 className="font-extrabold text-sm text-slate-200 pt-1">
                                {item.role}
                              </h5>
                              <p className="text-xs text-slate-400 leading-relaxed pt-1">
                                {item.detail}
                              </p>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  )}

                </div>
              </div>

              {/* Graphical simulation of Baseball Field layout on the right */}
              <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden" id="field-visualization-container">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block font-mono mb-4 text-center">
                  Visualización del Béisbol Diamante
                </span>

                {/* Simulated stadium field */}
                <div className="w-full aspect-square max-w-[420px] mx-auto bg-gradient-to-t from-emerald-900/40 via-emerald-950/20 to-slate-950 border border-emerald-800/60 rounded-full relative p-4 flex items-center justify-center shadow-inner">
                  
                  {/* Outer Outfield Arc Line */}
                  <div className="absolute inset-8 border border-dashed border-emerald-800/40 rounded-full pointer-events-none"></div>
                  
                  {/* Inner Infield Diamond Square */}
                  <div className="absolute w-[180px] h-[180px] border border-emerald-600/30 rotate-45 flex items-center justify-center p-4 bg-emerald-900/5 pointer-events-none"></div>

                  {/* Pitcher Mound in center */}
                  <div className="absolute h-9 w-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center pointer-events-none">
                    <div className="h-2 w-4 bg-slate-400 rounded-full"></div>
                  </div>

                  {/* Positioning dots representing positions 1 to 9 */}
                  
                  {/* LF 7 */}
                  <button 
                    onClick={() => setSelectedPosition('7')}
                    className={`absolute top-[18%] left-[18%] h-8 w-8 rounded-full font-mono font-bold text-xs flex items-center justify-center border transition-all z-10 cursor-pointer ${selectedPosition === '7' ? 'bg-violet-600 text-white border-violet-500 scale-110 shadow-lg shadow-violet-950' : 'bg-slate-900 text-slate-300 border-slate-800'}`}
                    title="Jardinero Izquierdo"
                  >
                    7
                  </button>

                  {/* CF 8 */}
                  <button 
                    onClick={() => setSelectedPosition('8')}
                    className={`absolute top-[10%] left-[45%] h-8 w-8 rounded-full font-mono font-bold text-xs flex items-center justify-center border transition-all z-10 cursor-pointer ${selectedPosition === '8' ? 'bg-violet-600 text-white border-violet-500 scale-110 shadow-lg shadow-violet-950' : 'bg-slate-900 text-slate-300 border-slate-800'}`}
                    title="Jardinero Central"
                  >
                    8
                  </button>

                  {/* RF 9 */}
                  <button 
                    onClick={() => setSelectedPosition('9')}
                    className={`absolute top-[18%] right-[18%] h-8 w-8 rounded-full font-mono font-bold text-xs flex items-center justify-center border transition-all z-10 cursor-pointer ${selectedPosition === '9' ? 'bg-violet-600 text-white border-violet-500 scale-110 shadow-lg shadow-violet-950' : 'bg-slate-900 text-slate-300 border-slate-800'}`}
                    title="Jardinero Derecho"
                  >
                    9
                  </button>

                  {/* SS 6 */}
                  <button 
                    onClick={() => setSelectedPosition('6')}
                    className={`absolute top-[38%] left-[28%] h-8 w-8 rounded-full font-mono font-bold text-xs flex items-center justify-center border transition-all z-10 cursor-pointer ${selectedPosition === '6' ? 'bg-violet-600 text-white border-violet-500 scale-110 shadow-lg shadow-violet-950' : 'bg-slate-900 text-slate-300 border-slate-800'}`}
                    title="Campocorto (Shortstop)"
                  >
                    6
                  </button>

                  {/* 2B 4 */}
                  <button 
                    onClick={() => setSelectedPosition('4')}
                    className={`absolute top-[38%] right-[28%] h-8 w-8 rounded-full font-mono font-bold text-xs flex items-center justify-center border transition-all z-10 cursor-pointer ${selectedPosition === '4' ? 'bg-violet-600 text-white border-violet-500 scale-110 shadow-lg shadow-violet-950' : 'bg-slate-900 text-slate-300 border-slate-800'}`}
                    title="Segunda Base"
                  >
                    4
                  </button>

                  {/* 3B 5 */}
                  <button 
                    onClick={() => setSelectedPosition('5')}
                    className={`absolute top-[52%] left-[16%] h-8 w-8 rounded-full font-mono font-bold text-xs flex items-center justify-center border transition-all z-10 cursor-pointer ${selectedPosition === '5' ? 'bg-violet-600 text-white border-violet-500 scale-110 shadow-lg shadow-violet-950' : 'bg-slate-900 text-slate-300 border-slate-800'}`}
                    title="Tercera Base"
                  >
                    5
                  </button>

                  {/* 1P 1 */}
                  <button 
                    onClick={() => setSelectedPosition('1')}
                    className={`absolute top-[48%] left-[45%] h-8 w-8 rounded-full font-mono font-bold text-xs flex items-center justify-center border transition-all z-10 cursor-pointer ${selectedPosition === '1' ? 'bg-violet-600 text-white border-violet-500 scale-110 shadow-lg shadow-violet-950' : 'bg-slate-900 text-slate-300 border-slate-800'}`}
                    title="Lanzador (Pitcher)"
                  >
                    1
                  </button>

                  {/* 1B 3 */}
                  <button 
                    onClick={() => setSelectedPosition('3')}
                    className={`absolute top-[52%] right-[16%] h-8 w-8 rounded-full font-mono font-bold text-xs flex items-center justify-center border transition-all z-10 cursor-pointer ${selectedPosition === '3' ? 'bg-violet-600 text-white border-violet-500 scale-110 shadow-lg shadow-violet-950' : 'bg-slate-900 text-slate-300 border-slate-800'}`}
                    title="Primera Base"
                  >
                    3
                  </button>

                  {/* C 2 */}
                  <button 
                    onClick={() => setSelectedPosition('2')}
                    className={`absolute bottom-[10%] left-[45%] h-8 w-8 rounded-full font-mono font-bold text-xs flex items-center justify-center border transition-all z-10 cursor-pointer ${selectedPosition === '2' ? 'bg-violet-600 text-white border-violet-500 scale-110 shadow-lg shadow-violet-950' : 'bg-slate-900 text-slate-300 border-slate-800'}`}
                    title="Receptor (Catcher)"
                  >
                    2
                  </button>

                  {/* Home plate icon at bottom */}
                  <div className="absolute bottom-[6%] text-slate-400 font-bold text-xs font-mono select-none">
                    [ HOME PLATE ]
                  </div>

                </div>

                <div className="mt-4 text-center">
                  <p className="text-[10px] text-slate-500">
                    Pincha cualquiera de los números en el diamante de béisbol de arriba para ver su rol específico.
                  </p>
                </div>
              </div>

            </div>

            {/* General Core Rules explaining box */}
            <div className="space-y-4 pt-4" id="essential-rules-and-eras">
              <h4 className="font-extrabold text-slate-100 text-base uppercase tracking-wider">
                Conceptos Reglamentarios Fundamentales
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4" id="rules-cards">
                {BASEBALL_FUNDAMENTALS[1].items.map((item, idx) => (
                  <div key={idx} className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                    <span className="text-[10px] uppercase font-mono font-extrabold text-violet-400">{item.num}</span>
                    <strong className="text-slate-100 block text-xs">{item.role}</strong>
                    <p className="text-[11px] text-slate-400 pt-1 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* History of Baseball eras */}
            <div className="space-y-4 pt-4" id="baseball-historical-eras">
              <h4 className="font-extrabold text-slate-100 text-base uppercase tracking-wider flex items-center gap-1.5">
                <History className="w-5 h-5 text-violet-400" />
                Grandes Eras en la Historia Universal del Béisbol
              </h4>
              
              <p className="text-xs text-slate-400">
                {BASEBALL_HISTORY.origins}
              </p>

              <div className="space-y-3 pt-2" id="eras-vertical-timeline">
                {BASEBALL_HISTORY.eras.map((era, index) => (
                  <div 
                    key={index} 
                    className="p-4 rounded-xl border border-slate-800/80 bg-slate-950/40 hover:bg-slate-950 transition-all flex items-start gap-4"
                  >
                    <div className="h-8 w-8 bg-violet-900/35 border border-violet-500/20 text-violet-300 rounded-lg flex items-center justify-center font-bold font-mono text-xs mt-0.5 shrink-0">
                      0{index + 1}
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-200 text-sm">{era.title}</h5>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {era.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </section>
        )}

        {/* TAB 5: DISCUSSIONS FORUM */}
        {activeTab === 'forum' && (
          <section className="space-y-8 animate-fade-in" id="content-forum">
            
            {/* Header portion */}
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-5 gap-4">
              <div>
                <h3 className="text-2xl font-black text-slate-100 flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-pink-400" />
                  Foro de Discusión Libre &ldquo;El Dugout&rdquo;
                </h3>
                <p className="text-sm text-slate-400 mt-1 max-w-2xl">
                  Comparte tus análisis, de debates de la LVBP venezolana, y opiniones sobre tus peloteros nacionales favoritos en las Grandes Ligas con otros fanáticos criollos.
                </p>
              </div>

              {/* Toggle create post button */}
              <button
                onClick={() => setShowCreatePost(!showCreatePost)}
                className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider bg-pink-600 hover:bg-pink-500 text-white rounded-lg px-4 py-2.5 transition-colors cursor-pointer self-start md:self-center"
              >
                <Plus className="w-4 h-4" />
                <span>Crear Publicación</span>
              </button>
            </div>

            {/* Quick Author configuration block */}
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-400">Identidad en el Foro (Sesión Local):</span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <input
                  type="text"
                  value={newCommentAuthor}
                  onChange={(e) => setNewCommentAuthor(e.target.value)}
                  placeholder="Tu alias"
                  className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-pink-500 w-full sm:w-44"
                />
                <span className="text-slate-500 text-[10px] italic">Sincronizado</span>
              </div>
            </div>

            {/* Trigger container to produce new post */}
            {showCreatePost && (
              <form 
                onSubmit={handleCreatePost}
                className="p-5 sm:p-6 bg-slate-950 border border-pink-500/30 rounded-2xl space-y-4 animate-slide-down"
                id="create-post-form"
              >
                <h4 className="font-extrabold text-slate-100 text-sm uppercase tracking-wide border-b border-slate-800 pb-2">
                  Nueva Publicación para la Tribuna
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-8 space-y-1">
                    <label className="text-[11px] font-mono font-bold text-slate-400 block">Título de la publicación:</label>
                    <input
                      type="text"
                      required
                      value={newPostTitle}
                      onChange={(e) => setNewPostTitle(e.target.value)}
                      placeholder="Ej: ¿Tiene posibilidades Tiburones de repetir campeonato en la 26?"
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-pink-500"
                    />
                  </div>

                  <div className="sm:col-span-4 space-y-1">
                    <label className="text-[11px] font-mono font-bold text-slate-400 block">Categoría:</label>
                    <select
                      value={newPostCategory}
                      onChange={(e) => setNewPostCategory(e.target.value as any)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-pink-500 font-bold"
                    >
                      <option value="General">General</option>
                      <option value="MLB">Grandes Ligas (MLB)</option>
                      <option value="LVBP">Béisbol Venezolano (LVBP)</option>
                      <option value="Equipos">Equipos Legendarios</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono font-bold text-slate-400 block">Contenido del análisis:</label>
                  <textarea
                    required
                    rows={4}
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    placeholder="Describe tus argumentos aquí de manera respetuosa..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-pink-500"
                  ></textarea>
                </div>

                <div className="flex justify-end gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowCreatePost(false)}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-400 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                  >
                    Publicar Post
                  </button>
                </div>
              </form>
            )}

            {/* Forum filter & search bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3" id="forum-controls-bar">
              
              {/* Category selector */}
              <div className="flex overflow-x-auto gap-1 border-b sm:border-b-0 border-slate-800 pb-2 sm:pb-0" id="category-scroller">
                {(['All', 'MLB', 'LVBP', 'General', 'Equipos'] as const).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setForumCategoryFilter(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${forumCategoryFilter === cat ? 'bg-pink-900/50 text-pink-300 border border-pink-500/40' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 bg-slate-950/30'}`}
                  >
                    {cat === 'All' ? 'Todos los Temas' : cat}
                  </button>
                ))}
              </div>

              {/* Search input bar */}
              <div className="flex-1 relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-2.5" />
                <input
                  type="text"
                  value={forumSearch}
                  onChange={(e) => setForumSearch(e.target.value)}
                  placeholder="Buscar debates, autores, equipos o records..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-200 focus:outline-none focus:border-pink-500"
                />
              </div>

            </div>

            {/* Forum split view layout or listings */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column Forum posts listing */}
              <div className="lg:col-span-6 space-y-4" id="posts-listing-side">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 px-1 block font-mono">
                  Temas en Discusión ({filteredForumPosts.length}):
                </span>

                {filteredForumPosts.length === 0 ? (
                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 text-center text-xs text-slate-500">
                    No se encontraron debates con los criterios aportados. ¡Sé el primero en iniciar un debate!
                  </div>
                ) : (
                  <div className="space-y-3">
                    {filteredForumPosts.map(post => {
                      const isSelected = selectedPost?.id === post.id;
                      const userUpvoted = post.likedBy?.includes('user-session');
                      
                      return (
                        <div
                          key={post.id}
                          onClick={() => setSelectedPost(post)}
                          className={`p-4 rounded-xl border bg-slate-950 hover:bg-slate-900/40 transition-all cursor-pointer text-xs space-y-2.5 ${isSelected ? 'border-pink-500 ring-1 ring-pink-950' : 'border-slate-800/80'}`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-slate-900 border border-slate-800 text-pink-400">
                                {post.category}
                              </span>
                              <span className="text-[10px] text-slate-500 font-mono">
                                Por @{post.author}
                              </span>
                            </div>
                            <span className="text-[10px] text-slate-500 font-mono">{post.date}</span>
                          </div>

                          <h4 className="font-extrabold text-sm text-slate-200 hover:text-pink-400 transition-colors">
                            {post.title}
                          </h4>

                          <p className="text-slate-400 line-clamp-2 leading-relaxed">
                            {post.content}
                          </p>

                          <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500 border-t border-slate-900">
                            
                            {/* Upvote button */}
                            <button
                              onClick={(e) => handleVotePost(post.id, e)}
                              className={`flex items-center gap-1 font-semibold px-2 py-1 rounded transition-all ${userUpvoted ? 'text-pink-400 bg-pink-950/25' : 'text-slate-500 hover:text-slate-300'}`}
                              title={userUpvoted ? "Quitar voto" : "Votar positivo"}
                            >
                              <ThumbsUp className="w-3.5 h-3.5" />
                              <span>{post.upvotes} votos</span>
                            </button>

                            <span className="font-semibold flex items-center gap-1 text-slate-400">
                              <MessageSquare className="w-3.5 h-3.5" />
                              <span>{post.comments.length} comentarios</span>
                            </span>

                          </div>

                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Right Column: Selected Post & Comments conversation flow */}
              <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-2xl p-5 min-h-[400px] flex flex-col justify-between shadow-2xl relative" id="post-view-and-comments-drawer">
                {selectedPost ? (
                  <div className="space-y-4 flex flex-col justify-between h-full" id="active-post-discussion">
                    
                    {/* Header info of post */}
                    <div className="space-y-3">
                      
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-slate-900 border border-slate-850 text-pink-400">
                            {selectedPost.category}
                          </span>
                          <span className="text-[10px] text-slate-500 font-mono">
                            Publicado por <strong className="text-slate-400">@{selectedPost.author}</strong> el {selectedPost.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <button
                            type="button"
                            onClick={handleCopyPostToClipboard}
                            className="flex items-center gap-1 text-[11px] font-bold text-slate-400 hover:text-pink-400 transition-colors bg-slate-900 hover:bg-slate-850 border border-slate-800 px-2.5 py-1 rounded-sm cursor-pointer"
                            title="Copiar debate al portapapeles"
                          >
                            {copiedPostId === selectedPost.id ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span className="text-emerald-400">¡Copiado!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copiar</span>
                              </>
                            )}
                          </button>
                          <button 
                            onClick={() => setSelectedPost(null)}
                            className="text-slate-500 hover:text-slate-300 text-xs cursor-pointer border border-transparent hover:border-slate-800 hover:bg-slate-900 px-2.5 py-1 rounded-sm transition-all"
                          >
                            Cerrar Vista
                          </button>
                        </div>
                      </div>

                      <h4 className="font-extrabold text-base text-slate-100 uppercase tracking-tight">
                        {selectedPost.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-3.5 rounded-xl border border-slate-800/80">
                        {selectedPost.content}
                      </p>

                    </div>

                    {/* Comments listing section */}
                    <div className="space-y-3.5 pt-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1 block font-mono">
                        <MessageSquare className="w-4 h-4 text-pink-400" />
                        Comentarios en este Hilo ({selectedPost.comments.length}):
                      </span>

                      <div className="max-h-60 overflow-y-auto space-y-2.5 pr-1" id="selected-comments-list">
                        {selectedPost.comments.length === 0 ? (
                          <p className="text-center text-xs text-slate-500 italic py-6">
                            No hay comentarios adicionales en esta publicación. ¡Sé el primero en responder!
                          </p>
                        ) : (
                          selectedPost.comments.map(com => (
                            <div 
                              key={com.id}
                              className="p-3 bg-slate-900 border border-slate-850 rounded-xl text-xs space-y-1.5 hover:border-slate-800 transition-colors"
                            >
                              <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono">
                                <span className="font-bold text-slate-400">@{com.author}</span>
                                <span>{com.date}</span>
                              </div>
                              <p className="text-slate-300 leading-relaxed">{com.content}</p>
                            </div>
                          ))
                        )}
                      </div>

                    </div>

                    {/* New comment input form */}
                    <form 
                      onSubmit={handleAddComment}
                      className="border-t border-slate-800 pt-3.5 mt-3 flex gap-2.5 items-end"
                      id="respond-comment-form"
                    >
                      <div className="flex-1 space-y-1">
                        <textarea
                          required
                          value={newCommentText}
                          onChange={(e) => setNewCommentText(e.target.value)}
                          placeholder={`${newCommentAuthor ? '@' + newCommentAuthor : 'Responder'}... escribe tu análisis para la platea`}
                          rows={2}
                          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-pink-500"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="bg-pink-600 hover:bg-pink-500 text-white rounded-lg p-2.5 transition-all text-xs"
                        title="Enviar Comentario"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </form>

                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                    <div className="p-4 bg-slate-900 text-pink-400 border border-slate-800 rounded-full">
                      <MessageSquare className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200">Lectura de Debates en Curso</h4>
                      <p className="text-xs text-slate-500 max-w-xs mt-1 leading-relaxed">
                        Selecciona cualquier publicación de la columna izquierda para abrir el hilo completo, ver los comentarios de la samba y redactar tu propia respuesta.
                      </p>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </section>
        )}

        {/* TAB 6: TRIVIA QUIZ */}
        {activeTab === 'trivia' && (
          <section className="space-y-8 animate-fade-in" id="content-trivia">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-5 gap-4">
              <div>
                <h3 className="text-2xl font-black text-slate-100 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-teal-400" />
                  Trivia Fanática de la Pelota de Oro
                </h3>
                <p className="text-sm text-slate-400 mt-1 max-w-2xl">
                  ¿Qué tan hábil eres para registrar jugadas e historia? Demuestra tus conocimientos sobre la LVBP, leyendas universales de la MLB y los récords venezolanos más duros de Cooperstown.
                </p>
              </div>

              {/* Reset Trivia button */}
              <button
                onClick={handleResetTrivia}
                className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider bg-slate-850 hover:bg-slate-800 text-slate-300 border border-slate-800 rounded-lg px-4 py-2.5 transition-colors cursor-pointer self-start sm:self-center"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar Trivia</span>
              </button>
            </div>

            {/* Overall Score Badge */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4" id="trivia-overview-row">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest font-bold">Puntuación de Bateo</span>
                  <p className="text-xl font-bold font-mono mt-0.5 text-teal-400">{triviaScore} / {TRIVIA_QUESTIONS.length}</p>
                </div>
                <div className="p-2.5 bg-slate-900 border border-slate-800 text-teal-400 rounded-lg">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest font-bold">Porcentaje de Bateo (AVG)</span>
                  <p className="text-xl font-bold font-mono mt-0.5 text-amber-400">
                    .{Math.round((triviaScore / TRIVIA_QUESTIONS.length) * 1000) || '000'}
                  </p>
                </div>
                <div className="p-2.5 bg-slate-900 border border-slate-800 text-amber-400 rounded-lg">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest font-bold">Estado General</span>
                  <p className="text-sm font-bold mt-0.5 text-slate-300">
                    {triviaScore === TRIVIA_QUESTIONS.length ? '¡Jugador Triple Corona!' : triviaScore > 5 ? '¡Bateador de Élite!' : triviaScore > 2 ? 'Novato con Fuerza' : 'Preparando el Swing'}
                  </p>
                </div>
                <div className="p-2.5 bg-slate-900 border border-slate-800 text-cyan-400 rounded-lg">
                  <Users className="w-5 h-5" />
                </div>
              </div>

              {/* Quick helper tip */}
              <div className="bg-gradient-to-r from-emerald-950/20 to-slate-950 border border-slate-800 p-4 rounded-xl text-xs flex items-center leading-normal text-slate-400">
                <span>🎯 <strong>¡Consejo de Oro!</strong> Lee detenidamente las descripciones de la pestaña &quot;Fundamentos&quot; y &quot;Venezolanos en la MLB&rdquo; para obtener las respuestas correctas.</span>
              </div>
            </div>

            {/* List of current questions layout */}
            <div className="space-y-6">
              
              <div className="flex items-center gap-2" id="trivia-progression-bar">
                <span className="text-xs font-mono text-slate-400">Progreso del Bateador:</span>
                <div className="flex-1 h-2 bg-slate-950 rounded-full overflow-hidden flex gap-0.5">
                  {TRIVIA_QUESTIONS.map((_, i) => {
                    const isPassed = triviaLocked[TRIVIA_QUESTIONS[i].id];
                    const chosen = triviaAttempts[TRIVIA_QUESTIONS[i].id];
                    const isCorrect = chosen === TRIVIA_QUESTIONS[i].correctAnswer;
                    
                    let bgCol = "bg-slate-900";
                    if (isPassed) {
                      bgCol = isCorrect ? "bg-teal-500" : "bg-rose-500";
                    } else if (i === currentQuestionIdx) {
                      bgCol = "bg-cyan-500";
                    }

                    return (
                      <div 
                        key={i}
                        className={`flex-1 h-full transition-all ${bgCol}`}
                        onClick={() => setCurrentQuestionIdx(i)}
                        title={`Pregunta ${i + 1}`}
                      ></div>
                    );
                  })}
                </div>
              </div>

              {/* Question visual card layout */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 sm:p-6" id="active-question-card">
                
                {/* Active index banner header */}
                <div className="flex justify-between items-center pb-3 border-b border-slate-900 mb-5">
                  <span className="text-xs text-teal-400 font-mono font-bold uppercase">
                    Turno al Bate: Pregunta {currentQuestionIdx + 1} de {TRIVIA_QUESTIONS.length}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono bg-slate-900 border border-slate-850 px-2.5 py-0.5 rounded">
                    Béisbol Profesional
                  </span>
                </div>

                {/* Question title text structure */}
                <h4 className="text-lg font-bold text-slate-100 uppercase tracking-tight leading-normal mb-6">
                  {TRIVIA_QUESTIONS[currentQuestionIdx].question}
                </h4>

                {/* Options mapping container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6" id="active-trivia-options">
                  {TRIVIA_QUESTIONS[currentQuestionIdx].options.map((option, idx) => {
                    const activeQid = TRIVIA_QUESTIONS[currentQuestionIdx].id;
                    const selectedIdx = triviaAttempts[activeQid];
                    const isLocked = triviaLocked[activeQid];
                    const isCorrectOption = idx === TRIVIA_QUESTIONS[currentQuestionIdx].correctAnswer;
                    const isChosenOption = idx === selectedIdx;

                    let btnStyle = "bg-slate-900 border-slate-800 hover:border-teal-500/50";
                    let prefixCircle = "bg-slate-950 text-slate-500";

                    if (isChosenOption) {
                      btnStyle = "bg-teal-950/30 border-teal-500 text-teal-300";
                      prefixCircle = "bg-teal-600/50 text-teal-200";
                    }

                    if (isLocked) {
                      if (isCorrectOption) {
                        btnStyle = "bg-teal-900/40 border-teal-500 text-teal-200";
                        prefixCircle = "bg-teal-500 text-slate-950 font-black";
                      } else if (isChosenOption) {
                        btnStyle = "bg-rose-950/40 border-rose-500 text-rose-300";
                        prefixCircle = "bg-rose-500 text-slate-950 font-black";
                      } else {
                        btnStyle = "bg-slate-900/30 border-slate-900 text-slate-600 pointer-events-none";
                        prefixCircle = "bg-slate-950/50 text-slate-700";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        disabled={isLocked}
                        onClick={() => handleSelectTriviaOption(activeQid, idx)}
                        className={`p-4 rounded-xl border text-left text-xs sm:text-xs font-semibold cursor-pointer transition-all flex items-center gap-3 ${btnStyle}`}
                      >
                        <span className={`h-6 w-6 rounded-full flex items-center justify-center font-mono font-bold text-[11px] shrink-0 ${prefixCircle}`}>
                          {isLocked && isCorrectOption ? "✓" : isLocked && isChosenOption ? "✗" : String.fromCharCode(65 + idx)}
                        </span>
                        <span className="leading-snug">{option}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Form Action Controls inside scorecard question body */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-900 text-xs">
                  
                  {/* Previous Question Switcher */}
                  <button
                    disabled={currentQuestionIdx === 0}
                    onClick={() => setCurrentQuestionIdx(prev => prev - 1)}
                    className="px-3.5 py-2 bg-slate-900 hover:bg-slate-850 disabled:opacity-40 text-slate-300 font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                  >
                    Anterior
                  </button>

                  {/* Submission and explanations trigger */}
                  <div className="flex gap-2">
                    {!triviaLocked[TRIVIA_QUESTIONS[currentQuestionIdx].id] ? (
                      <button
                        disabled={triviaAttempts[TRIVIA_QUESTIONS[currentQuestionIdx].id] === undefined}
                        onClick={() => handleSubmitTriviaAnswer(TRIVIA_QUESTIONS[currentQuestionIdx].id, TRIVIA_QUESTIONS[currentQuestionIdx].correctAnswer)}
                        className="px-5 py-2 bg-teal-600 hover:bg-teal-500 text-slate-950 font-bold uppercase tracking-wider rounded-lg disabled:opacity-45 transition-colors cursor-pointer"
                      >
                        Enviar Swing (Respuesta)
                      </button>
                    ) : (
                      currentQuestionIdx < TRIVIA_QUESTIONS.length - 1 ? (
                        <button
                          onClick={() => setCurrentQuestionIdx(prev => prev + 1)}
                          className="px-5 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                        >
                          Siguiente Turno
                        </button>
                      ) : (
                        <button
                          onClick={() => setTriviaCompleted(true)}
                          className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                        >
                          Ver Reporte Final
                        </button>
                      )
                    )}
                  </div>

                </div>

                {/* Explanation block if question locked */}
                {triviaLocked[TRIVIA_QUESTIONS[currentQuestionIdx].id] && (
                  <div className="mt-5 p-4 bg-slate-900 rounded-xl border border-teal-500/10 space-y-2 animate-fade-in text-xs leading-relaxed text-slate-300">
                    <span className="font-extrabold text-teal-400 block uppercase tracking-wide font-mono text-[10px]">
                      ¿Sabías Que? / Crónica de la Respuesta:
                    </span>
                    <p className="italic">
                      {TRIVIA_QUESTIONS[currentQuestionIdx].explanation}
                    </p>
                  </div>
                )}

              </div>

            </div>

            {/* Over-lay score report once quiz completed */}
            {triviaCompleted && (
              <div className="p-6 bg-slate-950 border-2 border-emerald-500/40 rounded-2xl space-y-4 shadow-2xl animate-fade-in" id="trivia-final-report">
                <div className="flex items-center gap-3 border-b border-slate-900 pb-3">
                  <Trophy className="w-6 h-6 text-yellow-500 animate-spin" />
                  <div>
                    <h4 className="text-base font-extrabold text-slate-100 uppercase tracking-wide">
                      Reporte Técnico de Rendimiento de Bateo Final
                    </h4>
                    <p className="text-[11px] text-slate-500">Sindicado del Fanático Criollo</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs sm:text-xs">
                  <p>
                    Has completado las <strong>{TRIVIA_QUESTIONS.length} preguntas</strong> de béisbol. Tu efectividad de hits es de <strong>{(triviaScore / TRIVIA_QUESTIONS.length) * 100}%</strong>.
                  </p>
                  <p className="text-slate-400">
                    Sigue alimentando tus conocimientos compartiendo debates en el Foro, o pinchando las fichas técnicas interactiva de los 8 equipos de la LVBP.
                  </p>
                </div>

                <div className="flex gap-2.5 pt-2">
                  <button
                    onClick={handleResetTrivia}
                    className="px-4 py-2 bg-teal-600 text-slate-950 font-bold uppercase tracking-wider rounded-lg text-xs"
                  >
                    Batear de Nuevo
                  </button>
                  <button
                    onClick={() => { setTriviaCompleted(false); }}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-400 text-xs font-bold rounded-lg"
                  >
                    Cerrar Reporte
                  </button>
                </div>
              </div>
            )}

          </section>
        )}

      </main>

      {/* Primary Footer Section */}
      <footer className="bg-slate-950/80 border-t border-slate-800 py-8 mt-12 text-xs text-slate-500 text-center font-sans" id="app-footer-bar">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <div className="flex justify-center items-center gap-2">
            <Trophy className="w-4 h-4 text-emerald-400" />
            <span className="font-extrabold text-slate-400">Béisbol, Historias y LVBP venezolana</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-500 font-mono">Inmortalizando la Pelota Invernal</span>
          </div>
          
          <p className="max-w-2xl mx-auto leading-relaxed">
            Plataforma dedicada a la recopilación histórico-cultural del Béisbol Profesional. Datos del único exaltado con bronce Luis Aparicio, records históricos del inalcanzable Víctor Davalillo, debates en vivo con la samba, y simulación interactiva de marcadores en tiempo real.
          </p>

          <p className="text-[10px] text-slate-600 font-mono pt-2">
            Diseñado con precisión técnica • San Cristobal / Maracay / Caracas, Venezuela 🇻🇪 © 2026.
          </p>
        </div>
      </footer>

    </div>
  );
}
