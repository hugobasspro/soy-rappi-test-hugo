import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedFunctionsService } from 'src/app/utils/shared/services/functions.service';
import { BlogEntry } from 'src/app/utils/strapi/blog/models/blog-categories';

@Component({
  selector: 'app-novelties-block',
  templateUrl: './novelties-block.component.html',
  styleUrls: ['./novelties-block.component.scss'],
})
export class NoveltiesBlockComponent {

  @Input() data: BlogEntry[] = [];

  @Input() title: undefined | string = '';

  @Input() label: undefined | string = '';

  @Input() url: undefined | string = '';

  @Output() listItems: EventEmitter<Event> = new EventEmitter();

  constructor(public sharedFunctionsService: SharedFunctionsService) { }

  openListItems(event: Event) {
    this.listItems.emit();
  }
}
