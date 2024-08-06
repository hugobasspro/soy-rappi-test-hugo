import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TitleDescriptionImage } from 'src/app/utils/strapi/models/partials/title-description-image.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-benefits-block-mobile-carousel',
  templateUrl: './benefits-block-mobile-carousel.component.html',
  styleUrls: ['./benefits-block-mobile-carousel.component.scss'],
})
export class BenefitsBlockMobileCarouselComponent {

  @Input() title?: string = '';

  @Input() benefits?: TitleDescriptionImage[] = [];

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
}
