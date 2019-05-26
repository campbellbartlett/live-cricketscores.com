import {Series} from './match';
import {Team} from './team';

export class ScoreCard {
  'meta': Meta;
  'fullScorecard': FullScoreCard;
}

export class FullScoreCard {
  'innings': [Innings];
  'fullScorecardAwards': {
    'mostRunsAward': MostRunsAward;
    'mostWicketsAward': MostWicketsAward,
    'manOfTheMatchId': number;
    'manOfMatchBattingResults': [any],
    'manOfMatchBowlingResults': [any],
    'mostRunsAwardPlayerResults': [Batsmen],
    'mostWicketsAwardPlayerResults': [Bowler]
  };
}

class Meta {
  'matchTypeId': number;
  'series': Series;
}

export class Innings {
  'id': number;
  'isDeclared': boolean;
  'name': string;
  'shortName': string;
  'team': Team;
  'batsmen': [Batsmen];
  'bowlers': [Bowler];
  'wicket': string;
  'run': string;
  'over': string;
  'extra': string;
  'bye': string;
  'legBye': string;
  'wide': string;
  'noBall': string;
  'runRate': string;
  'requiredRunRate': string;
}

class Batsmen {
  'id': number;
  'name': string;
  'runs': string;
  'balls': string;
  'strikeRate': string;
  'fours': string;
  'sixes': string;
  'howOut': string;
  'fallOfWicket': string;
  'fallOfWicketOver': string;
  'fowOrder': number;
}

class Bowler {
  'id': number;
  'name': string;
  'imageURL': string;
  'runsConceded': string;
  'maidens': string;
  'wickets': string;
  'overs': string;
  'wides': string;
  'noBalls': string;
  'economy': string;
}

class MostRunsAward {
  'id': number;
  'name': string;
  'runs': string;
  'balls': string;
  'strikeRate': string;
  'fowOrder': number;
}

class MostWicketsAward {
  'id': number;
  'name': string;
  'runsConceded': string;
  'wickets': string;
  'overs': string;
  'economy': string;
}
