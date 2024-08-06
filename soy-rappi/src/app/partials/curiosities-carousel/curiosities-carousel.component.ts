import { Component, Input } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { SharedFunctionsService } from 'src/app/utils/shared/services/functions.service';
import { CuriositiesCarouselItem } from 'src/app/utils/strapi/models/partials/curiosities-carousel-item.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';


@Component({
  selector: 'app-curiosities-carousel',
  templateUrl: './curiosities-carousel.component.html',
  styleUrls: ['./curiosities-carousel.component.scss', './curiosities-carousel-2.component.scss'],
})
export class CuriositiesCarouselComponent {

  @Input() carousel: CuriositiesCarouselItem[] | undefined;

  @Input() bgColor?: string = '';

  startPosition: number = 0;

  customOptions: OwlOptions = {
    center: false,
    mouseDrag: true,
    autoHeight: false,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
        nav: false,
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

  constructor(
    public uploadService: UploadService,
    public sharedFunctionsService: SharedFunctionsService,
  ) { }

  getData(data: SlidesOutputData) {
    if (data && data.startPosition) {
      this.startPosition = data.startPosition;
    } else {
      this.startPosition = 0;
    }
  }

}
