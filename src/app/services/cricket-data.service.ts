import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Matches } from '../models/matches'; 
import { ScoreCard } from '../models/scorecard';

@Injectable({
  providedIn: 'root'
})

export class CricketDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'https://api.cricket.com.au/';

  public getCurrentMatches(): Promise<Matches> {
    const url: string = `${this.apiBaseUrl}matches`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Matches)
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

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

}