import {Series} from './match';

export interface GraphMeta {
  match: string;
  series: Series;
  isLimitedOvers: boolean;
}

export interface GraphTeam {
  id: number;
  name: string;
  shortName: string;
}

export interface GraphBatsman {
  playerId: number;
  name: string;
  position: string;
  run: string;
}

export interface GraphBowler {
  playerId: number;
  name: string;
  bowlingOver: string;
}

export interface GraphFielder {
  playerId: number;
  name: string;
}

export interface GraphWicket {
  ballId: number;
  ballNumber: string;
  hasVideo: boolean;
  howOut: string;
  batsman: GraphBatsman;
  bowler: GraphBowler;
  fielder: GraphFielder;
}

export interface GraphOver {
  overId: number;
  hasVideo: boolean;
  totalRun: string;
  run: string;
  runRate: string;
  wickets: GraphWicket[];
}


export interface GraphInning {
  inningIndex: number;
  id: number;
  battingTeamId: number;
  bowlingTeamId: number;
  battingTeamType: string;
  totalRuns: number;
  requiredRunRate: string;
  overs: GraphOver[];
}

export interface Graph {
  homeTeam: GraphTeam;
  awayTeam: GraphTeam;
  innings: GraphInning[];
}

export interface GraphBase {
  meta: GraphMeta;
  graph: Graph;
}
