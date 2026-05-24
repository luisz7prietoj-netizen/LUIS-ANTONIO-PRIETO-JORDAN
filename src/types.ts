export interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

export interface ForumPost {
  id: string;
  title: string;
  category: 'MLB' | 'LVBP' | 'General' | 'Equipos';
  content: string;
  author: string;
  date: string;
  upvotes: number;
  comments: Comment[];
  likedBy?: string[]; // user emails or IPs to track upvotes
}

export interface TriviaQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface LegendaryTeam {
  id: string;
  name: string;
  year: string;
  league: 'MLB' | 'LVBP';
  summary: string;
  keyPlayers: string[];
  records: string;
  achievements: string[];
  color: string; // Tailwind border or background accent
}

export interface MLBLegend {
  id: string;
  name: string;
  nickname: string;
  yearsActive: string;
  positions: string;
  achievements: string[];
  careerHighlights: string;
  milestoneText: string;
}

export interface LVBPTeamStats {
  id: string;
  name: string;
  shortName: string;
  championships: number;
  founded: string;
  city: string;
  summary: string;
  legendaryPlayers: string[];
}

export interface LVBPLegendaryRecord {
  id: string;
  category: string;
  player: string;
  value: string;
  description: string;
}

export interface DailyGame {
  id: string;
  teamHome: string;
  teamAway: string;
  shortHome: string;
  shortAway: string;
  runsHome: number;
  runsAway: number;
  hitsHome: number;
  hitsAway: number;
  errorsHome: number;
  errorsAway: number;
  status: 'scheduled' | 'live' | 'finished';
  inning: string;
  currentPlay?: string;
  league: 'MLB' | 'LVBP';
  time: string;
  isFavorite?: boolean;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  gameId?: string;
}

export interface Prospect {
  id: string;
  name: string;
  teamMLB: string;
  lvlTripleA: string;
  teamLVBP: string;
  position: string;
  age: number;
  overallGrade: number; // 20-80 scale
  scoutingGrades: {
    contact: number;
    power: number;
    speed: number;
    defense: number;
    arm: number;
  };
  scoutingReport: string;
  statsCurrentYear: {
    games: number;
    avg?: number;
    hr?: number;
    ops?: number;
    sb?: number;
    era?: number;
    whip?: number;
    so?: number;
  };
  projArrivalYear: number;
  highlights: string;
}

