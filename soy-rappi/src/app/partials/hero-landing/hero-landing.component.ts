import { Component, Input, OnInit } from '@angular/core';
import { HeroInterface } from 'src/app/utils/strapi/models/blocks/hero-interface';

@Component({
  selector: 'app-hero-landing',
  templateUrl: './hero-landing.component.html',
  styleUrls: ['./hero-landing.component.scss']
})
export class HeroLandingComponent implements OnInit {

  @Input() data!: HeroInterface;
  
  constructor() { }

  ngOnInit(): void {
  }

}
