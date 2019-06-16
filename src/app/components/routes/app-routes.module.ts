import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { NewsArticleDialogComponent } from '../news/news-article-dialog/news-article-dialog.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SocialIconComponent } from '../social-icon/social-icon.component';
import { NewsViewComponent } from '../news/news-view/news-view.component';
import { NewsCardComponent } from '../news/news-card/news-card.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { ScoreCardModule } from '../score-card/score-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'about',
        component: AboutPageComponent
      },
      {
        path: 'news',
        component: NewsPageComponent
      }
    ]),

    ScoreCardModule
  ],
  entryComponents: [NewsArticleDialogComponent],
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SocialIconComponent,
    NewsViewComponent,
    NewsCardComponent,
    NewsPageComponent,
    NewsArticleDialogComponent
  ],
  exports: [
    HomePageComponent,
    AboutPageComponent,
    SocialIconComponent,
    NewsViewComponent,
    NewsCardComponent,
    NewsPageComponent,
    NewsArticleDialogComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppRoutesModule { }
