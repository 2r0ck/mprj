import { Component, OnInit, Input } from '@angular/core';
import { HeroModel } from "../../models/hero-model";

@Component({
  selector: 'hero-component',
  templateUrl: './hero-component.component.html',
  styleUrls: ['./hero-component.component.css']
})
export class HeroComponentComponent implements OnInit {

  @Input() hero: HeroModel;

  constructor() { }

  ngOnInit() {
  }

}
