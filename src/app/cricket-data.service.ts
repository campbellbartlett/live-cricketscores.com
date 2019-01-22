import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Matches } from './matches'; 

@Injectable({
  providedIn: 'root'
})

export class CricketDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://api.cricket.com.au/';

  public getCurrentMatches(): Promise<Matches> {
    const url: string = `${this.apiBaseUrl}matches`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Matches)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

}