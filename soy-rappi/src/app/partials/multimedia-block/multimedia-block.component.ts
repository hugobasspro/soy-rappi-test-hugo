import { Component, Input } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { MultimediaItemBlock } from 'src/app/utils/strapi/models/blocks/multimedia-item.interface';
import { MultimediaItems } from 'src/app/utils/strapi/models/blocks/multimedia-items.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-multimedia-block',
  templateUrl: './multimedia-block.component.html',
  styleUrls: ['./multimedia-block.component.scss'],
})
export class MultimediaBlockComponent {

  @Input() data: MultimediaItemBlock | undefined;

  @Input() items?: MultimediaItems[] = [];

  @Input() title?: string = '';

  startPosition  : number = 0;

  default_color = 'Papaya Whip'

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

  private colorDict:  Record<string, string> = {
    'Azureish White': '#E1E7F1',
    'Bubbles': '#E9FCF8',
    'Cultured': '#F3F5F9',
    'Floral White': '#FEF8F1',
    'Lavender': '#EEE5FC',
    'Melon': '#FFAFA3',
    'Papaya Whip': '#FFF4D3',
    'White': '#FFFFFF'
  }

  getData(data: SlidesOutputData) {
    if (data && data.startPosition) {
      this.startPosition = data.startPosition;
    } else {
      this.startPosition = 0;
    }
  }

  public getColorCode(name: string): string {
    return this.colorDict[name];
  }
}
