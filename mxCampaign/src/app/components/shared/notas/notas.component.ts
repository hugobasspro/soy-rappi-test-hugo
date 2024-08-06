import { Component, OnInit } from '@angular/core';
import DataJson from './../../../../assets/data.json';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styles: [
  ]
})
export class NotasComponent implements OnInit {

  notas:any[] = [];

  constructor() { }

  ngOnInit(): void {

    this.notas = DataJson.notas;

  }

}
