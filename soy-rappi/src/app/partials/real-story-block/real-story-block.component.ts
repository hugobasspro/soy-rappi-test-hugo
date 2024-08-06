import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SharedFunctionsService } from 'src/app/utils/shared/services/functions.service';
import { BlogEntry } from 'src/app/utils/strapi/blog/models/blog-categories';

@Component({
  selector: 'app-real-story-block',
  templateUrl: './real-story-block.component.html',
  styleUrls: ['./real-story-block.component.scss'],
})
export class RealStoryBlockComponent {

  @Input() title: undefined | string = '';

  @Input() label: undefined | string = '';

  @Input() data: BlogEntry[] = [];

  @Input() url: undefined | string = '';

  @Output() listItems: EventEmitter<Event> = new EventEmitter();

  customOptions: OwlOptions = {
    center: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 25,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      400: {
        items: 1,
        nav: false,
      },
      740: {
        items: 1,
        nav: true,
      },
      1024: {
        items: 1,
        nav: true,
      },
    },
    nav: true,
  };

  constructor(public sharedFunctionsService: SharedFunctionsService) { }

  openListItems(event: Event) {
    this.listItems.emit();
  }
}
