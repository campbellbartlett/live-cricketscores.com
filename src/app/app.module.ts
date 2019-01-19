import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FullScoreCardComponent } from './full-score-card/full-score-card.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SocialIconComponent } from './social-icon/social-icon.component';

@NgModule({
  declarations: [
    AppLayoutComponent,
    NavBarComponent,
    HomePageComponent,
    FullScoreCardComponent,
    AboutPageComponent,
    SocialIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppLayoutComponent]
})
export class AppModule { }
