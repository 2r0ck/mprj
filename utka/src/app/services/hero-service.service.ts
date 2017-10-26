import { Injectable } from '@angular/core';
import { HeroModel } from "../models/hero-model";
import { HEROES } from "./heroes-simpl-storage";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroServiceService {
  heroesUrl: string;

  constructor(private http: Http) {

    this.heroesUrl = "http://localhost:5000/api/values";
   }

   getHeroes(): Promise<HeroModel[]> {
    //return Promise.resolve(HEROES)
    return this.getFromApi();
  }

   getHeroesSlow(): Promise<HeroModel[]> {
    return new Promise(reslv=>setTimeout(()=>reslv(this.getHeroes()),1500));
  }

  getHero(id: number):Promise<HeroModel>{
    return this.getHeroes().then(x=>x.find(h=>h.id===id));
  }


  getFromApi():Promise<HeroModel[]> {
    return this.http.get(this.heroesUrl)
             .toPromise()
             .then(response =>{
                return response.json() as HeroModel[];
             })              
             .catch(this.handleError);
  }

  
  
  private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

}
