import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/index';
import { AboutPageComponent } from './components/index';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: "about",
    component: AboutPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
