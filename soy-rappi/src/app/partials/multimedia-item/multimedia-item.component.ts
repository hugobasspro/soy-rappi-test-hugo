import { Component, Input } from '@angular/core';
import { MultimediaItems } from 'src/app/utils/strapi/models/blocks/multimedia-items.interface';
import { multimedia } from 'src/app/utils/strapi/models/partials/multimedia.enum';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-multimedia-item',
  templateUrl: './multimedia-item.component.html',
  styleUrls: ['./multimedia-item.component.scss'],
})
export class MultimediaItemComponent {

  @Input() data: MultimediaItems | undefined;

  multimediaTypes = multimedia;

  constructor(public uploadService: UploadService) { }

}
