export class Commentary {
  meta: any;
  commentary: {
    innings: [
      {
        id: number;
        name: string;
        shortName: string;
        teamId: number;
        teamColour: string;
        overs: [Over]
      }
      ]
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
