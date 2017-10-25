import { Component, OnInit } from '@angular/core';
import { HeroModel } from "../../models/hero-model";
import { HeroServiceService } from "../../services/hero-service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'hero-main',
  templateUrl: './hero-main.component.html',
  styleUrls: ['./hero-main.component.css'] 
})
export class HeroMainComponent implements OnInit  {
  
  selectedHero : HeroModel;

  heroes: HeroModel[];

  public constructor(private hService: HeroServiceService,  private router: Router,){
    
  }

  ngOnInit(): void {
    this.hService.getHeroes().then(x=>this.heroes = x);
  }
  
  
  
  onSelect(model: HeroModel){
     this.selectedHero = model;
  }

  gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
}

}




