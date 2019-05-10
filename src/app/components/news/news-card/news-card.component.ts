import { NewsArticle } from './../../../models/newsArticle';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  @Input()
  public article: NewsArticle;

  constructor() { }

  ngOnInit() {
  }

}
