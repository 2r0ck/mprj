import { Injectable } from '@angular/core';
import { HeroModel } from "../models/hero-model";
import { HEROES } from "./heroes-simpl-storage";

@Injectable()
export class HeroServiceService {

  constructor() { }

   getHeroes(): Promise<HeroModel[]> {
    return Promise.resolve(HEROES)
  }

   getHeroesSlow(): Promise<HeroModel[]> {
    return new Promise(reslv=>setTimeout(()=>reslv(this.getHeroes()),1500));
  }

  getHero(id: number):Promise<HeroModel>{
    return this.getHeroes().then(x=>x.find(h=>h.id===id));
  }

}
