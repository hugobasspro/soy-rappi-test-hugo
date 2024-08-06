import { Component, Input } from '@angular/core';
import { RightImageBlock } from 'src/app/utils/strapi/models/blocks/right-image.interface';

@Component({
  selector: 'app-right-multimedia-block',
  templateUrl: './right-multimedia-block.component.html',
  styleUrls: ['./right-multimedia-block.component.scss'],
})
export class RightMultimediaBlockComponent {

  @Input() data?: RightImageBlock | undefined;

  constructor() { }

}
