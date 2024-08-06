import { Component, Input } from '@angular/core';
import { TitleDescriptionImage } from 'src/app/utils/strapi/models/partials/title-description-image.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-acquire-bag-content',
  templateUrl: './acquire-bag-content.component.html',
  styleUrls: ['./acquire-bag-content.component.scss'],
})
export class AcquireBagContentComponent {

  @Input() benefits?: TitleDescriptionImage[] = [];

  constructor(public uploadService : UploadService) { }

}
