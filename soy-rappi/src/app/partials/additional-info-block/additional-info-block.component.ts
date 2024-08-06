import { Component, Input } from '@angular/core';
import { TitleRich } from 'src/app/utils/strapi/models/blocks/title-rich.interface';

@Component({
  selector: 'app-additional-info-block',
  templateUrl: './additional-info-block.component.html',
  styleUrls: ['./additional-info-block.component.scss'],
})
export class AdditionalInfoBlockComponent {

  @Input() title?:  TitleRich;

  @Input() image: string = '';

  @Input() description?: string = '';

  @Input() smallText?: string = '';

  constructor() { }

}
