import { Component, OnInit } from '@angular/core';
import { HeroModel } from "./models/hero-model";
import { HeroServiceService } from "./services/hero-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroServiceService]
})
export class AppComponent implements OnInit  {
  
   public constructor(private hService: HeroServiceService){
    
  }

  ngOnInit(): void {
    this.hService.getHeroesSlow().then(x=>this.heroes = x);
  }
  title = 'Tour of Heroes';
  
  selectedHero : HeroModel;

  heroes: HeroModel[];

  onSelect(model: HeroModel){
     this.selectedHero = model;
  }

}




