import { NewsArticleDialogComponent } from './components/news/news-article-dialog/news-article-dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {
  AppLayoutComponent,
  NavBarComponent,
  SidenavListComponent,
  AboutPageComponent,
  HomePageComponent,
  BattingTableComponent,
  BowlingTableComponent,
  FullScoreCardComponent,
  MiniScoreCardComponent,
  SocialIconComponent,
  CommentaryCardComponent,
  CommentaryContainerComponent,
  NewsViewComponent,
  NewsCardComponent,
  NewsPageComponent
} from './components/index'

import {
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
  MatListModule
} from '@angular/material';


import { RunsWicketsDeclaredPipe } from './components/pipe/runs-wickets-declared/runs-wickets-declared.pipe';
import { CommentaryHeaderPipe } from './components/pipe/commentary-header.pipe';
import { CommentaryTextPipe } from './components/pipe/commentary-text.pipe';
import { MatchTimePipe } from './components/pipe/match-time.pipe';

@NgModule({
  declarations: [
    AppLayoutComponent,
    NavBarComponent,
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
    SidenavListComponent,
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
