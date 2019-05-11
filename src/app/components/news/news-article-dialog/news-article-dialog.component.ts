import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NewsArticle } from 'src/app/models/newsArticle';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-news-article-dialog',
  templateUrl: './news-article-dialog.component.html',
  styleUrls: ['./news-article-dialog.component.scss']
})
export class NewsArticleDialogComponent implements OnInit {

  article: NewsArticle;
  articleUrl: SafeResourceUrl;

  constructor(public dialogRef: MatDialogRef<NewsArticle>,
    public sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.article = this.data.article;
    this.articleUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(this.article.url);
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
