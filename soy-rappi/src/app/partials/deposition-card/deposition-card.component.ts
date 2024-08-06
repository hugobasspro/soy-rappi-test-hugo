import { Component, Input } from '@angular/core';
import { DepositionCards } from 'src/app/utils/strapi/models/partials/deposition-cards.interface';
import { StrapiFile } from 'src/app/utils/strapi/upload/models/strapi-file';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-deposition-card',
  templateUrl: './deposition-card.component.html',
  styleUrls: ['./deposition-card.component.scss'],
})
export class DepositionCardComponent {

  @Input() data: DepositionCards | undefined;

  constructor(private uploadService: UploadService) { }

  getImage(item: StrapiFile | undefined) {
    if (item) {
      return this.uploadService.makeUrl(item);
    }
    return '';
  }

}
