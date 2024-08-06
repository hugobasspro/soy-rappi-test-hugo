import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BenefitsNewsShoppingCenters } from 'src/app/utils/strapi/models/blocks/benefits-news-shopping-centers.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-benefits-news-shopping-centers',
  templateUrl: './benefits-news-shopping-centers.component.html',
  styleUrls: ['./benefits-news-shopping-centers.component.scss']
})
export class BenefitsNewsShoppingCentersComponent implements OnInit {

  @Input() data!: BenefitsNewsShoppingCenters;

  shoppingCenterSlides: any[] = [

  ]

  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }

  constructor(public uploadService: UploadService) { }

  ngOnInit(): void {
    this.data.images.forEach((image: any) => {
      this.shoppingCenterSlides.push({
        id: image.id || image.name,
        src: this.uploadService.makeUrl(image),
        alt: image.alternativeText || 'image',
        title: image.caption || 'image'
      })
    })
  }
}
