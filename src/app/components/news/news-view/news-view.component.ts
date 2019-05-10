import { News } from './../../../models/newsArticle';
import { Component, OnInit } from '@angular/core';
import { NewsDataService } from 'src/app/services/news.data.service';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss'],
  providers: [NewsDataService]
})
export class NewsViewComponent implements OnInit {

  news: News;

  constructor(private newsDataService: NewsDataService) { }

  ngOnInit() {
    this.newsDataService.getLatestNews()
    .then(response => {
      this.news = response;
    });
  }

}
