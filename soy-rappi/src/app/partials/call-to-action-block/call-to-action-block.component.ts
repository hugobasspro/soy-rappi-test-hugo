import { Component, Input } from '@angular/core';
import { CallToActionBlock } from '../../utils/strapi/models/blocks/call-to-action.interface';
import { UploadService } from '../../utils/strapi/upload/services/upload.service';
import { StrapiFile } from '../../utils/strapi/upload/models/strapi-file';
import { SharedFunctionsService } from 'src/app/utils/shared/services/functions.service';
import { TitleRich } from 'src/app/utils/strapi/models/blocks/title-rich.interface';
@Component({
  selector: 'app-call-to-action-block',
  templateUrl: './call-to-action-block.component.html',
  styleUrls: ['./call-to-action-block.component.scss'],
})
export class CallToActionBlockComponent {

  @Input() data: CallToActionBlock | undefined;

  @Input() image?: string = '';

  @Input() title?: TitleRich;

  @Input() description?: string = '';

  @Input() btnText?: string = '';

  @Input() btnUrl?: string = '';

  @Input() bgColor?: string = '';

  constructor(private uploadService: UploadService,
              public sharedFunctionsService: SharedFunctionsService) { }

  getImage(item: StrapiFile | undefined) {
    if (item) {
      return this.uploadService.makeUrl(item);
    }
    return '';
  }
}
