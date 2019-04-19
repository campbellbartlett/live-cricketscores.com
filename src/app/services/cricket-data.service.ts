import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Matches } from '../models/matches';
import { ScoreCard } from '../models/scorecard';
import { Commentary } from '../models/commentary';
import { Subject, Observable } from 'rxjs';
var moment = require('moment');


@Injectable({
  providedIn: 'root'
})

export class CricketDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'https://api.cricket.com.au/';

  public getCurrentMatches(): Promise<Matches> {
    const url: string = `${this.apiBaseUrl}matches?completedLimit=5&upcomingLimit=5`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => {
        const matches = response as Matches;
        matches.matchList.matches.forEach(match => {
          if (match.matchSummaryText === "") {
            match.matchSummaryText = `Play will begin at ${moment(match.startDateTime).format("hh:mmA DD/MM/YY")}`;
          }
        })
        return matches;
      })
      .catch(this.handleError);
  }

  public getScorecardForMatchSeries(match: number, series: number): Promise<ScoreCard> {
    const url: string = `${this.apiBaseUrl}scorecards/full/${series}/${match}?IncludeVideoReplays=false`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as ScoreCard)
      .catch(this.handleError);
  }

  public getCommentaryForMatchSeries(match: number, series: number): Promise<Commentary> {
    const url: string = `${this.apiBaseUrl}/comments/${series}/${match}?IncludeVideoReplays=false`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as ScoreCard)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

}