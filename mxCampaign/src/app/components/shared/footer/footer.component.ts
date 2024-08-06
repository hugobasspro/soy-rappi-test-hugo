import { Component, OnInit } from '@angular/core';
import DataJson from './../../../../assets/data.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  url_facebook:string = "";
  url_youtube:string = "";

  constructor() { }

  ngOnInit(): void {

    this.url_facebook = DataJson.url_facebook;
    this.url_youtube = DataJson.url_youtube;

  }

}
