import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Match, Matches} from '../models';
import {ScoreCard} from '../models';
import {Commentary} from '../models/commentary';
import {MatchResponse} from '../models/match';
import {GraphBase} from '../models/graph';

const moment = require('moment');


@Injectable({
  providedIn: 'root'
})

export class CricketDataService {

  constructor(private http: HttpClient) {
  }

  private apiBaseUrl = 'https://api.cricket.com.au/';

  // the default value for this is 1 month if no date is specified
  // however during periods when there are no matches for extended periods
  // (COVID 19) the API will start returning no completed matches.
  // The API will still only return 5 completed matches at once.
  private earliestCompletedMatchDate = '2020-01-01T17%3A00%3A00Z'

  private static handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  public getCurrentMatches(): Promise<Matches> {
    const url = `${this.apiBaseUrl}matches?completedLimit=5&upcomingLimit=5&startDate=${this.earliestCompletedMatchDate}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => {
        const matches = response as Matches;
        matches.matchList.matches.forEach(match => {
          if (match.matchSummaryText === '') {
            match.matchSummaryText = `Play will begin at ${moment(match.startDateTime).format('hh:mmA DD/MM/YY')}`;
          }
        });
        return matches;
      })
      .catch(CricketDataService.handleError);
  }

  public getMatch(seriesId: number, matchId: number): Promise<Match> {
    const url = `${this.apiBaseUrl}matches/${seriesId}/${matchId}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => {
        const matchResponse = response as MatchResponse;
        const match = matchResponse.match;
        if (match.matchSummaryText === '') {
          match.matchSummaryText = `Play will begin at ${moment(match.startDateTime).format('hh:mmA DD/MM/YY')}`;
        }
        return match;
      })
      .catch(CricketDataService.handleError);
  }

  public getGraphForMatchSeries(match: number, series: number): Promise<GraphBase> {
    const url = `${this.apiBaseUrl}graph/${series}/${match}?format=json`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as GraphBase)
      .catch(CricketDataService.handleError);
  }

  public getScorecardForMatchSeries(match: number, series: number): Promise<ScoreCard> {
    const url = `${this.apiBaseUrl}scorecards/full/${series}/${match}?IncludeVideoReplays=false&format=json`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as ScoreCard)
      .catch(CricketDataService.handleError);
  }

  public getCommentaryForMatchSeries(match: number, series: number): Promise<Commentary> {
    const url = `${this.apiBaseUrl}/comments/${series}/${match}?IncludeVideoReplays=false&format=json`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as ScoreCard)
      .catch(CricketDataService.handleError);
  }

}
