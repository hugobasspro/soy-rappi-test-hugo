import { Component, Input } from '@angular/core';
import { TitleDescriptionImage } from 'src/app/utils/strapi/models/partials/title-description-image.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-benefits-block',
  templateUrl: './benefits-block.component.html',
  styleUrls: ['./benefits-block.component.scss'],
})
export class BenefitsBlockComponent {

  @Input() title?: string = '';

  @Input() benefits?: TitleDescriptionImage[] = [];

  constructor(public uploadService : UploadService) { }
}
