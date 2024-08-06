import { Component, Input } from '@angular/core';
import { RichListMediaBlock } from 'src/app/utils/strapi/models/blocks/rich-list-media.interface';
import { StrapiFile } from 'src/app/utils/strapi/upload/models/strapi-file';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-rich-text',
  templateUrl: './rich-text.component.html',
  styleUrls: ['./rich-text.component.scss'],
})
export class RichTextComponent {

  @Input() text?: string = '';

  @Input() media?: RichListMediaBlock;

  @Input() image?: StrapiFile;

  @Input() currentStep: number = 0;

  @Input() flag?: boolean = false;

  constructor(public uploadService: UploadService) { }
}
