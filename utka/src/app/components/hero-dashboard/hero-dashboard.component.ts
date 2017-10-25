import { Component, OnInit } from '@angular/core';
import { HeroModel } from "../../models/hero-model";
import { HeroServiceService } from "../../services/hero-service.service";

@Component({
  selector: 'app-hero-dashboard',
  templateUrl: './hero-dashboard.component.html',
  styleUrls: ['./hero-dashboard.component.css']
})
export class HeroDashboardComponent implements OnInit {

   heroes: HeroModel[];

  public constructor(private hService: HeroServiceService){
    
  }

  ngOnInit(): void {
    this.hService.getHeroes().then(x=>this.heroes = x.slice(1,5));
  }
  

}
