import { Component, Input } from '@angular/core';
import { CallToActionBlock } from 'src/app/utils/strapi/models/blocks/call-to-action.interface';
import { TitleRich } from 'src/app/utils/strapi/models/blocks/title-rich.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-rewards-additional-info-block',
  templateUrl: './rewards-additional-info-block.component.html',
  styleUrls: ['./rewards-additional-info-block.component.scss'],
})
export class RewardsAdditionalInfoBlockComponent {

  @Input() data?: CallToActionBlock;

  @Input() title?: TitleRich;

  @Input() text?: string = '';

  @Input() image: string = '';

  constructor(public uploadService: UploadService) { }
}
