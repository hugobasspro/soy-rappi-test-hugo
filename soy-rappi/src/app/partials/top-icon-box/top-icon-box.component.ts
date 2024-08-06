import { Component, Input } from '@angular/core';
import { TitleDescriptionImage } from 'src/app/utils/strapi/models/partials/title-description-image.interface';
import { StrapiFile } from 'src/app/utils/strapi/upload/models/strapi-file';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-top-icon-box',
  templateUrl: './top-icon-box.component.html',
  styleUrls: ['./top-icon-box.component.scss'],
})
export class TopIconBoxComponent {

  @Input() data: TitleDescriptionImage | undefined;

  @Input() icon: string = '';

  @Input() title: string = '';

  @Input() text: string = '';

  constructor(private uploadService: UploadService) { }

  getImage(item: StrapiFile | undefined) {
    if (item) {
      return this.uploadService.makeUrl(item);
    }
    return '';
  }
}
