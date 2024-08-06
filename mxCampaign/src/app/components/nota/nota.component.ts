import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import DataJson from './../../../assets/data.json';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html'
})
export class NotaComponent implements OnInit {

  nota:any = {};

  constructor( private activatedRoute:ActivatedRoute) {

    this.activatedRoute.params.subscribe( params => {
      //console.log("SLUG:::", params['slug']);

      for(let item of DataJson.notas){
        if(item.slug == params['slug']){
          this.nota = item;
          break;
        }
      }

      //console.log("NOTA:::", this.nota);
    });

   }

  ngOnInit(): void {
  }

}
