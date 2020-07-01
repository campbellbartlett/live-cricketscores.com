import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Matches } from '../models/matches';
import { ScoreCard } from '../models/scorecard';
import { Commentary } from '../models/commentary';
import { Subject, Observable } from 'rxjs';
import { News } from '../models/newsArticle';
var moment = require('moment');


@Injectable({
    providedIn: 'root'
})

export class NewsDataService {

    constructor(private http: HttpClient) { }

    private apiBaseUrl = 'https://api.cricket.com.au/';

    public getLatestNews(): Promise<News> {
        const url: string = `${this.apiBaseUrl}news?format=json`;
        return this.http
            .get(url)
            .toPromise()
            .then(response => {
                const news = response as News;
                return news;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Something has gone wrong', error);
        return Promise.reject(error.message || error);
    }

}
