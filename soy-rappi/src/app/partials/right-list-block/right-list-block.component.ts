import { Component, Input } from '@angular/core';
import { TitleRich } from 'src/app/utils/strapi/models/blocks/title-rich.interface';
import { Texts } from 'src/app/utils/strapi/models/partials/texts.interface';

@Component({
  selector: 'app-right-list-block',
  templateUrl: './right-list-block.component.html',
  styleUrls: ['./right-list-block.component.scss'],
})
export class RightListBlockComponent {

  @Input() items?: Texts[] = [];

  @Input() title?: TitleRich;

  @Input() description?: string = '';

  @Input() descriptionListItems?: Texts[] = [];

  constructor() { }

}
