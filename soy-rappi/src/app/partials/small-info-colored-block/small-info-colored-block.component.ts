import { Component, Input } from '@angular/core';
import { InfoBlock } from 'src/app/utils/strapi/models/blocks/info.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
@Component({
  selector: 'app-small-info-colored-block',
  templateUrl: './small-info-colored-block.component.html',
  styleUrls: ['./small-info-colored-block.component.scss'],
})
export class SmallInfoColoredBlockComponent {

  @Input() data?: InfoBlock;

  // @Input() image: string = '';

  // @Input() text?: InfoTitleBlock[] = [];

  constructor(public uploadService: UploadService) { }

}
