import { Component, OnInit } from '@angular/core';
import { NewsDataService } from 'src/app/services/news.data.service';
import { News } from 'src/app/models/newsArticle';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
  providers: [NewsDataService]
})
export class NewsPageComponent implements OnInit {

  public news: News;

  constructor(
    private newsDataService: NewsDataService) { }

  ngOnInit() {
    this.newsDataService.getLatestNews()
    .then(response => {
      this.news = response;
    })
  }

}
