import { Component, OnInit } from '@angular/core';
import DataJson from './../../../../assets/data.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  URLAppDownload:string = "";

  constructor() { }

  ngOnInit(): void {

    // -------------------------------
    // URL de descarga de la app
    // Se obtiene del archivo de configuración: data.json
    // -------------------------------
    this.URLAppDownload = DataJson["url_app_download"];

  }

}
