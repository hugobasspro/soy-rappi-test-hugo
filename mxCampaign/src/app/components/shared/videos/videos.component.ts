import { Component, OnInit } from '@angular/core';
import DataJson from './../../../../assets/data.json';

declare var $: any;

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html'
})
export class VideosComponent implements OnInit {

  lista:any[] = [];

  videoSrc:string = "";

  constructor() { }

  ngOnInit(): void {
    this.lista = DataJson.videos;

    // Declaro el evento de Cerrado de Modal
    $('#myModalVideo').on('hide.bs.modal', ()=> {
      $("#video").attr('src', '');
    });


  }

  showVideo( url:string){
    console.log("CLICK VIDEO::::", url);
    this.videoSrc = url + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0";
  }

}
