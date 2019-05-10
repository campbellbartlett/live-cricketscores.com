import { Team } from '.';
import { Series } from './match';

export class News {
    meta: any;
    newsArticles: [NewsArticle]
}

export class NewsArticle {
    id: string;
    title: string;
    author: string;
    createdDate: string;
    image: string;
    url: string;
    hasVideo: boolean;
    publishDate: string;
    isMatchPreview: boolean;
    isMatchWrap: boolean;
    summaryText: string;
    series: [Series];
    teams: [Team];
    players: [any];
}