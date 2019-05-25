import {NewsArticleDialogComponent} from './components/news/news-article-dialog/news-article-dialog.component';
import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {
  AboutPageComponent,
  AppLayoutComponent,
  BattingTableComponent,
  BowlingTableComponent,
  CommentaryCardComponent,
  CommentaryContainerComponent,
  FullScoreCardComponent,
  HeaderComponent,
  HomePageComponent,
  MiniScoreCardComponent,
  NewsCardComponent,
  NewsPageComponent,
  NewsViewComponent,
  SocialIconComponent
} from './components/index';

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';


import {RunsWicketsDeclaredPipe} from './components/pipe/runs-wickets-declared/runs-wickets-declared.pipe';
import {CommentaryHeaderPipe} from './components/pipe/commentary-header.pipe';
import {CommentaryTextPipe} from './components/pipe/commentary-text.pipe';
import {MatchTimePipe} from './components/pipe/match-time.pipe';

@NgModule({
  declarations: [
    AppLayoutComponent,
    HeaderComponent,
    HomePageComponent,
    FullScoreCardComponent,
    AboutPageComponent,
    SocialIconComponent,
    MiniScoreCardComponent,
    BattingTableComponent,
    BowlingTableComponent,
    RunsWicketsDeclaredPipe,
    CommentaryHeaderPipe,
    CommentaryTextPipe,
    CommentaryContainerComponent,
    CommentaryCardComponent,
    MatchTimePipe,
    NewsViewComponent,
    NewsCardComponent,
    NewsPageComponent,
    NewsArticleDialogComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatTabsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule
  ],
  entryComponents: [FullScoreCardComponent, NewsArticleDialogComponent],
  bootstrap: [AppLayoutComponent],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
