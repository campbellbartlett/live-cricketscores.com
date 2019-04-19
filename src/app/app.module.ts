import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import {
  AppLayoutComponent,
  NavBarComponent,
  AboutPageComponent,
  HomePageComponent,
  BattingTableComponent,
  BowlingTableComponent,
  FullScoreCardComponent,
  MiniScoreCardComponent,
  SocialIconComponent,
  CommentaryCardComponent,
  CommentaryContainerComponent
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
  MatSlideToggleModule
} from '@angular/material';


import { RunsWicketsDeclaredPipe } from './components/score-card/pipe/runs-wickets-declared/runs-wickets-declared.pipe';
import { CommentaryHeaderPipe } from './components/score-card/pipe/commentary-header.pipe';
import { CommentaryTextPipe } from './components/score-card/pipe/commentary-text.pipe';

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
    CommentaryCardComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
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
    AppRoutingModule,
    HttpClientModule
    ],
  entryComponents: [FullScoreCardComponent],
  bootstrap: [AppLayoutComponent],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
