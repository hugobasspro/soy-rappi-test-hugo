import { Component, Input } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { DepositionCard } from 'src/app/utils/strapi/models/blocks/deposition-card.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
@Component({
  selector: 'app-depostions-block-mobile-carousel',
  templateUrl: './depostions-block-mobile-carousel.component.html',
  styleUrls: ['./depostions-block-mobile-carousel.component.scss'],
})
export class DepositionsBlockMobileCarouselComponent {

  @Input() data: DepositionCard | undefined;

  @Input() title?: string = '';

  startPosition  : number = 0;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: false,
    autoHeight: true,
    navText: ['<img src="assets/img/icons/slider-arrow-left.png">',
              '<img src="assets/img/icons/slider-arrow-right.png">'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      1024: {
        items: 1,
      },
    },
    nav: true,
  };

  constructor(public uploadService : UploadService) { }

  getData(data: SlidesOutputData) {
    if (data && data.startPosition) {
      this.startPosition = data.startPosition;
    } else {
      this.startPosition = 0;
    }
  }
}
