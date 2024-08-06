import { Component, Input } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { DepositionCard } from 'src/app/utils/strapi/models/blocks/deposition-card.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
@Component({
  selector: 'app-depositions-block',
  templateUrl: './depositions-block.component.html',
  styleUrls: ['./depositions-block.component.scss'],
})
export class DepositionsBlockComponent {

  @Input() data: DepositionCard | undefined;

  @Input() title?: string = '';

  constructor(public uploadService : UploadService) { }

}
