import { Routes, RouterModule } from '@angular/router';
import { HeroMainComponent } from "./components/hero-main/hero-main.component";
import { HeroComponentComponent } from "./components/hero-component/hero-component.component";
import { HeroDashboardComponent } from "./components/hero-dashboard/hero-dashboard.component";
import { NgModule } from "@angular/core";
import { TestViewComponent } from "./components/test-view/test-view.component";
import { MyViewComponent } from "./components/my-view/my-view.component";

export const UtkaRoutes: Routes =[
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: "heroes", component: HeroMainComponent},
  {path: 'detail/:id',component: HeroComponentComponent},
  {path: 'dashboard',  component: HeroDashboardComponent },
  {path: 'testview', component : TestViewComponent},
  {path: 'myview', component : MyViewComponent}
]
 

@NgModule({
  imports: [ RouterModule.forRoot(UtkaRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}