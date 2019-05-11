import { NewsArticle } from './../../../models/newsArticle';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewsArticleDialogComponent } from '../news-article-dialog/news-article-dialog.component';


@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  @Input()
  public article: NewsArticle;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  showDialog() {
    this.dialog.open(NewsArticleDialogComponent, {
      panelClass: 'news-article-dialog',
      width: '80%',
      height: '80%',
      data: { article: this.article }
    });
  }

}
