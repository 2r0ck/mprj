import { Component, OnInit, Input } from '@angular/core';
import { HeroModel } from "../../models/hero-model";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { HeroServiceService } from "../../services/hero-service.service";
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-component',
  templateUrl: './hero-component.component.html',
  styleUrls: ['./hero-component.component.css']
})
export class HeroComponentComponent implements OnInit {

  //@Input() 
  hero: HeroModel;

  constructor( private heroService: HeroServiceService,  private route: ActivatedRoute,  private location: Location) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
    .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
  this.location.back();
}

}
