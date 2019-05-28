import {Series} from './match';

export class Commentary {
  meta: {
    series: Series;
    matchTypeId: number;
    matchId: number;
    total: number;
    nextPage: number;
  };
  commentary: {
    innings: [Inning]
  };
}

export class Inning {
  id: number;
  name: string;
  shortName: string;
  teamId: number;
  teamColour: string;
  overs: [Over];
}

export class Over {
  id: number;
  uniqueOverId: number;
  number: number;
  balls: [Ball];
  overSummary: {
    bowlersId: number;
    bowlersName: string;
    bowlersImage: string;
    bowlersBowlingFigures: string;
    battingTeamsScore: string;
    runsConcededinOver: string;
    extrasConcededinOver: string;
    wicketsTakeninOver: string;
  };
}

export class Ball {
  ballNumber: number;
  comments: [Comment];
  id: number;
  result: string;
}

export class Comment {
  id: number;
  ballType: string;
  dateTime: string;
  text: string;
  isFallOfWicket: boolean;
  batsmanId: number;
  batsmanName: string;
  batsmanImageURL: string;
  bowlerId: number;
  bowlerName: string;
  bowlerImageURL: string;
  runs: string;
  battingTeamScore: number;
  offStrikeBatsmanId: number;
  wickets: number;
  wicketSummary: {
    batsmanImage: string;
    batsmanName: string;
    dismissalMethod: string;
    batsmanRuns: string;
    ballsFaced: string;
    batsman4sinInnings: string;
    batsman6sinInnings: string;
    strikeRate: string;
  };
}
