import { Component, Input } from '@angular/core';
import { InfoBlock } from 'src/app/utils/strapi/models/blocks/info.interface';
import { StrapiFile } from 'src/app/utils/strapi/upload/models/strapi-file';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';


@Component({
  selector: 'app-small-info-block',
  templateUrl: './small-info-block.component.html',
  styleUrls: ['./small-info-block.component.scss'],
})
export class SmallInfoBlockComponent {

  @Input() data: InfoBlock | undefined;

  constructor(private uploadService: UploadService) { }

  getImage(item: StrapiFile | undefined) {
    if (item) {
      return this.uploadService.makeUrl(item);
    }
    return '';
  }

}
