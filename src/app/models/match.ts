import { Team } from './team';
export class Match {
    "id": number;
    "matchTypeId": number;
    "fixturePriority": number;
    "statisticsProvider": string;
    "series": Series;
    "name": string;
    "status": string;
    "venue": Venue;
    "homeTeam": Team;
    "awayTeam": Team;
    "currentMatchState": string;
    "isMultiDay": boolean;
    "matchSummaryText": string;
    "isLive": boolean;
    "currentInningId": number;
    "isMatchDrawn": boolean;
    "isMatchAbandoned": boolean;
    "startDateTime": string;
    "endDateTime": string;
    "isWomensMatch": string;

    public static LIVE = 'LIVE';
}

export class Series {
    "id": number;
    "name": string;
    "shortName": string;
    "shieldImageUrl": string;
    "seriesUrl": string;
    "isDrinksNotificationEnabled": boolean;
}

class Venue {
    "name": string;
    "location": string;
    "latitude": any;
    "longitude": any;
    "antisocialPhoneNumber": string;
}