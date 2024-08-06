import { Component, OnInit } from '@angular/core';
import DataJson from './../../../../assets/data.json';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html'
})
export class SliderComponent implements OnInit {

  lista:any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.lista = DataJson.slider;
  }

}
