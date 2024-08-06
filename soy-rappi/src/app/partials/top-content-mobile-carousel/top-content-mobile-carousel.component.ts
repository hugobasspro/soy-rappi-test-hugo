import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TabContentsBlock } from 'src/app/utils/strapi/models/blocks/tab-contents.interface';
import { TitleDescriptionImage } from 'src/app/utils/strapi/models/partials/title-description-image.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
@Component({
  selector: 'app-top-content-mobile-carousel',
  templateUrl: './top-content-mobile-carousel.component.html',
  styleUrls: ['./top-content-mobile-carousel.component.scss'],
})
export class TopContentMobileCarouselComponent {

  @Input() tabs: TitleDescriptionImage[] | undefined = [];

  @Input() data: TabContentsBlock | undefined;

  @Input() title: any;

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
