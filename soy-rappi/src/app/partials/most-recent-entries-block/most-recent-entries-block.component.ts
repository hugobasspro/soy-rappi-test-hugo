import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { SharedFunctionsService } from 'src/app/utils/shared/services/functions.service';
import { BlogEntry } from 'src/app/utils/strapi/blog/models/blog-categories';

@Component({
  selector: 'app-most-recent-entries-block',
  templateUrl: './most-recent-entries-block.component.html',
  styleUrls: ['./most-recent-entries-block.component.scss'],
})
export class MostRecentEntriesBlockComponent {

  @Input() data: BlogEntry[] = [];

  @Input() title: undefined | string = '';

  @Input() label: undefined | string = '';

  @Input() url: undefined | string = '';

  @Output() listItems: EventEmitter<Event> = new EventEmitter();

  constructor(public sharedFunctionsService: SharedFunctionsService) { }

  openListItems(event: Event) {
    this.listItems.emit();
  }

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

  getData(data: SlidesOutputData) {
    if (data && data.startPosition) {
      this.startPosition = data.startPosition;
    } else {
      this.startPosition = 0;
    }
  }
}
