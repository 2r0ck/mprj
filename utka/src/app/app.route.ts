import { Routes, RouterModule } from '@angular/router';
import { HeroMainComponent } from "./components/hero-main/hero-main.component";
import { HeroComponentComponent } from "./components/hero-component/hero-component.component";
import { HeroDashboardComponent } from "./components/hero-dashboard/hero-dashboard.component";
import { NgModule } from "@angular/core";

export const UtkaRoutes: Routes =[
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: "heroes", component: HeroMainComponent},
  {path: 'detail/:id',component: HeroComponentComponent},
  {path: 'dashboard',  component: HeroDashboardComponent },
]
 

@NgModule({
  imports: [ RouterModule.forRoot(UtkaRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}