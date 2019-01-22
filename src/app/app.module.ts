import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppLayoutComponent } from './internal-components/app-layout/app-layout.component';
import { NavBarComponent } from './internal-components/nav-bar/nav-bar.component';
import { HomePageComponent } from './internal-components/home-page/home-page.component';
import { FullScoreCardComponent } from './internal-components/full-score-card/full-score-card.component';
import { AboutPageComponent } from './internal-components/about-page/about-page.component';
import { SocialIconComponent } from './internal-components/social-icon/social-icon.component';
import { MiniScoreCardComponent } from './internal-components/mini-score-card/mini-score-card.component';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppLayoutComponent,
    NavBarComponent,
    HomePageComponent,
    FullScoreCardComponent,
    AboutPageComponent,
    SocialIconComponent,
    MiniScoreCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppLayoutComponent],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
