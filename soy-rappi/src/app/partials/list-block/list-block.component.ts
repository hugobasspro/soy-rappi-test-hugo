import { Component, Input } from '@angular/core';
import { TextModel } from 'src/app/utils/strapi/models/partials/text.interface';

@Component({
  selector: 'app-list-block',
  templateUrl: './list-block.component.html',
  styleUrls: ['./list-block.component.scss'],
})
export class ListBlockComponent  {

  @Input() title?: string = '';

  @Input() description?: string = '';

  @Input() items?: TextModel[] = [];

  constructor() { }

}
