import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ScoreCardModule } from './components/score-card/score-card.module';
import { AppRoutesModule } from './components/routes/app-routes.module';
import { AppLayoutComponent } from './components/layout/app-layout/app-layout.component';
import { HeaderComponent } from './components/layout/header-component/app-header.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppLayoutComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ScoreCardModule,
    AppRoutesModule
  ],
  entryComponents: [],
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
export class AppModule {
}
