import { Component, Input } from '@angular/core';
import { WelcomeMobileBlock } from 'src/app/utils/strapi/models/blocks/welcom-mobile.interface';
import { StrapiFile } from 'src/app/utils/strapi/upload/models/strapi-file';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-welcome-mobile-block',
  templateUrl: './welcome-mobile-block.component.html',
  styleUrls: ['./welcome-mobile-block.component.scss'],
})
export class WelcomeMobileBlockComponent {
  @Input() data: WelcomeMobileBlock | undefined;

  constructor(private uploadService: UploadService) {}

  getImage(item: StrapiFile | undefined) {
    if (item) {
      return this.uploadService.makeUrl(item);
    }
    return '';
  }
}
