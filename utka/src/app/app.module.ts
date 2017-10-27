import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroComponentComponent } from './components/hero-component/hero-component.component';
import { HeroMainComponent } from "./components/hero-main/hero-main.component";
import { HeroServiceService } from "./services/hero-service.service";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.route";
import { HeroDashboardComponent } from './components/hero-dashboard/hero-dashboard.component';
import { TestViewComponent } from './components/test-view/test-view.component';
import { HttpModule }    from '@angular/http';
import { MyViewComponent } from './components/my-view/my-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponentComponent,
    HeroMainComponent,
    HeroDashboardComponent,
    TestViewComponent,
    MyViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
   providers: [HeroServiceService],
  bootstrap: [AppComponent],

})
export class AppModule { }
